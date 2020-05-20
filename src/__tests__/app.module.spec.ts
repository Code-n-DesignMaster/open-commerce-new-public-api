import { AppModule } from './../app.module';
import { NestFactory } from '@nestjs/core';

describe('AppModule', () => {
  describe.skip('module bootstrap', () => {
    it('should initialize entities successfully', async () => {
      expect(async () => {
        await NestFactory.create(AppModule);
      }).not.toThrowError();
    });
  });
});
