export interface IAuthPayload {
  username: string;
  tenant: string;
  sub: string;
  accessToken: string;
  expiresIn: number;
}
