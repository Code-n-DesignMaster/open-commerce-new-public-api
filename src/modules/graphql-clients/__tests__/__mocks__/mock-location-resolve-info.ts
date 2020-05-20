const data = {
  fieldName: 'locations',
  fieldNodes: [
    {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: 'locations',
        loc: {
          start: 19,
          end: 28,
        },
      },
      arguments: [
        {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: 'filter',
            loc: {
              start: 29,
              end: 35,
            },
          },
          value: {
            kind: 'ObjectValue',
            fields: [],
            loc: {
              start: 36,
              end: 195,
            },
          },
          loc: {
            start: 29,
            end: 195,
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
              value: 'edges',
              loc: {
                start: 203,
                end: 208,
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
                    value: 'node',
                    loc: {
                      start: 217,
                      end: 221,
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
                          value: 'brandSpecificLocationId',
                          loc: {
                            start: 232,
                            end: 255,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 232,
                          end: 255,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'distance',
                          loc: {
                            start: 264,
                            end: 272,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 264,
                          end: 272,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'specialHours',
                          loc: {
                            start: 281,
                            end: 293,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 281,
                          end: 293,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'attributes',
                          loc: {
                            start: 302,
                            end: 312,
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
                                value: 'name',
                                loc: {
                                  start: 325,
                                  end: 329,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 325,
                                end: 329,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'description',
                                loc: {
                                  start: 340,
                                  end: 351,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 340,
                                end: 351,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'value',
                                loc: {
                                  start: 362,
                                  end: 367,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 362,
                                end: 367,
                              },
                            },
                          ],
                          loc: {
                            start: 313,
                            end: 377,
                          },
                        },
                        loc: {
                          start: 302,
                          end: 377,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'address',
                          loc: {
                            start: 387,
                            end: 394,
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
                                  start: 406,
                                  end: 411,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 406,
                                end: 411,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'street1',
                                loc: {
                                  start: 422,
                                  end: 429,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 422,
                                end: 429,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'street2',
                                loc: {
                                  start: 440,
                                  end: 447,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 440,
                                end: 447,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'city',
                                loc: {
                                  start: 458,
                                  end: 462,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 458,
                                end: 462,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'state',
                                loc: {
                                  start: 473,
                                  end: 478,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 473,
                                end: 478,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'zipCode',
                                loc: {
                                  start: 484,
                                  end: 491,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 484,
                                end: 491,
                              },
                            },
                          ],
                          loc: {
                            start: 395,
                            end: 511,
                          },
                        },
                        loc: {
                          start: 387,
                          end: 511,
                        },
                      },
                    ],
                    loc: {
                      start: 222,
                      end: 519,
                    },
                  },
                  loc: {
                    start: 217,
                    end: 519,
                  },
                },
              ],
              loc: {
                start: 209,
                end: 525,
              },
            },
            loc: {
              start: 203,
              end: 525,
            },
          },
        ],
        loc: {
          start: 197,
          end: 529,
        },
      },
      loc: {
        start: 19,
        end: 529,
      },
    },
  ],
  returnType: 'LocationConnection',
  parentType: 'Query',
  path: {
    key: 'locations',
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
    _possibleTypeMap: {},
    _implementations: {},
    _extensionsEnabled: true,
  },
  fragments: {},
  operation: {
    kind: 'OperationDefinition',
    operation: 'query',
    name: {
      kind: 'Name',
      value: 'location',
      loc: {
        start: 6,
        end: 14,
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
            value: 'locations',
            loc: {
              start: 19,
              end: 28,
            },
          },
          arguments: [
            {
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: 'filter',
                loc: {
                  start: 29,
                  end: 35,
                },
              },
              value: {
                kind: 'ObjectValue',
                fields: [],
                loc: {
                  start: 36,
                  end: 195,
                },
              },
              loc: {
                start: 29,
                end: 195,
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
                  value: 'edges',
                  loc: {
                    start: 203,
                    end: 208,
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
                        value: 'node',
                        loc: {
                          start: 217,
                          end: 221,
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
                              value: 'brandSpecificLocationId',
                              loc: {
                                start: 232,
                                end: 255,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 232,
                              end: 255,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'distance',
                              loc: {
                                start: 264,
                                end: 272,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 264,
                              end: 272,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'specialHours',
                              loc: {
                                start: 281,
                                end: 293,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 281,
                              end: 293,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'attributes',
                              loc: {
                                start: 302,
                                end: 312,
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
                                    value: 'name',
                                    loc: {
                                      start: 325,
                                      end: 329,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 325,
                                    end: 329,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'description',
                                    loc: {
                                      start: 340,
                                      end: 351,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 340,
                                    end: 351,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'value',
                                    loc: {
                                      start: 362,
                                      end: 367,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 362,
                                    end: 367,
                                  },
                                },
                              ],
                              loc: {
                                start: 313,
                                end: 377,
                              },
                            },
                            loc: {
                              start: 302,
                              end: 377,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'address',
                              loc: {
                                start: 387,
                                end: 394,
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
                                      start: 406,
                                      end: 411,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 406,
                                    end: 411,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'street1',
                                    loc: {
                                      start: 422,
                                      end: 429,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 422,
                                    end: 429,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'street2',
                                    loc: {
                                      start: 440,
                                      end: 447,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 440,
                                    end: 447,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'city',
                                    loc: {
                                      start: 458,
                                      end: 462,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 458,
                                    end: 462,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'state',
                                    loc: {
                                      start: 473,
                                      end: 478,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 473,
                                    end: 478,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'zipCode',
                                    loc: {
                                      start: 484,
                                      end: 491,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 484,
                                    end: 491,
                                  },
                                },
                              ],
                              loc: {
                                start: 395,
                                end: 511,
                              },
                            },
                            loc: {
                              start: 387,
                              end: 511,
                            },
                          },
                        ],
                        loc: {
                          start: 222,
                          end: 519,
                        },
                      },
                      loc: {
                        start: 217,
                        end: 519,
                      },
                    },
                  ],
                  loc: {
                    start: 209,
                    end: 525,
                  },
                },
                loc: {
                  start: 203,
                  end: 525,
                },
              },
            ],
            loc: {
              start: 197,
              end: 529,
            },
          },
          loc: {
            start: 19,
            end: 529,
          },
        },
      ],
      loc: {
        start: 15,
        end: 531,
      },
    },
    loc: {
      start: 0,
      end: 531,
    },
  },
  variableValues: {},
  cacheControl: {
    cacheHint: {
      maxAge: 0,
    },
  },
};

export const mockLocationResolveInfo = JSON.parse(JSON.stringify(data));
