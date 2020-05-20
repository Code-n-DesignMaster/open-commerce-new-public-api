import { AuthClientService } from '../auth/services/auth-client.service';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { SchemaDirectiveVisitor } from 'graphql-tools';
import { GraphQLField, GraphQLArgument, GraphQLObjectType } from 'graphql';
import { IViewer } from '../common/interfaces/viewer.interface';
// import { OCClientUpdateRequiredError } from '../../errors/OCClientUpdateRequiredError';
// import { IInAuthPayloadValidateResponse } from '../auth/interfaces/inauth-payload-validate-response.interface';
import { IInAuthPayloadOptions } from '../auth/interfaces/inauth-payload-options';

@Injectable()
export class InAuthDirective {
  public static DIRECTIVE_NAME = 'inAuthPayloadValidate';

  @Inject()
  private authService: AuthClientService;

  public async validatePayload(input: IInAuthPayloadOptions) {
    // if (this.authService.inAuthTestModeEnabled()) {
    //   return {
    //     success: true,
    //   } as IInAuthPayloadValidateResponse;
    // } else if (!input.inAuthLogPayload) {
    //   throw new OCClientUpdateRequiredError();
    // }
    return this.authService.inAuthPayloadValidate({
      auth: input.auth,
      deviceId: input.deviceId,
      deviceIpAddress: input.deviceIpAddress,
      transactionId: input.transactionId,
      inAuthLogPayload: input.inAuthLogPayload,
    });
  }

  public build(): typeof SchemaDirectiveVisitor {
    const self = this;
    // tslint:disable-next-line: max-classes-per-file
    class Directive extends SchemaDirectiveVisitor {
      public visitArgumentDefinition(
        arg: GraphQLArgument,
        details: {
          field: GraphQLField<any, any>;
          objectType: GraphQLObjectType;
        },
      ) {
        const originalResolve = details.field.resolve;
        details.field.resolve = async (source, args, context, info) => {
          const fieldValue = args[details.field.name];
          const viewer = context.req.viewer as IViewer;

          new Logger().error('RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR', 'DIRECTIVE');

          await self.validatePayload({
            auth: context.req.auth,
            inAuthLogPayload: fieldValue,
            deviceId: viewer.deviceId,
            deviceIpAddress: viewer.deviceIpAddress,
            transactionId: viewer.traceId,
          });
          return originalResolve(source, args, context, info);
        };
      }
    }

    return Directive;
  }
}
