import * as JwksClient from 'jwks-rsa';

const handleSigningKeyError = (err, cb) => {
  // If we didn't find a match, can't provide a key.
  if (err && err.name === 'SigningKeyNotFoundError') {
    return cb(null);
  }

  // If an error occured like rate limiting or HTTP issue, we'll bubble up the error.
  if (err) {
    return cb(err);
  }
};

export function passportJwtSecret(options) {
  if (options === null || options === undefined) {
    throw new Error(
      'An options object must be provided when initializing passportJwtSecret',
    );
  }

  const client = JwksClient(options);
  const onError = options.handleSigningKeyError || handleSigningKeyError;

  return function secretProvider(decodedHeader, cb) {
    // Only RS256 is supported.
    if (decodedHeader.alg !== 'RS256') {
      return cb(null, null);
    }

    client.getSigningKey(decodedHeader.kid, (err, key) => {
      if (err) {
        return onError(err, newError => cb(newError, null));
      }

      // Provide the key.
      return cb(null, key.getPublicKey());
    });
  };
}
