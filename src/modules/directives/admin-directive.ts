import { Injectable, Inject } from '@nestjs/common';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import { GraphQLField, defaultFieldResolver } from 'graphql';
import { IViewer } from '../common/interfaces/viewer.interface';
import { AuthClientService } from '../auth/services/auth-client.service';
import { OCNotAuthorizedError } from '../../errors/OCNotAuthorizedError';

@Injectable()
export class AdminDirective {
  public static DIRECTIVE_NAME = 'adminOnly';

  @Inject()
  private authService: AuthClientService;

  public async validateAdminApiKey(apiKey: string) {
    const result = await this.authService.verifyAdminApiKey(apiKey);
    if (!result) {
      throw new OCNotAuthorizedError();
    }

    return true;
  }

  public build(): typeof SchemaDirectiveVisitor {
    const self = this;
    // tslint:disable-next-line: max-classes-per-file
    class Directive extends SchemaDirectiveVisitor {
      public visitFieldDefinition(field: GraphQLField<any, any>) {
        const originalResolve = field.resolve || defaultFieldResolver;
        field.resolve = async (
          source: any,
          args: any,
          context: any,
          info: any,
        ) => {
          const viewer = context.req.viewer as IViewer;
          await self.validateAdminApiKey(viewer.apiKey);
          return originalResolve(source, args, context, info);
        };
      }
    }

    return Directive;
  }
}
