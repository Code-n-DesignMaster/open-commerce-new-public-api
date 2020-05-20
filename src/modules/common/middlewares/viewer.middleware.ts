import {
  Inject,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { LoggerService } from '@open-commerce/nestjs-logger';

import { IViewer } from '../interfaces/viewer.interface';
import { VIEWER_FACTORY_TOKEN } from '../constants/common.constant';
// import { CommonConfig, COMMON_CONFIG_TOKEN } from '../common.config';
import { get } from 'lodash';
// import { OCClientUpdateRequiredError } from '../../../errors/OCClientUpdateRequiredError';
import { API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN } from '../../graphql-clients/graphql-clients.constants';
import { ApiVerificationGraphqlClientService } from '../../graphql-clients/clients/api-verification-graphql-client.service';
import { OS_TYPE } from '../constants/os-type.enum';

@Injectable()
export class ViewerMiddleware implements NestMiddleware {
  // private readonly loggerContext = this.constructor.name;

  constructor(
    // @Inject(COMMON_CONFIG_TOKEN)
    // private readonly config: CommonConfig,
    @Inject(VIEWER_FACTORY_TOKEN) private readonly viewerFactory,
    private readonly logger: LoggerService,
    @Inject(API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private readonly apiVerificationGraphqlClient: ApiVerificationGraphqlClientService,
  ) {}

  // tslint:disable-next-line: ban-types
  public async use(req: any, res: any, next: Function) {
    const apiKey: string = get(req, 'headers.x-api-key');

    if (!req.is('json') || !apiKey) {
      throw new UnauthorizedException('x-api-key is required');
    }

    const deviceId = req.headers['device-id'];
    const language = req.headers['accept-language'];
    const traceId = req.headers['trace-id'];

    // iOS version looks like: iOS/1.3/20191020.78
    // android version looks like: Android/329921/0

    const rawValue: string =
      (req.headers.appversion as string) || (req.headers.AppVersion as string);
    const versionComponents = rawValue ? rawValue.split('/') : null;
    const osTypeRawValue = versionComponents ? versionComponents[0] : null;
    const osType = osTypeRawValue === 'Android' ? OS_TYPE.ANDROID : OS_TYPE.IOS;
    const versionIndex = osType === OS_TYPE.IOS ? 2 : 1;
    const appVersion = versionComponents
      ? versionComponents[versionIndex]
      : null;

    const deviceIpAddress =
      req.header('x-forwarded-for') ||
      (req.ip ? req.ip.replace('::ffff:', '') : '1.1.1.1');

    // this.validateAppVersion(osType, Number(appVersion));

    const viewer: IViewer = this.viewerFactory.create(
      apiKey,
      deviceId,
      osType,
      language,
      traceId,
      deviceIpAddress,
      appVersion,
    );

    try {
      await this.apiVerificationGraphqlClient.verifyApiKey(apiKey);
    } catch (err) {
      this.logger.error(
        'Failed to verifyApiKey',
        JSON.stringify(err),
        this.constructor.name,
      );
      throw new UnauthorizedException(err.message);
    }

    this.logger.log(`api key verified`, this.constructor.name);

    req.viewer = viewer;

    next();
  }

  // private validateAppVersion(osType: OS_TYPE, appVersion: number): boolean {
  //   const minimumAppVersion = {
  //     ANDROID: this.config.minimumAppVersionAndroid,
  //     IOS: this.config.minimumAppVersionIos,
  //   };
  //
  //   if (minimumAppVersion[osType] > appVersion) {
  //     this.logger.error(
  //       {
  //         msg: 'client update required',
  //         deviceOsType: osType,
  //         deviceVersion: appVersion,
  //         currentVersion: minimumAppVersion[osType],
  //         method: 'validateAppVersion',
  //       },
  //       null,
  //       this.loggerContext,
  //     );
  //
  //     throw new OCClientUpdateRequiredError();
  //   }
  //
  //   return true;
  // }
}
