import { ApolloError } from 'apollo-server-core';

export class BaseError extends ApolloError {
  constructor(message: string, code: string) {
    super(message, code);

    Object.defineProperty(this, 'name', {
      value: this.constructor.name,
    });
  }

  public toJSON() {
    const alt = {};
    Object.getOwnPropertyNames(this).forEach(function(key) {
      alt[key] = this[key];
    }, this);
    return alt;
  }
}
