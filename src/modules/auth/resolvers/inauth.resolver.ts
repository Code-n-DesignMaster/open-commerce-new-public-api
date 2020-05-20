import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InAuthDeviceRegistrationRequestInputDto } from '../dtos/inauth-device-registration-request-input.dto';
import { IInAuthDeviceRegistrationResponse } from '../interfaces/inauth-device-registration-response.interface';
import { Viewer } from '../../common/decorators/viewer.decorator';
import { IViewer } from '../../common/interfaces/viewer.interface';
import { AuthClientService } from '../services/auth-client.service';
import { IInAuthGetSigfilesResponse } from '../interfaces/inauth-get-sigfiles-response.interface';
import { InauthTrustScoreValueInputDto } from '../dtos/inauth-trust-score-value-input.dto';

@Resolver()
export class InAuthResolver {
  constructor(private readonly authService: AuthClientService) {}

  @Mutation('inauthDeviceTrustScoreThresholdUpdate')
  public async inauthDeviceTrustScoreThresholdUpdate(
    @Args('input') input: InauthTrustScoreValueInputDto,
  ): Promise<boolean> {
    return await this.authService.inauthDeviceTrustScoreThresholdUpdate(input);
  }

  @Mutation('inauthDeviceBlacklistRemove')
  public async inauthDeviceBlacklistRemove(
    @Args('deviceId') deviceId: string,
  ): Promise<boolean> {
    return await this.authService.inauthDeviceBlacklistRemove(deviceId);
  }

  @Mutation('inauthBlacklistedDeviceUnblockedStatusSet')
  public async inauthBlacklistedDeviceUnblockedStatusSet(
    @Args('deviceId') deviceId: string,
    @Args('unblockedStatus') unblockedStatus: boolean,
  ): Promise<boolean> {
    return await this.authService.inauthBlacklistedDeviceUnblockedStatusSet(
      deviceId,
      unblockedStatus,
    );
  }

  @Mutation()
  public async inAuthMobileDeviceRegister(
    @Args('input') input: InAuthDeviceRegistrationRequestInputDto,
    @Viewer() viewer: IViewer,
  ): Promise<IInAuthDeviceRegistrationResponse> {
    const { payload } = input;
    const { deviceId } = viewer;
    return await this.authService.inAuthMobileDeviceRegister(deviceId, payload);
  }

  @Query()
  public async inAuthGetSigfiles(
    @Viewer() viewer: IViewer,
  ): Promise<IInAuthGetSigfilesResponse> {
    const { deviceId, osType } = viewer;
    return await this.authService.inAuthGetSigfiles(deviceId, osType);
  }
}
