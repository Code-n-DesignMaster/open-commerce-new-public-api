import { ClientServiceResponse } from '@open-commerce/db-internal-service-client';

export const defaultClientServiceResponse = new ClientServiceResponse();
defaultClientServiceResponse.data = true;
defaultClientServiceResponse.rawResponse = {}; // code: 'TEST CODE', message: "This is a test error message'"}
defaultClientServiceResponse.status = 200;
defaultClientServiceResponse.statusText = 'OK';
defaultClientServiceResponse.url = 'testUrl';

export const mockGraphqlClientExecuteQuery = (
  queryName: string,
  client: {
    executeQuery: any;
  },
) => {
  return jest.spyOn(client, 'executeQuery').mockImplementationOnce(
    async (
      operationName,
      operation,
      params,
    ): Promise<ClientServiceResponse> => {
      expect(operationName).toBe(queryName);
      expect(operation).toMatchSnapshot('for operation');
      expect(params).toMatchSnapshot('for parameters');

      return defaultClientServiceResponse;
    },
  );
};
