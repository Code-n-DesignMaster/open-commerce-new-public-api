const data = {
  fieldName: 'getRateCards',
  fieldNodes: [
    {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: 'getRateCards',
        loc: {
          start: 23,
          end: 35,
        },
      },
      arguments: [
        {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: 'input',
            loc: {
              start: 36,
              end: 41,
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
                    start: 48,
                    end: 55,
                  },
                },
                value: {
                  kind: 'IntValue',
                  value: '3',
                  loc: {
                    start: 57,
                    end: 58,
                  },
                },
                loc: {
                  start: 48,
                  end: 58,
                },
              },
              {
                kind: 'ObjectField',
                name: {
                  kind: 'Name',
                  value: 'paymentType',
                  loc: {
                    start: 64,
                    end: 75,
                  },
                },
                value: {
                  kind: 'EnumValue',
                  value: 'NONE',
                  loc: {
                    start: 77,
                    end: 81,
                  },
                },
                loc: {
                  start: 64,
                  end: 81,
                },
              },
            ],
            loc: {
              start: 42,
              end: 85,
            },
          },
          loc: {
            start: 36,
            end: 85,
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
              value: 'rateCardHeadingText',
              loc: {
                start: 93,
                end: 112,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 93,
              end: 112,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'offerHeadingText',
              loc: {
                start: 117,
                end: 133,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 117,
              end: 133,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'offerCheckoutItemText',
              loc: {
                start: 138,
                end: 159,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 138,
              end: 159,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'offerCheckoutSubHeadingText',
              loc: {
                start: 164,
                end: 191,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 164,
              end: 191,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'offerRateCardSubHeadingText',
              loc: {
                start: 196,
                end: 223,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 196,
              end: 223,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'discountPercentage',
              loc: {
                start: 228,
                end: 246,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 228,
              end: 246,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'isNewCustomer',
              loc: {
                start: 257,
                end: 270,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 257,
              end: 270,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'attractionPrice',
              loc: {
                start: 275,
                end: 290,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 275,
              end: 290,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'activationFee',
              loc: {
                start: 295,
                end: 308,
              },
            },
            arguments: [],
            directives: [],
            loc: {
              start: 295,
              end: 308,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'activationItem',
              loc: {
                start: 313,
                end: 327,
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
                      start: 336,
                      end: 342,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 336,
                    end: 342,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'categoryId',
                    loc: {
                      start: 349,
                      end: 359,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 349,
                    end: 359,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'chips',
                    loc: {
                      start: 366,
                      end: 371,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 366,
                    end: 371,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'price',
                    loc: {
                      start: 378,
                      end: 383,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 378,
                    end: 383,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'originalPrice',
                    loc: {
                      start: 390,
                      end: 403,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 390,
                    end: 403,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'sequence',
                    loc: {
                      start: 410,
                      end: 418,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 410,
                    end: 418,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'isBestValue',
                    loc: {
                      start: 425,
                      end: 436,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 425,
                    end: 436,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'upSellId',
                    loc: {
                      start: 443,
                      end: 451,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 443,
                    end: 451,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'color',
                    loc: {
                      start: 458,
                      end: 463,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 458,
                    end: 463,
                  },
                },
              ],
              loc: {
                start: 328,
                end: 474,
              },
            },
            loc: {
              start: 313,
              end: 474,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'attractionItemList',
              loc: {
                start: 479,
                end: 497,
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
                      start: 506,
                      end: 512,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 506,
                    end: 512,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'categoryId',
                    loc: {
                      start: 519,
                      end: 529,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 519,
                    end: 529,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'chips',
                    loc: {
                      start: 536,
                      end: 541,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 536,
                    end: 541,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'price',
                    loc: {
                      start: 548,
                      end: 553,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 548,
                    end: 553,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'originalPrice',
                    loc: {
                      start: 560,
                      end: 573,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 560,
                    end: 573,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'sequence',
                    loc: {
                      start: 580,
                      end: 588,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 580,
                    end: 588,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'isBestValue',
                    loc: {
                      start: 595,
                      end: 606,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 595,
                    end: 606,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'upSellId',
                    loc: {
                      start: 613,
                      end: 621,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 613,
                    end: 621,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'color',
                    loc: {
                      start: 628,
                      end: 633,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 628,
                    end: 633,
                  },
                },
              ],
              loc: {
                start: 498,
                end: 639,
              },
            },
            loc: {
              start: 479,
              end: 639,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'categoryList',
              loc: {
                start: 644,
                end: 656,
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
                    value: 'categoryId',
                    loc: {
                      start: 665,
                      end: 675,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 665,
                    end: 675,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'label',
                    loc: {
                      start: 682,
                      end: 687,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 682,
                    end: 687,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'sequence',
                    loc: {
                      start: 694,
                      end: 702,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 694,
                    end: 702,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'color',
                    loc: {
                      start: 709,
                      end: 714,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 709,
                    end: 714,
                  },
                },
              ],
              loc: {
                start: 657,
                end: 720,
              },
            },
            loc: {
              start: 644,
              end: 720,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'menuItemList',
              loc: {
                start: 725,
                end: 737,
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
                      start: 746,
                      end: 752,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 746,
                    end: 752,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'categoryId',
                    loc: {
                      start: 759,
                      end: 769,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 759,
                    end: 769,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'chips',
                    loc: {
                      start: 776,
                      end: 781,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 776,
                    end: 781,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'price',
                    loc: {
                      start: 788,
                      end: 793,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 788,
                    end: 793,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'originalPrice',
                    loc: {
                      start: 800,
                      end: 813,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 800,
                    end: 813,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'sequence',
                    loc: {
                      start: 820,
                      end: 828,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 820,
                    end: 828,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'isBestValue',
                    loc: {
                      start: 835,
                      end: 846,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 835,
                    end: 846,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'upSellId',
                    loc: {
                      start: 853,
                      end: 861,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 853,
                    end: 861,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'color',
                    loc: {
                      start: 868,
                      end: 873,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 868,
                    end: 873,
                  },
                },
              ],
              loc: {
                start: 738,
                end: 879,
              },
            },
            loc: {
              start: 725,
              end: 879,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'upSellItemList',
              loc: {
                start: 884,
                end: 898,
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
                      start: 907,
                      end: 913,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 907,
                    end: 913,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'categoryId',
                    loc: {
                      start: 920,
                      end: 930,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 920,
                    end: 930,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'chips',
                    loc: {
                      start: 937,
                      end: 942,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 937,
                    end: 942,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'price',
                    loc: {
                      start: 949,
                      end: 954,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 949,
                    end: 954,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'originalPrice',
                    loc: {
                      start: 961,
                      end: 974,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 961,
                    end: 974,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'sequence',
                    loc: {
                      start: 981,
                      end: 989,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 981,
                    end: 989,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'isBestValue',
                    loc: {
                      start: 996,
                      end: 1007,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 996,
                    end: 1007,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'upSellId',
                    loc: {
                      start: 1014,
                      end: 1022,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 1014,
                    end: 1022,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'color',
                    loc: {
                      start: 1029,
                      end: 1034,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 1029,
                    end: 1034,
                  },
                },
              ],
              loc: {
                start: 899,
                end: 1040,
              },
            },
            loc: {
              start: 884,
              end: 1040,
            },
          },
        ],
        loc: {
          start: 87,
          end: 1044,
        },
      },
      loc: {
        start: 23,
        end: 1044,
      },
    },
  ],
  returnType: 'RateCard',
  parentType: 'Query',
  path: {
    key: 'getRateCards',
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
      value: 'getRateCards',
      loc: {
        start: 6,
        end: 18,
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
            value: 'getRateCards',
            loc: {
              start: 23,
              end: 35,
            },
          },
          arguments: [
            {
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: 'input',
                loc: {
                  start: 36,
                  end: 41,
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
                        start: 48,
                        end: 55,
                      },
                    },
                    value: {
                      kind: 'IntValue',
                      value: '3',
                      loc: {
                        start: 57,
                        end: 58,
                      },
                    },
                    loc: {
                      start: 48,
                      end: 58,
                    },
                  },
                  {
                    kind: 'ObjectField',
                    name: {
                      kind: 'Name',
                      value: 'paymentType',
                      loc: {
                        start: 64,
                        end: 75,
                      },
                    },
                    value: {
                      kind: 'EnumValue',
                      value: 'NONE',
                      loc: {
                        start: 77,
                        end: 81,
                      },
                    },
                    loc: {
                      start: 64,
                      end: 81,
                    },
                  },
                ],
                loc: {
                  start: 42,
                  end: 85,
                },
              },
              loc: {
                start: 36,
                end: 85,
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
                  value: 'rateCardHeadingText',
                  loc: {
                    start: 93,
                    end: 112,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 93,
                  end: 112,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'offerHeadingText',
                  loc: {
                    start: 117,
                    end: 133,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 117,
                  end: 133,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'offerCheckoutItemText',
                  loc: {
                    start: 138,
                    end: 159,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 138,
                  end: 159,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'offerCheckoutSubHeadingText',
                  loc: {
                    start: 164,
                    end: 191,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 164,
                  end: 191,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'offerRateCardSubHeadingText',
                  loc: {
                    start: 196,
                    end: 223,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 196,
                  end: 223,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'discountPercentage',
                  loc: {
                    start: 228,
                    end: 246,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 228,
                  end: 246,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'isNewCustomer',
                  loc: {
                    start: 257,
                    end: 270,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 257,
                  end: 270,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'attractionPrice',
                  loc: {
                    start: 275,
                    end: 290,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 275,
                  end: 290,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'activationFee',
                  loc: {
                    start: 295,
                    end: 308,
                  },
                },
                arguments: [],
                directives: [],
                loc: {
                  start: 295,
                  end: 308,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'activationItem',
                  loc: {
                    start: 313,
                    end: 327,
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
                          start: 336,
                          end: 342,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 336,
                        end: 342,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'categoryId',
                        loc: {
                          start: 349,
                          end: 359,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 349,
                        end: 359,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'chips',
                        loc: {
                          start: 366,
                          end: 371,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 366,
                        end: 371,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'price',
                        loc: {
                          start: 378,
                          end: 383,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 378,
                        end: 383,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'originalPrice',
                        loc: {
                          start: 390,
                          end: 403,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 390,
                        end: 403,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'sequence',
                        loc: {
                          start: 410,
                          end: 418,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 410,
                        end: 418,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'isBestValue',
                        loc: {
                          start: 425,
                          end: 436,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 425,
                        end: 436,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'upSellId',
                        loc: {
                          start: 443,
                          end: 451,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 443,
                        end: 451,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'color',
                        loc: {
                          start: 458,
                          end: 463,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 458,
                        end: 463,
                      },
                    },
                  ],
                  loc: {
                    start: 328,
                    end: 474,
                  },
                },
                loc: {
                  start: 313,
                  end: 474,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'attractionItemList',
                  loc: {
                    start: 479,
                    end: 497,
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
                          start: 506,
                          end: 512,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 506,
                        end: 512,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'categoryId',
                        loc: {
                          start: 519,
                          end: 529,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 519,
                        end: 529,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'chips',
                        loc: {
                          start: 536,
                          end: 541,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 536,
                        end: 541,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'price',
                        loc: {
                          start: 548,
                          end: 553,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 548,
                        end: 553,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'originalPrice',
                        loc: {
                          start: 560,
                          end: 573,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 560,
                        end: 573,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'sequence',
                        loc: {
                          start: 580,
                          end: 588,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 580,
                        end: 588,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'isBestValue',
                        loc: {
                          start: 595,
                          end: 606,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 595,
                        end: 606,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'upSellId',
                        loc: {
                          start: 613,
                          end: 621,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 613,
                        end: 621,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'color',
                        loc: {
                          start: 628,
                          end: 633,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 628,
                        end: 633,
                      },
                    },
                  ],
                  loc: {
                    start: 498,
                    end: 639,
                  },
                },
                loc: {
                  start: 479,
                  end: 639,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'categoryList',
                  loc: {
                    start: 644,
                    end: 656,
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
                        value: 'categoryId',
                        loc: {
                          start: 665,
                          end: 675,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 665,
                        end: 675,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'label',
                        loc: {
                          start: 682,
                          end: 687,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 682,
                        end: 687,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'sequence',
                        loc: {
                          start: 694,
                          end: 702,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 694,
                        end: 702,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'color',
                        loc: {
                          start: 709,
                          end: 714,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 709,
                        end: 714,
                      },
                    },
                  ],
                  loc: {
                    start: 657,
                    end: 720,
                  },
                },
                loc: {
                  start: 644,
                  end: 720,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'menuItemList',
                  loc: {
                    start: 725,
                    end: 737,
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
                          start: 746,
                          end: 752,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 746,
                        end: 752,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'categoryId',
                        loc: {
                          start: 759,
                          end: 769,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 759,
                        end: 769,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'chips',
                        loc: {
                          start: 776,
                          end: 781,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 776,
                        end: 781,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'price',
                        loc: {
                          start: 788,
                          end: 793,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 788,
                        end: 793,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'originalPrice',
                        loc: {
                          start: 800,
                          end: 813,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 800,
                        end: 813,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'sequence',
                        loc: {
                          start: 820,
                          end: 828,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 820,
                        end: 828,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'isBestValue',
                        loc: {
                          start: 835,
                          end: 846,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 835,
                        end: 846,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'upSellId',
                        loc: {
                          start: 853,
                          end: 861,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 853,
                        end: 861,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'color',
                        loc: {
                          start: 868,
                          end: 873,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 868,
                        end: 873,
                      },
                    },
                  ],
                  loc: {
                    start: 738,
                    end: 879,
                  },
                },
                loc: {
                  start: 725,
                  end: 879,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'upSellItemList',
                  loc: {
                    start: 884,
                    end: 898,
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
                          start: 907,
                          end: 913,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 907,
                        end: 913,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'categoryId',
                        loc: {
                          start: 920,
                          end: 930,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 920,
                        end: 930,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'chips',
                        loc: {
                          start: 937,
                          end: 942,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 937,
                        end: 942,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'price',
                        loc: {
                          start: 949,
                          end: 954,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 949,
                        end: 954,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'originalPrice',
                        loc: {
                          start: 961,
                          end: 974,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 961,
                        end: 974,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'sequence',
                        loc: {
                          start: 981,
                          end: 989,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 981,
                        end: 989,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'isBestValue',
                        loc: {
                          start: 996,
                          end: 1007,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 996,
                        end: 1007,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'upSellId',
                        loc: {
                          start: 1014,
                          end: 1022,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 1014,
                        end: 1022,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'color',
                        loc: {
                          start: 1029,
                          end: 1034,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 1029,
                        end: 1034,
                      },
                    },
                  ],
                  loc: {
                    start: 899,
                    end: 1040,
                  },
                },
                loc: {
                  start: 884,
                  end: 1040,
                },
              },
            ],
            loc: {
              start: 87,
              end: 1044,
            },
          },
          loc: {
            start: 23,
            end: 1044,
          },
        },
      ],
      loc: {
        start: 19,
        end: 1046,
      },
    },
    loc: {
      start: 0,
      end: 1046,
    },
  },
  variableValues: {},
  cacheControl: {
    cacheHint: {
      maxAge: 0,
    },
  },
};

export const mockRateCardResolveInfo = JSON.parse(JSON.stringify(data));
