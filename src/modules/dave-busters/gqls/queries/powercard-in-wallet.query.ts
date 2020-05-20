export const POWERCARD_IN_WALLET_QUERY = `
  query isPowercardInGoogleWallet($deviceId: ID!, $powercardUuid: ID!)  {
    isPowercardInGoogleWallet(
      deviceId: $deviceId,
      powercardUuid: $powercardUuid
    )
  }`;
