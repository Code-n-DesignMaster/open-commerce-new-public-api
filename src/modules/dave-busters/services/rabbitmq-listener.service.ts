import {
  QueueOptionsDto,
  BuildQueueDto,
  RabbitmqService,
  BuildExchangeDto,
} from '@open-commerce/nestjs-rabbitmq';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { PubSub } from 'graphql-subscriptions';

const STUZO_EXCHANGE_DETAILS = {
  exchangeName: 'STUZO',
  type: 'fanout',
} as BuildExchangeDto;

const PAY_AT_TABLE_CHECK_UPDATE_QUEUE_DETAILS = {
  queueName: 'PAY_AT_TABLE-checkUpdated',
  options: {
    durable: true,
    noAck: true,
  } as QueueOptionsDto,
} as BuildQueueDto;

const PAY_AT_TABLE_TABLE_UPDATE_QUEUE_DETAILS = {
  queueName: 'PAY_AT_TABLE-tableUpdated',
  options: {
    durable: true,
    noAck: true,
  } as QueueOptionsDto,
} as BuildQueueDto;

export class RabbitmqListenerService {
  private readonly loggerContext = this.constructor.name;
  constructor(
    private logger: LoggerService,
    private readonly rabbitmqClient: RabbitmqService,
    private readonly pubSub: PubSub,
  ) {}

  public async startListeningToQueues() {
    // Initialize checkUpdated queue
    await this.rabbitmqClient.initialize(
      [PAY_AT_TABLE_CHECK_UPDATE_QUEUE_DETAILS],
      [STUZO_EXCHANGE_DETAILS],
    );

    // Initialize tableUpdated queue
    await this.rabbitmqClient.initialize(
      [PAY_AT_TABLE_TABLE_UPDATE_QUEUE_DETAILS],
      [STUZO_EXCHANGE_DETAILS],
    );

    const options = {
      noAck: true,
    } as QueueOptionsDto;

    // Define handler for when messages arrive
    const checkUpdatedHandler = async message => {
      await this.handleInboundCheckUpdateMessages(message);
    };

    // Start listening to queue
    this.rabbitmqClient.consumeFromQueue(
      PAY_AT_TABLE_CHECK_UPDATE_QUEUE_DETAILS.queueName,
      checkUpdatedHandler,
      options,
    );

    // Define handler for when messages arrive
    const tableUpdatedHandler = async message => {
      await this.handleInboundTableUpdateMessages(message);
    };

    // Start listening to queue
    this.rabbitmqClient.consumeFromQueue(
      PAY_AT_TABLE_TABLE_UPDATE_QUEUE_DETAILS.queueName,
      tableUpdatedHandler,
      options,
    );
  }

  public async handleInboundCheckUpdateMessages(
    rawMessage: any,
  ): Promise<boolean> {
    if (!rawMessage) {
      this.logger.log(`Message was null. Ignoring.`, this.loggerContext);
      return false;
    }

    const message = JSON.parse(rawMessage.content.toString());
    this.logger.log(message, this.loggerContext);
    await this.pubSub.publish('checkUpdated', {
      checkUpdated: message,
    });
  }

  public async handleInboundTableUpdateMessages(
    rawMessage: any,
  ): Promise<boolean> {
    if (!rawMessage) {
      this.logger.log(`Message was null. Ignoring.`, this.loggerContext);
      return false;
    }

    const message = JSON.parse(rawMessage.content.toString());
    const { tableUuid, tableUpdated } = message;
    this.logger.log(message, this.loggerContext);
    await this.pubSub.publish('tableUpdated', {
      tableUuid,
      tableUpdated,
    });
  }
}
