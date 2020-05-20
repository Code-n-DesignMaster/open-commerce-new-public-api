import { AuthModule } from './../auth/auth.module';
import { Module, MiddlewareConsumer, Inject } from '@nestjs/common';
import { CustomerModule } from '../customer/customer.module';
import { CommonModule } from '../common/common.module';
import { daveBustersProviders } from './dave-busters.providers';
import {
  WALLET_PROXY_PATH,
  CUSTOMER_PROXY_PATH,
} from './dave-busters.constants';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { createProxyMiddleware } from 'http-proxy-middleware';
import {
  GraphqlServiceDirectory,
  SERVICE_NAME,
} from '@open-commerce/db-internal-service-client';
import { GRAPHQL_SERVICE_DIRECTORY_TOKEN } from '../graphql-clients/graphql-clients.constants';

@Module({
  imports: [AuthModule, CommonModule, CustomerModule],
  providers: daveBustersProviders,
})
export class DaveBustersModule {
  private readonly loggerContext = this.constructor.name;

  constructor(
    @Inject(GRAPHQL_SERVICE_DIRECTORY_TOKEN)
    private readonly graphqlServiceDirectory: GraphqlServiceDirectory,
    private logger: LoggerService,
  ) {}

  /**
   * Apply http-proxy-middleware for Gateway Routes.
   * For more information, see: https://github.com/chimurai/http-proxy-middleware
   * @param consumer
   */
  public configure(consumer: MiddlewareConsumer) {
    const mobilePassServiceUrl = new URL(
      this.graphqlServiceDirectory.getServiceUrl(SERVICE_NAME.PASS_MANAGEMENT),
    );
    const customerServiceUrl = new URL(
      this.graphqlServiceDirectory.getServiceUrl(SERVICE_NAME.CUSTOMER),
    );

    const restream = (proxyReq: any, req: any) => {
      // this hack is needed because body-parser is installed somewhere above in the stack of middlewares
      // so we need to stringify json payload again and pass to target server
      if (req.body && req.is('application/json')) {
        const bodyData = JSON.stringify(req.body);
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        // stream the content
        proxyReq.write(bodyData);
      }
    };

    this.logger.info(
      {
        msg: 'Setting up proxy for wallet pass service',
        path: WALLET_PROXY_PATH,
        target: mobilePassServiceUrl.origin,
        mobilePassServiceUrl,
      },
      this.loggerContext,
    );

    const walletPassMiddleware = createProxyMiddleware({
      target: mobilePassServiceUrl.origin,
      logLevel: 'warn',
      changeOrigin: true,
      prependPath: false,
      onProxyReq: restream,
    });

    consumer
      .apply(walletPassMiddleware as () => any)
      .forRoutes(WALLET_PROXY_PATH);

    this.logger.log(
      {
        msg: 'Setting up proxy for customer service',
        path: CUSTOMER_PROXY_PATH,
        target: customerServiceUrl.origin,
        customerServiceUrl,
      },
      this.loggerContext,
    );

    const customerMiddleware = createProxyMiddleware({
      target: customerServiceUrl.origin,
      logLevel: 'warn',
      changeOrigin: true,
      prependPath: false,
    });

    consumer
      .apply(customerMiddleware as () => any)
      .forRoutes(CUSTOMER_PROXY_PATH);
  }
}
