Xdata = [
				
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "id": 0,
        "datos": {
            "Descripcion": "SANEAMIENTO - CHICHAS",
            "Cost": "0",
            "OutlineNumber": "0",
            "Start": "2015-07-01T09:00:00",
            "End": "2016-03-08T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            1,
            2,
            762
        ],
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", 
        "id": 1,
        "datos": {
            "Descripcion": "INICIO DE PROYECTO",
            "Cost": "0",
            "OutlineNumber": "1",
            "Start": "2015-07-01T09:00:00",
            "End": "2015-07-01T09:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 0
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", 
        "id": 2,
        "datos": {
            "Descripcion": "TOTAL PROYECTO",
            "Cost": "0",
            "OutlineNumber": "2",
            "Start": "2015-07-01T09:00:00",
            "End": "2016-03-08T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            3,
            663,
            688,
            754,
            756,
            758,
            760
        ],
        "idp": 0
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "id": 3,
		Status:"minimizado",
        "datos": {
            "Descripcion": "SISTEMA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1",
            "Start": "2015-07-01T09:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            4,
            7,
            16,
            40,
            64,
            88,
            112,
            136,
            160,
            184,
            198,
            212,
            226,
            240,
            254,
            268,
            282,
            353,
            366,
            379,
            394,
            409,
            424,
            439,
            454,
            468,
            507,
            546,
            585,
            624
        ],
        "idp": 2
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 4,
        "datos": {
            "Descripcion": " OBRAS PROVISIONALES",
            "Cost": "0",
            "OutlineNumber": "2.1.1",
            "Start": "2015-07-01T09:00:00",
            "End": "2015-07-01T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                13
            ]
        },
        "childsId": [
            5
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 5,
        "datos": {
            "Descripcion": " OBRAS PROVISIONALES",
            "Cost": "0",
            "OutlineNumber": "2.1.1.1",
            "Start": "2015-07-01T09:00:00",
            "End": "2015-07-01T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            6
        ],
        "idp": 4
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 6,
        "datos": {
            "Descripcion": " CARTEL DE IDENTIFICACION DE OBRA DE 3.60 X 4,80M",
            "Cost": "0",
            "OutlineNumber": "2.1.1.1.1",
            "Start": "2015-07-01T09:00:00",
            "End": "2015-07-01T19:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 5
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 7,
        "datos": {
            "Descripcion": " CAPTACION - ANEXOS DE CHICHAS (04 UND)",
            "Cost": "0",
            "OutlineNumber": "2.1.2",
            "Start": "2015-07-01T09:00:00",
            "End": "2015-07-22T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            8,
            10,
            12
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 8,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES Y RESANE",
            "Cost": "0",
            "OutlineNumber": "2.1.2.1",
            "Start": "2015-07-20T09:00:00",
            "End": "2015-07-22T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            9
        ],
        "idp": 7
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 9,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES Y RESANE",
            "Cost": "0",
            "OutlineNumber": "2.1.2.1.1",
            "Start": "2015-07-20T09:00:00",
            "End": "2015-07-22T19:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 8
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 10,
        "datos": {
            "Descripcion": " INSTALACION DE ACCESORIOS DE CAPTACION",
            "Cost": "0",
            "OutlineNumber": "2.1.2.2",
            "Start": "2015-07-06T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            11
        ],
        "idp": 7
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 11,
        "datos": {
            "Descripcion": " INSTALACION DE ACCESORIOS DE CAPTACION",
            "Cost": "0",
            "OutlineNumber": "2.1.2.2.1",
            "Start": "2015-07-06T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                14
            ]
        },
        "childsId": [],
        "idp": 10
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 12,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.2.3",
            "Start": "2015-07-01T09:00:00",
            "End": "2015-07-09T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                15
            ]
        },
        "childsId": [
            13,
            14,
            15
        ],
        "idp": 7
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 13,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.2.3.1",
            "Start": "2015-07-01T09:00:00",
            "End": "2015-07-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "4",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 12
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 14,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.2.3.2",
            "Start": "2015-07-08T09:00:00",
            "End": "2015-07-09T19:00:00",
            "predecesorLink": [
                {
                    "id": "11",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 12
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 15,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.2.3.3",
            "Start": "2015-07-09T09:00:00",
            "End": "2015-07-09T19:00:00",
            "predecesorLink": [
                {
                    "id": "12",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                23
            ]
        },
        "childsId": [],
        "idp": 12
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 16,
        "datos": {
            "Descripcion": " RESERVORIO - SANTA CATALINA",
            "Cost": "0",
            "OutlineNumber": "2.1.3",
            "Start": "2015-07-07T09:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                19,
                20
            ]
        },
        "childsId": [
            17,
            23,
            29,
            35
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 17,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.3.1",
            "Start": "2015-07-07T09:00:00",
            "End": "2015-07-15T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                21
            ]
        },
        "childsId": [
            18,
            19,
            20,
            21,
            22
        ],
        "idp": 16
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 18,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.3.1.1",
            "Start": "2015-07-07T09:00:00",
            "End": "2015-07-07T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                22
            ]
        },
        "childsId": [],
        "idp": 17
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 19,
        "datos": {
            "Descripcion": " EXCAVACION DE TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.3.1.2",
            "Start": "2015-07-07T09:00:00",
            "End": "2015-07-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "16",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                22,
                24
            ]
        },
        "childsId": [],
        "idp": 17
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 20,
        "datos": {
            "Descripcion": " CAMA DE APOYO 10cm T.NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.1.3.1.3",
            "Start": "2015-07-08T09:00:00",
            "End": "2015-07-08T19:00:00",
            "predecesorLink": [
                {
                    "id": "16",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 17
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 21,
        "datos": {
            "Descripcion": " CAMA DE APOYO 15cm T.ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.3.1.4",
            "Start": "2015-07-08T09:00:00",
            "End": "2015-07-08T19:00:00",
            "predecesorLink": [
                {
                    "id": "17",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                29
            ]
        },
        "childsId": [],
        "idp": 17
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 22,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.3.1.5",
            "Start": "2015-07-15T08:00:00",
            "End": "2015-07-15T18:00:00",
            "predecesorLink": [
                {
                    "id": "18",
                    "lag": "0"
                },
                {
                    "id": "19",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 17
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 23,
        "datos": {
            "Descripcion": " RESERVORIO (R=4 M3)",
            "Cost": "0",
            "OutlineNumber": "2.1.3.2",
            "Start": "2015-07-13T09:00:00",
            "End": "2015-07-22T19:00:00",
            "predecesorLink": [
                {
                    "id": "15",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            24,
            25,
            26,
            27,
            28
        ],
        "idp": 16
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 24,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.3.2.1",
            "Start": "2015-07-13T09:00:00",
            "End": "2015-07-13T19:00:00",
            "predecesorLink": [
                {
                    "id": "19",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                28
            ]
        },
        "childsId": [],
        "idp": 23
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 25,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.3.2.2",
            "Start": "2015-07-14T09:00:00",
            "End": "2015-07-15T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                26,
                27
            ]
        },
        "childsId": [],
        "idp": 23
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 26,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.3.2.3",
            "Start": "2015-07-16T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": [
                {
                    "id": "25",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 23
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 27,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.3.2.4",
            "Start": "2015-07-15T09:00:00",
            "End": "2015-07-21T19:00:00",
            "predecesorLink": [
                {
                    "id": "25",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 23
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 28,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.3.2.5",
            "Start": "2015-07-22T09:00:00",
            "End": "2015-07-22T19:00:00",
            "predecesorLink": [
                {
                    "id": "24",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                31
            ]
        },
        "childsId": [],
        "idp": 23
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 29,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.3.3",
            "Start": "2015-07-13T09:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "21",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                34,
                37
            ]
        },
        "childsId": [
            30,
            31,
            32,
            33,
            34
        ],
        "idp": 16
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 30,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.3.3.1",
            "Start": "2015-07-13T09:00:00",
            "End": "2015-07-13T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                32,
                34
            ]
        },
        "childsId": [],
        "idp": 29
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 31,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.3.3.2",
            "Start": "2015-07-14T09:00:00",
            "End": "2015-07-14T19:00:00",
            "predecesorLink": [
                {
                    "id": "28",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                33
            ]
        },
        "childsId": [],
        "idp": 29
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 32,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.3.3.3",
            "Start": "2015-07-15T09:00:00",
            "End": "2015-07-15T19:00:00",
            "predecesorLink": [
                {
                    "id": "30",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 29
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 33,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.3.3.4",
            "Start": "2015-07-15T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": [
                {
                    "id": "31",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 29
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 34,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS PARA RESERVORIO",
            "Cost": "0",
            "OutlineNumber": "2.1.3.3.5",
            "Start": "2015-07-23T08:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "29",
                    "lag": "0"
                },
                {
                    "id": "30",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                37
            ]
        },
        "childsId": [],
        "idp": 29
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 35,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.3.4",
            "Start": "2015-07-13T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                38
            ]
        },
        "childsId": [
            36,
            37,
            38,
            39
        ],
        "idp": 16
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 36,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMIRROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.3.4.1",
            "Start": "2015-07-13T09:00:00",
            "End": "2015-07-15T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                39
            ]
        },
        "childsId": [],
        "idp": 35
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 37,
        "datos": {
            "Descripcion": " CONCRETO EN SOLERA 1:18 CEM/HORM 25% PM",
            "Cost": "0",
            "OutlineNumber": "2.1.3.4.2",
            "Start": "2015-07-16T09:00:00",
            "End": "2015-07-16T19:00:00",
            "predecesorLink": [
                {
                    "id": "29",
                    "lag": "0"
                },
                {
                    "id": "34",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 35
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 38,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.3.4.3",
            "Start": "2015-07-17T08:00:00",
            "End": "2015-07-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "35",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 35
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 39,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.3.4.4",
            "Start": "2015-07-17T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": [
                {
                    "id": "36",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 35
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 40,
        "datos": {
            "Descripcion": " RESERVORIO - CHANCHALLAY",
            "Cost": "0",
            "OutlineNumber": "2.1.4",
            "Start": "2015-07-16T09:00:00",
            "End": "2015-07-28T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                43,
                44
            ]
        },
        "childsId": [
            41,
            47,
            53,
            59
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 41,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.4.1",
            "Start": "2015-07-16T09:00:00",
            "End": "2015-07-22T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                45
            ]
        },
        "childsId": [
            42,
            43,
            44,
            45,
            46
        ],
        "idp": 40
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 42,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.4.1.1",
            "Start": "2015-07-16T09:00:00",
            "End": "2015-07-16T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                46,
                48
            ]
        },
        "childsId": [],
        "idp": 41
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 43,
        "datos": {
            "Descripcion": " EXCAVACION DE TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.4.1.2",
            "Start": "2015-07-16T09:00:00",
            "End": "2015-07-16T19:00:00",
            "predecesorLink": [
                {
                    "id": "40",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                46,
                48
            ]
        },
        "childsId": [],
        "idp": 41
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 44,
        "datos": {
            "Descripcion": " CAMA DE APOYO 10cm T.NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.1.4.1.3",
            "Start": "2015-07-17T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": [
                {
                    "id": "40",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 41
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 45,
        "datos": {
            "Descripcion": " CAMA DE APOYO 15cm T.ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.4.1.4",
            "Start": "2015-07-17T09:00:00",
            "End": "2015-07-17T19:00:00",
            "predecesorLink": [
                {
                    "id": "41",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                53
            ]
        },
        "childsId": [],
        "idp": 41
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 46,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.4.1.5",
            "Start": "2015-07-22T08:00:00",
            "End": "2015-07-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "43",
                    "lag": "0"
                },
                {
                    "id": "42",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                51
            ]
        },
        "childsId": [],
        "idp": 41
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 47,
        "datos": {
            "Descripcion": " RESERVORIO (R=2 M3)",
            "Cost": "0",
            "OutlineNumber": "2.1.4.2",
            "Start": "2015-07-20T09:00:00",
            "End": "2015-07-27T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                52
            ]
        },
        "childsId": [
            48,
            49,
            50,
            51,
            52
        ],
        "idp": 40
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 48,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.4.2.1",
            "Start": "2015-07-20T09:00:00",
            "End": "2015-07-20T19:00:00",
            "predecesorLink": [
                {
                    "id": "42",
                    "lag": "0"
                },
                {
                    "id": "43",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                49,
                52
            ]
        },
        "childsId": [],
        "idp": 47
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 49,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.4.2.2",
            "Start": "2015-07-23T08:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "48",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                50
            ]
        },
        "childsId": [],
        "idp": 47
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 50,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.4.2.3",
            "Start": "2015-07-22T09:00:00",
            "End": "2015-07-24T19:00:00",
            "predecesorLink": [
                {
                    "id": "49",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 47
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 51,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.4.2.4",
            "Start": "2015-07-21T09:00:00",
            "End": "2015-07-21T19:00:00",
            "predecesorLink": [
                {
                    "id": "46",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                59
            ]
        },
        "childsId": [],
        "idp": 47
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 52,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.4.2.5",
            "Start": "2015-07-27T09:00:00",
            "End": "2015-07-27T19:00:00",
            "predecesorLink": [
                {
                    "id": "47",
                    "lag": "0"
                },
                {
                    "id": "48",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                55
            ]
        },
        "childsId": [],
        "idp": 47
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 53,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.4.3",
            "Start": "2015-07-20T08:00:00",
            "End": "2015-07-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "45",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            54,
            55,
            56,
            57,
            58
        ],
        "idp": 40
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 54,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.4.3.1",
            "Start": "2015-07-20T08:00:00",
            "End": "2015-07-20T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                56,
                58
            ]
        },
        "childsId": [],
        "idp": 53
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 55,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.4.3.2",
            "Start": "2015-07-20T18:00:00",
            "End": "2015-07-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "52",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                57
            ]
        },
        "childsId": [],
        "idp": 53
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 56,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.4.3.3",
            "Start": "2015-07-22T18:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "54",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 53
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 57,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.4.3.4",
            "Start": "2015-07-21T18:00:00",
            "End": "2015-07-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "55",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 53
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 58,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS PARA RESERVORIO",
            "Cost": "0",
            "OutlineNumber": "2.1.4.3.5",
            "Start": "2015-07-28T08:00:00",
            "End": "2015-07-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "54",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                61
            ]
        },
        "childsId": [],
        "idp": 53
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 59,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.4.4",
            "Start": "2015-07-20T08:00:00",
            "End": "2015-07-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "51",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                62
            ]
        },
        "childsId": [
            60,
            61,
            62,
            63
        ],
        "idp": 40
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 60,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMIRROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.4.4.1",
            "Start": "2015-07-20T08:00:00",
            "End": "2015-07-22T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                63
            ]
        },
        "childsId": [],
        "idp": 59
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 61,
        "datos": {
            "Descripcion": " CONCRETO EN SOLERA 1:18 CEM/HORM 25% PM",
            "Cost": "0",
            "OutlineNumber": "2.1.4.4.2",
            "Start": "2015-07-22T18:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "58",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 59
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 62,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.4.4.3",
            "Start": "2015-07-23T18:00:00",
            "End": "2015-07-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "59",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 59
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 63,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.4.4.4",
            "Start": "2015-07-23T18:00:00",
            "End": "2015-07-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "60",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                71
            ]
        },
        "childsId": [],
        "idp": 59
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 64,
        "datos": {
            "Descripcion": " RESERVORIO - YANQUE",
            "Cost": "0",
            "OutlineNumber": "2.1.5",
            "Start": "2015-07-21T09:00:00",
            "End": "2015-08-05T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                67,
                68,
                84
            ]
        },
        "childsId": [
            65,
            71,
            77,
            83
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 65,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.5.1",
            "Start": "2015-07-21T09:00:00",
            "End": "2015-07-28T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                69,
                84
            ]
        },
        "childsId": [
            66,
            67,
            68,
            69,
            70
        ],
        "idp": 64
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 66,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.5.1.1",
            "Start": "2015-07-21T09:00:00",
            "End": "2015-07-21T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                70,
                72
            ]
        },
        "childsId": [],
        "idp": 65
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 67,
        "datos": {
            "Descripcion": " EXCAVACION DE TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.5.1.2",
            "Start": "2015-07-22T09:00:00",
            "End": "2015-07-22T19:00:00",
            "predecesorLink": [
                {
                    "id": "64",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                70,
                72
            ]
        },
        "childsId": [],
        "idp": 65
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 68,
        "datos": {
            "Descripcion": " CAMA DE APOYO 10cm T.NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.1.5.1.3",
            "Start": "2015-07-23T08:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "64",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                90
            ]
        },
        "childsId": [],
        "idp": 65
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 69,
        "datos": {
            "Descripcion": " CAMA DE APOYO 15cm T.ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.5.1.4",
            "Start": "2015-07-23T08:00:00",
            "End": "2015-07-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "65",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                77
            ]
        },
        "childsId": [],
        "idp": 65
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 70,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.5.1.5",
            "Start": "2015-07-28T08:00:00",
            "End": "2015-07-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "67",
                    "lag": "0"
                },
                {
                    "id": "66",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                73
            ]
        },
        "childsId": [],
        "idp": 65
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 71,
        "datos": {
            "Descripcion": " RESERVORIO (R=8 M3)",
            "Cost": "0",
            "OutlineNumber": "2.1.5.2",
            "Start": "2015-07-23T18:00:00",
            "End": "2015-08-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "63",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                76
            ]
        },
        "childsId": [
            72,
            73,
            74,
            75,
            76
        ],
        "idp": 64
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 72,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.5.2.1",
            "Start": "2015-07-23T18:00:00",
            "End": "2015-07-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "67",
                    "lag": "0"
                },
                {
                    "id": "66",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                74,
                76
            ]
        },
        "childsId": [],
        "idp": 71
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 73,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.5.2.2",
            "Start": "2015-07-27T08:00:00",
            "End": "2015-07-27T18:00:00",
            "predecesorLink": [
                {
                    "id": "70",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                75
            ]
        },
        "childsId": [],
        "idp": 71
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 74,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.5.2.3",
            "Start": "2015-07-28T18:00:00",
            "End": "2015-07-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "72",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 71
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 75,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.5.2.4",
            "Start": "2015-07-27T18:00:00",
            "End": "2015-08-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "73",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                83
            ]
        },
        "childsId": [],
        "idp": 71
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 76,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.5.2.5",
            "Start": "2015-08-04T08:00:00",
            "End": "2015-08-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "71",
                    "lag": "0"
                },
                {
                    "id": "72",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                79
            ]
        },
        "childsId": [],
        "idp": 71
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 77,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.5.3",
            "Start": "2015-07-24T08:00:00",
            "End": "2015-08-05T18:00:00",
            "predecesorLink": [
                {
                    "id": "69",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                82
            ]
        },
        "childsId": [
            78,
            79,
            80,
            81,
            82
        ],
        "idp": 64
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 78,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.5.3.1",
            "Start": "2015-07-24T08:00:00",
            "End": "2015-07-24T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                80,
                82
            ]
        },
        "childsId": [],
        "idp": 77
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 79,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.5.3.2",
            "Start": "2015-07-27T08:00:00",
            "End": "2015-07-27T18:00:00",
            "predecesorLink": [
                {
                    "id": "76",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                81
            ]
        },
        "childsId": [],
        "idp": 77
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 80,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.5.3.3",
            "Start": "2015-07-28T18:00:00",
            "End": "2015-07-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "78",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 77
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 81,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.5.3.4",
            "Start": "2015-07-27T18:00:00",
            "End": "2015-08-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "79",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 77
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 82,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS PARA RESERVORIO",
            "Cost": "0",
            "OutlineNumber": "2.1.5.3.5",
            "Start": "2015-08-05T08:00:00",
            "End": "2015-08-05T18:00:00",
            "predecesorLink": [
                {
                    "id": "77",
                    "lag": "0"
                },
                {
                    "id": "78",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                85
            ]
        },
        "childsId": [],
        "idp": 77
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 83,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.5.4",
            "Start": "2015-07-24T08:00:00",
            "End": "2015-07-30T19:00:00",
            "predecesorLink": [
                {
                    "id": "75",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                86
            ]
        },
        "childsId": [
            84,
            85,
            86,
            87
        ],
        "idp": 64
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 84,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMIRROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.5.4.1",
            "Start": "2015-07-24T08:00:00",
            "End": "2015-07-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "64",
                    "lag": "0"
                },
                {
                    "id": "65",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                87
            ]
        },
        "childsId": [],
        "idp": 83
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 85,
        "datos": {
            "Descripcion": " CONCRETO EN SOLERA 1:18 CEM/HORM 25% PM",
            "Cost": "0",
            "OutlineNumber": "2.1.5.4.2",
            "Start": "2015-07-29T08:00:00",
            "End": "2015-07-29T18:00:00",
            "predecesorLink": [
                {
                    "id": "82",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 83
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 86,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.5.4.3",
            "Start": "2015-07-30T08:00:00",
            "End": "2015-07-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "83",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 83
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 87,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.5.4.4",
            "Start": "2015-07-30T09:00:00",
            "End": "2015-07-30T19:00:00",
            "predecesorLink": [
                {
                    "id": "84",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 83
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 88,
        "datos": {
            "Descripcion": " RESERVORIO - CAHUANOTA 1",
            "Cost": "0",
            "OutlineNumber": "2.1.6",
            "Start": "2015-07-28T18:00:00",
            "End": "2015-08-12T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                91,
                92
            ]
        },
        "childsId": [
            89,
            95,
            101,
            107
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 89,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.6.1",
            "Start": "2015-07-28T18:00:00",
            "End": "2015-08-06T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                93
            ]
        },
        "childsId": [
            90,
            91,
            92,
            93,
            94
        ],
        "idp": 88
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 90,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.6.1.1",
            "Start": "2015-07-28T18:00:00",
            "End": "2015-07-29T18:00:00",
            "predecesorLink": [
                {
                    "id": "68",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                94,
                96
            ]
        },
        "childsId": [],
        "idp": 89
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 91,
        "datos": {
            "Descripcion": " EXCAVACION DE TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.6.1.2",
            "Start": "2015-07-30T08:00:00",
            "End": "2015-07-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "88",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                94,
                96
            ]
        },
        "childsId": [],
        "idp": 89
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 92,
        "datos": {
            "Descripcion": " CAMA DE APOYO 10cm T.NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.1.6.1.3",
            "Start": "2015-07-31T08:00:00",
            "End": "2015-07-31T18:00:00",
            "predecesorLink": [
                {
                    "id": "88",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 89
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 93,
        "datos": {
            "Descripcion": " CAMA DE APOYO 15cm T.ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.6.1.4",
            "Start": "2015-07-31T08:00:00",
            "End": "2015-07-31T18:00:00",
            "predecesorLink": [
                {
                    "id": "89",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                101
            ]
        },
        "childsId": [],
        "idp": 89
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 94,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.6.1.5",
            "Start": "2015-08-06T08:00:00",
            "End": "2015-08-06T18:00:00",
            "predecesorLink": [
                {
                    "id": "91",
                    "lag": "0"
                },
                {
                    "id": "90",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                97
            ]
        },
        "childsId": [],
        "idp": 89
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 95,
        "datos": {
            "Descripcion": " RESERVORIO (R=2 M3)",
            "Cost": "0",
            "OutlineNumber": "2.1.6.2",
            "Start": "2015-08-03T08:00:00",
            "End": "2015-08-11T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            96,
            97,
            98,
            99,
            100
        ],
        "idp": 88
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 96,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.6.2.1",
            "Start": "2015-08-03T08:00:00",
            "End": "2015-08-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "91",
                    "lag": "0"
                },
                {
                    "id": "90",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                98,
                100
            ]
        },
        "childsId": [],
        "idp": 95
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 97,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.6.2.2",
            "Start": "2015-08-04T08:00:00",
            "End": "2015-08-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "94",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                99
            ]
        },
        "childsId": [],
        "idp": 95
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 98,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.6.2.3",
            "Start": "2015-08-06T09:00:00",
            "End": "2015-08-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "96",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 95
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 99,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.6.2.4",
            "Start": "2015-08-05T08:00:00",
            "End": "2015-08-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "97",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                107
            ]
        },
        "childsId": [],
        "idp": 95
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 100,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.6.2.5",
            "Start": "2015-08-10T18:00:00",
            "End": "2015-08-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "96",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                103
            ]
        },
        "childsId": [],
        "idp": 95
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 101,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.6.3",
            "Start": "2015-08-03T08:00:00",
            "End": "2015-08-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "93",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                106
            ]
        },
        "childsId": [
            102,
            103,
            104,
            105,
            106
        ],
        "idp": 88
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 102,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.6.3.1",
            "Start": "2015-08-03T08:00:00",
            "End": "2015-08-03T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                104,
                106
            ]
        },
        "childsId": [],
        "idp": 101
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 103,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.6.3.2",
            "Start": "2015-08-03T18:00:00",
            "End": "2015-08-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "100",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                105
            ]
        },
        "childsId": [],
        "idp": 101
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 104,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.6.3.3",
            "Start": "2015-08-05T18:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "102",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 101
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 105,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.6.3.4",
            "Start": "2015-08-04T18:00:00",
            "End": "2015-08-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "103",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 101
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 106,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS PARA RESERVORIO",
            "Cost": "0",
            "OutlineNumber": "2.1.6.3.5",
            "Start": "2015-08-12T08:00:00",
            "End": "2015-08-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "102",
                    "lag": "0"
                },
                {
                    "id": "101",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                109
            ]
        },
        "childsId": [],
        "idp": 101
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 107,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.6.4",
            "Start": "2015-08-03T08:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "99",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                110
            ]
        },
        "childsId": [
            108,
            109,
            110,
            111
        ],
        "idp": 88
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 108,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMIRROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.6.4.1",
            "Start": "2015-08-03T08:00:00",
            "End": "2015-08-05T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                111
            ]
        },
        "childsId": [],
        "idp": 107
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 109,
        "datos": {
            "Descripcion": " CONCRETO EN SOLERA 1:18 CEM/HORM 25% PM",
            "Cost": "0",
            "OutlineNumber": "2.1.6.4.2",
            "Start": "2015-08-05T18:00:00",
            "End": "2015-08-06T18:00:00",
            "predecesorLink": [
                {
                    "id": "106",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 107
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 110,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.6.4.3",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "107",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                136
            ]
        },
        "childsId": [],
        "idp": 107
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 111,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.6.4.4",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "108",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 107
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 112,
        "datos": {
            "Descripcion": " RESERVORIO - CAHUANOTA 2",
            "Cost": "0",
            "OutlineNumber": "2.1.7",
            "Start": "2015-08-05T18:00:00",
            "End": "2015-08-17T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                115,
                116,
                132
            ]
        },
        "childsId": [
            113,
            119,
            125,
            131
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 113,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.7.1",
            "Start": "2015-08-05T18:00:00",
            "End": "2015-08-11T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                117,
                120
            ]
        },
        "childsId": [
            114,
            115,
            116,
            117,
            118
        ],
        "idp": 112
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 114,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.7.1.1",
            "Start": "2015-08-05T18:00:00",
            "End": "2015-08-06T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                118
            ]
        },
        "childsId": [],
        "idp": 113
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 115,
        "datos": {
            "Descripcion": " EXCAVACION DE TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.7.1.2",
            "Start": "2015-08-05T18:00:00",
            "End": "2015-08-06T18:00:00",
            "predecesorLink": [
                {
                    "id": "112",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                118
            ]
        },
        "childsId": [],
        "idp": 113
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 116,
        "datos": {
            "Descripcion": " CAMA DE APOYO 10cm T.NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.1.7.1.3",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "112",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 113
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 117,
        "datos": {
            "Descripcion": " CAMA DE APOYO 15cm T.ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.7.1.4",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "113",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                125
            ]
        },
        "childsId": [],
        "idp": 113
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 118,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.7.1.5",
            "Start": "2015-08-11T08:00:00",
            "End": "2015-08-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "114",
                    "lag": "0"
                },
                {
                    "id": "115",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                121
            ]
        },
        "childsId": [],
        "idp": 113
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 119,
        "datos": {
            "Descripcion": " RESERVORIO (R=0.5 M3)",
            "Cost": "0",
            "OutlineNumber": "2.1.7.2",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            120,
            121,
            122,
            123,
            124
        ],
        "idp": 112
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 120,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.7.2.1",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "113",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                122,
                124
            ]
        },
        "childsId": [],
        "idp": 119
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 121,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.7.2.2",
            "Start": "2015-08-10T08:00:00",
            "End": "2015-08-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "118",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                123
            ]
        },
        "childsId": [],
        "idp": 119
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 122,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.7.2.3",
            "Start": "2015-08-11T18:00:00",
            "End": "2015-08-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "120",
                    "lag": "4800"
                }
            ],
            "Sucesoras": [
                130
            ]
        },
        "childsId": [],
        "idp": 119
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 123,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.7.2.4",
            "Start": "2015-08-10T18:00:00",
            "End": "2015-08-13T18:00:00",
            "predecesorLink": [
                {
                    "id": "121",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 119
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 124,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.7.2.5",
            "Start": "2015-08-14T08:00:00",
            "End": "2015-08-14T18:00:00",
            "predecesorLink": [
                {
                    "id": "120",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                127
            ]
        },
        "childsId": [],
        "idp": 119
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 125,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.7.3",
            "Start": "2015-08-07T08:00:00",
            "End": "2015-08-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "117",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            126,
            127,
            128,
            129,
            130
        ],
        "idp": 112
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 126,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.7.3.1",
            "Start": "2015-08-07T08:00:00",
            "End": "2015-08-07T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                128,
                130
            ]
        },
        "childsId": [],
        "idp": 125
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 127,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.7.3.2",
            "Start": "2015-08-10T08:00:00",
            "End": "2015-08-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "124",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                129
            ]
        },
        "childsId": [],
        "idp": 125
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 128,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.7.3.3",
            "Start": "2015-08-11T18:00:00",
            "End": "2015-08-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "126",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 125
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 129,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.7.3.4",
            "Start": "2015-08-10T18:00:00",
            "End": "2015-08-13T18:00:00",
            "predecesorLink": [
                {
                    "id": "127",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 125
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 130,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS PARA RESERVORIO",
            "Cost": "0",
            "OutlineNumber": "2.1.7.3.5",
            "Start": "2015-08-17T08:00:00",
            "End": "2015-08-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "126",
                    "lag": "0"
                },
                {
                    "id": "122",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                133
            ]
        },
        "childsId": [],
        "idp": 125
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 131,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.7.4",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-17T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                134
            ]
        },
        "childsId": [
            132,
            133,
            134,
            135
        ],
        "idp": 112
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 132,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMIRROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.7.4.1",
            "Start": "2015-08-06T18:00:00",
            "End": "2015-08-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "112",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                135
            ]
        },
        "childsId": [],
        "idp": 131
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 133,
        "datos": {
            "Descripcion": " CONCRETO EN SOLERA 1:18 CEM/HORM 25% PM",
            "Cost": "0",
            "OutlineNumber": "2.1.7.4.2",
            "Start": "2015-08-12T08:00:00",
            "End": "2015-08-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "130",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 131
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 134,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.7.4.3",
            "Start": "2015-08-13T08:00:00",
            "End": "2015-08-13T18:00:00",
            "predecesorLink": [
                {
                    "id": "131",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                160
            ]
        },
        "childsId": [],
        "idp": 131
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 135,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.7.4.4",
            "Start": "2015-08-14T18:00:00",
            "End": "2015-08-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "132",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 131
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 136,
        "datos": {
            "Descripcion": " RESERVORIO - ACCHAPUNA",
            "Cost": "0",
            "OutlineNumber": "2.1.8",
            "Start": "2015-08-14T08:00:00",
            "End": "2015-08-25T19:00:00",
            "predecesorLink": [
                {
                    "id": "110",
                    "lag": "-24000"
                }
            ],
            "Sucesoras": [
                139
            ]
        },
        "childsId": [
            137,
            143,
            149,
            155
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 137,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.8.1",
            "Start": "2015-08-14T08:00:00",
            "End": "2015-08-20T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                140
            ]
        },
        "childsId": [
            138,
            139,
            140,
            141,
            142
        ],
        "idp": 136
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 138,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.8.1.1",
            "Start": "2015-08-14T08:00:00",
            "End": "2015-08-14T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                141
            ]
        },
        "childsId": [],
        "idp": 137
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 139,
        "datos": {
            "Descripcion": " EXCAVACION DE TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.8.1.2",
            "Start": "2015-08-14T09:00:00",
            "End": "2015-08-14T19:00:00",
            "predecesorLink": [
                {
                    "id": "136",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                142
            ]
        },
        "childsId": [],
        "idp": 137
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 140,
        "datos": {
            "Descripcion": " CAMA DE APOYO 10cm T.NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.1.8.1.3",
            "Start": "2015-08-17T08:00:00",
            "End": "2015-08-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "137",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 137
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 141,
        "datos": {
            "Descripcion": " CAMA DE APOYO 15cm T.ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.8.1.4",
            "Start": "2015-08-17T09:00:00",
            "End": "2015-08-17T19:00:00",
            "predecesorLink": [
                {
                    "id": "138",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 137
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 142,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.8.1.5",
            "Start": "2015-08-19T18:00:00",
            "End": "2015-08-20T18:00:00",
            "predecesorLink": [
                {
                    "id": "139",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                145
            ]
        },
        "childsId": [],
        "idp": 137
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 143,
        "datos": {
            "Descripcion": " RESERVORIO (R=2 M3)",
            "Cost": "0",
            "OutlineNumber": "2.1.8.2",
            "Start": "2015-08-17T09:00:00",
            "End": "2015-08-25T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            144,
            145,
            146,
            147,
            148
        ],
        "idp": 136
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 144,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.8.2.1",
            "Start": "2015-08-17T09:00:00",
            "End": "2015-08-17T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                146,
                148
            ]
        },
        "childsId": [],
        "idp": 143
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 145,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.8.2.2",
            "Start": "2015-08-18T09:00:00",
            "End": "2015-08-18T19:00:00",
            "predecesorLink": [
                {
                    "id": "142",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                147
            ]
        },
        "childsId": [],
        "idp": 143
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 146,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.8.2.3",
            "Start": "2015-08-20T08:00:00",
            "End": "2015-08-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "144",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 143
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 147,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.8.2.4",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-24T19:00:00",
            "predecesorLink": [
                {
                    "id": "145",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 143
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 148,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.8.2.5",
            "Start": "2015-08-25T09:00:00",
            "End": "2015-08-25T19:00:00",
            "predecesorLink": [
                {
                    "id": "144",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                151
            ]
        },
        "childsId": [],
        "idp": 143
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 149,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.8.3",
            "Start": "2015-08-17T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            150,
            151,
            152,
            153,
            154
        ],
        "idp": 136
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 150,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.8.3.1",
            "Start": "2015-08-17T08:00:00",
            "End": "2015-08-17T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                152,
                154
            ]
        },
        "childsId": [],
        "idp": 149
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 151,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.8.3.2",
            "Start": "2015-08-17T18:00:00",
            "End": "2015-08-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "148",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                153
            ]
        },
        "childsId": [],
        "idp": 149
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 152,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.8.3.3",
            "Start": "2015-08-20T09:00:00",
            "End": "2015-08-21T19:00:00",
            "predecesorLink": [
                {
                    "id": "150",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 149
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 153,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.8.3.4",
            "Start": "2015-08-19T08:00:00",
            "End": "2015-08-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "151",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 149
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 154,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS PARA RESERVORIO",
            "Cost": "0",
            "OutlineNumber": "2.1.8.3.5",
            "Start": "2015-08-25T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": [
                {
                    "id": "150",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                157
            ]
        },
        "childsId": [],
        "idp": 149
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 155,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.8.4",
            "Start": "2015-08-17T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                158
            ]
        },
        "childsId": [
            156,
            157,
            158,
            159
        ],
        "idp": 136
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 156,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMIRROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.8.4.1",
            "Start": "2015-08-17T08:00:00",
            "End": "2015-08-19T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                159
            ]
        },
        "childsId": [],
        "idp": 155
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 157,
        "datos": {
            "Descripcion": " CONCRETO EN SOLERA 1:18 CEM/HORM 25% PM",
            "Cost": "0",
            "OutlineNumber": "2.1.8.4.2",
            "Start": "2015-08-19T18:00:00",
            "End": "2015-08-20T18:00:00",
            "predecesorLink": [
                {
                    "id": "154",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 155
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 158,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.8.4.3",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "155",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 155
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 159,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.8.4.4",
            "Start": "2015-08-25T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": [
                {
                    "id": "156",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 155
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 160,
        "datos": {
            "Descripcion": " RESERVORIO - YACHANGUILLO",
            "Cost": "0",
            "OutlineNumber": "2.1.9",
            "Start": "2015-08-19T08:00:00",
            "End": "2015-08-31T19:00:00",
            "predecesorLink": [
                {
                    "id": "134",
                    "lag": "-24000"
                }
            ],
            "Sucesoras": [
                163
            ]
        },
        "childsId": [
            161,
            167,
            173,
            179
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 161,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.9.1",
            "Start": "2015-08-19T08:00:00",
            "End": "2015-08-24T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                164
            ]
        },
        "childsId": [
            162,
            163,
            164,
            165,
            166
        ],
        "idp": 160
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 162,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.9.1.1",
            "Start": "2015-08-19T08:00:00",
            "End": "2015-08-19T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                165
            ]
        },
        "childsId": [],
        "idp": 161
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 163,
        "datos": {
            "Descripcion": " EXCAVACION DE TERRENO SEMI ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.9.1.2",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-19T19:00:00",
            "predecesorLink": [
                {
                    "id": "160",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                166
            ]
        },
        "childsId": [],
        "idp": 161
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 164,
        "datos": {
            "Descripcion": " CAMA DE APOYO 10cm T.NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.1.9.1.3",
            "Start": "2015-08-20T09:00:00",
            "End": "2015-08-20T19:00:00",
            "predecesorLink": [
                {
                    "id": "161",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 161
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 165,
        "datos": {
            "Descripcion": " CAMA DE APOYO 15cm T.ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.9.1.4",
            "Start": "2015-08-20T09:00:00",
            "End": "2015-08-20T19:00:00",
            "predecesorLink": [
                {
                    "id": "162",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 161
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 166,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.9.1.5",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "163",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                169
            ]
        },
        "childsId": [],
        "idp": 161
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 167,
        "datos": {
            "Descripcion": " RESERVORIO (R=3 M3)",
            "Cost": "0",
            "OutlineNumber": "2.1.9.2",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-31T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            168,
            169,
            170,
            171,
            172
        ],
        "idp": 160
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 168,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.9.2.1",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-19T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                170,
                172
            ]
        },
        "childsId": [],
        "idp": 167
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 169,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.9.2.2",
            "Start": "2015-08-20T09:00:00",
            "End": "2015-08-21T19:00:00",
            "predecesorLink": [
                {
                    "id": "166",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                171
            ]
        },
        "childsId": [],
        "idp": 167
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 170,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.9.2.3",
            "Start": "2015-08-25T09:00:00",
            "End": "2015-08-26T19:00:00",
            "predecesorLink": [
                {
                    "id": "168",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 167
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 171,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.9.2.4",
            "Start": "2015-08-24T09:00:00",
            "End": "2015-08-28T19:00:00",
            "predecesorLink": [
                {
                    "id": "169",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 167
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 172,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.9.2.5",
            "Start": "2015-08-31T09:00:00",
            "End": "2015-08-31T19:00:00",
            "predecesorLink": [
                {
                    "id": "168",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                175
            ]
        },
        "childsId": [],
        "idp": 167
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 173,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.9.3",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-26T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            174,
            175,
            176,
            177,
            178
        ],
        "idp": 160
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 174,
        "datos": {
            "Descripcion": " SOLADO PARA ZAPATAZ E=4 \" , 1:12 CEM/HORM",
            "Cost": "0",
            "OutlineNumber": "2.1.9.3.1",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-19T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                176,
                178
            ]
        },
        "childsId": [],
        "idp": 173
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 175,
        "datos": {
            "Descripcion": " ACERO EN MUROS REFORZADOS GRADO 60",
            "Cost": "0",
            "OutlineNumber": "2.1.9.3.2",
            "Start": "2015-08-20T09:00:00",
            "End": "2015-08-20T19:00:00",
            "predecesorLink": [
                {
                    "id": "172",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                177
            ]
        },
        "childsId": [],
        "idp": 173
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 176,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2 PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.9.3.3",
            "Start": "2015-08-22T08:00:00",
            "End": "2015-08-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "174",
                    "lag": "4800"
                }
            ]
        },
        "childsId": [],
        "idp": 173
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 177,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO PARA MUROS REFORZADOS",
            "Cost": "0",
            "OutlineNumber": "2.1.9.3.4",
            "Start": "2015-08-21T09:00:00",
            "End": "2015-08-25T19:00:00",
            "predecesorLink": [
                {
                    "id": "175",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 173
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 178,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS PARA RESERVORIO",
            "Cost": "0",
            "OutlineNumber": "2.1.9.3.5",
            "Start": "2015-08-26T09:00:00",
            "End": "2015-08-26T19:00:00",
            "predecesorLink": [
                {
                    "id": "174",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                181
            ]
        },
        "childsId": [],
        "idp": 173
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 179,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO",
            "Cost": "0",
            "OutlineNumber": "2.1.9.4",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-26T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                182
            ]
        },
        "childsId": [
            180,
            181,
            182,
            183
        ],
        "idp": 160
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 180,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA TERRENO SEMIRROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.9.4.1",
            "Start": "2015-08-19T09:00:00",
            "End": "2015-08-21T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                183
            ]
        },
        "childsId": [],
        "idp": 179
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 181,
        "datos": {
            "Descripcion": " CONCRETO EN SOLERA 1:18 CEM/HORM 25% PM",
            "Cost": "0",
            "OutlineNumber": "2.1.9.4.2",
            "Start": "2015-08-24T09:00:00",
            "End": "2015-08-24T19:00:00",
            "predecesorLink": [
                {
                    "id": "178",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 179
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 182,
        "datos": {
            "Descripcion": " CERCO PERIMETRICO CON ALAMBRE DE PUAS (6 FILAS) Y PALOS DE EUCALIPTO",
            "Cost": "0",
            "OutlineNumber": "2.1.9.4.3",
            "Start": "2015-08-25T09:00:00",
            "End": "2015-08-25T19:00:00",
            "predecesorLink": [
                {
                    "id": "179",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 179
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 183,
        "datos": {
            "Descripcion": " PUERTA DE MADERA CON MALLA",
            "Cost": "0",
            "OutlineNumber": "2.1.9.4.4",
            "Start": "2015-08-26T09:00:00",
            "End": "2015-08-26T19:00:00",
            "predecesorLink": [
                {
                    "id": "180",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 179
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 184,
        "datos": {
            "Descripcion": " LINEA DE CONDUCCION (SISTEMA 01 - ANEXO YANQUE 567.96 ML)",
            "Cost": "0",
            "OutlineNumber": "2.1.10",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-24T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                188
            ]
        },
        "childsId": [
            185,
            187,
            195
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 185,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.10.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            186
        ],
        "idp": 184
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 186,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.10.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                189
            ]
        },
        "childsId": [],
        "idp": 185
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 187,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-09-24T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                190
            ]
        },
        "childsId": [
            188,
            189,
            190,
            191,
            192,
            193,
            194
        ],
        "idp": 184
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 188,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TN.",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2.1",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-08-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "184",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                191
            ]
        },
        "childsId": [],
        "idp": 187
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 189,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2.2",
            "Start": "2015-08-31T08:00:00",
            "End": "2015-09-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "186",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                193
            ]
        },
        "childsId": [],
        "idp": 187
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 190,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2.3",
            "Start": "2015-09-01T18:00:00",
            "End": "2015-09-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "187",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                196
            ]
        },
        "childsId": [],
        "idp": 187
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 191,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2.4",
            "Start": "2015-09-07T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "188",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 187
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 192,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2.5",
            "Start": "2015-09-09T18:00:00",
            "End": "2015-09-14T18:00:00",
            "predecesorLink": [
                {
                    "id": "192",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                192
            ]
        },
        "childsId": [],
        "idp": 187
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 193,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2.6",
            "Start": "2015-09-14T18:00:00",
            "End": "2015-09-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "189",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 187
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 194,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR PARA TUBERIA AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.10.2.7",
            "Start": "2015-09-22T18:00:00",
            "End": "2015-09-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "195",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                197
            ]
        },
        "childsId": [],
        "idp": 187
    },
    {
        "datos": {
            "Sucesoras": [
                194
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIAS PVC DN 1 \" NTP ISO 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.10.3",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-22T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 195,
        "childsId": [
            196,
            197
        ],
        "idp": 184
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 196,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:20 09",
            "Cost": "0",
            "OutlineNumber": "2.1.10.3.1",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "190",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 195
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 197,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.10.3.2",
            "Start": "2015-09-21T18:00:00",
            "End": "2015-09-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "194",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 195
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 198,
        "datos": {
            "Descripcion": " LINEA DE CONDUCCION (SISTEMA 02 - ANEXO ACHAPUNA 1,277.27 ML)",
            "Cost": "0",
            "OutlineNumber": "2.1.11",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-25T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                202
            ]
        },
        "childsId": [
            199,
            201,
            209
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 199,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.11.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            200
        ],
        "idp": 198
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 200,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.11.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                203
            ]
        },
        "childsId": [],
        "idp": 199
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 201,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-09-25T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                204
            ]
        },
        "childsId": [
            202,
            203,
            204,
            205,
            206,
            207,
            208
        ],
        "idp": 198
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 202,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TN.",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2.1",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-08-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "198",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                205
            ]
        },
        "childsId": [],
        "idp": 201
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 203,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2.2",
            "Start": "2015-08-28T18:00:00",
            "End": "2015-09-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "200",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                210
            ]
        },
        "childsId": [],
        "idp": 201
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 204,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2.3",
            "Start": "2015-09-01T18:00:00",
            "End": "2015-09-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "201",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                207
            ]
        },
        "childsId": [],
        "idp": 201
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 205,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2.4",
            "Start": "2015-09-07T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "202",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 201
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 206,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2.5",
            "Start": "2015-09-09T18:00:00",
            "End": "2015-09-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "206",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                206
            ]
        },
        "childsId": [],
        "idp": 201
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 207,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2.6",
            "Start": "2015-09-11T18:00:00",
            "End": "2015-09-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "204",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 201
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 208,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR PARA TUBERIA AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.11.2.7",
            "Start": "2015-09-23T18:00:00",
            "End": "2015-09-25T18:00:00",
            "predecesorLink": [
                {
                    "id": "209",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                211
            ]
        },
        "childsId": [],
        "idp": 201
    },
    {
        "datos": {
            "Sucesoras": [
                208
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIAS PVC DN 1 \" NTP ISO 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.11.3",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-23T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 209,
        "childsId": [
            210,
            211
        ],
        "idp": 198
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 210,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.11.3.1",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "203",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 209
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 211,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.11.3.2",
            "Start": "2015-09-22T18:00:00",
            "End": "2015-09-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "208",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 209
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 212,
        "datos": {
            "Descripcion": " LINEA DE CONDUCCION (SISTEMA 03 - ANEXO CAHUANOTA 01 173.73 ML)",
            "Cost": "0",
            "OutlineNumber": "2.1.12",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-08T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                216
            ]
        },
        "childsId": [
            213,
            215,
            223
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 213,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.12.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            214
        ],
        "idp": 212
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 214,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.12.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                217
            ]
        },
        "childsId": [],
        "idp": 213
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 215,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2",
            "Start": "2015-08-26T08:00:00",
            "End": "2015-09-08T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                218
            ]
        },
        "childsId": [
            216,
            217,
            218,
            219,
            220,
            221,
            222
        ],
        "idp": 212
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 216,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TN.",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2.1",
            "Start": "2015-08-26T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": [
                {
                    "id": "212",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                219
            ]
        },
        "childsId": [],
        "idp": 215
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 217,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2.2",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-08-27T18:00:00",
            "predecesorLink": [
                {
                    "id": "214",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                224
            ]
        },
        "childsId": [],
        "idp": 215
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 218,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2.3",
            "Start": "2015-08-27T18:00:00",
            "End": "2015-08-31T18:00:00",
            "predecesorLink": [
                {
                    "id": "215",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                221
            ]
        },
        "childsId": [],
        "idp": 215
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 219,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2.4",
            "Start": "2015-08-31T18:00:00",
            "End": "2015-09-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "216",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 215
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 220,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2.5",
            "Start": "2015-09-01T18:00:00",
            "End": "2015-09-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "220",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                220
            ]
        },
        "childsId": [],
        "idp": 215
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 221,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2.6",
            "Start": "2015-09-02T18:00:00",
            "End": "2015-09-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "218",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 215
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 222,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR PARA TUBERIA AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.12.2.7",
            "Start": "2015-09-08T09:00:00",
            "End": "2015-09-08T19:00:00",
            "predecesorLink": [
                {
                    "id": "223",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                225
            ]
        },
        "childsId": [],
        "idp": 215
    },
    {
        "datos": {
            "Sucesoras": [
                222
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIAS PVC DN 1 \" NTP ISO 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.12.3",
            "Start": "2015-09-07T08:00:00",
            "End": "2015-09-07T19:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 223,
        "childsId": [
            224,
            225
        ],
        "idp": 212
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 224,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.12.3.1",
            "Start": "2015-09-07T08:00:00",
            "End": "2015-09-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "217",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 223
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 225,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.12.3.2",
            "Start": "2015-09-07T09:00:00",
            "End": "2015-09-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "222",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 223
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 226,
        "datos": {
            "Descripcion": " LINEA DE CONDUCCION (SISTEMA 03 - ANEXO CAHUANOTA 02 900.52 ML)",
            "Cost": "0",
            "OutlineNumber": "2.1.13",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-23T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                230
            ]
        },
        "childsId": [
            227,
            229,
            237
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 227,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.13.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            228
        ],
        "idp": 226
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 228,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.13.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                231
            ]
        },
        "childsId": [],
        "idp": 227
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 229,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-09-23T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                232
            ]
        },
        "childsId": [
            230,
            231,
            232,
            233,
            234,
            235,
            236
        ],
        "idp": 226
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 230,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TN.",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2.1",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-08-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "226",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                233
            ]
        },
        "childsId": [],
        "idp": 229
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 231,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2.2",
            "Start": "2015-08-28T18:00:00",
            "End": "2015-09-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "228",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                238
            ]
        },
        "childsId": [],
        "idp": 229
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 232,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2.3",
            "Start": "2015-09-01T18:00:00",
            "End": "2015-09-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "229",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                235
            ]
        },
        "childsId": [],
        "idp": 229
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 233,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2.4",
            "Start": "2015-09-07T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "230",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 229
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 234,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2.5",
            "Start": "2015-09-09T18:00:00",
            "End": "2015-09-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "234",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                234
            ]
        },
        "childsId": [],
        "idp": 229
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 235,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2.6",
            "Start": "2015-09-11T18:00:00",
            "End": "2015-09-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "232",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 229
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 236,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR PARA TUBERIA AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.13.2.7",
            "Start": "2015-09-21T18:00:00",
            "End": "2015-09-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "237",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                239
            ]
        },
        "childsId": [],
        "idp": 229
    },
    {
        "datos": {
            "Sucesoras": [
                236
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIAS PVC DN 1 \" NTP ISO 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.13.3",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-21T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 237,
        "childsId": [
            238,
            239
        ],
        "idp": 226
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 238,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.13.3.1",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "231",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 237
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 239,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.13.3.2",
            "Start": "2015-09-18T18:00:00",
            "End": "2015-09-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "236",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 237
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 240,
        "datos": {
            "Descripcion": " LINEA DE CONDUCCION (SISTEMA 04 - ANEXO CHANCHALLAY 4305.43 ML)",
            "Cost": "0",
            "OutlineNumber": "2.1.14",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-30T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                244
            ]
        },
        "childsId": [
            241,
            243,
            251
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 241,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.14.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-27T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            242
        ],
        "idp": 240
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 242,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.14.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-27T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                245
            ]
        },
        "childsId": [],
        "idp": 241
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 243,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2",
            "Start": "2015-08-27T18:00:00",
            "End": "2015-09-30T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                246
            ]
        },
        "childsId": [
            244,
            245,
            246,
            247,
            248,
            249,
            250
        ],
        "idp": 240
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 244,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TN.",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2.1",
            "Start": "2015-08-27T18:00:00",
            "End": "2015-09-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "240",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                247
            ]
        },
        "childsId": [],
        "idp": 243
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 245,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2.2",
            "Start": "2015-09-01T18:00:00",
            "End": "2015-09-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "242",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                252
            ]
        },
        "childsId": [],
        "idp": 243
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 246,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2.3",
            "Start": "2015-09-04T18:00:00",
            "End": "2015-09-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "243",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                249
            ]
        },
        "childsId": [],
        "idp": 243
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 247,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2.4",
            "Start": "2015-09-10T18:00:00",
            "End": "2015-09-15T18:00:00",
            "predecesorLink": [
                {
                    "id": "244",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 243
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 248,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2.5",
            "Start": "2015-09-15T18:00:00",
            "End": "2015-09-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "248",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                248
            ]
        },
        "childsId": [],
        "idp": 243
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 249,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2.6",
            "Start": "2015-09-17T18:00:00",
            "End": "2015-09-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "246",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 243
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 250,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR PARA TUBERIA AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.14.2.7",
            "Start": "2015-09-28T18:00:00",
            "End": "2015-09-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "251",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                253
            ]
        },
        "childsId": [],
        "idp": 243
    },
    {
        "datos": {
            "Sucesoras": [
                250
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIAS PVC DN 1 \" NTP ISO 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.14.3",
            "Start": "2015-09-21T18:00:00",
            "End": "2015-09-28T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 251,
        "childsId": [
            252,
            253
        ],
        "idp": 240
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 252,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.14.3.1",
            "Start": "2015-09-21T18:00:00",
            "End": "2015-09-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "245",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 251
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 253,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.14.3.2",
            "Start": "2015-09-24T18:00:00",
            "End": "2015-09-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "250",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 251
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 254,
        "datos": {
            "Descripcion": " LINEA DE CONDUCCION (SISTEMA 04 - ANEXO SANTA CATALINA 287.55 ML)",
            "Cost": "0",
            "OutlineNumber": "2.1.15",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                258
            ]
        },
        "childsId": [
            255,
            257,
            265
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 255,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.15.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            256
        ],
        "idp": 254
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 256,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.15.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                259
            ]
        },
        "childsId": [],
        "idp": 255
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 257,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2",
            "Start": "2015-08-25T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                260
            ]
        },
        "childsId": [
            258,
            259,
            260,
            261,
            262,
            263,
            264
        ],
        "idp": 254
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 258,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TN.",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2.1",
            "Start": "2015-08-25T18:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": [
                {
                    "id": "254",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                261
            ]
        },
        "childsId": [],
        "idp": 257
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 259,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2.2",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-08-27T18:00:00",
            "predecesorLink": [
                {
                    "id": "256",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                266
            ]
        },
        "childsId": [],
        "idp": 257
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 260,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2.3",
            "Start": "2015-08-27T18:00:00",
            "End": "2015-08-31T18:00:00",
            "predecesorLink": [
                {
                    "id": "257",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                263
            ]
        },
        "childsId": [],
        "idp": 257
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 261,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2.4",
            "Start": "2015-08-31T18:00:00",
            "End": "2015-09-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "258",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 257
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 262,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2.5",
            "Start": "2015-09-01T18:00:00",
            "End": "2015-09-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "262",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                262
            ]
        },
        "childsId": [],
        "idp": 257
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 263,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2.6",
            "Start": "2015-09-02T18:00:00",
            "End": "2015-09-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "260",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 257
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 264,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR PARA TUBERIA AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.15.2.7",
            "Start": "2015-09-08T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "265",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                267
            ]
        },
        "childsId": [],
        "idp": 257
    },
    {
        "datos": {
            "Sucesoras": [
                264
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIAS PVC DN 1 \" NTP ISO 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.15.3",
            "Start": "2015-09-04T18:00:00",
            "End": "2015-09-08T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 265,
        "childsId": [
            266,
            267
        ],
        "idp": 254
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 266,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.15.3.1",
            "Start": "2015-09-04T18:00:00",
            "End": "2015-09-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "259",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 265
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 267,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.15.3.2",
            "Start": "2015-09-07T18:00:00",
            "End": "2015-09-08T18:00:00",
            "predecesorLink": [
                {
                    "id": "264",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 265
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 268,
        "datos": {
            "Descripcion": " LINEA DE CONDUCCION (SISTEMA 04 - ANEXO YACHANGUILLO 513.72 ML)",
            "Cost": "0",
            "OutlineNumber": "2.1.16",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-10T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                272
            ]
        },
        "childsId": [
            269,
            271,
            279
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 269,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.16.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            270
        ],
        "idp": 268
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 270,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.16.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-26T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                273
            ]
        },
        "childsId": [],
        "idp": 269
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 271,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-09-10T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                274
            ]
        },
        "childsId": [
            272,
            273,
            274,
            275,
            276,
            277,
            278
        ],
        "idp": 268
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 272,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TN.",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2.1",
            "Start": "2015-08-26T18:00:00",
            "End": "2015-08-27T18:00:00",
            "predecesorLink": [
                {
                    "id": "268",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                275
            ]
        },
        "childsId": [],
        "idp": 271
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 273,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2.2",
            "Start": "2015-08-27T18:00:00",
            "End": "2015-08-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "270",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                280
            ]
        },
        "childsId": [],
        "idp": 271
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 274,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2.3",
            "Start": "2015-08-28T18:00:00",
            "End": "2015-09-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "271",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                277
            ]
        },
        "childsId": [],
        "idp": 271
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 275,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2.4",
            "Start": "2015-09-01T18:00:00",
            "End": "2015-09-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "272",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 271
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 276,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2.5",
            "Start": "2015-09-02T18:00:00",
            "End": "2015-09-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "276",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                276
            ]
        },
        "childsId": [],
        "idp": 271
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 277,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2.6",
            "Start": "2015-09-03T18:00:00",
            "End": "2015-09-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "274",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 271
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 278,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR PARA TUBERIA AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.16.2.7",
            "Start": "2015-09-09T18:00:00",
            "End": "2015-09-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "279",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                281
            ]
        },
        "childsId": [],
        "idp": 271
    },
    {
        "datos": {
            "Sucesoras": [
                278
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIAS PVC DN 1 \" NTP ISO 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.16.3",
            "Start": "2015-09-07T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 279,
        "childsId": [
            280,
            281
        ],
        "idp": 268
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 280,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.16.3.1",
            "Start": "2015-09-07T18:00:00",
            "End": "2015-09-08T18:00:00",
            "predecesorLink": [
                {
                    "id": "273",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 279
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 281,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.16.3.2",
            "Start": "2015-09-08T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "278",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                285
            ]
        },
        "childsId": [],
        "idp": 279
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 282,
        "datos": {
            "Descripcion": " LINEA DE ADUCION Y REDES DE DISTRIBUCION",
            "Cost": "0",
            "OutlineNumber": "2.1.17",
            "Start": "2015-09-11T08:00:00",
            "End": "2015-12-31T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                286
            ]
        },
        "childsId": [
            283,
            285,
            295,
            303,
            349,
            351
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 283,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.17.1",
            "Start": "2015-09-11T08:00:00",
            "End": "2015-09-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            284
        ],
        "idp": 282
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 284,
        "datos": {
            "Descripcion": " TRAZO NIVELACION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.17.1.1",
            "Start": "2015-09-11T08:00:00",
            "End": "2015-09-18T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                287
            ]
        },
        "childsId": [],
        "idp": 283
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 285,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2",
            "Start": "2015-09-21T08:00:00",
            "End": "2015-12-31T18:00:00",
            "predecesorLink": [
                {
                    "id": "281",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                288
            ]
        },
        "childsId": [
            286,
            287,
            288,
            289,
            290,
            291,
            292,
            293,
            294
        ],
        "idp": 282
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 286,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.1",
            "Start": "2015-09-21T08:00:00",
            "End": "2015-09-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "282",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                289
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 287,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.2",
            "Start": "2015-09-30T18:00:00",
            "End": "2015-10-14T18:00:00",
            "predecesorLink": [
                {
                    "id": "284",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                293
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 288,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO ROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.3",
            "Start": "2015-10-14T18:00:00",
            "End": "2015-11-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "285",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                292
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 289,
        "datos": {
            "Descripcion": " RELLENO COMPACTADO ZANJA P/TUBERIA DE AGUA POTABLE CON MATERIAL PROPIO",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.4",
            "Start": "2015-11-04T18:00:00",
            "End": "2015-11-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "286",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                291
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 290,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS (T. ROCOSO)",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.5",
            "Start": "2015-11-11T18:00:00",
            "End": "2015-11-19T18:00:00",
            "predecesorLink": [
                {
                    "id": "292",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                296
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 291,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS (T. SEMIROCOSO)",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.6",
            "Start": "2015-11-19T18:00:00",
            "End": "2015-11-25T18:00:00",
            "predecesorLink": [
                {
                    "id": "289",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "datos": {
            "Sucesoras": [
                290
            ],
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS (T. NORMAL)",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.7",
            "Start": "2015-11-25T18:00:00",
            "End": "2015-11-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "288",
                    "lag": "0"
                }
            ]
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 292,
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 293,
        "datos": {
            "Descripcion": " CAMA DE APOYO PARA TUEBRIA DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.8",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "287",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 294,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR P/TUBERIA DE Ø73mm , 2 \" , 1 1/2 \" , 1 \" , 1/2 \" , 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.2.9",
            "Start": "2015-12-23T18:00:00",
            "End": "2015-12-31T18:00:00",
            "predecesorLink": [
                {
                    "id": "300",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                297
            ]
        },
        "childsId": [],
        "idp": 285
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 295,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACIONES DE TUBERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                298
            ]
        },
        "childsId": [
            296,
            297,
            298,
            299,
            300,
            301,
            302
        ],
        "idp": 282
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 296,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 73mm C-5 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3.1",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "290",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                299
            ]
        },
        "childsId": [],
        "idp": 295
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 297,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 2 \" C-5 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3.2",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "294",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                300
            ]
        },
        "childsId": [],
        "idp": 295
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 298,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 1/2 \" C-5 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3.3",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "295",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                301
            ]
        },
        "childsId": [],
        "idp": 295
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 299,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3.4",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "296",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                302
            ]
        },
        "childsId": [],
        "idp": 295
    },
    {
        "datos": {
            "Sucesoras": [
                294
            ],
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 1/2 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3.5",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "297",
                    "lag": "0"
                }
            ]
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 300,
        "childsId": [],
        "idp": 295
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 301,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA PVC DN 3/4 \" C-10 NTP 399.002:2009",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3.6",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "298",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 295
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 302,
        "datos": {
            "Descripcion": " PRUEBA HIDRAULICA + DESINFECCION TUBERIA DE AGUA",
            "Cost": "0",
            "OutlineNumber": "2.1.17.3.7",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "299",
                    "lag": "0"
                },
                {
                    "id": "350",
                    "lag": "0"
                },
                {
                    "id": "347",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                305
            ]
        },
        "childsId": [],
        "idp": 295
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 303,
        "datos": {
            "Descripcion": " SUMINISTRO DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4",
            "Start": "2015-12-04T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                306
            ]
        },
        "childsId": [
            304,
            305,
            306,
            307,
            308,
            309,
            310,
            311,
            312,
            313,
            314,
            315,
            316,
            317,
            318,
            319,
            320,
            321,
            322,
            323,
            324,
            325,
            326,
            327,
            328,
            329,
            330,
            331,
            332,
            333,
            334,
            335,
            336,
            337,
            338,
            339,
            340,
            341,
            342,
            343,
            344,
            345,
            346,
            347,
            348
        ],
        "idp": 282
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 304,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE YEE PVC 73mm \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.1",
            "Start": "2015-12-04T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                307
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 305,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE YEE PVC 1 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.2",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "302",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                308
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 306,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE YEE PVC 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.3",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "303",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                309
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 307,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TEE PVC 73mm \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.4",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "304",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                310
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 308,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TEE PVC 2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.5",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "305",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                311
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 309,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TEE PVC 1 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.6",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "306",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                312
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 310,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TEE PVC 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.7",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "307",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                313
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 311,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TEE PVC 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.8",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "308",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                314
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 312,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TEE PVC 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.9",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "309",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                315
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 313,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 45° PVC 2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.10",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "310",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                316
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 314,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 45° PVC 1 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.11",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "311",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                317
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 315,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 45° PVC 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.12",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "312",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                318
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 316,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 45° PVC 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.13",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "313",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                319
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 317,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 45° PVC 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.14",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "314",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                320
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 318,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 90° PVC 73mm \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.15",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "315",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                321
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 319,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 90° PVC 2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.16",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "316",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                322
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 320,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 90° PVC 1 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.17",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "317",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                323
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 321,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 90° PVC 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.18",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "318",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                324
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 322,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 90° PVC 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.19",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "319",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                325
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 323,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE CODO 90° PVC 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.20",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "320",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                326
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 324,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TAPON PVC 73mm \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.21",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "321",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                327
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 325,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TAPON PVC 1 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.22",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "322",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                328
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 326,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TAPON PVC 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.23",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "323",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                329
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 327,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TAPON PVC 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.24",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "324",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                330
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 328,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE TAPON PVC 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.25",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "325",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                331
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 329,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE REDUCCION 73mm a 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.26",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "326",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                332
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 330,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE REDUCCION 2 a 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.27",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "327",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                333
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 331,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE REDUCCION 1 a 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.28",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "328",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                334
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 332,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE REDUCCION 1 a 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.29",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "329",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                335
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 333,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE REDUCCION 1 1/2 a 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.30",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "330",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                336
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 334,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE REDUCCION 1 1/2 a 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.31",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "331",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                337
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 335,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE REDUCCION 1 1/2 a 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.32",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "332",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                338
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 336,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE CONTROL 73mm \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.33",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "333",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                339
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 337,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE CONTROL 2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.34",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "334",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                340
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 338,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE CONTROL 1 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.35",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "335",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                341
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 339,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE CONTROL 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.36",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "336",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                342
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 340,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE CONTROL 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.37",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "337",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                343
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 341,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE CONTROL 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.38",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "338",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                344
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 342,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE PURGA 73mm \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.39",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "339",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                345
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 343,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE PURGA 2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.40",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "340",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                346
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 344,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE PURGA 1 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.41",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "341",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                347
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 345,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE PURGA 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.42",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "342",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                352
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 346,
        "datos": {
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE PURGA 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.43",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "343",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 303
    },
    {
        "datos": {
            "Sucesoras": [
                302
            ],
            "Descripcion": " SUMINISTRO E INST. DE VALVULA DE PURGA 3/4 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.44",
            "Start": "2015-12-04T09:00:00",
            "End": "2015-12-07T19:00:00",
            "predecesorLink": [
                {
                    "id": "344",
                    "lag": "0"
                }
            ]
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 347,
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 348,
        "datos": {
            "Descripcion": " MARCO Y TAPA PARA VALVULA",
            "Cost": "0",
            "OutlineNumber": "2.1.17.4.45",
            "Start": "2015-12-10T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 303
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 349,
        "datos": {
            "Descripcion": " CONEXIONES DOMICILIARIAS DE AGUA POTABLE",
            "Cost": "0",
            "OutlineNumber": "2.1.17.5",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            350
        ],
        "idp": 282
    },
    {
        "datos": {
            "Sucesoras": [
                302
            ],
            "Descripcion": " CONEXION DOMICILARIA DE AGUA POTABLE 1/2 \" - MATRIZ DE 63MM -TN",
            "Cost": "0",
            "OutlineNumber": "2.1.17.5.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 350,
        "childsId": [],
        "idp": 349
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 351,
        "datos": {
            "Descripcion": " VARIOS",
            "Cost": "0",
            "OutlineNumber": "2.1.17.6",
            "Start": "2015-12-08T09:00:00",
            "End": "2015-12-11T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                366
            ]
        },
        "childsId": [
            352
        ],
        "idp": 282
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 352,
        "datos": {
            "Descripcion": " ANCLAJES DE CONCRETO PARA VALVULAS Y ACCESORIOS",
            "Cost": "0",
            "OutlineNumber": "2.1.17.6.1",
            "Start": "2015-12-08T09:00:00",
            "End": "2015-12-11T19:00:00",
            "predecesorLink": [
                {
                    "id": "345",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 351
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 353,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA DE AIRE (40 UND)",
            "Cost": "0",
            "OutlineNumber": "2.1.18",
            "Start": "2015-12-08T08:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                357
            ]
        },
        "childsId": [
            354,
            356,
            358,
            361,
            363
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 354,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.18.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            355
        ],
        "idp": 353
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 355,
        "datos": {
            "Descripcion": " TRAZO REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.18.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                359
            ]
        },
        "childsId": [],
        "idp": 354
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 356,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.18.2",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-24T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            357
        ],
        "idp": 353
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 357,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20",
            "Cost": "0",
            "OutlineNumber": "2.1.18.2.1",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "353",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 356
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 358,
        "datos": {
            "Descripcion": " CONCRETO SIMPLE",
            "Cost": "0",
            "OutlineNumber": "2.1.18.3",
            "Start": "2015-12-24T18:00:00",
            "End": "2016-02-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                360,
                362
            ]
        },
        "childsId": [
            359,
            360
        ],
        "idp": 353
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 359,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.18.3.1",
            "Start": "2015-12-24T18:00:00",
            "End": "2016-02-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "355",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 358
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 360,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.18.3.2",
            "Start": "2015-12-30T18:00:00",
            "End": "2016-01-27T18:00:00",
            "predecesorLink": [
                {
                    "id": "358",
                    "lag": "19200"
                }
            ],
            "Sucesoras": [
                364
            ]
        },
        "childsId": [],
        "idp": 358
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 361,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.18.4",
            "Start": "2016-02-02T18:00:00",
            "End": "2016-02-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            362
        ],
        "idp": 353
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 362,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.18.4.1",
            "Start": "2016-02-02T18:00:00",
            "End": "2016-02-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "358",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                365
            ]
        },
        "childsId": [],
        "idp": 361
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 363,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.18.5",
            "Start": "2016-02-16T18:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            364,
            365
        ],
        "idp": 353
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 364,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.18.5.1",
            "Start": "2016-02-16T18:00:00",
            "End": "2016-02-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "360",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                379
            ]
        },
        "childsId": [],
        "idp": 363
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 365,
        "datos": {
            "Descripcion": " TAPA METALICA 0.40 X 0.40",
            "Cost": "0",
            "OutlineNumber": "2.1.18.5.2",
            "Start": "2016-02-24T18:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": [
                {
                    "id": "362",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 363
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 366,
        "datos": {
            "Descripcion": " CAMARA DE VALVULA DE PURGA (41 UNID)",
            "Cost": "0",
            "OutlineNumber": "2.1.19",
            "Start": "2015-12-08T08:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": [
                {
                    "id": "351",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                370
            ]
        },
        "childsId": [
            367,
            369,
            371,
            374,
            376
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 367,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.19.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            368
        ],
        "idp": 366
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 368,
        "datos": {
            "Descripcion": " TRAZO REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.19.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                372
            ]
        },
        "childsId": [],
        "idp": 367
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 369,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.19.2",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-24T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            370
        ],
        "idp": 366
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 370,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20",
            "Cost": "0",
            "OutlineNumber": "2.1.19.2.1",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "366",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 369
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 371,
        "datos": {
            "Descripcion": " CONCRETO SIMPLE",
            "Cost": "0",
            "OutlineNumber": "2.1.19.3",
            "Start": "2015-12-24T18:00:00",
            "End": "2016-02-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                373,
                375
            ]
        },
        "childsId": [
            372,
            373
        ],
        "idp": 366
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 372,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.19.3.1",
            "Start": "2015-12-24T18:00:00",
            "End": "2016-02-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "368",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 371
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 373,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.19.3.2",
            "Start": "2015-12-30T18:00:00",
            "End": "2016-01-27T18:00:00",
            "predecesorLink": [
                {
                    "id": "371",
                    "lag": "19200"
                }
            ],
            "Sucesoras": [
                377
            ]
        },
        "childsId": [],
        "idp": 371
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 374,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.19.4",
            "Start": "2016-02-02T18:00:00",
            "End": "2016-02-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            375
        ],
        "idp": 366
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 375,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.19.4.1",
            "Start": "2016-02-02T18:00:00",
            "End": "2016-02-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "371",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                378
            ]
        },
        "childsId": [],
        "idp": 374
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 376,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.19.5",
            "Start": "2016-02-16T18:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            377,
            378
        ],
        "idp": 366
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 377,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.19.5.1",
            "Start": "2016-02-16T18:00:00",
            "End": "2016-02-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "373",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 376
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 378,
        "datos": {
            "Descripcion": " TAPA METALICA 0.40 X 0.40",
            "Cost": "0",
            "OutlineNumber": "2.1.19.5.2",
            "Start": "2016-02-24T18:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": [
                {
                    "id": "375",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 376
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 379,
        "datos": {
            "Descripcion": " CAMARA ROMPE PRESION TIPO 6 (07 UND)",
            "Cost": "0",
            "OutlineNumber": "2.1.20",
            "Start": "2015-12-08T08:00:00",
            "End": "2016-01-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "364",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                383
            ]
        },
        "childsId": [
            380,
            382,
            384,
            388,
            390,
            392
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 380,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.20.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            381
        ],
        "idp": 379
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 381,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.20.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                387
            ]
        },
        "childsId": [],
        "idp": 380
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 382,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.20.2",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            383
        ],
        "idp": 379
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 383,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.20.2.1",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "379",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 382
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 384,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.20.3",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-28T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                386,
                389
            ]
        },
        "childsId": [
            385,
            386,
            387
        ],
        "idp": 379
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 385,
        "datos": {
            "Descripcion": " ACERO DE REFUERZO fy=4,200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.20.3.1",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                387
            ]
        },
        "childsId": [],
        "idp": 384
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 386,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.20.3.2",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "384",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 384
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 387,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.20.3.3",
            "Start": "2015-12-17T18:00:00",
            "End": "2015-12-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "381",
                    "lag": "0"
                },
                {
                    "id": "385",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                391
            ]
        },
        "childsId": [],
        "idp": 384
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 388,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.20.4",
            "Start": "2015-12-28T18:00:00",
            "End": "2015-12-30T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            389
        ],
        "idp": 379
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 389,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.20.4.1",
            "Start": "2015-12-28T18:00:00",
            "End": "2015-12-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "384",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                393
            ]
        },
        "childsId": [],
        "idp": 388
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 390,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.20.5",
            "Start": "2015-12-30T18:00:00",
            "End": "2016-01-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            391
        ],
        "idp": 379
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 391,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.20.5.1",
            "Start": "2015-12-30T18:00:00",
            "End": "2016-01-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "387",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 390
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 392,
        "datos": {
            "Descripcion": " CARPINTERIA METALICA",
            "Cost": "0",
            "OutlineNumber": "2.1.20.6",
            "Start": "2016-01-01T18:00:00",
            "End": "2016-01-04T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                409
            ]
        },
        "childsId": [
            393
        ],
        "idp": 379
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 393,
        "datos": {
            "Descripcion": " TAPA METALICA 0.60 X 0.60",
            "Cost": "0",
            "OutlineNumber": "2.1.20.6.1",
            "Start": "2016-01-01T18:00:00",
            "End": "2016-01-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "389",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 392
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 394,
        "datos": {
            "Descripcion": " CAMARA ROMPE PRESION TIPO 7 (04 UND)",
            "Cost": "0",
            "OutlineNumber": "2.1.21",
            "Start": "2015-12-08T08:00:00",
            "End": "2016-01-06T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                398
            ]
        },
        "childsId": [
            395,
            397,
            399,
            403,
            405,
            407
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 395,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.21.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            396
        ],
        "idp": 394
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 396,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.21.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                400
            ]
        },
        "childsId": [],
        "idp": 395
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 397,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.21.2",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            398
        ],
        "idp": 394
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 398,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.21.2.1",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "394",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 397
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 399,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.21.3",
            "Start": "2015-12-17T18:00:00",
            "End": "2015-12-30T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                401,
                404
            ]
        },
        "childsId": [
            400,
            401,
            402
        ],
        "idp": 394
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 400,
        "datos": {
            "Descripcion": " ACERO DE REFUERZO fy=4,200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.21.3.1",
            "Start": "2015-12-17T18:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "396",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                402
            ]
        },
        "childsId": [],
        "idp": 399
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 401,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.21.3.2",
            "Start": "2015-12-23T18:00:00",
            "End": "2015-12-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "399",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 399
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 402,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.21.3.3",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-30T18:00:00",
            "predecesorLink": [
                {
                    "id": "400",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                406
            ]
        },
        "childsId": [],
        "idp": 399
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 403,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.21.4",
            "Start": "2015-12-30T18:00:00",
            "End": "2016-01-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            404
        ],
        "idp": 394
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 404,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.21.4.1",
            "Start": "2015-12-30T18:00:00",
            "End": "2016-01-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "399",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                408
            ]
        },
        "childsId": [],
        "idp": 403
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 405,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.21.5",
            "Start": "2016-01-01T18:00:00",
            "End": "2016-01-05T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            406
        ],
        "idp": 394
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 406,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.21.5.1",
            "Start": "2016-01-01T18:00:00",
            "End": "2016-01-05T18:00:00",
            "predecesorLink": [
                {
                    "id": "402",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 405
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 407,
        "datos": {
            "Descripcion": " CARPINTERIA METALICA",
            "Cost": "0",
            "OutlineNumber": "2.1.21.6",
            "Start": "2016-01-05T18:00:00",
            "End": "2016-01-06T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                424
            ]
        },
        "childsId": [
            408
        ],
        "idp": 394
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 408,
        "datos": {
            "Descripcion": " TAPA METALICA 0.60 X 0.60",
            "Cost": "0",
            "OutlineNumber": "2.1.21.6.1",
            "Start": "2016-01-05T18:00:00",
            "End": "2016-01-06T18:00:00",
            "predecesorLink": [
                {
                    "id": "404",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 407
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 409,
        "datos": {
            "Descripcion": " CAMARA DISTRIBUIDORA DE CAUDAL (01 UND) CAHUANOTA",
            "Cost": "0",
            "OutlineNumber": "2.1.22",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "392",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                413
            ]
        },
        "childsId": [
            410,
            412,
            414,
            418,
            420,
            422
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 410,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.22.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            411
        ],
        "idp": 409
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 411,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.22.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                415
            ]
        },
        "childsId": [],
        "idp": 410
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 412,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.22.2",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            413
        ],
        "idp": 409
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 413,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.22.2.1",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "409",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 412
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 414,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.22.3",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                416,
                419
            ]
        },
        "childsId": [
            415,
            416,
            417
        ],
        "idp": 409
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 415,
        "datos": {
            "Descripcion": " ACERO DE REFUERZO fy=4,200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.22.3.1",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "411",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                417
            ]
        },
        "childsId": [],
        "idp": 414
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 416,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.22.3.2",
            "Start": "2015-12-14T18:00:00",
            "End": "2015-12-15T18:00:00",
            "predecesorLink": [
                {
                    "id": "414",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 414
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 417,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.22.3.3",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "415",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                421
            ]
        },
        "childsId": [],
        "idp": 414
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 418,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.22.4",
            "Start": "2015-12-18T18:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            419
        ],
        "idp": 409
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 419,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.22.4.1",
            "Start": "2015-12-18T18:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "414",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                423
            ]
        },
        "childsId": [],
        "idp": 418
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 420,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.22.5",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            421
        ],
        "idp": 409
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 421,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.22.5.1",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "417",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 420
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 422,
        "datos": {
            "Descripcion": " CARPINTERIA METALICA",
            "Cost": "0",
            "OutlineNumber": "2.1.22.6",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                439
            ]
        },
        "childsId": [
            423
        ],
        "idp": 409
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 423,
        "datos": {
            "Descripcion": " TAPA METALICA 0.60 X 0.60",
            "Cost": "0",
            "OutlineNumber": "2.1.22.6.1",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "419",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 422
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 424,
        "datos": {
            "Descripcion": " CAMARA DISTRIBUIDORA DE CAUDAL (01 UND) SANTA CATALINA",
            "Cost": "0",
            "OutlineNumber": "2.1.23",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "407",
                    "lag": "-19200"
                }
            ],
            "Sucesoras": [
                428
            ]
        },
        "childsId": [
            425,
            427,
            429,
            433,
            435,
            437
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 425,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.23.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            426
        ],
        "idp": 424
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 426,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.23.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                430
            ]
        },
        "childsId": [],
        "idp": 425
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 427,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.23.2",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            428
        ],
        "idp": 424
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 428,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.23.2.1",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "424",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 427
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 429,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.23.3",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                431,
                434
            ]
        },
        "childsId": [
            430,
            431,
            432
        ],
        "idp": 424
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 430,
        "datos": {
            "Descripcion": " ACERO DE REFUERZO fy=4,200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.23.3.1",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "426",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                432
            ]
        },
        "childsId": [],
        "idp": 429
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 431,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.23.3.2",
            "Start": "2015-12-14T18:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "429",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 429
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 432,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.23.3.3",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "430",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                436
            ]
        },
        "childsId": [],
        "idp": 429
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 433,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.23.4",
            "Start": "2015-12-18T18:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            434
        ],
        "idp": 424
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 434,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.23.4.1",
            "Start": "2015-12-18T18:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "429",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                438
            ]
        },
        "childsId": [],
        "idp": 433
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 435,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.23.5",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            436
        ],
        "idp": 424
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 436,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.23.5.1",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "432",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 435
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 437,
        "datos": {
            "Descripcion": " CARPINTERIA METALICA",
            "Cost": "0",
            "OutlineNumber": "2.1.23.6",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            438
        ],
        "idp": 424
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 438,
        "datos": {
            "Descripcion": " TAPA METALICA 0.60 X 0.60",
            "Cost": "0",
            "OutlineNumber": "2.1.23.6.1",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "434",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 437
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 439,
        "datos": {
            "Descripcion": " CAMARA DISTRIBUIDORA DE CAUDAL (01 UND) YACHANGUILLO",
            "Cost": "0",
            "OutlineNumber": "2.1.24",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "422",
                    "lag": "-4800"
                }
            ],
            "Sucesoras": [
                443
            ]
        },
        "childsId": [
            440,
            442,
            444,
            448,
            450,
            452
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 440,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.24.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            441
        ],
        "idp": 439
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 441,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.24.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                445
            ]
        },
        "childsId": [],
        "idp": 440
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 442,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.24.2",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            443
        ],
        "idp": 439
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 443,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.24.2.1",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "439",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 442
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 444,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.24.3",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                446,
                449
            ]
        },
        "childsId": [
            445,
            446,
            447
        ],
        "idp": 439
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 445,
        "datos": {
            "Descripcion": " ACERO DE REFUERZO fy=4,200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.24.3.1",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "441",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                447
            ]
        },
        "childsId": [],
        "idp": 444
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 446,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.24.3.2",
            "Start": "2015-12-14T18:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "444",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 444
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 447,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.24.3.3",
            "Start": "2015-12-10T18:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "445",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                451
            ]
        },
        "childsId": [],
        "idp": 444
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 448,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.24.4",
            "Start": "2015-12-18T18:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            449
        ],
        "idp": 439
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 449,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.24.4.1",
            "Start": "2015-12-18T18:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "444",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                453
            ]
        },
        "childsId": [],
        "idp": 448
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 450,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.24.5",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            451
        ],
        "idp": 439
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 451,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.24.5.1",
            "Start": "2015-12-21T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "447",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 450
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 452,
        "datos": {
            "Descripcion": " CARPINTERIA METALICA",
            "Cost": "0",
            "OutlineNumber": "2.1.24.6",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            453
        ],
        "idp": 439
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 453,
        "datos": {
            "Descripcion": " TAPA METALICA 0.60 X 0.60",
            "Cost": "0",
            "OutlineNumber": "2.1.24.6.1",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-23T18:00:00",
            "predecesorLink": [
                {
                    "id": "449",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 452
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 454,
        "datos": {
            "Descripcion": " VALVULA DE CONTROL (06 UND - DISTRIBUIDORA DE CAUDAL)",
            "Cost": "0",
            "OutlineNumber": "2.1.25",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-29T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                458
            ]
        },
        "childsId": [
            455,
            457,
            459,
            462,
            464,
            466
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 455,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.25.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            456
        ],
        "idp": 454
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 456,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.25.1.1",
            "Start": "2015-12-08T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                461
            ]
        },
        "childsId": [],
        "idp": 455
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 457,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.25.2",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            458
        ],
        "idp": 454
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 458,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.25.2.1",
            "Start": "2015-12-09T18:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "454",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 457
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 459,
        "datos": {
            "Descripcion": " CONCRETO SIMPLE",
            "Cost": "0",
            "OutlineNumber": "2.1.25.3",
            "Start": "2015-12-11T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                460,
                463
            ]
        },
        "childsId": [
            460,
            461
        ],
        "idp": 454
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 460,
        "datos": {
            "Descripcion": " CONCRETO f'c=175 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.25.3.1",
            "Start": "2015-12-15T18:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "459",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 459
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 461,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.1.25.3.2",
            "Start": "2015-12-11T18:00:00",
            "End": "2015-12-22T18:00:00",
            "predecesorLink": [
                {
                    "id": "456",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                465
            ]
        },
        "childsId": [],
        "idp": 459
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 462,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.1.25.4",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-24T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            463
        ],
        "idp": 454
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 463,
        "datos": {
            "Descripcion": " TARRAJEO CON IMPERMEABILIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.25.4.1",
            "Start": "2015-12-22T18:00:00",
            "End": "2015-12-24T18:00:00",
            "predecesorLink": [
                {
                    "id": "459",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                467
            ]
        },
        "childsId": [],
        "idp": 462
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 464,
        "datos": {
            "Descripcion": " ACCESORIOS Y VALVULAS",
            "Cost": "0",
            "OutlineNumber": "2.1.25.5",
            "Start": "2015-12-24T18:00:00",
            "End": "2015-12-28T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            465
        ],
        "idp": 454
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 465,
        "datos": {
            "Descripcion": " SUMIN. E. INST. DE ACCESORIOS Y VALVULAS CONTROL",
            "Cost": "0",
            "OutlineNumber": "2.1.25.5.1",
            "Start": "2015-12-24T18:00:00",
            "End": "2015-12-28T18:00:00",
            "predecesorLink": [
                {
                    "id": "461",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 464
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 466,
        "datos": {
            "Descripcion": " CARPINTERIA METALICA",
            "Cost": "0",
            "OutlineNumber": "2.1.25.6",
            "Start": "2015-12-28T18:00:00",
            "End": "2015-12-29T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            467
        ],
        "idp": 454
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 467,
        "datos": {
            "Descripcion": " TAPA METALICA 0.40 X 0.40",
            "Cost": "0",
            "OutlineNumber": "2.1.25.6.1",
            "Start": "2015-12-28T18:00:00",
            "End": "2015-12-29T18:00:00",
            "predecesorLink": [
                {
                    "id": "463",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 466
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 468,
        "datos": {
            "Descripcion": " PASE AEREO 01 - CAHUANOTA 2",
            "Cost": "0",
            "OutlineNumber": "2.1.26",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            469,
            474,
            484,
            495,
            497,
            503
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 469,
        "datos": {
            "Descripcion": " ESTRIBOS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                473
            ]
        },
        "childsId": [
            470,
            472
        ],
        "idp": 468
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 470,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.26.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            471
        ],
        "idp": 469
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 471,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.26.1.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 470
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 472,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.1.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                497
            ]
        },
        "childsId": [
            473
        ],
        "idp": 469
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 473,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.26.1.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "469",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 472
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 474,
        "datos": {
            "Descripcion": " PORTICOS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            475,
            477,
            482
        ],
        "idp": 468
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 475,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            476
        ],
        "idp": 474
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 476,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                479,
                483
            ]
        },
        "childsId": [],
        "idp": 475
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 477,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.2",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                480
            ]
        },
        "childsId": [
            478,
            479,
            480,
            481
        ],
        "idp": 474
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 478,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.2.1",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 477
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 479,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.2.2",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "476",
                    "lag": "4800"
                }
            ],
            "Sucesoras": [
                481
            ]
        },
        "childsId": [],
        "idp": 477
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 480,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.2.3",
            "Start": "2015-12-04T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "477",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 477
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 481,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.2.4",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "479",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 477
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 482,
        "datos": {
            "Descripcion": " PINTURAS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.3",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            483
        ],
        "idp": 474
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 483,
        "datos": {
            "Descripcion": " PINTURA EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.2.3.1",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": [
                {
                    "id": "476",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 482
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 484,
        "datos": {
            "Descripcion": " CAMARA DE ANCLAJE",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                488
            ]
        },
        "childsId": [
            485,
            487,
            489,
            491,
            493
        ],
        "idp": 468
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 485,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            486
        ],
        "idp": 484
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 486,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                490
            ]
        },
        "childsId": [],
        "idp": 485
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 487,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            488
        ],
        "idp": 484
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 488,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "484",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                492
            ]
        },
        "childsId": [],
        "idp": 487
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 489,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.3",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            490
        ],
        "idp": 484
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 490,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.3.1",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "486",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                494
            ]
        },
        "childsId": [],
        "idp": 489
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 491,
        "datos": {
            "Descripcion": " CONCRETO",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.4",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            492
        ],
        "idp": 484
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 492,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2 + 60% P.G.",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.4.1",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "488",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 491
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 493,
        "datos": {
            "Descripcion": " SUMINISTRO E COLOCACION DE ACCESORIOS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.5",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            494
        ],
        "idp": 484
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 494,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GUARDABLES",
            "Cost": "0",
            "OutlineNumber": "2.1.26.3.5.1",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "490",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 493
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 495,
        "datos": {
            "Descripcion": " CARROS DE DILATACION (APOYO)",
            "Cost": "0",
            "OutlineNumber": "2.1.26.4",
            "Start": "2015-12-09T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                503
            ]
        },
        "childsId": [
            496
        ],
        "idp": 468
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 496,
        "datos": {
            "Descripcion": " RODILLO DE ACERO MACIZO",
            "Cost": "0",
            "OutlineNumber": "2.1.26.4.1",
            "Start": "2015-12-09T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 495
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 497,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE Y CERRAJERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.26.5",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "472",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            498,
            499,
            500,
            501,
            502
        ],
        "idp": 468
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 498,
        "datos": {
            "Descripcion": " SUMINISTRO EN INSTALACION DE CABLE DE ACERO TIPO BOA 5/8 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.26.5.1",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 497
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 499,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GRAPAS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.5.2",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 497
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 500,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ABRAZADERAS",
            "Cost": "0",
            "OutlineNumber": "2.1.26.5.3",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 497
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 501,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ANTIDESLIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.26.5.4",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 497
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 502,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE PENDOLAS DE FIERRO LISO",
            "Cost": "0",
            "OutlineNumber": "2.1.26.5.5",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 497
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 503,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.26.6",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "495",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            504,
            505,
            506
        ],
        "idp": 468
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 504,
        "datos": {
            "Descripcion": " TUBERIA HDEP 32mm PN6 SDR 21 PE80",
            "Cost": "0",
            "OutlineNumber": "2.1.26.6.1",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 503
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 505,
        "datos": {
            "Descripcion": " UNION MIXTA PVC 1 \" SP X 1 \" R/HEMBRA",
            "Cost": "0",
            "OutlineNumber": "2.1.26.6.2",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 503
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 506,
        "datos": {
            "Descripcion": " COMPRES. ADAPTADOR MACHO, 32 X 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.26.6.3",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 503
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 507,
        "datos": {
            "Descripcion": " PASE AEREO 02 - CAHUANOTA 2",
            "Cost": "0",
            "OutlineNumber": "2.1.27",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                511
            ]
        },
        "childsId": [
            508,
            513,
            523,
            534,
            536,
            542
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 508,
        "datos": {
            "Descripcion": " ESTRIBOS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            509,
            511
        ],
        "idp": 507
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 509,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.27.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            510
        ],
        "idp": 508
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 510,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.27.1.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 509
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 511,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.1.2",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "507",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                536
            ]
        },
        "childsId": [
            512
        ],
        "idp": 508
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 512,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.27.1.2.1",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 511
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 513,
        "datos": {
            "Descripcion": " PORTICOS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            514,
            516,
            521
        ],
        "idp": 507
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 514,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            515
        ],
        "idp": 513
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 515,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                519
            ]
        },
        "childsId": [],
        "idp": 514
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 516,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.2",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                520
            ]
        },
        "childsId": [
            517,
            518,
            519,
            520
        ],
        "idp": 513
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 517,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.2.1",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 516
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 518,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.2.2",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "518",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                518
            ]
        },
        "childsId": [],
        "idp": 516
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 519,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.2.3",
            "Start": "2015-12-04T18:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": [
                {
                    "id": "515",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 516
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 520,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.2.4",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "516",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 516
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 521,
        "datos": {
            "Descripcion": " PINTURAS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.3",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            522
        ],
        "idp": 513
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 522,
        "datos": {
            "Descripcion": " PINTURA EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.2.3.1",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 521
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 523,
        "datos": {
            "Descripcion": " CAMARA DE ANCLAJE",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                527
            ]
        },
        "childsId": [
            524,
            526,
            528,
            530,
            532
        ],
        "idp": 507
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 524,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            525
        ],
        "idp": 523
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 525,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                529
            ]
        },
        "childsId": [],
        "idp": 524
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 526,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            527
        ],
        "idp": 523
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 527,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "523",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                531
            ]
        },
        "childsId": [],
        "idp": 526
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 528,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.3",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            529
        ],
        "idp": 523
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 529,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.3.1",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "525",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                533
            ]
        },
        "childsId": [],
        "idp": 528
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 530,
        "datos": {
            "Descripcion": " CONCRETO",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.4",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            531
        ],
        "idp": 523
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 531,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2 + 60% P.G.",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.4.1",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "527",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 530
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 532,
        "datos": {
            "Descripcion": " SUMINISTRO E COLOCACION DE ACCESORIOS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.5",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            533
        ],
        "idp": 523
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 533,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GUARDABLES",
            "Cost": "0",
            "OutlineNumber": "2.1.27.3.5.1",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "529",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 532
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 534,
        "datos": {
            "Descripcion": " CARROS DE DILATACION (APOYO)",
            "Cost": "0",
            "OutlineNumber": "2.1.27.4",
            "Start": "2015-12-09T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                542
            ]
        },
        "childsId": [
            535
        ],
        "idp": 507
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 535,
        "datos": {
            "Descripcion": " RODILLO DE ACERO MACIZO",
            "Cost": "0",
            "OutlineNumber": "2.1.27.4.1",
            "Start": "2015-12-09T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 534
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 536,
        "datos": {
            "Descripcion": " SUMINISTRO DE CABLE Y CERRAJERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.27.5",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "511",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            537,
            538,
            539,
            540,
            541
        ],
        "idp": 507
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 537,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE DE ACERO TIPO BOA 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.27.5.1",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 536
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 538,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GRAPAS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.5.2",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 536
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 539,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ABRAZADERAS",
            "Cost": "0",
            "OutlineNumber": "2.1.27.5.3",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 536
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 540,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ANTIDESLIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.27.5.4",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 536
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 541,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE PENDOLAS DE FIERRO LISO",
            "Cost": "0",
            "OutlineNumber": "2.1.27.5.5",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 536
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 542,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.27.6",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "534",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            543,
            544,
            545
        ],
        "idp": 507
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 543,
        "datos": {
            "Descripcion": " TUBERIA HDEP 32mm PN6 SDR 21 PE80",
            "Cost": "0",
            "OutlineNumber": "2.1.27.6.1",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 542
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 544,
        "datos": {
            "Descripcion": " UNION MIXTA PVC 1 \" SP X 1 \" R/HEMBRA",
            "Cost": "0",
            "OutlineNumber": "2.1.27.6.2",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 542
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 545,
        "datos": {
            "Descripcion": " COMPRES. ADAPTADOR MACHO, 32 X 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.27.6.3",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 542
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 546,
        "datos": {
            "Descripcion": " PASE AEREO - CHANCHALLAY 2",
            "Cost": "0",
            "OutlineNumber": "2.1.28",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            547,
            552,
            562,
            573,
            575,
            581
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 547,
        "datos": {
            "Descripcion": " ESTRIBOS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                551
            ]
        },
        "childsId": [
            548,
            550
        ],
        "idp": 546
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 548,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.28.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            549
        ],
        "idp": 547
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 549,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.28.1.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 548
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 550,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.1.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            551
        ],
        "idp": 547
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 551,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.28.1.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "547",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 550
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 552,
        "datos": {
            "Descripcion": " PORTICOS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            553,
            555,
            560
        ],
        "idp": 546
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 553,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                575
            ]
        },
        "childsId": [
            554
        ],
        "idp": 552
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 554,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                558
            ]
        },
        "childsId": [],
        "idp": 553
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 555,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.2",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                559
            ]
        },
        "childsId": [
            556,
            557,
            558,
            559
        ],
        "idp": 552
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 556,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.2.1",
            "Start": "2015-12-02T08:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 555
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 557,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.2.2",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "557",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                557
            ]
        },
        "childsId": [],
        "idp": 555
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 558,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.2.3",
            "Start": "2015-12-04T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "554",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 555
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 559,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.2.4",
            "Start": "2015-12-10T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": [
                {
                    "id": "555",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 555
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 560,
        "datos": {
            "Descripcion": " PINTURAS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.3",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            561
        ],
        "idp": 552
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 561,
        "datos": {
            "Descripcion": " PINTURA EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.2.3.1",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 560
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 562,
        "datos": {
            "Descripcion": " CAMARA DE ANCLAJE",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                566
            ]
        },
        "childsId": [
            563,
            565,
            567,
            569,
            571
        ],
        "idp": 546
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 563,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            564
        ],
        "idp": 562
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 564,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.1.1",
            "Start": "2015-12-01T08:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                568
            ]
        },
        "childsId": [],
        "idp": 563
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 565,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            566
        ],
        "idp": 562
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 566,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "562",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                570
            ]
        },
        "childsId": [],
        "idp": 565
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 567,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.3",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            568
        ],
        "idp": 562
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 568,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.3.1",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "564",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                572
            ]
        },
        "childsId": [],
        "idp": 567
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 569,
        "datos": {
            "Descripcion": " CONCRETO",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.4",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            570
        ],
        "idp": 562
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 570,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2 + 60% P.G.",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.4.1",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "566",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 569
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 571,
        "datos": {
            "Descripcion": " SUMINISTRO E COLOCACION DE ACCESORIOS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.5",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            572
        ],
        "idp": 562
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 572,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GUARDABLES",
            "Cost": "0",
            "OutlineNumber": "2.1.28.3.5.1",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "568",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 571
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 573,
        "datos": {
            "Descripcion": " CARROS DE DILATACION (APOYO)",
            "Cost": "0",
            "OutlineNumber": "2.1.28.4",
            "Start": "2015-12-09T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                581
            ]
        },
        "childsId": [
            574
        ],
        "idp": 546
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 574,
        "datos": {
            "Descripcion": " RODILLO DE ACERO MACIZO",
            "Cost": "0",
            "OutlineNumber": "2.1.28.4.1",
            "Start": "2015-12-09T08:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 573
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 575,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE Y CERRAJERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.28.5",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "553",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            576,
            577,
            578,
            579,
            580
        ],
        "idp": 546
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 576,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE DE ACERO TIPO BOA 5/8 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.28.5.1",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 575
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 577,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GRAPAS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.5.2",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 575
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 578,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ABRAZADERAS",
            "Cost": "0",
            "OutlineNumber": "2.1.28.5.3",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 575
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 579,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ANTIDESLIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.28.5.4",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 575
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 580,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE PENDOLAS DE FIERRO LISO",
            "Cost": "0",
            "OutlineNumber": "2.1.28.5.5",
            "Start": "2015-12-18T08:00:00",
            "End": "2015-12-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 575
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 581,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.28.6",
            "Start": "2015-12-21T08:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "573",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            582,
            583,
            584
        ],
        "idp": 546
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 582,
        "datos": {
            "Descripcion": " TUBERIA HDEP 32mm PN6 SDR 21 PE80",
            "Cost": "0",
            "OutlineNumber": "2.1.28.6.1",
            "Start": "2015-12-21T08:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 581
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 583,
        "datos": {
            "Descripcion": " UNION MIXTA PVC 1 \" SP X 1 \" R/HEMBRA",
            "Cost": "0",
            "OutlineNumber": "2.1.28.6.2",
            "Start": "2015-12-21T08:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 581
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 584,
        "datos": {
            "Descripcion": " COMPRES. ADAPTADOR MACHO, 32 X 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.28.6.3",
            "Start": "2015-12-21T08:00:00",
            "End": "2015-12-21T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 581
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 585,
        "datos": {
            "Descripcion": " PASE AEREO - SANTA CATALINA",
            "Cost": "0",
            "OutlineNumber": "2.1.29",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            586,
            591,
            601,
            612,
            614,
            620
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 586,
        "datos": {
            "Descripcion": " ESTRIBOS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                590
            ]
        },
        "childsId": [
            587,
            589
        ],
        "idp": 585
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 587,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.29.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            588
        ],
        "idp": 586
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 588,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.29.1.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 587
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 589,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.1.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                614
            ]
        },
        "childsId": [
            590
        ],
        "idp": 586
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 590,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.29.1.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "586",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 589
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 591,
        "datos": {
            "Descripcion": " PORTICOS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            592,
            594,
            599
        ],
        "idp": 585
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 592,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            593
        ],
        "idp": 591
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 593,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                597
            ]
        },
        "childsId": [],
        "idp": 592
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 594,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                598
            ]
        },
        "childsId": [
            595,
            596,
            597,
            598
        ],
        "idp": 591
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 595,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 594
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 596,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.2.2",
            "Start": "2015-12-03T08:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "596",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                596
            ]
        },
        "childsId": [],
        "idp": 594
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 597,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.2.3",
            "Start": "2015-12-07T09:00:00",
            "End": "2015-12-08T19:00:00",
            "predecesorLink": [
                {
                    "id": "593",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 594
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 598,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.2.4",
            "Start": "2015-12-09T09:00:00",
            "End": "2015-12-10T19:00:00",
            "predecesorLink": [
                {
                    "id": "594",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 594
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 599,
        "datos": {
            "Descripcion": " PINTURAS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.3",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            600
        ],
        "idp": 591
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 600,
        "datos": {
            "Descripcion": " PINTURA EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.2.3.1",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 599
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 601,
        "datos": {
            "Descripcion": " CAMARA DE ANCLAJE",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                605
            ]
        },
        "childsId": [
            602,
            604,
            606,
            608,
            610
        ],
        "idp": 585
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 602,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            603
        ],
        "idp": 601
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 603,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                607
            ]
        },
        "childsId": [],
        "idp": 602
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 604,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            605
        ],
        "idp": 601
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 605,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "601",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                609
            ]
        },
        "childsId": [],
        "idp": 604
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 606,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.3",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            607
        ],
        "idp": 601
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 607,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.3.1",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "603",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                611
            ]
        },
        "childsId": [],
        "idp": 606
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 608,
        "datos": {
            "Descripcion": " CONCRETO",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.4",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            609
        ],
        "idp": 601
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 609,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2 + 60% P.G.",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.4.1",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "605",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 608
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 610,
        "datos": {
            "Descripcion": " SUMINISTRO E COLOCACION DE ACCESORIOS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.5",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            611
        ],
        "idp": 601
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 611,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GUARDABLES",
            "Cost": "0",
            "OutlineNumber": "2.1.29.3.5.1",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "607",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 610
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 612,
        "datos": {
            "Descripcion": " CARROS DE DILATACION (APOYO)",
            "Cost": "0",
            "OutlineNumber": "2.1.29.4",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                620
            ]
        },
        "childsId": [
            613
        ],
        "idp": 585
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 613,
        "datos": {
            "Descripcion": " RODILLO DE ACERO MACIZO",
            "Cost": "0",
            "OutlineNumber": "2.1.29.4.1",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 612
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 614,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE Y CERRAJERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.29.5",
            "Start": "2015-12-15T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "589",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            615,
            616,
            617,
            618,
            619
        ],
        "idp": 585
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 615,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE DE ACERO TIPO BOA 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.29.5.1",
            "Start": "2015-12-15T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 614
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 616,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GRAPAS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.5.2",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 614
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 617,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ABRAZADERAS",
            "Cost": "0",
            "OutlineNumber": "2.1.29.5.3",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 614
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 618,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ANTIDESLIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.29.5.4",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 614
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 619,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE PENDOLAS DE FIERRO LISO",
            "Cost": "0",
            "OutlineNumber": "2.1.29.5.5",
            "Start": "2015-12-16T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 614
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 620,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.29.6",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "612",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            621,
            622,
            623
        ],
        "idp": 585
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 621,
        "datos": {
            "Descripcion": " TUBERIA HDEP 32mm PN6 SDR 21 PE80",
            "Cost": "0",
            "OutlineNumber": "2.1.29.6.1",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 620
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 622,
        "datos": {
            "Descripcion": " UNION MIXTA PVC 1 \" SP X 1 \" R/HEMBRA",
            "Cost": "0",
            "OutlineNumber": "2.1.29.6.2",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 620
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 623,
        "datos": {
            "Descripcion": " COMPRES. ADAPTADOR MACHO, 32 X 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.29.6.3",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 620
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 624,
        "datos": {
            "Descripcion": " PASE AEREO - YACHANGUILLO",
            "Cost": "0",
            "OutlineNumber": "2.1.30",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            625,
            630,
            640,
            651,
            653,
            659
        ],
        "idp": 3
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 625,
        "datos": {
            "Descripcion": " ESTRIBOS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                629
            ]
        },
        "childsId": [
            626,
            628
        ],
        "idp": 624
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 626,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.30.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            627
        ],
        "idp": 625
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 627,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.30.1.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 626
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 628,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.1.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                653
            ]
        },
        "childsId": [
            629
        ],
        "idp": 625
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 629,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.30.1.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "625",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 628
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 630,
        "datos": {
            "Descripcion": " PORTICOS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            631,
            633,
            638
        ],
        "idp": 624
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 631,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            632
        ],
        "idp": 630
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 632,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                636
            ]
        },
        "childsId": [],
        "idp": 631
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 633,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                637
            ]
        },
        "childsId": [
            634,
            635,
            636,
            637
        ],
        "idp": 630
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 634,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 633
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 635,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.2.2",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "635",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                635
            ]
        },
        "childsId": [],
        "idp": 633
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 636,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.2.3",
            "Start": "2015-12-04T18:00:00",
            "End": "2015-12-08T18:00:00",
            "predecesorLink": [
                {
                    "id": "632",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 633
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 637,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.2.4",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "633",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 633
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 638,
        "datos": {
            "Descripcion": " PINTURAS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.3",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            639
        ],
        "idp": 630
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 639,
        "datos": {
            "Descripcion": " PINTURA EN COLUMNAS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.2.3.1",
            "Start": "2015-12-14T08:00:00",
            "End": "2015-12-14T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 638
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 640,
        "datos": {
            "Descripcion": " CAMARA DE ANCLAJE",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                644
            ]
        },
        "childsId": [
            641,
            643,
            645,
            647,
            649
        ],
        "idp": 624
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 641,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            642
        ],
        "idp": 640
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 642,
        "datos": {
            "Descripcion": " TRAZO Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.1.1",
            "Start": "2015-11-30T18:00:00",
            "End": "2015-12-01T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                646
            ]
        },
        "childsId": [],
        "idp": 641
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 643,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.2",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            644
        ],
        "idp": 640
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 644,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.2.1",
            "Start": "2015-12-01T18:00:00",
            "End": "2015-12-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "640",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                648
            ]
        },
        "childsId": [],
        "idp": 643
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 645,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.3",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            646
        ],
        "idp": 640
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 646,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.3.1",
            "Start": "2015-12-02T18:00:00",
            "End": "2015-12-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "642",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                650
            ]
        },
        "childsId": [],
        "idp": 645
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 647,
        "datos": {
            "Descripcion": " CONCRETO",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.4",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            648
        ],
        "idp": 640
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 648,
        "datos": {
            "Descripcion": " CONCRETO f'c=140 kg/cm2 + 60% P.G.",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.4.1",
            "Start": "2015-12-03T18:00:00",
            "End": "2015-12-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "644",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 647
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 649,
        "datos": {
            "Descripcion": " SUMINISTRO E COLOCACION DE ACCESORIOS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.5",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            650
        ],
        "idp": 640
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 650,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE GUARDABLES",
            "Cost": "0",
            "OutlineNumber": "2.1.30.3.5.1",
            "Start": "2015-12-07T08:00:00",
            "End": "2015-12-07T18:00:00",
            "predecesorLink": [
                {
                    "id": "646",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 649
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 651,
        "datos": {
            "Descripcion": " CARROS DE DILATACION (APOYO)",
            "Cost": "0",
            "OutlineNumber": "2.1.30.4",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                659
            ]
        },
        "childsId": [
            652
        ],
        "idp": 624
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 652,
        "datos": {
            "Descripcion": " RODILLO DE ACERO MACIZO",
            "Cost": "0",
            "OutlineNumber": "2.1.30.4.1",
            "Start": "2015-12-08T18:00:00",
            "End": "2015-12-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 651
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 653,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE Y CERRAJERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.30.5",
            "Start": "2015-12-15T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "628",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            654,
            655,
            656,
            657,
            658
        ],
        "idp": 624
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 654,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE CABLE DE ACERO TIPO BOA 1/2 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.30.5.1",
            "Start": "2015-12-15T08:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 653
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 655,
        "datos": {
            "Descripcion": " SUMINISTRO E INSLATACION DE GRAPAS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.5.2",
            "Start": "2015-12-15T18:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 653
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 656,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ABRAZADERAS",
            "Cost": "0",
            "OutlineNumber": "2.1.30.5.3",
            "Start": "2015-12-15T18:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 653
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 657,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE ANTIDESLIZANTES",
            "Cost": "0",
            "OutlineNumber": "2.1.30.5.4",
            "Start": "2015-12-15T18:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 653
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 658,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE PENDOLAS DE FIERRO LISO",
            "Cost": "0",
            "OutlineNumber": "2.1.30.5.5",
            "Start": "2015-12-15T18:00:00",
            "End": "2015-12-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 653
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 659,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTALACION DE TUBERIA",
            "Cost": "0",
            "OutlineNumber": "2.1.30.6",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "651",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            660,
            661,
            662
        ],
        "idp": 624
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 660,
        "datos": {
            "Descripcion": " TUBERIA HDEP 32mm PN6 SDR 21 PE80",
            "Cost": "0",
            "OutlineNumber": "2.1.30.6.1",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 659
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 661,
        "datos": {
            "Descripcion": " UNION MIXTA PVC 1 \" SP X 1 \" R/HEMBRA",
            "Cost": "0",
            "OutlineNumber": "2.1.30.6.2",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 659
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 662,
        "datos": {
            "Descripcion": " COMPRES. ADAPTADOR MACHO, 32 X 1 \"",
            "Cost": "0",
            "OutlineNumber": "2.1.30.6.3",
            "Start": "2015-12-17T08:00:00",
            "End": "2015-12-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 659
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", 
		Status:"minimizado",
        "id": 663,
        "datos": {
            "Descripcion": "SISTEMA DE ALCANTARILLADO",
            "Cost": "0",
            "OutlineNumber": "2.2",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            664,
            684,
            686
        ],
        "idp": 2
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 664,
        "datos": {
            "Descripcion": " RED DE ALCANTARILLADO",
            "Cost": "0",
            "OutlineNumber": "2.2.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-09-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            665,
            668,
            670,
            673,
            676,
            679,
            681
        ],
        "idp": 663
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 665,
        "datos": {
            "Descripcion": " OBRAS PROVISIONALES",
            "Cost": "0",
            "OutlineNumber": "2.2.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            666,
            667
        ],
        "idp": 664
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 666,
        "datos": {
            "Descripcion": " CINTA SEÑALIZADORA P/ LIMITE DE SEGURIDAD DE OBRA",
            "Cost": "0",
            "OutlineNumber": "2.2.1.1.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-24T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 665
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 667,
        "datos": {
            "Descripcion": " PUENTE DE MADERA PARA PASE PEATONAL",
            "Cost": "0",
            "OutlineNumber": "2.2.1.1.2",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-25T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                671
            ]
        },
        "childsId": [],
        "idp": 665
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 668,
        "datos": {
            "Descripcion": " TRABAJOS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.2.1.2",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-27T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            669
        ],
        "idp": 664
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 669,
        "datos": {
            "Descripcion": " TRAZO NIVELCION Y REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.2.1.2.1",
            "Start": "2015-08-24T08:00:00",
            "End": "2015-08-27T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                672
            ]
        },
        "childsId": [],
        "idp": 668
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 670,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRAS",
            "Cost": "0",
            "OutlineNumber": "2.2.1.3",
            "Start": "2015-08-27T18:00:00",
            "End": "2015-09-04T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                674
            ]
        },
        "childsId": [
            671,
            672
        ],
        "idp": 664
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 671,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJAS H=0.60 A 1:20 T. NORMAL",
            "Cost": "0",
            "OutlineNumber": "2.2.1.3.1",
            "Start": "2015-08-27T18:00:00",
            "End": "2015-08-31T18:00:00",
            "predecesorLink": [
                {
                    "id": "667",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                681
            ]
        },
        "childsId": [],
        "idp": 670
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 672,
        "datos": {
            "Descripcion": " EXCAVACION DE ZANJA A = 0.60M H= 1.20 TERRENO SEMIROCOSO",
            "Cost": "0",
            "OutlineNumber": "2.2.1.3.2",
            "Start": "2015-08-31T18:00:00",
            "End": "2015-09-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "669",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 670
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 673,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJAS",
            "Cost": "0",
            "OutlineNumber": "2.2.1.4",
            "Start": "2015-09-04T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            674,
            675
        ],
        "idp": 664
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 674,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION DE ZANJA Ø160mm",
            "Cost": "0",
            "OutlineNumber": "2.2.1.4.1",
            "Start": "2015-09-04T18:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "670",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 673
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 675,
        "datos": {
            "Descripcion": " CAMA DE APOYO TUEBRIA Ø160mm",
            "Cost": "0",
            "OutlineNumber": "2.2.1.4.2",
            "Start": "2015-09-08T08:00:00",
            "End": "2015-09-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 673
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 676,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR Y COMPACTADO",
            "Cost": "0",
            "OutlineNumber": "2.2.1.5",
            "Start": "2015-09-10T18:00:00",
            "End": "2015-09-16T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                680
            ]
        },
        "childsId": [
            677,
            678
        ],
        "idp": 664
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 677,
        "datos": {
            "Descripcion": " RELLENO PROTECTOR DE ZANJA Ø160mm",
            "Cost": "0",
            "OutlineNumber": "2.2.1.5.1",
            "Start": "2015-09-10T18:00:00",
            "End": "2015-09-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "680",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 676
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 678,
        "datos": {
            "Descripcion": " RELLENO Y APISONADO DE ZANJA Ø160mm",
            "Cost": "0",
            "OutlineNumber": "2.2.1.5.2",
            "Start": "2015-09-15T08:00:00",
            "End": "2015-09-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 676
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 679,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.2.1.6",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            680
        ],
        "idp": 664
    },
    {
        "datos": {
            "Sucesoras": [
                677
            ],
            "Descripcion": " ELIMINACION DE MATERIAL EXCEDENTE DE ZANJA",
            "Cost": "0",
            "OutlineNumber": "2.2.1.6.1",
            "Start": "2015-09-16T18:00:00",
            "End": "2015-09-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "676",
                    "lag": "0"
                }
            ]
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 680,
        "childsId": [],
        "idp": 679
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 681,
        "datos": {
            "Descripcion": " TUBERIAS",
            "Cost": "0",
            "OutlineNumber": "2.2.1.7",
            "Start": "2015-09-10T08:00:00",
            "End": "2015-09-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "671",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            682,
            683
        ],
        "idp": 664
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 682,
        "datos": {
            "Descripcion": " SUMINISTRO DE TUBERIA PVC NPT ISO 4435 160MM S-25",
            "Cost": "0",
            "OutlineNumber": "2.2.1.7.1",
            "Start": "2015-09-10T08:00:00",
            "End": "2015-09-10T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 681
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 683,
        "datos": {
            "Descripcion": " PRUEBA DE REDES DE ALCANTARILLADO A ZANJA TAPADA DN=160-200mm",
            "Cost": "0",
            "OutlineNumber": "2.2.1.7.2",
            "Start": "2015-09-12T08:00:00",
            "End": "2015-09-12T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 681
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 684,
        "datos": {
            "Descripcion": " CONSTRUCCION DE BUZONES",
            "Cost": "0",
            "OutlineNumber": "2.2.2",
            "Start": "2015-08-31T08:00:00",
            "End": "2015-09-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            685
        ],
        "idp": 663
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 685,
        "datos": {
            "Descripcion": " CONSTRUCCION DE BUZONES de 1.20 HASTA 2.00",
            "Cost": "0",
            "OutlineNumber": "2.2.2.1",
            "Start": "2015-08-31T08:00:00",
            "End": "2015-09-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 684
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", 
        "id": 686,
		Status:"minimizado",
        "datos": {
            "Descripcion": " CONEXIONES DOMICILIARIAS DE ALCANTARILLADO",
            "Cost": "0",
            "OutlineNumber": "2.2.3",
            "Start": "2015-09-07T08:00:00",
            "End": "2015-09-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            687
        ],
        "idp": 663
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 687,
        "datos": {
            "Descripcion": " CONEXION DOMICILARIA DE DESAGUE 6 \" - COLECTOR 6 \" TN",
            "Cost": "0",
            "OutlineNumber": "2.2.3.1",
            "Start": "2015-09-07T08:00:00",
            "End": "2015-09-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 686
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 688,
        "datos": {
            "Descripcion": "TRATAMIENTO DE AGUAS RESIDUALES",
            "Cost": "0",
            "OutlineNumber": "2.3",
            "Start": "2015-10-12T08:00:00",
            "End": "2016-03-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            689,
            730
        ],
        "idp": 2
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 689,
        "datos": {
            "Descripcion": " SISTEMA TANQUE SEPTICO - YANQUE",
            "Cost": "0",
            "OutlineNumber": "2.3.1",
            "Start": "2015-10-12T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                692
            ]
        },
        "childsId": [
            690,
            693,
            696,
            698,
            701,
            703,
            705,
            722,
            726
        ],
        "idp": 688
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 690,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.3.1.1",
            "Start": "2015-10-12T08:00:00",
            "End": "2015-10-15T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                694
            ]
        },
        "childsId": [
            691,
            692
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 691,
        "datos": {
            "Descripcion": " LIMPIEZA DEL TERRENO MANUAL",
            "Cost": "0",
            "OutlineNumber": "2.3.1.1.1",
            "Start": "2015-10-12T08:00:00",
            "End": "2015-10-12T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 690
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 692,
        "datos": {
            "Descripcion": " TRAZO REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.1.2",
            "Start": "2015-10-12T18:00:00",
            "End": "2015-10-15T18:00:00",
            "predecesorLink": [
                {
                    "id": "689",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                695
            ]
        },
        "childsId": [],
        "idp": 690
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 693,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRA",
            "Cost": "0",
            "OutlineNumber": "2.3.1.2",
            "Start": "2015-10-15T18:00:00",
            "End": "2015-10-29T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                697
            ]
        },
        "childsId": [
            694,
            695
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 694,
        "datos": {
            "Descripcion": " EXCAVACION EN MATERIAL SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.3.1.2.1",
            "Start": "2015-10-15T18:00:00",
            "End": "2015-10-21T18:00:00",
            "predecesorLink": [
                {
                    "id": "690",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 693
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 695,
        "datos": {
            "Descripcion": " EXCAVACION EN ROCA SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.3.1.2.2",
            "Start": "2015-10-21T18:00:00",
            "End": "2015-10-29T18:00:00",
            "predecesorLink": [
                {
                    "id": "692",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                702
            ]
        },
        "childsId": [],
        "idp": 693
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 696,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION Y COMPACTACION",
            "Cost": "0",
            "OutlineNumber": "2.3.1.3",
            "Start": "2015-10-29T18:00:00",
            "End": "2015-11-02T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            697
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 697,
        "datos": {
            "Descripcion": " REFINE, NIVELACION Y COMPACTACION",
            "Cost": "0",
            "OutlineNumber": "2.3.1.3.1",
            "Start": "2015-10-29T18:00:00",
            "End": "2015-11-02T18:00:00",
            "predecesorLink": [
                {
                    "id": "693",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 696
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 698,
        "datos": {
            "Descripcion": " SUMINISTRO DE MATERIAL SELECCIONADO A POZO PERCOLADOR",
            "Cost": "0",
            "OutlineNumber": "2.3.1.4",
            "Start": "2015-11-18T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": [
                {
                    "id": "704",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            699,
            700
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 699,
        "datos": {
            "Descripcion": " GRAVA SELECCIONADA",
            "Cost": "0",
            "OutlineNumber": "2.3.1.4.1",
            "Start": "2015-11-18T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 698
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 700,
        "datos": {
            "Descripcion": " ARENA",
            "Cost": "0",
            "OutlineNumber": "2.3.1.4.2",
            "Start": "2015-11-18T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 698
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 701,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.3.1.5",
            "Start": "2015-11-02T18:00:00",
            "End": "2015-11-03T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                705
            ]
        },
        "childsId": [
            702
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 702,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.3.1.5.1",
            "Start": "2015-11-02T18:00:00",
            "End": "2015-11-03T18:00:00",
            "predecesorLink": [
                {
                    "id": "695",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 701
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 703,
        "datos": {
            "Descripcion": " CONCRETO SIMPLE",
            "Cost": "0",
            "OutlineNumber": "2.3.1.6",
            "Start": "2015-11-03T08:00:00",
            "End": "2015-11-03T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                722
            ]
        },
        "childsId": [
            704
        ],
        "idp": 689
    },
    {
        "datos": {
            "Sucesoras": [
                698
            ],
            "Descripcion": " SOLADO DE CONCRETO F´C=100KGM2, + 75% P.M.",
            "Cost": "0",
            "OutlineNumber": "2.3.1.6.1",
            "Start": "2015-11-03T08:00:00",
            "End": "2015-11-03T18:00:00",
            "predecesorLink": []
        },
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 704,
        "childsId": [],
        "idp": 703
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 705,
        "datos": {
            "Descripcion": " CONCRETO ARMADO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7",
            "Start": "2015-11-04T08:00:00",
            "End": "2015-11-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "701",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                708
            ]
        },
        "childsId": [
            706,
            710,
            714,
            718
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 706,
        "datos": {
            "Descripcion": " TANQUE SEPTICO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.1",
            "Start": "2015-11-04T08:00:00",
            "End": "2015-11-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            707,
            708,
            709
        ],
        "idp": 705
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 707,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.1.1",
            "Start": "2015-11-05T18:00:00",
            "End": "2015-11-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "707",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                707
            ]
        },
        "childsId": [],
        "idp": 706
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 708,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.1.2",
            "Start": "2015-11-09T08:00:00",
            "End": "2015-11-09T18:00:00",
            "predecesorLink": [
                {
                    "id": "705",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 706
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 709,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.1.3",
            "Start": "2015-11-04T08:00:00",
            "End": "2015-11-05T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                712
            ]
        },
        "childsId": [],
        "idp": 706
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 710,
        "datos": {
            "Descripcion": " CAJAS DE DISTRIBUCION",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.2",
            "Start": "2015-11-04T08:00:00",
            "End": "2015-11-13T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            711,
            712,
            713
        ],
        "idp": 705
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 711,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.2.1",
            "Start": "2015-11-09T08:00:00",
            "End": "2015-11-13T18:00:00",
            "predecesorLink": [
                {
                    "id": "711",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                711
            ]
        },
        "childsId": [],
        "idp": 710
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 712,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.2.2",
            "Start": "2015-11-10T08:00:00",
            "End": "2015-11-11T18:00:00",
            "predecesorLink": [
                {
                    "id": "709",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 710
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 713,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.2.3",
            "Start": "2015-11-04T08:00:00",
            "End": "2015-11-06T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                716
            ]
        },
        "childsId": [],
        "idp": 710
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 714,
        "datos": {
            "Descripcion": " TAPA POZO PERCOLADOR",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.3",
            "Start": "2015-11-04T08:00:00",
            "End": "2015-11-10T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            715,
            716,
            717
        ],
        "idp": 705
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 715,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.3.1",
            "Start": "2015-11-05T08:00:00",
            "End": "2015-11-10T18:00:00",
            "predecesorLink": [
                {
                    "id": "715",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                715
            ]
        },
        "childsId": [],
        "idp": 714
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 716,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.3.2",
            "Start": "2015-11-06T08:00:00",
            "End": "2015-11-06T18:00:00",
            "predecesorLink": [
                {
                    "id": "713",
                    "lag": "0"
                }
            ]
        },
        "childsId": [],
        "idp": 714
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 717,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.3.3",
            "Start": "2015-11-04T08:00:00",
            "End": "2015-11-04T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                720
            ]
        },
        "childsId": [],
        "idp": 714
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 718,
        "datos": {
            "Descripcion": " DESARENADOR",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.4",
            "Start": "2015-11-09T08:00:00",
            "End": "2015-11-16T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            719,
            720,
            721
        ],
        "idp": 705
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 719,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.4.1",
            "Start": "2015-11-09T18:00:00",
            "End": "2015-11-16T18:00:00",
            "predecesorLink": [
                {
                    "id": "719",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                719
            ]
        },
        "childsId": [],
        "idp": 718
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 720,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.4.2",
            "Start": "2015-11-11T18:00:00",
            "End": "2015-11-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "717",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 718
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 721,
        "datos": {
            "Descripcion": " ACERO FY= 4200 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.1.7.4.3",
            "Start": "2015-11-09T08:00:00",
            "End": "2015-11-09T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 718
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 722,
        "datos": {
            "Descripcion": " SUMINISTRO E INSTLACIONES DE TUBERIA Y ACCESORIOS",
            "Cost": "0",
            "OutlineNumber": "2.3.1.8",
            "Start": "2015-11-17T08:00:00",
            "End": "2015-11-17T18:00:00",
            "predecesorLink": [
                {
                    "id": "703",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            723,
            724,
            725
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 723,
        "datos": {
            "Descripcion": " TUBERIA DE VENTILACION 2 \"",
            "Cost": "0",
            "OutlineNumber": "2.3.1.8.1",
            "Start": "2015-11-17T08:00:00",
            "End": "2015-11-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 722
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 724,
        "datos": {
            "Descripcion": " TEE 4 \"",
            "Cost": "0",
            "OutlineNumber": "2.3.1.8.2",
            "Start": "2015-11-17T08:00:00",
            "End": "2015-11-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 722
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 725,
        "datos": {
            "Descripcion": " YEE 4 \"",
            "Cost": "0",
            "OutlineNumber": "2.3.1.8.3",
            "Start": "2015-11-17T08:00:00",
            "End": "2015-11-17T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 722
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 726,
        "datos": {
            "Descripcion": " CARPINTERIA METALICA",
            "Cost": "0",
            "OutlineNumber": "2.3.1.9",
            "Start": "2015-11-18T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [
            727,
            728,
            729
        ],
        "idp": 689
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 727,
        "datos": {
            "Descripcion": " COMPUERTA METALICA TIPO TARJETA",
            "Cost": "0",
            "OutlineNumber": "2.3.1.9.1",
            "Start": "2015-11-18T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 726
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 728,
        "datos": {
            "Descripcion": " PLETINAS",
            "Cost": "0",
            "OutlineNumber": "2.3.1.9.2",
            "Start": "2015-11-18T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 726
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 729,
        "datos": {
            "Descripcion": " PLANCHA DE VERTEDERO",
            "Cost": "0",
            "OutlineNumber": "2.3.1.9.3",
            "Start": "2015-11-18T08:00:00",
            "End": "2015-11-18T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 726
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 730,
        "datos": {
            "Descripcion": " UNIDAD BASICA DE SANEAMIENTO - ARRASTRE HIDRAULICO",
            "Cost": "0",
            "OutlineNumber": "2.3.2",
            "Start": "2015-10-12T09:00:00",
            "End": "2016-03-04T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                733
            ]
        },
        "childsId": [
            731,
            734,
            736,
            738,
            740,
            745,
            747,
            750
        ],
        "idp": 688
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 731,
        "datos": {
            "Descripcion": " OBRAS PRELIMINARES",
            "Cost": "0",
            "OutlineNumber": "2.3.2.1",
            "Start": "2015-10-12T09:00:00",
            "End": "2015-10-29T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                735
            ]
        },
        "childsId": [
            732,
            733
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 732,
        "datos": {
            "Descripcion": " LIMPIEZA DEL TERRENO MANUAL",
            "Cost": "0",
            "OutlineNumber": "2.3.2.1.1",
            "Start": "2015-10-12T09:00:00",
            "End": "2015-10-23T19:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 731
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 733,
        "datos": {
            "Descripcion": " TRAZO REPLANTEO",
            "Cost": "0",
            "OutlineNumber": "2.3.2.1.2",
            "Start": "2015-10-14T09:00:00",
            "End": "2015-10-29T19:00:00",
            "predecesorLink": [
                {
                    "id": "730",
                    "lag": "9600"
                }
            ],
            "Sucesoras": [
                737
            ]
        },
        "childsId": [],
        "idp": 731
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 734,
        "datos": {
            "Descripcion": " MOVIMIENTO DE TIERRA",
            "Cost": "0",
            "OutlineNumber": "2.3.2.2",
            "Start": "2015-10-19T09:00:00",
            "End": "2015-11-06T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            735
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 735,
        "datos": {
            "Descripcion": " EXCAVACION EN MATERIAL SUELTA",
            "Cost": "0",
            "OutlineNumber": "2.3.2.2.1",
            "Start": "2015-10-19T09:00:00",
            "End": "2015-11-06T19:00:00",
            "predecesorLink": [
                {
                    "id": "731",
                    "lag": "14400"
                }
            ],
            "Sucesoras": [
                739
            ]
        },
        "childsId": [],
        "idp": 734
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 736,
        "datos": {
            "Descripcion": " REFINE Y NIVELACION Y COMPACTACION",
            "Cost": "0",
            "OutlineNumber": "2.3.2.3",
            "Start": "2015-10-21T09:00:00",
            "End": "2015-11-02T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                740
            ]
        },
        "childsId": [
            737
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 737,
        "datos": {
            "Descripcion": " REFINE, NIVELACION Y COMPACTACION",
            "Cost": "0",
            "OutlineNumber": "2.3.2.3.1",
            "Start": "2015-10-21T09:00:00",
            "End": "2015-11-02T19:00:00",
            "predecesorLink": [
                {
                    "id": "733",
                    "lag": "9600"
                }
            ]
        },
        "childsId": [],
        "idp": 736
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 738,
        "datos": {
            "Descripcion": " ELIMINACIONES DE MATERIAL EXCEDENTE",
            "Cost": "0",
            "OutlineNumber": "2.3.2.4",
            "Start": "2015-10-23T09:00:00",
            "End": "2015-10-27T19:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                745
            ]
        },
        "childsId": [
            739
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 739,
        "datos": {
            "Descripcion": " ELIMINACION DE MATERIAL DE CORTE",
            "Cost": "0",
            "OutlineNumber": "2.3.2.4.1",
            "Start": "2015-10-23T09:00:00",
            "End": "2015-10-27T19:00:00",
            "predecesorLink": [
                {
                    "id": "735",
                    "lag": "9600"
                }
            ],
            "Sucesoras": [
                742
            ]
        },
        "childsId": [],
        "idp": 738
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 740,
        "datos": {
            "Descripcion": " OBRAS DE CONCRETO",
            "Cost": "0",
            "OutlineNumber": "2.3.2.5",
            "Start": "2015-10-26T08:00:00",
            "End": "2015-12-21T19:00:00",
            "predecesorLink": [
                {
                    "id": "736",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            741,
            742,
            743,
            744
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 741,
        "datos": {
            "Descripcion": " ENCOFRADO Y DESENCOFRADO",
            "Cost": "0",
            "OutlineNumber": "2.3.2.5.1",
            "Start": "2015-10-27T09:00:00",
            "End": "2015-12-21T19:00:00",
            "predecesorLink": [
                {
                    "id": "741",
                    "lag": "4800"
                }
            ],
            "Sucesoras": [
                741
            ]
        },
        "childsId": [],
        "idp": 740
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 742,
        "datos": {
            "Descripcion": " CONCRETO f'c=210 kg/cm2",
            "Cost": "0",
            "OutlineNumber": "2.3.2.5.2",
            "Start": "2015-10-30T09:00:00",
            "End": "2015-12-17T19:00:00",
            "predecesorLink": [
                {
                    "id": "739",
                    "lag": "14400"
                }
            ]
        },
        "childsId": [],
        "idp": 740
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 743,
        "datos": {
            "Descripcion": " SOLADO DE CONCRETO F´C=100KGM2, + 75% P.M.",
            "Cost": "0",
            "OutlineNumber": "2.3.2.5.3",
            "Start": "2015-10-26T08:00:00",
            "End": "2015-11-20T18:00:00",
            "predecesorLink": [],
            "Sucesoras": [
                747
            ]
        },
        "childsId": [],
        "idp": 740
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 744,
        "datos": {
            "Descripcion": " TAPA DE CONCRETO PREFABRICADA",
            "Cost": "0",
            "OutlineNumber": "2.3.2.5.4",
            "Start": "2015-11-05T08:00:00",
            "End": "2015-11-25T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 740
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 745,
        "datos": {
            "Descripcion": " MUROS Y PISOS - UBS",
            "Cost": "0",
            "OutlineNumber": "2.3.2.6",
            "Start": "2015-12-22T08:00:00",
            "End": "2016-02-01T18:00:00",
            "predecesorLink": [
                {
                    "id": "738",
                    "lag": "0"
                }
            ],
            "Sucesoras": [
                750
            ]
        },
        "childsId": [
            746
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 746,
        "datos": {
            "Descripcion": " MURO DE LADRILLO KK 18H, JUNTA 0.015 CEMENTO + ARENA 1:5",
            "Cost": "0",
            "OutlineNumber": "2.3.2.6.1",
            "Start": "2015-12-22T08:00:00",
            "End": "2016-02-01T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 745
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 747,
        "datos": {
            "Descripcion": " REVOQUES Y ENLUCIDOS",
            "Cost": "0",
            "OutlineNumber": "2.3.2.7",
            "Start": "2016-01-04T08:00:00",
            "End": "2016-02-12T18:00:00",
            "predecesorLink": [
                {
                    "id": "743",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            748,
            749
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 748,
        "datos": {
            "Descripcion": " TARRAJEO CON MORTERO 1:5 E=1.50 cm",
            "Cost": "0",
            "OutlineNumber": "2.3.2.7.1",
            "Start": "2016-01-04T08:00:00",
            "End": "2016-02-12T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 747
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 749,
        "datos": {
            "Descripcion": " CERAMICA BLANCA DE 30 x 30 Cm",
            "Cost": "0",
            "OutlineNumber": "2.3.2.7.2",
            "Start": "2016-01-11T08:00:00",
            "End": "2016-02-05T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 747
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 750,
        "datos": {
            "Descripcion": " ACCESORIOS PARA EL UBS",
            "Cost": "0",
            "OutlineNumber": "2.3.2.8",
            "Start": "2016-02-08T08:00:00",
            "End": "2016-03-04T18:00:00",
            "predecesorLink": [
                {
                    "id": "745",
                    "lag": "0"
                }
            ]
        },
        "childsId": [
            751,
            752,
            753
        ],
        "idp": 730
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 751,
        "datos": {
            "Descripcion": " COBERTURA CON CALAMINA GALVANIZADA",
            "Cost": "0",
            "OutlineNumber": "2.3.2.8.1",
            "Start": "2016-02-08T08:00:00",
            "End": "2016-02-26T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 750
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 752,
        "datos": {
            "Descripcion": " ESTRUCTURA DE MADERA",
            "Cost": "0",
            "OutlineNumber": "2.3.2.8.2",
            "Start": "2016-02-15T08:00:00",
            "End": "2016-03-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 750
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 753,
        "datos": {
            "Descripcion": " TUBERIAS Y ACCESORIOS PVC",
            "Cost": "0",
            "OutlineNumber": "2.3.2.8.3",
            "Start": "2016-02-15T08:00:00",
            "End": "2016-03-04T18:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 750
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 754,
        "datos": {
            "Descripcion": "FLETE TERRESTRE",
            "Cost": "0",
            "OutlineNumber": "2.4",
            "Start": "2015-07-01T09:57:36",
            "End": "2016-03-04T09:57:36",
            "predecesorLink": []
        },
        "childsId": [
            755
        ],
        "idp": 2
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 755,
        "datos": {
            "Descripcion": " FLETE TERRESTRE DE OBRA",
            "Cost": "0",
            "OutlineNumber": "2.4.1",
            "Start": "2015-07-01T09:57:36",
            "End": "2016-03-04T09:57:36",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 754
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 756,
        "datos": {
            "Descripcion": "IMPACTO AMBIENTAL",
            "Cost": "0",
            "OutlineNumber": "2.5",
            "Start": "2015-07-01T09:00:00",
            "End": "2016-03-04T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            757
        ],
        "idp": 2
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 757,
        "datos": {
            "Descripcion": " MITIGACION DEL IMPACTO AMBIENTAL",
            "Cost": "0",
            "OutlineNumber": "2.5.1",
            "Start": "2015-07-01T09:00:00",
            "End": "2016-03-04T19:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 756
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 758,
        "datos": {
            "Descripcion": "CAPACITACION TECNICA",
            "Cost": "0",
            "OutlineNumber": "2.6",
            "Start": "2016-02-24T09:00:00",
            "End": "2016-03-08T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            759
        ],
        "idp": 2
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 759,
        "datos": {
            "Descripcion": " CAPACITACION EN OPERACION Y MANTENIMIENTO A LA JASS",
            "Cost": "0",
            "OutlineNumber": "2.6.1",
            "Start": "2016-02-24T09:00:00",
            "End": "2016-03-08T19:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 758
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 760,
        "datos": {
            "Descripcion": "EDUCACION SANITARIA",
            "Cost": "0",
            "OutlineNumber": "2.7",
            "Start": "2016-02-24T09:00:00",
            "End": "2016-03-08T19:00:00",
            "predecesorLink": []
        },
        "childsId": [
            761
        ],
        "idp": 2
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", bolita:true,
        "id": 761,
        "datos": {
            "Descripcion": " CAPACITACION EN EDUCACION SANITARIA A LA POBLACION",
            "Cost": "0",
            "OutlineNumber": "2.7.1",
            "Start": "2016-02-24T09:00:00",
            "End": "2016-03-08T19:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 760
    },
    {
        "type": "WBSNode",
        "tipoObjeto": "Tarea", 
        "id": 762,
        "datos": {
            "Descripcion": "FIN DE PROYECTO",
            "Cost": "0",
            "OutlineNumber": "3",
            "Start": "2016-03-08T09:00:00",
            "End": "2016-03-08T09:00:00",
            "predecesorLink": []
        },
        "childsId": [],
        "idp": 0
    }
			]