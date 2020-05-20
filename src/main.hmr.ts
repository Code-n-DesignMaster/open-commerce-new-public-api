import { NestFactory } from '@nestjs/core';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { AppModule } from './app.module';
import { ISchemaConfig } from './config/config.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

declare const module: any;
declare const logger: LoggerService;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ISchemaConfig = app.get(CONFIG_TOKEN);
  await app.listen(config.port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap().catch(e => {
  logger.error('Failed to bootstrap', e, 'new public api main.hmr');
});
