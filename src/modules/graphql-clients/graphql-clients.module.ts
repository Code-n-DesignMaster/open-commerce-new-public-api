import { Module, Global } from '@nestjs/common';
import { graphqlClientsProviders } from './graphql-clients.providers';

@Global()
@Module({
  providers: graphqlClientsProviders,
  exports: graphqlClientsProviders,
})
export class GraphqlClientsModule {}
