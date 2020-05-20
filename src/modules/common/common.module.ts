import { Module } from '@nestjs/common';
import { COMMON_CONFIG_TOKEN } from './common.config';
import { provideConfig } from '@open-commerce/nestjs-config';
import { GraphQLModule } from '@nestjs/graphql';
import { DirectivesModule } from '../directives/directives.module';
import {
  ROLLBAR_TOKEN,
  VIEWER_FACTORY_TOKEN,
} from './constants/common.constant';
import { commonProviders } from './providers/common.providers';
import { GraphqlConfig, GRAPHQL_CONFIG_TOKEN } from './graphql.config';

@Module({
  imports: [
    GraphQLModule.forRootAsync(
      provideConfig(GRAPHQL_CONFIG_TOKEN, GraphqlConfig, [DirectivesModule]),
    ),
  ],
  providers: commonProviders,
  exports: [VIEWER_FACTORY_TOKEN, ROLLBAR_TOKEN, COMMON_CONFIG_TOKEN],
})
export class CommonModule {}
