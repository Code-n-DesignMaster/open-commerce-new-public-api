import { HttpException } from '@nestjs/common';

export const OC_CLIENT_UPDATE_REQUIRED_ERROR =
  'OC_CLIENT_UPDATE_REQUIRED_ERROR';

export class OCClientUpdateRequiredError extends HttpException {
  constructor(
    message: string = 'Please download the latest version to continue using the app.',
  ) {
    super(
      {
        errors: [
          {
            message,
            extensions: {
              code: OC_CLIENT_UPDATE_REQUIRED_ERROR,
            },
          },
        ],
      },
      200,
    );

    Object.defineProperty(this, 'name', {
      value: 'OCClientUpdateRequiredError',
    });
  }
}
