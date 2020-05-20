const data = {
  fieldName: 'getTransactionsForCustomer',
  fieldNodes: [
    {
      kind: 'Field',
      name: {
        kind: 'Name',
        value: 'getTransactionsForCustomer',
        loc: {
          start: 56,
          end: 82,
        },
      },
      arguments: [
        {
          kind: 'Argument',
          name: {
            kind: 'Name',
            value: 'customerUuid',
            loc: {
              start: 83,
              end: 95,
            },
          },
          value: {
            kind: 'Variable',
            name: {
              kind: 'Name',
              value: 'customerUuid',
              loc: {
                start: 98,
                end: 110,
              },
            },
            loc: {
              start: 97,
              end: 110,
            },
          },
          loc: {
            start: 83,
            end: 110,
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
              value: 'pageInfo',
              loc: {
                start: 116,
                end: 124,
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
                    value: 'hasNextPage',
                    loc: {
                      start: 130,
                      end: 141,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 130,
                    end: 141,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'hasPreviousPage',
                    loc: {
                      start: 145,
                      end: 160,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 145,
                    end: 160,
                  },
                },
              ],
              loc: {
                start: 125,
                end: 164,
              },
            },
            loc: {
              start: 116,
              end: 164,
            },
          },
          {
            kind: 'Field',
            name: {
              kind: 'Name',
              value: 'edges',
              loc: {
                start: 167,
                end: 172,
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
                    value: 'cursor',
                    loc: {
                      start: 178,
                      end: 184,
                    },
                  },
                  arguments: [],
                  directives: [],
                  loc: {
                    start: 178,
                    end: 184,
                  },
                },
                {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'node',
                    loc: {
                      start: 188,
                      end: 192,
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
                          value: 'checkNumber',
                          loc: {
                            start: 199,
                            end: 210,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 199,
                          end: 210,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'uuid',
                          loc: {
                            start: 215,
                            end: 219,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 215,
                          end: 219,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'startedAt',
                          loc: {
                            start: 224,
                            end: 233,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 224,
                          end: 233,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lastUpdatedAt',
                          loc: {
                            start: 238,
                            end: 251,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 238,
                          end: 251,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'completedAt',
                          loc: {
                            start: 256,
                            end: 267,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 256,
                          end: 267,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'additionalReceiptData',
                          loc: {
                            start: 272,
                            end: 293,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 272,
                          end: 293,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'amount',
                          loc: {
                            start: 298,
                            end: 304,
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
                                value: 'displayPrice',
                                loc: {
                                  start: 312,
                                  end: 324,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 312,
                                end: 324,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'price',
                                loc: {
                                  start: 330,
                                  end: 335,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 330,
                                end: 335,
                              },
                            },
                          ],
                          loc: {
                            start: 305,
                            end: 341,
                          },
                        },
                        loc: {
                          start: 298,
                          end: 341,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'items',
                          loc: {
                            start: 346,
                            end: 351,
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
                                value: 'itemType',
                                loc: {
                                  start: 359,
                                  end: 367,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 359,
                                end: 367,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'itemDescription',
                                loc: {
                                  start: 373,
                                  end: 388,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 373,
                                end: 388,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'qty',
                                loc: {
                                  start: 394,
                                  end: 397,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 394,
                                end: 397,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'amount',
                                loc: {
                                  start: 403,
                                  end: 409,
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
                                      value: 'price',
                                      loc: {
                                        start: 418,
                                        end: 423,
                                      },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: {
                                      start: 418,
                                      end: 423,
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'displayPrice',
                                      loc: {
                                        start: 430,
                                        end: 442,
                                      },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: {
                                      start: 430,
                                      end: 442,
                                    },
                                  },
                                ],
                                loc: {
                                  start: 410,
                                  end: 449,
                                },
                              },
                              loc: {
                                start: 403,
                                end: 449,
                              },
                            },
                          ],
                          loc: {
                            start: 352,
                            end: 455,
                          },
                        },
                        loc: {
                          start: 346,
                          end: 455,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'paymentProviderTransactionId',
                          loc: {
                            start: 460,
                            end: 488,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 460,
                          end: 488,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'tax',
                          loc: {
                            start: 493,
                            end: 496,
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
                                value: 'price',
                                loc: {
                                  start: 504,
                                  end: 509,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 504,
                                end: 509,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'displayPrice',
                                loc: {
                                  start: 515,
                                  end: 527,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 515,
                                end: 527,
                              },
                            },
                          ],
                          loc: {
                            start: 497,
                            end: 533,
                          },
                        },
                        loc: {
                          start: 493,
                          end: 533,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'paymentInfo',
                          loc: {
                            start: 538,
                            end: 549,
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
                                value: 'cardPANPrint',
                                loc: {
                                  start: 557,
                                  end: 569,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 557,
                                end: 569,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'cardType',
                                loc: {
                                  start: 575,
                                  end: 583,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 575,
                                end: 583,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'hostAuthNumber',
                                loc: {
                                  start: 589,
                                  end: 603,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 589,
                                end: 603,
                              },
                            },
                          ],
                          loc: {
                            start: 550,
                            end: 609,
                          },
                        },
                        loc: {
                          start: 538,
                          end: 609,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'powercard',
                          loc: {
                            start: 614,
                            end: 623,
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
                                value: 'uuid',
                                loc: {
                                  start: 631,
                                  end: 635,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 631,
                                end: 635,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'isPhysical',
                                loc: {
                                  start: 641,
                                  end: 651,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 641,
                                end: 651,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'cardNumber',
                                loc: {
                                  start: 657,
                                  end: 667,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 657,
                                end: 667,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'status',
                                loc: {
                                  start: 673,
                                  end: 679,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 673,
                                end: 679,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'cardType',
                                loc: {
                                  start: 685,
                                  end: 693,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 685,
                                end: 693,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'cardAlias',
                                loc: {
                                  start: 699,
                                  end: 708,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 699,
                                end: 708,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'imagePack',
                                loc: {
                                  start: 714,
                                  end: 723,
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
                                      value: 'uuid',
                                      loc: {
                                        start: 732,
                                        end: 736,
                                      },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: {
                                      start: 732,
                                      end: 736,
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'fullsizeImages',
                                      loc: {
                                        start: 743,
                                        end: 757,
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
                                            value: 'url',
                                            loc: {
                                              start: 767,
                                              end: 770,
                                            },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: {
                                            start: 767,
                                            end: 770,
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'width',
                                            loc: {
                                              start: 778,
                                              end: 783,
                                            },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: {
                                            start: 778,
                                            end: 783,
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'height',
                                            loc: {
                                              start: 791,
                                              end: 797,
                                            },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: {
                                            start: 791,
                                            end: 797,
                                          },
                                        },
                                      ],
                                      loc: {
                                        start: 758,
                                        end: 805,
                                      },
                                    },
                                    loc: {
                                      start: 743,
                                      end: 805,
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'thumbnailImages',
                                      loc: {
                                        start: 812,
                                        end: 827,
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
                                            value: 'url',
                                            loc: {
                                              start: 837,
                                              end: 840,
                                            },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: {
                                            start: 837,
                                            end: 840,
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'width',
                                            loc: {
                                              start: 848,
                                              end: 853,
                                            },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: {
                                            start: 848,
                                            end: 853,
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'height',
                                            loc: {
                                              start: 861,
                                              end: 867,
                                            },
                                          },
                                          arguments: [],
                                          directives: [],
                                          loc: {
                                            start: 861,
                                            end: 867,
                                          },
                                        },
                                      ],
                                      loc: {
                                        start: 828,
                                        end: 875,
                                      },
                                    },
                                    loc: {
                                      start: 812,
                                      end: 875,
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'name',
                                      loc: {
                                        start: 882,
                                        end: 886,
                                      },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: {
                                      start: 882,
                                      end: 886,
                                    },
                                  },
                                ],
                                loc: {
                                  start: 724,
                                  end: 893,
                                },
                              },
                              loc: {
                                start: 714,
                                end: 893,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'gameChips',
                                loc: {
                                  start: 899,
                                  end: 908,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 899,
                                end: 908,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'videoChips',
                                loc: {
                                  start: 914,
                                  end: 924,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 914,
                                end: 924,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'rewardChips',
                                loc: {
                                  start: 930,
                                  end: 941,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 930,
                                end: 941,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'attractionChips',
                                loc: {
                                  start: 947,
                                  end: 962,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 947,
                                end: 962,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tickets',
                                loc: {
                                  start: 968,
                                  end: 975,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 968,
                                end: 975,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'rewardPoints',
                                loc: {
                                  start: 981,
                                  end: 993,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 981,
                                end: 993,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'pointsToNextReward',
                                loc: {
                                  start: 999,
                                  end: 1017,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 999,
                                end: 1017,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'isRegisteredReward',
                                loc: {
                                  start: 1023,
                                  end: 1041,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 1023,
                                end: 1041,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'easyRechargeEnabled',
                                loc: {
                                  start: 1047,
                                  end: 1066,
                                },
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 1047,
                                end: 1066,
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'walletPass',
                                loc: {
                                  start: 1072,
                                  end: 1082,
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
                                      value: 'pkPassUrl',
                                      loc: {
                                        start: 1091,
                                        end: 1100,
                                      },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: {
                                      start: 1091,
                                      end: 1100,
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'googlePayUrl',
                                      loc: {
                                        start: 1107,
                                        end: 1119,
                                      },
                                    },
                                    arguments: [],
                                    directives: [],
                                    loc: {
                                      start: 1107,
                                      end: 1119,
                                    },
                                  },
                                ],
                                loc: {
                                  start: 1083,
                                  end: 1126,
                                },
                              },
                              loc: {
                                start: 1072,
                                end: 1126,
                              },
                            },
                          ],
                          loc: {
                            start: 624,
                            end: 1132,
                          },
                        },
                        loc: {
                          start: 614,
                          end: 1132,
                        },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'purchaseType',
                          loc: {
                            start: 1137,
                            end: 1149,
                          },
                        },
                        arguments: [],
                        directives: [],
                        loc: {
                          start: 1137,
                          end: 1149,
                        },
                      },
                    ],
                    loc: {
                      start: 193,
                      end: 1154,
                    },
                  },
                  loc: {
                    start: 188,
                    end: 1154,
                  },
                },
              ],
              loc: {
                start: 173,
                end: 1158,
              },
            },
            loc: {
              start: 167,
              end: 1158,
            },
          },
        ],
        loc: {
          start: 112,
          end: 1161,
        },
      },
      loc: {
        start: 56,
        end: 1161,
      },
    },
  ],
  returnType: 'TransactionConnection',
  parentType: 'Query',
  path: {
    key: 'getTransactionsForCustomer',
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
      ],
    },
    extensionASTNodes: [],
    __allowedLegacyNames: [],
    _queryType: 'Query',
    _mutationType: 'Mutation',
    _directives: ['@skip', '@include', '@deprecated'],
    _typeMap: {
      Query: 'Query',
      ID: 'ID',
      TRANSACTION_STATUS: 'TRANSACTION_STATUS',
      TransactionOrTransactionServiceError:
        'TransactionOrTransactionServiceError',
      Transaction: 'Transaction',
      Powercard: 'Powercard',
      Boolean: 'Boolean',
      String: 'String',
      POWERCARD_STATUS_TYPE: 'POWERCARD_STATUS_TYPE',
      POWERCARD_CARD_TYPE: 'POWERCARD_CARD_TYPE',
      PowercardImagePack: 'PowercardImagePack',
      PowercardImage: 'PowercardImage',
      OCURL: 'OCURL',
      Int: 'Int',
      Float: 'Float',
      WalletPassUrl: 'WalletPassUrl',
      ItemCurrency: 'ItemCurrency',
      STAC: 'STAC',
      OCDateTime: 'OCDateTime',
      LoyaltyInstrument: 'LoyaltyInstrument',
      LOYALTY_INSTRUMENT_STATUS: 'LOYALTY_INSTRUMENT_STATUS',
      TransactionPaymentInfo: 'TransactionPaymentInfo',
      Location: 'Location',
      Address: 'Address',
      GeoLocation: 'GeoLocation',
      LocationAttribute: 'LocationAttribute',
      LocationResource: 'LocationResource',
      LOCATION_RESOURCE_TYPE: 'LOCATION_RESOURCE_TYPE',
      ResourceItemFilter: 'ResourceItemFilter',
      RESOURCE_ITEM_TYPE: 'RESOURCE_ITEM_TYPE',
      ResourceItemConnection: 'ResourceItemConnection',
      ResourceItemEdge: 'ResourceItemEdge',
      ResourceItem: 'ResourceItem',
      ResourceItemPrice: 'ResourceItemPrice',
      PageInfo: 'PageInfo',
      LOCATION_RESOURCE_STATUS: 'LOCATION_RESOURCE_STATUS',
      Brand: 'Brand',
      Tenant: 'Tenant',
      BrandAgreement: 'BrandAgreement',
      BrandCustomerPreference: 'BrandCustomerPreference',
      PAYMENT_INSTRUMENT_TYPE: 'PAYMENT_INSTRUMENT_TYPE',
      BackgroundImage: 'BackgroundImage',
      Image: 'Image',
      ContactPhoneNumber: 'ContactPhoneNumber',
      OCPhoneNumber: 'OCPhoneNumber',
      PHONE_TYPE: 'PHONE_TYPE',
      OpenCommerceFeature: 'OpenCommerceFeature',
      HoursOfOperationGroup: 'HoursOfOperationGroup',
      HoursOfOperation: 'HoursOfOperation',
      WEEKDAY: 'WEEKDAY',
      TransactionItem: 'TransactionItem',
      ItemPrice: 'ItemPrice',
      TRANSACTION_ITEM_TYPE: 'TRANSACTION_ITEM_TYPE',
      HARDWARE_VENDOR: 'HARDWARE_VENDOR',
      TRANSACTION_TYPE: 'TRANSACTION_TYPE',
      PAYMENT_LEVEL: 'PAYMENT_LEVEL',
      LOYALTY_LEVEL: 'LOYALTY_LEVEL',
      FUEL_PUMP_STATUS: 'FUEL_PUMP_STATUS',
      ReceiptLine: 'ReceiptLine',
      OCJSON: 'OCJSON',
      FuelReceipt: 'FuelReceipt',
      TransactionPaymentEvent: 'TransactionPaymentEvent',
      TRANSACTION_EVENT_TYPE: 'TRANSACTION_EVENT_TYPE',
      TRANSACTION_PURCHASE_TYPE: 'TRANSACTION_PURCHASE_TYPE',
      TransactionServiceError: 'TransactionServiceError',
      TransactionFilter: 'TransactionFilter',
      LoyaltyInstrumentFilter: 'LoyaltyInstrumentFilter',
      TransactionPaymentInfoFilter: 'TransactionPaymentInfoFilter',
      LocationFilter: 'LocationFilter',
      LocationAttributeFilter: 'LocationAttributeFilter',
      LocationResourceFilter: 'LocationResourceFilter',
      BrandFilter: 'BrandFilter',
      OpenCommerceFeatureFilter: 'OpenCommerceFeatureFilter',
      GeoLocationCreate: 'GeoLocationCreate',
      TransactionConnection: 'TransactionConnection',
      TransactionEdge: 'TransactionEdge',
      Mutation: 'Mutation',
      TransactionStart: 'TransactionStart',
      ItemPriceInput: 'ItemPriceInput',
      ItemCurrencyInput: 'ItemCurrencyInput',
      CustomerPinCode: 'CustomerPinCode',
      DaveAndBustersTransactionStart: 'DaveAndBustersTransactionStart',
      AddressInput: 'AddressInput',
      GeoLocationInput: 'GeoLocationInput',
      DaveAndBustersItem: 'DaveAndBustersItem',
      DAVE_BUSTERS_ITEM_TYPE: 'DAVE_BUSTERS_ITEM_TYPE',
      BillingInput: 'BillingInput',
      __Schema: '__Schema',
      __Type: '__Type',
      __TypeKind: '__TypeKind',
      __Field: '__Field',
      __InputValue: '__InputValue',
      __EnumValue: '__EnumValue',
      __Directive: '__Directive',
      __DirectiveLocation: '__DirectiveLocation',
      OCDate: 'OCDate',
      OCEmailAddress: 'OCEmailAddress',
      AccessTokenByRefreshTokenInput: 'AccessTokenByRefreshTokenInput',
      OTP: 'OTP',
      GeoLocationUpdate: 'GeoLocationUpdate',
      GeoLocationFilter: 'GeoLocationFilter',
      PersonNameCreate: 'PersonNameCreate',
      AuthPayload: 'AuthPayload',
      Tokens: 'Tokens',
      Customer: 'Customer',
      PersonName: 'PersonName',
      PaymentInstrument: 'PaymentInstrument',
      PaymentInstrumentExpiration: 'PaymentInstrumentExpiration',
      PAYMENT_INSTRUMENT_STATUS: 'PAYMENT_INSTRUMENT_STATUS',
      PaymentProviderAccount: 'PaymentProviderAccount',
      PaymentProvider: 'PaymentProvider',
      Demographics: 'Demographics',
      CUSTOMER_STATUS: 'CUSTOMER_STATUS',
      CustomerAgreement: 'CustomerAgreement',
      CustomerPreference: 'CustomerPreference',
      PreferenceValue: 'PreferenceValue',
      CustomerLoginAttemptFilter: 'CustomerLoginAttemptFilter',
      CustomerDeviceFilter: 'CustomerDeviceFilter',
      CustomerLoginAttemptConnection: 'CustomerLoginAttemptConnection',
      CustomerLoginAttemptEdge: 'CustomerLoginAttemptEdge',
      CustomerLoginAttempt: 'CustomerLoginAttempt',
      CustomerDevice: 'CustomerDevice',
      ClientToken: 'ClientToken',
      OTP_MODE: 'OTP_MODE',
      OTP_CHANNEL: 'OTP_CHANNEL',
      DEVICE_TYPE: 'DEVICE_TYPE',
      CustomerFilter: 'CustomerFilter',
      SearchQuery: 'SearchQuery',
      CustomerCreate: 'CustomerCreate',
      CustomerPersonNameCreate: 'CustomerPersonNameCreate',
      CustomerAddressCreate: 'CustomerAddressCreate',
      CustomerAgreementCreate: 'CustomerAgreementCreate',
      CustomerDemographicsCreate: 'CustomerDemographicsCreate',
      CustomerPhoneNumberCreate: 'CustomerPhoneNumberCreate',
      CustomerPreferenceCreate: 'CustomerPreferenceCreate',
      PreferenceValueCreate: 'PreferenceValueCreate',
      CustomerRegistrationComplete: 'CustomerRegistrationComplete',
      CustomerCreateVerify: 'CustomerCreateVerify',
      CustomerUpdate: 'CustomerUpdate',
      CustomerPersonNameUpdate: 'CustomerPersonNameUpdate',
      CustomerAddressUpdate: 'CustomerAddressUpdate',
      CustomerDemographicsUpdate: 'CustomerDemographicsUpdate',
      CustomerPhoneNumberUpdate: 'CustomerPhoneNumberUpdate',
      CustomerPreferenceUpdate: 'CustomerPreferenceUpdate',
      BrandCustomerPreferenceUpdate: 'BrandCustomerPreferenceUpdate',
      PreferenceValueUpdate: 'PreferenceValueUpdate',
      CustomerLoyaltyInstrumentCreate: 'CustomerLoyaltyInstrumentCreate',
      CustomerLoyaltyInstrumentUpdate: 'CustomerLoyaltyInstrumentUpdate',
      CustomerUsername: 'CustomerUsername',
      CustomerPassword: 'CustomerPassword',
      CustomerPasswordSet: 'CustomerPasswordSet',
      CustomerPasswordChange: 'CustomerPasswordChange',
      CustomerPasswordCredentials: 'CustomerPasswordCredentials',
      CustomerPasswordResetByOTPVerify: 'CustomerPasswordResetByOTPVerify',
      CustomerPasswordReset: 'CustomerPasswordReset',
      CustomerPasswordResetPaymentInstrumentVerify:
        'CustomerPasswordResetPaymentInstrumentVerify',
      PaymentInstrumentExpirationInput: 'PaymentInstrumentExpirationInput',
      CustomerPinCodeSet: 'CustomerPinCodeSet',
      CustomerPinCodeChange: 'CustomerPinCodeChange',
      CustomerOTPVerify: 'CustomerOTPVerify',
      CustomerPinCodeCredentials: 'CustomerPinCodeCredentials',
      CustomerPinCodeVerify: 'CustomerPinCodeVerify',
      CustomerDeviceCreate: 'CustomerDeviceCreate',
      CustomerDeviceUpdate: 'CustomerDeviceUpdate',
      CustomerOTPRequest: 'CustomerOTPRequest',
      CustomerContact: 'CustomerContact',
      CUSTOMER_REQUEST_TYPE: 'CUSTOMER_REQUEST_TYPE',
      CustomerFeedback: 'CustomerFeedback',
      CustomerConnection: 'CustomerConnection',
      CustomerEdge: 'CustomerEdge',
      CustomerSummary: 'CustomerSummary',
      CustomerOTPPayload: 'CustomerOTPPayload',
      LocationCheckIn: 'LocationCheckIn',
      LocationConnection: 'LocationConnection',
      LocationEdge: 'LocationEdge',
      PaymentProviderAccountInput: 'PaymentProviderAccountInput',
      PaymentProviderInput: 'PaymentProviderInput',
      CustomerPaymentInstrumentCreate: 'CustomerPaymentInstrumentCreate',
      CustomerPaymentInstrumentVerify: 'CustomerPaymentInstrumentVerify',
      CustomerPaymentInstrumentUpdate: 'CustomerPaymentInstrumentUpdate',
      PaymentProviderResponse: 'PaymentProviderResponse',
      CHECK_LINE_ITEM_TYPE: 'CHECK_LINE_ITEM_TYPE',
      Check: 'Check',
      CheckLineItem: 'CheckLineItem',
      CheckPaymentApplyInput: 'CheckPaymentApplyInput',
      VirtualPowercardCreate: 'VirtualPowercardCreate',
      PowercardCreate: 'PowercardCreate',
      PowercardAttributesUpdate: 'PowercardAttributesUpdate',
      PowercardFundsAdd: 'PowercardFundsAdd',
      PowercardOfferList: 'PowercardOfferList',
      OFFER_PAYMENT_TYPE: 'OFFER_PAYMENT_TYPE',
      PowercardConfigItemInput: 'PowercardConfigItemInput',
      PowercardConfigItem: 'PowercardConfigItem',
      AprivaPowercard: 'AprivaPowercard',
      TransactionPowercard: 'TransactionPowercard',
      RateCard: 'RateCard',
      RateCardItem: 'RateCardItem',
      RateCardCategory: 'RateCardCategory',
      RateCardFilter: 'RateCardFilter',
      RewardAccountInput: 'RewardAccountInput',
      PowercardOffer: 'PowercardOffer',
      OFFER_TYPE: 'OFFER_TYPE',
      PowercardOfferListResponse: 'PowercardOfferListResponse',
      Response: 'Response',
      RewardHistory: 'RewardHistory',
      RewardTransaction: 'RewardTransaction',
      FeaturesResponse: 'FeaturesResponse',
      Feature: 'Feature',
      DAVE_AND_BUSTERS_FEATURE: 'DAVE_AND_BUSTERS_FEATURE',
      FeatureEnabledResponse: 'FeatureEnabledResponse',
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
      value: 'getTransactionsForCustomer',
      loc: {
        start: 6,
        end: 32,
      },
    },
    variableDefinitions: [
      {
        kind: 'VariableDefinition',
        variable: {
          kind: 'Variable',
          name: {
            kind: 'Name',
            value: 'customerUuid',
            loc: {
              start: 34,
              end: 46,
            },
          },
          loc: {
            start: 33,
            end: 46,
          },
        },
        type: {
          kind: 'NonNullType',
          type: {
            kind: 'NamedType',
            name: {
              kind: 'Name',
              value: 'ID',
              loc: {
                start: 48,
                end: 50,
              },
            },
            loc: {
              start: 48,
              end: 50,
            },
          },
          loc: {
            start: 48,
            end: 51,
          },
        },
        directives: [],
        loc: {
          start: 33,
          end: 51,
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
            value: 'getTransactionsForCustomer',
            loc: {
              start: 56,
              end: 82,
            },
          },
          arguments: [
            {
              kind: 'Argument',
              name: {
                kind: 'Name',
                value: 'customerUuid',
                loc: {
                  start: 83,
                  end: 95,
                },
              },
              value: {
                kind: 'Variable',
                name: {
                  kind: 'Name',
                  value: 'customerUuid',
                  loc: {
                    start: 98,
                    end: 110,
                  },
                },
                loc: {
                  start: 97,
                  end: 110,
                },
              },
              loc: {
                start: 83,
                end: 110,
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
                  value: 'pageInfo',
                  loc: {
                    start: 116,
                    end: 124,
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
                        value: 'hasNextPage',
                        loc: {
                          start: 130,
                          end: 141,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 130,
                        end: 141,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'hasPreviousPage',
                        loc: {
                          start: 145,
                          end: 160,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 145,
                        end: 160,
                      },
                    },
                  ],
                  loc: {
                    start: 125,
                    end: 164,
                  },
                },
                loc: {
                  start: 116,
                  end: 164,
                },
              },
              {
                kind: 'Field',
                name: {
                  kind: 'Name',
                  value: 'edges',
                  loc: {
                    start: 167,
                    end: 172,
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
                        value: 'cursor',
                        loc: {
                          start: 178,
                          end: 184,
                        },
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 178,
                        end: 184,
                      },
                    },
                    {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'node',
                        loc: {
                          start: 188,
                          end: 192,
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
                              value: 'checkNumber',
                              loc: {
                                start: 199,
                                end: 210,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 199,
                              end: 210,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'uuid',
                              loc: {
                                start: 215,
                                end: 219,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 215,
                              end: 219,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'startedAt',
                              loc: {
                                start: 224,
                                end: 233,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 224,
                              end: 233,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'lastUpdatedAt',
                              loc: {
                                start: 238,
                                end: 251,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 238,
                              end: 251,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'completedAt',
                              loc: {
                                start: 256,
                                end: 267,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 256,
                              end: 267,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'additionalReceiptData',
                              loc: {
                                start: 272,
                                end: 293,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 272,
                              end: 293,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'amount',
                              loc: {
                                start: 298,
                                end: 304,
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
                                    value: 'displayPrice',
                                    loc: {
                                      start: 312,
                                      end: 324,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 312,
                                    end: 324,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'price',
                                    loc: {
                                      start: 330,
                                      end: 335,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 330,
                                    end: 335,
                                  },
                                },
                              ],
                              loc: {
                                start: 305,
                                end: 341,
                              },
                            },
                            loc: {
                              start: 298,
                              end: 341,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'items',
                              loc: {
                                start: 346,
                                end: 351,
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
                                    value: 'itemType',
                                    loc: {
                                      start: 359,
                                      end: 367,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 359,
                                    end: 367,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'itemDescription',
                                    loc: {
                                      start: 373,
                                      end: 388,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 373,
                                    end: 388,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'qty',
                                    loc: {
                                      start: 394,
                                      end: 397,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 394,
                                    end: 397,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'amount',
                                    loc: {
                                      start: 403,
                                      end: 409,
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
                                          value: 'price',
                                          loc: {
                                            start: 418,
                                            end: 423,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 418,
                                          end: 423,
                                        },
                                      },
                                      {
                                        kind: 'Field',
                                        name: {
                                          kind: 'Name',
                                          value: 'displayPrice',
                                          loc: {
                                            start: 430,
                                            end: 442,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 430,
                                          end: 442,
                                        },
                                      },
                                    ],
                                    loc: {
                                      start: 410,
                                      end: 449,
                                    },
                                  },
                                  loc: {
                                    start: 403,
                                    end: 449,
                                  },
                                },
                              ],
                              loc: {
                                start: 352,
                                end: 455,
                              },
                            },
                            loc: {
                              start: 346,
                              end: 455,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'paymentProviderTransactionId',
                              loc: {
                                start: 460,
                                end: 488,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 460,
                              end: 488,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'tax',
                              loc: {
                                start: 493,
                                end: 496,
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
                                    value: 'price',
                                    loc: {
                                      start: 504,
                                      end: 509,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 504,
                                    end: 509,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'displayPrice',
                                    loc: {
                                      start: 515,
                                      end: 527,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 515,
                                    end: 527,
                                  },
                                },
                              ],
                              loc: {
                                start: 497,
                                end: 533,
                              },
                            },
                            loc: {
                              start: 493,
                              end: 533,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'paymentInfo',
                              loc: {
                                start: 538,
                                end: 549,
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
                                    value: 'cardPANPrint',
                                    loc: {
                                      start: 557,
                                      end: 569,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 557,
                                    end: 569,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'cardType',
                                    loc: {
                                      start: 575,
                                      end: 583,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 575,
                                    end: 583,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'hostAuthNumber',
                                    loc: {
                                      start: 589,
                                      end: 603,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 589,
                                    end: 603,
                                  },
                                },
                              ],
                              loc: {
                                start: 550,
                                end: 609,
                              },
                            },
                            loc: {
                              start: 538,
                              end: 609,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'powercard',
                              loc: {
                                start: 614,
                                end: 623,
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
                                    value: 'uuid',
                                    loc: {
                                      start: 631,
                                      end: 635,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 631,
                                    end: 635,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'isPhysical',
                                    loc: {
                                      start: 641,
                                      end: 651,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 641,
                                    end: 651,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'cardNumber',
                                    loc: {
                                      start: 657,
                                      end: 667,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 657,
                                    end: 667,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'status',
                                    loc: {
                                      start: 673,
                                      end: 679,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 673,
                                    end: 679,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'cardType',
                                    loc: {
                                      start: 685,
                                      end: 693,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 685,
                                    end: 693,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'cardAlias',
                                    loc: {
                                      start: 699,
                                      end: 708,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 699,
                                    end: 708,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'imagePack',
                                    loc: {
                                      start: 714,
                                      end: 723,
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
                                          value: 'uuid',
                                          loc: {
                                            start: 732,
                                            end: 736,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 732,
                                          end: 736,
                                        },
                                      },
                                      {
                                        kind: 'Field',
                                        name: {
                                          kind: 'Name',
                                          value: 'fullsizeImages',
                                          loc: {
                                            start: 743,
                                            end: 757,
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
                                                value: 'url',
                                                loc: {
                                                  start: 767,
                                                  end: 770,
                                                },
                                              },
                                              arguments: [],
                                              directives: [],
                                              loc: {
                                                start: 767,
                                                end: 770,
                                              },
                                            },
                                            {
                                              kind: 'Field',
                                              name: {
                                                kind: 'Name',
                                                value: 'width',
                                                loc: {
                                                  start: 778,
                                                  end: 783,
                                                },
                                              },
                                              arguments: [],
                                              directives: [],
                                              loc: {
                                                start: 778,
                                                end: 783,
                                              },
                                            },
                                            {
                                              kind: 'Field',
                                              name: {
                                                kind: 'Name',
                                                value: 'height',
                                                loc: {
                                                  start: 791,
                                                  end: 797,
                                                },
                                              },
                                              arguments: [],
                                              directives: [],
                                              loc: {
                                                start: 791,
                                                end: 797,
                                              },
                                            },
                                          ],
                                          loc: {
                                            start: 758,
                                            end: 805,
                                          },
                                        },
                                        loc: {
                                          start: 743,
                                          end: 805,
                                        },
                                      },
                                      {
                                        kind: 'Field',
                                        name: {
                                          kind: 'Name',
                                          value: 'thumbnailImages',
                                          loc: {
                                            start: 812,
                                            end: 827,
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
                                                value: 'url',
                                                loc: {
                                                  start: 837,
                                                  end: 840,
                                                },
                                              },
                                              arguments: [],
                                              directives: [],
                                              loc: {
                                                start: 837,
                                                end: 840,
                                              },
                                            },
                                            {
                                              kind: 'Field',
                                              name: {
                                                kind: 'Name',
                                                value: 'width',
                                                loc: {
                                                  start: 848,
                                                  end: 853,
                                                },
                                              },
                                              arguments: [],
                                              directives: [],
                                              loc: {
                                                start: 848,
                                                end: 853,
                                              },
                                            },
                                            {
                                              kind: 'Field',
                                              name: {
                                                kind: 'Name',
                                                value: 'height',
                                                loc: {
                                                  start: 861,
                                                  end: 867,
                                                },
                                              },
                                              arguments: [],
                                              directives: [],
                                              loc: {
                                                start: 861,
                                                end: 867,
                                              },
                                            },
                                          ],
                                          loc: {
                                            start: 828,
                                            end: 875,
                                          },
                                        },
                                        loc: {
                                          start: 812,
                                          end: 875,
                                        },
                                      },
                                      {
                                        kind: 'Field',
                                        name: {
                                          kind: 'Name',
                                          value: 'name',
                                          loc: {
                                            start: 882,
                                            end: 886,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 882,
                                          end: 886,
                                        },
                                      },
                                    ],
                                    loc: {
                                      start: 724,
                                      end: 893,
                                    },
                                  },
                                  loc: {
                                    start: 714,
                                    end: 893,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'gameChips',
                                    loc: {
                                      start: 899,
                                      end: 908,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 899,
                                    end: 908,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'videoChips',
                                    loc: {
                                      start: 914,
                                      end: 924,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 914,
                                    end: 924,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'rewardChips',
                                    loc: {
                                      start: 930,
                                      end: 941,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 930,
                                    end: 941,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'attractionChips',
                                    loc: {
                                      start: 947,
                                      end: 962,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 947,
                                    end: 962,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'tickets',
                                    loc: {
                                      start: 968,
                                      end: 975,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 968,
                                    end: 975,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'rewardPoints',
                                    loc: {
                                      start: 981,
                                      end: 993,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 981,
                                    end: 993,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'pointsToNextReward',
                                    loc: {
                                      start: 999,
                                      end: 1017,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 999,
                                    end: 1017,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'isRegisteredReward',
                                    loc: {
                                      start: 1023,
                                      end: 1041,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 1023,
                                    end: 1041,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'easyRechargeEnabled',
                                    loc: {
                                      start: 1047,
                                      end: 1066,
                                    },
                                  },
                                  arguments: [],
                                  directives: [],
                                  loc: {
                                    start: 1047,
                                    end: 1066,
                                  },
                                },
                                {
                                  kind: 'Field',
                                  name: {
                                    kind: 'Name',
                                    value: 'walletPass',
                                    loc: {
                                      start: 1072,
                                      end: 1082,
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
                                          value: 'pkPassUrl',
                                          loc: {
                                            start: 1091,
                                            end: 1100,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 1091,
                                          end: 1100,
                                        },
                                      },
                                      {
                                        kind: 'Field',
                                        name: {
                                          kind: 'Name',
                                          value: 'googlePayUrl',
                                          loc: {
                                            start: 1107,
                                            end: 1119,
                                          },
                                        },
                                        arguments: [],
                                        directives: [],
                                        loc: {
                                          start: 1107,
                                          end: 1119,
                                        },
                                      },
                                    ],
                                    loc: {
                                      start: 1083,
                                      end: 1126,
                                    },
                                  },
                                  loc: {
                                    start: 1072,
                                    end: 1126,
                                  },
                                },
                              ],
                              loc: {
                                start: 624,
                                end: 1132,
                              },
                            },
                            loc: {
                              start: 614,
                              end: 1132,
                            },
                          },
                          {
                            kind: 'Field',
                            name: {
                              kind: 'Name',
                              value: 'purchaseType',
                              loc: {
                                start: 1137,
                                end: 1149,
                              },
                            },
                            arguments: [],
                            directives: [],
                            loc: {
                              start: 1137,
                              end: 1149,
                            },
                          },
                        ],
                        loc: {
                          start: 193,
                          end: 1154,
                        },
                      },
                      loc: {
                        start: 188,
                        end: 1154,
                      },
                    },
                  ],
                  loc: {
                    start: 173,
                    end: 1158,
                  },
                },
                loc: {
                  start: 167,
                  end: 1158,
                },
              },
            ],
            loc: {
              start: 112,
              end: 1161,
            },
          },
          loc: {
            start: 56,
            end: 1161,
          },
        },
      ],
      loc: {
        start: 53,
        end: 1163,
      },
    },
    loc: {
      start: 0,
      end: 1163,
    },
  },
  variableValues: {
    customerUuid: 'ed02b82a-0689-4b36-b05b-0f1c50bb6d63',
  },
  cacheControl: {
    cacheHint: {
      maxAge: 0,
    },
  },
};

export const mockCustomerResolveInfo = JSON.parse(JSON.stringify(data));
