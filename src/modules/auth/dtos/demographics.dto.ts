import { IsString, Matches } from 'class-validator';

export class DemographicsDto {
  public gender: string;
  public zipCode: string;

  @IsString()
  @Matches(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/, {
    message: 'birthday should be in YYYY-MM-DD format',
  })
  public birthday: string;
  public customDemographics: object;
}
