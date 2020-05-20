import { IsEmail, IsInt, ValidateNested } from 'class-validator';
import { DemographicsDto } from './demographics.dto';
import { NameDto } from './name.dto';
import { Type } from 'class-transformer';

export class CustomerRegistrationCompleteDto {
  public acceptAgreement: string[];

  @IsEmail(undefined, {
    message: 'Please enter a valid email address',
  })
  public email: string;

  public name: NameDto;

  @ValidateNested()
  @Type(() => DemographicsDto)
  public demographics: DemographicsDto;

  @Type(() => Number)
  @IsInt()
  public defaultLocationId: number;
}
