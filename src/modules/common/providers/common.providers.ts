import { viewerFactoryProvider } from './viewer-factory.provider';
import { rollbarProvider } from './rollbar.provider';
import { provideConfig } from '@open-commerce/nestjs-config';
import { CommonConfig, COMMON_CONFIG_TOKEN } from '../common.config';
import { Provider } from '@nestjs/common';

export const commonProviders: Provider[] = [
  viewerFactoryProvider,
  rollbarProvider,
  provideConfig(COMMON_CONFIG_TOKEN, CommonConfig),
];
