export interface ICustomer {
  id: string;
  name: string;
  state: string;
  city: string;
  email: string;
  identityId: string;
  birthday: string;
  gender: string;
  username: string;
  attributes: [
    {
      key: string;
      value: any;
      isEnabled: boolean;
    }
  ];
  isActive: boolean;
}
