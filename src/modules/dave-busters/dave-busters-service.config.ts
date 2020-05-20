import { InjectableConfig } from '@open-commerce/nestjs-config';

export const DAVE_BUSTERS_CONFIG_TOKEN = 'DAVE_BUSTERS_CONFIG_TOKEN';

export class DaveBustersServiceConfig extends InjectableConfig {
  public static CONFIG_KEY = 'daveBusters';

  public toggleAppRatingPopup: boolean;
  public toggleRemovePowercardButton: boolean;
  public payAtTableTipLabels: number[];
}
