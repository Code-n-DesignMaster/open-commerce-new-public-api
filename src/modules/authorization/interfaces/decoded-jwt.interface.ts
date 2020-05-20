export interface IDecodedJwt {
  header: { kid: string; alg: string };
  payload: {
    sub: string;
    token_use: string;
    username: string;
    iss: string;
    exp: number;
  };
  signature: string;
}
