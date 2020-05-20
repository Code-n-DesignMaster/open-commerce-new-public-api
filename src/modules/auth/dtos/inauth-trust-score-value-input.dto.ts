import { Max, Min } from 'class-validator';

export class InauthTrustScoreValueInputDto {
  @Min(0, {
    message: 'value must be greater or equal than 0',
  })
  @Max(100, {
    message: 'value must be less than or equal 100',
  })
  public value: number;
}
