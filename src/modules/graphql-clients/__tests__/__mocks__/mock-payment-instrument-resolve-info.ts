const data = {
  fieldName: 'customerPaymentInstrumentCreate',
  fieldNodes: [
    {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: 'customerPaymentInstrumentCreate',
        loc: {
          start: 53,
          end: 84,
        },
      },
      arguments: [
        {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: 'input',
            loc: {
              start: 85,
              end: 90,
            },
          },
          value: {
            kind: 'ObjectValue',
            fields: [
              {
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: 'name',
                  loc: {
                    start: 102,
                    end: 106,
                  },
                },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'first',
                        loc: {
                          start: 120,
                          end: 125,
                        },
                      },
                      value: {
                        kind: 'StringValue',
                        value: 'Ryan',
                        block: false,
                        loc: {
                          start: 127,
                          end: 133,
                        },
                      },
                      loc: {
                        start: 120,
                        end: 133,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'last',
                        loc: {
                          start: 145,
                          end: 149,
                        },
                      },
                      value: {
                        kind: 'StringValue',
                        value: 'Test',
                        block: false,
                        loc: {
                          start: 151,
                          end: 157,
                        },
                      },
                      loc: {
                        start: 145,
                        end: 157,
                      },
                    },
                  ],
                  loc: {
                    start: 108,
                    end: 167,
                  },
                },
                loc: {
                  start: 102,
                  end: 167,
                },
              },
              {
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: 'paymentType',
                  loc: {
                    start: 207,
                    end: 218,
                  },
                },
                value: {
                  kind: 'EnumValue',
                  value: 'VISA',
                  loc: {
                    start: 220,
                    end: 224,
                  },
                },
                loc: {
                  start: 207,
                  end: 224,
                },
              },
              {
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: 'nonce',
                  loc: {
                    start: 384,
                    end: 389,
                  },
                },
                value: {
                  kind: 'StringValue',
                  value: 'fake-valid-visa-nonce',
                  block: false,
                  loc: {
                    start: 391,
                    end: 414,
                  },
                },
                loc: {
                  start: 384,
                  end: 414,
                },
              },
              {
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: 'address',
                  loc: {
                    start: 424,
                    end: 431,
                  },
                },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'alias',
                        loc: {
                          start: 445,
                          end: 450,
                        },
                      },
                      value: {
                        kind: 'StringValue',
                        value: 'home',
                        block: false,
                        loc: {
                          start: 452,
                          end: 458,
                        },
                      },
                      loc: {
                        start: 445,
                        end: 458,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'street1',
                        loc: {
                          start: 470,
                          end: 477,
                        },
                      },
                      value: {
                        kind: 'StringValue',
                        value: '123 main street',
                        block: false,
                        loc: {
                          start: 479,
                          end: 496,
                        },
                      },
                      loc: {
                        start: 470,
                        end: 496,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'city',
                        loc: {
                          start: 508,
                          end: 512,
                        },
                      },
                      value: {
                        kind: 'StringValue',
                        value: 'philadelphia',
                        block: false,
                        loc: {
                          start: 514,
                          end: 528,
                        },
                      },
                      loc: {
                        start: 508,
                        end: 528,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'state',
                        loc: {
                          start: 540,
                          end: 545,
                        },
                      },
                      value: {
                        kind: 'StringValue',
                        value: 'PA',
                        block: false,
                        loc: {
                          start: 547,
                          end: 551,
                        },
                      },
                      loc: {
                        start: 540,
                        end: 551,
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'zipCode',
                        loc: {
                          start: 563,
                          end: 570,
                        },
                      },
                      value: {
                        kind: 'StringValue',
                        value: '19104',
                        block: false,
                        loc: {
                          start: 572,
                          end: 579,
                        },
                      },
                      loc: {
                        start: 563,
                        end: 579,
                      },
                    },
                  ],
                  loc: {
                    start: 433,
                    end: 589,
                  },
                },
                loc: {
                  start: 424,
                  end: 589,
                },
              },
            ],
            loc: {
              start: 92,
              end: 597,
            },
          },
          loc: {
            start: 85,
            end: 597,
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
              value: 'uuid',
              loc: {
                start: 609,
                end: 613,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 609,
              end: 613,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'alias',
              loc: {
                start: 622,
                end: 627,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 622,
              end: 627,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'providerNickName',
              loc: {
                start: 636,
                end: 652,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 636,
              end: 652,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'accountNumber',
              loc: {
                start: 661,
                end: 674,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 661,
              end: 674,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'address',
              loc: {
                start: 683,
                end: 690,
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
                    value: 'alias',
                    loc: {
                      start: 703,
                      end: 708,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 703,
                    end: 708,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'street1',
                    loc: {
                      start: 719,
                      end: 726,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 719,
                    end: 726,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'street2',
                    loc: {
                      start: 737,
                      end: 744,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 737,
                    end: 744,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'city',
                    loc: {
                      start: 755,
                      end: 759,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 755,
                    end: 759,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'state',
                    loc: {
                      start: 770,
                      end: 775,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 770,
                    end: 775,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'zipCode',
                    loc: {
                      start: 786,
                      end: 793,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 786,
                    end: 793,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'geoLocation',
                    loc: {
                      start: 804,
                      end: 815,
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
                          value: 'latitude',
                          loc: {
                            start: 830,
                            end: 838,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 830,
                          end: 838,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'longitude',
                          loc: {
                            start: 851,
                            end: 860,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 851,
                          end: 860,
                        },
                      },
                    ],
                    loc: {
                      start: 816,
                      end: 872,
                    },
                  },
                  loc: {
                    start: 804,
                    end: 872,
                  },
                },
              ],
              loc: {
                start: 691,
                end: 882,
              },
            },
            loc: {
              start: 683,
              end: 882,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'paymentType',
              loc: {
                start: 891,
                end: 902,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 891,
              end: 902,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'expiration',
              loc: {
                start: 911,
                end: 921,
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
                    value: 'expirationYear',
                    loc: {
                      start: 934,
                      end: 948,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 934,
                    end: 948,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'expirationMonth',
                    loc: {
                      start: 959,
                      end: 974,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 959,
                    end: 974,
                  },
                },
              ],
              loc: {
                start: 922,
                end: 984,
              },
            },
            loc: {
              start: 911,
              end: 984,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'status',
              loc: {
                start: 993,
                end: 999,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 993,
              end: 999,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'isDefault',
              loc: {
                start: 1008,
                end: 1017,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 1008,
              end: 1017,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'displayNumber',
              loc: {
                start: 1026,
                end: 1039,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 1026,
              end: 1039,
            },
          },
        ],
        loc: {
          start: 599,
          end: 1047,
        },
      },
      loc: {
        start: 53,
        end: 1047,
      },
    },
  ],
  returnType: 'PaymentInstrument!',
  parentType: 'Mutation',
  path: {
    key: 'customerPaymentInstrumentCreate',
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
    operation: 'mutation',
    name: {
      kind: 'Name',
      value: 'customerPaymentInstrumentCreate',
      loc: {
        start: 13,
        end: 44,
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
            value: 'customerPaymentInstrumentCreate',
            loc: {
              start: 53,
              end: 84,
            },
          },
          arguments: [
            {
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: 'input',
                loc: {
                  start: 85,
                  end: 90,
                },
              },
              value: {
                kind: 'ObjectValue',
                fields: [
                  {
                    kind: 'ObjectField',
                    name: {
                      kind: 'Name',
                      value: 'name',
                      loc: {
                        start: 102,
                        end: 106,
                      },
                    },
                    value: {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: {
                            kind: 'Name',
                            value: 'first',
                            loc: {
                              start: 120,
                              end: 125,
                            },
                          },
                          value: {
                            kind: 'StringValue',
                            value: 'Ryan',
                            block: false,
                            loc: {
                              start: 127,
                              end: 133,
                            },
                          },
                          loc: {
                            start: 120,
                            end: 133,
                          },
                        },
                        {
                          kind: 'ObjectField',
                          name: {
                            kind: 'Name',
                            value: 'last',
                            loc: {
                              start: 145,
                              end: 149,
                            },
                          },
                          value: {
                            kind: 'StringValue',
                            value: 'Test',
                            block: false,
                            loc: {
                              start: 151,
                              end: 157,
                            },
                          },
                          loc: {
                            start: 145,
                            end: 157,
                          },
                        },
                      ],
                      loc: {
                        start: 108,
                        end: 167,
                      },
                    },
                    loc: {
                      start: 102,
                      end: 167,
                    },
                  },
                  {
                    kind: 'ObjectField',
                    name: {
                      kind: 'Name',
                      value: 'paymentType',
                      loc: {
                        start: 207,
                        end: 218,
                      },
                    },
                    value: {
                      kind: 'EnumValue',
                      value: 'VISA',
                      loc: {
                        start: 220,
                        end: 224,
                      },
                    },
                    loc: {
                      start: 207,
                      end: 224,
                    },
                  },
                  {
                    kind: 'ObjectField',
                    name: {
                      kind: 'Name',
                      value: 'nonce',
                      loc: {
                        start: 384,
                        end: 389,
                      },
                    },
                    value: {
                      kind: 'StringValue',
                      value: 'fake-valid-visa-nonce',
                      block: false,
                      loc: {
                        start: 391,
                        end: 414,
                      },
                    },
                    loc: {
                      start: 384,
                      end: 414,
                    },
                  },
                  {
                    kind: 'ObjectField',
                    name: {
                      kind: 'Name',
                      value: 'address',
                      loc: {
                        start: 424,
                        end: 431,
                      },
                    },
                    value: {
                      kind: 'ObjectValue',
                      fields: [
                        {
                          kind: 'ObjectField',
                          name: {
                            kind: 'Name',
                            value: 'alias',
                            loc: {
                              start: 445,
                              end: 450,
                            },
                          },
                          value: {
                            kind: 'StringValue',
                            value: 'home',
                            block: false,
                            loc: {
                              start: 452,
                              end: 458,
                            },
                          },
                          loc: {
                            start: 445,
                            end: 458,
                          },
                        },
                        {
                          kind: 'ObjectField',
                          name: {
                            kind: 'Name',
                            value: 'street1',
                            loc: {
                              start: 470,
                              end: 477,
                            },
                          },
                          value: {
                            kind: 'StringValue',
                            value: '123 main street',
                            block: false,
                            loc: {
                              start: 479,
                              end: 496,
                            },
                          },
                          loc: {
                            start: 470,
                            end: 496,
                          },
                        },
                        {
                          kind: 'ObjectField',
                          name: {
                            kind: 'Name',
                            value: 'city',
                            loc: {
                              start: 508,
                              end: 512,
                            },
                          },
                          value: {
                            kind: 'StringValue',
                            value: 'philadelphia',
                            block: false,
                            loc: {
                              start: 514,
                              end: 528,
                            },
                          },
                          loc: {
                            start: 508,
                            end: 528,
                          },
                        },
                        {
                          kind: 'ObjectField',
                          name: {
                            kind: 'Name',
                            value: 'state',
                            loc: {
                              start: 540,
                              end: 545,
                            },
                          },
                          value: {
                            kind: 'StringValue',
                            value: 'PA',
                            block: false,
                            loc: {
                              start: 547,
                              end: 551,
                            },
                          },
                          loc: {
                            start: 540,
                            end: 551,
                          },
                        },
                        {
                          kind: 'ObjectField',
                          name: {
                            kind: 'Name',
                            value: 'zipCode',
                            loc: {
                              start: 563,
                              end: 570,
                            },
                          },
                          value: {
                            kind: 'StringValue',
                            value: '19104',
                            block: false,
                            loc: {
                              start: 572,
                              end: 579,
                            },
                          },
                          loc: {
                            start: 563,
                            end: 579,
                          },
                        },
                      ],
                      loc: {
                        start: 433,
                        end: 589,
                      },
                    },
                    loc: {
                      start: 424,
                      end: 589,
                    },
                  },
                ],
                loc: {
                  start: 92,
                  end: 597,
                },
              },
              loc: {
                start: 85,
                end: 597,
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
                  value: 'uuid',
                  loc: {
                    start: 609,
                    end: 613,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 609,
                  end: 613,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'alias',
                  loc: {
                    start: 622,
                    end: 627,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 622,
                  end: 627,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'providerNickName',
                  loc: {
                    start: 636,
                    end: 652,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 636,
                  end: 652,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'accountNumber',
                  loc: {
                    start: 661,
                    end: 674,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 661,
                  end: 674,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'address',
                  loc: {
                    start: 683,
                    end: 690,
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
                        value: 'alias',
                        loc: {
                          start: 703,
                          end: 708,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 703,
                        end: 708,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'street1',
                        loc: {
                          start: 719,
                          end: 726,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 719,
                        end: 726,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'street2',
                        loc: {
                          start: 737,
                          end: 744,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 737,
                        end: 744,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'city',
                        loc: {
                          start: 755,
                          end: 759,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 755,
                        end: 759,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'state',
                        loc: {
                          start: 770,
                          end: 775,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 770,
                        end: 775,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'zipCode',
                        loc: {
                          start: 786,
                          end: 793,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 786,
                        end: 793,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'geoLocation',
                        loc: {
                          start: 804,
                          end: 815,
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
                              value: 'latitude',
                              loc: {
                                start: 830,
                                end: 838,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 830,
                              end: 838,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'longitude',
                              loc: {
                                start: 851,
                                end: 860,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 851,
                              end: 860,
                            },
                          },
                        ],
                        loc: {
                          start: 816,
                          end: 872,
                        },
                      },
                      loc: {
                        start: 804,
                        end: 872,
                      },
                    },
                  ],
                  loc: {
                    start: 691,
                    end: 882,
                  },
                },
                loc: {
                  start: 683,
                  end: 882,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'paymentType',
                  loc: {
                    start: 891,
                    end: 902,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 891,
                  end: 902,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'expiration',
                  loc: {
                    start: 911,
                    end: 921,
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
                        value: 'expirationYear',
                        loc: {
                          start: 934,
                          end: 948,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 934,
                        end: 948,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'expirationMonth',
                        loc: {
                          start: 959,
                          end: 974,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 959,
                        end: 974,
                      },
                    },
                  ],
                  loc: {
                    start: 922,
                    end: 984,
                  },
                },
                loc: {
                  start: 911,
                  end: 984,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'status',
                  loc: {
                    start: 993,
                    end: 999,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 993,
                  end: 999,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'isDefault',
                  loc: {
                    start: 1008,
                    end: 1017,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 1008,
                  end: 1017,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'displayNumber',
                  loc: {
                    start: 1026,
                    end: 1039,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 1026,
                  end: 1039,
                },
              },
            ],
            loc: {
              start: 599,
              end: 1047,
            },
          },
          loc: {
            start: 53,
            end: 1047,
          },
        },
      ],
      loc: {
        start: 45,
        end: 1053,
      },
    },
    loc: {
      start: 4,
      end: 1053,
    },
  },
  variableValues: {},
  cacheControl: {
    cacheHint: {
      maxAge: 0,
    },
  },
};

export const mockPaymentInstrumentResolveInfo = JSON.parse(
  JSON.stringify(data),
);
