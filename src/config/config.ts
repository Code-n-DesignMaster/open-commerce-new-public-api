export const config = {
  environment: {
    doc: 'The applicaton environment.',
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    format: 'port',
    default: 3000,
    arg: 'port',
    env: 'PORT',
  },
  common: {
    minimumAppVersionAndroid: {
      doc: 'minimum version of android application',
      format: Number,
      env: 'MINIMUM_APP_VERSION_ANDROID',
      default: '329921',
    },
    minimumAppVersionIos: {
      doc: 'minimum version of ios application',
      format: Number,
      env: 'MINIMUM_APP_VERSION_IOS',
      default: '20191020.78',
    },
    apiVerificationUrl: {
      doc: 'Url to api verification service',
      format: 'url',
      env: 'API_VERIFICATION_URL',
      default: 'http://localhost:3050/graphql',
    },
  },
  customer: {
    isWhiteListForAutomatedQaEnabled: {
      doc:
        'Whitelist for automated tests enabled. Disables throttling on payment instrument create',
      format: Boolean,
      env: 'WHITELIST_FOR_AQA_TESTS_ENABLED',
      default: false,
    },
  },
  daveBusters: {
    toggleAppRatingPopup: {
      format: Boolean,
      env: 'DB__FEATURE_TOGGLE_APP_RATING_POPUP',
      default: false,
    },
    toggleRemovePowercardButton: {
      format: Boolean,
      env: 'DB__FEATURE_TOGGLE_REMOVE_POWERCARD_BUTTON',
      default: false,
    },
    payAtTableTipLabels: {
      format: Array,
      env: 'DB__PAY_AT_TABLE_TIP_LABELS',
      default: [0, 0, 0],
    },
  },
  rollbar: {
    accessToken: {
      format: String,
      env: 'ROLLBAR_ACCESS_TOKEN',
      default: undefined,
    },
    environment: {
      format: String,
      env: 'ROLLBAR_ENVIRONMENT',
      default: 'unknown',
    },
  },
  graphql: {
    typePaths: {
      doc:
        'The typePaths property indicates where the GraphQLModule should look for the GraphQL files.',
      format: Array,
      env: 'GQL_PATH',
      default: [
        'src/**/*.graphql',
        'node_modules/@open-commerce/graphql-schema/PUBLIC_API/schema-modules/transaction.graphqls',
      ],
    },
    debug: {
      doc: 'Debug mode',
      format: Boolean,
      env: 'GQL_DEBUG',
      default: false,
    },
    playground: {
      doc: 'Switch on playground',
      format: Boolean,
      env: 'GQL_PLAYGROUND',
      default: false,
    },
    resolverValidationOptions: {
      default: {
        requireResolversForResolveType: false,
      },
    },
  },
  authService: {
    inAuthTestMode: {
      doc:
        'Disables InAuth functionality for testing, returns mock InAuth responses',
      default: false,
      env: 'DB__INAUTH_TEST_MODE',
    },
  },
  authorization: {
    trustedIssuer: {
      doc: 'JWT issuer which is trusted',
      default: '',
      env: 'AUTH_SERVICE__TRUSTED_ISSUER',
    },
    jwksUri: {
      doc:
        'URI from which JWKS can be downloaded. Should be accessible by service',
      default: '',
      env: 'AUTH_SERVICE__JWKS_URI',
    },
  },
  throttling: {
    requests: {
      format: Number,
      env: 'PIN_THROTTLING_REQUESTS',
      default: 6,
    },
    timeInMinutes: {
      format: Number,
      env: 'PIN_THROTTLING_TIME_IN_MINUTES',
      default: 3,
    },
    throttledInMinutes: {
      format: Number,
      env: 'PIN_THROTTLING_THROTTLED_IN_MINUTES',
      default: 0,
    },
  },
  redis: {
    host: {
      doc: 'Connection host for Redis',
      format: String,
      env: 'REDIS_HOST',
      default: 'localhost',
    },
    port: {
      doc: 'Connection port for Redis',
      format: Number,
      env: 'REDIS_PORT',
      default: 6379,
    },
    db: {
      doc: 'Db number',
      format: Number,
      env: 'REDIS_DB',
      default: 0,
    },
    password: {
      doc: 'Redis connection password',
      format: String,
      env: 'REDIS_PASSWORD',
      default: undefined,
    },
    keyPrefix: {
      doc: 'Prefix for key',
      format: String,
      env: 'REDIS_PRIFIX',
      default: '',
    },
  },
  rateLimitDirective: {
    limit: {
      doc: 'number of requests per specific time',
      format: Number,
      env: 'RATE_LIMIT_NUMBER_OF_REQUEST',
      default: 3,
    },
    durationSeconds: {
      doc: 'time limit ',
      format: Number,
      env: 'RATE_LIMIT_TIME_LIMIT_SECONDS',
      // 6 hours
      default: 21600,
    },
    blockDurationSeconds: {
      doc: 'an amount of time user will be blocked after exceeding limit',
      format: Number,
      env: 'RATE_LIMIT_BLOCK_DURATION_SECONDS',
      default: 21600,
    },
    message: {
      doc: 'error message',
      format: String,
      env: 'RATE_LIMIT_ERROR_MESSAGE',
      default: 'Maximum number of requests reached. Please try again later',
    },
  },
  log: {
    level: {
      env: 'LOG_LEVEL',
      format: ['error', 'warn', 'info', 'debug'],
      default: 'info',
    },
    format: {
      env: 'LOG_FORMAT',
      format: ['console', 'json'],
      default: 'console',
    },
  },
};
