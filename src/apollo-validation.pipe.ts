import { ValidationPipe, ArgumentMetadata } from '@nestjs/common';
import { ApolloError, ValidationError } from 'apollo-server-core';
import { get } from 'lodash';

export const VALIDATION_ERROR = 'VALIDATION_ERROR';

export class ApolloValidationPipe extends ValidationPipe {
  public async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (error) {
      if (error instanceof ApolloError) {
        throw error;
      }
      const validationErrors: ValidationError[] = get(
        error,
        'message.message',
        [],
      );

      const message = this.proceedValidationErrors(validationErrors).join('; ');

      throw new ApolloError(message, VALIDATION_ERROR, {
        details: error,
      });
    }
  }

  private proceedValidationErrors(validationErrors: ValidationError[]) {
    return validationErrors.reduce((messages, veMessage: ValidationError) => {
      const childrenMessages = [];
      if (veMessage.constraints) {
        childrenMessages.push(this.getErrorMessage(veMessage));
      }
      if (veMessage.children.length) {
        childrenMessages.push(
          ...this.proceedValidationErrors(veMessage.children),
        );
      }
      return messages.concat(childrenMessages);
    }, []);
  }

  private getErrorMessage(error) {
    return Object.values(error.constraints);
  }
}
