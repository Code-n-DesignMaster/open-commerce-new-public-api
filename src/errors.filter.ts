import { ExceptionFilter, Catch, ExecutionContext } from '@nestjs/common';
import { ApolloError } from 'apollo-server-core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Catch(ApolloError)
export class ErrorFilter implements ExceptionFilter {
  public catch(error: Error, host: ExecutionContext) {
    // this.logger.error('caught error', error.stack, 'ErrorFilter');

    // this error handler catches all apolloerrors and do the formatting in the following way:
    // https://www.apollographql.com/docs/apollo-server/features/errors.html
    // this is needed if the ApolloError was thrown outside of the resolvers scope, such as auth.middleware errors
    const ctx = GqlExecutionContext.create(host);
    const response = ctx.getContext().res;
    return response.status(200).json({
      data: null,
      errors: [
        {
          ...error,
        },
      ],
    });
  }
}
