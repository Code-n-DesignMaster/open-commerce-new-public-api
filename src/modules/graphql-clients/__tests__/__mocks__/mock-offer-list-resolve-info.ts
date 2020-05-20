const data = {
  fieldName: 'offerListWithActivationFees',
  fieldNodes: [
    {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: 'offerListWithActivationFees',
        loc: {
          start: 20,
          end: 47,
        },
      },
      arguments: [
        {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: 'input',
            loc: {
              start: 48,
              end: 53,
            },
          },
          value: {
            kind: 'ObjectValue',
            fields: [
              {
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: 'storeId',
                  loc: {
                    start: 60,
                    end: 67,
                  },
                },
                value: {
                  kind: 'IntValue',
                  value: '81',
                  loc: {
                    start: 68,
                    end: 70,
                  },
                },
                loc: {
                  start: 60,
                  end: 70,
                },
              },
              {
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: 'paymentType',
                  loc: {
                    start: 76,
                    end: 87,
                  },
                },
                value: {
                  kind: 'EnumValue',
                  value: 'NONE',
                  loc: {
                    start: 88,
                    end: 92,
                  },
                },
                loc: {
                  start: 76,
                  end: 92,
                },
              },
            ],
            loc: {
              start: 54,
              end: 139,
            },
          },
          loc: {
            start: 48,
            end: 139,
          },
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'activationFee',
              loc: {
                start: 147,
                end: 160,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 147,
              end: 160,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'activationItem',
              loc: {
                start: 165,
                end: 179,
              },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'itemId',
                    loc: {
                      start: 188,
                      end: 194,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 188,
                    end: 194,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'categoryId',
                    loc: {
                      start: 201,
                      end: 211,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 201,
                    end: 211,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'chips',
                    loc: {
                      start: 218,
                      end: 223,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 218,
                    end: 223,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'price',
                    loc: {
                      start: 230,
                      end: 235,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 230,
                    end: 235,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'originalPrice',
                    loc: {
                      start: 242,
                      end: 255,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 242,
                    end: 255,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'sequence',
                    loc: {
                      start: 262,
                      end: 270,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 262,
                    end: 270,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'isBestValue',
                    loc: {
                      start: 277,
                      end: 288,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 277,
                    end: 288,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'upSellId',
                    loc: {
                      start: 295,
                      end: 303,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 295,
                    end: 303,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'color',
                    loc: {
                      start: 310,
                      end: 315,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 310,
                    end: 315,
                  },
                },
              ],
              loc: {
                start: 180,
                end: 321,
              },
            },
            loc: {
              start: 165,
              end: 321,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'offerList',
              loc: {
                start: 326,
                end: 335,
              },
            },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'offerId',
                    loc: {
                      start: 344,
                      end: 351,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 344,
                    end: 351,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'offerTypes',
                    loc: {
                      start: 358,
                      end: 368,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 358,
                    end: 368,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'title',
                    loc: {
                      start: 375,
                      end: 380,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 375,
                    end: 380,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'description',
                    loc: {
                      start: 387,
                      end: 398,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 387,
                    end: 398,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'offerAmount',
                    loc: {
                      start: 405,
                      end: 416,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 405,
                    end: 416,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'imageUrl',
                    loc: {
                      start: 423,
                      end: 431,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 423,
                    end: 431,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'validFrom',
                    loc: {
                      start: 438,
                      end: 447,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 438,
                    end: 447,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'validTo',
                    loc: {
                      start: 454,
                      end: 461,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 454,
                    end: 461,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'disclaimer',
                    loc: {
                      start: 468,
                      end: 478,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 468,
                    end: 478,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'termsAndConditions',
                    loc: {
                      start: 485,
                      end: 503,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 485,
                    end: 503,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'autoApply',
                    loc: {
                      start: 510,
                      end: 519,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 510,
                    end: 519,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'item',
                    loc: {
                      start: 526,
                      end: 530,
                    },
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'itemId',
                          loc: {
                            start: 541,
                            end: 547,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 541,
                          end: 547,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'categoryId',
                          loc: {
                            start: 556,
                            end: 566,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 556,
                          end: 566,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'chips',
                          loc: {
                            start: 575,
                            end: 580,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 575,
                          end: 580,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'price',
                          loc: {
                            start: 589,
                            end: 594,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 589,
                          end: 594,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'originalPrice',
                          loc: {
                            start: 603,
                            end: 616,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 603,
                          end: 616,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'sequence',
                          loc: {
                            start: 625,
                            end: 633,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 625,
                          end: 633,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'isBestValue',
                          loc: {
                            start: 642,
                            end: 653,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 642,
                          end: 653,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'upSellId',
                          loc: {
                            start: 662,
                            end: 670,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 662,
                          end: 670,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'color',
                          loc: {
                            start: 679,
                            end: 684,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 679,
                          end: 684,
                        },
                      },
                    ],
                    loc: {
                      start: 531,
                      end: 692,
                    },
                  },
                  loc: {
                    start: 526,
                    end: 692,
                  },
                },
              ],
              loc: {
                start: 336,
                end: 698,
              },
            },
            loc: {
              start: 326,
              end: 698,
            },
          },
        ],
        loc: {
          start: 141,
          end: 702,
        },
      },
      loc: {
        start: 20,
        end: 702,
      },
    },
  ],
  returnType: 'PowercardOfferListResponse',
  parentType: 'Query',
  path: {
    key: 'offerListWithActivationFees',
  },
  schema: {
    __validationErrors: [],
    astNode: {
      kind: 'SchemaDefinition',
      directives: [],
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          operation: 'query',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Query',
            },
          },
        },
        {
          kind: 'OperationTypeDefinition',
          operation: 'mutation',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Mutation',
            },
          },
        },
        {
          kind: 'OperationTypeDefinition',
          operation: 'subscription',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'Subscription',
            },
          },
        },
      ],
    },
    __allowedLegacyNames: [],
    _queryType: 'Query',
    _mutationType: 'Mutation',
    _subscriptionType: 'Subscription',
    _directives: [
      '@inAuthPayloadValidate',
      '@adminOnly',
      '@skip',
      '@include',
      '@deprecated',
    ],
    _typeMap: {
      Query: 'Query',
      InAuthGetSigfilesResponse: 'InAuthGetSigfilesResponse',
      String: 'String',
      LoggedInTest: 'LoggedInTest',
      Boolean: 'Boolean',
      Int: 'Int',
      Customer: 'Customer',
      ID: 'ID',
      PersonName: 'PersonName',
      OCEmailAddress: 'OCEmailAddress',
      Address: 'Address',
      GeoLocation: 'GeoLocation',
      Float: 'Float',
      PaymentInstrument: 'PaymentInstrument',
      PAYMENT_INSTRUMENT_TYPE: 'PAYMENT_INSTRUMENT_TYPE',
      PaymentInstrumentExpiration: 'PaymentInstrumentExpiration',
      PAYMENT_INSTRUMENT_STATUS: 'PAYMENT_INSTRUMENT_STATUS',
      PaymentProvider: 'PaymentProvider',
      LoyaltyInstrument: 'LoyaltyInstrument',
      LOYALTY_INSTRUMENT_STATUS: 'LOYALTY_INSTRUMENT_STATUS',
      Powercard: 'Powercard',
      POWERCARD_STATUS_TYPE: 'POWERCARD_STATUS_TYPE',
      POWERCARD_CARD_TYPE: 'POWERCARD_CARD_TYPE',
      PowercardImagePack: 'PowercardImagePack',
      PowercardImage: 'PowercardImage',
      OCURL: 'OCURL',
      WalletPassUrl: 'WalletPassUrl',
      Demographics: 'Demographics',
      OCDate: 'OCDate',
      OCJSON: 'OCJSON',
      ContactPhoneNumber: 'ContactPhoneNumber',
      OCPhoneNumber: 'OCPhoneNumber',
      PHONE_TYPE: 'PHONE_TYPE',
      CUSTOMER_STATUS: 'CUSTOMER_STATUS',
      CustomerAgreement: 'CustomerAgreement',
      BrandAgreement: 'BrandAgreement',
      OCDateTime: 'OCDateTime',
      Brand: 'Brand',
      Tenant: 'Tenant',
      BrandCustomerPreference: 'BrandCustomerPreference',
      CustomerPreference: 'CustomerPreference',
      PreferenceValue: 'PreferenceValue',
      CustomerLoginAttemptFilter: 'CustomerLoginAttemptFilter',
      GeoLocationFilter: 'GeoLocationFilter',
      GeoLocationCreate: 'GeoLocationCreate',
      CustomerDeviceFilter: 'CustomerDeviceFilter',
      CustomerLoginAttemptConnection: 'CustomerLoginAttemptConnection',
      CustomerLoginAttemptEdge: 'CustomerLoginAttemptEdge',
      CustomerLoginAttempt: 'CustomerLoginAttempt',
      CustomerDevice: 'CustomerDevice',
      PageInfo: 'PageInfo',
      Location: 'Location',
      LocationAttribute: 'LocationAttribute',
      LocationResource: 'LocationResource',
      LOCATION_RESOURCE_TYPE: 'LOCATION_RESOURCE_TYPE',
      ResourceItemFilter: 'ResourceItemFilter',
      RESOURCE_ITEM_TYPE: 'RESOURCE_ITEM_TYPE',
      ResourceItemConnection: 'ResourceItemConnection',
      ResourceItemEdge: 'ResourceItemEdge',
      ResourceItem: 'ResourceItem',
      ResourceItemPrice: 'ResourceItemPrice',
      LOCATION_RESOURCE_STATUS: 'LOCATION_RESOURCE_STATUS',
      OpenCommerceFeature: 'OpenCommerceFeature',
      HoursOfOperationGroup: 'HoursOfOperationGroup',
      HoursOfOperation: 'HoursOfOperation',
      WEEKDAY: 'WEEKDAY',
      TransactionFilter: 'TransactionFilter',
      TRANSACTION_STATUS: 'TRANSACTION_STATUS',
      LoyaltyInstrumentFilter: 'LoyaltyInstrumentFilter',
      TransactionPaymentInfoFilter: 'TransactionPaymentInfoFilter',
      LocationFilter: 'LocationFilter',
      LocationAttributeFilter: 'LocationAttributeFilter',
      LocationResourceFilter: 'LocationResourceFilter',
      BrandFilter: 'BrandFilter',
      OpenCommerceFeatureFilter: 'OpenCommerceFeatureFilter',
      HARDWARE_VENDOR: 'HARDWARE_VENDOR',
      TRANSACTION_TYPE: 'TRANSACTION_TYPE',
      PAYMENT_LEVEL: 'PAYMENT_LEVEL',
      LOYALTY_LEVEL: 'LOYALTY_LEVEL',
      FUEL_PUMP_STATUS: 'FUEL_PUMP_STATUS',
      TransactionConnection: 'TransactionConnection',
      TransactionEdge: 'TransactionEdge',
      Transaction: 'Transaction',
      ItemCurrency: 'ItemCurrency',
      STAC: 'STAC',
      TransactionPaymentInfo: 'TransactionPaymentInfo',
      TransactionItem: 'TransactionItem',
      ItemPrice: 'ItemPrice',
      TRANSACTION_ITEM_TYPE: 'TRANSACTION_ITEM_TYPE',
      ReceiptLine: 'ReceiptLine',
      FuelReceipt: 'FuelReceipt',
      TRANSACTION_PURCHASE_TYPE: 'TRANSACTION_PURCHASE_TYPE',
      TransactionPaymentEvent: 'TransactionPaymentEvent',
      TRANSACTION_EVENT_TYPE: 'TRANSACTION_EVENT_TYPE',
      ClientToken: 'ClientToken',
      Check: 'Check',
      CheckLineItem: 'CheckLineItem',
      CHECK_LINE_ITEM_TYPE: 'CHECK_LINE_ITEM_TYPE',
      RateCardFilter: 'RateCardFilter',
      OFFER_PAYMENT_TYPE: 'OFFER_PAYMENT_TYPE',
      RateCard: 'RateCard',
      RateCardItem: 'RateCardItem',
      RateCardCategory: 'RateCardCategory',
      LocationConnection: 'LocationConnection',
      LocationEdge: 'LocationEdge',
      AppConfig: 'AppConfig',
      Image: 'Image',
      BackgroundImage: 'BackgroundImage',
      PayAtTableConfig: 'PayAtTableConfig',
      PaymentConfig: 'PaymentConfig',
      RewardHistory: 'RewardHistory',
      RewardTransaction: 'RewardTransaction',
      PowercardOfferList: 'PowercardOfferList',
      PowercardOffer: 'PowercardOffer',
      OFFER_TYPE: 'OFFER_TYPE',
      PowercardOfferListResponse: 'PowercardOfferListResponse',
      PowercardConfigItem: 'PowercardConfigItem',
      FeaturesResponse: 'FeaturesResponse',
      Feature: 'Feature',
      DAVE_AND_BUSTERS_FEATURE: 'DAVE_AND_BUSTERS_FEATURE',
      FeatureEnabledResponse: 'FeatureEnabledResponse',
      TriggerException: 'TriggerException',
      Mutation: 'Mutation',
      AccessTokenByRefreshTokenInputType: 'AccessTokenByRefreshTokenInputType',
      AuthTokens: 'AuthTokens',
      Tokens: 'Tokens',
      CustomerOTPRequest: 'CustomerOTPRequest',
      OTP_CHANNEL: 'OTP_CHANNEL',
      OTP_MODE: 'OTP_MODE',
      CustomerOTPPayload: 'CustomerOTPPayload',
      OTP: 'OTP',
      CustomerOTPPayloadOrAuthTokens: 'CustomerOTPPayloadOrAuthTokens',
      InauthTrustScoreValueInput: 'InauthTrustScoreValueInput',
      InAuthDeviceRegistrationRequestInput:
        'InAuthDeviceRegistrationRequestInput',
      InAuthDeviceRegistrationResponse: 'InAuthDeviceRegistrationResponse',
      CustomerRegistrationComplete: 'CustomerRegistrationComplete',
      CustomerPersonNameCreate: 'CustomerPersonNameCreate',
      CustomerDemographicsCreate: 'CustomerDemographicsCreate',
      CustomerPreferenceCreate: 'CustomerPreferenceCreate',
      PreferenceValueCreate: 'PreferenceValueCreate',
      CustomerCreate: 'CustomerCreate',
      CustomerAddressCreate: 'CustomerAddressCreate',
      CustomerAgreementCreate: 'CustomerAgreementCreate',
      CustomerPhoneNumberCreate: 'CustomerPhoneNumberCreate',
      CustomerCreateVerify: 'CustomerCreateVerify',
      CustomerUpdate: 'CustomerUpdate',
      CustomerPersonNameUpdate: 'CustomerPersonNameUpdate',
      CustomerAddressUpdate: 'CustomerAddressUpdate',
      GeoLocationUpdate: 'GeoLocationUpdate',
      CustomerDemographicsUpdate: 'CustomerDemographicsUpdate',
      CustomerPhoneNumberUpdate: 'CustomerPhoneNumberUpdate',
      CustomerPreferenceUpdate: 'CustomerPreferenceUpdate',
      BrandCustomerPreferenceUpdate: 'BrandCustomerPreferenceUpdate',
      PreferenceValueUpdate: 'PreferenceValueUpdate',
      CustomerPaymentInstrumentCreate: 'CustomerPaymentInstrumentCreate',
      PaymentInstrumentExpirationInput: 'PaymentInstrumentExpirationInput',
      CustomerPaymentInstrumentVerify: 'CustomerPaymentInstrumentVerify',
      CustomerPaymentInstrumentUpdate: 'CustomerPaymentInstrumentUpdate',
      CustomerLoyaltyInstrumentCreate: 'CustomerLoyaltyInstrumentCreate',
      CustomerLoyaltyInstrumentUpdate: 'CustomerLoyaltyInstrumentUpdate',
      CustomerPasswordSet: 'CustomerPasswordSet',
      CustomerPassword: 'CustomerPassword',
      CustomerPasswordChange: 'CustomerPasswordChange',
      CustomerPasswordCredentials: 'CustomerPasswordCredentials',
      CustomerUsername: 'CustomerUsername',
      AuthPayload: 'AuthPayload',
      CustomerPasswordResetByOTPVerify: 'CustomerPasswordResetByOTPVerify',
      CustomerPasswordReset: 'CustomerPasswordReset',
      CustomerPasswordResetPaymentInstrumentVerify:
        'CustomerPasswordResetPaymentInstrumentVerify',
      CustomerDeviceCreate: 'CustomerDeviceCreate',
      CustomerDeviceUpdate: 'CustomerDeviceUpdate',
      CheckPaymentApplyInput: 'CheckPaymentApplyInput',
      BillingInput: 'BillingInput',
      PowercardConfigItemInput: 'PowercardConfigItemInput',
      PowercardCreate: 'PowercardCreate',
      PowercardAttributesUpdate: 'PowercardAttributesUpdate',
      PowercardFundsAdd: 'PowercardFundsAdd',
      Response: 'Response',
      VirtualPowercardCreate: 'VirtualPowercardCreate',
      CustomerPinCodeSet: 'CustomerPinCodeSet',
      CustomerPinCode: 'CustomerPinCode',
      CustomerPinCodeChange: 'CustomerPinCodeChange',
      CustomerPinCodeVerify: 'CustomerPinCodeVerify',
      Subscription: 'Subscription',
      __Schema: '__Schema',
      __Type: '__Type',
      __TypeKind: '__TypeKind',
      __Field: '__Field',
      __InputValue: '__InputValue',
      __EnumValue: '__EnumValue',
      __Directive: '__Directive',
      __DirectiveLocation: '__DirectiveLocation',
      TransactionStart: 'TransactionStart',
      OCTime: 'OCTime',
      OtpInput: 'OtpInput',
      AuthChallenge: 'AuthChallenge',
      AuthChallengeType: 'AuthChallengeType',
      SignUpInput: 'SignUpInput',
      UserAttributes: 'UserAttributes',
      Node: 'Node',
      AccessTokenByRefreshTokenInput: 'AccessTokenByRefreshTokenInput',
      MOBILE_DEVICE_TYPE: 'MOBILE_DEVICE_TYPE',
      CustomerOTPVerify: 'CustomerOTPVerify',
      CustomerPinCodeCredentials: 'CustomerPinCodeCredentials',
      CustomerContact: 'CustomerContact',
      CUSTOMER_REQUEST_TYPE: 'CUSTOMER_REQUEST_TYPE',
      CustomerFeedback: 'CustomerFeedback',
      LocationCheckIn: 'LocationCheckIn',
      CustomerOTPPayloadOrAuthPayload: 'CustomerOTPPayloadOrAuthPayload',
      TransactionServiceError: 'TransactionServiceError',
      Rating: 'Rating',
      PinCodeInputType: 'PinCodeInputType',
      ChangePinCodeInputType: 'ChangePinCodeInputType',
    },
    _possibleTypeMap: {
      CustomerOTPPayloadOrAuthTokens: {
        CustomerOTPPayload: true,
        AuthTokens: true,
      },
    },
    _implementations: {},
    _extensionsEnabled: true,
  },
  fragments: {},
  operation: {
    kind: 'OperationDefinition',
    operation: 'query',
    name: {
      kind: 'Name',
      value: 'offerList',
      loc: {
        start: 6,
        end: 15,
      },
    },
    variableDefinitions: [],
    directives: [],
    selectionSet: {
      kind: 'SelectionSet',
      selections: [
        {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: 'offerListWithActivationFees',
            loc: {
              start: 20,
              end: 47,
            },
          },
          arguments: [
            {
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: 'input',
                loc: {
                  start: 48,
                  end: 53,
                },
              },
              value: {
                kind: 'ObjectValue',
                fields: [
                  {
                    kind: 'ObjectField',
                    name: {
                      kind: 'Name',
                      value: 'storeId',
                      loc: {
                        start: 60,
                        end: 67,
                      },
                    },
                    value: {
                      kind: 'IntValue',
                      value: '81',
                      loc: {
                        start: 68,
                        end: 70,
                      },
                    },
                    loc: {
                      start: 60,
                      end: 70,
                    },
                  },
                  {
                    kind: 'ObjectField',
                    name: {
                      kind: 'Name',
                      value: 'paymentType',
                      loc: {
                        start: 76,
                        end: 87,
                      },
                    },
                    value: {
                      kind: 'EnumValue',
                      value: 'NONE',
                      loc: {
                        start: 88,
                        end: 92,
                      },
                    },
                    loc: {
                      start: 76,
                      end: 92,
                    },
                  },
                ],
                loc: {
                  start: 54,
                  end: 139,
                },
              },
              loc: {
                start: 48,
                end: 139,
              },
            },
          ],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'activationFee',
                  loc: {
                    start: 147,
                    end: 160,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 147,
                  end: 160,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'activationItem',
                  loc: {
                    start: 165,
                    end: 179,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'itemId',
                        loc: {
                          start: 188,
                          end: 194,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 188,
                        end: 194,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'categoryId',
                        loc: {
                          start: 201,
                          end: 211,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 201,
                        end: 211,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'chips',
                        loc: {
                          start: 218,
                          end: 223,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 218,
                        end: 223,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'price',
                        loc: {
                          start: 230,
                          end: 235,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 230,
                        end: 235,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'originalPrice',
                        loc: {
                          start: 242,
                          end: 255,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 242,
                        end: 255,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'sequence',
                        loc: {
                          start: 262,
                          end: 270,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 262,
                        end: 270,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'isBestValue',
                        loc: {
                          start: 277,
                          end: 288,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 277,
                        end: 288,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'upSellId',
                        loc: {
                          start: 295,
                          end: 303,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 295,
                        end: 303,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'color',
                        loc: {
                          start: 310,
                          end: 315,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 310,
                        end: 315,
                      },
                    },
                  ],
                  loc: {
                    start: 180,
                    end: 321,
                  },
                },
                loc: {
                  start: 165,
                  end: 321,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'offerList',
                  loc: {
                    start: 326,
                    end: 335,
                  },
                },
                arguments: [],
                directives: [],
                selectionSet: {
                  kind: 'SelectionSet',
                  selections: [
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'offerId',
                        loc: {
                          start: 344,
                          end: 351,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 344,
                        end: 351,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'offerTypes',
                        loc: {
                          start: 358,
                          end: 368,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 358,
                        end: 368,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'title',
                        loc: {
                          start: 375,
                          end: 380,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 375,
                        end: 380,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'description',
                        loc: {
                          start: 387,
                          end: 398,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 387,
                        end: 398,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'offerAmount',
                        loc: {
                          start: 405,
                          end: 416,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 405,
                        end: 416,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'imageUrl',
                        loc: {
                          start: 423,
                          end: 431,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 423,
                        end: 431,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'validFrom',
                        loc: {
                          start: 438,
                          end: 447,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 438,
                        end: 447,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'validTo',
                        loc: {
                          start: 454,
                          end: 461,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 454,
                        end: 461,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'disclaimer',
                        loc: {
                          start: 468,
                          end: 478,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 468,
                        end: 478,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'termsAndConditions',
                        loc: {
                          start: 485,
                          end: 503,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 485,
                        end: 503,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'autoApply',
                        loc: {
                          start: 510,
                          end: 519,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 510,
                        end: 519,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'item',
                        loc: {
                          start: 526,
                          end: 530,
                        },
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'itemId',
                              loc: {
                                start: 541,
                                end: 547,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 541,
                              end: 547,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'categoryId',
                              loc: {
                                start: 556,
                                end: 566,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 556,
                              end: 566,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'chips',
                              loc: {
                                start: 575,
                                end: 580,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 575,
                              end: 580,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'price',
                              loc: {
                                start: 589,
                                end: 594,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 589,
                              end: 594,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'originalPrice',
                              loc: {
                                start: 603,
                                end: 616,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 603,
                              end: 616,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'sequence',
                              loc: {
                                start: 625,
                                end: 633,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 625,
                              end: 633,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'isBestValue',
                              loc: {
                                start: 642,
                                end: 653,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 642,
                              end: 653,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'upSellId',
                              loc: {
                                start: 662,
                                end: 670,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 662,
                              end: 670,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'color',
                              loc: {
                                start: 679,
                                end: 684,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 679,
                              end: 684,
                            },
                          },
                        ],
                        loc: {
                          start: 531,
                          end: 692,
                        },
                      },
                      loc: {
                        start: 526,
                        end: 692,
                      },
                    },
                  ],
                  loc: {
                    start: 336,
                    end: 698,
                  },
                },
                loc: {
                  start: 326,
                  end: 698,
                },
              },
            ],
            loc: {
              start: 141,
              end: 702,
            },
          },
          loc: {
            start: 20,
            end: 702,
          },
        },
      ],
      loc: {
        start: 16,
        end: 704,
      },
    },
    loc: {
      start: 0,
      end: 704,
    },
  },
  variableValues: {},
  cacheControl: {
    cacheHint: {
      maxAge: 0,
    },
  },
};

export const mockOfferListResolveInfo = JSON.parse(JSON.stringify(data));
