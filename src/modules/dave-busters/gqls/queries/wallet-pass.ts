export const WALLET_PASS_URL_QUERY = `
query getWalletPassUrls($powercardUuid: ID!, $deviceId: ID!) {
  walletPass (powercardUuid: $powercardUuid, deviceId: $deviceId) {
    googlePayUrl,
    pkPassUrl
  }
}`;
