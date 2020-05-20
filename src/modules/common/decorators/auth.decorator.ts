import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { OCNotAuthorizedError } from '../../../errors/OCNotAuthorizedError';

export const Auth = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const context = GqlExecutionContext.create(ctx);
  const auth = context.getContext().req.auth;

  if (!auth) {
    throw new OCNotAuthorizedError();
  }

  return auth;
});
