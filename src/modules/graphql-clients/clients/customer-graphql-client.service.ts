import { Inject } from '@nestjs/common';
import { CUSTOMER_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import {
  CustomerServiceGraphqlClient,
  GraphqlParameterDto,
  BuildGraphqlOperationDto,
  GraphqlOperationBuilder,
  BaseInternalServiceGraphqlClientService,
} from '@open-commerce/db-internal-service-client';
import { IClientPaymentToken } from '@open-commerce/data-objects';
import { GraphQLResolveInfo } from 'graphql';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { ICustomerInternal } from '../../common/interfaces/customer-internal.interface';
// TODO: FIXME: This is probably the wrong import, but we are trying to preserve existing behavior right now.
// We can come back to this later and make sure there are no interface inconsistencies.
import { IPaymentInstrument } from '../../customer/interfaces/payment-instrument.interface';
import { ICustomerServiceConfig } from '../../customer/interfaces/customer-service-config.interface';
import { CustomerPaymentInstrumentCreateDto } from '../../customer/dtos/customer-payment-instrument-create.dto';
import { CustomerPaymentInstrumentUpdateDto } from '../../customer/dtos/customer-payment-instrument-update.dto';
import { CustomerRegistrationCompleteDto } from '../../auth/dtos/customer-registration-complete.dto';

const basicFields = `
  id
  uuid
  isNewCustomer
  email
  status
  username
`;

const additionalFields = ['id', 'uuid'];

export class CustomerGraphqlClientService extends BaseInternalServiceGraphqlClientService {
  constructor(
    protected logger: LoggerService,
    @Inject(CUSTOMER_SERVICE_GRAPHQL_CLIENT_TOKEN)
    private customerClient: CustomerServiceGraphqlClient,
  ) {
    super(logger);
  }

  // TODO: FIXME: fix the incorrect case of customerID in the schema
  public async clientPaymentToken(
    customerID: string,
  ): Promise<IClientPaymentToken> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerID',
        type: 'ID',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'clientPaymentToken',
      type: 'query',
      parameters,
      fields: 'token',
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerID,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerByIdentityProviderId(
    info: GraphQLResolveInfo,
    identityProviderId: string,
  ): Promise<ICustomerInternal> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'identityProviderId',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerByIdentityProviderId',
      type: 'query',
      parameters,
      info,
      additionalFields,
      formatted: true,
    };

    if (!info) {
      operationDetails.fields = basicFields;
    }

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const customer = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        identityProviderId,
      },
    );

    return this.dataOrThrowFrom(customer);
  }

  public async customerPaymentInstrumentCreate(
    info: GraphQLResolveInfo,
    customerUuid: string,
    input: CustomerPaymentInstrumentCreateDto,
  ): Promise<IPaymentInstrument> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'input',
        type: 'CustomerPaymentInstrumentCreate!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerPaymentInstrumentCreate',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerServiceConfig(): Promise<ICustomerServiceConfig> {
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerServiceConfig',
      type: 'query',
      fields: 'maxAllowedPaymentCards',
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerDelete(customerUuid: string): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerDelete',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async currentCustomerByUsername(
    info: GraphQLResolveInfo,
    username: string,
  ): Promise<ICustomerInternal> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'username',
        type: 'String!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerByUsername',
      type: 'query',
      parameters,
      additionalFields,
      info,
      formatted: true,
    };

    if (!info) {
      operationDetails.fields = basicFields;
    }

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        username,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerUpdate(
    info: GraphQLResolveInfo,
    customerUuid: string,
    input: Partial<ICustomerInternal>,
  ): Promise<ICustomerInternal> {
    this.logger.error(
      {
        msg: 'RRRRRRRREACHED',
      },
      null,
      'TEST',
    );

    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'input',
        type: 'CustomerUpdate!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerUpdate',
      type: 'mutation',
      parameters,
      info,
      additionalFields,
      formatted: true,
    };

    if (!info) {
      operationDetails.fields = basicFields;
    }

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerEmailVerificationSend(
    customerUuid: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerEmailVerificationSend',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerPaymentInstrumentUpdate(
    info: GraphQLResolveInfo,
    input: CustomerPaymentInstrumentUpdateDto,
  ): Promise<IPaymentInstrument> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'CustomerPaymentInstrumentUpdate!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerPaymentInstrumentUpdate',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerPaymentInstrumentDelete(
    info: GraphQLResolveInfo,
    customerUuid: string,
    uuid: string,
  ): Promise<IPaymentInstrument[]> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'uuid',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerPaymentInstrumentDelete',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        uuid,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerCreate(
    info: GraphQLResolveInfo,
    input: any,
  ): Promise<ICustomerInternal> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'CustomerCreate!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerCreate',
      type: 'mutation',
      parameters,
      info,
      additionalFields,
      formatted: true,
    };

    if (!info) {
      operationDetails.fields = basicFields;
    }

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerRegistrationComplete(
    info: GraphQLResolveInfo,
    customerUuid: string,
    input: CustomerRegistrationCompleteDto,
  ): Promise<ICustomerInternal> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'input',
        type: 'CustomerRegistrationComplete!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerRegistrationComplete',
      type: 'mutation',
      parameters,
      info,
      additionalFields,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerPinCodeSet(
    customerUuid: string,
    input: any,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'input',
        type: 'CustomerPinCodeSet!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerPinCodeSet',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerPinCodeReset(customerUuid: string): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerPinCodeReset',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerPinCodeChange(
    customerUuid: string,
    input: any,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'input',
        type: 'CustomerPinCodeChange!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerPinCodeChange',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerPinCodeVerify(
    customerUuid: string,
    input: any,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'input',
        type: 'CustomerPinCodeVerify!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerPinCodeVerify',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.customerClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }
}
