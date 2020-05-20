import { Query, Resolver, Args, Mutation, Info } from '@nestjs/graphql';
import { GeoLocationDto, IFeaturesResponse } from '@open-commerce/data-objects';
import { IFeatureEnabledResponse } from '@open-commerce/data-objects';
import { GraphQLResolveInfo } from 'graphql';
import { DaveBustersService } from '../services/dave-busters.service';

@Resolver('AdminResolver')
export class AdminResolver {
  constructor(private readonly daveBustersService: DaveBustersService) {}

  @Query('adminFeatures')
  public async adminFeatures(
    @Info() resolveInfo: GraphQLResolveInfo,
  ): Promise<IFeaturesResponse> {
    return await this.daveBustersService.adminFeatures(resolveInfo);
  }

  @Query('adminIsFeatureEnabled')
  public async adminIsFeatureEnabled(
    @Args('name') name: string,
    @Args('storeId') storeId: number,
  ): Promise<boolean> {
    return await this.daveBustersService.adminIsFeatureEnabled(name, storeId);
  }

  @Query('adminIsFeatureEnabledForLatAndLong')
  public async adminIsFeatureEnabledForLatAndLong(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('name') name: string,
    @Args('geoLocation') geoLocation: GeoLocationDto,
  ): Promise<IFeatureEnabledResponse> {
    return await this.daveBustersService.adminIsFeatureEnabledForLatAndLong(
      resolveInfo,
      name,
      geoLocation,
    );
  }

  @Mutation('adminFeatureEnableForStore')
  public async adminFeatureEnableForStore(
    @Args('name') name: string,
    @Args('enabled') enabled: boolean,
    @Args('storeId') storeId: number,
  ): Promise<boolean> {
    return await this.daveBustersService.adminFeatureEnableForStore(
      name,
      enabled,
      storeId,
    );
  }
}
