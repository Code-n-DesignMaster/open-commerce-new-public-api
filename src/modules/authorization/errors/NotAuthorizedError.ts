import { AuthServiceError } from './AuthServiceError';

export class NotAuthorizedError extends AuthServiceError {
  constructor(message?: string) {
    super(message);
    // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = NotAuthorizedError.name; // stack traces display correctly now
  }
}
