import { InjectableConfig } from '@open-commerce/nestjs-config';
import { IsUrl } from 'class-validator';

export class PowercardServiceConfig extends InjectableConfig {
  public CONFIG_KEY = 'powercard';

  @IsUrl({
    require_tld: false,
  })
  public url: string;
}
