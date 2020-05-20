import { InjectableConfig } from '@open-commerce/nestjs-config';
import { GqlModuleOptions } from '@nestjs/graphql';
import * as OCScalarTypes from '@open-commerce/scalar-types';

export const GRAPHQL_CONFIG_TOKEN = 'GRAPHQL_CONFIG_TOKEN';

export class GraphqlConfig extends InjectableConfig
  implements GqlModuleOptions {
  public static CONFIG_KEY = 'graphql';

  public debug: boolean;
  public playground: boolean;

  public context = ({ req, res }) => ({ req, res });

  public get resolvers() {
    return {
      ...OCScalarTypes,
    };
  }
}
