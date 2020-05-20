import { Test, TestingModule } from '@nestjs/testing';
import { MocksService } from '@open-commerce/nestjs-mocks';
import { GraphQLModule, GqlModuleOptions } from '@nestjs/graphql';
import { GqlOptionsService } from '../src/modules/common/services/graphql-options.service';
import { ConfigModule } from '../src/config/config.module';
import * as resolvers from '../src/mocks/resolvers';
import { CONFIG } from '../src/config/config.constants';
import { MocksModule } from '@open-commerce/nestjs-mocks/dist';

// tslint:disable-next-line: no-var-requires
// const schema = require('../src/config/schema').schema;

describe('GraphQLOptionsService', () => {
  let moduleFixture: TestingModule;
  let app;
  let gqlSchemaOptions: GqlModuleOptions;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [
        ConfigModule,
        GraphQLModule.forRootAsync({
          imports: [
            ConfigModule,
            MocksModule.forRoot({
              typePath: './src/**/mocks/gqls/**/*.graphql',
              resolvers,
            }),
          ],
          useFactory: (
            config,
            mocksService: MocksService,
          ): GqlModuleOptions => {
            const optionsService = new GqlOptionsService(config, mocksService);
            gqlSchemaOptions = optionsService.createGqlOptions();
            return gqlSchemaOptions;
          },
          inject: [CONFIG, MocksService],
        }),
      ],
    }).compile();

    return null;
  });

  // it('should be constructed', () => {
  //   expect(gqlOptionsService).toBeDefined();
  // });
  //
  // it('has defined its services', () => {
  //   const services = (gqlOptionsService as any).services;
  //   expect(services.length).toBeGreaterThan(0);
  // });
  //
  // it('should create gql options', async () => {
  //   const gqlSchemaOptions = await gqlOptionsService.createGqlOptions();
  //
  //   expect(gqlSchemaOptions).toBeDefined();
  //   expect(gqlSchemaOptions).toMatchSnapshot();
  //
  //   app = await moduleFixture.createNestApplication();
  //   return await app.init();
  // });

  it('should call transformSchema', async () => {
    // It solution doesn't work!
    // better to discuss it.
    const spy = jest.spyOn(gqlSchemaOptions, 'transformSchema');

    app = await moduleFixture.createNestApplication();
    await app.init();
    return expect(spy).toHaveBeenCalled();
  });

  it.skip('should create gql options', async () => {
    const spy = jest.spyOn(gqlSchemaOptions, 'transformSchema');

    app = await moduleFixture.createNestApplication();
    await app.init();
    return expect(spy.mock.calls[0]).toMatchSnapshot();
  });

  it.skip('should create gql options', async () => {
    const spy = jest.spyOn(gqlSchemaOptions, 'transformSchema');

    app = await moduleFixture.createNestApplication();
    await app.init();
    return expect(spy.mock.results[0].value).resolves.toMatchSnapshot();
  });

  afterEach(() => {
    // dirty hack, should remove it.
    if (app) {
      app.close();
    }
  });
});
