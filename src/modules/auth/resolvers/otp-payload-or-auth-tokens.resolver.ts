import { Resolver, ResolveField } from '@nestjs/graphql';

@Resolver('CustomerOTPPayloadOrAuthTokens')
export class OtpPayloadOrAuthTokensResolver {
  @ResolveField()
  public async __resolveType(obj) {
    if ('tokens' in obj) {
      return 'AuthTokens';
    }
    return 'CustomerOTPPayload';
  }
}
