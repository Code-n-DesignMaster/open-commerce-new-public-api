import { PipeTransform } from '@nestjs/common';
import { OCPayAtTableInvalidRatingError } from '../../../errors/OCPayAtTableInvalidRatingError';

export class ValidateNumberOfStars implements PipeTransform {
  public transform(numberOfStars: number) {
    numberOfStars = Math.trunc(numberOfStars);

    if (!this.isNumberOfStarsIsValid(numberOfStars)) {
      throw new OCPayAtTableInvalidRatingError();
    }

    return numberOfStars;
  }

  private isNumberOfStarsIsValid(numberOfStars: number): boolean {
    if (numberOfStars < 1 || numberOfStars > 5) {
      return false;
    }
    return true;
  }
}
