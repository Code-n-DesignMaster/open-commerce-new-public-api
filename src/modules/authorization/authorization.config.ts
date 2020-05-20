import { InjectableConfig } from '@open-commerce/nestjs-config';
import { IsNotEmpty } from 'class-validator';

export const AUTHORIZATION_CONFIG_TOKEN = 'AUTHORIZATION_CONFIG_TOKEN';

export class AuthorizationConfig extends InjectableConfig {
  public static CONFIG_KEY = 'authorization';

  @IsNotEmpty()
  public trustedIssuer: string;

  @IsNotEmpty()
  public jwksUri: string;
}
