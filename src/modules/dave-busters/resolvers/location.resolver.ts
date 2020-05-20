import { Resolver, Query, Args, Info } from '@nestjs/graphql';
import { ILocationConnection } from '../interfaces/location-connection.interface';
import { UseGuards } from '@nestjs/common';
import { LocationFilterDto } from '../dtos/location-filter.dto';
import { JwtAuthGuard } from '../../authorization/services/auth-guard.service';
import { GraphQLResolveInfo } from 'graphql';
import { DaveBustersService } from '../services/dave-busters.service';

@Resolver('Location')
@UseGuards(JwtAuthGuard)
export class LocationResolver {
  constructor(private readonly daveBustersService: DaveBustersService) {}

  @Query('locations')
  public async locations(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('filter') filter: LocationFilterDto,
  ): Promise<ILocationConnection> {
    return await this.daveBustersService.locations(resolveInfo, filter);
  }
}
