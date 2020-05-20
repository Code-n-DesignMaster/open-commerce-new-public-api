import { Resolver, Query, Info, ResolveField } from '@nestjs/graphql';
import { IAppConfig, IPowercardImagePack } from '@open-commerce/data-objects';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { CustomerService } from '../../customer/customer.service';
import { GraphQLResolveInfo } from 'graphql';
import { IImage } from '../interfaces/image.interface';
import { DaveBustersService } from '../services/dave-busters.service';

@Resolver('AppConfig')
export class AppConfigResolver {
  protected loggerContext: string = this.constructor.name;

  constructor(
    private readonly customerService: CustomerService,
    private readonly logger: LoggerService,
    private readonly daveBustersService: DaveBustersService,
  ) {}

  @Query('appConfig')
  public async appConfig(): Promise<IAppConfig> {
    const appConfig = await this.daveBustersService.appConfig();
    const customerServiceConfig = await this.customerService.getCustomerConfig();
    this.logger.debug(
      {
        msg: `processing response appConfig response from internal api`,
        appConfig: JSON.stringify(appConfig),
      },
      this.loggerContext,
    );
    appConfig.paymentConfig = {
      maxAllowedPaymentCards: customerServiceConfig.maxAllowedPaymentCards,
    };
    return appConfig as IAppConfig;
  }

  @ResolveField('promoImages')
  public async promoImages(
    @Info() resolveInfo: GraphQLResolveInfo,
  ): Promise<IImage[]> {
    return await this.daveBustersService.promoImages(resolveInfo);
  }

  @ResolveField('powercardImages')
  public async powercardImages(
    @Info() resolveInfo: GraphQLResolveInfo,
  ): Promise<IPowercardImagePack[]> {
    return await this.daveBustersService.powercardImages(resolveInfo);
  }
}
