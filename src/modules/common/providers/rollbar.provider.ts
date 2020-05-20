import { ROLLBAR_TOKEN } from '../constants/common.constant';
import { provideConfig } from '@open-commerce/nestjs-config';
import { RollbarConfig } from '../rollbar.config';

export const rollbarProvider = provideConfig(ROLLBAR_TOKEN, RollbarConfig);
