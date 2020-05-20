import './apm';
import { APP_NAME } from './app.constants';
import { NestFactory } from '@nestjs/core';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { ISchemaConfig } from './config/config.interface';
import { AppModule } from './app.module';
import {
  IRollbarOptions,
  RollbarInitializer,
  ILogger,
} from '@open-commerce/rollbar';
import { ErrorFilter } from './errors.filter';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

let logger: LoggerService = null;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ISchemaConfig = app.get(CONFIG_TOKEN);
  logger = app.get<LoggerService>(LoggerService);
  app.useLogger(logger);

  RollbarInitializer.configureNestAppIfNecessary(
    app,
    (logger as unknown) as ILogger,
    process.env as IRollbarOptions,
  );

  app.useGlobalFilters(new ErrorFilter());
  await app.listen(config.port);
  logger.log('Is listening on ' + config.port.toString(), APP_NAME);
}

bootstrap().catch(e => {
  logger.error('Failed to bootstrap', e.toString(), APP_NAME);
  throw e;
});
