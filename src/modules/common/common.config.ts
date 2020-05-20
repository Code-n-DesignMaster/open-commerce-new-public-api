import { InjectableConfig } from '@open-commerce/nestjs-config';
import { IsUrl, IsNotEmpty } from 'class-validator';

export const COMMON_CONFIG_TOKEN = 'COMMON_CONFIG_TOKEN';

export class CommonConfig extends InjectableConfig {
  public static CONFIG_KEY = 'common';

  @IsNotEmpty()
  @IsUrl({
    require_tld: false,
  })
  public apiVerificationUrl: string;
  public minimumAppVersionAndroid: number;
  public minimumAppVersionIos: number;
}
