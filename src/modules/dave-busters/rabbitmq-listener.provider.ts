import { RABBITMQ_LISTENER_TOKEN } from './dave-busters.constants';
import { RabbitmqListenerService } from './services/rabbitmq-listener.service';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { RabbitmqService } from '@open-commerce/nestjs-rabbitmq';
import { PubSub } from 'graphql-subscriptions';

export const rabbitmqListenerProvider = {
  provide: RABBITMQ_LISTENER_TOKEN,
  useFactory: async (
    logger: LoggerService,
    rabbitmq: RabbitmqService,
    pubSub: PubSub,
  ) => {
    const rabbitmqListener = new RabbitmqListenerService(
      logger,
      rabbitmq,
      pubSub,
    );
    await rabbitmqListener.startListeningToQueues();
    return rabbitmqListener;
  },
  inject: [LoggerService, RabbitmqService, PubSub],
};
