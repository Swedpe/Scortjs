
function WBS3000Nodos(){
visiblesSideBar = new Array();

visiblesSideBar[1]=Components.create('Window',{
	
	title: "WBS Eventos",		
	height:450, 
	width:750,
	x: 484,
    y: 61,
	state:'active',
	items:[
	{
		type: 'ToolBar',
		id:'statusbar001',
		region: 'bottom',
		 items:[
		   {
				type: 'ProgressBar',	
				x:0,
				y:70,
				align: "left",
				width: 250,
				value:0,
				id:'progressload',
				state:'active',
				scale:'minier',
				animate:false,
				css:{
				    'margin-top': '2px',
					'margin-left': '2px'
				}				
            },
		 ]
    },
	{
		 type: 'SvgContainer', 
		 region: 'center',
		 id:'mysvg',
		 items:[
			{
				type: 'WBSTree',						
				id:'Okno',
				plugins:{ svgToolTip:{
						type: 'svgToolTip',
						orientacion:'abajo',
						parentType: 'WBSTree',
			}},
			listeners: {
							onDrawTree: function(obj,paso){						
								  Components.getComponentById('progressload').setValue(paso);
							}
						 },
				items:[
					
    /*{
        "id": 0,
        "type": "WBSNode",
        "tipoObjeto": "Cabecera",
        "Descripcion": "WBS del proyecto",
        "WBS": "0",
        "childsId": [],
    },*/
    {
        "id": 1,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Implementación de Equipos RF para las Sub-Estaciones de SPCC ",
        "WBS": "1",
        "childsId": [
            2,
            7,
            354,
            405,
            1801
        ],
    },
    {
        "id": 2,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inicio de Proyecto",
        "WBS": "1.1",
        "childsId": [
            3,
            6
        ],
        "idp": 1
    },
    {
        "id": 3,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "KOM - Reunión de Inicio del Proyecto",
        "WBS": "1.1.1",
        "childsId": [
            4,
            5
        ],
        "idp": 2
    },
    {
        "id": 4,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado del Personal a Ilo",
        "WBS": "1.1.1.1",
        "childsId": [],
        "idp": 3
    },
    {
        "id": 5,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reunión de Inicio y Defición del Acta",
        "WBS": "1.1.1.2",
        "childsId": [],
        "idp": 3
    },
    {
        "id": 6,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de constitución aprobada",
        "WBS": "1.1.2",
        "childsId": [],
        "idp": 2
    },
    {
        "id": 7,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería",
        "WBS": "1.2",
        "childsId": [
            8,
            167,
            242,
            331
        ],
        "idp": 1
    },
    {
        "id": 8,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Común - Consolidado",
        "WBS": "1.2.1",
        "childsId": [
            9,
            29
        ],
        "idp": 7
    },
    {
        "id": 9,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planificación",
        "WBS": "1.2.1.1",
        "childsId": [
            10,
            15,
            25
        ],
        "idp": 8
    },
    {
        "id": 10,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transferencia de información",
        "WBS": "1.2.1.1.1",
        "childsId": [
            11,
            12,
            13,
            14
        ],
        "idp": 9
    },
    {
        "id": 11,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de los planos por parte de SPCC (proyecto SCADA)",
        "WBS": "1.2.1.1.1.1",
        "childsId": [],
        "idp": 10,
		"bolita":true,
    },
    {
        "id": 12,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos",
        "WBS": "1.2.1.1.1.2",
        "childsId": [],
        "idp": 10,
		"bolita":true,
    },
    {
        "id": 13,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de planos por parte de SPCC (Planos de Sub-estaciones SPCC)",
        "WBS": "1.2.1.1.1.3",
        "childsId": [],
        "idp": 10,
		"bolita":true,
    },
    {
        "id": 14,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de estándares de dibujo de planos en SPCC",
        "WBS": "1.2.1.1.1.4",
        "childsId": [],
        "idp": 10,
		"bolita":true,

    },
    {
        "id": 15,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Levantamiento de información en mina",
        "WBS": "1.2.1.1.2",
        "childsId": [
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ],
        "idp": 9
    },
    {
        "id": 16,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Exámen médico",
        "WBS": "1.2.1.1.2.1",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 17,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Viaje a Ilo",
        "WBS": "1.2.1.1.2.2",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 18,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Curso de inducción en Ilo",
        "WBS": "1.2.1.1.2.3",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 19,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Levantamiento de información en Ilo ",
        "WBS": "1.2.1.1.2.4",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 20,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Viaje a Toquepala",
        "WBS": "1.2.1.1.2.5",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 21,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Levantamiento de información en Toquepala",
        "WBS": "1.2.1.1.2.6",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 22,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Viaje a Cuajone",
        "WBS": "1.2.1.1.2.7",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 23,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Levantamiento de información en Cuajone",
        "WBS": "1.2.1.1.2.8",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 24,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Viaje a Lima",
        "WBS": "1.2.1.1.2.9",
        "childsId": [],
        "idp": 15,
		"bolita":true,
    },
    {
        "id": 25,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación del WBS",
        "WBS": "1.2.1.1.3",
        "childsId": [
            26,
            27,
            28
        ],
        "idp": 9
    },
    {
        "id": 26,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación de la estructura desglosada de trabajo",
        "WBS": "1.2.1.1.3.1",
        "childsId": [],
        "idp": 25,
		"bolita":true,
    },
    {
        "id": 27,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Estimacion de duración de actividades",
        "WBS": "1.2.1.1.3.2",
        "childsId": [],
        "idp": 25,
		"bolita":true,
    },
    {
        "id": 28,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Secuenciamiento de tareas",
        "WBS": "1.2.1.1.3.3",
        "childsId": [],
        "idp": 25,
		"bolita":true,
    },
    {
        "id": 29,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Proceso",
        "WBS": "1.2.1.2",
        "childsId": [
            30,
            33,
            69
        ],
        "idp": 8
    },
    {
        "id": 30,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería conceptual",
        "WBS": "1.2.1.2.1",
        "childsId": [
            31,
            32
        ],
        "idp": 29
    },
    {
        "id": 31,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Estudios de la Red (Dimension de los Shunts, Voltajes nominales, reservas)",
        "WBS": "1.2.1.2.1.1",
        "childsId": [],
        "idp": 30
    },
    {
        "id": 32,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición y especificación de equipos Registradores de Falla",
        "WBS": "1.2.1.2.1.2",
        "childsId": [],
        "idp": 30
    },
    {
        "id": 33,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería Básica",
        "WBS": "1.2.1.2.2",
        "childsId": [
            34,
            42,
            47,
            50,
            55,
            58,
            64
        ],
        "idp": 29
    },
    {
        "id": 34,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Metrado de cables y listado de materiales de tablero",
        "WBS": "1.2.1.2.2.1",
        "childsId": [
            35,
            36,
            37,
            38,
            39,
            40,
            41
        ],
        "idp": 33
    },
    {
        "id": 35,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición y especificación de Tableros",
        "WBS": "1.2.1.2.2.1.1",
        "childsId": [],
        "idp": 34,
		"bolita":true,
    },
    {
        "id": 36,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Layaout (Disposicion de equipos)",
        "WBS": "1.2.1.2.2.1.2",
        "childsId": [],
        "idp": 34,
		"bolita":true,
    },
    {
        "id": 37,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Consolidación del metrado del Tablero",
        "WBS": "1.2.1.2.2.1.3",
        "childsId": [],
        "idp": 34,
		"bolita":true,
    },
    {
        "id": 38,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración del listado de materiales de tablero",
        "WBS": "1.2.1.2.2.1.4",
        "childsId": [],
        "idp": 34,
		"bolita":true,
    },
    {
        "id": 39,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transmittal Lista de Materiales de tablero",
        "WBS": "1.2.1.2.2.1.5",
        "childsId": [],
        "idp": 34,
		"bolita":true,
    },
    {
        "id": 40,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comunicación no respondida oficialmente",
        "WBS": "1.2.1.2.2.1.6",
        "childsId": [],
        "idp": 34,
		"bolita":true,
    },
    {
        "id": 41,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transmittal rechazado por falta de seguimiento",
        "WBS": "1.2.1.2.2.1.7",
        "childsId": [],
        "idp": 34,
		"bolita":true,
    },
    {
        "id": 42,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Metrado de cables de campo",
        "WBS": "1.2.1.2.2.2",
        "childsId": [
            43,
            44,
            45,
            46
        ],
        "idp": 33
    },
    {
        "id": 43,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos entregados por SPCC",
        "WBS": "1.2.1.2.2.2.1",
        "childsId": [],
        "idp": 42,
		"bolita":true,
    },
    {
        "id": 44,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de la Ubicación Física de los tableros",
        "WBS": "1.2.1.2.2.2.2",
        "childsId": [],
        "idp": 42,
		"bolita":true,
    },
    {
        "id": 45,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Consolidación del metrado del Proyecto (Campo)",
        "WBS": "1.2.1.2.2.2.3",
        "childsId": [],
        "idp": 42,
		"bolita":true,
    },
    {
        "id": 46,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración del metrado de cables de control y energía ",
        "WBS": "1.2.1.2.2.2.4",
        "childsId": [],
        "idp": 42,
		"bolita":true,
    },
    {
        "id": 47,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición del proyecto",
        "WBS": "1.2.1.2.2.3",
        "childsId": [
            48,
            49
        ],
        "idp": 33
    },
    {
        "id": 48,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Unifilares",
        "WBS": "1.2.1.2.2.3.1",
        "childsId": [],
        "idp": 47,
		"bolita":true,
    },
    {
        "id": 49,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de arquitectura",
        "WBS": "1.2.1.2.2.3.2",
        "childsId": [],
        "idp": 47,
		"bolita":true,
    },
    {
        "id": 50,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Estructuración de planos en norma ANSI",
        "WBS": "1.2.1.2.2.4",
        "childsId": [
            51,
            52,
            53,
            54
        ],
        "idp": 33
    },
    {
        "id": 51,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Especificación de la norma ANSI personalizada para DFJ - SPCC",
        "WBS": "1.2.1.2.2.4.1",
        "childsId": [],
        "idp": 50,
		"bolita":true,
    },
    {
        "id": 52,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de base de datos de símbolos de la norma ANSI",
        "WBS": "1.2.1.2.2.4.2",
        "childsId": [],
        "idp": 50,
		"bolita":true,
    },
    {
        "id": 53,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Plano general de Simbología ANSI ",
        "WBS": "1.2.1.2.2.4.3",
        "childsId": [],
        "idp": 50,
		"bolita":true,
    },
    {
        "id": 54,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Dibujo del cajetín según la norma ANSI",
        "WBS": "1.2.1.2.2.4.4",
        "childsId": [],
        "idp": 50,
		"bolita":true,
    },
    {
        "id": 55,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Especificación de la ingeniería de detalle",
        "WBS": "1.2.1.2.2.5",
        "childsId": [
            56,
            57
        ],
        "idp": 33
    },
    {
        "id": 56,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de la especificacion de la ingeniería de Detalle de campo",
        "WBS": "1.2.1.2.2.5.1",
        "childsId": [],
        "idp": 55
    },
    {
        "id": 57,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Especificaciones técnicas de la ingeniería de detalle de campo",
        "WBS": "1.2.1.2.2.5.2",
        "childsId": [],
        "idp": 55
    },
    {
        "id": 58,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Listado de planos",
        "WBS": "1.2.1.2.2.6",
        "childsId": [
            59,
            60,
            61,
            62,
            63
        ],
        "idp": 33
    },
    {
        "id": 59,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Listado de Planos del Proyecto",
        "WBS": "1.2.1.2.2.6.1",
        "childsId": [],
        "idp": 58,
		"bolita":true,
    },
    {
        "id": 60,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Listado de Planos de tablero",
        "WBS": "1.2.1.2.2.6.2",
        "childsId": [],
        "idp": 58,
		"bolita":true,
    },
    {
        "id": 61,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Listado de Protocolos de Precomisionado",
        "WBS": "1.2.1.2.2.6.3",
        "childsId": [],
        "idp": 58,
		"bolita":true,
    },
    {
        "id": 62,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Listado de Protocolos de Comisionado",
        "WBS": "1.2.1.2.2.6.4",
        "childsId": [],
        "idp": 58,
		"bolita":true,
    },
    {
        "id": 63,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Listado de memorias",
        "WBS": "1.2.1.2.2.6.5",
        "childsId": [],
        "idp": 58,
		"bolita":true,
    },
    {
        "id": 64,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de marcas de cables",
        "WBS": "1.2.1.2.2.7",
        "childsId": [
            65,
            66,
            67,
            68
        ],
        "idp": 33
    },
    {
        "id": 65,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de documentos con el listado de marcas que cumplen el estándar de SPCC",
        "WBS": "1.2.1.2.2.7.1",
        "childsId": [],
        "idp": 64
    },
    {
        "id": 66,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de documento de especificación de cables de Energía",
        "WBS": "1.2.1.2.2.7.2",
        "childsId": [],
        "idp": 64
    },
    {
        "id": 67,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de documento de especificación de cables de Control",
        "WBS": "1.2.1.2.2.7.3",
        "childsId": [],
        "idp": 64
    },
    {
        "id": 68,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transmittal de aprobacion de marcas de cables ",
        "WBS": "1.2.1.2.2.7.4",
        "childsId": [],
        "idp": 64
    },
    {
        "id": 69,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería de Detalle",
        "WBS": "1.2.1.2.3",
        "childsId": [
            70,
            76,
            136
        ],
        "idp": 29
    },
    {
        "id": 70,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Memorias de Cálculo y especificaciones técnicas de proyecto",
        "WBS": "1.2.1.2.3.1",
        "childsId": [
            71,
            72,
            73,
            74,
            75
        ],
        "idp": 69
    },
    {
        "id": 71,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración del documento de especificaciones técnicas",
        "WBS": "1.2.1.2.3.1.1",
        "childsId": [],
        "idp": 70
    },
    {
        "id": 72,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transmittal de especificaciones técnicas de SPCC",
        "WBS": "1.2.1.2.3.1.2",
        "childsId": [],
        "idp": 70
    },
    {
        "id": 73,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.1.2.3.1.3",
        "childsId": [],
        "idp": 70
    },
    {
        "id": 74,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.1.2.3.1.4",
        "childsId": [],
        "idp": 70
    },
    {
        "id": 75,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.1.2.3.1.5",
        "childsId": [],
        "idp": 70
    },
    {
        "id": 76,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería de tableros",
        "WBS": "1.2.1.2.3.2",
        "childsId": [
            77,
            99,
            128
        ],
        "idp": 69
    },
    {
        "id": 77,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ilo",
        "WBS": "1.2.1.2.3.2.1",
        "childsId": [
            78,
            85,
            92
        ],
        "idp": 76
    },
    {
        "id": 78,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Ilo 1 RF1 (2RF) (GabRF03-1) - RF2 (2RF) (GabRF03-1)",
        "WBS": "1.2.1.2.3.2.1.1",
        "childsId": [
            79,
            82
        ],
        "idp": 77
    },
    {
        "id": 79,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.1.1.1",
        "childsId": [
            80,
            81
        ],
        "idp": 78
    },
    {
        "id": 80,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos mecánicos",
        "WBS": "1.2.1.2.3.2.1.1.1.1",
        "childsId": [],
        "idp": 79
    },
    {
        "id": 81,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.1.1.1.2",
        "childsId": [],
        "idp": 79
    },
    {
        "id": 82,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.1.1.2",
        "childsId": [
            83,
            84
        ],
        "idp": 78
    },
    {
        "id": 83,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.1.1.2.1",
        "childsId": [],
        "idp": 82
    },
    {
        "id": 84,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.1.1.2.2",
        "childsId": [],
        "idp": 82
    },
    {
        "id": 85,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Fundición RF1 (GabRF01-1)",
        "WBS": "1.2.1.2.3.2.1.2",
        "childsId": [
            86,
            89
        ],
        "idp": 77
    },
    {
        "id": 86,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.1.2.1",
        "childsId": [
            87,
            88
        ],
        "idp": 85
    },
    {
        "id": 87,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.1.2.1.1",
        "childsId": [],
        "idp": 86
    },
    {
        "id": 88,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.1.2.1.2",
        "childsId": [],
        "idp": 86
    },
    {
        "id": 89,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.1.2.2",
        "childsId": [
            90,
            91
        ],
        "idp": 85
    },
    {
        "id": 90,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.1.2.2.1",
        "childsId": [],
        "idp": 89
    },
    {
        "id": 91,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.1.2.2.2",
        "childsId": [],
        "idp": 89
    },
    {
        "id": 92,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Refinería RF1 (2RF) (GabRF02-1)",
        "WBS": "1.2.1.2.3.2.1.3",
        "childsId": [
            93,
            96
        ],
        "idp": 77
    },
    {
        "id": 93,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.1.3.1",
        "childsId": [
            94,
            95
        ],
        "idp": 92
    },
    {
        "id": 94,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.1.3.1.1",
        "childsId": [],
        "idp": 93
    },
    {
        "id": 95,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.1.3.1.2",
        "childsId": [],
        "idp": 93
    },
    {
        "id": 96,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.1.3.2",
        "childsId": [
            97,
            98
        ],
        "idp": 92
    },
    {
        "id": 97,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.1.3.2.1",
        "childsId": [],
        "idp": 96
    },
    {
        "id": 98,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.1.3.2.2",
        "childsId": [],
        "idp": 96
    },
    {
        "id": 99,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Toquepala",
        "WBS": "1.2.1.2.3.2.2",
        "childsId": [
            100,
            107,
            114,
            121
        ],
        "idp": 76
    },
    {
        "id": 100,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Millsite RF1 (GabRF08-1) - RF2 (GabRF08-2)",
        "WBS": "1.2.1.2.3.2.2.1",
        "childsId": [
            101,
            104
        ],
        "idp": 99
    },
    {
        "id": 101,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.2.1.1",
        "childsId": [
            102,
            103
        ],
        "idp": 100
    },
    {
        "id": 102,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.1.1.1",
        "childsId": [],
        "idp": 101
    },
    {
        "id": 103,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.1.1.2",
        "childsId": [],
        "idp": 101
    },
    {
        "id": 104,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.2.1.2",
        "childsId": [
            105,
            106
        ],
        "idp": 100
    },
    {
        "id": 105,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.1.2.1",
        "childsId": [],
        "idp": 104
    },
    {
        "id": 106,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.1.2.2",
        "childsId": [],
        "idp": 104
    },
    {
        "id": 107,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Totoral Lixiviación LT1 - RF1(GabRF06-1) - RF2(GabRF06-2)",
        "WBS": "1.2.1.2.3.2.2.2",
        "childsId": [
            108,
            111
        ],
        "idp": 99
    },
    {
        "id": 108,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.2.2.1",
        "childsId": [
            109,
            110
        ],
        "idp": 107
    },
    {
        "id": 109,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.2.1.1",
        "childsId": [],
        "idp": 108
    },
    {
        "id": 110,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.2.1.2",
        "childsId": [],
        "idp": 108
    },
    {
        "id": 111,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.2.2.2",
        "childsId": [
            112,
            113
        ],
        "idp": 107
    },
    {
        "id": 112,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.2.2.1",
        "childsId": [],
        "idp": 111
    },
    {
        "id": 113,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.2.2.2",
        "childsId": [],
        "idp": 111
    },
    {
        "id": 114,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Push Back RF1 (2RF) (GabRF07-1)",
        "WBS": "1.2.1.2.3.2.2.3",
        "childsId": [
            115,
            118
        ],
        "idp": 99
    },
    {
        "id": 115,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.2.3.1",
        "childsId": [
            116,
            117
        ],
        "idp": 114
    },
    {
        "id": 116,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.3.1.1",
        "childsId": [],
        "idp": 115
    },
    {
        "id": 117,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.3.1.2",
        "childsId": [],
        "idp": 115
    },
    {
        "id": 118,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.2.3.2",
        "childsId": [
            119,
            120
        ],
        "idp": 114
    },
    {
        "id": 119,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.3.2.1",
        "childsId": [],
        "idp": 118
    },
    {
        "id": 120,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.3.2.2",
        "childsId": [],
        "idp": 118
    },
    {
        "id": 121,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Qhonda RF1(GabRF05-1)",
        "WBS": "1.2.1.2.3.2.2.4",
        "childsId": [
            122,
            125
        ],
        "idp": 99
    },
    {
        "id": 122,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.2.4.1",
        "childsId": [
            123,
            124
        ],
        "idp": 121
    },
    {
        "id": 123,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.4.1.1",
        "childsId": [],
        "idp": 122
    },
    {
        "id": 124,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.4.1.2",
        "childsId": [],
        "idp": 122
    },
    {
        "id": 125,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.2.4.2",
        "childsId": [
            126,
            127
        ],
        "idp": 121
    },
    {
        "id": 126,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.2.4.2.1",
        "childsId": [],
        "idp": 125
    },
    {
        "id": 127,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.2.4.2.2",
        "childsId": [],
        "idp": 125
    },
    {
        "id": 128,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cuajone",
        "WBS": "1.2.1.2.3.2.3",
        "childsId": [
            129
        ],
        "idp": 76
    },
    {
        "id": 129,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Botiflaca RF1 (2RF) (GabRF09-1), RF2 (2RF) (GabRF09-2), RF3 (GabRF09-3)",
        "WBS": "1.2.1.2.3.2.3.1",
        "childsId": [
            130,
            133
        ],
        "idp": 128
    },
    {
        "id": 130,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos mecánicos (10 u)",
        "WBS": "1.2.1.2.3.2.3.1.1",
        "childsId": [
            131,
            132
        ],
        "idp": 129
    },
    {
        "id": 131,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.3.1.1.1",
        "childsId": [],
        "idp": 130
    },
    {
        "id": 132,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.3.1.1.2",
        "childsId": [],
        "idp": 130
    },
    {
        "id": 133,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos funcionales (53 u)",
        "WBS": "1.2.1.2.3.2.3.1.2",
        "childsId": [
            134,
            135
        ],
        "idp": 129
    },
    {
        "id": 134,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de planos ",
        "WBS": "1.2.1.2.3.2.3.1.2.1",
        "childsId": [],
        "idp": 133
    },
    {
        "id": 135,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de planos",
        "WBS": "1.2.1.2.3.2.3.1.2.2",
        "childsId": [],
        "idp": 133
    },
    {
        "id": 136,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Materiales",
        "WBS": "1.2.1.2.3.3",
        "childsId": [
            137,
            139,
            143,
            145,
            147,
            151,
            153,
            155,
            161,
            163
        ],
        "idp": 69
    },
    {
        "id": 137,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Materiales de importación (RFs, Shunts, IECs) - Requerimiento",
        "WBS": "1.2.1.2.3.3.1",
        "childsId": [
            138
        ],
        "idp": 136
    },
    {
        "id": 138,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de requerimiento para la orden de importación de equipos Registradores de Falla",
        "WBS": "1.2.1.2.3.3.1.1",
        "childsId": [],
        "idp": 137
    },
    {
        "id": 139,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Materiales de importación (RFs, Shunts, IECs) - Almacenamiento",
        "WBS": "1.2.1.2.3.3.2",
        "childsId": [
            140,
            141,
            142
        ],
        "idp": 136
    },
    {
        "id": 140,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de materiales y Equipos",
        "WBS": "1.2.1.2.3.3.2.1",
        "childsId": [],
        "idp": 139
    },
    {
        "id": 141,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Manuales de Equipos",
        "WBS": "1.2.1.2.3.3.2.2",
        "childsId": [],
        "idp": 139
    },
    {
        "id": 142,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Certificados de Calidad de Materiales",
        "WBS": "1.2.1.2.3.3.2.3",
        "childsId": [],
        "idp": 139
    },
    {
        "id": 143,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planilla de tableros - Requerimiento",
        "WBS": "1.2.1.2.3.3.3",
        "childsId": [
            144
        ],
        "idp": 136
    },
    {
        "id": 144,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de requerimiento de tableros",
        "WBS": "1.2.1.2.3.3.3.1",
        "childsId": [],
        "idp": 143
    },
    {
        "id": 145,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planilla de tableros - Recepción",
        "WBS": "1.2.1.2.3.3.4",
        "childsId": [
            146
        ],
        "idp": 136
    },
    {
        "id": 146,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de materiales y Equipos",
        "WBS": "1.2.1.2.3.3.4.1",
        "childsId": [],
        "idp": 145
    },
    {
        "id": 147,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planilla de materiales de tablero aprobada por SPCC",
        "WBS": "1.2.1.2.3.3.5",
        "childsId": [
            148,
            149,
            150
        ],
        "idp": 136
    },
    {
        "id": 148,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de lista de materiales de tablero",
        "WBS": "1.2.1.2.3.3.5.1",
        "childsId": [],
        "idp": 147
    },
    {
        "id": 149,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transmittal de revisión de SPCC",
        "WBS": "1.2.1.2.3.3.5.2",
        "childsId": [],
        "idp": 147
    },
    {
        "id": 150,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión por SPCC",
        "WBS": "1.2.1.2.3.3.5.3",
        "childsId": [],
        "idp": 147
    },
    {
        "id": 151,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planilla de materiales de tablero - Requerimiento",
        "WBS": "1.2.1.2.3.3.6",
        "childsId": [
            152
        ],
        "idp": 136
    },
    {
        "id": 152,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de requerimiento de materiales de tablero",
        "WBS": "1.2.1.2.3.3.6.1",
        "childsId": [],
        "idp": 151
    },
    {
        "id": 153,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planilla de materiales de tablero - Recepción",
        "WBS": "1.2.1.2.3.3.7",
        "childsId": [
            154
        ],
        "idp": 136
    },
    {
        "id": 154,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de materiales y Equipos",
        "WBS": "1.2.1.2.3.3.7.1",
        "childsId": [],
        "idp": 153
    },
    {
        "id": 155,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planilla de materiales de campo aprobada por SPCC",
        "WBS": "1.2.1.2.3.3.8",
        "childsId": [
            156,
            157,
            158,
            159,
            160
        ],
        "idp": 136
    },
    {
        "id": 156,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de lista de materiales de campo",
        "WBS": "1.2.1.2.3.3.8.1",
        "childsId": [],
        "idp": 155
    },
    {
        "id": 157,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transmittal de primera revisión de SPCC",
        "WBS": "1.2.1.2.3.3.8.2",
        "childsId": [],
        "idp": 155
    },
    {
        "id": 158,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.1.2.3.3.8.3",
        "childsId": [],
        "idp": 155
    },
    {
        "id": 159,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.1.2.3.3.8.4",
        "childsId": [],
        "idp": 155
    },
    {
        "id": 160,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.1.2.3.3.8.5",
        "childsId": [],
        "idp": 155
    },
    {
        "id": 161,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planillas de Materiales (Packing List) - Requerimiento",
        "WBS": "1.2.1.2.3.3.9",
        "childsId": [
            162
        ],
        "idp": 136
    },
    {
        "id": 162,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de requerimiento de materiales de campo del Proyecto",
        "WBS": "1.2.1.2.3.3.9.1",
        "childsId": [],
        "idp": 161
    },
    {
        "id": 163,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planillas de Materiales (Packing List) - Recepción",
        "WBS": "1.2.1.2.3.3.10",
        "childsId": [
            164,
            165,
            166
        ],
        "idp": 136
    },
    {
        "id": 164,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de materiales y Equipos",
        "WBS": "1.2.1.2.3.3.10.1",
        "childsId": [],
        "idp": 163
    },
    {
        "id": 165,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Manuales de Equipos",
        "WBS": "1.2.1.2.3.3.10.2",
        "childsId": [],
        "idp": 163
    },
    {
        "id": 166,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Certificados de Calidad de Materiales",
        "WBS": "1.2.1.2.3.3.10.3",
        "childsId": [],
        "idp": 163
    },
    {
        "id": 167,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería para Ilo",
        "WBS": "1.2.2",
        "childsId": [
            168,
            190,
            212
        ],
        "idp": 7
    },
    {
        "id": 168,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ilo 1",
        "WBS": "1.2.2.1",
        "childsId": [
            169,
            173,
            185
        ],
        "idp": 167
    },
    {
        "id": 169,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos del Proyecto",
        "WBS": "1.2.2.1.1",
        "childsId": [
            170,
            171,
            172
        ],
        "idp": 168
    },
    {
        "id": 170,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.2.1.1.1",
        "childsId": [],
        "idp": 169
    },
    {
        "id": 171,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.2.1.1.2",
        "childsId": [],
        "idp": 169
    },
    {
        "id": 172,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.2.1.1.3",
        "childsId": [],
        "idp": 169
    },
    {
        "id": 173,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.2.1.2",
        "childsId": [
            174,
            175,
            176,
            177,
            178,
            179,
            180,
            181,
            182,
            183,
            184
        ],
        "idp": 168
    },
    {
        "id": 174,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.2.1.2.1",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 175,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.2.1.2.2",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 176,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.2.1.2.3",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 177,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.2.1.2.4",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 178,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.2.1.2.5",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 179,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.2.1.2.6",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 180,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.2.1.2.7",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 181,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.2.1.2.8",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 182,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.2.1.2.9",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 183,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.2.1.2.10",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 184,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.2.1.2.11",
        "childsId": [],
        "idp": 173
    },
    {
        "id": 185,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecanica",
        "WBS": "1.2.2.1.3",
        "childsId": [
            186,
            187,
            188,
            189
        ],
        "idp": 168
    },
    {
        "id": 186,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.2.1.3.1",
        "childsId": [],
        "idp": 185
    },
    {
        "id": 187,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.2.1.3.2",
        "childsId": [],
        "idp": 185
    },
    {
        "id": 188,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.2.1.3.3",
        "childsId": [],
        "idp": 185
    },
    {
        "id": 189,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.2.1.3.4",
        "childsId": [],
        "idp": 185
    },
    {
        "id": 190,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fundición",
        "WBS": "1.2.2.2",
        "childsId": [
            191,
            195,
            207
        ],
        "idp": 167
    },
    {
        "id": 191,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos del Proyecto",
        "WBS": "1.2.2.2.1",
        "childsId": [
            192,
            193,
            194
        ],
        "idp": 190
    },
    {
        "id": 192,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.2.2.1.1",
        "childsId": [],
        "idp": 191
    },
    {
        "id": 193,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.2.2.1.2",
        "childsId": [],
        "idp": 191
    },
    {
        "id": 194,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.2.2.1.3",
        "childsId": [],
        "idp": 191
    },
    {
        "id": 195,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.2.2.2",
        "childsId": [
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206
        ],
        "idp": 190
    },
    {
        "id": 196,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.2.2.2.1",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 197,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.2.2.2.2",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 198,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.2.2.2.3",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 199,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.2.2.2.4",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 200,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.2.2.2.5",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 201,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.2.2.2.6",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 202,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.2.2.2.7",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 203,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.2.2.2.8",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 204,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.2.2.2.9",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 205,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.2.2.2.10",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 206,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.2.2.2.11",
        "childsId": [],
        "idp": 195
    },
    {
        "id": 207,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecanica",
        "WBS": "1.2.2.2.3",
        "childsId": [
            208,
            209,
            210,
            211
        ],
        "idp": 190
    },
    {
        "id": 208,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.2.2.3.1",
        "childsId": [],
        "idp": 207
    },
    {
        "id": 209,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.2.2.3.2",
        "childsId": [],
        "idp": 207
    },
    {
        "id": 210,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.2.2.3.3",
        "childsId": [],
        "idp": 207
    },
    {
        "id": 211,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.2.2.3.4",
        "childsId": [],
        "idp": 207
    },
    {
        "id": 212,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Refinería",
        "WBS": "1.2.2.3",
        "childsId": [
            213,
            225,
            237
        ],
        "idp": 167
    },
    {
        "id": 213,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos de Tablero",
        "WBS": "1.2.2.3.1",
        "childsId": [
            214,
            215,
            216,
            217,
            221
        ],
        "idp": 212
    },
    {
        "id": 214,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.2.3.1.1",
        "childsId": [],
        "idp": 213
    },
    {
        "id": 215,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.2.3.1.2",
        "childsId": [],
        "idp": 213
    },
    {
        "id": 216,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.2.3.1.3",
        "childsId": [],
        "idp": 213
    },
    {
        "id": 217,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Memorias de Cálculo",
        "WBS": "1.2.2.3.1.4",
        "childsId": [
            218,
            219,
            220
        ],
        "idp": 213
    },
    {
        "id": 218,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.2.3.1.4.1",
        "childsId": [],
        "idp": 217
    },
    {
        "id": 219,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.2.3.1.4.2",
        "childsId": [],
        "idp": 217
    },
    {
        "id": 220,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.2.3.1.4.3",
        "childsId": [],
        "idp": 217
    },
    {
        "id": 221,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Especificaciones Técnicas del Proyecto",
        "WBS": "1.2.2.3.1.5",
        "childsId": [
            222,
            223,
            224
        ],
        "idp": 213
    },
    {
        "id": 222,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.2.3.1.5.1",
        "childsId": [],
        "idp": 221
    },
    {
        "id": 223,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.2.3.1.5.2",
        "childsId": [],
        "idp": 221
    },
    {
        "id": 224,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.2.3.1.5.3",
        "childsId": [],
        "idp": 221
    },
    {
        "id": 225,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.2.3.2",
        "childsId": [
            226,
            227,
            228,
            229,
            230,
            231,
            232,
            233,
            234,
            235,
            236
        ],
        "idp": 212
    },
    {
        "id": 226,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.2.3.2.1",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 227,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.2.3.2.2",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 228,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.2.3.2.3",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 229,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.2.3.2.4",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 230,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.2.3.2.5",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 231,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.2.3.2.6",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 232,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.2.3.2.7",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 233,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.2.3.2.8",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 234,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.2.3.2.9",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 235,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.2.3.2.10",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 236,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.2.3.2.11",
        "childsId": [],
        "idp": 225
    },
    {
        "id": 237,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecanica",
        "WBS": "1.2.2.3.3",
        "childsId": [
            238,
            239,
            240,
            241
        ],
        "idp": 212
    },
    {
        "id": 238,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.2.3.3.1",
        "childsId": [],
        "idp": 237
    },
    {
        "id": 239,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.2.3.3.2",
        "childsId": [],
        "idp": 237
    },
    {
        "id": 240,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.2.3.3.3",
        "childsId": [],
        "idp": 237
    },
    {
        "id": 241,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.2.3.3.4",
        "childsId": [],
        "idp": 237
    },
    {
        "id": 242,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería para Toquepala",
        "WBS": "1.2.3",
        "childsId": [
            243,
            265,
            287,
            309
        ],
        "idp": 7
    },
    {
        "id": 243,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Quebrada Honda",
        "WBS": "1.2.3.1",
        "childsId": [
            244,
            248,
            260
        ],
        "idp": 242
    },
    {
        "id": 244,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos del Proyecto",
        "WBS": "1.2.3.1.1",
        "childsId": [
            245,
            246,
            247
        ],
        "idp": 243
    },
    {
        "id": 245,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.3.1.1.1",
        "childsId": [],
        "idp": 244
    },
    {
        "id": 246,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.3.1.1.2",
        "childsId": [],
        "idp": 244
    },
    {
        "id": 247,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.3.1.1.3",
        "childsId": [],
        "idp": 244
    },
    {
        "id": 248,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.3.1.2",
        "childsId": [
            249,
            250,
            251,
            252,
            253,
            254,
            255,
            256,
            257,
            258,
            259
        ],
        "idp": 243
    },
    {
        "id": 249,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.3.1.2.1",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 250,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.3.1.2.2",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 251,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.3.1.2.3",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 252,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.3.1.2.4",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 253,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.3.1.2.5",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 254,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.3.1.2.6",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 255,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.3.1.2.7",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 256,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.3.1.2.8",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 257,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.3.1.2.9",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 258,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.3.1.2.10",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 259,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.3.1.2.11",
        "childsId": [],
        "idp": 248
    },
    {
        "id": 260,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecanica",
        "WBS": "1.2.3.1.3",
        "childsId": [
            261,
            262,
            263,
            264
        ],
        "idp": 243
    },
    {
        "id": 261,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.3.1.3.1",
        "childsId": [],
        "idp": 260
    },
    {
        "id": 262,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.3.1.3.2",
        "childsId": [],
        "idp": 260
    },
    {
        "id": 263,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.3.1.3.3",
        "childsId": [],
        "idp": 260
    },
    {
        "id": 264,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.3.1.3.4",
        "childsId": [],
        "idp": 260
    },
    {
        "id": 265,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Totoral",
        "WBS": "1.2.3.2",
        "childsId": [
            266,
            270,
            282
        ],
        "idp": 242
    },
    {
        "id": 266,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos del Proyecto",
        "WBS": "1.2.3.2.1",
        "childsId": [
            267,
            268,
            269
        ],
        "idp": 265
    },
    {
        "id": 267,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.3.2.1.1",
        "childsId": [],
        "idp": 266
    },
    {
        "id": 268,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.3.2.1.2",
        "childsId": [],
        "idp": 266
    },
    {
        "id": 269,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.3.2.1.3",
        "childsId": [],
        "idp": 266
    },
    {
        "id": 270,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.3.2.2",
        "childsId": [
            271,
            272,
            273,
            274,
            275,
            276,
            277,
            278,
            279,
            280,
            281
        ],
        "idp": 265
    },
    {
        "id": 271,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.3.2.2.1",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 272,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.3.2.2.2",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 273,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.3.2.2.3",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 274,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.3.2.2.4",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 275,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.3.2.2.5",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 276,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.3.2.2.6",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 277,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.3.2.2.7",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 278,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.3.2.2.8",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 279,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.3.2.2.9",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 280,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.3.2.2.10",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 281,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.3.2.2.11",
        "childsId": [],
        "idp": 270
    },
    {
        "id": 282,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecánica",
        "WBS": "1.2.3.2.3",
        "childsId": [
            283,
            284,
            285,
            286
        ],
        "idp": 265
    },
    {
        "id": 283,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.3.2.3.1",
        "childsId": [],
        "idp": 282
    },
    {
        "id": 284,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.3.2.3.2",
        "childsId": [],
        "idp": 282
    },
    {
        "id": 285,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.3.2.3.3",
        "childsId": [],
        "idp": 282
    },
    {
        "id": 286,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.3.2.3.4",
        "childsId": [],
        "idp": 282
    },
    {
        "id": 287,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Push-Back",
        "WBS": "1.2.3.3",
        "childsId": [
            288,
            292,
            304
        ],
        "idp": 242
    },
    {
        "id": 288,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos del Proyecto",
        "WBS": "1.2.3.3.1",
        "childsId": [
            289,
            290,
            291
        ],
        "idp": 287
    },
    {
        "id": 289,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.3.3.1.1",
        "childsId": [],
        "idp": 288
    },
    {
        "id": 290,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.3.3.1.2",
        "childsId": [],
        "idp": 288
    },
    {
        "id": 291,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.3.3.1.3",
        "childsId": [],
        "idp": 288
    },
    {
        "id": 292,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.3.3.2",
        "childsId": [
            293,
            294,
            295,
            296,
            297,
            298,
            299,
            300,
            301,
            302,
            303
        ],
        "idp": 287
    },
    {
        "id": 293,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.3.3.2.1",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 294,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.3.3.2.2",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 295,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.3.3.2.3",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 296,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.3.3.2.4",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 297,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.3.3.2.5",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 298,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.3.3.2.6",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 299,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.3.3.2.7",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 300,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.3.3.2.8",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 301,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.3.3.2.9",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 302,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.3.3.2.10",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 303,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.3.3.2.11",
        "childsId": [],
        "idp": 292
    },
    {
        "id": 304,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecanica",
        "WBS": "1.2.3.3.3",
        "childsId": [
            305,
            306,
            307,
            308
        ],
        "idp": 287
    },
    {
        "id": 305,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.3.3.3.1",
        "childsId": [],
        "idp": 304
    },
    {
        "id": 306,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.3.3.3.2",
        "childsId": [],
        "idp": 304
    },
    {
        "id": 307,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.3.3.3.3",
        "childsId": [],
        "idp": 304
    },
    {
        "id": 308,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.3.3.3.4",
        "childsId": [],
        "idp": 304
    },
    {
        "id": 309,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mill Site",
        "WBS": "1.2.3.4",
        "childsId": [
            310,
            314,
            326
        ],
        "idp": 242
    },
    {
        "id": 310,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos del Proyecto",
        "WBS": "1.2.3.4.1",
        "childsId": [
            311,
            312,
            313
        ],
        "idp": 309
    },
    {
        "id": 311,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.3.4.1.1",
        "childsId": [],
        "idp": 310
    },
    {
        "id": 312,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.3.4.1.2",
        "childsId": [],
        "idp": 310
    },
    {
        "id": 313,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.3.4.1.3",
        "childsId": [],
        "idp": 310
    },
    {
        "id": 314,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.3.4.2",
        "childsId": [
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
            325
        ],
        "idp": 309
    },
    {
        "id": 315,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.3.4.2.1",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 316,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.3.4.2.2",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 317,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.3.4.2.3",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 318,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.3.4.2.4",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 319,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.3.4.2.5",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 320,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.3.4.2.6",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 321,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.3.4.2.7",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 322,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.3.4.2.8",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 323,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.3.4.2.9",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 324,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.3.4.2.10",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 325,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.3.4.2.11",
        "childsId": [],
        "idp": 314
    },
    {
        "id": 326,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecanica",
        "WBS": "1.2.3.4.3",
        "childsId": [
            327,
            328,
            329,
            330
        ],
        "idp": 309
    },
    {
        "id": 327,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.3.4.3.1",
        "childsId": [],
        "idp": 326
    },
    {
        "id": 328,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.3.4.3.2",
        "childsId": [],
        "idp": 326
    },
    {
        "id": 329,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.3.4.3.3",
        "childsId": [],
        "idp": 326
    },
    {
        "id": 330,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.3.4.3.4",
        "childsId": [],
        "idp": 326
    },
    {
        "id": 331,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería para Cuajone",
        "WBS": "1.2.4",
        "childsId": [
            332
        ],
        "idp": 7
    },
    {
        "id": 332,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Botiflaca",
        "WBS": "1.2.4.1",
        "childsId": [
            333,
            337,
            349
        ],
        "idp": 331
    },
    {
        "id": 333,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos del Proyecto",
        "WBS": "1.2.4.1.1",
        "childsId": [
            334,
            335,
            336
        ],
        "idp": 332
    },
    {
        "id": 334,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Primera Revisión",
        "WBS": "1.2.4.1.1.1",
        "childsId": [],
        "idp": 333
    },
    {
        "id": 335,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión (0) Apto para ejecución",
        "WBS": "1.2.4.1.1.2",
        "childsId": [],
        "idp": 333
    },
    {
        "id": 336,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conforme a obra",
        "WBS": "1.2.4.1.1.3",
        "childsId": [],
        "idp": 333
    },
    {
        "id": 337,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Electricidad",
        "WBS": "1.2.4.1.2",
        "childsId": [
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
        "idp": 332
    },
    {
        "id": 338,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Simbología",
        "WBS": "1.2.4.1.2.1",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 339,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama Unifilar",
        "WBS": "1.2.4.1.2.2",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 340,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lista de Componentes",
        "WBS": "1.2.4.1.2.3",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 341,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de conexionado Cables",
        "WBS": "1.2.4.1.2.4",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 342,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagrama de Conexiones",
        "WBS": "1.2.4.1.2.5",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 343,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas de Servicios Auxiliares",
        "WBS": "1.2.4.1.2.6",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 344,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronizacion de Disparos",
        "WBS": "1.2.4.1.2.7",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 345,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquemas Funcionales",
        "WBS": "1.2.4.1.2.8",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 346,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Esquema de Sincronización",
        "WBS": "1.2.4.1.2.9",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 347,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Diagramas de Comunicaciones",
        "WBS": "1.2.4.1.2.10",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 348,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planos Actualizados",
        "WBS": "1.2.4.1.2.11",
        "childsId": [],
        "idp": 337
    },
    {
        "id": 349,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mecánica",
        "WBS": "1.2.4.1.3",
        "childsId": [
            350,
            351,
            352,
            353
        ],
        "idp": 332
    },
    {
        "id": 350,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de equipos",
        "WBS": "1.2.4.1.3.1",
        "childsId": [],
        "idp": 349
    },
    {
        "id": 351,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de tableros",
        "WBS": "1.2.4.1.3.2",
        "childsId": [],
        "idp": 349
    },
    {
        "id": 352,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ductos de Cableado",
        "WBS": "1.2.4.1.3.3",
        "childsId": [],
        "idp": 349
    },
    {
        "id": 353,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Disposición de Bandejas portacables",
        "WBS": "1.2.4.1.3.4",
        "childsId": [],
        "idp": 349
    },
    {
        "id": 354,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Procura",
        "WBS": "1.3",
        "childsId": [
            355,
            361,
            392
        ],
        "idp": 1
    },
    {
        "id": 355,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquetes de Importación",
        "WBS": "1.3.1",
        "childsId": [
            356,
            357,
            358,
            359,
            360
        ],
        "idp": 354
    },
    {
        "id": 356,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Elaboración de la Orden de Importación",
        "WBS": "1.3.1.1",
        "childsId": [],
        "idp": 355
    },
    {
        "id": 357,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Orden de Importación OI 125-13",
        "WBS": "1.3.1.2",
        "childsId": [],
        "idp": 355
    },
    {
        "id": 358,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Producción en fabrica",
        "WBS": "1.3.1.3",
        "childsId": [],
        "idp": 355
    },
    {
        "id": 359,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Envío de Equipos Exwork a Lima",
        "WBS": "1.3.1.4",
        "childsId": [],
        "idp": 355
    },
    {
        "id": 360,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Desaduanaje de equipos",
        "WBS": "1.3.1.5",
        "childsId": [],
        "idp": 355
    },
    {
        "id": 361,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquetes de Compra de Materiales",
        "WBS": "1.3.2",
        "childsId": [
            362,
            367,
            372,
            377,
            382,
            387
        ],
        "idp": 354
    },
    {
        "id": 362,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquete de Tableros ",
        "WBS": "1.3.2.1",
        "childsId": [
            363,
            364,
            365,
            366
        ],
        "idp": 361
    },
    {
        "id": 363,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación de la solicitud de cotización",
        "WBS": "1.3.2.1.1",
        "childsId": [],
        "idp": 362
    },
    {
        "id": 364,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de orden de compra",
        "WBS": "1.3.2.1.2",
        "childsId": [],
        "idp": 362
    },
    {
        "id": 365,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Abastecimiento",
        "WBS": "1.3.2.1.3",
        "childsId": [],
        "idp": 362
    },
    {
        "id": 366,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de materiales",
        "WBS": "1.3.2.1.4",
        "childsId": [],
        "idp": 362
    },
    {
        "id": 367,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquete de accesorios de tableros",
        "WBS": "1.3.2.2",
        "childsId": [
            368,
            369,
            370,
            371
        ],
        "idp": 361
    },
    {
        "id": 368,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación de la solicitud de cotización",
        "WBS": "1.3.2.2.1",
        "childsId": [],
        "idp": 367
    },
    {
        "id": 369,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de orden de compra",
        "WBS": "1.3.2.2.2",
        "childsId": [],
        "idp": 367
    },
    {
        "id": 370,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Abastecimiento",
        "WBS": "1.3.2.2.3",
        "childsId": [],
        "idp": 367
    },
    {
        "id": 371,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de materiales",
        "WBS": "1.3.2.2.4",
        "childsId": [],
        "idp": 367
    },
    {
        "id": 372,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquete de materiales de tableros",
        "WBS": "1.3.2.3",
        "childsId": [
            373,
            374,
            375,
            376
        ],
        "idp": 361
    },
    {
        "id": 373,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación de la solicitud de cotización",
        "WBS": "1.3.2.3.1",
        "childsId": [],
        "idp": 372
    },
    {
        "id": 374,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de orden de compra",
        "WBS": "1.3.2.3.2",
        "childsId": [],
        "idp": 372
    },
    {
        "id": 375,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Abastecimiento",
        "WBS": "1.3.2.3.3",
        "childsId": [],
        "idp": 372
    },
    {
        "id": 376,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de materiales",
        "WBS": "1.3.2.3.4",
        "childsId": [],
        "idp": 372
    },
    {
        "id": 377,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquete de cables de Energía para campo",
        "WBS": "1.3.2.4",
        "childsId": [
            378,
            379,
            380,
            381
        ],
        "idp": 361
    },
    {
        "id": 378,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación de la solicitud de cotización",
        "WBS": "1.3.2.4.1",
        "childsId": [],
        "idp": 377
    },
    {
        "id": 379,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de orden de compra",
        "WBS": "1.3.2.4.2",
        "childsId": [],
        "idp": 377
    },
    {
        "id": 380,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Abastecimiento",
        "WBS": "1.3.2.4.3",
        "childsId": [],
        "idp": 377
    },
    {
        "id": 381,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de materiales",
        "WBS": "1.3.2.4.4",
        "childsId": [],
        "idp": 377
    },
    {
        "id": 382,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquete de cables de Control para campo",
        "WBS": "1.3.2.5",
        "childsId": [
            383,
            384,
            385,
            386
        ],
        "idp": 361
    },
    {
        "id": 383,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación de la solicitud de cotización",
        "WBS": "1.3.2.5.1",
        "childsId": [],
        "idp": 382
    },
    {
        "id": 384,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de orden de compra",
        "WBS": "1.3.2.5.2",
        "childsId": [],
        "idp": 382
    },
    {
        "id": 385,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Abastecimiento",
        "WBS": "1.3.2.5.3",
        "childsId": [],
        "idp": 382
    },
    {
        "id": 386,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de materiales",
        "WBS": "1.3.2.5.4",
        "childsId": [],
        "idp": 382
    },
    {
        "id": 387,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Paquete de ferretería para campo",
        "WBS": "1.3.2.6",
        "childsId": [
            388,
            389,
            390,
            391
        ],
        "idp": 361
    },
    {
        "id": 388,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Creación de la solicitud de cotización",
        "WBS": "1.3.2.6.1",
        "childsId": [],
        "idp": 387
    },
    {
        "id": 389,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de orden de compra",
        "WBS": "1.3.2.6.2",
        "childsId": [],
        "idp": 387
    },
    {
        "id": 390,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Abastecimiento",
        "WBS": "1.3.2.6.3",
        "childsId": [],
        "idp": 387
    },
    {
        "id": 391,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Entrega de materiales",
        "WBS": "1.3.2.6.4",
        "childsId": [],
        "idp": 387
    },
    {
        "id": 392,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Subcontrataciones",
        "WBS": "1.3.3",
        "childsId": [
            393,
            398
        ],
        "idp": 354
    },
    {
        "id": 393,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Gestión del Proyecto",
        "WBS": "1.3.3.1",
        "childsId": [
            394,
            395,
            396,
            397
        ],
        "idp": 392
    },
    {
        "id": 394,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Solicitud de servicio a la empresa SWEDPE S.R.L.",
        "WBS": "1.3.3.1.1",
        "childsId": [],
        "idp": 393
    },
    {
        "id": 395,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de Orden de compra",
        "WBS": "1.3.3.1.2",
        "childsId": [],
        "idp": 393
    },
    {
        "id": 396,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del servicio",
        "WBS": "1.3.3.1.3",
        "childsId": [],
        "idp": 393
    },
    {
        "id": 397,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Valorización 1 - (Mes de Setiembre)",
        "WBS": "1.3.3.1.4",
        "childsId": [],
        "idp": 393
    },
    {
        "id": 398,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería de detalle de campo del proyecto",
        "WBS": "1.3.3.2",
        "childsId": [
            399,
            400,
            401,
            402,
            403,
            404
        ],
        "idp": 392
    },
    {
        "id": 399,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Solicitud de servicio a la empresa IAC S.A.S.",
        "WBS": "1.3.3.2.1",
        "childsId": [],
        "idp": 398
    },
    {
        "id": 400,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Orden de servicio",
        "WBS": "1.3.3.2.2",
        "childsId": [],
        "idp": 398
    },
    {
        "id": 401,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del servicio (entregable Ilo)",
        "WBS": "1.3.3.2.3",
        "childsId": [],
        "idp": 398
    },
    {
        "id": 402,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del servicio (entregable Toquepala)",
        "WBS": "1.3.3.2.4",
        "childsId": [],
        "idp": 398
    },
    {
        "id": 403,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del servicio (entregable Cuajone)",
        "WBS": "1.3.3.2.5",
        "childsId": [],
        "idp": 398
    },
    {
        "id": 404,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de ingeniería de detalle del proyecto SPCC ",
        "WBS": "1.3.3.2.6",
        "childsId": [],
        "idp": 398
    },
    {
        "id": 405,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Construcción",
        "WBS": "1.4",
        "childsId": [
            406,
            537,
            858,
            1500
        ],
        "idp": 1
    },
    {
        "id": 406,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lima - Ensamblaje de Tableros",
        "WBS": "1.4.1",
        "childsId": [
            407,
            417,
            427,
            437,
            447,
            457,
            467,
            477,
            487,
            497,
            507,
            517,
            527
        ],
        "idp": 405
    },
    {
        "id": 407,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Ilo 1 RF1 (GabRF03-1)",
        "WBS": "1.4.1.1",
        "childsId": [
            408,
            409,
            410,
            411,
            412,
            413,
            414,
            415,
            416
        ],
        "idp": 406
    },
    {
        "id": 408,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.1.1",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 409,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.1.2",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 410,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.1.3",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 411,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.1.4",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 412,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.1.5",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 413,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.1.6",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 414,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.1.7",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 415,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.1.8",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 416,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.1.9",
        "childsId": [],
        "idp": 407
    },
    {
        "id": 417,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Ilo 1 RF2 (GabRF03-2)",
        "WBS": "1.4.1.2",
        "childsId": [
            418,
            419,
            420,
            421,
            422,
            423,
            424,
            425,
            426
        ],
        "idp": 406
    },
    {
        "id": 418,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.2.1",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 419,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.2.2",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 420,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.2.3",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 421,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.2.4",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 422,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.2.5",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 423,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.2.6",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 424,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.2.7",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 425,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.2.8",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 426,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.2.9",
        "childsId": [],
        "idp": 417
    },
    {
        "id": 427,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Fundición RF1 (GabRF01-1)",
        "WBS": "1.4.1.3",
        "childsId": [
            428,
            429,
            430,
            431,
            432,
            433,
            434,
            435,
            436
        ],
        "idp": 406
    },
    {
        "id": 428,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.3.1",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 429,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.3.2",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 430,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.3.3",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 431,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.3.4",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 432,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.3.5",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 433,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.3.6",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 434,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.3.7",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 435,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.3.8",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 436,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.3.9",
        "childsId": [],
        "idp": 427
    },
    {
        "id": 437,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Refinería RF1 (2RF) (GabRF02-1)",
        "WBS": "1.4.1.4",
        "childsId": [
            438,
            439,
            440,
            441,
            442,
            443,
            444,
            445,
            446
        ],
        "idp": 406
    },
    {
        "id": 438,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.4.1",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 439,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.4.2",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 440,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.4.3",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 441,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.4.4",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 442,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.4.5",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 443,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.4.6",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 444,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.4.7",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 445,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.4.8",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 446,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.4.9",
        "childsId": [],
        "idp": 437
    },
    {
        "id": 447,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero MillSite RF1 (GabRF08-1)",
        "WBS": "1.4.1.5",
        "childsId": [
            448,
            449,
            450,
            451,
            452,
            453,
            454,
            455,
            456
        ],
        "idp": 406
    },
    {
        "id": 448,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.5.1",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 449,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.5.2",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 450,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.5.3",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 451,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.5.4",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 452,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.5.5",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 453,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.5.6",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 454,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.5.7",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 455,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.5.8",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 456,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.5.9",
        "childsId": [],
        "idp": 447
    },
    {
        "id": 457,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero MillSite RF2 (GabRF08-2)",
        "WBS": "1.4.1.6",
        "childsId": [
            458,
            459,
            460,
            461,
            462,
            463,
            464,
            465,
            466
        ],
        "idp": 406
    },
    {
        "id": 458,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.6.1",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 459,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.6.2",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 460,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.6.3",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 461,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.6.4",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 462,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.6.5",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 463,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.6.6",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 464,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.6.7",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 465,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.6.8",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 466,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.6.9",
        "childsId": [],
        "idp": 457
    },
    {
        "id": 467,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Estructura Totoral - Lixiviación LT1 - RF1 (GabRF06-1)",
        "WBS": "1.4.1.7",
        "childsId": [
            468,
            469,
            470,
            471,
            472,
            473,
            474,
            475,
            476
        ],
        "idp": 406
    },
    {
        "id": 468,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.7.1",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 469,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.7.2",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 470,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.7.3",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 471,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.7.4",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 472,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.7.5",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 473,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.7.6",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 474,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.7.7",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 475,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.7.8",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 476,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.7.9",
        "childsId": [],
        "idp": 467
    },
    {
        "id": 477,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Estructura Totoral - Lixiviación LT2 - RF2 (GabRF06-2)",
        "WBS": "1.4.1.8",
        "childsId": [
            478,
            479,
            480,
            481,
            482,
            483,
            484,
            485,
            486
        ],
        "idp": 406
    },
    {
        "id": 478,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.8.1",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 479,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.8.2",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 480,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.8.3",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 481,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.8.4",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 482,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.8.5",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 483,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.8.6",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 484,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.8.7",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 485,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.8.8",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 486,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.8.9",
        "childsId": [],
        "idp": 477
    },
    {
        "id": 487,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero PushBack RF1 (2RF) (GabRF07-1)",
        "WBS": "1.4.1.9",
        "childsId": [
            488,
            489,
            490,
            491,
            492,
            493,
            494,
            495,
            496
        ],
        "idp": 406
    },
    {
        "id": 488,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.9.1",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 489,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.9.2",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 490,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.9.3",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 491,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.9.4",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 492,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.9.5",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 493,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.9.6",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 494,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.9.7",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 495,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.9.8",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 496,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.9.9",
        "childsId": [],
        "idp": 487
    },
    {
        "id": 497,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Qhonda RF1 (GabRF05-1)",
        "WBS": "1.4.1.10",
        "childsId": [
            498,
            499,
            500,
            501,
            502,
            503,
            504,
            505,
            506
        ],
        "idp": 406
    },
    {
        "id": 498,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.10.1",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 499,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.10.2",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 500,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.10.3",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 501,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.10.4",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 502,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.10.5",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 503,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.10.6",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 504,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.10.7",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 505,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.10.8",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 506,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.10.9",
        "childsId": [],
        "idp": 497
    },
    {
        "id": 507,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Botiflaca RF1 (2RF) (GabRF09-1)",
        "WBS": "1.4.1.11",
        "childsId": [
            508,
            509,
            510,
            511,
            512,
            513,
            514,
            515,
            516
        ],
        "idp": 406
    },
    {
        "id": 508,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.11.1",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 509,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.11.2",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 510,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.11.3",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 511,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.11.4",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 512,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.11.5",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 513,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.11.6",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 514,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.11.7",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 515,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.11.8",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 516,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.11.9",
        "childsId": [],
        "idp": 507
    },
    {
        "id": 517,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Botiflaca RF2 (2RF) (GabRF09-2)",
        "WBS": "1.4.1.12",
        "childsId": [
            518,
            519,
            520,
            521,
            522,
            523,
            524,
            525,
            526
        ],
        "idp": 406
    },
    {
        "id": 518,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.12.1",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 519,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.12.2",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 520,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.12.3",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 521,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.12.4",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 522,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.12.5",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 523,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.12.6",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 524,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.12.7",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 525,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.12.8",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 526,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.12.9",
        "childsId": [],
        "idp": 517
    },
    {
        "id": 527,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Botiflaca RF3 (GabRF09-3)",
        "WBS": "1.4.1.13",
        "childsId": [
            528,
            529,
            530,
            531,
            532,
            533,
            534,
            535,
            536
        ],
        "idp": 406
    },
    {
        "id": 528,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de canaletas y rieles Din (Asimétrico y Simétrico)",
        "WBS": "1.4.1.13.1",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 529,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Shunts de corriente",
        "WBS": "1.4.1.13.2",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 530,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Iluminación (Fluorescente)",
        "WBS": "1.4.1.13.3",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 531,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Ventilador",
        "WBS": "1.4.1.13.4",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 532,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de Equipos y Accesorios",
        "WBS": "1.4.1.13.5",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 533,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado",
        "WBS": "1.4.1.13.6",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 534,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de tablero, cables y equipos",
        "WBS": "1.4.1.13.7",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 535,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas FAT",
        "WBS": "1.4.1.13.8",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 536,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de Entrega de tablero RF1 - Ilo1",
        "WBS": "1.4.1.13.9",
        "childsId": [],
        "idp": 527
    },
    {
        "id": 537,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ilo",
        "WBS": "1.4.2",
        "childsId": [
            538,
            542,
            691,
            779
        ],
        "idp": 405
    },
    {
        "id": 538,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Materiales de obra",
        "WBS": "1.4.2.1",
        "childsId": [
            539,
            540,
            541
        ],
        "idp": 537
    },
    {
        "id": 539,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Envío de materiales de Lima a Ilo",
        "WBS": "1.4.2.1.1",
        "childsId": [],
        "idp": 538
    },
    {
        "id": 540,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Recepción de materiales en Ilo",
        "WBS": "1.4.2.1.2",
        "childsId": [],
        "idp": 538
    },
    {
        "id": 541,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de tableros y cables a obra",
        "WBS": "1.4.2.1.3",
        "childsId": [],
        "idp": 538
    },
    {
        "id": 542,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ilo 1",
        "WBS": "1.4.2.2",
        "childsId": [
            543,
            548,
            558,
            686,
            690
        ],
        "idp": 537
    },
    {
        "id": 543,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.2.2.1",
        "childsId": [
            544,
            545,
            546,
            547
        ],
        "idp": 542
    },
    {
        "id": 544,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de Bandejas y tuberías a obra",
        "WBS": "1.4.2.2.1.1",
        "childsId": [],
        "idp": 543
    },
    {
        "id": 545,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tableros",
        "WBS": "1.4.2.2.1.2",
        "childsId": [],
        "idp": 543
    },
    {
        "id": 546,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Bandejas",
        "WBS": "1.4.2.2.1.3",
        "childsId": [],
        "idp": 543
    },
    {
        "id": 547,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Conduit",
        "WBS": "1.4.2.2.1.4",
        "childsId": [],
        "idp": 543
    },
    {
        "id": 548,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.2.2.2",
        "childsId": [
            549,
            552,
            555
        ],
        "idp": 542
    },
    {
        "id": 549,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.2.2.2.1",
        "childsId": [
            550,
            551
        ],
        "idp": 548
    },
    {
        "id": 550,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.2.2.1.1",
        "childsId": [],
        "idp": 549
    },
    {
        "id": 551,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.2.2.1.2",
        "childsId": [],
        "idp": 549
    },
    {
        "id": 552,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.2.2.2.2",
        "childsId": [
            553,
            554
        ],
        "idp": 548
    },
    {
        "id": 553,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.2.2.2.1",
        "childsId": [],
        "idp": 552
    },
    {
        "id": 554,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.2.2.2.2",
        "childsId": [],
        "idp": 552
    },
    {
        "id": 555,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.2.2.2.3",
        "childsId": [
            556,
            557
        ],
        "idp": 548
    },
    {
        "id": 556,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.2.2.3.1",
        "childsId": [],
        "idp": 555
    },
    {
        "id": 557,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.2.2.3.2",
        "childsId": [],
        "idp": 555
    },
    {
        "id": 558,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de Tableros",
        "WBS": "1.4.2.2.3",
        "childsId": [
            559,
            568,
            577,
            586,
            595,
            604,
            613,
            622,
            631,
            640,
            649,
            656,
            663,
            675,
            680
        ],
        "idp": 542
    },
    {
        "id": 559,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-1054 - L-1387 (Ilo1 - Refinería)",
        "WBS": "1.4.2.2.3.1",
        "childsId": [
            560,
            561,
            562,
            563,
            564,
            565,
            566,
            567
        ],
        "idp": 558
    },
    {
        "id": 560,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.1.1",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 561,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.1.2",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 562,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.1.3",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 563,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.1.4",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 564,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.1.5",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 565,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.1.6",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 566,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.1.7",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 567,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.1.8",
        "childsId": [],
        "idp": 559
    },
    {
        "id": 568,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-651 - L-1383 (Ilo1 - MillSite)",
        "WBS": "1.4.2.2.3.2",
        "childsId": [
            569,
            570,
            571,
            572,
            573,
            574,
            575,
            576
        ],
        "idp": 558
    },
    {
        "id": 569,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.2.1",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 570,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.2.2",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 571,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.2.3",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 572,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.2.4",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 573,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.2.5",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 574,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.2.6",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 575,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.2.7",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 576,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.2.8",
        "childsId": [],
        "idp": 568
    },
    {
        "id": 577,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-650 - By-pass de Barras (Mantenimiento)",
        "WBS": "1.4.2.2.3.3",
        "childsId": [
            578,
            579,
            580,
            581,
            582,
            583,
            584,
            585
        ],
        "idp": 558
    },
    {
        "id": 578,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.3.1",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 579,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.3.2",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 580,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.3.3",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 581,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.3.4",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 582,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.3.5",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 583,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.3.6",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 584,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.3.7",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 585,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.3.8",
        "childsId": [],
        "idp": 577
    },
    {
        "id": 586,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-652 - L-1383 (Ilo1-Moquegua)",
        "WBS": "1.4.2.2.3.4",
        "childsId": [
            587,
            588,
            589,
            590,
            591,
            592,
            593,
            594
        ],
        "idp": 558
    },
    {
        "id": 587,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.4.1",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 588,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.4.2",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 589,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.4.3",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 590,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.4.4",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 591,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.4.5",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 592,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.4.6",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 593,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.4.7",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 594,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.4.8",
        "childsId": [],
        "idp": 586
    },
    {
        "id": 595,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-242 - IT2 - TV2",
        "WBS": "1.4.2.2.3.5",
        "childsId": [
            596,
            597,
            598,
            599,
            600,
            601,
            602,
            603
        ],
        "idp": 558
    },
    {
        "id": 596,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.5.1",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 597,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.5.2",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 598,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.5.3",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 599,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.5.4",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 600,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.5.5",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 601,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.5.6",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 602,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.5.7",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 603,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.5.8",
        "childsId": [],
        "idp": 595
    },
    {
        "id": 604,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-143 - IT1 - TV1",
        "WBS": "1.4.2.2.3.6",
        "childsId": [
            605,
            606,
            607,
            608,
            609,
            610,
            611,
            612
        ],
        "idp": 558
    },
    {
        "id": 605,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.6.1",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 606,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.6.2",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 607,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.6.3",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 608,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.6.4",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 609,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.6.5",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 610,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.6.6",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 611,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.6.7",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 612,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.6.8",
        "childsId": [],
        "idp": 604
    },
    {
        "id": 613,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "HCB-653  -  IT7 - 138kV",
        "WBS": "1.4.2.2.3.7",
        "childsId": [
            614,
            615,
            616,
            617,
            618,
            619,
            620,
            621
        ],
        "idp": 558
    },
    {
        "id": 614,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.7.1",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 615,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.7.2",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 616,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.7.3",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 617,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.7.4",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 618,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.7.5",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 619,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.7.6",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 620,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.7.7",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 621,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.7.8",
        "childsId": [],
        "idp": 613
    },
    {
        "id": 622,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "HCB-654  -  IT8 - 138kV",
        "WBS": "1.4.2.2.3.8",
        "childsId": [
            623,
            624,
            625,
            626,
            627,
            628,
            629,
            630
        ],
        "idp": 558
    },
    {
        "id": 623,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.8.1",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 624,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.8.2",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 625,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.8.3",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 626,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.8.4",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 627,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.8.5",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 628,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.8.6",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 629,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.8.7",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 630,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.8.8",
        "childsId": [],
        "idp": 622
    },
    {
        "id": 631,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-450 - IT4-138kV - TV4",
        "WBS": "1.4.2.2.3.9",
        "childsId": [
            632,
            633,
            634,
            635,
            636,
            637,
            638,
            639
        ],
        "idp": 558
    },
    {
        "id": 632,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.9.1",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 633,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.9.2",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 634,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.9.3",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 635,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.9.4",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 636,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.9.5",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 637,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.9.6",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 638,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.9.7",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 639,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.9.8",
        "childsId": [],
        "idp": 631
    },
    {
        "id": 640,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "HCB-350 - IT3-138kV - TV3",
        "WBS": "1.4.2.2.3.10",
        "childsId": [
            641,
            642,
            643,
            644,
            645,
            646,
            647,
            648
        ],
        "idp": 558
    },
    {
        "id": 641,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.10.1",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 642,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.2.3.10.2",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 643,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.2.3.10.3",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 644,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.2.3.10.4",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 645,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.2.3.10.5",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 646,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.10.6",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 647,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.10.7",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 648,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.10.8",
        "childsId": [],
        "idp": 640
    },
    {
        "id": 649,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF1",
        "WBS": "1.4.2.2.3.11",
        "childsId": [
            650,
            651,
            652,
            653,
            654,
            655
        ],
        "idp": 558
    },
    {
        "id": 650,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.2.2.3.11.1",
        "childsId": [],
        "idp": 649
    },
    {
        "id": 651,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.2.2.3.11.2",
        "childsId": [],
        "idp": 649
    },
    {
        "id": 652,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.2.2.3.11.3",
        "childsId": [],
        "idp": 649
    },
    {
        "id": 653,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.11.4",
        "childsId": [],
        "idp": 649
    },
    {
        "id": 654,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.11.5",
        "childsId": [],
        "idp": 649
    },
    {
        "id": 655,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.11.6",
        "childsId": [],
        "idp": 649
    },
    {
        "id": 656,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF2",
        "WBS": "1.4.2.2.3.12",
        "childsId": [
            657,
            658,
            659,
            660,
            661,
            662
        ],
        "idp": 558
    },
    {
        "id": 657,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.2.2.3.12.1",
        "childsId": [],
        "idp": 656
    },
    {
        "id": 658,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.2.2.3.12.2",
        "childsId": [],
        "idp": 656
    },
    {
        "id": 659,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.2.2.3.12.3",
        "childsId": [],
        "idp": 656
    },
    {
        "id": 660,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.12.4",
        "childsId": [],
        "idp": 656
    },
    {
        "id": 661,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.12.5",
        "childsId": [],
        "idp": 656
    },
    {
        "id": 662,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.12.6",
        "childsId": [],
        "idp": 656
    },
    {
        "id": 663,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.2.2.3.13",
        "childsId": [
            664,
            670
        ],
        "idp": 558
    },
    {
        "id": 664,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Alarmas internas del registrador",
        "WBS": "1.4.2.2.3.13.1",
        "childsId": [
            665,
            666,
            667,
            668,
            669
        ],
        "idp": 663
    },
    {
        "id": 665,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.2.3.13.1.1",
        "childsId": [],
        "idp": 664
    },
    {
        "id": 666,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control a bornera de reserva",
        "WBS": "1.4.2.2.3.13.1.2",
        "childsId": [],
        "idp": 664
    },
    {
        "id": 667,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.2.3.13.1.3",
        "childsId": [],
        "idp": 664
    },
    {
        "id": 668,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.2.3.13.1.4",
        "childsId": [],
        "idp": 664
    },
    {
        "id": 669,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.2.3.13.1.5",
        "childsId": [],
        "idp": 664
    },
    {
        "id": 670,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión a Red",
        "WBS": "1.4.2.2.3.13.2",
        "childsId": [
            671,
            672,
            673,
            674
        ],
        "idp": 663
    },
    {
        "id": 671,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y crimpiado de Cables de Red al Path panel ",
        "WBS": "1.4.2.2.3.13.2.1",
        "childsId": [],
        "idp": 670
    },
    {
        "id": 672,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Peinado de Path Cord de Path Panel al Switch ",
        "WBS": "1.4.2.2.3.13.2.2",
        "childsId": [],
        "idp": 670
    },
    {
        "id": 673,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.2.2.3.13.2.3",
        "childsId": [],
        "idp": 670
    },
    {
        "id": 674,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control",
        "WBS": "1.4.2.2.3.13.2.4",
        "childsId": [],
        "idp": 670
    },
    {
        "id": 675,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel BP3-125Vdc",
        "WBS": "1.4.2.2.3.14",
        "childsId": [
            676,
            677,
            678,
            679
        ],
        "idp": 558
    },
    {
        "id": 676,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables DC",
        "WBS": "1.4.2.2.3.14.1",
        "childsId": [],
        "idp": 675
    },
    {
        "id": 677,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.2.2.3.14.2",
        "childsId": [],
        "idp": 675
    },
    {
        "id": 678,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.2.2.3.14.3",
        "childsId": [],
        "idp": 675
    },
    {
        "id": 679,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de cableado a Breaker de Reserva",
        "WBS": "1.4.2.2.3.14.4",
        "childsId": [],
        "idp": 675
    },
    {
        "id": 680,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel LC-4 AUX-UPS",
        "WBS": "1.4.2.2.3.15",
        "childsId": [
            681,
            682,
            683,
            684,
            685
        ],
        "idp": 558
    },
    {
        "id": 681,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de un Breaker - Marca  Scard D CAT No Q06-12L100DS",
        "WBS": "1.4.2.2.3.15.1",
        "childsId": [],
        "idp": 680
    },
    {
        "id": 682,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables AC",
        "WBS": "1.4.2.2.3.15.2",
        "childsId": [],
        "idp": 680
    },
    {
        "id": 683,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.2.2.3.15.3",
        "childsId": [],
        "idp": 680
    },
    {
        "id": 684,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.2.2.3.15.4",
        "childsId": [],
        "idp": 680
    },
    {
        "id": 685,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de cableado a Breaker de Reserva",
        "WBS": "1.4.2.2.3.15.5",
        "childsId": [],
        "idp": 680
    },
    {
        "id": 686,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.2.2.4",
        "childsId": [
            687,
            688,
            689
        ],
        "idp": 542
    },
    {
        "id": 687,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforación de la pared del Edificio",
        "WBS": "1.4.2.2.4.1",
        "childsId": [],
        "idp": 686
    },
    {
        "id": 688,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.2.2.4.2",
        "childsId": [],
        "idp": 686
    },
    {
        "id": 689,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.2.2.4.3",
        "childsId": [],
        "idp": 686
    },
    {
        "id": 690,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construccion Ilo 1",
        "WBS": "1.4.2.2.5",
        "childsId": [],
        "idp": 542
    },
    {
        "id": 691,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fundición",
        "WBS": "1.4.2.3",
        "childsId": [
            692,
            698,
            708,
            774,
            778
        ],
        "idp": 537
    },
    {
        "id": 692,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.2.3.1",
        "childsId": [
            693,
            694,
            695,
            696,
            697
        ],
        "idp": 691
    },
    {
        "id": 693,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de Bandejas y tuberías a obra",
        "WBS": "1.4.2.3.1.1",
        "childsId": [],
        "idp": 692
    },
    {
        "id": 694,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reubicación de Panel de almacenamiento de Herramientas de Interruptor",
        "WBS": "1.4.2.3.1.2",
        "childsId": [],
        "idp": 692
    },
    {
        "id": 695,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tablero TRF Fundición",
        "WBS": "1.4.2.3.1.3",
        "childsId": [],
        "idp": 692
    },
    {
        "id": 696,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de Bandejas",
        "WBS": "1.4.2.3.1.4",
        "childsId": [],
        "idp": 692
    },
    {
        "id": 697,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Conduit",
        "WBS": "1.4.2.3.1.5",
        "childsId": [],
        "idp": 692
    },
    {
        "id": 698,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.2.3.2",
        "childsId": [
            699,
            702,
            705
        ],
        "idp": 691
    },
    {
        "id": 699,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.2.3.2.1",
        "childsId": [
            700,
            701
        ],
        "idp": 698
    },
    {
        "id": 700,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.3.2.1.1",
        "childsId": [],
        "idp": 699
    },
    {
        "id": 701,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.3.2.1.2",
        "childsId": [],
        "idp": 699
    },
    {
        "id": 702,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.2.3.2.2",
        "childsId": [
            703,
            704
        ],
        "idp": 698
    },
    {
        "id": 703,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.3.2.2.1",
        "childsId": [],
        "idp": 702
    },
    {
        "id": 704,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.3.2.2.2",
        "childsId": [],
        "idp": 702
    },
    {
        "id": 705,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.2.3.2.3",
        "childsId": [
            706,
            707
        ],
        "idp": 698
    },
    {
        "id": 706,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.3.2.3.1",
        "childsId": [],
        "idp": 705
    },
    {
        "id": 707,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.3.2.3.2",
        "childsId": [],
        "idp": 705
    },
    {
        "id": 708,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de tableros",
        "WBS": "1.4.2.3.3",
        "childsId": [
            709,
            718,
            727,
            736,
            746,
            756,
            763,
            767
        ],
        "idp": 691
    },
    {
        "id": 709,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "VCB 662 - IT 8",
        "WBS": "1.4.2.3.3.1",
        "childsId": [
            710,
            711,
            712,
            713,
            714,
            715,
            716,
            717
        ],
        "idp": 708
    },
    {
        "id": 710,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.3.3.1.1",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 711,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.3.3.1.2",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 712,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.3.3.1.3",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 713,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.2.3.3.1.4",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 714,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por arriba",
        "WBS": "1.4.2.3.3.1.5",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 715,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.3.3.1.6",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 716,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.3.3.1.7",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 717,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.3.3.1.8",
        "childsId": [],
        "idp": 709
    },
    {
        "id": 718,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "VCB 661 - IT 7",
        "WBS": "1.4.2.3.3.2",
        "childsId": [
            719,
            720,
            721,
            722,
            723,
            724,
            725,
            726
        ],
        "idp": 708
    },
    {
        "id": 719,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.3.3.2.1",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 720,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.3.3.2.2",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 721,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.3.3.2.3",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 722,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.2.3.3.2.4",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 723,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por arriba",
        "WBS": "1.4.2.3.3.2.5",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 724,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.3.3.2.6",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 725,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.3.3.2.7",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 726,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.3.3.2.8",
        "childsId": [],
        "idp": 718
    },
    {
        "id": 727,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Celda (VCB 660 TIE)",
        "WBS": "1.4.2.3.3.3",
        "childsId": [
            728,
            729,
            730,
            731,
            732,
            733,
            734,
            735
        ],
        "idp": 708
    },
    {
        "id": 728,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.3.3.3.1",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 729,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.3.3.3.2",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 730,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.2.3.3.3.3",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 731,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.2.3.3.3.4",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 732,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por arriba",
        "WBS": "1.4.2.3.3.3.5",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 733,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.3.3.3.6",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 734,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.3.3.3.7",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 735,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.3.3.3.8",
        "childsId": [],
        "idp": 727
    },
    {
        "id": 736,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Protección diferencial - IT7",
        "WBS": "1.4.2.3.3.4",
        "childsId": [
            737,
            738,
            739,
            740,
            741,
            742,
            743,
            744,
            745
        ],
        "idp": 708
    },
    {
        "id": 737,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.3.3.4.1",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 738,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.3.3.4.2",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 739,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.3.3.4.3",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 740,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.2.3.3.4.4",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 741,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.2.3.3.4.5",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 742,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.2.3.3.4.6",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 743,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.3.3.4.7",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 744,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.3.3.4.8",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 745,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.3.3.4.9",
        "childsId": [],
        "idp": 736
    },
    {
        "id": 746,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Protección diferencial - IT8",
        "WBS": "1.4.2.3.3.5",
        "childsId": [
            747,
            748,
            749,
            750,
            751,
            752,
            753,
            754,
            755
        ],
        "idp": 708
    },
    {
        "id": 747,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.3.3.5.1",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 748,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.3.3.5.2",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 749,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.3.3.5.3",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 750,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.2.3.3.5.4",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 751,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.2.3.3.5.5",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 752,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.2.3.3.5.6",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 753,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.3.3.5.7",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 754,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.3.3.5.8",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 755,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.3.3.5.9",
        "childsId": [],
        "idp": 746
    },
    {
        "id": 756,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero DC 611-PDP-004A 125 DC 2W",
        "WBS": "1.4.2.3.3.6",
        "childsId": [
            757,
            758,
            759,
            760,
            761,
            762
        ],
        "idp": 708
    },
    {
        "id": 757,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del Panel Type 12 / 3R Enclosure (267P480H01 R4)",
        "WBS": "1.4.2.3.3.6.1",
        "childsId": [],
        "idp": 756
    },
    {
        "id": 758,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fabricación de barras tipo Z",
        "WBS": "1.4.2.3.3.6.2",
        "childsId": [],
        "idp": 756
    },
    {
        "id": 759,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.2.3.3.6.3",
        "childsId": [],
        "idp": 756
    },
    {
        "id": 760,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalar Breaker Eaton GHB2030",
        "WBS": "1.4.2.3.3.6.4",
        "childsId": [],
        "idp": 756
    },
    {
        "id": 761,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cablear al Breaker 17",
        "WBS": "1.4.2.3.3.6.5",
        "childsId": [],
        "idp": 756
    },
    {
        "id": 762,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y breaker",
        "WBS": "1.4.2.3.3.6.6",
        "childsId": [],
        "idp": 756
    },
    {
        "id": 763,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero AC 611-LDP-001 120V 3PH 4W",
        "WBS": "1.4.2.3.3.7",
        "childsId": [
            764,
            765,
            766
        ],
        "idp": 708
    },
    {
        "id": 764,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del Panel Type 12 / 3R Enclosure (267P480H01 R4)",
        "WBS": "1.4.2.3.3.7.1",
        "childsId": [],
        "idp": 763
    },
    {
        "id": 765,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cablear al Breaker 17",
        "WBS": "1.4.2.3.3.7.2",
        "childsId": [],
        "idp": 763
    },
    {
        "id": 766,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de breaker",
        "WBS": "1.4.2.3.3.7.3",
        "childsId": [],
        "idp": 763
    },
    {
        "id": 767,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "TRF - Fundición",
        "WBS": "1.4.2.3.3.8",
        "childsId": [
            768,
            769,
            770,
            771,
            772,
            773
        ],
        "idp": 708
    },
    {
        "id": 768,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.2.3.3.8.1",
        "childsId": [],
        "idp": 767
    },
    {
        "id": 769,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.2.3.3.8.2",
        "childsId": [],
        "idp": 767
    },
    {
        "id": 770,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.2.3.3.8.3",
        "childsId": [],
        "idp": 767
    },
    {
        "id": 771,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.3.3.8.4",
        "childsId": [],
        "idp": 767
    },
    {
        "id": 772,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.3.3.8.5",
        "childsId": [],
        "idp": 767
    },
    {
        "id": 773,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.3.3.8.6",
        "childsId": [],
        "idp": 767
    },
    {
        "id": 774,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.2.3.4",
        "childsId": [
            775,
            776,
            777
        ],
        "idp": 691
    },
    {
        "id": 775,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforación de la pared del Edificio",
        "WBS": "1.4.2.3.4.1",
        "childsId": [],
        "idp": 774
    },
    {
        "id": 776,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.2.3.4.2",
        "childsId": [],
        "idp": 774
    },
    {
        "id": 777,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.2.3.4.3",
        "childsId": [],
        "idp": 774
    },
    {
        "id": 778,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construcción Fundición",
        "WBS": "1.4.2.3.5",
        "childsId": [],
        "idp": 691
    },
    {
        "id": 779,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Refinería",
        "WBS": "1.4.2.4",
        "childsId": [
            780,
            786,
            796,
            853,
            857
        ],
        "idp": 537
    },
    {
        "id": 780,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.2.4.1",
        "childsId": [
            781,
            782,
            783,
            784,
            785
        ],
        "idp": 779
    },
    {
        "id": 781,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de Bandejas y tuberías a obra",
        "WBS": "1.4.2.4.1.1",
        "childsId": [],
        "idp": 780
    },
    {
        "id": 782,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reubicación de Panel de almacenamiento de Herramientas de Interruptor",
        "WBS": "1.4.2.4.1.2",
        "childsId": [],
        "idp": 780
    },
    {
        "id": 783,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tablero TRF Fundición",
        "WBS": "1.4.2.4.1.3",
        "childsId": [],
        "idp": 780
    },
    {
        "id": 784,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de Bandejas",
        "WBS": "1.4.2.4.1.4",
        "childsId": [],
        "idp": 780
    },
    {
        "id": 785,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Conduit",
        "WBS": "1.4.2.4.1.5",
        "childsId": [],
        "idp": 780
    },
    {
        "id": 786,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.2.4.2",
        "childsId": [
            787,
            790,
            793
        ],
        "idp": 779
    },
    {
        "id": 787,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.2.4.2.1",
        "childsId": [
            788,
            789
        ],
        "idp": 786
    },
    {
        "id": 788,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.4.2.1.1",
        "childsId": [],
        "idp": 787
    },
    {
        "id": 789,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.4.2.1.2",
        "childsId": [],
        "idp": 787
    },
    {
        "id": 790,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.2.4.2.2",
        "childsId": [
            791,
            792
        ],
        "idp": 786
    },
    {
        "id": 791,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.4.2.2.1",
        "childsId": [],
        "idp": 790
    },
    {
        "id": 792,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.4.2.2.2",
        "childsId": [],
        "idp": 790
    },
    {
        "id": 793,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.2.4.2.3",
        "childsId": [
            794,
            795
        ],
        "idp": 786
    },
    {
        "id": 794,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.2.4.2.3.1",
        "childsId": [],
        "idp": 793
    },
    {
        "id": 795,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.2.4.2.3.2",
        "childsId": [],
        "idp": 793
    },
    {
        "id": 796,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de Tableros",
        "WBS": "1.4.2.4.3",
        "childsId": [
            797,
            806,
            815,
            823,
            830,
            843,
            848
        ],
        "idp": 779
    },
    {
        "id": 797,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS 52R1 (TPM Linea 1 - 138Kv)",
        "WBS": "1.4.2.4.3.1",
        "childsId": [
            798,
            799,
            800,
            801,
            802,
            803,
            804,
            805
        ],
        "idp": 796
    },
    {
        "id": 798,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del Piso para pasar cables de control",
        "WBS": "1.4.2.4.3.1.1",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 799,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.4.3.1.2",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 800,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.4.3.1.3",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 801,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.4.3.1.4",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 802,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.2.4.3.1.5",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 803,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.4.3.1.6",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 804,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.4.3.1.7",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 805,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.4.3.1.8",
        "childsId": [],
        "idp": 797
    },
    {
        "id": 806,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS 52R2 (TPM Linea 2 - 138Kv)",
        "WBS": "1.4.2.4.3.2",
        "childsId": [
            807,
            808,
            809,
            810,
            811,
            812,
            813,
            814
        ],
        "idp": 796
    },
    {
        "id": 807,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del Piso para pasar cables de control",
        "WBS": "1.4.2.4.3.2.1",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 808,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.4.3.2.2",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 809,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.4.3.2.3",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 810,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.2.4.3.2.4",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 811,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.2.4.3.2.5",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 812,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.4.3.2.6",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 813,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.4.3.2.7",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 814,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.4.3.2.8",
        "childsId": [],
        "idp": 806
    },
    {
        "id": 815,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de agrupamiento de señales SCADA",
        "WBS": "1.4.2.4.3.3",
        "childsId": [
            816,
            817,
            818,
            819,
            820,
            821,
            822
        ],
        "idp": 796
    },
    {
        "id": 816,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.4.3.3.1",
        "childsId": [],
        "idp": 815
    },
    {
        "id": 817,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.4.3.3.2",
        "childsId": [],
        "idp": 815
    },
    {
        "id": 818,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.4.3.3.3",
        "childsId": [],
        "idp": 815
    },
    {
        "id": 819,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control",
        "WBS": "1.4.2.4.3.3.4",
        "childsId": [],
        "idp": 815
    },
    {
        "id": 820,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales digitales de 52-M1, 52-M2, 52-TIE",
        "WBS": "1.4.2.4.3.3.5",
        "childsId": [],
        "idp": 815
    },
    {
        "id": 821,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.4.3.3.6",
        "childsId": [],
        "idp": 815
    },
    {
        "id": 822,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.4.3.3.7",
        "childsId": [],
        "idp": 815
    },
    {
        "id": 823,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "TRF - Refinería",
        "WBS": "1.4.2.4.3.4",
        "childsId": [
            824,
            825,
            826,
            827,
            828,
            829
        ],
        "idp": 796
    },
    {
        "id": 824,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.2.4.3.4.1",
        "childsId": [],
        "idp": 823
    },
    {
        "id": 825,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.2.4.3.4.2",
        "childsId": [],
        "idp": 823
    },
    {
        "id": 826,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.2.4.3.4.3",
        "childsId": [],
        "idp": 823
    },
    {
        "id": 827,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.4.3.4.4",
        "childsId": [],
        "idp": 823
    },
    {
        "id": 828,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.4.3.4.5",
        "childsId": [],
        "idp": 823
    },
    {
        "id": 829,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.4.3.4.6",
        "childsId": [],
        "idp": 823
    },
    {
        "id": 830,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.2.4.3.5",
        "childsId": [
            831,
            838
        ],
        "idp": 796
    },
    {
        "id": 831,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Alarmas internas del registrador",
        "WBS": "1.4.2.4.3.5.1",
        "childsId": [
            832,
            833,
            834,
            835,
            836,
            837
        ],
        "idp": 830
    },
    {
        "id": 832,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.2.4.3.5.1.1",
        "childsId": [],
        "idp": 831
    },
    {
        "id": 833,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.2.4.3.5.1.2",
        "childsId": [],
        "idp": 831
    },
    {
        "id": 834,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.2.4.3.5.1.3",
        "childsId": [],
        "idp": 831
    },
    {
        "id": 835,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.2.4.3.5.1.4",
        "childsId": [],
        "idp": 831
    },
    {
        "id": 836,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.2.4.3.5.1.5",
        "childsId": [],
        "idp": 831
    },
    {
        "id": 837,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.2.4.3.5.1.6",
        "childsId": [],
        "idp": 831
    },
    {
        "id": 838,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión a Red",
        "WBS": "1.4.2.4.3.5.2",
        "childsId": [
            839,
            840,
            841,
            842
        ],
        "idp": 830
    },
    {
        "id": 839,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y crimpiado de Cables de Red al Path panel ",
        "WBS": "1.4.2.4.3.5.2.1",
        "childsId": [],
        "idp": 838
    },
    {
        "id": 840,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Peinado de Path Cord de Path Panel al Switch SWT8-1,  Puerto P17",
        "WBS": "1.4.2.4.3.5.2.2",
        "childsId": [],
        "idp": 838
    },
    {
        "id": 841,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.2.4.3.5.2.3",
        "childsId": [],
        "idp": 838
    },
    {
        "id": 842,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control",
        "WBS": "1.4.2.4.3.5.2.4",
        "childsId": [],
        "idp": 838
    },
    {
        "id": 843,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel TDDC-01 125Vdc",
        "WBS": "1.4.2.4.3.6",
        "childsId": [
            844,
            845,
            846,
            847
        ],
        "idp": 796
    },
    {
        "id": 844,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.2.4.3.6.1",
        "childsId": [],
        "idp": 843
    },
    {
        "id": 845,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.2.4.3.6.2",
        "childsId": [],
        "idp": 843
    },
    {
        "id": 846,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.2.4.3.6.3",
        "childsId": [],
        "idp": 843
    },
    {
        "id": 847,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de cableado a Breaker de Reserva Q14",
        "WBS": "1.4.2.4.3.6.4",
        "childsId": [],
        "idp": 843
    },
    {
        "id": 848,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel TD 01 (240/120V 3PH)",
        "WBS": "1.4.2.4.3.7",
        "childsId": [
            849,
            850,
            851,
            852
        ],
        "idp": 796
    },
    {
        "id": 849,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.2.4.3.7.1",
        "childsId": [],
        "idp": 848
    },
    {
        "id": 850,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.2.4.3.7.2",
        "childsId": [],
        "idp": 848
    },
    {
        "id": 851,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.2.4.3.7.3",
        "childsId": [],
        "idp": 848
    },
    {
        "id": 852,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de cableado a Breaker de Reserva Q14",
        "WBS": "1.4.2.4.3.7.4",
        "childsId": [],
        "idp": 848
    },
    {
        "id": 853,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.2.4.4",
        "childsId": [
            854,
            855,
            856
        ],
        "idp": 779
    },
    {
        "id": 854,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación y fijación de tubería Conduit",
        "WBS": "1.4.2.4.4.1",
        "childsId": [],
        "idp": 853
    },
    {
        "id": 855,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.2.4.4.2",
        "childsId": [],
        "idp": 853
    },
    {
        "id": 856,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.2.4.4.3",
        "childsId": [],
        "idp": 853
    },
    {
        "id": 857,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construcción Refinería",
        "WBS": "1.4.2.4.5",
        "childsId": [],
        "idp": 779
    },
    {
        "id": 858,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Toquepala",
        "WBS": "1.4.3",
        "childsId": [
            859,
            863,
            946,
            1116,
            1276
        ],
        "idp": 405
    },
    {
        "id": 859,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Materiales de obra",
        "WBS": "1.4.3.1",
        "childsId": [
            860,
            861,
            862
        ],
        "idp": 858
    },
    {
        "id": 860,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Envío de materiales de Lima a Ilo",
        "WBS": "1.4.3.1.1",
        "childsId": [],
        "idp": 859
    },
    {
        "id": 861,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Recepción de materiales ",
        "WBS": "1.4.3.1.2",
        "childsId": [],
        "idp": 859
    },
    {
        "id": 862,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de tableros y cables a obra",
        "WBS": "1.4.3.1.3",
        "childsId": [],
        "idp": 859
    },
    {
        "id": 863,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Quebrada Honda",
        "WBS": "1.4.3.2",
        "childsId": [
            864,
            921,
            935
        ],
        "idp": 858
    },
    {
        "id": 864,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Walk-In (Area 3200)",
        "WBS": "1.4.3.2.1",
        "childsId": [
            865,
            878,
            920
        ],
        "idp": 863
    },
    {
        "id": 865,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.3.2.1.1",
        "childsId": [
            866,
            869,
            872,
            875
        ],
        "idp": 864
    },
    {
        "id": 866,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.3.2.1.1.1",
        "childsId": [
            867,
            868
        ],
        "idp": 865
    },
    {
        "id": 867,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.2.1.1.1.1",
        "childsId": [],
        "idp": 866
    },
    {
        "id": 868,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.2.1.1.1.2",
        "childsId": [],
        "idp": 866
    },
    {
        "id": 869,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.3.2.1.1.2",
        "childsId": [
            870,
            871
        ],
        "idp": 865
    },
    {
        "id": 870,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.2.1.1.2.1",
        "childsId": [],
        "idp": 869
    },
    {
        "id": 871,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.2.1.1.2.2",
        "childsId": [],
        "idp": 869
    },
    {
        "id": 872,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.3.2.1.1.3",
        "childsId": [
            873,
            874
        ],
        "idp": 865
    },
    {
        "id": 873,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.2.1.1.3.1",
        "childsId": [],
        "idp": 872
    },
    {
        "id": 874,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.2.1.1.3.2",
        "childsId": [],
        "idp": 872
    },
    {
        "id": 875,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Patio",
        "WBS": "1.4.3.2.1.1.4",
        "childsId": [
            876,
            877
        ],
        "idp": 865
    },
    {
        "id": 876,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.2.1.1.4.1",
        "childsId": [],
        "idp": 875
    },
    {
        "id": 877,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.2.1.1.4.2",
        "childsId": [],
        "idp": 875
    },
    {
        "id": 878,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de tableros",
        "WBS": "1.4.3.2.1.2",
        "childsId": [
            879,
            888,
            897,
            905,
            911,
            916
        ],
        "idp": 864
    },
    {
        "id": 879,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control VCB-71",
        "WBS": "1.4.3.2.1.2.1",
        "childsId": [
            880,
            881,
            882,
            883,
            884,
            885,
            886,
            887
        ],
        "idp": 878
    },
    {
        "id": 880,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.2.1.2.1.1",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 881,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.2.1.2.1.2",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 882,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.2.1.2.1.3",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 883,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.2.1.2.1.4",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 884,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por el piso del tablero",
        "WBS": "1.4.3.2.1.2.1.5",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 885,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cables desde Registrador hasta el Tablero",
        "WBS": "1.4.3.2.1.2.1.6",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 886,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.2.1.2.1.7",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 887,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y borneras",
        "WBS": "1.4.3.2.1.2.1.8",
        "childsId": [],
        "idp": 879
    },
    {
        "id": 888,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de prot. de Trasf. y VCB-71",
        "WBS": "1.4.3.2.1.2.2",
        "childsId": [
            889,
            890,
            891,
            892,
            893,
            894,
            895,
            896
        ],
        "idp": 878
    },
    {
        "id": 889,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.2.1.2.2.1",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 890,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.2.1.2.2.2",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 891,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.2.1.2.2.3",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 892,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.2.1.2.2.4",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 893,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por el piso del tablero",
        "WBS": "1.4.3.2.1.2.2.5",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 894,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cables desde Registrador hasta el Tablero",
        "WBS": "1.4.3.2.1.2.2.6",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 895,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.2.1.2.2.7",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 896,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y borneras",
        "WBS": "1.4.3.2.1.2.2.8",
        "childsId": [],
        "idp": 888
    },
    {
        "id": 897,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Anunciador de Alarmas",
        "WBS": "1.4.3.2.1.2.3",
        "childsId": [
            898,
            899,
            900,
            901,
            902,
            903,
            904
        ],
        "idp": 878
    },
    {
        "id": 898,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.2.1.2.3.1",
        "childsId": [],
        "idp": 897
    },
    {
        "id": 899,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.2.1.2.3.2",
        "childsId": [],
        "idp": 897
    },
    {
        "id": 900,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.2.1.2.3.3",
        "childsId": [],
        "idp": 897
    },
    {
        "id": 901,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por el techo del tablero",
        "WBS": "1.4.3.2.1.2.3.4",
        "childsId": [],
        "idp": 897
    },
    {
        "id": 902,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cables desde Registrador hasta el Tablero",
        "WBS": "1.4.3.2.1.2.3.5",
        "childsId": [],
        "idp": 897
    },
    {
        "id": 903,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.2.1.2.3.6",
        "childsId": [],
        "idp": 897
    },
    {
        "id": 904,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y borneras",
        "WBS": "1.4.3.2.1.2.3.7",
        "childsId": [],
        "idp": 897
    },
    {
        "id": 905,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel Board 208 / 120VAC [tipo PRL1]",
        "WBS": "1.4.3.2.1.2.4",
        "childsId": [
            906,
            907,
            908,
            909,
            910
        ],
        "idp": 878
    },
    {
        "id": 906,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.3.2.1.2.4.1",
        "childsId": [],
        "idp": 905
    },
    {
        "id": 907,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.2.1.2.4.2",
        "childsId": [],
        "idp": 905
    },
    {
        "id": 908,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Breaker",
        "WBS": "1.4.3.2.1.2.4.3",
        "childsId": [],
        "idp": 905
    },
    {
        "id": 909,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalar  breaker tipo BA, BAB, o HQP",
        "WBS": "1.4.3.2.1.2.4.4",
        "childsId": [],
        "idp": 905
    },
    {
        "id": 910,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conectar breaker de reserva pos. 25",
        "WBS": "1.4.3.2.1.2.4.5",
        "childsId": [],
        "idp": 905
    },
    {
        "id": 911,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel Board 125VDC",
        "WBS": "1.4.3.2.1.2.5",
        "childsId": [
            912,
            913,
            914,
            915
        ],
        "idp": 878
    },
    {
        "id": 912,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.3.2.1.2.5.1",
        "childsId": [],
        "idp": 911
    },
    {
        "id": 913,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.2.1.2.5.2",
        "childsId": [],
        "idp": 911
    },
    {
        "id": 914,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Breaker",
        "WBS": "1.4.3.2.1.2.5.3",
        "childsId": [],
        "idp": 911
    },
    {
        "id": 915,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conectar breaker de reserva pos. 25",
        "WBS": "1.4.3.2.1.2.5.4",
        "childsId": [],
        "idp": 911
    },
    {
        "id": 916,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.3.2.1.2.6",
        "childsId": [
            917,
            918,
            919
        ],
        "idp": 878
    },
    {
        "id": 917,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y crimpiado al Path panel de Cables de Red",
        "WBS": "1.4.3.2.1.2.6.1",
        "childsId": [],
        "idp": 916
    },
    {
        "id": 918,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Peinado de Path Cord de Path Panel al Switch SWT5-1,  Puerto P14",
        "WBS": "1.4.3.2.1.2.6.2",
        "childsId": [],
        "idp": 916
    },
    {
        "id": 919,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.3.2.1.2.6.3",
        "childsId": [],
        "idp": 916
    },
    {
        "id": 920,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construccion Walk-In Quebrada Honda",
        "WBS": "1.4.3.2.1.3",
        "childsId": [],
        "idp": 864
    },
    {
        "id": 921,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Walk-In para Sistema de Comm (Fibra Optica)",
        "WBS": "1.4.3.2.2",
        "childsId": [
            922,
            926,
            934
        ],
        "idp": 863
    },
    {
        "id": 922,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.3.2.2.1",
        "childsId": [
            923,
            924,
            925
        ],
        "idp": 921
    },
    {
        "id": 923,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tableros",
        "WBS": "1.4.3.2.2.1.1",
        "childsId": [],
        "idp": 922
    },
    {
        "id": 924,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Conduit",
        "WBS": "1.4.3.2.2.1.2",
        "childsId": [],
        "idp": 922
    },
    {
        "id": 925,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de un ducto de cables para union con Walk-in  Antiguo",
        "WBS": "1.4.3.2.2.1.3",
        "childsId": [],
        "idp": 922
    },
    {
        "id": 926,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de tableros",
        "WBS": "1.4.3.2.2.2",
        "childsId": [
            927
        ],
        "idp": 921
    },
    {
        "id": 927,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas RF1 (TR-2516)",
        "WBS": "1.4.3.2.2.2.1",
        "childsId": [
            928,
            929,
            930,
            931,
            932,
            933
        ],
        "idp": 926
    },
    {
        "id": 928,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.3.2.2.2.1.1",
        "childsId": [],
        "idp": 927
    },
    {
        "id": 929,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.3.2.2.2.1.2",
        "childsId": [],
        "idp": 927
    },
    {
        "id": 930,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.3.2.2.2.1.3",
        "childsId": [],
        "idp": 927
    },
    {
        "id": 931,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.2.2.2.1.4",
        "childsId": [],
        "idp": 927
    },
    {
        "id": 932,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.2.2.2.1.5",
        "childsId": [],
        "idp": 927
    },
    {
        "id": 933,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.2.2.2.1.6",
        "childsId": [],
        "idp": 927
    },
    {
        "id": 934,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construccion Walk-In Sist de Comm Quebrada Honda",
        "WBS": "1.4.3.2.2.3",
        "childsId": [],
        "idp": 921
    },
    {
        "id": 935,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Patio de Llaves",
        "WBS": "1.4.3.2.3",
        "childsId": [
            936,
            945
        ],
        "idp": 863
    },
    {
        "id": 936,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión a señales de estado de equipos.",
        "WBS": "1.4.3.2.3.1",
        "childsId": [
            937,
            941
        ],
        "idp": 935
    },
    {
        "id": 937,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-784 / 138kV",
        "WBS": "1.4.3.2.3.1.1",
        "childsId": [
            938,
            939,
            940
        ],
        "idp": 936
    },
    {
        "id": 938,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cables desde Registrador hasta el Tablero",
        "WBS": "1.4.3.2.3.1.1.1",
        "childsId": [],
        "idp": 937
    },
    {
        "id": 939,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de señales de posición",
        "WBS": "1.4.3.2.3.1.1.2",
        "childsId": [],
        "idp": 937
    },
    {
        "id": 940,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.3.2.3.1.1.3",
        "childsId": [],
        "idp": 937
    },
    {
        "id": 941,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transformador QHT-1",
        "WBS": "1.4.3.2.3.1.2",
        "childsId": [
            942,
            943,
            944
        ],
        "idp": 936
    },
    {
        "id": 942,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cables desde Registrador hasta el Tablero",
        "WBS": "1.4.3.2.3.1.2.1",
        "childsId": [],
        "idp": 941
    },
    {
        "id": 943,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de señales de posición",
        "WBS": "1.4.3.2.3.1.2.2",
        "childsId": [],
        "idp": 941
    },
    {
        "id": 944,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.3.2.3.1.2.3",
        "childsId": [],
        "idp": 941
    },
    {
        "id": 945,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construccion Patio de llaves Quebrada Honda",
        "WBS": "1.4.3.2.3.2",
        "childsId": [],
        "idp": 935
    },
    {
        "id": 946,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Totoral",
        "WBS": "1.4.3.3",
        "childsId": [
            947,
            1035
        ],
        "idp": 858
    },
    {
        "id": 947,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Antigua SE Totoral LT1 (138kV / Walk-In Enclosure)",
        "WBS": "1.4.3.3.1",
        "childsId": [
            948,
            954,
            964,
            1030,
            1034
        ],
        "idp": 946
    },
    {
        "id": 948,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje y mecanizado",
        "WBS": "1.4.3.3.1.1",
        "childsId": [
            949,
            950,
            951,
            952,
            953
        ],
        "idp": 947
    },
    {
        "id": 949,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de bandejas y tuberías a obra.",
        "WBS": "1.4.3.3.1.1.1",
        "childsId": [],
        "idp": 948
    },
    {
        "id": 950,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Registrador de Falla en Gabinete existente",
        "WBS": "1.4.3.3.1.1.2",
        "childsId": [],
        "idp": 948
    },
    {
        "id": 951,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Bandejas",
        "WBS": "1.4.3.3.1.1.3",
        "childsId": [],
        "idp": 948
    },
    {
        "id": 952,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de tuberías Conduit",
        "WBS": "1.4.3.3.1.1.4",
        "childsId": [],
        "idp": 948
    },
    {
        "id": 953,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de Walk-in, perforación la pared.",
        "WBS": "1.4.3.3.1.1.5",
        "childsId": [],
        "idp": 948
    },
    {
        "id": 954,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.3.3.1.2",
        "childsId": [
            955,
            958,
            961
        ],
        "idp": 947
    },
    {
        "id": 955,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.3.3.1.2.1",
        "childsId": [
            956,
            957
        ],
        "idp": 954
    },
    {
        "id": 956,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.3.1.2.1.1",
        "childsId": [],
        "idp": 955
    },
    {
        "id": 957,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.3.1.2.1.2",
        "childsId": [],
        "idp": 955
    },
    {
        "id": 958,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.3.3.1.2.2",
        "childsId": [
            959,
            960
        ],
        "idp": 954
    },
    {
        "id": 959,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.3.1.2.2.1",
        "childsId": [],
        "idp": 958
    },
    {
        "id": 960,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.3.1.2.2.2",
        "childsId": [],
        "idp": 958
    },
    {
        "id": 961,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.3.3.1.2.3",
        "childsId": [
            962,
            963
        ],
        "idp": 954
    },
    {
        "id": 962,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.3.1.2.3.1",
        "childsId": [],
        "idp": 961
    },
    {
        "id": 963,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.3.1.2.3.2",
        "childsId": [],
        "idp": 961
    },
    {
        "id": 964,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de tableros",
        "WBS": "1.4.3.3.1.3",
        "childsId": [
            965,
            974,
            982,
            990,
            997,
            1006,
            1012,
            1017,
            1024
        ],
        "idp": 947
    },
    {
        "id": 965,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-744 LT1-138kV Control y Protección",
        "WBS": "1.4.3.3.1.3.1",
        "childsId": [
            966,
            967,
            968,
            969,
            970,
            971,
            972,
            973
        ],
        "idp": 964
    },
    {
        "id": 966,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.1.3.1.1",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 967,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.1.3.1.2",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 968,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.3.1.3.1.3",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 969,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.3.1.3.1.4",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 970,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.1.3.1.5",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 971,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.1.3.1.6",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 972,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.1.3.1.7",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 973,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.1.3.1.8",
        "childsId": [],
        "idp": 965
    },
    {
        "id": 974,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "VCB-764 - MB 3000A / 13.8 kV",
        "WBS": "1.4.3.3.1.3.2",
        "childsId": [
            975,
            976,
            977,
            978,
            979,
            980,
            981
        ],
        "idp": 964
    },
    {
        "id": 975,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.1.3.2.1",
        "childsId": [],
        "idp": 974
    },
    {
        "id": 976,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.1.3.2.2",
        "childsId": [],
        "idp": 974
    },
    {
        "id": 977,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.3.1.3.2.3",
        "childsId": [],
        "idp": 974
    },
    {
        "id": 978,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.1.3.2.4",
        "childsId": [],
        "idp": 974
    },
    {
        "id": 979,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.1.3.2.5",
        "childsId": [],
        "idp": 974
    },
    {
        "id": 980,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.1.3.2.6",
        "childsId": [],
        "idp": 974
    },
    {
        "id": 981,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.1.3.2.7",
        "childsId": [],
        "idp": 974
    },
    {
        "id": 982,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección Diferencial",
        "WBS": "1.4.3.3.1.3.3",
        "childsId": [
            983,
            984,
            985,
            986,
            987,
            988,
            989
        ],
        "idp": 964
    },
    {
        "id": 983,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.1.3.3.1",
        "childsId": [],
        "idp": 982
    },
    {
        "id": 984,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.1.3.3.2",
        "childsId": [],
        "idp": 982
    },
    {
        "id": 985,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.3.1.3.3.3",
        "childsId": [],
        "idp": 982
    },
    {
        "id": 986,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.1.3.3.4",
        "childsId": [],
        "idp": 982
    },
    {
        "id": 987,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.1.3.3.5",
        "childsId": [],
        "idp": 982
    },
    {
        "id": 988,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.1.3.3.6",
        "childsId": [],
        "idp": 982
    },
    {
        "id": 989,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.1.3.3.7",
        "childsId": [],
        "idp": 982
    },
    {
        "id": 990,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Auxiliary Comparment (Panel de Alarmas 138kV / 13.8kV)",
        "WBS": "1.4.3.3.1.3.4",
        "childsId": [
            991,
            992,
            993,
            994,
            995,
            996
        ],
        "idp": 964
    },
    {
        "id": 991,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.1.3.4.1",
        "childsId": [],
        "idp": 990
    },
    {
        "id": 992,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.1.3.4.2",
        "childsId": [],
        "idp": 990
    },
    {
        "id": 993,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.1.3.4.3",
        "childsId": [],
        "idp": 990
    },
    {
        "id": 994,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.1.3.4.4",
        "childsId": [],
        "idp": 990
    },
    {
        "id": 995,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.1.3.4.5",
        "childsId": [],
        "idp": 990
    },
    {
        "id": 996,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.1.3.4.6",
        "childsId": [],
        "idp": 990
    },
    {
        "id": 997,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas RF1 (3ra Celda Original)",
        "WBS": "1.4.3.3.1.3.5",
        "childsId": [
            998,
            999,
            1000,
            1001,
            1002,
            1003,
            1004,
            1005
        ],
        "idp": 964
    },
    {
        "id": 998,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.1.3.5.1",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 999,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.1.3.5.2",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 1000,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.3.1.3.5.3",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 1001,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.3.1.3.5.4",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 1002,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.1.3.5.5",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 1003,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.1.3.5.6",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 1004,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.1.3.5.7",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 1005,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.1.3.5.8",
        "childsId": [],
        "idp": 997
    },
    {
        "id": 1006,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel AC Panel 620-DP-01 (120/208 Panelboard) [tipo PRL1]",
        "WBS": "1.4.3.3.1.3.6",
        "childsId": [
            1007,
            1008,
            1009,
            1010,
            1011
        ],
        "idp": 964
    },
    {
        "id": 1007,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.3.3.1.3.6.1",
        "childsId": [],
        "idp": 1006
    },
    {
        "id": 1008,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalar nuevo breaker tipo BA, BAB, o HQP",
        "WBS": "1.4.3.3.1.3.6.2",
        "childsId": [],
        "idp": 1006
    },
    {
        "id": 1009,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de cableado a Breaker de Reserva",
        "WBS": "1.4.3.3.1.3.6.3",
        "childsId": [],
        "idp": 1006
    },
    {
        "id": 1010,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.3.1.3.6.4",
        "childsId": [],
        "idp": 1006
    },
    {
        "id": 1011,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.3.3.1.3.6.5",
        "childsId": [],
        "idp": 1006
    },
    {
        "id": 1012,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel DC (DP-02)",
        "WBS": "1.4.3.3.1.3.7",
        "childsId": [
            1013,
            1014,
            1015,
            1016
        ],
        "idp": 964
    },
    {
        "id": 1013,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalar breaker GHB2040",
        "WBS": "1.4.3.3.1.3.7.1",
        "childsId": [],
        "idp": 1012
    },
    {
        "id": 1014,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.3.3.1.3.7.2",
        "childsId": [],
        "idp": 1012
    },
    {
        "id": 1015,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Bornes de Breaker",
        "WBS": "1.4.3.3.1.3.7.3",
        "childsId": [],
        "idp": 1012
    },
    {
        "id": 1016,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Breaker",
        "WBS": "1.4.3.3.1.3.7.4",
        "childsId": [],
        "idp": 1012
    },
    {
        "id": 1017,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Procesador de Comunicaciones  (GPS RGP6-2)",
        "WBS": "1.4.3.3.1.3.8",
        "childsId": [
            1018,
            1019,
            1020,
            1021,
            1022,
            1023
        ],
        "idp": 964
    },
    {
        "id": 1018,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.1.3.8.1",
        "childsId": [],
        "idp": 1017
    },
    {
        "id": 1019,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.1.3.8.2",
        "childsId": [],
        "idp": 1017
    },
    {
        "id": 1020,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.3.1.3.8.3",
        "childsId": [],
        "idp": 1017
    },
    {
        "id": 1021,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.1.3.8.4",
        "childsId": [],
        "idp": 1017
    },
    {
        "id": 1022,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.1.3.8.5",
        "childsId": [],
        "idp": 1017
    },
    {
        "id": 1023,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.1.3.8.6",
        "childsId": [],
        "idp": 1017
    },
    {
        "id": 1024,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.3.3.1.3.9",
        "childsId": [
            1025,
            1026,
            1027,
            1028,
            1029
        ],
        "idp": 964
    },
    {
        "id": 1025,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, y conexionado de cable de Red  Cat 6A desde el RF al Path pannel",
        "WBS": "1.4.3.3.1.3.9.1",
        "childsId": [],
        "idp": 1024
    },
    {
        "id": 1026,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión ethernet al Switch SWT6-3 - Puerto 29 ",
        "WBS": "1.4.3.3.1.3.9.2",
        "childsId": [],
        "idp": 1024
    },
    {
        "id": 1027,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control",
        "WBS": "1.4.3.3.1.3.9.3",
        "childsId": [],
        "idp": 1024
    },
    {
        "id": 1028,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Peinado y fijado de cables ethernet",
        "WBS": "1.4.3.3.1.3.9.4",
        "childsId": [],
        "idp": 1024
    },
    {
        "id": 1029,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.3.3.1.3.9.5",
        "childsId": [],
        "idp": 1024
    },
    {
        "id": 1030,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.3.3.1.4",
        "childsId": [
            1031,
            1032,
            1033
        ],
        "idp": 947
    },
    {
        "id": 1031,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforación de la pared del Edificio",
        "WBS": "1.4.3.3.1.4.1",
        "childsId": [],
        "idp": 1030
    },
    {
        "id": 1032,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.3.3.1.4.2",
        "childsId": [],
        "idp": 1030
    },
    {
        "id": 1033,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.3.3.1.4.3",
        "childsId": [],
        "idp": 1030
    },
    {
        "id": 1034,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construcción Totoral LT1",
        "WBS": "1.4.3.3.1.5",
        "childsId": [],
        "idp": 947
    },
    {
        "id": 1035,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Nueva SE Totoral LT2 (138kV / Walk-In Enclosure)",
        "WBS": "1.4.3.3.2",
        "childsId": [
            1036,
            1042,
            1052,
            1111,
            1115
        ],
        "idp": 946
    },
    {
        "id": 1036,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.3.3.2.1",
        "childsId": [
            1037,
            1038,
            1039,
            1040,
            1041
        ],
        "idp": 1035
    },
    {
        "id": 1037,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de tableros y cables a obra.",
        "WBS": "1.4.3.3.2.1.1",
        "childsId": [],
        "idp": 1036
    },
    {
        "id": 1038,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tablero RF1",
        "WBS": "1.4.3.3.2.1.2",
        "childsId": [],
        "idp": 1036
    },
    {
        "id": 1039,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Bandejas",
        "WBS": "1.4.3.3.2.1.3",
        "childsId": [],
        "idp": 1036
    },
    {
        "id": 1040,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de tuberías Conduit",
        "WBS": "1.4.3.3.2.1.4",
        "childsId": [],
        "idp": 1036
    },
    {
        "id": 1041,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de Walk-in",
        "WBS": "1.4.3.3.2.1.5",
        "childsId": [],
        "idp": 1036
    },
    {
        "id": 1042,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.3.3.2.2",
        "childsId": [
            1043,
            1046,
            1049
        ],
        "idp": 1035
    },
    {
        "id": 1043,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.3.3.2.2.1",
        "childsId": [
            1044,
            1045
        ],
        "idp": 1042
    },
    {
        "id": 1044,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.3.2.2.1.1",
        "childsId": [],
        "idp": 1043
    },
    {
        "id": 1045,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.3.2.2.1.2",
        "childsId": [],
        "idp": 1043
    },
    {
        "id": 1046,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.3.3.2.2.2",
        "childsId": [
            1047,
            1048
        ],
        "idp": 1042
    },
    {
        "id": 1047,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.3.2.2.2.1",
        "childsId": [],
        "idp": 1046
    },
    {
        "id": 1048,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.3.2.2.2.2",
        "childsId": [],
        "idp": 1046
    },
    {
        "id": 1049,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.3.3.2.2.3",
        "childsId": [
            1050,
            1051
        ],
        "idp": 1042
    },
    {
        "id": 1050,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.3.2.2.3.1",
        "childsId": [],
        "idp": 1049
    },
    {
        "id": 1051,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.3.2.2.3.2",
        "childsId": [],
        "idp": 1049
    },
    {
        "id": 1052,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de tableros",
        "WBS": "1.4.3.3.2.3",
        "childsId": [
            1053,
            1059,
            1064,
            1069,
            1076,
            1085,
            1095,
            1104
        ],
        "idp": 1035
    },
    {
        "id": 1053,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.3.3.2.3.1",
        "childsId": [
            1054,
            1055,
            1056,
            1057,
            1058
        ],
        "idp": 1052
    },
    {
        "id": 1054,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, y conexionado de cable de Red  Cat 6A desde el RF al Path pannel",
        "WBS": "1.4.3.3.2.3.1.1",
        "childsId": [],
        "idp": 1053
    },
    {
        "id": 1055,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión ethernet al Switch SWT6-3 - Puerto 29 ",
        "WBS": "1.4.3.3.2.3.1.2",
        "childsId": [],
        "idp": 1053
    },
    {
        "id": 1056,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control",
        "WBS": "1.4.3.3.2.3.1.3",
        "childsId": [],
        "idp": 1053
    },
    {
        "id": 1057,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Peinado y fijado de cables ethernet",
        "WBS": "1.4.3.3.2.3.1.4",
        "childsId": [],
        "idp": 1053
    },
    {
        "id": 1058,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.3.3.2.3.1.5",
        "childsId": [],
        "idp": 1053
    },
    {
        "id": 1059,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Distribución 125DC",
        "WBS": "1.4.3.3.2.3.2",
        "childsId": [
            1060,
            1061,
            1062,
            1063
        ],
        "idp": 1052
    },
    {
        "id": 1060,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalar Breaker Siemens BQD125/250V 2x20 A en la posición 29, 31",
        "WBS": "1.4.3.3.2.3.2.1",
        "childsId": [],
        "idp": 1059
    },
    {
        "id": 1061,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.3.3.2.3.2.2",
        "childsId": [],
        "idp": 1059
    },
    {
        "id": 1062,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Bornes de Breaker",
        "WBS": "1.4.3.3.2.3.2.3",
        "childsId": [],
        "idp": 1059
    },
    {
        "id": 1063,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Breaker",
        "WBS": "1.4.3.3.2.3.2.4",
        "childsId": [],
        "idp": 1059
    },
    {
        "id": 1064,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 112 (Tablero de Alimentación AC)",
        "WBS": "1.4.3.3.2.3.3",
        "childsId": [
            1065,
            1066,
            1067,
            1068
        ],
        "idp": 1052
    },
    {
        "id": 1065,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalar Breaker Siemens BLHF Clase A 2x20 A en la posición 38 - 40",
        "WBS": "1.4.3.3.2.3.3.1",
        "childsId": [],
        "idp": 1064
    },
    {
        "id": 1066,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.3.3.2.3.3.2",
        "childsId": [],
        "idp": 1064
    },
    {
        "id": 1067,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Bornes de Breaker",
        "WBS": "1.4.3.3.2.3.3.3",
        "childsId": [],
        "idp": 1064
    },
    {
        "id": 1068,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Breaker",
        "WBS": "1.4.3.3.2.3.3.4",
        "childsId": [],
        "idp": 1064
    },
    {
        "id": 1069,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "UNIT: 112 Panel de Alarmas (Alarmas del Transformador)",
        "WBS": "1.4.3.3.2.3.4",
        "childsId": [
            1070,
            1071,
            1072,
            1073,
            1074,
            1075
        ],
        "idp": 1052
    },
    {
        "id": 1070,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.2.3.4.1",
        "childsId": [],
        "idp": 1069
    },
    {
        "id": 1071,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.2.3.4.2",
        "childsId": [],
        "idp": 1069
    },
    {
        "id": 1072,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.3.2.3.4.3",
        "childsId": [],
        "idp": 1069
    },
    {
        "id": 1073,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.2.3.4.4",
        "childsId": [],
        "idp": 1069
    },
    {
        "id": 1074,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.2.3.4.5",
        "childsId": [],
        "idp": 1069
    },
    {
        "id": 1075,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.2.3.4.6",
        "childsId": [],
        "idp": 1069
    },
    {
        "id": 1076,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "UNIT: 103 Interruptor Principal (Control de VCB-765 - 13.8 kV) / (Protección Diferencial de LT2)",
        "WBS": "1.4.3.3.2.3.5",
        "childsId": [
            1077,
            1078,
            1079,
            1080,
            1081,
            1082,
            1083,
            1084
        ],
        "idp": 1052
    },
    {
        "id": 1077,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.2.3.5.1",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1078,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.2.3.5.2",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1079,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.3.2.3.5.3",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1080,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.3.2.3.5.4",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1081,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.2.3.5.5",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1082,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.2.3.5.6",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1083,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.2.3.5.7",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1084,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.2.3.5.8",
        "childsId": [],
        "idp": 1076
    },
    {
        "id": 1085,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "UNIT 101 Panel LT2 ( HCB-757- Línea 1308 [Totoral-Millsite]  CS-745 LT2-138kV)",
        "WBS": "1.4.3.3.2.3.6",
        "childsId": [
            1086,
            1087,
            1088,
            1089,
            1090,
            1091,
            1092,
            1093,
            1094
        ],
        "idp": 1052
    },
    {
        "id": 1086,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reubicar la fibra para colocar Riel DIN",
        "WBS": "1.4.3.3.2.3.6.1",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1087,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.2.3.6.2",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1088,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.2.3.6.3",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1089,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.3.2.3.6.4",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1090,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.3.2.3.6.5",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1091,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.2.3.6.6",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1092,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.2.3.6.7",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1093,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.2.3.6.8",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1094,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.2.3.6.9",
        "childsId": [],
        "idp": 1085
    },
    {
        "id": 1095,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "UNIT: 110 TIE BREAKER 0620-E-101 (VCB-775 TIE BRK 3000A)",
        "WBS": "1.4.3.3.2.3.7",
        "childsId": [
            1096,
            1097,
            1098,
            1099,
            1100,
            1101,
            1102,
            1103
        ],
        "idp": 1052
    },
    {
        "id": 1096,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.3.2.3.7.1",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1097,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.3.2.3.7.2",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1098,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.3.2.3.7.3",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1099,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.3.2.3.7.4",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1100,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.3.2.3.7.5",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1101,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.2.3.7.6",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1102,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.2.3.7.7",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1103,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.2.3.7.8",
        "childsId": [],
        "idp": 1095
    },
    {
        "id": 1104,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel Rital en ampliación de sala - Registrador de Fallas RF1",
        "WBS": "1.4.3.3.2.3.8",
        "childsId": [
            1105,
            1106,
            1107,
            1108,
            1109,
            1110
        ],
        "idp": 1052
    },
    {
        "id": 1105,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.3.3.2.3.8.1",
        "childsId": [],
        "idp": 1104
    },
    {
        "id": 1106,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.3.3.2.3.8.2",
        "childsId": [],
        "idp": 1104
    },
    {
        "id": 1107,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.3.3.2.3.8.3",
        "childsId": [],
        "idp": 1104
    },
    {
        "id": 1108,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.3.2.3.8.4",
        "childsId": [],
        "idp": 1104
    },
    {
        "id": 1109,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.3.2.3.8.5",
        "childsId": [],
        "idp": 1104
    },
    {
        "id": 1110,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.3.2.3.8.6",
        "childsId": [],
        "idp": 1104
    },
    {
        "id": 1111,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.3.3.2.4",
        "childsId": [
            1112,
            1113,
            1114
        ],
        "idp": 1035
    },
    {
        "id": 1112,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforación de la pared del Edificio",
        "WBS": "1.4.3.3.2.4.1",
        "childsId": [],
        "idp": 1111
    },
    {
        "id": 1113,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.3.3.2.4.2",
        "childsId": [],
        "idp": 1111
    },
    {
        "id": 1114,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.3.3.2.4.3",
        "childsId": [],
        "idp": 1111
    },
    {
        "id": 1115,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construcción Totoral LT2",
        "WBS": "1.4.3.3.2.5",
        "childsId": [],
        "idp": 1035
    },
    {
        "id": 1116,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Push-Back",
        "WBS": "1.4.3.4",
        "childsId": [
            1117,
            1207
        ],
        "idp": 858
    },
    {
        "id": 1117,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sala Eléctrica",
        "WBS": "1.4.3.4.1",
        "childsId": [
            1118,
            1122,
            1135,
            1202,
            1206
        ],
        "idp": 1116
    },
    {
        "id": 1118,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.3.4.1.1",
        "childsId": [
            1119,
            1120,
            1121
        ],
        "idp": 1117
    },
    {
        "id": 1119,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de tuberías a obra.",
        "WBS": "1.4.3.4.1.1.1",
        "childsId": [],
        "idp": 1118
    },
    {
        "id": 1120,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tableros",
        "WBS": "1.4.3.4.1.1.2",
        "childsId": [],
        "idp": 1118
    },
    {
        "id": 1121,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Conduit",
        "WBS": "1.4.3.4.1.1.3",
        "childsId": [],
        "idp": 1118
    },
    {
        "id": 1122,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.3.4.1.2",
        "childsId": [
            1123,
            1126,
            1129,
            1132
        ],
        "idp": 1117
    },
    {
        "id": 1123,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.3.4.1.2.1",
        "childsId": [
            1124,
            1125
        ],
        "idp": 1122
    },
    {
        "id": 1124,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.4.1.2.1.1",
        "childsId": [],
        "idp": 1123
    },
    {
        "id": 1125,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.4.1.2.1.2",
        "childsId": [],
        "idp": 1123
    },
    {
        "id": 1126,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.3.4.1.2.2",
        "childsId": [
            1127,
            1128
        ],
        "idp": 1122
    },
    {
        "id": 1127,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.4.1.2.2.1",
        "childsId": [],
        "idp": 1126
    },
    {
        "id": 1128,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.4.1.2.2.2",
        "childsId": [],
        "idp": 1126
    },
    {
        "id": 1129,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.3.4.1.2.3",
        "childsId": [
            1130,
            1131
        ],
        "idp": 1122
    },
    {
        "id": 1130,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.4.1.2.3.1",
        "childsId": [],
        "idp": 1129
    },
    {
        "id": 1131,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.4.1.2.3.2",
        "childsId": [],
        "idp": 1129
    },
    {
        "id": 1132,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Patio",
        "WBS": "1.4.3.4.1.2.4",
        "childsId": [
            1133,
            1134
        ],
        "idp": 1122
    },
    {
        "id": 1133,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.4.1.2.4.1",
        "childsId": [],
        "idp": 1132
    },
    {
        "id": 1134,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.4.1.2.4.2",
        "childsId": [],
        "idp": 1132
    },
    {
        "id": 1135,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de tableros",
        "WBS": "1.4.3.4.1.3",
        "childsId": [
            1136,
            1145,
            1154,
            1163,
            1172,
            1179,
            1192,
            1197
        ],
        "idp": 1117
    },
    {
        "id": 1136,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero 02 Bahia de llegada SE Botiflaca (Línea 1)",
        "WBS": "1.4.3.4.1.3.1",
        "childsId": [
            1137,
            1138,
            1139,
            1140,
            1141,
            1142,
            1143,
            1144
        ],
        "idp": 1135
    },
    {
        "id": 1137,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.4.1.3.1.1",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1138,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.4.1.3.1.2",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1139,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.4.1.3.1.3",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1140,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.4.1.3.1.4",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1141,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.4.1.3.1.5",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1142,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.1.3.1.6",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1143,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.1.3.1.7",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1144,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.1.3.1.8",
        "childsId": [],
        "idp": 1136
    },
    {
        "id": 1145,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero 03 Bahía de llegada SE MillSite (Línea 2)",
        "WBS": "1.4.3.4.1.3.2",
        "childsId": [
            1146,
            1147,
            1148,
            1149,
            1150,
            1151,
            1152,
            1153
        ],
        "idp": 1135
    },
    {
        "id": 1146,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.4.1.3.2.1",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1147,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.4.1.3.2.2",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1148,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.4.1.3.2.3",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1149,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.4.1.3.2.4",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1150,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.4.1.3.2.5",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1151,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.1.3.2.6",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1152,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.1.3.2.7",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1153,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.1.3.2.8",
        "childsId": [],
        "idp": 1145
    },
    {
        "id": 1154,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero 05 Bahia de Transformador PBT-2",
        "WBS": "1.4.3.4.1.3.3",
        "childsId": [
            1155,
            1156,
            1157,
            1158,
            1159,
            1160,
            1161,
            1162
        ],
        "idp": 1135
    },
    {
        "id": 1155,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.4.1.3.3.1",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1156,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.4.1.3.3.2",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1157,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.4.1.3.3.3",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1158,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.4.1.3.3.4",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1159,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.4.1.3.3.5",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1160,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.1.3.3.6",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1161,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.1.3.3.7",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1162,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.1.3.3.8",
        "childsId": [],
        "idp": 1154
    },
    {
        "id": 1163,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero 06 Bahia de Salida de 69 kV",
        "WBS": "1.4.3.4.1.3.4",
        "childsId": [
            1164,
            1165,
            1166,
            1167,
            1168,
            1169,
            1170,
            1171
        ],
        "idp": 1135
    },
    {
        "id": 1164,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.4.1.3.4.1",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1165,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.4.1.3.4.2",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1166,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.4.1.3.4.3",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1167,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.4.1.3.4.4",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1168,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.4.1.3.4.5",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1169,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.1.3.4.6",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1170,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.1.3.4.7",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1171,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.1.3.4.8",
        "childsId": [],
        "idp": 1163
    },
    {
        "id": 1172,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel de Registrador de Fallas RF1",
        "WBS": "1.4.3.4.1.3.5",
        "childsId": [
            1173,
            1174,
            1175,
            1176,
            1177,
            1178
        ],
        "idp": 1135
    },
    {
        "id": 1173,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.3.4.1.3.5.1",
        "childsId": [],
        "idp": 1172
    },
    {
        "id": 1174,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.3.4.1.3.5.2",
        "childsId": [],
        "idp": 1172
    },
    {
        "id": 1175,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.3.4.1.3.5.3",
        "childsId": [],
        "idp": 1172
    },
    {
        "id": 1176,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.1.3.5.4",
        "childsId": [],
        "idp": 1172
    },
    {
        "id": 1177,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.1.3.5.5",
        "childsId": [],
        "idp": 1172
    },
    {
        "id": 1178,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.1.3.5.6",
        "childsId": [],
        "idp": 1172
    },
    {
        "id": 1179,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.3.4.1.3.6",
        "childsId": [
            1180,
            1187
        ],
        "idp": 1135
    },
    {
        "id": 1180,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Alarmas internas del registrador",
        "WBS": "1.4.3.4.1.3.6.1",
        "childsId": [
            1181,
            1182,
            1183,
            1184,
            1185,
            1186
        ],
        "idp": 1179
    },
    {
        "id": 1181,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.4.1.3.6.1.1",
        "childsId": [],
        "idp": 1180
    },
    {
        "id": 1182,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.4.1.3.6.1.2",
        "childsId": [],
        "idp": 1180
    },
    {
        "id": 1183,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.4.1.3.6.1.3",
        "childsId": [],
        "idp": 1180
    },
    {
        "id": 1184,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.1.3.6.1.4",
        "childsId": [],
        "idp": 1180
    },
    {
        "id": 1185,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.1.3.6.1.5",
        "childsId": [],
        "idp": 1180
    },
    {
        "id": 1186,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.1.3.6.1.6",
        "childsId": [],
        "idp": 1180
    },
    {
        "id": 1187,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión a Red",
        "WBS": "1.4.3.4.1.3.6.2",
        "childsId": [
            1188,
            1189,
            1190,
            1191
        ],
        "idp": 1179
    },
    {
        "id": 1188,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y crimpiado al Path panel de Cables de Red",
        "WBS": "1.4.3.4.1.3.6.2.1",
        "childsId": [],
        "idp": 1187
    },
    {
        "id": 1189,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Peinado de Path Cord de Path Panel al Switch SWT7-2,  Puerto P8",
        "WBS": "1.4.3.4.1.3.6.2.2",
        "childsId": [],
        "idp": 1187
    },
    {
        "id": 1190,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.3.4.1.3.6.2.3",
        "childsId": [],
        "idp": 1187
    },
    {
        "id": 1191,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control",
        "WBS": "1.4.3.4.1.3.6.2.4",
        "childsId": [],
        "idp": 1187
    },
    {
        "id": 1192,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel de Distribución 125VDC",
        "WBS": "1.4.3.4.1.3.7",
        "childsId": [
            1193,
            1194,
            1195,
            1196
        ],
        "idp": 1135
    },
    {
        "id": 1193,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables DC",
        "WBS": "1.4.3.4.1.3.7.1",
        "childsId": [],
        "idp": 1192
    },
    {
        "id": 1194,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.4.1.3.7.2",
        "childsId": [],
        "idp": 1192
    },
    {
        "id": 1195,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Breaker",
        "WBS": "1.4.3.4.1.3.7.3",
        "childsId": [],
        "idp": 1192
    },
    {
        "id": 1196,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conectar breaker de reserva pos. 34-36",
        "WBS": "1.4.3.4.1.3.7.4",
        "childsId": [],
        "idp": 1192
    },
    {
        "id": 1197,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel de Servicios auxiliares 208Y-120VAC",
        "WBS": "1.4.3.4.1.3.8",
        "childsId": [
            1198,
            1199,
            1200,
            1201
        ],
        "idp": 1135
    },
    {
        "id": 1198,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables DC",
        "WBS": "1.4.3.4.1.3.8.1",
        "childsId": [],
        "idp": 1197
    },
    {
        "id": 1199,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.4.1.3.8.2",
        "childsId": [],
        "idp": 1197
    },
    {
        "id": 1200,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Breaker",
        "WBS": "1.4.3.4.1.3.8.3",
        "childsId": [],
        "idp": 1197
    },
    {
        "id": 1201,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conectar Breaker de reserva pos. 36",
        "WBS": "1.4.3.4.1.3.8.4",
        "childsId": [],
        "idp": 1197
    },
    {
        "id": 1202,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.3.4.1.4",
        "childsId": [
            1203,
            1204,
            1205
        ],
        "idp": 1117
    },
    {
        "id": 1203,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforación de la pared del Edificio",
        "WBS": "1.4.3.4.1.4.1",
        "childsId": [],
        "idp": 1202
    },
    {
        "id": 1204,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.3.4.1.4.2",
        "childsId": [],
        "idp": 1202
    },
    {
        "id": 1205,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.3.4.1.4.3",
        "childsId": [],
        "idp": 1202
    },
    {
        "id": 1206,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construcción Sala Eléctrica Push-Back",
        "WBS": "1.4.3.4.1.5",
        "childsId": [],
        "idp": 1117
    },
    {
        "id": 1207,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Patio de Llaves",
        "WBS": "1.4.3.4.2",
        "childsId": [
            1208,
            1221,
            1232,
            1275
        ],
        "idp": 1116
    },
    {
        "id": 1208,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje de ductos de cables",
        "WBS": "1.4.3.4.2.1",
        "childsId": [
            1209,
            1215,
            1218
        ],
        "idp": 1207
    },
    {
        "id": 1209,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto de cableado a Bahia de Tx PBT-1",
        "WBS": "1.4.3.4.2.1.1",
        "childsId": [
            1210,
            1211,
            1212,
            1213,
            1214
        ],
        "idp": 1208
    },
    {
        "id": 1210,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Excavación para ducto de cables de RF al tablero PBT-1",
        "WBS": "1.4.3.4.2.1.1.1",
        "childsId": [],
        "idp": 1209
    },
    {
        "id": 1211,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de 2 ductos conduit de 4 pulgadas desde el tablero al codo de pazo que recibe el ducto de cables a la loza del tablero",
        "WBS": "1.4.3.4.2.1.1.2",
        "childsId": [],
        "idp": 1209
    },
    {
        "id": 1212,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de 2 ductos de 4 pulgadas de 15 metros desde la loza del tablero PBT-1 al buzon a construir",
        "WBS": "1.4.3.4.2.1.1.3",
        "childsId": [],
        "idp": 1209
    },
    {
        "id": 1213,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de 2 ductos de 4 pulgadas de 20 metros desde el buzon a construir hasta el ducto de cables de la subestación",
        "WBS": "1.4.3.4.2.1.1.4",
        "childsId": [],
        "idp": 1209
    },
    {
        "id": 1214,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Construcción de un buzon de cables de cemento para paso de cables",
        "WBS": "1.4.3.4.2.1.1.5",
        "childsId": [],
        "idp": 1209
    },
    {
        "id": 1215,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto de cableado a CS-543",
        "WBS": "1.4.3.4.2.1.2",
        "childsId": [
            1216,
            1217
        ],
        "idp": 1208
    },
    {
        "id": 1216,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Excavación para ducto de cables de RF al tablero",
        "WBS": "1.4.3.4.2.1.2.1",
        "childsId": [],
        "idp": 1215
    },
    {
        "id": 1217,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de 1 ducto de 4 pulgadas desde ducto de cables a tablero",
        "WBS": "1.4.3.4.2.1.2.2",
        "childsId": [],
        "idp": 1215
    },
    {
        "id": 1218,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto de cableado a CS-544",
        "WBS": "1.4.3.4.2.1.3",
        "childsId": [
            1219,
            1220
        ],
        "idp": 1208
    },
    {
        "id": 1219,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Excavación para ducto de cables de RF al tablero",
        "WBS": "1.4.3.4.2.1.3.1",
        "childsId": [],
        "idp": 1218
    },
    {
        "id": 1220,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de 1 ducto de 4 pulgadas desde ducto de cables a tablero",
        "WBS": "1.4.3.4.2.1.3.2",
        "childsId": [],
        "idp": 1218
    },
    {
        "id": 1221,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de TMCP de campo",
        "WBS": "1.4.3.4.2.2",
        "childsId": [
            1222
        ],
        "idp": 1207
    },
    {
        "id": 1222,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Bahia de Transformador PBT-1",
        "WBS": "1.4.3.4.2.2.1",
        "childsId": [
            1223,
            1224,
            1225,
            1226,
            1227,
            1228,
            1229,
            1230,
            1231
        ],
        "idp": 1221
    },
    {
        "id": 1223,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.4.2.2.1.1",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1224,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.4.2.2.1.2",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1225,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de borneras",
        "WBS": "1.4.3.4.2.2.1.3",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1226,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cables desde Registrador hasta el Tablero",
        "WBS": "1.4.3.4.2.2.1.4",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1227,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.4.2.2.1.5",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1228,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.4.2.2.1.6",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1229,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por el piso del tablero",
        "WBS": "1.4.3.4.2.2.1.7",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1230,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.2.1.8",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1231,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.2.1.9",
        "childsId": [],
        "idp": 1222
    },
    {
        "id": 1232,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acondicionamiento y cableado de tableros de Equipos",
        "WBS": "1.4.3.4.2.3",
        "childsId": [
            1233,
            1239,
            1245,
            1251,
            1257,
            1263,
            1269
        ],
        "idp": 1207
    },
    {
        "id": 1233,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "HCB-552 - 138kV / SE MillSite",
        "WBS": "1.4.3.4.2.3.1",
        "childsId": [
            1234,
            1235,
            1236,
            1237,
            1238
        ],
        "idp": 1232
    },
    {
        "id": 1234,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.3.4.2.3.1.1",
        "childsId": [],
        "idp": 1233
    },
    {
        "id": 1235,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el ducto al tablero",
        "WBS": "1.4.3.4.2.3.1.2",
        "childsId": [],
        "idp": 1233
    },
    {
        "id": 1236,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.2.3.1.3",
        "childsId": [],
        "idp": 1233
    },
    {
        "id": 1237,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.3.1.4",
        "childsId": [],
        "idp": 1233
    },
    {
        "id": 1238,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.3.1.5",
        "childsId": [],
        "idp": 1233
    },
    {
        "id": 1239,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "HCB-553 - 138kV / SE Botiflaca",
        "WBS": "1.4.3.4.2.3.2",
        "childsId": [
            1240,
            1241,
            1242,
            1243,
            1244
        ],
        "idp": 1232
    },
    {
        "id": 1240,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.3.4.2.3.2.1",
        "childsId": [],
        "idp": 1239
    },
    {
        "id": 1241,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el ducto al tablero",
        "WBS": "1.4.3.4.2.3.2.2",
        "childsId": [],
        "idp": 1239
    },
    {
        "id": 1242,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.2.3.2.3",
        "childsId": [],
        "idp": 1239
    },
    {
        "id": 1243,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.3.2.4",
        "childsId": [],
        "idp": 1239
    },
    {
        "id": 1244,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.3.2.5",
        "childsId": [],
        "idp": 1239
    },
    {
        "id": 1245,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-541 / PBT2",
        "WBS": "1.4.3.4.2.3.3",
        "childsId": [
            1246,
            1247,
            1248,
            1249,
            1250
        ],
        "idp": 1232
    },
    {
        "id": 1246,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.3.4.2.3.3.1",
        "childsId": [],
        "idp": 1245
    },
    {
        "id": 1247,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el ducto al tablero",
        "WBS": "1.4.3.4.2.3.3.2",
        "childsId": [],
        "idp": 1245
    },
    {
        "id": 1248,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.2.3.3.3",
        "childsId": [],
        "idp": 1245
    },
    {
        "id": 1249,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.3.3.4",
        "childsId": [],
        "idp": 1245
    },
    {
        "id": 1250,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.3.3.5",
        "childsId": [],
        "idp": 1245
    },
    {
        "id": 1251,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-543 / PBT1",
        "WBS": "1.4.3.4.2.3.4",
        "childsId": [
            1252,
            1253,
            1254,
            1255,
            1256
        ],
        "idp": 1232
    },
    {
        "id": 1252,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.3.4.2.3.4.1",
        "childsId": [],
        "idp": 1251
    },
    {
        "id": 1253,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el ducto al tablero",
        "WBS": "1.4.3.4.2.3.4.2",
        "childsId": [],
        "idp": 1251
    },
    {
        "id": 1254,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.2.3.4.3",
        "childsId": [],
        "idp": 1251
    },
    {
        "id": 1255,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.3.4.4",
        "childsId": [],
        "idp": 1251
    },
    {
        "id": 1256,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.3.4.5",
        "childsId": [],
        "idp": 1251
    },
    {
        "id": 1257,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transformador PBT-2",
        "WBS": "1.4.3.4.2.3.5",
        "childsId": [
            1258,
            1259,
            1260,
            1261,
            1262
        ],
        "idp": 1232
    },
    {
        "id": 1258,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.3.4.2.3.5.1",
        "childsId": [],
        "idp": 1257
    },
    {
        "id": 1259,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el ducto al tablero",
        "WBS": "1.4.3.4.2.3.5.2",
        "childsId": [],
        "idp": 1257
    },
    {
        "id": 1260,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.2.3.5.3",
        "childsId": [],
        "idp": 1257
    },
    {
        "id": 1261,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.3.5.4",
        "childsId": [],
        "idp": 1257
    },
    {
        "id": 1262,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.3.5.5",
        "childsId": [],
        "idp": 1257
    },
    {
        "id": 1263,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transformador PBT-1",
        "WBS": "1.4.3.4.2.3.6",
        "childsId": [
            1264,
            1265,
            1266,
            1267,
            1268
        ],
        "idp": 1232
    },
    {
        "id": 1264,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.3.4.2.3.6.1",
        "childsId": [],
        "idp": 1263
    },
    {
        "id": 1265,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el ducto al tablero",
        "WBS": "1.4.3.4.2.3.6.2",
        "childsId": [],
        "idp": 1263
    },
    {
        "id": 1266,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.2.3.6.3",
        "childsId": [],
        "idp": 1263
    },
    {
        "id": 1267,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.3.6.4",
        "childsId": [],
        "idp": 1263
    },
    {
        "id": 1268,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.3.6.5",
        "childsId": [],
        "idp": 1263
    },
    {
        "id": 1269,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-544",
        "WBS": "1.4.3.4.2.3.7",
        "childsId": [
            1270,
            1271,
            1272,
            1273,
            1274
        ],
        "idp": 1232
    },
    {
        "id": 1270,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.3.4.2.3.7.1",
        "childsId": [],
        "idp": 1269
    },
    {
        "id": 1271,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el ducto al tablero",
        "WBS": "1.4.3.4.2.3.7.2",
        "childsId": [],
        "idp": 1269
    },
    {
        "id": 1272,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.4.2.3.7.3",
        "childsId": [],
        "idp": 1269
    },
    {
        "id": 1273,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.4.2.3.7.4",
        "childsId": [],
        "idp": 1269
    },
    {
        "id": 1274,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.4.2.3.7.5",
        "childsId": [],
        "idp": 1269
    },
    {
        "id": 1275,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construccion de Patio de llaves Push-Back",
        "WBS": "1.4.3.4.2.4",
        "childsId": [],
        "idp": 1207
    },
    {
        "id": 1276,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mill Site",
        "WBS": "1.4.3.5",
        "childsId": [
            1277,
            1283,
            1293,
            1494,
            1499
        ],
        "idp": 858
    },
    {
        "id": 1277,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.3.5.1",
        "childsId": [
            1278,
            1279,
            1280,
            1281,
            1282
        ],
        "idp": 1276
    },
    {
        "id": 1278,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de tableros y cables a obra.",
        "WBS": "1.4.3.5.1.1",
        "childsId": [],
        "idp": 1277
    },
    {
        "id": 1279,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tableros",
        "WBS": "1.4.3.5.1.2",
        "childsId": [],
        "idp": 1277
    },
    {
        "id": 1280,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de esparragos y canales Unistruth",
        "WBS": "1.4.3.5.1.3",
        "childsId": [],
        "idp": 1277
    },
    {
        "id": 1281,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Bandejas portacables de 25m",
        "WBS": "1.4.3.5.1.4",
        "childsId": [],
        "idp": 1277
    },
    {
        "id": 1282,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Conduit",
        "WBS": "1.4.3.5.1.5",
        "childsId": [],
        "idp": 1277
    },
    {
        "id": 1283,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.3.5.2",
        "childsId": [
            1284,
            1287,
            1290
        ],
        "idp": 1276
    },
    {
        "id": 1284,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.3.5.2.1",
        "childsId": [
            1285,
            1286
        ],
        "idp": 1283
    },
    {
        "id": 1285,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.5.2.1.1",
        "childsId": [],
        "idp": 1284
    },
    {
        "id": 1286,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.5.2.1.2",
        "childsId": [],
        "idp": 1284
    },
    {
        "id": 1287,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.3.5.2.2",
        "childsId": [
            1288,
            1289
        ],
        "idp": 1283
    },
    {
        "id": 1288,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.5.2.2.1",
        "childsId": [],
        "idp": 1287
    },
    {
        "id": 1289,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.5.2.2.2",
        "childsId": [],
        "idp": 1287
    },
    {
        "id": 1290,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.3.5.2.3",
        "childsId": [
            1291,
            1292
        ],
        "idp": 1283
    },
    {
        "id": 1291,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.3.5.2.3.1",
        "childsId": [],
        "idp": 1290
    },
    {
        "id": 1292,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.3.5.2.3.2",
        "childsId": [],
        "idp": 1290
    },
    {
        "id": 1293,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación de tableros",
        "WBS": "1.4.3.5.3",
        "childsId": [
            1294,
            1359,
            1379,
            1399,
            1409,
            1428,
            1448,
            1457,
            1464,
            1471,
            1483,
            1488
        ],
        "idp": 1276
    },
    {
        "id": 1294,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "L-1388 (Mill Site - Toquepala - ETS)",
        "WBS": "1.4.3.5.3.1",
        "childsId": [
            1295,
            1304,
            1314,
            1323,
            1333,
            1343,
            1351
        ],
        "idp": 1293
    },
    {
        "id": 1295,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control - OCB-750 / 138 kV",
        "WBS": "1.4.3.5.3.1.1",
        "childsId": [
            1296,
            1297,
            1298,
            1299,
            1300,
            1301,
            1302,
            1303
        ],
        "idp": 1294
    },
    {
        "id": 1296,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.1.1.1",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1297,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.1.1.2",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1298,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.1.1.3",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1299,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.1.1.4",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1300,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.1.1.5",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1301,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.1.1.6",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1302,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.1.1.7",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1303,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.1.1.8",
        "childsId": [],
        "idp": 1295
    },
    {
        "id": 1304,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección - OCB-750 / 138 kV",
        "WBS": "1.4.3.5.3.1.2",
        "childsId": [
            1305,
            1306,
            1307,
            1308,
            1309,
            1310,
            1311,
            1312,
            1313
        ],
        "idp": 1294
    },
    {
        "id": 1305,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.5.3.1.2.1",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1306,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.1.2.2",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1307,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.5.3.1.2.3",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1308,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.1.2.4",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1309,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.5.3.1.2.5",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1310,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.1.2.6",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1311,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.1.2.7",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1312,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.1.2.8",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1313,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.1.2.9",
        "childsId": [],
        "idp": 1304
    },
    {
        "id": 1314,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control - TT1 y TT2 (Lado de 138Kv) [CS-742 y CS-741]",
        "WBS": "1.4.3.5.3.1.3",
        "childsId": [
            1315,
            1316,
            1317,
            1318,
            1319,
            1320,
            1321,
            1322
        ],
        "idp": 1294
    },
    {
        "id": 1315,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.1.3.1",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1316,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.1.3.2",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1317,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.1.3.3",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1318,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.1.3.4",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1319,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.1.3.5",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1320,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.1.3.6",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1321,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.1.3.7",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1322,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.1.3.8",
        "childsId": [],
        "idp": 1314
    },
    {
        "id": 1323,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección TT1 [CS-741]",
        "WBS": "1.4.3.5.3.1.4",
        "childsId": [
            1324,
            1325,
            1326,
            1327,
            1328,
            1329,
            1330,
            1331,
            1332
        ],
        "idp": 1294
    },
    {
        "id": 1324,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de plancha interior de 15cm x 100cm",
        "WBS": "1.4.3.5.3.1.4.1",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1325,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.1.4.2",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1326,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.5.3.1.4.3",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1327,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.1.4.4",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1328,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.5.3.1.4.5",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1329,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.1.4.6",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1330,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.1.4.7",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1331,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.1.4.8",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1332,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.1.4.9",
        "childsId": [],
        "idp": 1323
    },
    {
        "id": 1333,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección TT2 [CS-742]",
        "WBS": "1.4.3.5.3.1.5",
        "childsId": [
            1334,
            1335,
            1336,
            1337,
            1338,
            1339,
            1340,
            1341,
            1342
        ],
        "idp": 1294
    },
    {
        "id": 1334,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de plancha interior de 15cm x 100cm",
        "WBS": "1.4.3.5.3.1.5.1",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1335,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.1.5.2",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1336,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.5.3.1.5.3",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1337,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.1.5.4",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1338,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.5.3.1.5.5",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1339,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.1.5.6",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1340,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.1.5.7",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1341,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.1.5.8",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1342,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.1.5.9",
        "childsId": [],
        "idp": 1333
    },
    {
        "id": 1343,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control  TT1 (Lado 13.8kV) [ACB 761] ",
        "WBS": "1.4.3.5.3.1.6",
        "childsId": [
            1344,
            1345,
            1346,
            1347,
            1348,
            1349,
            1350
        ],
        "idp": 1294
    },
    {
        "id": 1344,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.1.6.1",
        "childsId": [],
        "idp": 1343
    },
    {
        "id": 1345,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.1.6.2",
        "childsId": [],
        "idp": 1343
    },
    {
        "id": 1346,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.1.6.3",
        "childsId": [],
        "idp": 1343
    },
    {
        "id": 1347,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.1.6.4",
        "childsId": [],
        "idp": 1343
    },
    {
        "id": 1348,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.1.6.5",
        "childsId": [],
        "idp": 1343
    },
    {
        "id": 1349,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.1.6.6",
        "childsId": [],
        "idp": 1343
    },
    {
        "id": 1350,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.1.6.7",
        "childsId": [],
        "idp": 1343
    },
    {
        "id": 1351,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control  TT2 (Lado 13.8kV) [ACB 762] ",
        "WBS": "1.4.3.5.3.1.7",
        "childsId": [
            1352,
            1353,
            1354,
            1355,
            1356,
            1357,
            1358
        ],
        "idp": 1294
    },
    {
        "id": 1352,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.1.7.1",
        "childsId": [],
        "idp": 1351
    },
    {
        "id": 1353,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.1.7.2",
        "childsId": [],
        "idp": 1351
    },
    {
        "id": 1354,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.1.7.3",
        "childsId": [],
        "idp": 1351
    },
    {
        "id": 1355,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.1.7.4",
        "childsId": [],
        "idp": 1351
    },
    {
        "id": 1356,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.1.7.5",
        "childsId": [],
        "idp": 1351
    },
    {
        "id": 1357,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.1.7.6",
        "childsId": [],
        "idp": 1351
    },
    {
        "id": 1358,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.1.7.7",
        "childsId": [],
        "idp": 1351
    },
    {
        "id": 1359,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "L-1385 (Ilo 1 - Mill Site)",
        "WBS": "1.4.3.5.3.2",
        "childsId": [
            1360,
            1370
        ],
        "idp": 1293
    },
    {
        "id": 1360,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección TT1 [CS-741]",
        "WBS": "1.4.3.5.3.2.1",
        "childsId": [
            1361,
            1362,
            1363,
            1364,
            1365,
            1366,
            1367,
            1368,
            1369
        ],
        "idp": 1359
    },
    {
        "id": 1361,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.2.1.1",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1362,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.5.3.2.1.2",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1363,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.2.1.3",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1364,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.5.3.2.1.4",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1365,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.5.3.2.1.5",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1366,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.2.1.6",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1367,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.2.1.7",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1368,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.2.1.8",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1369,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.2.1.9",
        "childsId": [],
        "idp": 1360
    },
    {
        "id": 1370,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control  TT2 (Lado 13.8kV) [ACB 762] ",
        "WBS": "1.4.3.5.3.2.2",
        "childsId": [
            1371,
            1372,
            1373,
            1374,
            1375,
            1376,
            1377,
            1378
        ],
        "idp": 1359
    },
    {
        "id": 1371,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.2.2.1",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1372,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.2.2.2",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1373,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.2.2.3",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1374,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.2.2.4",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1375,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.2.2.5",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1376,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.2.2.6",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1377,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.2.2.7",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1378,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.2.2.8",
        "childsId": [],
        "idp": 1370
    },
    {
        "id": 1379,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "L-1386 (Mill Site - Push Back)",
        "WBS": "1.4.3.5.3.3",
        "childsId": [
            1380,
            1390
        ],
        "idp": 1293
    },
    {
        "id": 1380,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección HCB-752 / 138kV",
        "WBS": "1.4.3.5.3.3.1",
        "childsId": [
            1381,
            1382,
            1383,
            1384,
            1385,
            1386,
            1387,
            1388,
            1389
        ],
        "idp": 1379
    },
    {
        "id": 1381,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.3.1.1",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1382,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.5.3.3.1.2",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1383,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.3.1.3",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1384,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calado del tablero para pasar cables de control",
        "WBS": "1.4.3.5.3.3.1.4",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1385,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de conduit,  prensa estopas y contratuercas",
        "WBS": "1.4.3.5.3.3.1.5",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1386,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.3.1.6",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1387,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.3.1.7",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1388,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.3.1.8",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1389,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.3.1.9",
        "childsId": [],
        "idp": 1380
    },
    {
        "id": 1390,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control HCB-752 / 138kV",
        "WBS": "1.4.3.5.3.3.2",
        "childsId": [
            1391,
            1392,
            1393,
            1394,
            1395,
            1396,
            1397,
            1398
        ],
        "idp": 1379
    },
    {
        "id": 1391,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.3.2.1",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1392,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.3.2.2",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1393,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.3.2.3",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1394,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.3.2.4",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1395,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.3.2.5",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1396,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.3.2.6",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1397,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.3.2.7",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1398,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.3.2.8",
        "childsId": [],
        "idp": 1390
    },
    {
        "id": 1399,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "L-1389 (Mill Site - Lixiviación - Tororal)",
        "WBS": "1.4.3.5.3.4",
        "childsId": [
            1400
        ],
        "idp": 1293
    },
    {
        "id": 1400,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control y Protección HCB-753",
        "WBS": "1.4.3.5.3.4.1",
        "childsId": [
            1401,
            1402,
            1403,
            1404,
            1405,
            1406,
            1407,
            1408
        ],
        "idp": 1399
    },
    {
        "id": 1401,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.4.1.1",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1402,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.4.1.2",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1403,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.4.1.3",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1404,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.4.1.4",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1405,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.4.1.5",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1406,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.4.1.6",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1407,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.4.1.7",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1408,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.4.1.8",
        "childsId": [],
        "idp": 1400
    },
    {
        "id": 1409,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "L-1384 (Moquegua-Mill Site)",
        "WBS": "1.4.3.5.3.5",
        "childsId": [
            1410,
            1419
        ],
        "idp": 1293
    },
    {
        "id": 1410,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección HCB-754 / 138kV",
        "WBS": "1.4.3.5.3.5.1",
        "childsId": [
            1411,
            1412,
            1413,
            1414,
            1415,
            1416,
            1417,
            1418
        ],
        "idp": 1409
    },
    {
        "id": 1411,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.5.1.1",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1412,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.5.1.2",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1413,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.3.5.3.5.1.3",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1414,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.5.1.4",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1415,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por pared superior derecha",
        "WBS": "1.4.3.5.3.5.1.5",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1416,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.5.1.6",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1417,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.5.1.7",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1418,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.5.1.8",
        "childsId": [],
        "idp": 1410
    },
    {
        "id": 1419,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Control HCB-754 / 138kV",
        "WBS": "1.4.3.5.3.5.2",
        "childsId": [
            1420,
            1421,
            1422,
            1423,
            1424,
            1425,
            1426,
            1427
        ],
        "idp": 1409
    },
    {
        "id": 1420,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.5.2.1",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1421,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.5.2.2",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1422,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.5.2.3",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1423,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.5.2.4",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1424,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.5.2.5",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1425,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.5.2.6",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1426,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.5.2.7",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1427,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.5.2.8",
        "childsId": [],
        "idp": 1419
    },
    {
        "id": 1428,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Transformador TT3P",
        "WBS": "1.4.3.5.3.6",
        "childsId": [
            1429,
            1439
        ],
        "idp": 1293
    },
    {
        "id": 1429,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Protección TT3P",
        "WBS": "1.4.3.5.3.6.1",
        "childsId": [
            1430,
            1431,
            1432,
            1433,
            1434,
            1435,
            1436,
            1437,
            1438
        ],
        "idp": 1428
    },
    {
        "id": 1430,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforar el techo del tablero 2931-56M-295 para la llegada de cables",
        "WBS": "1.4.3.5.3.6.1.1",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1431,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.6.1.2",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1432,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.6.1.3",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1433,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.6.1.4",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1434,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.6.1.5",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1435,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables de Control por la pared",
        "WBS": "1.4.3.5.3.6.1.6",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1436,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.6.1.7",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1437,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.6.1.8",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1438,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.6.1.9",
        "childsId": [],
        "idp": 1429
    },
    {
        "id": 1439,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero 101B (TC TT3P)",
        "WBS": "1.4.3.5.3.6.2",
        "childsId": [
            1440,
            1441,
            1442,
            1443,
            1444,
            1445,
            1446,
            1447
        ],
        "idp": 1428
    },
    {
        "id": 1440,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.6.2.1",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1441,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.6.2.2",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1442,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.6.2.3",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1443,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.6.2.4",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1444,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.6.2.5",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1445,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.6.2.6",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1446,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.6.2.7",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1447,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.6.2.8",
        "childsId": [],
        "idp": 1439
    },
    {
        "id": 1448,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero BUS TIE",
        "WBS": "1.4.3.5.3.7",
        "childsId": [
            1449,
            1450,
            1451,
            1452,
            1453,
            1454,
            1455,
            1456
        ],
        "idp": 1293
    },
    {
        "id": 1449,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.7.1",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1450,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.3.5.3.7.2",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1451,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.3.5.3.7.3",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1452,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.3.5.3.7.4",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1453,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables de Control por arriba",
        "WBS": "1.4.3.5.3.7.5",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1454,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.7.6",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1455,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.7.7",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1456,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.7.8",
        "childsId": [],
        "idp": 1448
    },
    {
        "id": 1457,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF1",
        "WBS": "1.4.3.5.3.8",
        "childsId": [
            1458,
            1459,
            1460,
            1461,
            1462,
            1463
        ],
        "idp": 1293
    },
    {
        "id": 1458,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.3.5.3.8.1",
        "childsId": [],
        "idp": 1457
    },
    {
        "id": 1459,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.3.5.3.8.2",
        "childsId": [],
        "idp": 1457
    },
    {
        "id": 1460,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.3.5.3.8.3",
        "childsId": [],
        "idp": 1457
    },
    {
        "id": 1461,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.8.4",
        "childsId": [],
        "idp": 1457
    },
    {
        "id": 1462,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.8.5",
        "childsId": [],
        "idp": 1457
    },
    {
        "id": 1463,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.8.6",
        "childsId": [],
        "idp": 1457
    },
    {
        "id": 1464,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF2",
        "WBS": "1.4.3.5.3.9",
        "childsId": [
            1465,
            1466,
            1467,
            1468,
            1469,
            1470
        ],
        "idp": 1293
    },
    {
        "id": 1465,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.3.5.3.9.1",
        "childsId": [],
        "idp": 1464
    },
    {
        "id": 1466,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.3.5.3.9.2",
        "childsId": [],
        "idp": 1464
    },
    {
        "id": 1467,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.3.5.3.9.3",
        "childsId": [],
        "idp": 1464
    },
    {
        "id": 1468,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.9.4",
        "childsId": [],
        "idp": 1464
    },
    {
        "id": 1469,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.9.5",
        "childsId": [],
        "idp": 1464
    },
    {
        "id": 1470,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.9.6",
        "childsId": [],
        "idp": 1464
    },
    {
        "id": 1471,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.3.5.3.10",
        "childsId": [
            1472,
            1478
        ],
        "idp": 1293
    },
    {
        "id": 1472,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Alarmas internas del registrador",
        "WBS": "1.4.3.5.3.10.1",
        "childsId": [
            1473,
            1474,
            1475,
            1476,
            1477
        ],
        "idp": 1471
    },
    {
        "id": 1473,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.3.5.3.10.1.1",
        "childsId": [],
        "idp": 1472
    },
    {
        "id": 1474,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control a bornera de reserva",
        "WBS": "1.4.3.5.3.10.1.2",
        "childsId": [],
        "idp": 1472
    },
    {
        "id": 1475,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.3.5.3.10.1.3",
        "childsId": [],
        "idp": 1472
    },
    {
        "id": 1476,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.3.5.3.10.1.4",
        "childsId": [],
        "idp": 1472
    },
    {
        "id": 1477,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.3.5.3.10.1.5",
        "childsId": [],
        "idp": 1472
    },
    {
        "id": 1478,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión a Red",
        "WBS": "1.4.3.5.3.10.2",
        "childsId": [
            1479,
            1480,
            1481,
            1482
        ],
        "idp": 1471
    },
    {
        "id": 1479,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y crimpiado de Cables de Red al Path panel ",
        "WBS": "1.4.3.5.3.10.2.1",
        "childsId": [],
        "idp": 1478
    },
    {
        "id": 1480,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Peinado de Path Cord de Path Panel al Switch ",
        "WBS": "1.4.3.5.3.10.2.2",
        "childsId": [],
        "idp": 1478
    },
    {
        "id": 1481,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.3.5.3.10.2.3",
        "childsId": [],
        "idp": 1478
    },
    {
        "id": 1482,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de Alarmas via cable de control",
        "WBS": "1.4.3.5.3.10.2.4",
        "childsId": [],
        "idp": 1478
    },
    {
        "id": 1483,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel BP3-125Vdc",
        "WBS": "1.4.3.5.3.11",
        "childsId": [
            1484,
            1485,
            1486,
            1487
        ],
        "idp": 1293
    },
    {
        "id": 1484,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Llegada de Cables DC",
        "WBS": "1.4.3.5.3.11.1",
        "childsId": [],
        "idp": 1483
    },
    {
        "id": 1485,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.5.3.11.2",
        "childsId": [],
        "idp": 1483
    },
    {
        "id": 1486,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.3.5.3.11.3",
        "childsId": [],
        "idp": 1483
    },
    {
        "id": 1487,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de cableado a Breaker de Reserva",
        "WBS": "1.4.3.5.3.11.4",
        "childsId": [],
        "idp": 1483
    },
    {
        "id": 1488,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel LC-4 AUX-UPS",
        "WBS": "1.4.3.5.3.12",
        "childsId": [
            1489,
            1490,
            1491,
            1492,
            1493
        ],
        "idp": 1293
    },
    {
        "id": 1489,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de un Breaker - Marca  Scard D CAT No Q06-12L100DS",
        "WBS": "1.4.3.5.3.12.1",
        "childsId": [],
        "idp": 1488
    },
    {
        "id": 1490,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "llegada de Cables AC",
        "WBS": "1.4.3.5.3.12.2",
        "childsId": [],
        "idp": 1488
    },
    {
        "id": 1491,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras",
        "WBS": "1.4.3.5.3.12.3",
        "childsId": [],
        "idp": 1488
    },
    {
        "id": 1492,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.4.3.5.3.12.4",
        "childsId": [],
        "idp": 1488
    },
    {
        "id": 1493,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de cableado a Breaker de Reserva",
        "WBS": "1.4.3.5.3.12.5",
        "childsId": [],
        "idp": 1488
    },
    {
        "id": 1494,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.3.5.4",
        "childsId": [
            1495,
            1496,
            1497,
            1498
        ],
        "idp": 1276
    },
    {
        "id": 1495,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación y fijación de tubería Conduit",
        "WBS": "1.4.3.5.4.1",
        "childsId": [],
        "idp": 1494
    },
    {
        "id": 1496,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.3.5.4.2",
        "childsId": [],
        "idp": 1494
    },
    {
        "id": 1497,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforación de muro en posición",
        "WBS": "1.4.3.5.4.3",
        "childsId": [],
        "idp": 1494
    },
    {
        "id": 1498,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.3.5.4.4",
        "childsId": [],
        "idp": 1494
    },
    {
        "id": 1499,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construccion de Patio de llaves Push-Back",
        "WBS": "1.4.3.5.5",
        "childsId": [],
        "idp": 1276
    },
    {
        "id": 1500,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cuajone",
        "WBS": "1.4.4",
        "childsId": [
            1501
        ],
        "idp": 405
    },
    {
        "id": 1501,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Botiflaca",
        "WBS": "1.4.4.1",
        "childsId": [
            1502,
            1734
        ],
        "idp": 1500
    },
    {
        "id": 1502,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Edificio de Sub-Estación",
        "WBS": "1.4.4.1.1",
        "childsId": [
            1503,
            1509,
            1519,
            1728,
            1733
        ],
        "idp": 1501
    },
    {
        "id": 1503,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Montaje",
        "WBS": "1.4.4.1.1.1",
        "childsId": [
            1504,
            1505,
            1506,
            1507,
            1508
        ],
        "idp": 1502
    },
    {
        "id": 1504,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de tableros y cables a obra.",
        "WBS": "1.4.4.1.1.1.1",
        "childsId": [],
        "idp": 1503
    },
    {
        "id": 1505,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Tableros",
        "WBS": "1.4.4.1.1.1.2",
        "childsId": [],
        "idp": 1503
    },
    {
        "id": 1506,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado de Bandejas y tuberías a obra",
        "WBS": "1.4.4.1.1.1.3",
        "childsId": [],
        "idp": 1503
    },
    {
        "id": 1507,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Bandejas portacables de 25m",
        "WBS": "1.4.4.1.1.1.4",
        "childsId": [],
        "idp": 1503
    },
    {
        "id": 1508,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Conduit",
        "WBS": "1.4.4.1.1.1.5",
        "childsId": [],
        "idp": 1503
    },
    {
        "id": 1509,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado",
        "WBS": "1.4.4.1.1.2",
        "childsId": [
            1510,
            1513,
            1516
        ],
        "idp": 1502
    },
    {
        "id": 1510,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Tableros de Señal",
        "WBS": "1.4.4.1.1.2.1",
        "childsId": [
            1511,
            1512
        ],
        "idp": 1509
    },
    {
        "id": 1511,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.4.1.1.2.1.1",
        "childsId": [],
        "idp": 1510
    },
    {
        "id": 1512,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.4.1.1.2.1.2",
        "childsId": [],
        "idp": 1510
    },
    {
        "id": 1513,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - SSAA",
        "WBS": "1.4.4.1.1.2.2",
        "childsId": [
            1514,
            1515
        ],
        "idp": 1509
    },
    {
        "id": 1514,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.4.1.1.2.2.1",
        "childsId": [],
        "idp": 1513
    },
    {
        "id": 1515,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.4.1.1.2.2.2",
        "childsId": [],
        "idp": 1513
    },
    {
        "id": 1516,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Registrador de Fallas - Comunicaciones y Alarmas",
        "WBS": "1.4.4.1.1.2.3",
        "childsId": [
            1517,
            1518
        ],
        "idp": 1509
    },
    {
        "id": 1517,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de Rutas de tendido",
        "WBS": "1.4.4.1.1.2.3.1",
        "childsId": [],
        "idp": 1516
    },
    {
        "id": 1518,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido, corte, peinado y fijación",
        "WBS": "1.4.4.1.1.2.3.2",
        "childsId": [],
        "idp": 1516
    },
    {
        "id": 1519,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acondicionamiento de tableros",
        "WBS": "1.4.4.1.1.3",
        "childsId": [
            1520,
            1575,
            1586,
            1626,
            1696,
            1700,
            1707,
            1714,
            1721
        ],
        "idp": 1502
    },
    {
        "id": 1520,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel Duplex",
        "WBS": "1.4.4.1.1.3.1",
        "childsId": [
            1521,
            1523,
            1531,
            1533,
            1541,
            1543,
            1545,
            1547,
            1555,
            1557,
            1565,
            1567
        ],
        "idp": 1519
    },
    {
        "id": 1521,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 1F - (L-1382 Moquegua ) - (Control OCB 852)",
        "WBS": "1.4.4.1.1.3.1.1",
        "childsId": [
            1522
        ],
        "idp": 1520
    },
    {
        "id": 1522,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.1.1.1",
        "childsId": [],
        "idp": 1521
    },
    {
        "id": 1523,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 1R - (L-1382 Moquegua ) - (Protección OCB 852)",
        "WBS": "1.4.4.1.1.3.1.2",
        "childsId": [
            1524,
            1525,
            1526,
            1527,
            1528,
            1529,
            1530
        ],
        "idp": 1520
    },
    {
        "id": 1524,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.1.2.1",
        "childsId": [],
        "idp": 1523
    },
    {
        "id": 1525,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.1.2.2",
        "childsId": [],
        "idp": 1523
    },
    {
        "id": 1526,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.1.2.3",
        "childsId": [],
        "idp": 1523
    },
    {
        "id": 1527,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.1.2.4",
        "childsId": [],
        "idp": 1523
    },
    {
        "id": 1528,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.1.2.5",
        "childsId": [],
        "idp": 1523
    },
    {
        "id": 1529,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.1.2.6",
        "childsId": [],
        "idp": 1523
    },
    {
        "id": 1530,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.1.2.7",
        "childsId": [],
        "idp": 1523
    },
    {
        "id": 1531,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 8F - (L-1386/1 PUSH PACH) - (Control OCB 854)",
        "WBS": "1.4.4.1.1.3.1.3",
        "childsId": [
            1532
        ],
        "idp": 1520
    },
    {
        "id": 1532,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.1.3.1",
        "childsId": [],
        "idp": 1531
    },
    {
        "id": 1533,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 8R - (L-1386/1 PUSH PACH) - (Protección OCB 854)",
        "WBS": "1.4.4.1.1.3.1.4",
        "childsId": [
            1534,
            1535,
            1536,
            1537,
            1538,
            1539,
            1540
        ],
        "idp": 1520
    },
    {
        "id": 1534,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.1.4.1",
        "childsId": [],
        "idp": 1533
    },
    {
        "id": 1535,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.1.4.2",
        "childsId": [],
        "idp": 1533
    },
    {
        "id": 1536,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.1.4.3",
        "childsId": [],
        "idp": 1533
    },
    {
        "id": 1537,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.1.4.4",
        "childsId": [],
        "idp": 1533
    },
    {
        "id": 1538,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.1.4.5",
        "childsId": [],
        "idp": 1533
    },
    {
        "id": 1539,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.1.4.6",
        "childsId": [],
        "idp": 1533
    },
    {
        "id": 1540,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.1.4.7",
        "childsId": [],
        "idp": 1533
    },
    {
        "id": 1541,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 2F - 138kV BUS & TRANSF. T1  - (Control CS 842)",
        "WBS": "1.4.4.1.1.3.1.5",
        "childsId": [
            1542
        ],
        "idp": 1520
    },
    {
        "id": 1542,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.1.5.1",
        "childsId": [],
        "idp": 1541
    },
    {
        "id": 1543,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 3F - 69kV MINE LOOP & TRANSF. T4  - (Control CS 848)",
        "WBS": "1.4.4.1.1.3.1.6",
        "childsId": [
            1544
        ],
        "idp": 1520
    },
    {
        "id": 1544,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.1.6.1",
        "childsId": [],
        "idp": 1543
    },
    {
        "id": 1545,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 4F - 69kV HYDRO LINE & TRANSF. T5  - (Control CS 8410)",
        "WBS": "1.4.4.1.1.3.1.7",
        "childsId": [
            1546
        ],
        "idp": 1520
    },
    {
        "id": 1546,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.1.7.1",
        "childsId": [],
        "idp": 1545
    },
    {
        "id": 1547,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 3R - 138kV BUS & TRANSF. T1  - (Protección CS 842) - (Prot. Dif de Barra 69KV)",
        "WBS": "1.4.4.1.1.3.1.8",
        "childsId": [
            1548,
            1549,
            1550,
            1551,
            1552,
            1553,
            1554
        ],
        "idp": 1520
    },
    {
        "id": 1548,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.1.8.1",
        "childsId": [],
        "idp": 1547
    },
    {
        "id": 1549,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.1.8.2",
        "childsId": [],
        "idp": 1547
    },
    {
        "id": 1550,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.1.8.3",
        "childsId": [],
        "idp": 1547
    },
    {
        "id": 1551,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.1.8.4",
        "childsId": [],
        "idp": 1547
    },
    {
        "id": 1552,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.1.8.5",
        "childsId": [],
        "idp": 1547
    },
    {
        "id": 1553,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.1.8.6",
        "childsId": [],
        "idp": 1547
    },
    {
        "id": 1554,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.1.8.7",
        "childsId": [],
        "idp": 1547
    },
    {
        "id": 1555,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 6F - 138kV TRANSFORMER T2  - (Control CS 844)",
        "WBS": "1.4.4.1.1.3.1.9",
        "childsId": [
            1556
        ],
        "idp": 1520
    },
    {
        "id": 1556,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.1.9.1",
        "childsId": [],
        "idp": 1555
    },
    {
        "id": 1557,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 6R - 138kV TRANSFORMER T2  - (Protección CS 844)",
        "WBS": "1.4.4.1.1.3.1.10",
        "childsId": [
            1558,
            1559,
            1560,
            1561,
            1562,
            1563,
            1564
        ],
        "idp": 1520
    },
    {
        "id": 1558,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.1.10.1",
        "childsId": [],
        "idp": 1557
    },
    {
        "id": 1559,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.1.10.2",
        "childsId": [],
        "idp": 1557
    },
    {
        "id": 1560,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.1.10.3",
        "childsId": [],
        "idp": 1557
    },
    {
        "id": 1561,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.1.10.4",
        "childsId": [],
        "idp": 1557
    },
    {
        "id": 1562,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.1.10.5",
        "childsId": [],
        "idp": 1557
    },
    {
        "id": 1563,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.1.10.6",
        "childsId": [],
        "idp": 1557
    },
    {
        "id": 1564,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.1.10.7",
        "childsId": [],
        "idp": 1557
    },
    {
        "id": 1565,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 7F - 138kV TRANSFORMER T3  - (Control CS 846)",
        "WBS": "1.4.4.1.1.3.1.11",
        "childsId": [
            1566
        ],
        "idp": 1520
    },
    {
        "id": 1566,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.1.11.1",
        "childsId": [],
        "idp": 1565
    },
    {
        "id": 1567,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Panel 4R - 138kV TRANSFORMER T3  - (Protección CS 846)",
        "WBS": "1.4.4.1.1.3.1.12",
        "childsId": [
            1568,
            1569,
            1570,
            1571,
            1572,
            1573,
            1574
        ],
        "idp": 1520
    },
    {
        "id": 1568,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.1.12.1",
        "childsId": [],
        "idp": 1567
    },
    {
        "id": 1569,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.1.12.2",
        "childsId": [],
        "idp": 1567
    },
    {
        "id": 1570,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.1.12.3",
        "childsId": [],
        "idp": 1567
    },
    {
        "id": 1571,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.1.12.4",
        "childsId": [],
        "idp": 1567
    },
    {
        "id": 1572,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.1.12.5",
        "childsId": [],
        "idp": 1567
    },
    {
        "id": 1573,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.1.12.6",
        "childsId": [],
        "idp": 1567
    },
    {
        "id": 1574,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.1.12.7",
        "childsId": [],
        "idp": 1567
    },
    {
        "id": 1575,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "LT138-1 Moquegua - Botiflaca",
        "WBS": "1.4.4.1.1.3.2",
        "childsId": [
            1576,
            1578
        ],
        "idp": 1519
    },
    {
        "id": 1576,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero E1 + W1 (Control HCB 856)",
        "WBS": "1.4.4.1.1.3.2.1",
        "childsId": [
            1577
        ],
        "idp": 1575
    },
    {
        "id": 1577,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Contactos de señal (La señal se tomara de campo)",
        "WBS": "1.4.4.1.1.3.2.1.1",
        "childsId": [],
        "idp": 1576
    },
    {
        "id": 1578,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero E2 + R1 (Protección HCB 856)",
        "WBS": "1.4.4.1.1.3.2.2",
        "childsId": [
            1579,
            1580,
            1581,
            1582,
            1583,
            1584,
            1585
        ],
        "idp": 1575
    },
    {
        "id": 1579,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.2.2.1",
        "childsId": [],
        "idp": 1578
    },
    {
        "id": 1580,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.2.2.2",
        "childsId": [],
        "idp": 1578
    },
    {
        "id": 1581,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.2.2.3",
        "childsId": [],
        "idp": 1578
    },
    {
        "id": 1582,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.2.2.4",
        "childsId": [],
        "idp": 1578
    },
    {
        "id": 1583,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.2.2.5",
        "childsId": [],
        "idp": 1578
    },
    {
        "id": 1584,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.2.2.6",
        "childsId": [],
        "idp": 1578
    },
    {
        "id": 1585,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.2.2.7",
        "childsId": [],
        "idp": 1578
    },
    {
        "id": 1586,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Barra de 13.8kV",
        "WBS": "1.4.4.1.1.3.3",
        "childsId": [
            1587,
            1597,
            1607
        ],
        "idp": 1519
    },
    {
        "id": 1587,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "13.8 KV BUS N 1",
        "WBS": "1.4.4.1.1.3.3.1",
        "childsId": [
            1588
        ],
        "idp": 1586
    },
    {
        "id": 1588,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "MAIN OCB 862 TRANSFORMER T1",
        "WBS": "1.4.4.1.1.3.3.1.1",
        "childsId": [
            1589,
            1590,
            1591,
            1592,
            1593,
            1594,
            1595,
            1596
        ],
        "idp": 1587
    },
    {
        "id": 1589,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.3.1.1.1",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1590,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.3.1.1.2",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1591,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.3.1.1.3",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1592,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.3.1.1.4",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1593,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.3.1.1.5",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1594,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.3.1.1.6",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1595,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.3.1.1.7",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1596,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.3.1.1.8",
        "childsId": [],
        "idp": 1588
    },
    {
        "id": 1597,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "13.8 KV BUS N 2",
        "WBS": "1.4.4.1.1.3.3.2",
        "childsId": [
            1598
        ],
        "idp": 1586
    },
    {
        "id": 1598,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "MAIN OCB 864 TRANSFORMER T2",
        "WBS": "1.4.4.1.1.3.3.2.1",
        "childsId": [
            1599,
            1600,
            1601,
            1602,
            1603,
            1604,
            1605,
            1606
        ],
        "idp": 1597
    },
    {
        "id": 1599,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.3.2.1.1",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1600,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.3.2.1.2",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1601,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.3.2.1.3",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1602,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.3.2.1.4",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1603,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.3.2.1.5",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1604,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.3.2.1.6",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1605,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.3.2.1.7",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1606,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.3.2.1.8",
        "childsId": [],
        "idp": 1598
    },
    {
        "id": 1607,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "13.8 KV BUS N 3",
        "WBS": "1.4.4.1.1.3.3.3",
        "childsId": [
            1608,
            1617
        ],
        "idp": 1586
    },
    {
        "id": 1608,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interruptor de entrada (VCB-866)",
        "WBS": "1.4.4.1.1.3.3.3.1",
        "childsId": [
            1609,
            1610,
            1611,
            1612,
            1613,
            1614,
            1615,
            1616
        ],
        "idp": 1607
    },
    {
        "id": 1609,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.3.3.1.1",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1610,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.3.3.1.2",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1611,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.3.3.1.3",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1612,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.3.3.1.4",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1613,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.3.3.1.5",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1614,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.3.3.1.6",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1615,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.3.3.1.7",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1616,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.3.3.1.8",
        "childsId": [],
        "idp": 1608
    },
    {
        "id": 1617,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interruptor Unión de Barras B-C TIE (VCB-874)",
        "WBS": "1.4.4.1.1.3.3.3.2",
        "childsId": [
            1618,
            1619,
            1620,
            1621,
            1622,
            1623,
            1624,
            1625
        ],
        "idp": 1607
    },
    {
        "id": 1618,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.3.3.2.1",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1619,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.3.3.2.2",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1620,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.3.3.2.3",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1621,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.3.3.2.4",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1622,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.3.3.2.5",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1623,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.3.3.2.6",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1624,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.3.3.2.7",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1625,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.3.3.2.8",
        "childsId": [],
        "idp": 1617
    },
    {
        "id": 1626,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Barra de 6.9kV",
        "WBS": "1.4.4.1.1.3.4",
        "childsId": [
            1627,
            1645,
            1655
        ],
        "idp": 1519
    },
    {
        "id": 1627,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "6.9 KV BUS N04",
        "WBS": "1.4.4.1.1.3.4.1",
        "childsId": [
            1628,
            1637
        ],
        "idp": 1626
    },
    {
        "id": 1628,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Main ACB N-868 (BT1) Tablero de Control y protección",
        "WBS": "1.4.4.1.1.3.4.1.1",
        "childsId": [
            1629,
            1630,
            1631,
            1632,
            1633,
            1634,
            1635,
            1636
        ],
        "idp": 1627
    },
    {
        "id": 1629,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.1.1.1",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1630,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.1.1.2",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1631,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.1.1.3",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1632,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.1.1.4",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1633,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.4.1.1.5",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1634,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.1.1.6",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1635,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.1.1.7",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1636,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.1.1.8",
        "childsId": [],
        "idp": 1628
    },
    {
        "id": 1637,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "BUS TIE ACB 876 (TIE BUS 4 - 5)",
        "WBS": "1.4.4.1.1.3.4.1.2",
        "childsId": [
            1638,
            1639,
            1640,
            1641,
            1642,
            1643,
            1644
        ],
        "idp": 1627
    },
    {
        "id": 1638,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.1.2.1",
        "childsId": [],
        "idp": 1637
    },
    {
        "id": 1639,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.1.2.2",
        "childsId": [],
        "idp": 1637
    },
    {
        "id": 1640,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.1.2.3",
        "childsId": [],
        "idp": 1637
    },
    {
        "id": 1641,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.1.2.4",
        "childsId": [],
        "idp": 1637
    },
    {
        "id": 1642,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.1.2.5",
        "childsId": [],
        "idp": 1637
    },
    {
        "id": 1643,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.1.2.6",
        "childsId": [],
        "idp": 1637
    },
    {
        "id": 1644,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.1.2.7",
        "childsId": [],
        "idp": 1637
    },
    {
        "id": 1645,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "6.9 KV BUS N05",
        "WBS": "1.4.4.1.1.3.4.2",
        "childsId": [
            1646
        ],
        "idp": 1626
    },
    {
        "id": 1646,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Main ACB N-8610 Transformer -T2 - Tablero de Control y protección",
        "WBS": "1.4.4.1.1.3.4.2.1",
        "childsId": [
            1647,
            1648,
            1649,
            1650,
            1651,
            1652,
            1653,
            1654
        ],
        "idp": 1645
    },
    {
        "id": 1647,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.2.1.1",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1648,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.2.1.2",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1649,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.2.1.3",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1650,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.2.1.4",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1651,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.4.2.1.5",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1652,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.2.1.6",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1653,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.2.1.7",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1654,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.2.1.8",
        "childsId": [],
        "idp": 1646
    },
    {
        "id": 1655,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "6.9 KV Power/Vac Switchgear",
        "WBS": "1.4.4.1.1.3.4.3",
        "childsId": [
            1656,
            1664,
            1672,
            1680,
            1688
        ],
        "idp": 1626
    },
    {
        "id": 1656,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interruptor Unión Barras B-C1 (VCB-878)",
        "WBS": "1.4.4.1.1.3.4.3.1",
        "childsId": [
            1657,
            1658,
            1659,
            1660,
            1661,
            1662,
            1663
        ],
        "idp": 1655
    },
    {
        "id": 1657,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.3.1.1",
        "childsId": [],
        "idp": 1656
    },
    {
        "id": 1658,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.3.1.2",
        "childsId": [],
        "idp": 1656
    },
    {
        "id": 1659,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.3.1.3",
        "childsId": [],
        "idp": 1656
    },
    {
        "id": 1660,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.3.1.4",
        "childsId": [],
        "idp": 1656
    },
    {
        "id": 1661,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.3.1.5",
        "childsId": [],
        "idp": 1656
    },
    {
        "id": 1662,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.3.1.6",
        "childsId": [],
        "idp": 1656
    },
    {
        "id": 1663,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.3.1.7",
        "childsId": [],
        "idp": 1656
    },
    {
        "id": 1664,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "BUS TIE ACB 876 (TIE BUS 4 - 5)",
        "WBS": "1.4.4.1.1.3.4.3.2",
        "childsId": [
            1665,
            1666,
            1667,
            1668,
            1669,
            1670,
            1671
        ],
        "idp": 1655
    },
    {
        "id": 1665,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.3.2.1",
        "childsId": [],
        "idp": 1664
    },
    {
        "id": 1666,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.3.2.2",
        "childsId": [],
        "idp": 1664
    },
    {
        "id": 1667,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.3.2.3",
        "childsId": [],
        "idp": 1664
    },
    {
        "id": 1668,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.3.2.4",
        "childsId": [],
        "idp": 1664
    },
    {
        "id": 1669,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.3.2.5",
        "childsId": [],
        "idp": 1664
    },
    {
        "id": 1670,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.3.2.6",
        "childsId": [],
        "idp": 1664
    },
    {
        "id": 1671,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.3.2.7",
        "childsId": [],
        "idp": 1664
    },
    {
        "id": 1672,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interruptor Unión Barras C1-C2 (VCB-879)",
        "WBS": "1.4.4.1.1.3.4.3.3",
        "childsId": [
            1673,
            1674,
            1675,
            1676,
            1677,
            1678,
            1679
        ],
        "idp": 1655
    },
    {
        "id": 1673,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.3.3.1",
        "childsId": [],
        "idp": 1672
    },
    {
        "id": 1674,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.3.3.2",
        "childsId": [],
        "idp": 1672
    },
    {
        "id": 1675,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.3.3.3",
        "childsId": [],
        "idp": 1672
    },
    {
        "id": 1676,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.3.3.4",
        "childsId": [],
        "idp": 1672
    },
    {
        "id": 1677,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.3.3.5",
        "childsId": [],
        "idp": 1672
    },
    {
        "id": 1678,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.3.3.6",
        "childsId": [],
        "idp": 1672
    },
    {
        "id": 1679,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.3.3.7",
        "childsId": [],
        "idp": 1672
    },
    {
        "id": 1680,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interruptor Unión Barras C1-C2 (VCB-879)",
        "WBS": "1.4.4.1.1.3.4.3.4",
        "childsId": [
            1681,
            1682,
            1683,
            1684,
            1685,
            1686,
            1687
        ],
        "idp": 1655
    },
    {
        "id": 1681,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.3.4.1",
        "childsId": [],
        "idp": 1680
    },
    {
        "id": 1682,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.3.4.2",
        "childsId": [],
        "idp": 1680
    },
    {
        "id": 1683,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.3.4.3",
        "childsId": [],
        "idp": 1680
    },
    {
        "id": 1684,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.3.4.4",
        "childsId": [],
        "idp": 1680
    },
    {
        "id": 1685,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.3.4.5",
        "childsId": [],
        "idp": 1680
    },
    {
        "id": 1686,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.3.4.6",
        "childsId": [],
        "idp": 1680
    },
    {
        "id": 1687,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.3.4.7",
        "childsId": [],
        "idp": 1680
    },
    {
        "id": 1688,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Switch SE Botiflaca TIE -VCB 883 - Interruptor Union de barras A-TIE",
        "WBS": "1.4.4.1.1.3.4.3.5",
        "childsId": [
            1689,
            1690,
            1691,
            1692,
            1693,
            1694,
            1695
        ],
        "idp": 1655
    },
    {
        "id": 1689,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.4.3.5.1",
        "childsId": [],
        "idp": 1688
    },
    {
        "id": 1690,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.4.3.5.2",
        "childsId": [],
        "idp": 1688
    },
    {
        "id": 1691,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Repetidores",
        "WBS": "1.4.4.1.1.3.4.3.5.3",
        "childsId": [],
        "idp": 1688
    },
    {
        "id": 1692,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Térmicos",
        "WBS": "1.4.4.1.1.3.4.3.5.4",
        "childsId": [],
        "idp": 1688
    },
    {
        "id": 1693,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.4.3.5.5",
        "childsId": [],
        "idp": 1688
    },
    {
        "id": 1694,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.4.3.5.6",
        "childsId": [],
        "idp": 1688
    },
    {
        "id": 1695,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.4.3.5.7",
        "childsId": [],
        "idp": 1688
    },
    {
        "id": 1696,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero de Comunicaciones",
        "WBS": "1.4.4.1.1.3.5",
        "childsId": [
            1697,
            1698,
            1699
        ],
        "idp": 1519
    },
    {
        "id": 1697,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y crimpiado al Path panel de Cables de Red",
        "WBS": "1.4.4.1.1.3.5.1",
        "childsId": [],
        "idp": 1696
    },
    {
        "id": 1698,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Peinado de Path Cord de Path Panel al Switch SWT9-6,  Puerto P19",
        "WBS": "1.4.4.1.1.3.5.2",
        "childsId": [],
        "idp": 1696
    },
    {
        "id": 1699,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulación de cableado",
        "WBS": "1.4.4.1.1.3.5.3",
        "childsId": [],
        "idp": 1696
    },
    {
        "id": 1700,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "SCADA GAB9-01 - Tablero Sistema SCADA",
        "WBS": "1.4.4.1.1.3.6",
        "childsId": [
            1701,
            1702,
            1703,
            1704,
            1705,
            1706
        ],
        "idp": 1519
    },
    {
        "id": 1701,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Adecuación del ducto de ingreso de cables",
        "WBS": "1.4.4.1.1.3.6.1",
        "childsId": [],
        "idp": 1700
    },
    {
        "id": 1702,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Riel DIN",
        "WBS": "1.4.4.1.1.3.6.2",
        "childsId": [],
        "idp": 1700
    },
    {
        "id": 1703,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Borneras",
        "WBS": "1.4.4.1.1.3.6.3",
        "childsId": [],
        "idp": 1700
    },
    {
        "id": 1704,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.6.4",
        "childsId": [],
        "idp": 1700
    },
    {
        "id": 1705,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.6.5",
        "childsId": [],
        "idp": 1700
    },
    {
        "id": 1706,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.6.6",
        "childsId": [],
        "idp": 1700
    },
    {
        "id": 1707,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Registrador de Fallas RF1",
        "WBS": "1.4.4.1.1.3.7",
        "childsId": [
            1708,
            1709,
            1710,
            1711,
            1712,
            1713
        ],
        "idp": 1519
    },
    {
        "id": 1708,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.4.1.1.3.7.1",
        "childsId": [],
        "idp": 1707
    },
    {
        "id": 1709,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.4.1.1.3.7.2",
        "childsId": [],
        "idp": 1707
    },
    {
        "id": 1710,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.4.1.1.3.7.3",
        "childsId": [],
        "idp": 1707
    },
    {
        "id": 1711,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.7.4",
        "childsId": [],
        "idp": 1707
    },
    {
        "id": 1712,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.7.5",
        "childsId": [],
        "idp": 1707
    },
    {
        "id": 1713,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.7.6",
        "childsId": [],
        "idp": 1707
    },
    {
        "id": 1714,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Registrador de Fallas RF2",
        "WBS": "1.4.4.1.1.3.8",
        "childsId": [
            1715,
            1716,
            1717,
            1718,
            1719,
            1720
        ],
        "idp": 1519
    },
    {
        "id": 1715,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.4.1.1.3.8.1",
        "childsId": [],
        "idp": 1714
    },
    {
        "id": 1716,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.4.1.1.3.8.2",
        "childsId": [],
        "idp": 1714
    },
    {
        "id": 1717,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.4.1.1.3.8.3",
        "childsId": [],
        "idp": 1714
    },
    {
        "id": 1718,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.8.4",
        "childsId": [],
        "idp": 1714
    },
    {
        "id": 1719,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.8.5",
        "childsId": [],
        "idp": 1714
    },
    {
        "id": 1720,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.8.6",
        "childsId": [],
        "idp": 1714
    },
    {
        "id": 1721,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero Registrador de Fallas RF3",
        "WBS": "1.4.4.1.1.3.9",
        "childsId": [
            1722,
            1723,
            1724,
            1725,
            1726,
            1727
        ],
        "idp": 1519
    },
    {
        "id": 1722,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de SSAA",
        "WBS": "1.4.4.1.1.3.9.1",
        "childsId": [],
        "idp": 1721
    },
    {
        "id": 1723,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de cables de Red",
        "WBS": "1.4.4.1.1.3.9.2",
        "childsId": [],
        "idp": 1721
    },
    {
        "id": 1724,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso, peinado y conexionado de Cable Coaxial GPS",
        "WBS": "1.4.4.1.1.3.9.3",
        "childsId": [],
        "idp": 1721
    },
    {
        "id": 1725,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.1.3.9.4",
        "childsId": [],
        "idp": 1721
    },
    {
        "id": 1726,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.1.3.9.5",
        "childsId": [],
        "idp": 1721
    },
    {
        "id": 1727,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.1.3.9.6",
        "childsId": [],
        "idp": 1721
    },
    {
        "id": 1728,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de Antena GPS",
        "WBS": "1.4.4.1.1.4",
        "childsId": [
            1729,
            1730,
            1731,
            1732
        ],
        "idp": 1502
    },
    {
        "id": 1729,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación y fijación de tubería Conduit",
        "WBS": "1.4.4.1.1.4.1",
        "childsId": [],
        "idp": 1728
    },
    {
        "id": 1730,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de cable desde Registrador hasta la ubicacíon de GPSs",
        "WBS": "1.4.4.1.1.4.2",
        "childsId": [],
        "idp": 1728
    },
    {
        "id": 1731,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Perforación de la pared del Edificio",
        "WBS": "1.4.4.1.1.4.3",
        "childsId": [],
        "idp": 1728
    },
    {
        "id": 1732,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fijación y conexionado de Antena",
        "WBS": "1.4.4.1.1.4.4",
        "childsId": [],
        "idp": 1728
    },
    {
        "id": 1733,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construcción de Edificio de Sub-estación",
        "WBS": "1.4.4.1.1.5",
        "childsId": [],
        "idp": 1502
    },
    {
        "id": 1734,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Patio de llaves",
        "WBS": "1.4.4.1.2",
        "childsId": [
            1735,
            1751,
            1800
        ],
        "idp": 1501
    },
    {
        "id": 1735,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tendido de Cables de Patio",
        "WBS": "1.4.4.1.2.1",
        "childsId": [
            1736,
            1739,
            1742,
            1745,
            1748
        ],
        "idp": 1734
    },
    {
        "id": 1736,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto BT4 - BT5",
        "WBS": "1.4.4.1.2.1.1",
        "childsId": [
            1737,
            1738
        ],
        "idp": 1735
    },
    {
        "id": 1737,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.1.1.1",
        "childsId": [],
        "idp": 1736
    },
    {
        "id": 1738,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables hasta el Buzon",
        "WBS": "1.4.4.1.2.1.1.2",
        "childsId": [],
        "idp": 1736
    },
    {
        "id": 1739,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto de BT1",
        "WBS": "1.4.4.1.2.1.2",
        "childsId": [
            1740,
            1741
        ],
        "idp": 1735
    },
    {
        "id": 1740,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.1.2.1",
        "childsId": [],
        "idp": 1739
    },
    {
        "id": 1741,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables hasta el Buzon",
        "WBS": "1.4.4.1.2.1.2.2",
        "childsId": [],
        "idp": 1739
    },
    {
        "id": 1742,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto de BT2",
        "WBS": "1.4.4.1.2.1.3",
        "childsId": [
            1743,
            1744
        ],
        "idp": 1735
    },
    {
        "id": 1743,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.1.3.1",
        "childsId": [],
        "idp": 1742
    },
    {
        "id": 1744,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables hasta el Buzon",
        "WBS": "1.4.4.1.2.1.3.2",
        "childsId": [],
        "idp": 1742
    },
    {
        "id": 1745,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto de BT3",
        "WBS": "1.4.4.1.2.1.4",
        "childsId": [
            1746,
            1747
        ],
        "idp": 1735
    },
    {
        "id": 1746,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.1.4.1",
        "childsId": [],
        "idp": 1745
    },
    {
        "id": 1747,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables hasta el Buzon",
        "WBS": "1.4.4.1.2.1.4.2",
        "childsId": [],
        "idp": 1745
    },
    {
        "id": 1748,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ducto de Enersur",
        "WBS": "1.4.4.1.2.1.5",
        "childsId": [
            1749,
            1750
        ],
        "idp": 1735
    },
    {
        "id": 1749,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.1.5.1",
        "childsId": [],
        "idp": 1748
    },
    {
        "id": 1750,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables hasta el Buzon",
        "WBS": "1.4.4.1.2.1.5.2",
        "childsId": [],
        "idp": 1748
    },
    {
        "id": 1751,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acondicionamiento y cableado de tableros",
        "WBS": "1.4.4.1.2.2",
        "childsId": [
            1752,
            1758,
            1764,
            1770,
            1776,
            1782,
            1788,
            1794
        ],
        "idp": 1734
    },
    {
        "id": 1752,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-852",
        "WBS": "1.4.4.1.2.2.1",
        "childsId": [
            1753,
            1754,
            1755,
            1756,
            1757
        ],
        "idp": 1751
    },
    {
        "id": 1753,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.1.1",
        "childsId": [],
        "idp": 1752
    },
    {
        "id": 1754,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.1.2",
        "childsId": [],
        "idp": 1752
    },
    {
        "id": 1755,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.1.3",
        "childsId": [],
        "idp": 1752
    },
    {
        "id": 1756,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.1.4",
        "childsId": [],
        "idp": 1752
    },
    {
        "id": 1757,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.1.5",
        "childsId": [],
        "idp": 1752
    },
    {
        "id": 1758,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-854",
        "WBS": "1.4.4.1.2.2.2",
        "childsId": [
            1759,
            1760,
            1761,
            1762,
            1763
        ],
        "idp": 1751
    },
    {
        "id": 1759,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.2.1",
        "childsId": [],
        "idp": 1758
    },
    {
        "id": 1760,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.2.2",
        "childsId": [],
        "idp": 1758
    },
    {
        "id": 1761,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.2.3",
        "childsId": [],
        "idp": 1758
    },
    {
        "id": 1762,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.2.4",
        "childsId": [],
        "idp": 1758
    },
    {
        "id": 1763,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.2.5",
        "childsId": [],
        "idp": 1758
    },
    {
        "id": 1764,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "OCB-842 - BT1",
        "WBS": "1.4.4.1.2.2.3",
        "childsId": [
            1765,
            1766,
            1767,
            1768,
            1769
        ],
        "idp": 1751
    },
    {
        "id": 1765,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.3.1",
        "childsId": [],
        "idp": 1764
    },
    {
        "id": 1766,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.3.2",
        "childsId": [],
        "idp": 1764
    },
    {
        "id": 1767,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.3.3",
        "childsId": [],
        "idp": 1764
    },
    {
        "id": 1768,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.3.4",
        "childsId": [],
        "idp": 1764
    },
    {
        "id": 1769,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.3.5",
        "childsId": [],
        "idp": 1764
    },
    {
        "id": 1770,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-848",
        "WBS": "1.4.4.1.2.2.4",
        "childsId": [
            1771,
            1772,
            1773,
            1774,
            1775
        ],
        "idp": 1751
    },
    {
        "id": 1771,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.4.1",
        "childsId": [],
        "idp": 1770
    },
    {
        "id": 1772,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.4.2",
        "childsId": [],
        "idp": 1770
    },
    {
        "id": 1773,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.4.3",
        "childsId": [],
        "idp": 1770
    },
    {
        "id": 1774,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.4.4",
        "childsId": [],
        "idp": 1770
    },
    {
        "id": 1775,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.4.5",
        "childsId": [],
        "idp": 1770
    },
    {
        "id": 1776,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS8410",
        "WBS": "1.4.4.1.2.2.5",
        "childsId": [
            1777,
            1778,
            1779,
            1780,
            1781
        ],
        "idp": 1751
    },
    {
        "id": 1777,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.5.1",
        "childsId": [],
        "idp": 1776
    },
    {
        "id": 1778,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.5.2",
        "childsId": [],
        "idp": 1776
    },
    {
        "id": 1779,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.5.3",
        "childsId": [],
        "idp": 1776
    },
    {
        "id": 1780,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.5.4",
        "childsId": [],
        "idp": 1776
    },
    {
        "id": 1781,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.5.5",
        "childsId": [],
        "idp": 1776
    },
    {
        "id": 1782,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-844 - BT2",
        "WBS": "1.4.4.1.2.2.6",
        "childsId": [
            1783,
            1784,
            1785,
            1786,
            1787
        ],
        "idp": 1751
    },
    {
        "id": 1783,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.6.1",
        "childsId": [],
        "idp": 1782
    },
    {
        "id": 1784,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.6.2",
        "childsId": [],
        "idp": 1782
    },
    {
        "id": 1785,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.6.3",
        "childsId": [],
        "idp": 1782
    },
    {
        "id": 1786,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.6.4",
        "childsId": [],
        "idp": 1782
    },
    {
        "id": 1787,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.6.5",
        "childsId": [],
        "idp": 1782
    },
    {
        "id": 1788,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "CS-846 - BT3",
        "WBS": "1.4.4.1.2.2.7",
        "childsId": [
            1789,
            1790,
            1791,
            1792,
            1793
        ],
        "idp": 1751
    },
    {
        "id": 1789,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.7.1",
        "childsId": [],
        "idp": 1788
    },
    {
        "id": 1790,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.7.2",
        "childsId": [],
        "idp": 1788
    },
    {
        "id": 1791,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.7.3",
        "childsId": [],
        "idp": 1788
    },
    {
        "id": 1792,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.7.4",
        "childsId": [],
        "idp": 1788
    },
    {
        "id": 1793,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.7.5",
        "childsId": [],
        "idp": 1788
    },
    {
        "id": 1794,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "HCB-856",
        "WBS": "1.4.4.1.2.2.8",
        "childsId": [
            1795,
            1796,
            1797,
            1798,
            1799
        ],
        "idp": 1751
    },
    {
        "id": 1795,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar guía de Cable",
        "WBS": "1.4.4.1.2.2.8.1",
        "childsId": [],
        "idp": 1794
    },
    {
        "id": 1796,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pasar cables desde el Buzon al tablero",
        "WBS": "1.4.4.1.2.2.8.2",
        "childsId": [],
        "idp": 1794
    },
    {
        "id": 1797,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingreso y peinado de Cables de Control",
        "WBS": "1.4.4.1.2.2.8.3",
        "childsId": [],
        "idp": 1794
    },
    {
        "id": 1798,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado en Borneras de cable de control",
        "WBS": "1.4.4.1.2.2.8.4",
        "childsId": [],
        "idp": 1794
    },
    {
        "id": 1799,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables y Borneras y térmicos",
        "WBS": "1.4.4.1.2.2.8.5",
        "childsId": [],
        "idp": 1794
    },
    {
        "id": 1800,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de construcción Patio de Llaves ",
        "WBS": "1.4.4.1.2.3",
        "childsId": [],
        "idp": 1734
    },
    {
        "id": 1801,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comisionamiento y Puesta en marcha",
        "WBS": "1.5",
        "childsId": [
            1802,
            2162,
            2701
        ],
        "idp": 1
    },
    {
        "id": 1802,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ilo",
        "WBS": "1.5.1",
        "childsId": [
            1803,
            1982,
            2072
        ],
        "idp": 1801
    },
    {
        "id": 1803,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ilo 1",
        "WBS": "1.5.1.1",
        "childsId": [
            1804,
            1893
        ],
        "idp": 1802
    },
    {
        "id": 1804,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF1",
        "WBS": "1.5.1.1.1",
        "childsId": [
            1805,
            1809,
            1813,
            1819,
            1860,
            1874,
            1879,
            1888,
            1892
        ],
        "idp": 1803
    },
    {
        "id": 1805,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.1.1.1.1",
        "childsId": [
            1806,
            1807,
            1808
        ],
        "idp": 1804
    },
    {
        "id": 1806,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.1.1.1.1.1",
        "childsId": [],
        "idp": 1805
    },
    {
        "id": 1807,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.1.1.1.1.2",
        "childsId": [],
        "idp": 1805
    },
    {
        "id": 1808,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.1.1.1.1.3",
        "childsId": [],
        "idp": 1805
    },
    {
        "id": 1809,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.1.1.1.2",
        "childsId": [
            1810,
            1811,
            1812
        ],
        "idp": 1804
    },
    {
        "id": 1810,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.1.1.1.2.1",
        "childsId": [],
        "idp": 1809
    },
    {
        "id": 1811,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.1.1.1.2.2",
        "childsId": [],
        "idp": 1809
    },
    {
        "id": 1812,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.1.1.1.2.3",
        "childsId": [],
        "idp": 1809
    },
    {
        "id": 1813,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.1.1.1.3",
        "childsId": [
            1814,
            1815,
            1816,
            1817,
            1818
        ],
        "idp": 1804
    },
    {
        "id": 1814,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.1.1.1.3.1",
        "childsId": [],
        "idp": 1813
    },
    {
        "id": 1815,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.1.1.1.3.2",
        "childsId": [],
        "idp": 1813
    },
    {
        "id": 1816,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.1.1.1.3.3",
        "childsId": [],
        "idp": 1813
    },
    {
        "id": 1817,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.1.1.1.3.4",
        "childsId": [],
        "idp": 1813
    },
    {
        "id": 1818,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.1.1.1.3.5",
        "childsId": [],
        "idp": 1813
    },
    {
        "id": 1819,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.1.1.1.4",
        "childsId": [
            1820,
            1827,
            1831,
            1835,
            1841,
            1847
        ],
        "idp": 1804
    },
    {
        "id": 1820,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.1.1.1.4.1",
        "childsId": [
            1821,
            1822,
            1823,
            1824,
            1825,
            1826
        ],
        "idp": 1819
    },
    {
        "id": 1821,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.1.1.1.4.1.1",
        "childsId": [],
        "idp": 1820
    },
    {
        "id": 1822,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.1.1.1.4.1.2",
        "childsId": [],
        "idp": 1820
    },
    {
        "id": 1823,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.1.1.1.4.1.3",
        "childsId": [],
        "idp": 1820
    },
    {
        "id": 1824,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.1.1.1.4.1.4",
        "childsId": [],
        "idp": 1820
    },
    {
        "id": 1825,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.1.1.1.4.1.5",
        "childsId": [],
        "idp": 1820
    },
    {
        "id": 1826,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.1.1.1.4.1.6",
        "childsId": [],
        "idp": 1820
    },
    {
        "id": 1827,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.1.1.1.4.2",
        "childsId": [
            1828,
            1829,
            1830
        ],
        "idp": 1819
    },
    {
        "id": 1828,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.1.1.1.4.2.1",
        "childsId": [],
        "idp": 1827
    },
    {
        "id": 1829,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.1.1.1.4.2.2",
        "childsId": [],
        "idp": 1827
    },
    {
        "id": 1830,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.1.1.1.4.2.3",
        "childsId": [],
        "idp": 1827
    },
    {
        "id": 1831,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.1.1.1.4.3",
        "childsId": [
            1832,
            1833,
            1834
        ],
        "idp": 1819
    },
    {
        "id": 1832,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.1.1.1.4.3.1",
        "childsId": [],
        "idp": 1831
    },
    {
        "id": 1833,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.1.1.1.4.3.2",
        "childsId": [],
        "idp": 1831
    },
    {
        "id": 1834,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.1.1.1.4.3.3",
        "childsId": [],
        "idp": 1831
    },
    {
        "id": 1835,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.1.1.1.4.4",
        "childsId": [
            1836,
            1837,
            1838,
            1839,
            1840
        ],
        "idp": 1819
    },
    {
        "id": 1836,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.1.1.1.4.4.1",
        "childsId": [],
        "idp": 1835
    },
    {
        "id": 1837,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.1.1.1.4.4.2",
        "childsId": [],
        "idp": 1835
    },
    {
        "id": 1838,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.1.1.1.4.4.3",
        "childsId": [],
        "idp": 1835
    },
    {
        "id": 1839,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.1.1.1.4.4.4",
        "childsId": [],
        "idp": 1835
    },
    {
        "id": 1840,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.1.1.1.4.4.5",
        "childsId": [],
        "idp": 1835
    },
    {
        "id": 1841,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.1.1.1.4.5",
        "childsId": [
            1842,
            1843,
            1844,
            1845,
            1846
        ],
        "idp": 1819
    },
    {
        "id": 1842,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.1.1.1.4.5.1",
        "childsId": [],
        "idp": 1841
    },
    {
        "id": 1843,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.1.1.1.4.5.2",
        "childsId": [],
        "idp": 1841
    },
    {
        "id": 1844,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.1.1.1.4.5.3",
        "childsId": [],
        "idp": 1841
    },
    {
        "id": 1845,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.1.1.1.4.5.4",
        "childsId": [],
        "idp": 1841
    },
    {
        "id": 1846,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.1.1.1.4.5.5",
        "childsId": [],
        "idp": 1841
    },
    {
        "id": 1847,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.1.1.1.4.6",
        "childsId": [
            1848,
            1853
        ],
        "idp": 1819
    },
    {
        "id": 1848,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.1.1.1.4.6.1",
        "childsId": [
            1849,
            1850,
            1851,
            1852
        ],
        "idp": 1847
    },
    {
        "id": 1849,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.1.1.1.4.6.1.1",
        "childsId": [],
        "idp": 1848
    },
    {
        "id": 1850,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.1.1.4.6.1.2",
        "childsId": [],
        "idp": 1848
    },
    {
        "id": 1851,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.1.1.1.4.6.1.3",
        "childsId": [],
        "idp": 1848
    },
    {
        "id": 1852,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.1.1.1.4.6.1.4",
        "childsId": [],
        "idp": 1848
    },
    {
        "id": 1853,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.1.1.1.4.6.2",
        "childsId": [
            1854,
            1855,
            1856,
            1857,
            1858,
            1859
        ],
        "idp": 1847
    },
    {
        "id": 1854,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.1.1.1.4.6.2.1",
        "childsId": [],
        "idp": 1853
    },
    {
        "id": 1855,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.1.1.4.6.2.2",
        "childsId": [],
        "idp": 1853
    },
    {
        "id": 1856,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.1.1.1.4.6.2.3",
        "childsId": [],
        "idp": 1853
    },
    {
        "id": 1857,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.1.1.1.4.6.2.4",
        "childsId": [],
        "idp": 1853
    },
    {
        "id": 1858,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.1.1.1.4.6.2.5",
        "childsId": [],
        "idp": 1853
    },
    {
        "id": 1859,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.1.1.1.4.6.2.6",
        "childsId": [],
        "idp": 1853
    },
    {
        "id": 1860,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.1.1.1.5",
        "childsId": [
            1861,
            1868
        ],
        "idp": 1804
    },
    {
        "id": 1861,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.1.1.1.5.1",
        "childsId": [
            1862,
            1863,
            1864,
            1865,
            1866,
            1867
        ],
        "idp": 1860
    },
    {
        "id": 1862,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.1.1.1.5.1.1",
        "childsId": [],
        "idp": 1861
    },
    {
        "id": 1863,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.1.1.1.5.1.2",
        "childsId": [],
        "idp": 1861
    },
    {
        "id": 1864,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.1.1.1.5.1.3",
        "childsId": [],
        "idp": 1861
    },
    {
        "id": 1865,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.1.1.1.5.1.4",
        "childsId": [],
        "idp": 1861
    },
    {
        "id": 1866,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.1.1.1.5.1.5",
        "childsId": [],
        "idp": 1861
    },
    {
        "id": 1867,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.1.1.1.5.1.6",
        "childsId": [],
        "idp": 1861
    },
    {
        "id": 1868,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.1.1.1.5.2",
        "childsId": [
            1869,
            1870,
            1871,
            1872,
            1873
        ],
        "idp": 1860
    },
    {
        "id": 1869,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.1.1.1.5.2.1",
        "childsId": [],
        "idp": 1868
    },
    {
        "id": 1870,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.1.1.1.5.2.2",
        "childsId": [],
        "idp": 1868
    },
    {
        "id": 1871,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.1.1.1.5.2.3",
        "childsId": [],
        "idp": 1868
    },
    {
        "id": 1872,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.1.1.1.5.2.4",
        "childsId": [],
        "idp": 1868
    },
    {
        "id": 1873,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.1.1.1.5.2.5",
        "childsId": [],
        "idp": 1868
    },
    {
        "id": 1874,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.1.1.1.6",
        "childsId": [
            1875,
            1876,
            1877,
            1878
        ],
        "idp": 1804
    },
    {
        "id": 1875,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.1.1.1.6.1",
        "childsId": [],
        "idp": 1874
    },
    {
        "id": 1876,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.1.1.1.6.2",
        "childsId": [],
        "idp": 1874
    },
    {
        "id": 1877,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.1.1.1.6.3",
        "childsId": [],
        "idp": 1874
    },
    {
        "id": 1878,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.1.1.1.6.4",
        "childsId": [],
        "idp": 1874
    },
    {
        "id": 1879,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.1.1.1.7",
        "childsId": [
            1880,
            1881,
            1882,
            1883,
            1884,
            1885,
            1886,
            1887
        ],
        "idp": 1804
    },
    {
        "id": 1880,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.1.1.1.7.1",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1881,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.1.1.1.7.2",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1882,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.1.1.1.7.3",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1883,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.1.1.1.7.4",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1884,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.1.1.1.7.5",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1885,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.1.1.1.7.6",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1886,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.1.1.1.7.7",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1887,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.1.1.1.7.8",
        "childsId": [],
        "idp": 1879
    },
    {
        "id": 1888,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.1.1.1.8",
        "childsId": [
            1889,
            1890,
            1891
        ],
        "idp": 1804
    },
    {
        "id": 1889,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.1.1.1.8.1",
        "childsId": [],
        "idp": 1888
    },
    {
        "id": 1890,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.1.1.1.8.2",
        "childsId": [],
        "idp": 1888
    },
    {
        "id": 1891,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.1.1.1.8.3",
        "childsId": [],
        "idp": 1888
    },
    {
        "id": 1892,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.1.1.1.9",
        "childsId": [],
        "idp": 1804
    },
    {
        "id": 1893,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF2 (GabRF03-2)",
        "WBS": "1.5.1.1.2",
        "childsId": [
            1894,
            1898,
            1902,
            1908,
            1949,
            1963,
            1968,
            1977,
            1981
        ],
        "idp": 1803
    },
    {
        "id": 1894,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.1.1.2.1",
        "childsId": [
            1895,
            1896,
            1897
        ],
        "idp": 1893
    },
    {
        "id": 1895,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.1.1.2.1.1",
        "childsId": [],
        "idp": 1894
    },
    {
        "id": 1896,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.1.1.2.1.2",
        "childsId": [],
        "idp": 1894
    },
    {
        "id": 1897,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.1.1.2.1.3",
        "childsId": [],
        "idp": 1894
    },
    {
        "id": 1898,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.1.1.2.2",
        "childsId": [
            1899,
            1900,
            1901
        ],
        "idp": 1893
    },
    {
        "id": 1899,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.1.1.2.2.1",
        "childsId": [],
        "idp": 1898
    },
    {
        "id": 1900,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.1.1.2.2.2",
        "childsId": [],
        "idp": 1898
    },
    {
        "id": 1901,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.1.1.2.2.3",
        "childsId": [],
        "idp": 1898
    },
    {
        "id": 1902,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.1.1.2.3",
        "childsId": [
            1903,
            1904,
            1905,
            1906,
            1907
        ],
        "idp": 1893
    },
    {
        "id": 1903,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.1.1.2.3.1",
        "childsId": [],
        "idp": 1902
    },
    {
        "id": 1904,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.1.1.2.3.2",
        "childsId": [],
        "idp": 1902
    },
    {
        "id": 1905,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.1.1.2.3.3",
        "childsId": [],
        "idp": 1902
    },
    {
        "id": 1906,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.1.1.2.3.4",
        "childsId": [],
        "idp": 1902
    },
    {
        "id": 1907,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.1.1.2.3.5",
        "childsId": [],
        "idp": 1902
    },
    {
        "id": 1908,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.1.1.2.4",
        "childsId": [
            1909,
            1916,
            1920,
            1924,
            1930,
            1936
        ],
        "idp": 1893
    },
    {
        "id": 1909,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.1.1.2.4.1",
        "childsId": [
            1910,
            1911,
            1912,
            1913,
            1914,
            1915
        ],
        "idp": 1908
    },
    {
        "id": 1910,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.1.1.2.4.1.1",
        "childsId": [],
        "idp": 1909
    },
    {
        "id": 1911,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.1.1.2.4.1.2",
        "childsId": [],
        "idp": 1909
    },
    {
        "id": 1912,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.1.1.2.4.1.3",
        "childsId": [],
        "idp": 1909
    },
    {
        "id": 1913,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.1.1.2.4.1.4",
        "childsId": [],
        "idp": 1909
    },
    {
        "id": 1914,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.1.1.2.4.1.5",
        "childsId": [],
        "idp": 1909
    },
    {
        "id": 1915,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.1.1.2.4.1.6",
        "childsId": [],
        "idp": 1909
    },
    {
        "id": 1916,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.1.1.2.4.2",
        "childsId": [
            1917,
            1918,
            1919
        ],
        "idp": 1908
    },
    {
        "id": 1917,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.1.1.2.4.2.1",
        "childsId": [],
        "idp": 1916
    },
    {
        "id": 1918,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.1.1.2.4.2.2",
        "childsId": [],
        "idp": 1916
    },
    {
        "id": 1919,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.1.1.2.4.2.3",
        "childsId": [],
        "idp": 1916
    },
    {
        "id": 1920,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.1.1.2.4.3",
        "childsId": [
            1921,
            1922,
            1923
        ],
        "idp": 1908
    },
    {
        "id": 1921,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.1.1.2.4.3.1",
        "childsId": [],
        "idp": 1920
    },
    {
        "id": 1922,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.1.1.2.4.3.2",
        "childsId": [],
        "idp": 1920
    },
    {
        "id": 1923,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.1.1.2.4.3.3",
        "childsId": [],
        "idp": 1920
    },
    {
        "id": 1924,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.1.1.2.4.4",
        "childsId": [
            1925,
            1926,
            1927,
            1928,
            1929
        ],
        "idp": 1908
    },
    {
        "id": 1925,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.1.1.2.4.4.1",
        "childsId": [],
        "idp": 1924
    },
    {
        "id": 1926,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.1.1.2.4.4.2",
        "childsId": [],
        "idp": 1924
    },
    {
        "id": 1927,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.1.1.2.4.4.3",
        "childsId": [],
        "idp": 1924
    },
    {
        "id": 1928,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.1.1.2.4.4.4",
        "childsId": [],
        "idp": 1924
    },
    {
        "id": 1929,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.1.1.2.4.4.5",
        "childsId": [],
        "idp": 1924
    },
    {
        "id": 1930,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.1.1.2.4.5",
        "childsId": [
            1931,
            1932,
            1933,
            1934,
            1935
        ],
        "idp": 1908
    },
    {
        "id": 1931,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.1.1.2.4.5.1",
        "childsId": [],
        "idp": 1930
    },
    {
        "id": 1932,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.1.1.2.4.5.2",
        "childsId": [],
        "idp": 1930
    },
    {
        "id": 1933,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.1.1.2.4.5.3",
        "childsId": [],
        "idp": 1930
    },
    {
        "id": 1934,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.1.1.2.4.5.4",
        "childsId": [],
        "idp": 1930
    },
    {
        "id": 1935,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.1.1.2.4.5.5",
        "childsId": [],
        "idp": 1930
    },
    {
        "id": 1936,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.1.1.2.4.6",
        "childsId": [
            1937,
            1942
        ],
        "idp": 1908
    },
    {
        "id": 1937,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.1.1.2.4.6.1",
        "childsId": [
            1938,
            1939,
            1940,
            1941
        ],
        "idp": 1936
    },
    {
        "id": 1938,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.1.1.2.4.6.1.1",
        "childsId": [],
        "idp": 1937
    },
    {
        "id": 1939,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.1.2.4.6.1.2",
        "childsId": [],
        "idp": 1937
    },
    {
        "id": 1940,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.1.1.2.4.6.1.3",
        "childsId": [],
        "idp": 1937
    },
    {
        "id": 1941,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.1.1.2.4.6.1.4",
        "childsId": [],
        "idp": 1937
    },
    {
        "id": 1942,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.1.1.2.4.6.2",
        "childsId": [
            1943,
            1944,
            1945,
            1946,
            1947,
            1948
        ],
        "idp": 1936
    },
    {
        "id": 1943,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.1.1.2.4.6.2.1",
        "childsId": [],
        "idp": 1942
    },
    {
        "id": 1944,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.1.2.4.6.2.2",
        "childsId": [],
        "idp": 1942
    },
    {
        "id": 1945,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.1.1.2.4.6.2.3",
        "childsId": [],
        "idp": 1942
    },
    {
        "id": 1946,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.1.1.2.4.6.2.4",
        "childsId": [],
        "idp": 1942
    },
    {
        "id": 1947,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.1.1.2.4.6.2.5",
        "childsId": [],
        "idp": 1942
    },
    {
        "id": 1948,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.1.1.2.4.6.2.6",
        "childsId": [],
        "idp": 1942
    },
    {
        "id": 1949,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.1.1.2.5",
        "childsId": [
            1950,
            1957
        ],
        "idp": 1893
    },
    {
        "id": 1950,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.1.1.2.5.1",
        "childsId": [
            1951,
            1952,
            1953,
            1954,
            1955,
            1956
        ],
        "idp": 1949
    },
    {
        "id": 1951,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.1.1.2.5.1.1",
        "childsId": [],
        "idp": 1950
    },
    {
        "id": 1952,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.1.1.2.5.1.2",
        "childsId": [],
        "idp": 1950
    },
    {
        "id": 1953,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.1.1.2.5.1.3",
        "childsId": [],
        "idp": 1950
    },
    {
        "id": 1954,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.1.1.2.5.1.4",
        "childsId": [],
        "idp": 1950
    },
    {
        "id": 1955,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.1.1.2.5.1.5",
        "childsId": [],
        "idp": 1950
    },
    {
        "id": 1956,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.1.1.2.5.1.6",
        "childsId": [],
        "idp": 1950
    },
    {
        "id": 1957,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.1.1.2.5.2",
        "childsId": [
            1958,
            1959,
            1960,
            1961,
            1962
        ],
        "idp": 1949
    },
    {
        "id": 1958,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.1.1.2.5.2.1",
        "childsId": [],
        "idp": 1957
    },
    {
        "id": 1959,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.1.1.2.5.2.2",
        "childsId": [],
        "idp": 1957
    },
    {
        "id": 1960,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.1.1.2.5.2.3",
        "childsId": [],
        "idp": 1957
    },
    {
        "id": 1961,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.1.1.2.5.2.4",
        "childsId": [],
        "idp": 1957
    },
    {
        "id": 1962,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.1.1.2.5.2.5",
        "childsId": [],
        "idp": 1957
    },
    {
        "id": 1963,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.1.1.2.6",
        "childsId": [
            1964,
            1965,
            1966,
            1967
        ],
        "idp": 1893
    },
    {
        "id": 1964,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.1.1.2.6.1",
        "childsId": [],
        "idp": 1963
    },
    {
        "id": 1965,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.1.1.2.6.2",
        "childsId": [],
        "idp": 1963
    },
    {
        "id": 1966,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.1.1.2.6.3",
        "childsId": [],
        "idp": 1963
    },
    {
        "id": 1967,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.1.1.2.6.4",
        "childsId": [],
        "idp": 1963
    },
    {
        "id": 1968,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.1.1.2.7",
        "childsId": [
            1969,
            1970,
            1971,
            1972,
            1973,
            1974,
            1975,
            1976
        ],
        "idp": 1893
    },
    {
        "id": 1969,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.1.1.2.7.1",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1970,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.1.1.2.7.2",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1971,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.1.1.2.7.3",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1972,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.1.1.2.7.4",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1973,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.1.1.2.7.5",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1974,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.1.1.2.7.6",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1975,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.1.1.2.7.7",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1976,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.1.1.2.7.8",
        "childsId": [],
        "idp": 1968
    },
    {
        "id": 1977,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.1.1.2.8",
        "childsId": [
            1978,
            1979,
            1980
        ],
        "idp": 1893
    },
    {
        "id": 1978,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.1.1.2.8.1",
        "childsId": [],
        "idp": 1977
    },
    {
        "id": 1979,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.1.1.2.8.2",
        "childsId": [],
        "idp": 1977
    },
    {
        "id": 1980,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.1.1.2.8.3",
        "childsId": [],
        "idp": 1977
    },
    {
        "id": 1981,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.1.1.2.9",
        "childsId": [],
        "idp": 1893
    },
    {
        "id": 1982,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Fundición",
        "WBS": "1.5.1.2",
        "childsId": [
            1983
        ],
        "idp": 1802
    },
    {
        "id": 1983,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF - Fundición (GabRF01-1)",
        "WBS": "1.5.1.2.1",
        "childsId": [
            1984,
            1988,
            1992,
            1998,
            2039,
            2053,
            2058,
            2067,
            2071
        ],
        "idp": 1982
    },
    {
        "id": 1984,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.1.2.1.1",
        "childsId": [
            1985,
            1986,
            1987
        ],
        "idp": 1983
    },
    {
        "id": 1985,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.1.2.1.1.1",
        "childsId": [],
        "idp": 1984
    },
    {
        "id": 1986,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.1.2.1.1.2",
        "childsId": [],
        "idp": 1984
    },
    {
        "id": 1987,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.1.2.1.1.3",
        "childsId": [],
        "idp": 1984
    },
    {
        "id": 1988,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.1.2.1.2",
        "childsId": [
            1989,
            1990,
            1991
        ],
        "idp": 1983
    },
    {
        "id": 1989,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.1.2.1.2.1",
        "childsId": [],
        "idp": 1988
    },
    {
        "id": 1990,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.1.2.1.2.2",
        "childsId": [],
        "idp": 1988
    },
    {
        "id": 1991,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.1.2.1.2.3",
        "childsId": [],
        "idp": 1988
    },
    {
        "id": 1992,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.1.2.1.3",
        "childsId": [
            1993,
            1994,
            1995,
            1996,
            1997
        ],
        "idp": 1983
    },
    {
        "id": 1993,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.1.2.1.3.1",
        "childsId": [],
        "idp": 1992
    },
    {
        "id": 1994,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.1.2.1.3.2",
        "childsId": [],
        "idp": 1992
    },
    {
        "id": 1995,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.1.2.1.3.3",
        "childsId": [],
        "idp": 1992
    },
    {
        "id": 1996,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.1.2.1.3.4",
        "childsId": [],
        "idp": 1992
    },
    {
        "id": 1997,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.1.2.1.3.5",
        "childsId": [],
        "idp": 1992
    },
    {
        "id": 1998,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.1.2.1.4",
        "childsId": [
            1999,
            2006,
            2010,
            2014,
            2020,
            2026
        ],
        "idp": 1983
    },
    {
        "id": 1999,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.1.2.1.4.1",
        "childsId": [
            2000,
            2001,
            2002,
            2003,
            2004,
            2005
        ],
        "idp": 1998
    },
    {
        "id": 2000,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.1.2.1.4.1.1",
        "childsId": [],
        "idp": 1999
    },
    {
        "id": 2001,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.1.2.1.4.1.2",
        "childsId": [],
        "idp": 1999
    },
    {
        "id": 2002,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.1.2.1.4.1.3",
        "childsId": [],
        "idp": 1999
    },
    {
        "id": 2003,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.1.2.1.4.1.4",
        "childsId": [],
        "idp": 1999
    },
    {
        "id": 2004,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.1.2.1.4.1.5",
        "childsId": [],
        "idp": 1999
    },
    {
        "id": 2005,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.1.2.1.4.1.6",
        "childsId": [],
        "idp": 1999
    },
    {
        "id": 2006,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.1.2.1.4.2",
        "childsId": [
            2007,
            2008,
            2009
        ],
        "idp": 1998
    },
    {
        "id": 2007,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.1.2.1.4.2.1",
        "childsId": [],
        "idp": 2006
    },
    {
        "id": 2008,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.1.2.1.4.2.2",
        "childsId": [],
        "idp": 2006
    },
    {
        "id": 2009,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.1.2.1.4.2.3",
        "childsId": [],
        "idp": 2006
    },
    {
        "id": 2010,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.1.2.1.4.3",
        "childsId": [
            2011,
            2012,
            2013
        ],
        "idp": 1998
    },
    {
        "id": 2011,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.1.2.1.4.3.1",
        "childsId": [],
        "idp": 2010
    },
    {
        "id": 2012,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.1.2.1.4.3.2",
        "childsId": [],
        "idp": 2010
    },
    {
        "id": 2013,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.1.2.1.4.3.3",
        "childsId": [],
        "idp": 2010
    },
    {
        "id": 2014,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.1.2.1.4.4",
        "childsId": [
            2015,
            2016,
            2017,
            2018,
            2019
        ],
        "idp": 1998
    },
    {
        "id": 2015,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.1.2.1.4.4.1",
        "childsId": [],
        "idp": 2014
    },
    {
        "id": 2016,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.1.2.1.4.4.2",
        "childsId": [],
        "idp": 2014
    },
    {
        "id": 2017,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.1.2.1.4.4.3",
        "childsId": [],
        "idp": 2014
    },
    {
        "id": 2018,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.1.2.1.4.4.4",
        "childsId": [],
        "idp": 2014
    },
    {
        "id": 2019,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.1.2.1.4.4.5",
        "childsId": [],
        "idp": 2014
    },
    {
        "id": 2020,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.1.2.1.4.5",
        "childsId": [
            2021,
            2022,
            2023,
            2024,
            2025
        ],
        "idp": 1998
    },
    {
        "id": 2021,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.1.2.1.4.5.1",
        "childsId": [],
        "idp": 2020
    },
    {
        "id": 2022,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.1.2.1.4.5.2",
        "childsId": [],
        "idp": 2020
    },
    {
        "id": 2023,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.1.2.1.4.5.3",
        "childsId": [],
        "idp": 2020
    },
    {
        "id": 2024,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.1.2.1.4.5.4",
        "childsId": [],
        "idp": 2020
    },
    {
        "id": 2025,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.1.2.1.4.5.5",
        "childsId": [],
        "idp": 2020
    },
    {
        "id": 2026,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.1.2.1.4.6",
        "childsId": [
            2027,
            2032
        ],
        "idp": 1998
    },
    {
        "id": 2027,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.1.2.1.4.6.1",
        "childsId": [
            2028,
            2029,
            2030,
            2031
        ],
        "idp": 2026
    },
    {
        "id": 2028,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.1.2.1.4.6.1.1",
        "childsId": [],
        "idp": 2027
    },
    {
        "id": 2029,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.2.1.4.6.1.2",
        "childsId": [],
        "idp": 2027
    },
    {
        "id": 2030,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.1.2.1.4.6.1.3",
        "childsId": [],
        "idp": 2027
    },
    {
        "id": 2031,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.1.2.1.4.6.1.4",
        "childsId": [],
        "idp": 2027
    },
    {
        "id": 2032,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.1.2.1.4.6.2",
        "childsId": [
            2033,
            2034,
            2035,
            2036,
            2037,
            2038
        ],
        "idp": 2026
    },
    {
        "id": 2033,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.1.2.1.4.6.2.1",
        "childsId": [],
        "idp": 2032
    },
    {
        "id": 2034,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.2.1.4.6.2.2",
        "childsId": [],
        "idp": 2032
    },
    {
        "id": 2035,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.1.2.1.4.6.2.3",
        "childsId": [],
        "idp": 2032
    },
    {
        "id": 2036,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.1.2.1.4.6.2.4",
        "childsId": [],
        "idp": 2032
    },
    {
        "id": 2037,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.1.2.1.4.6.2.5",
        "childsId": [],
        "idp": 2032
    },
    {
        "id": 2038,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.1.2.1.4.6.2.6",
        "childsId": [],
        "idp": 2032
    },
    {
        "id": 2039,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.1.2.1.5",
        "childsId": [
            2040,
            2047
        ],
        "idp": 1983
    },
    {
        "id": 2040,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.1.2.1.5.1",
        "childsId": [
            2041,
            2042,
            2043,
            2044,
            2045,
            2046
        ],
        "idp": 2039
    },
    {
        "id": 2041,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.1.2.1.5.1.1",
        "childsId": [],
        "idp": 2040
    },
    {
        "id": 2042,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.1.2.1.5.1.2",
        "childsId": [],
        "idp": 2040
    },
    {
        "id": 2043,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.1.2.1.5.1.3",
        "childsId": [],
        "idp": 2040
    },
    {
        "id": 2044,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.1.2.1.5.1.4",
        "childsId": [],
        "idp": 2040
    },
    {
        "id": 2045,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.1.2.1.5.1.5",
        "childsId": [],
        "idp": 2040
    },
    {
        "id": 2046,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.1.2.1.5.1.6",
        "childsId": [],
        "idp": 2040
    },
    {
        "id": 2047,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.1.2.1.5.2",
        "childsId": [
            2048,
            2049,
            2050,
            2051,
            2052
        ],
        "idp": 2039
    },
    {
        "id": 2048,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.1.2.1.5.2.1",
        "childsId": [],
        "idp": 2047
    },
    {
        "id": 2049,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.1.2.1.5.2.2",
        "childsId": [],
        "idp": 2047
    },
    {
        "id": 2050,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.1.2.1.5.2.3",
        "childsId": [],
        "idp": 2047
    },
    {
        "id": 2051,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.1.2.1.5.2.4",
        "childsId": [],
        "idp": 2047
    },
    {
        "id": 2052,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.1.2.1.5.2.5",
        "childsId": [],
        "idp": 2047
    },
    {
        "id": 2053,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.1.2.1.6",
        "childsId": [
            2054,
            2055,
            2056,
            2057
        ],
        "idp": 1983
    },
    {
        "id": 2054,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.1.2.1.6.1",
        "childsId": [],
        "idp": 2053
    },
    {
        "id": 2055,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.1.2.1.6.2",
        "childsId": [],
        "idp": 2053
    },
    {
        "id": 2056,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.1.2.1.6.3",
        "childsId": [],
        "idp": 2053
    },
    {
        "id": 2057,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.1.2.1.6.4",
        "childsId": [],
        "idp": 2053
    },
    {
        "id": 2058,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.1.2.1.7",
        "childsId": [
            2059,
            2060,
            2061,
            2062,
            2063,
            2064,
            2065,
            2066
        ],
        "idp": 1983
    },
    {
        "id": 2059,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.1.2.1.7.1",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2060,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.1.2.1.7.2",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2061,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.1.2.1.7.3",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2062,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.1.2.1.7.4",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2063,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.1.2.1.7.5",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2064,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.1.2.1.7.6",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2065,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.1.2.1.7.7",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2066,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.1.2.1.7.8",
        "childsId": [],
        "idp": 2058
    },
    {
        "id": 2067,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.1.2.1.8",
        "childsId": [
            2068,
            2069,
            2070
        ],
        "idp": 1983
    },
    {
        "id": 2068,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.1.2.1.8.1",
        "childsId": [],
        "idp": 2067
    },
    {
        "id": 2069,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.1.2.1.8.2",
        "childsId": [],
        "idp": 2067
    },
    {
        "id": 2070,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.1.2.1.8.3",
        "childsId": [],
        "idp": 2067
    },
    {
        "id": 2071,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.1.2.1.9",
        "childsId": [],
        "idp": 1983
    },
    {
        "id": 2072,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Refinería",
        "WBS": "1.5.1.3",
        "childsId": [
            2073
        ],
        "idp": 1802
    },
    {
        "id": 2073,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF - Refinería (GabRF02-1)",
        "WBS": "1.5.1.3.1",
        "childsId": [
            2074,
            2078,
            2082,
            2088,
            2129,
            2143,
            2148,
            2157,
            2161
        ],
        "idp": 2072
    },
    {
        "id": 2074,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.1.3.1.1",
        "childsId": [
            2075,
            2076,
            2077
        ],
        "idp": 2073
    },
    {
        "id": 2075,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.1.3.1.1.1",
        "childsId": [],
        "idp": 2074
    },
    {
        "id": 2076,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.1.3.1.1.2",
        "childsId": [],
        "idp": 2074
    },
    {
        "id": 2077,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.1.3.1.1.3",
        "childsId": [],
        "idp": 2074
    },
    {
        "id": 2078,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.1.3.1.2",
        "childsId": [
            2079,
            2080,
            2081
        ],
        "idp": 2073
    },
    {
        "id": 2079,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.1.3.1.2.1",
        "childsId": [],
        "idp": 2078
    },
    {
        "id": 2080,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.1.3.1.2.2",
        "childsId": [],
        "idp": 2078
    },
    {
        "id": 2081,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.1.3.1.2.3",
        "childsId": [],
        "idp": 2078
    },
    {
        "id": 2082,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.1.3.1.3",
        "childsId": [
            2083,
            2084,
            2085,
            2086,
            2087
        ],
        "idp": 2073
    },
    {
        "id": 2083,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.1.3.1.3.1",
        "childsId": [],
        "idp": 2082
    },
    {
        "id": 2084,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.1.3.1.3.2",
        "childsId": [],
        "idp": 2082
    },
    {
        "id": 2085,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.1.3.1.3.3",
        "childsId": [],
        "idp": 2082
    },
    {
        "id": 2086,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.1.3.1.3.4",
        "childsId": [],
        "idp": 2082
    },
    {
        "id": 2087,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.1.3.1.3.5",
        "childsId": [],
        "idp": 2082
    },
    {
        "id": 2088,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.1.3.1.4",
        "childsId": [
            2089,
            2096,
            2100,
            2104,
            2110,
            2116
        ],
        "idp": 2073
    },
    {
        "id": 2089,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.1.3.1.4.1",
        "childsId": [
            2090,
            2091,
            2092,
            2093,
            2094,
            2095
        ],
        "idp": 2088
    },
    {
        "id": 2090,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.1.3.1.4.1.1",
        "childsId": [],
        "idp": 2089
    },
    {
        "id": 2091,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.1.3.1.4.1.2",
        "childsId": [],
        "idp": 2089
    },
    {
        "id": 2092,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.1.3.1.4.1.3",
        "childsId": [],
        "idp": 2089
    },
    {
        "id": 2093,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.1.3.1.4.1.4",
        "childsId": [],
        "idp": 2089
    },
    {
        "id": 2094,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.1.3.1.4.1.5",
        "childsId": [],
        "idp": 2089
    },
    {
        "id": 2095,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.1.3.1.4.1.6",
        "childsId": [],
        "idp": 2089
    },
    {
        "id": 2096,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.1.3.1.4.2",
        "childsId": [
            2097,
            2098,
            2099
        ],
        "idp": 2088
    },
    {
        "id": 2097,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.1.3.1.4.2.1",
        "childsId": [],
        "idp": 2096
    },
    {
        "id": 2098,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.1.3.1.4.2.2",
        "childsId": [],
        "idp": 2096
    },
    {
        "id": 2099,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.1.3.1.4.2.3",
        "childsId": [],
        "idp": 2096
    },
    {
        "id": 2100,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.1.3.1.4.3",
        "childsId": [
            2101,
            2102,
            2103
        ],
        "idp": 2088
    },
    {
        "id": 2101,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.1.3.1.4.3.1",
        "childsId": [],
        "idp": 2100
    },
    {
        "id": 2102,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.1.3.1.4.3.2",
        "childsId": [],
        "idp": 2100
    },
    {
        "id": 2103,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.1.3.1.4.3.3",
        "childsId": [],
        "idp": 2100
    },
    {
        "id": 2104,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.1.3.1.4.4",
        "childsId": [
            2105,
            2106,
            2107,
            2108,
            2109
        ],
        "idp": 2088
    },
    {
        "id": 2105,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.1.3.1.4.4.1",
        "childsId": [],
        "idp": 2104
    },
    {
        "id": 2106,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.1.3.1.4.4.2",
        "childsId": [],
        "idp": 2104
    },
    {
        "id": 2107,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.1.3.1.4.4.3",
        "childsId": [],
        "idp": 2104
    },
    {
        "id": 2108,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.1.3.1.4.4.4",
        "childsId": [],
        "idp": 2104
    },
    {
        "id": 2109,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.1.3.1.4.4.5",
        "childsId": [],
        "idp": 2104
    },
    {
        "id": 2110,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.1.3.1.4.5",
        "childsId": [
            2111,
            2112,
            2113,
            2114,
            2115
        ],
        "idp": 2088
    },
    {
        "id": 2111,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.1.3.1.4.5.1",
        "childsId": [],
        "idp": 2110
    },
    {
        "id": 2112,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.1.3.1.4.5.2",
        "childsId": [],
        "idp": 2110
    },
    {
        "id": 2113,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.1.3.1.4.5.3",
        "childsId": [],
        "idp": 2110
    },
    {
        "id": 2114,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.1.3.1.4.5.4",
        "childsId": [],
        "idp": 2110
    },
    {
        "id": 2115,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.1.3.1.4.5.5",
        "childsId": [],
        "idp": 2110
    },
    {
        "id": 2116,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.1.3.1.4.6",
        "childsId": [
            2117,
            2122
        ],
        "idp": 2088
    },
    {
        "id": 2117,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.1.3.1.4.6.1",
        "childsId": [
            2118,
            2119,
            2120,
            2121
        ],
        "idp": 2116
    },
    {
        "id": 2118,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.1.3.1.4.6.1.1",
        "childsId": [],
        "idp": 2117
    },
    {
        "id": 2119,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.3.1.4.6.1.2",
        "childsId": [],
        "idp": 2117
    },
    {
        "id": 2120,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.1.3.1.4.6.1.3",
        "childsId": [],
        "idp": 2117
    },
    {
        "id": 2121,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.1.3.1.4.6.1.4",
        "childsId": [],
        "idp": 2117
    },
    {
        "id": 2122,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.1.3.1.4.6.2",
        "childsId": [
            2123,
            2124,
            2125,
            2126,
            2127,
            2128
        ],
        "idp": 2116
    },
    {
        "id": 2123,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.1.3.1.4.6.2.1",
        "childsId": [],
        "idp": 2122
    },
    {
        "id": 2124,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.1.3.1.4.6.2.2",
        "childsId": [],
        "idp": 2122
    },
    {
        "id": 2125,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.1.3.1.4.6.2.3",
        "childsId": [],
        "idp": 2122
    },
    {
        "id": 2126,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.1.3.1.4.6.2.4",
        "childsId": [],
        "idp": 2122
    },
    {
        "id": 2127,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.1.3.1.4.6.2.5",
        "childsId": [],
        "idp": 2122
    },
    {
        "id": 2128,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.1.3.1.4.6.2.6",
        "childsId": [],
        "idp": 2122
    },
    {
        "id": 2129,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.1.3.1.5",
        "childsId": [
            2130,
            2137
        ],
        "idp": 2073
    },
    {
        "id": 2130,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.1.3.1.5.1",
        "childsId": [
            2131,
            2132,
            2133,
            2134,
            2135,
            2136
        ],
        "idp": 2129
    },
    {
        "id": 2131,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.1.3.1.5.1.1",
        "childsId": [],
        "idp": 2130
    },
    {
        "id": 2132,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.1.3.1.5.1.2",
        "childsId": [],
        "idp": 2130
    },
    {
        "id": 2133,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.1.3.1.5.1.3",
        "childsId": [],
        "idp": 2130
    },
    {
        "id": 2134,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.1.3.1.5.1.4",
        "childsId": [],
        "idp": 2130
    },
    {
        "id": 2135,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.1.3.1.5.1.5",
        "childsId": [],
        "idp": 2130
    },
    {
        "id": 2136,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.1.3.1.5.1.6",
        "childsId": [],
        "idp": 2130
    },
    {
        "id": 2137,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.1.3.1.5.2",
        "childsId": [
            2138,
            2139,
            2140,
            2141,
            2142
        ],
        "idp": 2129
    },
    {
        "id": 2138,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.1.3.1.5.2.1",
        "childsId": [],
        "idp": 2137
    },
    {
        "id": 2139,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.1.3.1.5.2.2",
        "childsId": [],
        "idp": 2137
    },
    {
        "id": 2140,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.1.3.1.5.2.3",
        "childsId": [],
        "idp": 2137
    },
    {
        "id": 2141,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.1.3.1.5.2.4",
        "childsId": [],
        "idp": 2137
    },
    {
        "id": 2142,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.1.3.1.5.2.5",
        "childsId": [],
        "idp": 2137
    },
    {
        "id": 2143,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.1.3.1.6",
        "childsId": [
            2144,
            2145,
            2146,
            2147
        ],
        "idp": 2073
    },
    {
        "id": 2144,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.1.3.1.6.1",
        "childsId": [],
        "idp": 2143
    },
    {
        "id": 2145,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.1.3.1.6.2",
        "childsId": [],
        "idp": 2143
    },
    {
        "id": 2146,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.1.3.1.6.3",
        "childsId": [],
        "idp": 2143
    },
    {
        "id": 2147,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.1.3.1.6.4",
        "childsId": [],
        "idp": 2143
    },
    {
        "id": 2148,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.1.3.1.7",
        "childsId": [
            2149,
            2150,
            2151,
            2152,
            2153,
            2154,
            2155,
            2156
        ],
        "idp": 2073
    },
    {
        "id": 2149,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.1.3.1.7.1",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2150,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.1.3.1.7.2",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2151,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.1.3.1.7.3",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2152,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.1.3.1.7.4",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2153,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.1.3.1.7.5",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2154,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.1.3.1.7.6",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2155,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.1.3.1.7.7",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2156,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.1.3.1.7.8",
        "childsId": [],
        "idp": 2148
    },
    {
        "id": 2157,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.1.3.1.8",
        "childsId": [
            2158,
            2159,
            2160
        ],
        "idp": 2073
    },
    {
        "id": 2158,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.1.3.1.8.1",
        "childsId": [],
        "idp": 2157
    },
    {
        "id": 2159,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.1.3.1.8.2",
        "childsId": [],
        "idp": 2157
    },
    {
        "id": 2160,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.1.3.1.8.3",
        "childsId": [],
        "idp": 2157
    },
    {
        "id": 2161,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.1.3.1.9",
        "childsId": [],
        "idp": 2073
    },
    {
        "id": 2162,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Toquepala",
        "WBS": "1.5.2",
        "childsId": [
            2163,
            2253,
            2432,
            2522
        ],
        "idp": 1801
    },
    {
        "id": 2163,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Quebrada Honda",
        "WBS": "1.5.2.1",
        "childsId": [
            2164
        ],
        "idp": 2162
    },
    {
        "id": 2164,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF (GabRF05-1)",
        "WBS": "1.5.2.1.1",
        "childsId": [
            2165,
            2169,
            2173,
            2179,
            2220,
            2234,
            2239,
            2248,
            2252
        ],
        "idp": 2163
    },
    {
        "id": 2165,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.2.1.1.1",
        "childsId": [
            2166,
            2167,
            2168
        ],
        "idp": 2164
    },
    {
        "id": 2166,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.2.1.1.1.1",
        "childsId": [],
        "idp": 2165
    },
    {
        "id": 2167,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.2.1.1.1.2",
        "childsId": [],
        "idp": 2165
    },
    {
        "id": 2168,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.2.1.1.1.3",
        "childsId": [],
        "idp": 2165
    },
    {
        "id": 2169,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.2.1.1.2",
        "childsId": [
            2170,
            2171,
            2172
        ],
        "idp": 2164
    },
    {
        "id": 2170,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.2.1.1.2.1",
        "childsId": [],
        "idp": 2169
    },
    {
        "id": 2171,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.2.1.1.2.2",
        "childsId": [],
        "idp": 2169
    },
    {
        "id": 2172,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.2.1.1.2.3",
        "childsId": [],
        "idp": 2169
    },
    {
        "id": 2173,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.2.1.1.3",
        "childsId": [
            2174,
            2175,
            2176,
            2177,
            2178
        ],
        "idp": 2164
    },
    {
        "id": 2174,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.2.1.1.3.1",
        "childsId": [],
        "idp": 2173
    },
    {
        "id": 2175,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.2.1.1.3.2",
        "childsId": [],
        "idp": 2173
    },
    {
        "id": 2176,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.2.1.1.3.3",
        "childsId": [],
        "idp": 2173
    },
    {
        "id": 2177,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.2.1.1.3.4",
        "childsId": [],
        "idp": 2173
    },
    {
        "id": 2178,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.2.1.1.3.5",
        "childsId": [],
        "idp": 2173
    },
    {
        "id": 2179,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.2.1.1.4",
        "childsId": [
            2180,
            2187,
            2191,
            2195,
            2201,
            2207
        ],
        "idp": 2164
    },
    {
        "id": 2180,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.2.1.1.4.1",
        "childsId": [
            2181,
            2182,
            2183,
            2184,
            2185,
            2186
        ],
        "idp": 2179
    },
    {
        "id": 2181,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.2.1.1.4.1.1",
        "childsId": [],
        "idp": 2180
    },
    {
        "id": 2182,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.2.1.1.4.1.2",
        "childsId": [],
        "idp": 2180
    },
    {
        "id": 2183,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.2.1.1.4.1.3",
        "childsId": [],
        "idp": 2180
    },
    {
        "id": 2184,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.2.1.1.4.1.4",
        "childsId": [],
        "idp": 2180
    },
    {
        "id": 2185,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.2.1.1.4.1.5",
        "childsId": [],
        "idp": 2180
    },
    {
        "id": 2186,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.2.1.1.4.1.6",
        "childsId": [],
        "idp": 2180
    },
    {
        "id": 2187,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.2.1.1.4.2",
        "childsId": [
            2188,
            2189,
            2190
        ],
        "idp": 2179
    },
    {
        "id": 2188,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.2.1.1.4.2.1",
        "childsId": [],
        "idp": 2187
    },
    {
        "id": 2189,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.2.1.1.4.2.2",
        "childsId": [],
        "idp": 2187
    },
    {
        "id": 2190,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.2.1.1.4.2.3",
        "childsId": [],
        "idp": 2187
    },
    {
        "id": 2191,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.2.1.1.4.3",
        "childsId": [
            2192,
            2193,
            2194
        ],
        "idp": 2179
    },
    {
        "id": 2192,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.2.1.1.4.3.1",
        "childsId": [],
        "idp": 2191
    },
    {
        "id": 2193,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.2.1.1.4.3.2",
        "childsId": [],
        "idp": 2191
    },
    {
        "id": 2194,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.2.1.1.4.3.3",
        "childsId": [],
        "idp": 2191
    },
    {
        "id": 2195,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.2.1.1.4.4",
        "childsId": [
            2196,
            2197,
            2198,
            2199,
            2200
        ],
        "idp": 2179
    },
    {
        "id": 2196,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.2.1.1.4.4.1",
        "childsId": [],
        "idp": 2195
    },
    {
        "id": 2197,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.2.1.1.4.4.2",
        "childsId": [],
        "idp": 2195
    },
    {
        "id": 2198,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.2.1.1.4.4.3",
        "childsId": [],
        "idp": 2195
    },
    {
        "id": 2199,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.2.1.1.4.4.4",
        "childsId": [],
        "idp": 2195
    },
    {
        "id": 2200,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.2.1.1.4.4.5",
        "childsId": [],
        "idp": 2195
    },
    {
        "id": 2201,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.2.1.1.4.5",
        "childsId": [
            2202,
            2203,
            2204,
            2205,
            2206
        ],
        "idp": 2179
    },
    {
        "id": 2202,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.2.1.1.4.5.1",
        "childsId": [],
        "idp": 2201
    },
    {
        "id": 2203,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.2.1.1.4.5.2",
        "childsId": [],
        "idp": 2201
    },
    {
        "id": 2204,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.2.1.1.4.5.3",
        "childsId": [],
        "idp": 2201
    },
    {
        "id": 2205,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.2.1.1.4.5.4",
        "childsId": [],
        "idp": 2201
    },
    {
        "id": 2206,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.2.1.1.4.5.5",
        "childsId": [],
        "idp": 2201
    },
    {
        "id": 2207,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.2.1.1.4.6",
        "childsId": [
            2208,
            2213
        ],
        "idp": 2179
    },
    {
        "id": 2208,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.2.1.1.4.6.1",
        "childsId": [
            2209,
            2210,
            2211,
            2212
        ],
        "idp": 2207
    },
    {
        "id": 2209,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.2.1.1.4.6.1.1",
        "childsId": [],
        "idp": 2208
    },
    {
        "id": 2210,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.1.1.4.6.1.2",
        "childsId": [],
        "idp": 2208
    },
    {
        "id": 2211,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.2.1.1.4.6.1.3",
        "childsId": [],
        "idp": 2208
    },
    {
        "id": 2212,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.2.1.1.4.6.1.4",
        "childsId": [],
        "idp": 2208
    },
    {
        "id": 2213,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.2.1.1.4.6.2",
        "childsId": [
            2214,
            2215,
            2216,
            2217,
            2218,
            2219
        ],
        "idp": 2207
    },
    {
        "id": 2214,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.2.1.1.4.6.2.1",
        "childsId": [],
        "idp": 2213
    },
    {
        "id": 2215,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.1.1.4.6.2.2",
        "childsId": [],
        "idp": 2213
    },
    {
        "id": 2216,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.2.1.1.4.6.2.3",
        "childsId": [],
        "idp": 2213
    },
    {
        "id": 2217,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.2.1.1.4.6.2.4",
        "childsId": [],
        "idp": 2213
    },
    {
        "id": 2218,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.2.1.1.4.6.2.5",
        "childsId": [],
        "idp": 2213
    },
    {
        "id": 2219,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.2.1.1.4.6.2.6",
        "childsId": [],
        "idp": 2213
    },
    {
        "id": 2220,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.2.1.1.5",
        "childsId": [
            2221,
            2228
        ],
        "idp": 2164
    },
    {
        "id": 2221,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.2.1.1.5.1",
        "childsId": [
            2222,
            2223,
            2224,
            2225,
            2226,
            2227
        ],
        "idp": 2220
    },
    {
        "id": 2222,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.2.1.1.5.1.1",
        "childsId": [],
        "idp": 2221
    },
    {
        "id": 2223,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.2.1.1.5.1.2",
        "childsId": [],
        "idp": 2221
    },
    {
        "id": 2224,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.2.1.1.5.1.3",
        "childsId": [],
        "idp": 2221
    },
    {
        "id": 2225,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.2.1.1.5.1.4",
        "childsId": [],
        "idp": 2221
    },
    {
        "id": 2226,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.2.1.1.5.1.5",
        "childsId": [],
        "idp": 2221
    },
    {
        "id": 2227,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.2.1.1.5.1.6",
        "childsId": [],
        "idp": 2221
    },
    {
        "id": 2228,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.2.1.1.5.2",
        "childsId": [
            2229,
            2230,
            2231,
            2232,
            2233
        ],
        "idp": 2220
    },
    {
        "id": 2229,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.2.1.1.5.2.1",
        "childsId": [],
        "idp": 2228
    },
    {
        "id": 2230,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.2.1.1.5.2.2",
        "childsId": [],
        "idp": 2228
    },
    {
        "id": 2231,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.2.1.1.5.2.3",
        "childsId": [],
        "idp": 2228
    },
    {
        "id": 2232,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.2.1.1.5.2.4",
        "childsId": [],
        "idp": 2228
    },
    {
        "id": 2233,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.2.1.1.5.2.5",
        "childsId": [],
        "idp": 2228
    },
    {
        "id": 2234,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.2.1.1.6",
        "childsId": [
            2235,
            2236,
            2237,
            2238
        ],
        "idp": 2164
    },
    {
        "id": 2235,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.2.1.1.6.1",
        "childsId": [],
        "idp": 2234
    },
    {
        "id": 2236,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.2.1.1.6.2",
        "childsId": [],
        "idp": 2234
    },
    {
        "id": 2237,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.2.1.1.6.3",
        "childsId": [],
        "idp": 2234
    },
    {
        "id": 2238,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.2.1.1.6.4",
        "childsId": [],
        "idp": 2234
    },
    {
        "id": 2239,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.2.1.1.7",
        "childsId": [
            2240,
            2241,
            2242,
            2243,
            2244,
            2245,
            2246,
            2247
        ],
        "idp": 2164
    },
    {
        "id": 2240,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.2.1.1.7.1",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2241,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.2.1.1.7.2",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2242,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.2.1.1.7.3",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2243,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.2.1.1.7.4",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2244,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.2.1.1.7.5",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2245,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.2.1.1.7.6",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2246,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.2.1.1.7.7",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2247,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.2.1.1.7.8",
        "childsId": [],
        "idp": 2239
    },
    {
        "id": 2248,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.2.1.1.8",
        "childsId": [
            2249,
            2250,
            2251
        ],
        "idp": 2164
    },
    {
        "id": 2249,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.2.1.1.8.1",
        "childsId": [],
        "idp": 2248
    },
    {
        "id": 2250,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.2.1.1.8.2",
        "childsId": [],
        "idp": 2248
    },
    {
        "id": 2251,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.2.1.1.8.3",
        "childsId": [],
        "idp": 2248
    },
    {
        "id": 2252,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.2.1.1.9",
        "childsId": [],
        "idp": 2164
    },
    {
        "id": 2253,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Totoral",
        "WBS": "1.5.2.2",
        "childsId": [
            2254,
            2343
        ],
        "idp": 2162
    },
    {
        "id": 2254,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF1 (GabRF06-1)",
        "WBS": "1.5.2.2.1",
        "childsId": [
            2255,
            2259,
            2263,
            2269,
            2310,
            2324,
            2329,
            2338,
            2342
        ],
        "idp": 2253
    },
    {
        "id": 2255,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.2.2.1.1",
        "childsId": [
            2256,
            2257,
            2258
        ],
        "idp": 2254
    },
    {
        "id": 2256,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.2.2.1.1.1",
        "childsId": [],
        "idp": 2255
    },
    {
        "id": 2257,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.2.2.1.1.2",
        "childsId": [],
        "idp": 2255
    },
    {
        "id": 2258,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.2.2.1.1.3",
        "childsId": [],
        "idp": 2255
    },
    {
        "id": 2259,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.2.2.1.2",
        "childsId": [
            2260,
            2261,
            2262
        ],
        "idp": 2254
    },
    {
        "id": 2260,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.2.2.1.2.1",
        "childsId": [],
        "idp": 2259
    },
    {
        "id": 2261,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.2.2.1.2.2",
        "childsId": [],
        "idp": 2259
    },
    {
        "id": 2262,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.2.2.1.2.3",
        "childsId": [],
        "idp": 2259
    },
    {
        "id": 2263,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.2.2.1.3",
        "childsId": [
            2264,
            2265,
            2266,
            2267,
            2268
        ],
        "idp": 2254
    },
    {
        "id": 2264,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.2.2.1.3.1",
        "childsId": [],
        "idp": 2263
    },
    {
        "id": 2265,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.2.2.1.3.2",
        "childsId": [],
        "idp": 2263
    },
    {
        "id": 2266,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.2.2.1.3.3",
        "childsId": [],
        "idp": 2263
    },
    {
        "id": 2267,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.2.2.1.3.4",
        "childsId": [],
        "idp": 2263
    },
    {
        "id": 2268,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.2.2.1.3.5",
        "childsId": [],
        "idp": 2263
    },
    {
        "id": 2269,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.2.2.1.4",
        "childsId": [
            2270,
            2277,
            2281,
            2285,
            2291,
            2297
        ],
        "idp": 2254
    },
    {
        "id": 2270,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.2.2.1.4.1",
        "childsId": [
            2271,
            2272,
            2273,
            2274,
            2275,
            2276
        ],
        "idp": 2269
    },
    {
        "id": 2271,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.2.2.1.4.1.1",
        "childsId": [],
        "idp": 2270
    },
    {
        "id": 2272,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.2.2.1.4.1.2",
        "childsId": [],
        "idp": 2270
    },
    {
        "id": 2273,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.2.2.1.4.1.3",
        "childsId": [],
        "idp": 2270
    },
    {
        "id": 2274,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.2.2.1.4.1.4",
        "childsId": [],
        "idp": 2270
    },
    {
        "id": 2275,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.2.2.1.4.1.5",
        "childsId": [],
        "idp": 2270
    },
    {
        "id": 2276,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.2.2.1.4.1.6",
        "childsId": [],
        "idp": 2270
    },
    {
        "id": 2277,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.2.2.1.4.2",
        "childsId": [
            2278,
            2279,
            2280
        ],
        "idp": 2269
    },
    {
        "id": 2278,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.2.2.1.4.2.1",
        "childsId": [],
        "idp": 2277
    },
    {
        "id": 2279,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.2.2.1.4.2.2",
        "childsId": [],
        "idp": 2277
    },
    {
        "id": 2280,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.2.2.1.4.2.3",
        "childsId": [],
        "idp": 2277
    },
    {
        "id": 2281,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.2.2.1.4.3",
        "childsId": [
            2282,
            2283,
            2284
        ],
        "idp": 2269
    },
    {
        "id": 2282,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.2.2.1.4.3.1",
        "childsId": [],
        "idp": 2281
    },
    {
        "id": 2283,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.2.2.1.4.3.2",
        "childsId": [],
        "idp": 2281
    },
    {
        "id": 2284,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.2.2.1.4.3.3",
        "childsId": [],
        "idp": 2281
    },
    {
        "id": 2285,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.2.2.1.4.4",
        "childsId": [
            2286,
            2287,
            2288,
            2289,
            2290
        ],
        "idp": 2269
    },
    {
        "id": 2286,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.2.2.1.4.4.1",
        "childsId": [],
        "idp": 2285
    },
    {
        "id": 2287,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.2.2.1.4.4.2",
        "childsId": [],
        "idp": 2285
    },
    {
        "id": 2288,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.2.2.1.4.4.3",
        "childsId": [],
        "idp": 2285
    },
    {
        "id": 2289,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.2.2.1.4.4.4",
        "childsId": [],
        "idp": 2285
    },
    {
        "id": 2290,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.2.2.1.4.4.5",
        "childsId": [],
        "idp": 2285
    },
    {
        "id": 2291,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.2.2.1.4.5",
        "childsId": [
            2292,
            2293,
            2294,
            2295,
            2296
        ],
        "idp": 2269
    },
    {
        "id": 2292,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.2.2.1.4.5.1",
        "childsId": [],
        "idp": 2291
    },
    {
        "id": 2293,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.2.2.1.4.5.2",
        "childsId": [],
        "idp": 2291
    },
    {
        "id": 2294,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.2.2.1.4.5.3",
        "childsId": [],
        "idp": 2291
    },
    {
        "id": 2295,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.2.2.1.4.5.4",
        "childsId": [],
        "idp": 2291
    },
    {
        "id": 2296,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.2.2.1.4.5.5",
        "childsId": [],
        "idp": 2291
    },
    {
        "id": 2297,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.2.2.1.4.6",
        "childsId": [
            2298,
            2303
        ],
        "idp": 2269
    },
    {
        "id": 2298,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.2.2.1.4.6.1",
        "childsId": [
            2299,
            2300,
            2301,
            2302
        ],
        "idp": 2297
    },
    {
        "id": 2299,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.2.2.1.4.6.1.1",
        "childsId": [],
        "idp": 2298
    },
    {
        "id": 2300,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.2.1.4.6.1.2",
        "childsId": [],
        "idp": 2298
    },
    {
        "id": 2301,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.2.2.1.4.6.1.3",
        "childsId": [],
        "idp": 2298
    },
    {
        "id": 2302,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.2.2.1.4.6.1.4",
        "childsId": [],
        "idp": 2298
    },
    {
        "id": 2303,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.2.2.1.4.6.2",
        "childsId": [
            2304,
            2305,
            2306,
            2307,
            2308,
            2309
        ],
        "idp": 2297
    },
    {
        "id": 2304,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.2.2.1.4.6.2.1",
        "childsId": [],
        "idp": 2303
    },
    {
        "id": 2305,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.2.1.4.6.2.2",
        "childsId": [],
        "idp": 2303
    },
    {
        "id": 2306,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.2.2.1.4.6.2.3",
        "childsId": [],
        "idp": 2303
    },
    {
        "id": 2307,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.2.2.1.4.6.2.4",
        "childsId": [],
        "idp": 2303
    },
    {
        "id": 2308,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.2.2.1.4.6.2.5",
        "childsId": [],
        "idp": 2303
    },
    {
        "id": 2309,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.2.2.1.4.6.2.6",
        "childsId": [],
        "idp": 2303
    },
    {
        "id": 2310,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.2.2.1.5",
        "childsId": [
            2311,
            2318
        ],
        "idp": 2254
    },
    {
        "id": 2311,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.2.2.1.5.1",
        "childsId": [
            2312,
            2313,
            2314,
            2315,
            2316,
            2317
        ],
        "idp": 2310
    },
    {
        "id": 2312,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.2.2.1.5.1.1",
        "childsId": [],
        "idp": 2311
    },
    {
        "id": 2313,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.2.2.1.5.1.2",
        "childsId": [],
        "idp": 2311
    },
    {
        "id": 2314,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.2.2.1.5.1.3",
        "childsId": [],
        "idp": 2311
    },
    {
        "id": 2315,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.2.2.1.5.1.4",
        "childsId": [],
        "idp": 2311
    },
    {
        "id": 2316,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.2.2.1.5.1.5",
        "childsId": [],
        "idp": 2311
    },
    {
        "id": 2317,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.2.2.1.5.1.6",
        "childsId": [],
        "idp": 2311
    },
    {
        "id": 2318,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.2.2.1.5.2",
        "childsId": [
            2319,
            2320,
            2321,
            2322,
            2323
        ],
        "idp": 2310
    },
    {
        "id": 2319,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.2.2.1.5.2.1",
        "childsId": [],
        "idp": 2318
    },
    {
        "id": 2320,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.2.2.1.5.2.2",
        "childsId": [],
        "idp": 2318
    },
    {
        "id": 2321,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.2.2.1.5.2.3",
        "childsId": [],
        "idp": 2318
    },
    {
        "id": 2322,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.2.2.1.5.2.4",
        "childsId": [],
        "idp": 2318
    },
    {
        "id": 2323,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.2.2.1.5.2.5",
        "childsId": [],
        "idp": 2318
    },
    {
        "id": 2324,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.2.2.1.6",
        "childsId": [
            2325,
            2326,
            2327,
            2328
        ],
        "idp": 2254
    },
    {
        "id": 2325,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.2.2.1.6.1",
        "childsId": [],
        "idp": 2324
    },
    {
        "id": 2326,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.2.2.1.6.2",
        "childsId": [],
        "idp": 2324
    },
    {
        "id": 2327,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.2.2.1.6.3",
        "childsId": [],
        "idp": 2324
    },
    {
        "id": 2328,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.2.2.1.6.4",
        "childsId": [],
        "idp": 2324
    },
    {
        "id": 2329,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.2.2.1.7",
        "childsId": [
            2330,
            2331,
            2332,
            2333,
            2334,
            2335,
            2336,
            2337
        ],
        "idp": 2254
    },
    {
        "id": 2330,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.2.2.1.7.1",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2331,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.2.2.1.7.2",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2332,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.2.2.1.7.3",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2333,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.2.2.1.7.4",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2334,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.2.2.1.7.5",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2335,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.2.2.1.7.6",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2336,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.2.2.1.7.7",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2337,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.2.2.1.7.8",
        "childsId": [],
        "idp": 2329
    },
    {
        "id": 2338,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.2.2.1.8",
        "childsId": [
            2339,
            2340,
            2341
        ],
        "idp": 2254
    },
    {
        "id": 2339,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.2.2.1.8.1",
        "childsId": [],
        "idp": 2338
    },
    {
        "id": 2340,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.2.2.1.8.2",
        "childsId": [],
        "idp": 2338
    },
    {
        "id": 2341,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.2.2.1.8.3",
        "childsId": [],
        "idp": 2338
    },
    {
        "id": 2342,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.2.2.1.9",
        "childsId": [],
        "idp": 2254
    },
    {
        "id": 2343,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF2 (GabRF06-2)",
        "WBS": "1.5.2.2.2",
        "childsId": [
            2344,
            2348,
            2352,
            2358,
            2399,
            2413,
            2418,
            2427,
            2431
        ],
        "idp": 2253
    },
    {
        "id": 2344,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.2.2.2.1",
        "childsId": [
            2345,
            2346,
            2347
        ],
        "idp": 2343
    },
    {
        "id": 2345,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.2.2.2.1.1",
        "childsId": [],
        "idp": 2344
    },
    {
        "id": 2346,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.2.2.2.1.2",
        "childsId": [],
        "idp": 2344
    },
    {
        "id": 2347,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.2.2.2.1.3",
        "childsId": [],
        "idp": 2344
    },
    {
        "id": 2348,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.2.2.2.2",
        "childsId": [
            2349,
            2350,
            2351
        ],
        "idp": 2343
    },
    {
        "id": 2349,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.2.2.2.2.1",
        "childsId": [],
        "idp": 2348
    },
    {
        "id": 2350,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.2.2.2.2.2",
        "childsId": [],
        "idp": 2348
    },
    {
        "id": 2351,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.2.2.2.2.3",
        "childsId": [],
        "idp": 2348
    },
    {
        "id": 2352,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.2.2.2.3",
        "childsId": [
            2353,
            2354,
            2355,
            2356,
            2357
        ],
        "idp": 2343
    },
    {
        "id": 2353,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.2.2.2.3.1",
        "childsId": [],
        "idp": 2352
    },
    {
        "id": 2354,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.2.2.2.3.2",
        "childsId": [],
        "idp": 2352
    },
    {
        "id": 2355,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.2.2.2.3.3",
        "childsId": [],
        "idp": 2352
    },
    {
        "id": 2356,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.2.2.2.3.4",
        "childsId": [],
        "idp": 2352
    },
    {
        "id": 2357,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.2.2.2.3.5",
        "childsId": [],
        "idp": 2352
    },
    {
        "id": 2358,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.2.2.2.4",
        "childsId": [
            2359,
            2366,
            2370,
            2374,
            2380,
            2386
        ],
        "idp": 2343
    },
    {
        "id": 2359,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.2.2.2.4.1",
        "childsId": [
            2360,
            2361,
            2362,
            2363,
            2364,
            2365
        ],
        "idp": 2358
    },
    {
        "id": 2360,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.2.2.2.4.1.1",
        "childsId": [],
        "idp": 2359
    },
    {
        "id": 2361,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.2.2.2.4.1.2",
        "childsId": [],
        "idp": 2359
    },
    {
        "id": 2362,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.2.2.2.4.1.3",
        "childsId": [],
        "idp": 2359
    },
    {
        "id": 2363,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.2.2.2.4.1.4",
        "childsId": [],
        "idp": 2359
    },
    {
        "id": 2364,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.2.2.2.4.1.5",
        "childsId": [],
        "idp": 2359
    },
    {
        "id": 2365,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.2.2.2.4.1.6",
        "childsId": [],
        "idp": 2359
    },
    {
        "id": 2366,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.2.2.2.4.2",
        "childsId": [
            2367,
            2368,
            2369
        ],
        "idp": 2358
    },
    {
        "id": 2367,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.2.2.2.4.2.1",
        "childsId": [],
        "idp": 2366
    },
    {
        "id": 2368,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.2.2.2.4.2.2",
        "childsId": [],
        "idp": 2366
    },
    {
        "id": 2369,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.2.2.2.4.2.3",
        "childsId": [],
        "idp": 2366
    },
    {
        "id": 2370,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.2.2.2.4.3",
        "childsId": [
            2371,
            2372,
            2373
        ],
        "idp": 2358
    },
    {
        "id": 2371,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.2.2.2.4.3.1",
        "childsId": [],
        "idp": 2370
    },
    {
        "id": 2372,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.2.2.2.4.3.2",
        "childsId": [],
        "idp": 2370
    },
    {
        "id": 2373,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.2.2.2.4.3.3",
        "childsId": [],
        "idp": 2370
    },
    {
        "id": 2374,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.2.2.2.4.4",
        "childsId": [
            2375,
            2376,
            2377,
            2378,
            2379
        ],
        "idp": 2358
    },
    {
        "id": 2375,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.2.2.2.4.4.1",
        "childsId": [],
        "idp": 2374
    },
    {
        "id": 2376,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.2.2.2.4.4.2",
        "childsId": [],
        "idp": 2374
    },
    {
        "id": 2377,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.2.2.2.4.4.3",
        "childsId": [],
        "idp": 2374
    },
    {
        "id": 2378,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.2.2.2.4.4.4",
        "childsId": [],
        "idp": 2374
    },
    {
        "id": 2379,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.2.2.2.4.4.5",
        "childsId": [],
        "idp": 2374
    },
    {
        "id": 2380,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.2.2.2.4.5",
        "childsId": [
            2381,
            2382,
            2383,
            2384,
            2385
        ],
        "idp": 2358
    },
    {
        "id": 2381,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.2.2.2.4.5.1",
        "childsId": [],
        "idp": 2380
    },
    {
        "id": 2382,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.2.2.2.4.5.2",
        "childsId": [],
        "idp": 2380
    },
    {
        "id": 2383,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.2.2.2.4.5.3",
        "childsId": [],
        "idp": 2380
    },
    {
        "id": 2384,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.2.2.2.4.5.4",
        "childsId": [],
        "idp": 2380
    },
    {
        "id": 2385,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.2.2.2.4.5.5",
        "childsId": [],
        "idp": 2380
    },
    {
        "id": 2386,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.2.2.2.4.6",
        "childsId": [
            2387,
            2392
        ],
        "idp": 2358
    },
    {
        "id": 2387,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.2.2.2.4.6.1",
        "childsId": [
            2388,
            2389,
            2390,
            2391
        ],
        "idp": 2386
    },
    {
        "id": 2388,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.2.2.2.4.6.1.1",
        "childsId": [],
        "idp": 2387
    },
    {
        "id": 2389,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.2.2.4.6.1.2",
        "childsId": [],
        "idp": 2387
    },
    {
        "id": 2390,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.2.2.2.4.6.1.3",
        "childsId": [],
        "idp": 2387
    },
    {
        "id": 2391,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.2.2.2.4.6.1.4",
        "childsId": [],
        "idp": 2387
    },
    {
        "id": 2392,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.2.2.2.4.6.2",
        "childsId": [
            2393,
            2394,
            2395,
            2396,
            2397,
            2398
        ],
        "idp": 2386
    },
    {
        "id": 2393,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.2.2.2.4.6.2.1",
        "childsId": [],
        "idp": 2392
    },
    {
        "id": 2394,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.2.2.4.6.2.2",
        "childsId": [],
        "idp": 2392
    },
    {
        "id": 2395,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.2.2.2.4.6.2.3",
        "childsId": [],
        "idp": 2392
    },
    {
        "id": 2396,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.2.2.2.4.6.2.4",
        "childsId": [],
        "idp": 2392
    },
    {
        "id": 2397,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.2.2.2.4.6.2.5",
        "childsId": [],
        "idp": 2392
    },
    {
        "id": 2398,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.2.2.2.4.6.2.6",
        "childsId": [],
        "idp": 2392
    },
    {
        "id": 2399,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.2.2.2.5",
        "childsId": [
            2400,
            2407
        ],
        "idp": 2343
    },
    {
        "id": 2400,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.2.2.2.5.1",
        "childsId": [
            2401,
            2402,
            2403,
            2404,
            2405,
            2406
        ],
        "idp": 2399
    },
    {
        "id": 2401,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.2.2.2.5.1.1",
        "childsId": [],
        "idp": 2400
    },
    {
        "id": 2402,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.2.2.2.5.1.2",
        "childsId": [],
        "idp": 2400
    },
    {
        "id": 2403,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.2.2.2.5.1.3",
        "childsId": [],
        "idp": 2400
    },
    {
        "id": 2404,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.2.2.2.5.1.4",
        "childsId": [],
        "idp": 2400
    },
    {
        "id": 2405,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.2.2.2.5.1.5",
        "childsId": [],
        "idp": 2400
    },
    {
        "id": 2406,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.2.2.2.5.1.6",
        "childsId": [],
        "idp": 2400
    },
    {
        "id": 2407,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.2.2.2.5.2",
        "childsId": [
            2408,
            2409,
            2410,
            2411,
            2412
        ],
        "idp": 2399
    },
    {
        "id": 2408,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.2.2.2.5.2.1",
        "childsId": [],
        "idp": 2407
    },
    {
        "id": 2409,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.2.2.2.5.2.2",
        "childsId": [],
        "idp": 2407
    },
    {
        "id": 2410,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.2.2.2.5.2.3",
        "childsId": [],
        "idp": 2407
    },
    {
        "id": 2411,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.2.2.2.5.2.4",
        "childsId": [],
        "idp": 2407
    },
    {
        "id": 2412,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.2.2.2.5.2.5",
        "childsId": [],
        "idp": 2407
    },
    {
        "id": 2413,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.2.2.2.6",
        "childsId": [
            2414,
            2415,
            2416,
            2417
        ],
        "idp": 2343
    },
    {
        "id": 2414,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.2.2.2.6.1",
        "childsId": [],
        "idp": 2413
    },
    {
        "id": 2415,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.2.2.2.6.2",
        "childsId": [],
        "idp": 2413
    },
    {
        "id": 2416,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.2.2.2.6.3",
        "childsId": [],
        "idp": 2413
    },
    {
        "id": 2417,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.2.2.2.6.4",
        "childsId": [],
        "idp": 2413
    },
    {
        "id": 2418,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.2.2.2.7",
        "childsId": [
            2419,
            2420,
            2421,
            2422,
            2423,
            2424,
            2425,
            2426
        ],
        "idp": 2343
    },
    {
        "id": 2419,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.2.2.2.7.1",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2420,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.2.2.2.7.2",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2421,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.2.2.2.7.3",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2422,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.2.2.2.7.4",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2423,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.2.2.2.7.5",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2424,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.2.2.2.7.6",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2425,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.2.2.2.7.7",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2426,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.2.2.2.7.8",
        "childsId": [],
        "idp": 2418
    },
    {
        "id": 2427,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.2.2.2.8",
        "childsId": [
            2428,
            2429,
            2430
        ],
        "idp": 2343
    },
    {
        "id": 2428,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.2.2.2.8.1",
        "childsId": [],
        "idp": 2427
    },
    {
        "id": 2429,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.2.2.2.8.2",
        "childsId": [],
        "idp": 2427
    },
    {
        "id": 2430,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.2.2.2.8.3",
        "childsId": [],
        "idp": 2427
    },
    {
        "id": 2431,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.2.2.2.9",
        "childsId": [],
        "idp": 2343
    },
    {
        "id": 2432,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Push-Back",
        "WBS": "1.5.2.3",
        "childsId": [
            2433
        ],
        "idp": 2162
    },
    {
        "id": 2433,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF1 (GabRF07-1)",
        "WBS": "1.5.2.3.1",
        "childsId": [
            2434,
            2438,
            2442,
            2448,
            2489,
            2503,
            2508,
            2517,
            2521
        ],
        "idp": 2432
    },
    {
        "id": 2434,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.2.3.1.1",
        "childsId": [
            2435,
            2436,
            2437
        ],
        "idp": 2433
    },
    {
        "id": 2435,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.2.3.1.1.1",
        "childsId": [],
        "idp": 2434
    },
    {
        "id": 2436,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.2.3.1.1.2",
        "childsId": [],
        "idp": 2434
    },
    {
        "id": 2437,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.2.3.1.1.3",
        "childsId": [],
        "idp": 2434
    },
    {
        "id": 2438,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.2.3.1.2",
        "childsId": [
            2439,
            2440,
            2441
        ],
        "idp": 2433
    },
    {
        "id": 2439,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.2.3.1.2.1",
        "childsId": [],
        "idp": 2438
    },
    {
        "id": 2440,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.2.3.1.2.2",
        "childsId": [],
        "idp": 2438
    },
    {
        "id": 2441,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.2.3.1.2.3",
        "childsId": [],
        "idp": 2438
    },
    {
        "id": 2442,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.2.3.1.3",
        "childsId": [
            2443,
            2444,
            2445,
            2446,
            2447
        ],
        "idp": 2433
    },
    {
        "id": 2443,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.2.3.1.3.1",
        "childsId": [],
        "idp": 2442
    },
    {
        "id": 2444,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.2.3.1.3.2",
        "childsId": [],
        "idp": 2442
    },
    {
        "id": 2445,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.2.3.1.3.3",
        "childsId": [],
        "idp": 2442
    },
    {
        "id": 2446,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.2.3.1.3.4",
        "childsId": [],
        "idp": 2442
    },
    {
        "id": 2447,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.2.3.1.3.5",
        "childsId": [],
        "idp": 2442
    },
    {
        "id": 2448,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.2.3.1.4",
        "childsId": [
            2449,
            2456,
            2460,
            2464,
            2470,
            2476
        ],
        "idp": 2433
    },
    {
        "id": 2449,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.2.3.1.4.1",
        "childsId": [
            2450,
            2451,
            2452,
            2453,
            2454,
            2455
        ],
        "idp": 2448
    },
    {
        "id": 2450,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.2.3.1.4.1.1",
        "childsId": [],
        "idp": 2449
    },
    {
        "id": 2451,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.2.3.1.4.1.2",
        "childsId": [],
        "idp": 2449
    },
    {
        "id": 2452,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.2.3.1.4.1.3",
        "childsId": [],
        "idp": 2449
    },
    {
        "id": 2453,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.2.3.1.4.1.4",
        "childsId": [],
        "idp": 2449
    },
    {
        "id": 2454,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.2.3.1.4.1.5",
        "childsId": [],
        "idp": 2449
    },
    {
        "id": 2455,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.2.3.1.4.1.6",
        "childsId": [],
        "idp": 2449
    },
    {
        "id": 2456,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.2.3.1.4.2",
        "childsId": [
            2457,
            2458,
            2459
        ],
        "idp": 2448
    },
    {
        "id": 2457,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.2.3.1.4.2.1",
        "childsId": [],
        "idp": 2456
    },
    {
        "id": 2458,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.2.3.1.4.2.2",
        "childsId": [],
        "idp": 2456
    },
    {
        "id": 2459,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.2.3.1.4.2.3",
        "childsId": [],
        "idp": 2456
    },
    {
        "id": 2460,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.2.3.1.4.3",
        "childsId": [
            2461,
            2462,
            2463
        ],
        "idp": 2448
    },
    {
        "id": 2461,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.2.3.1.4.3.1",
        "childsId": [],
        "idp": 2460
    },
    {
        "id": 2462,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.2.3.1.4.3.2",
        "childsId": [],
        "idp": 2460
    },
    {
        "id": 2463,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.2.3.1.4.3.3",
        "childsId": [],
        "idp": 2460
    },
    {
        "id": 2464,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.2.3.1.4.4",
        "childsId": [
            2465,
            2466,
            2467,
            2468,
            2469
        ],
        "idp": 2448
    },
    {
        "id": 2465,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.2.3.1.4.4.1",
        "childsId": [],
        "idp": 2464
    },
    {
        "id": 2466,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.2.3.1.4.4.2",
        "childsId": [],
        "idp": 2464
    },
    {
        "id": 2467,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.2.3.1.4.4.3",
        "childsId": [],
        "idp": 2464
    },
    {
        "id": 2468,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.2.3.1.4.4.4",
        "childsId": [],
        "idp": 2464
    },
    {
        "id": 2469,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.2.3.1.4.4.5",
        "childsId": [],
        "idp": 2464
    },
    {
        "id": 2470,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.2.3.1.4.5",
        "childsId": [
            2471,
            2472,
            2473,
            2474,
            2475
        ],
        "idp": 2448
    },
    {
        "id": 2471,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.2.3.1.4.5.1",
        "childsId": [],
        "idp": 2470
    },
    {
        "id": 2472,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.2.3.1.4.5.2",
        "childsId": [],
        "idp": 2470
    },
    {
        "id": 2473,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.2.3.1.4.5.3",
        "childsId": [],
        "idp": 2470
    },
    {
        "id": 2474,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.2.3.1.4.5.4",
        "childsId": [],
        "idp": 2470
    },
    {
        "id": 2475,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.2.3.1.4.5.5",
        "childsId": [],
        "idp": 2470
    },
    {
        "id": 2476,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.2.3.1.4.6",
        "childsId": [
            2477,
            2482
        ],
        "idp": 2448
    },
    {
        "id": 2477,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.2.3.1.4.6.1",
        "childsId": [
            2478,
            2479,
            2480,
            2481
        ],
        "idp": 2476
    },
    {
        "id": 2478,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.2.3.1.4.6.1.1",
        "childsId": [],
        "idp": 2477
    },
    {
        "id": 2479,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.3.1.4.6.1.2",
        "childsId": [],
        "idp": 2477
    },
    {
        "id": 2480,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.2.3.1.4.6.1.3",
        "childsId": [],
        "idp": 2477
    },
    {
        "id": 2481,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.2.3.1.4.6.1.4",
        "childsId": [],
        "idp": 2477
    },
    {
        "id": 2482,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.2.3.1.4.6.2",
        "childsId": [
            2483,
            2484,
            2485,
            2486,
            2487,
            2488
        ],
        "idp": 2476
    },
    {
        "id": 2483,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.2.3.1.4.6.2.1",
        "childsId": [],
        "idp": 2482
    },
    {
        "id": 2484,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.3.1.4.6.2.2",
        "childsId": [],
        "idp": 2482
    },
    {
        "id": 2485,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.2.3.1.4.6.2.3",
        "childsId": [],
        "idp": 2482
    },
    {
        "id": 2486,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.2.3.1.4.6.2.4",
        "childsId": [],
        "idp": 2482
    },
    {
        "id": 2487,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.2.3.1.4.6.2.5",
        "childsId": [],
        "idp": 2482
    },
    {
        "id": 2488,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.2.3.1.4.6.2.6",
        "childsId": [],
        "idp": 2482
    },
    {
        "id": 2489,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.2.3.1.5",
        "childsId": [
            2490,
            2497
        ],
        "idp": 2433
    },
    {
        "id": 2490,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.2.3.1.5.1",
        "childsId": [
            2491,
            2492,
            2493,
            2494,
            2495,
            2496
        ],
        "idp": 2489
    },
    {
        "id": 2491,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.2.3.1.5.1.1",
        "childsId": [],
        "idp": 2490
    },
    {
        "id": 2492,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.2.3.1.5.1.2",
        "childsId": [],
        "idp": 2490
    },
    {
        "id": 2493,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.2.3.1.5.1.3",
        "childsId": [],
        "idp": 2490
    },
    {
        "id": 2494,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.2.3.1.5.1.4",
        "childsId": [],
        "idp": 2490
    },
    {
        "id": 2495,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.2.3.1.5.1.5",
        "childsId": [],
        "idp": 2490
    },
    {
        "id": 2496,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.2.3.1.5.1.6",
        "childsId": [],
        "idp": 2490
    },
    {
        "id": 2497,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.2.3.1.5.2",
        "childsId": [
            2498,
            2499,
            2500,
            2501,
            2502
        ],
        "idp": 2489
    },
    {
        "id": 2498,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.2.3.1.5.2.1",
        "childsId": [],
        "idp": 2497
    },
    {
        "id": 2499,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.2.3.1.5.2.2",
        "childsId": [],
        "idp": 2497
    },
    {
        "id": 2500,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.2.3.1.5.2.3",
        "childsId": [],
        "idp": 2497
    },
    {
        "id": 2501,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.2.3.1.5.2.4",
        "childsId": [],
        "idp": 2497
    },
    {
        "id": 2502,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.2.3.1.5.2.5",
        "childsId": [],
        "idp": 2497
    },
    {
        "id": 2503,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.2.3.1.6",
        "childsId": [
            2504,
            2505,
            2506,
            2507
        ],
        "idp": 2433
    },
    {
        "id": 2504,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.2.3.1.6.1",
        "childsId": [],
        "idp": 2503
    },
    {
        "id": 2505,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.2.3.1.6.2",
        "childsId": [],
        "idp": 2503
    },
    {
        "id": 2506,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.2.3.1.6.3",
        "childsId": [],
        "idp": 2503
    },
    {
        "id": 2507,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.2.3.1.6.4",
        "childsId": [],
        "idp": 2503
    },
    {
        "id": 2508,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.2.3.1.7",
        "childsId": [
            2509,
            2510,
            2511,
            2512,
            2513,
            2514,
            2515,
            2516
        ],
        "idp": 2433
    },
    {
        "id": 2509,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.2.3.1.7.1",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2510,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.2.3.1.7.2",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2511,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.2.3.1.7.3",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2512,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.2.3.1.7.4",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2513,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.2.3.1.7.5",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2514,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.2.3.1.7.6",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2515,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.2.3.1.7.7",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2516,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.2.3.1.7.8",
        "childsId": [],
        "idp": 2508
    },
    {
        "id": 2517,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.2.3.1.8",
        "childsId": [
            2518,
            2519,
            2520
        ],
        "idp": 2433
    },
    {
        "id": 2518,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.2.3.1.8.1",
        "childsId": [],
        "idp": 2517
    },
    {
        "id": 2519,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.2.3.1.8.2",
        "childsId": [],
        "idp": 2517
    },
    {
        "id": 2520,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.2.3.1.8.3",
        "childsId": [],
        "idp": 2517
    },
    {
        "id": 2521,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.2.3.1.9",
        "childsId": [],
        "idp": 2433
    },
    {
        "id": 2522,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Mill Site",
        "WBS": "1.5.2.4",
        "childsId": [
            2523,
            2612
        ],
        "idp": 2162
    },
    {
        "id": 2523,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF1 (GabRF08-1)",
        "WBS": "1.5.2.4.1",
        "childsId": [
            2524,
            2528,
            2532,
            2538,
            2579,
            2593,
            2598,
            2607,
            2611
        ],
        "idp": 2522
    },
    {
        "id": 2524,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.2.4.1.1",
        "childsId": [
            2525,
            2526,
            2527
        ],
        "idp": 2523
    },
    {
        "id": 2525,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.2.4.1.1.1",
        "childsId": [],
        "idp": 2524
    },
    {
        "id": 2526,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.2.4.1.1.2",
        "childsId": [],
        "idp": 2524
    },
    {
        "id": 2527,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.2.4.1.1.3",
        "childsId": [],
        "idp": 2524
    },
    {
        "id": 2528,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.2.4.1.2",
        "childsId": [
            2529,
            2530,
            2531
        ],
        "idp": 2523
    },
    {
        "id": 2529,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.2.4.1.2.1",
        "childsId": [],
        "idp": 2528
    },
    {
        "id": 2530,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.2.4.1.2.2",
        "childsId": [],
        "idp": 2528
    },
    {
        "id": 2531,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.2.4.1.2.3",
        "childsId": [],
        "idp": 2528
    },
    {
        "id": 2532,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.2.4.1.3",
        "childsId": [
            2533,
            2534,
            2535,
            2536,
            2537
        ],
        "idp": 2523
    },
    {
        "id": 2533,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.2.4.1.3.1",
        "childsId": [],
        "idp": 2532
    },
    {
        "id": 2534,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.2.4.1.3.2",
        "childsId": [],
        "idp": 2532
    },
    {
        "id": 2535,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.2.4.1.3.3",
        "childsId": [],
        "idp": 2532
    },
    {
        "id": 2536,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.2.4.1.3.4",
        "childsId": [],
        "idp": 2532
    },
    {
        "id": 2537,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.2.4.1.3.5",
        "childsId": [],
        "idp": 2532
    },
    {
        "id": 2538,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.2.4.1.4",
        "childsId": [
            2539,
            2546,
            2550,
            2554,
            2560,
            2566
        ],
        "idp": 2523
    },
    {
        "id": 2539,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.2.4.1.4.1",
        "childsId": [
            2540,
            2541,
            2542,
            2543,
            2544,
            2545
        ],
        "idp": 2538
    },
    {
        "id": 2540,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.2.4.1.4.1.1",
        "childsId": [],
        "idp": 2539
    },
    {
        "id": 2541,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.2.4.1.4.1.2",
        "childsId": [],
        "idp": 2539
    },
    {
        "id": 2542,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.2.4.1.4.1.3",
        "childsId": [],
        "idp": 2539
    },
    {
        "id": 2543,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.2.4.1.4.1.4",
        "childsId": [],
        "idp": 2539
    },
    {
        "id": 2544,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.2.4.1.4.1.5",
        "childsId": [],
        "idp": 2539
    },
    {
        "id": 2545,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.2.4.1.4.1.6",
        "childsId": [],
        "idp": 2539
    },
    {
        "id": 2546,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.2.4.1.4.2",
        "childsId": [
            2547,
            2548,
            2549
        ],
        "idp": 2538
    },
    {
        "id": 2547,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.2.4.1.4.2.1",
        "childsId": [],
        "idp": 2546
    },
    {
        "id": 2548,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.2.4.1.4.2.2",
        "childsId": [],
        "idp": 2546
    },
    {
        "id": 2549,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.2.4.1.4.2.3",
        "childsId": [],
        "idp": 2546
    },
    {
        "id": 2550,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.2.4.1.4.3",
        "childsId": [
            2551,
            2552,
            2553
        ],
        "idp": 2538
    },
    {
        "id": 2551,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.2.4.1.4.3.1",
        "childsId": [],
        "idp": 2550
    },
    {
        "id": 2552,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.2.4.1.4.3.2",
        "childsId": [],
        "idp": 2550
    },
    {
        "id": 2553,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.2.4.1.4.3.3",
        "childsId": [],
        "idp": 2550
    },
    {
        "id": 2554,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.2.4.1.4.4",
        "childsId": [
            2555,
            2556,
            2557,
            2558,
            2559
        ],
        "idp": 2538
    },
    {
        "id": 2555,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.2.4.1.4.4.1",
        "childsId": [],
        "idp": 2554
    },
    {
        "id": 2556,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.2.4.1.4.4.2",
        "childsId": [],
        "idp": 2554
    },
    {
        "id": 2557,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.2.4.1.4.4.3",
        "childsId": [],
        "idp": 2554
    },
    {
        "id": 2558,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.2.4.1.4.4.4",
        "childsId": [],
        "idp": 2554
    },
    {
        "id": 2559,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.2.4.1.4.4.5",
        "childsId": [],
        "idp": 2554
    },
    {
        "id": 2560,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.2.4.1.4.5",
        "childsId": [
            2561,
            2562,
            2563,
            2564,
            2565
        ],
        "idp": 2538
    },
    {
        "id": 2561,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.2.4.1.4.5.1",
        "childsId": [],
        "idp": 2560
    },
    {
        "id": 2562,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.2.4.1.4.5.2",
        "childsId": [],
        "idp": 2560
    },
    {
        "id": 2563,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.2.4.1.4.5.3",
        "childsId": [],
        "idp": 2560
    },
    {
        "id": 2564,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.2.4.1.4.5.4",
        "childsId": [],
        "idp": 2560
    },
    {
        "id": 2565,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.2.4.1.4.5.5",
        "childsId": [],
        "idp": 2560
    },
    {
        "id": 2566,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.2.4.1.4.6",
        "childsId": [
            2567,
            2572
        ],
        "idp": 2538
    },
    {
        "id": 2567,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.2.4.1.4.6.1",
        "childsId": [
            2568,
            2569,
            2570,
            2571
        ],
        "idp": 2566
    },
    {
        "id": 2568,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.2.4.1.4.6.1.1",
        "childsId": [],
        "idp": 2567
    },
    {
        "id": 2569,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.4.1.4.6.1.2",
        "childsId": [],
        "idp": 2567
    },
    {
        "id": 2570,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.2.4.1.4.6.1.3",
        "childsId": [],
        "idp": 2567
    },
    {
        "id": 2571,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.2.4.1.4.6.1.4",
        "childsId": [],
        "idp": 2567
    },
    {
        "id": 2572,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.2.4.1.4.6.2",
        "childsId": [
            2573,
            2574,
            2575,
            2576,
            2577,
            2578
        ],
        "idp": 2566
    },
    {
        "id": 2573,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.2.4.1.4.6.2.1",
        "childsId": [],
        "idp": 2572
    },
    {
        "id": 2574,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.4.1.4.6.2.2",
        "childsId": [],
        "idp": 2572
    },
    {
        "id": 2575,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.2.4.1.4.6.2.3",
        "childsId": [],
        "idp": 2572
    },
    {
        "id": 2576,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.2.4.1.4.6.2.4",
        "childsId": [],
        "idp": 2572
    },
    {
        "id": 2577,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.2.4.1.4.6.2.5",
        "childsId": [],
        "idp": 2572
    },
    {
        "id": 2578,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.2.4.1.4.6.2.6",
        "childsId": [],
        "idp": 2572
    },
    {
        "id": 2579,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.2.4.1.5",
        "childsId": [
            2580,
            2587
        ],
        "idp": 2523
    },
    {
        "id": 2580,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.2.4.1.5.1",
        "childsId": [
            2581,
            2582,
            2583,
            2584,
            2585,
            2586
        ],
        "idp": 2579
    },
    {
        "id": 2581,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.2.4.1.5.1.1",
        "childsId": [],
        "idp": 2580
    },
    {
        "id": 2582,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.2.4.1.5.1.2",
        "childsId": [],
        "idp": 2580
    },
    {
        "id": 2583,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.2.4.1.5.1.3",
        "childsId": [],
        "idp": 2580
    },
    {
        "id": 2584,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.2.4.1.5.1.4",
        "childsId": [],
        "idp": 2580
    },
    {
        "id": 2585,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.2.4.1.5.1.5",
        "childsId": [],
        "idp": 2580
    },
    {
        "id": 2586,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.2.4.1.5.1.6",
        "childsId": [],
        "idp": 2580
    },
    {
        "id": 2587,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.2.4.1.5.2",
        "childsId": [
            2588,
            2589,
            2590,
            2591,
            2592
        ],
        "idp": 2579
    },
    {
        "id": 2588,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.2.4.1.5.2.1",
        "childsId": [],
        "idp": 2587
    },
    {
        "id": 2589,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.2.4.1.5.2.2",
        "childsId": [],
        "idp": 2587
    },
    {
        "id": 2590,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.2.4.1.5.2.3",
        "childsId": [],
        "idp": 2587
    },
    {
        "id": 2591,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.2.4.1.5.2.4",
        "childsId": [],
        "idp": 2587
    },
    {
        "id": 2592,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.2.4.1.5.2.5",
        "childsId": [],
        "idp": 2587
    },
    {
        "id": 2593,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.2.4.1.6",
        "childsId": [
            2594,
            2595,
            2596,
            2597
        ],
        "idp": 2523
    },
    {
        "id": 2594,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.2.4.1.6.1",
        "childsId": [],
        "idp": 2593
    },
    {
        "id": 2595,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.2.4.1.6.2",
        "childsId": [],
        "idp": 2593
    },
    {
        "id": 2596,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.2.4.1.6.3",
        "childsId": [],
        "idp": 2593
    },
    {
        "id": 2597,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.2.4.1.6.4",
        "childsId": [],
        "idp": 2593
    },
    {
        "id": 2598,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.2.4.1.7",
        "childsId": [
            2599,
            2600,
            2601,
            2602,
            2603,
            2604,
            2605,
            2606
        ],
        "idp": 2523
    },
    {
        "id": 2599,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.2.4.1.7.1",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2600,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.2.4.1.7.2",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2601,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.2.4.1.7.3",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2602,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.2.4.1.7.4",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2603,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.2.4.1.7.5",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2604,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.2.4.1.7.6",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2605,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.2.4.1.7.7",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2606,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.2.4.1.7.8",
        "childsId": [],
        "idp": 2598
    },
    {
        "id": 2607,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.2.4.1.8",
        "childsId": [
            2608,
            2609,
            2610
        ],
        "idp": 2523
    },
    {
        "id": 2608,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.2.4.1.8.1",
        "childsId": [],
        "idp": 2607
    },
    {
        "id": 2609,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.2.4.1.8.2",
        "childsId": [],
        "idp": 2607
    },
    {
        "id": 2610,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.2.4.1.8.3",
        "childsId": [],
        "idp": 2607
    },
    {
        "id": 2611,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.2.4.1.9",
        "childsId": [],
        "idp": 2523
    },
    {
        "id": 2612,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF2 (GabRF08-2)",
        "WBS": "1.5.2.4.2",
        "childsId": [
            2613,
            2617,
            2621,
            2627,
            2668,
            2682,
            2687,
            2696,
            2700
        ],
        "idp": 2522
    },
    {
        "id": 2613,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.2.4.2.1",
        "childsId": [
            2614,
            2615,
            2616
        ],
        "idp": 2612
    },
    {
        "id": 2614,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.2.4.2.1.1",
        "childsId": [],
        "idp": 2613
    },
    {
        "id": 2615,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.2.4.2.1.2",
        "childsId": [],
        "idp": 2613
    },
    {
        "id": 2616,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.2.4.2.1.3",
        "childsId": [],
        "idp": 2613
    },
    {
        "id": 2617,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.2.4.2.2",
        "childsId": [
            2618,
            2619,
            2620
        ],
        "idp": 2612
    },
    {
        "id": 2618,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.2.4.2.2.1",
        "childsId": [],
        "idp": 2617
    },
    {
        "id": 2619,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.2.4.2.2.2",
        "childsId": [],
        "idp": 2617
    },
    {
        "id": 2620,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.2.4.2.2.3",
        "childsId": [],
        "idp": 2617
    },
    {
        "id": 2621,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.2.4.2.3",
        "childsId": [
            2622,
            2623,
            2624,
            2625,
            2626
        ],
        "idp": 2612
    },
    {
        "id": 2622,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.2.4.2.3.1",
        "childsId": [],
        "idp": 2621
    },
    {
        "id": 2623,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.2.4.2.3.2",
        "childsId": [],
        "idp": 2621
    },
    {
        "id": 2624,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.2.4.2.3.3",
        "childsId": [],
        "idp": 2621
    },
    {
        "id": 2625,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.2.4.2.3.4",
        "childsId": [],
        "idp": 2621
    },
    {
        "id": 2626,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.2.4.2.3.5",
        "childsId": [],
        "idp": 2621
    },
    {
        "id": 2627,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.2.4.2.4",
        "childsId": [
            2628,
            2635,
            2639,
            2643,
            2649,
            2655
        ],
        "idp": 2612
    },
    {
        "id": 2628,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.2.4.2.4.1",
        "childsId": [
            2629,
            2630,
            2631,
            2632,
            2633,
            2634
        ],
        "idp": 2627
    },
    {
        "id": 2629,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.2.4.2.4.1.1",
        "childsId": [],
        "idp": 2628
    },
    {
        "id": 2630,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.2.4.2.4.1.2",
        "childsId": [],
        "idp": 2628
    },
    {
        "id": 2631,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.2.4.2.4.1.3",
        "childsId": [],
        "idp": 2628
    },
    {
        "id": 2632,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.2.4.2.4.1.4",
        "childsId": [],
        "idp": 2628
    },
    {
        "id": 2633,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.2.4.2.4.1.5",
        "childsId": [],
        "idp": 2628
    },
    {
        "id": 2634,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.2.4.2.4.1.6",
        "childsId": [],
        "idp": 2628
    },
    {
        "id": 2635,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.2.4.2.4.2",
        "childsId": [
            2636,
            2637,
            2638
        ],
        "idp": 2627
    },
    {
        "id": 2636,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.2.4.2.4.2.1",
        "childsId": [],
        "idp": 2635
    },
    {
        "id": 2637,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.2.4.2.4.2.2",
        "childsId": [],
        "idp": 2635
    },
    {
        "id": 2638,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.2.4.2.4.2.3",
        "childsId": [],
        "idp": 2635
    },
    {
        "id": 2639,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.2.4.2.4.3",
        "childsId": [
            2640,
            2641,
            2642
        ],
        "idp": 2627
    },
    {
        "id": 2640,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.2.4.2.4.3.1",
        "childsId": [],
        "idp": 2639
    },
    {
        "id": 2641,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.2.4.2.4.3.2",
        "childsId": [],
        "idp": 2639
    },
    {
        "id": 2642,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.2.4.2.4.3.3",
        "childsId": [],
        "idp": 2639
    },
    {
        "id": 2643,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.2.4.2.4.4",
        "childsId": [
            2644,
            2645,
            2646,
            2647,
            2648
        ],
        "idp": 2627
    },
    {
        "id": 2644,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.2.4.2.4.4.1",
        "childsId": [],
        "idp": 2643
    },
    {
        "id": 2645,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.2.4.2.4.4.2",
        "childsId": [],
        "idp": 2643
    },
    {
        "id": 2646,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.2.4.2.4.4.3",
        "childsId": [],
        "idp": 2643
    },
    {
        "id": 2647,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.2.4.2.4.4.4",
        "childsId": [],
        "idp": 2643
    },
    {
        "id": 2648,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.2.4.2.4.4.5",
        "childsId": [],
        "idp": 2643
    },
    {
        "id": 2649,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.2.4.2.4.5",
        "childsId": [
            2650,
            2651,
            2652,
            2653,
            2654
        ],
        "idp": 2627
    },
    {
        "id": 2650,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.2.4.2.4.5.1",
        "childsId": [],
        "idp": 2649
    },
    {
        "id": 2651,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.2.4.2.4.5.2",
        "childsId": [],
        "idp": 2649
    },
    {
        "id": 2652,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.2.4.2.4.5.3",
        "childsId": [],
        "idp": 2649
    },
    {
        "id": 2653,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.2.4.2.4.5.4",
        "childsId": [],
        "idp": 2649
    },
    {
        "id": 2654,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.2.4.2.4.5.5",
        "childsId": [],
        "idp": 2649
    },
    {
        "id": 2655,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.2.4.2.4.6",
        "childsId": [
            2656,
            2661
        ],
        "idp": 2627
    },
    {
        "id": 2656,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.2.4.2.4.6.1",
        "childsId": [
            2657,
            2658,
            2659,
            2660
        ],
        "idp": 2655
    },
    {
        "id": 2657,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.2.4.2.4.6.1.1",
        "childsId": [],
        "idp": 2656
    },
    {
        "id": 2658,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.4.2.4.6.1.2",
        "childsId": [],
        "idp": 2656
    },
    {
        "id": 2659,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.2.4.2.4.6.1.3",
        "childsId": [],
        "idp": 2656
    },
    {
        "id": 2660,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.2.4.2.4.6.1.4",
        "childsId": [],
        "idp": 2656
    },
    {
        "id": 2661,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.2.4.2.4.6.2",
        "childsId": [
            2662,
            2663,
            2664,
            2665,
            2666,
            2667
        ],
        "idp": 2655
    },
    {
        "id": 2662,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.2.4.2.4.6.2.1",
        "childsId": [],
        "idp": 2661
    },
    {
        "id": 2663,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.2.4.2.4.6.2.2",
        "childsId": [],
        "idp": 2661
    },
    {
        "id": 2664,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.2.4.2.4.6.2.3",
        "childsId": [],
        "idp": 2661
    },
    {
        "id": 2665,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.2.4.2.4.6.2.4",
        "childsId": [],
        "idp": 2661
    },
    {
        "id": 2666,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.2.4.2.4.6.2.5",
        "childsId": [],
        "idp": 2661
    },
    {
        "id": 2667,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.2.4.2.4.6.2.6",
        "childsId": [],
        "idp": 2661
    },
    {
        "id": 2668,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.2.4.2.5",
        "childsId": [
            2669,
            2676
        ],
        "idp": 2612
    },
    {
        "id": 2669,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.2.4.2.5.1",
        "childsId": [
            2670,
            2671,
            2672,
            2673,
            2674,
            2675
        ],
        "idp": 2668
    },
    {
        "id": 2670,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.2.4.2.5.1.1",
        "childsId": [],
        "idp": 2669
    },
    {
        "id": 2671,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.2.4.2.5.1.2",
        "childsId": [],
        "idp": 2669
    },
    {
        "id": 2672,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.2.4.2.5.1.3",
        "childsId": [],
        "idp": 2669
    },
    {
        "id": 2673,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.2.4.2.5.1.4",
        "childsId": [],
        "idp": 2669
    },
    {
        "id": 2674,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.2.4.2.5.1.5",
        "childsId": [],
        "idp": 2669
    },
    {
        "id": 2675,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.2.4.2.5.1.6",
        "childsId": [],
        "idp": 2669
    },
    {
        "id": 2676,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.2.4.2.5.2",
        "childsId": [
            2677,
            2678,
            2679,
            2680,
            2681
        ],
        "idp": 2668
    },
    {
        "id": 2677,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.2.4.2.5.2.1",
        "childsId": [],
        "idp": 2676
    },
    {
        "id": 2678,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.2.4.2.5.2.2",
        "childsId": [],
        "idp": 2676
    },
    {
        "id": 2679,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.2.4.2.5.2.3",
        "childsId": [],
        "idp": 2676
    },
    {
        "id": 2680,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.2.4.2.5.2.4",
        "childsId": [],
        "idp": 2676
    },
    {
        "id": 2681,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.2.4.2.5.2.5",
        "childsId": [],
        "idp": 2676
    },
    {
        "id": 2682,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.2.4.2.6",
        "childsId": [
            2683,
            2684,
            2685,
            2686
        ],
        "idp": 2612
    },
    {
        "id": 2683,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.2.4.2.6.1",
        "childsId": [],
        "idp": 2682
    },
    {
        "id": 2684,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.2.4.2.6.2",
        "childsId": [],
        "idp": 2682
    },
    {
        "id": 2685,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.2.4.2.6.3",
        "childsId": [],
        "idp": 2682
    },
    {
        "id": 2686,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.2.4.2.6.4",
        "childsId": [],
        "idp": 2682
    },
    {
        "id": 2687,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.2.4.2.7",
        "childsId": [
            2688,
            2689,
            2690,
            2691,
            2692,
            2693,
            2694,
            2695
        ],
        "idp": 2612
    },
    {
        "id": 2688,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.2.4.2.7.1",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2689,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.2.4.2.7.2",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2690,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.2.4.2.7.3",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2691,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.2.4.2.7.4",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2692,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.2.4.2.7.5",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2693,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.2.4.2.7.6",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2694,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.2.4.2.7.7",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2695,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.2.4.2.7.8",
        "childsId": [],
        "idp": 2687
    },
    {
        "id": 2696,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.2.4.2.8",
        "childsId": [
            2697,
            2698,
            2699
        ],
        "idp": 2612
    },
    {
        "id": 2697,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.2.4.2.8.1",
        "childsId": [],
        "idp": 2696
    },
    {
        "id": 2698,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.2.4.2.8.2",
        "childsId": [],
        "idp": 2696
    },
    {
        "id": 2699,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.2.4.2.8.3",
        "childsId": [],
        "idp": 2696
    },
    {
        "id": 2700,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.2.4.2.9",
        "childsId": [],
        "idp": 2612
    },
    {
        "id": 2701,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cuajone",
        "WBS": "1.5.3",
        "childsId": [
            2702
        ],
        "idp": 1801
    },
    {
        "id": 2702,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Botiflaca",
        "WBS": "1.5.3.1",
        "childsId": [
            2703,
            2792,
            2881
        ],
        "idp": 2701
    },
    {
        "id": 2703,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF1 (GabRF09-1)",
        "WBS": "1.5.3.1.1",
        "childsId": [
            2704,
            2708,
            2712,
            2718,
            2759,
            2773,
            2778,
            2787,
            2791
        ],
        "idp": 2702
    },
    {
        "id": 2704,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.3.1.1.1",
        "childsId": [
            2705,
            2706,
            2707
        ],
        "idp": 2703
    },
    {
        "id": 2705,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.3.1.1.1.1",
        "childsId": [],
        "idp": 2704
    },
    {
        "id": 2706,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.3.1.1.1.2",
        "childsId": [],
        "idp": 2704
    },
    {
        "id": 2707,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.3.1.1.1.3",
        "childsId": [],
        "idp": 2704
    },
    {
        "id": 2708,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.3.1.1.2",
        "childsId": [
            2709,
            2710,
            2711
        ],
        "idp": 2703
    },
    {
        "id": 2709,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.3.1.1.2.1",
        "childsId": [],
        "idp": 2708
    },
    {
        "id": 2710,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.3.1.1.2.2",
        "childsId": [],
        "idp": 2708
    },
    {
        "id": 2711,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.3.1.1.2.3",
        "childsId": [],
        "idp": 2708
    },
    {
        "id": 2712,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.3.1.1.3",
        "childsId": [
            2713,
            2714,
            2715,
            2716,
            2717
        ],
        "idp": 2703
    },
    {
        "id": 2713,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.3.1.1.3.1",
        "childsId": [],
        "idp": 2712
    },
    {
        "id": 2714,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.3.1.1.3.2",
        "childsId": [],
        "idp": 2712
    },
    {
        "id": 2715,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.3.1.1.3.3",
        "childsId": [],
        "idp": 2712
    },
    {
        "id": 2716,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.3.1.1.3.4",
        "childsId": [],
        "idp": 2712
    },
    {
        "id": 2717,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.3.1.1.3.5",
        "childsId": [],
        "idp": 2712
    },
    {
        "id": 2718,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.3.1.1.4",
        "childsId": [
            2719,
            2726,
            2730,
            2734,
            2740,
            2746
        ],
        "idp": 2703
    },
    {
        "id": 2719,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.3.1.1.4.1",
        "childsId": [
            2720,
            2721,
            2722,
            2723,
            2724,
            2725
        ],
        "idp": 2718
    },
    {
        "id": 2720,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.3.1.1.4.1.1",
        "childsId": [],
        "idp": 2719
    },
    {
        "id": 2721,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.3.1.1.4.1.2",
        "childsId": [],
        "idp": 2719
    },
    {
        "id": 2722,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.3.1.1.4.1.3",
        "childsId": [],
        "idp": 2719
    },
    {
        "id": 2723,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.3.1.1.4.1.4",
        "childsId": [],
        "idp": 2719
    },
    {
        "id": 2724,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.3.1.1.4.1.5",
        "childsId": [],
        "idp": 2719
    },
    {
        "id": 2725,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.3.1.1.4.1.6",
        "childsId": [],
        "idp": 2719
    },
    {
        "id": 2726,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.3.1.1.4.2",
        "childsId": [
            2727,
            2728,
            2729
        ],
        "idp": 2718
    },
    {
        "id": 2727,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.3.1.1.4.2.1",
        "childsId": [],
        "idp": 2726
    },
    {
        "id": 2728,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.3.1.1.4.2.2",
        "childsId": [],
        "idp": 2726
    },
    {
        "id": 2729,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.3.1.1.4.2.3",
        "childsId": [],
        "idp": 2726
    },
    {
        "id": 2730,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.3.1.1.4.3",
        "childsId": [
            2731,
            2732,
            2733
        ],
        "idp": 2718
    },
    {
        "id": 2731,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.3.1.1.4.3.1",
        "childsId": [],
        "idp": 2730
    },
    {
        "id": 2732,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.3.1.1.4.3.2",
        "childsId": [],
        "idp": 2730
    },
    {
        "id": 2733,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.3.1.1.4.3.3",
        "childsId": [],
        "idp": 2730
    },
    {
        "id": 2734,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.3.1.1.4.4",
        "childsId": [
            2735,
            2736,
            2737,
            2738,
            2739
        ],
        "idp": 2718
    },
    {
        "id": 2735,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.3.1.1.4.4.1",
        "childsId": [],
        "idp": 2734
    },
    {
        "id": 2736,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.3.1.1.4.4.2",
        "childsId": [],
        "idp": 2734
    },
    {
        "id": 2737,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.3.1.1.4.4.3",
        "childsId": [],
        "idp": 2734
    },
    {
        "id": 2738,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.3.1.1.4.4.4",
        "childsId": [],
        "idp": 2734
    },
    {
        "id": 2739,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.3.1.1.4.4.5",
        "childsId": [],
        "idp": 2734
    },
    {
        "id": 2740,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.3.1.1.4.5",
        "childsId": [
            2741,
            2742,
            2743,
            2744,
            2745
        ],
        "idp": 2718
    },
    {
        "id": 2741,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.3.1.1.4.5.1",
        "childsId": [],
        "idp": 2740
    },
    {
        "id": 2742,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.3.1.1.4.5.2",
        "childsId": [],
        "idp": 2740
    },
    {
        "id": 2743,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.3.1.1.4.5.3",
        "childsId": [],
        "idp": 2740
    },
    {
        "id": 2744,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.3.1.1.4.5.4",
        "childsId": [],
        "idp": 2740
    },
    {
        "id": 2745,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.3.1.1.4.5.5",
        "childsId": [],
        "idp": 2740
    },
    {
        "id": 2746,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.3.1.1.4.6",
        "childsId": [
            2747,
            2752
        ],
        "idp": 2718
    },
    {
        "id": 2747,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.3.1.1.4.6.1",
        "childsId": [
            2748,
            2749,
            2750,
            2751
        ],
        "idp": 2746
    },
    {
        "id": 2748,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.3.1.1.4.6.1.1",
        "childsId": [],
        "idp": 2747
    },
    {
        "id": 2749,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.3.1.1.4.6.1.2",
        "childsId": [],
        "idp": 2747
    },
    {
        "id": 2750,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.3.1.1.4.6.1.3",
        "childsId": [],
        "idp": 2747
    },
    {
        "id": 2751,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.3.1.1.4.6.1.4",
        "childsId": [],
        "idp": 2747
    },
    {
        "id": 2752,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.3.1.1.4.6.2",
        "childsId": [
            2753,
            2754,
            2755,
            2756,
            2757,
            2758
        ],
        "idp": 2746
    },
    {
        "id": 2753,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.3.1.1.4.6.2.1",
        "childsId": [],
        "idp": 2752
    },
    {
        "id": 2754,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.3.1.1.4.6.2.2",
        "childsId": [],
        "idp": 2752
    },
    {
        "id": 2755,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.3.1.1.4.6.2.3",
        "childsId": [],
        "idp": 2752
    },
    {
        "id": 2756,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.3.1.1.4.6.2.4",
        "childsId": [],
        "idp": 2752
    },
    {
        "id": 2757,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.3.1.1.4.6.2.5",
        "childsId": [],
        "idp": 2752
    },
    {
        "id": 2758,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.3.1.1.4.6.2.6",
        "childsId": [],
        "idp": 2752
    },
    {
        "id": 2759,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.3.1.1.5",
        "childsId": [
            2760,
            2767
        ],
        "idp": 2703
    },
    {
        "id": 2760,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.3.1.1.5.1",
        "childsId": [
            2761,
            2762,
            2763,
            2764,
            2765,
            2766
        ],
        "idp": 2759
    },
    {
        "id": 2761,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.3.1.1.5.1.1",
        "childsId": [],
        "idp": 2760
    },
    {
        "id": 2762,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.3.1.1.5.1.2",
        "childsId": [],
        "idp": 2760
    },
    {
        "id": 2763,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.3.1.1.5.1.3",
        "childsId": [],
        "idp": 2760
    },
    {
        "id": 2764,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.3.1.1.5.1.4",
        "childsId": [],
        "idp": 2760
    },
    {
        "id": 2765,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.3.1.1.5.1.5",
        "childsId": [],
        "idp": 2760
    },
    {
        "id": 2766,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.3.1.1.5.1.6",
        "childsId": [],
        "idp": 2760
    },
    {
        "id": 2767,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.3.1.1.5.2",
        "childsId": [
            2768,
            2769,
            2770,
            2771,
            2772
        ],
        "idp": 2759
    },
    {
        "id": 2768,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.3.1.1.5.2.1",
        "childsId": [],
        "idp": 2767
    },
    {
        "id": 2769,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.3.1.1.5.2.2",
        "childsId": [],
        "idp": 2767
    },
    {
        "id": 2770,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.3.1.1.5.2.3",
        "childsId": [],
        "idp": 2767
    },
    {
        "id": 2771,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.3.1.1.5.2.4",
        "childsId": [],
        "idp": 2767
    },
    {
        "id": 2772,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.3.1.1.5.2.5",
        "childsId": [],
        "idp": 2767
    },
    {
        "id": 2773,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.3.1.1.6",
        "childsId": [
            2774,
            2775,
            2776,
            2777
        ],
        "idp": 2703
    },
    {
        "id": 2774,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.3.1.1.6.1",
        "childsId": [],
        "idp": 2773
    },
    {
        "id": 2775,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.3.1.1.6.2",
        "childsId": [],
        "idp": 2773
    },
    {
        "id": 2776,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.3.1.1.6.3",
        "childsId": [],
        "idp": 2773
    },
    {
        "id": 2777,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.3.1.1.6.4",
        "childsId": [],
        "idp": 2773
    },
    {
        "id": 2778,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.3.1.1.7",
        "childsId": [
            2779,
            2780,
            2781,
            2782,
            2783,
            2784,
            2785,
            2786
        ],
        "idp": 2703
    },
    {
        "id": 2779,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.3.1.1.7.1",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2780,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.3.1.1.7.2",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2781,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.3.1.1.7.3",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2782,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.3.1.1.7.4",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2783,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.3.1.1.7.5",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2784,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.3.1.1.7.6",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2785,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.3.1.1.7.7",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2786,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.3.1.1.7.8",
        "childsId": [],
        "idp": 2778
    },
    {
        "id": 2787,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.3.1.1.8",
        "childsId": [
            2788,
            2789,
            2790
        ],
        "idp": 2703
    },
    {
        "id": 2788,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.3.1.1.8.1",
        "childsId": [],
        "idp": 2787
    },
    {
        "id": 2789,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.3.1.1.8.2",
        "childsId": [],
        "idp": 2787
    },
    {
        "id": 2790,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.3.1.1.8.3",
        "childsId": [],
        "idp": 2787
    },
    {
        "id": 2791,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.3.1.1.9",
        "childsId": [],
        "idp": 2703
    },
    {
        "id": 2792,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF2 (GabRF09-2)",
        "WBS": "1.5.3.1.2",
        "childsId": [
            2793,
            2797,
            2801,
            2807,
            2848,
            2862,
            2867,
            2876,
            2880
        ],
        "idp": 2702
    },
    {
        "id": 2793,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.3.1.2.1",
        "childsId": [
            2794,
            2795,
            2796
        ],
        "idp": 2792
    },
    {
        "id": 2794,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.3.1.2.1.1",
        "childsId": [],
        "idp": 2793
    },
    {
        "id": 2795,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.3.1.2.1.2",
        "childsId": [],
        "idp": 2793
    },
    {
        "id": 2796,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.3.1.2.1.3",
        "childsId": [],
        "idp": 2793
    },
    {
        "id": 2797,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.3.1.2.2",
        "childsId": [
            2798,
            2799,
            2800
        ],
        "idp": 2792
    },
    {
        "id": 2798,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.3.1.2.2.1",
        "childsId": [],
        "idp": 2797
    },
    {
        "id": 2799,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.3.1.2.2.2",
        "childsId": [],
        "idp": 2797
    },
    {
        "id": 2800,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.3.1.2.2.3",
        "childsId": [],
        "idp": 2797
    },
    {
        "id": 2801,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.3.1.2.3",
        "childsId": [
            2802,
            2803,
            2804,
            2805,
            2806
        ],
        "idp": 2792
    },
    {
        "id": 2802,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.3.1.2.3.1",
        "childsId": [],
        "idp": 2801
    },
    {
        "id": 2803,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.3.1.2.3.2",
        "childsId": [],
        "idp": 2801
    },
    {
        "id": 2804,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.3.1.2.3.3",
        "childsId": [],
        "idp": 2801
    },
    {
        "id": 2805,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.3.1.2.3.4",
        "childsId": [],
        "idp": 2801
    },
    {
        "id": 2806,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.3.1.2.3.5",
        "childsId": [],
        "idp": 2801
    },
    {
        "id": 2807,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.3.1.2.4",
        "childsId": [
            2808,
            2815,
            2819,
            2823,
            2829,
            2835
        ],
        "idp": 2792
    },
    {
        "id": 2808,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.3.1.2.4.1",
        "childsId": [
            2809,
            2810,
            2811,
            2812,
            2813,
            2814
        ],
        "idp": 2807
    },
    {
        "id": 2809,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.3.1.2.4.1.1",
        "childsId": [],
        "idp": 2808
    },
    {
        "id": 2810,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.3.1.2.4.1.2",
        "childsId": [],
        "idp": 2808
    },
    {
        "id": 2811,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.3.1.2.4.1.3",
        "childsId": [],
        "idp": 2808
    },
    {
        "id": 2812,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.3.1.2.4.1.4",
        "childsId": [],
        "idp": 2808
    },
    {
        "id": 2813,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.3.1.2.4.1.5",
        "childsId": [],
        "idp": 2808
    },
    {
        "id": 2814,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.3.1.2.4.1.6",
        "childsId": [],
        "idp": 2808
    },
    {
        "id": 2815,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.3.1.2.4.2",
        "childsId": [
            2816,
            2817,
            2818
        ],
        "idp": 2807
    },
    {
        "id": 2816,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.3.1.2.4.2.1",
        "childsId": [],
        "idp": 2815
    },
    {
        "id": 2817,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.3.1.2.4.2.2",
        "childsId": [],
        "idp": 2815
    },
    {
        "id": 2818,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.3.1.2.4.2.3",
        "childsId": [],
        "idp": 2815
    },
    {
        "id": 2819,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.3.1.2.4.3",
        "childsId": [
            2820,
            2821,
            2822
        ],
        "idp": 2807
    },
    {
        "id": 2820,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.3.1.2.4.3.1",
        "childsId": [],
        "idp": 2819
    },
    {
        "id": 2821,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.3.1.2.4.3.2",
        "childsId": [],
        "idp": 2819
    },
    {
        "id": 2822,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.3.1.2.4.3.3",
        "childsId": [],
        "idp": 2819
    },
    {
        "id": 2823,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.3.1.2.4.4",
        "childsId": [
            2824,
            2825,
            2826,
            2827,
            2828
        ],
        "idp": 2807
    },
    {
        "id": 2824,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.3.1.2.4.4.1",
        "childsId": [],
        "idp": 2823
    },
    {
        "id": 2825,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.3.1.2.4.4.2",
        "childsId": [],
        "idp": 2823
    },
    {
        "id": 2826,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.3.1.2.4.4.3",
        "childsId": [],
        "idp": 2823
    },
    {
        "id": 2827,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.3.1.2.4.4.4",
        "childsId": [],
        "idp": 2823
    },
    {
        "id": 2828,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.3.1.2.4.4.5",
        "childsId": [],
        "idp": 2823
    },
    {
        "id": 2829,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.3.1.2.4.5",
        "childsId": [
            2830,
            2831,
            2832,
            2833,
            2834
        ],
        "idp": 2807
    },
    {
        "id": 2830,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.3.1.2.4.5.1",
        "childsId": [],
        "idp": 2829
    },
    {
        "id": 2831,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.3.1.2.4.5.2",
        "childsId": [],
        "idp": 2829
    },
    {
        "id": 2832,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.3.1.2.4.5.3",
        "childsId": [],
        "idp": 2829
    },
    {
        "id": 2833,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.3.1.2.4.5.4",
        "childsId": [],
        "idp": 2829
    },
    {
        "id": 2834,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.3.1.2.4.5.5",
        "childsId": [],
        "idp": 2829
    },
    {
        "id": 2835,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.3.1.2.4.6",
        "childsId": [
            2836,
            2841
        ],
        "idp": 2807
    },
    {
        "id": 2836,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.3.1.2.4.6.1",
        "childsId": [
            2837,
            2838,
            2839,
            2840
        ],
        "idp": 2835
    },
    {
        "id": 2837,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.3.1.2.4.6.1.1",
        "childsId": [],
        "idp": 2836
    },
    {
        "id": 2838,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.3.1.2.4.6.1.2",
        "childsId": [],
        "idp": 2836
    },
    {
        "id": 2839,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.3.1.2.4.6.1.3",
        "childsId": [],
        "idp": 2836
    },
    {
        "id": 2840,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.3.1.2.4.6.1.4",
        "childsId": [],
        "idp": 2836
    },
    {
        "id": 2841,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.3.1.2.4.6.2",
        "childsId": [
            2842,
            2843,
            2844,
            2845,
            2846,
            2847
        ],
        "idp": 2835
    },
    {
        "id": 2842,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.3.1.2.4.6.2.1",
        "childsId": [],
        "idp": 2841
    },
    {
        "id": 2843,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.3.1.2.4.6.2.2",
        "childsId": [],
        "idp": 2841
    },
    {
        "id": 2844,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.3.1.2.4.6.2.3",
        "childsId": [],
        "idp": 2841
    },
    {
        "id": 2845,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.3.1.2.4.6.2.4",
        "childsId": [],
        "idp": 2841
    },
    {
        "id": 2846,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.3.1.2.4.6.2.5",
        "childsId": [],
        "idp": 2841
    },
    {
        "id": 2847,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.3.1.2.4.6.2.6",
        "childsId": [],
        "idp": 2841
    },
    {
        "id": 2848,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.3.1.2.5",
        "childsId": [
            2849,
            2856
        ],
        "idp": 2792
    },
    {
        "id": 2849,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.3.1.2.5.1",
        "childsId": [
            2850,
            2851,
            2852,
            2853,
            2854,
            2855
        ],
        "idp": 2848
    },
    {
        "id": 2850,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.3.1.2.5.1.1",
        "childsId": [],
        "idp": 2849
    },
    {
        "id": 2851,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.3.1.2.5.1.2",
        "childsId": [],
        "idp": 2849
    },
    {
        "id": 2852,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.3.1.2.5.1.3",
        "childsId": [],
        "idp": 2849
    },
    {
        "id": 2853,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.3.1.2.5.1.4",
        "childsId": [],
        "idp": 2849
    },
    {
        "id": 2854,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.3.1.2.5.1.5",
        "childsId": [],
        "idp": 2849
    },
    {
        "id": 2855,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.3.1.2.5.1.6",
        "childsId": [],
        "idp": 2849
    },
    {
        "id": 2856,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.3.1.2.5.2",
        "childsId": [
            2857,
            2858,
            2859,
            2860,
            2861
        ],
        "idp": 2848
    },
    {
        "id": 2857,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.3.1.2.5.2.1",
        "childsId": [],
        "idp": 2856
    },
    {
        "id": 2858,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.3.1.2.5.2.2",
        "childsId": [],
        "idp": 2856
    },
    {
        "id": 2859,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.3.1.2.5.2.3",
        "childsId": [],
        "idp": 2856
    },
    {
        "id": 2860,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.3.1.2.5.2.4",
        "childsId": [],
        "idp": 2856
    },
    {
        "id": 2861,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.3.1.2.5.2.5",
        "childsId": [],
        "idp": 2856
    },
    {
        "id": 2862,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.3.1.2.6",
        "childsId": [
            2863,
            2864,
            2865,
            2866
        ],
        "idp": 2792
    },
    {
        "id": 2863,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.3.1.2.6.1",
        "childsId": [],
        "idp": 2862
    },
    {
        "id": 2864,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.3.1.2.6.2",
        "childsId": [],
        "idp": 2862
    },
    {
        "id": 2865,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.3.1.2.6.3",
        "childsId": [],
        "idp": 2862
    },
    {
        "id": 2866,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.3.1.2.6.4",
        "childsId": [],
        "idp": 2862
    },
    {
        "id": 2867,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.3.1.2.7",
        "childsId": [
            2868,
            2869,
            2870,
            2871,
            2872,
            2873,
            2874,
            2875
        ],
        "idp": 2792
    },
    {
        "id": 2868,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.3.1.2.7.1",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2869,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.3.1.2.7.2",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2870,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.3.1.2.7.3",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2871,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.3.1.2.7.4",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2872,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.3.1.2.7.5",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2873,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.3.1.2.7.6",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2874,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.3.1.2.7.7",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2875,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.3.1.2.7.8",
        "childsId": [],
        "idp": 2867
    },
    {
        "id": 2876,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.3.1.2.8",
        "childsId": [
            2877,
            2878,
            2879
        ],
        "idp": 2792
    },
    {
        "id": 2877,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.3.1.2.8.1",
        "childsId": [],
        "idp": 2876
    },
    {
        "id": 2878,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.3.1.2.8.2",
        "childsId": [],
        "idp": 2876
    },
    {
        "id": 2879,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.3.1.2.8.3",
        "childsId": [],
        "idp": 2876
    },
    {
        "id": 2880,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.3.1.2.9",
        "childsId": [],
        "idp": 2792
    },
    {
        "id": 2881,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Tablero RF3 (GabRF09-3)",
        "WBS": "1.5.3.1.3",
        "childsId": [
            2882,
            2886,
            2890,
            2896,
            2937,
            2951,
            2956,
            2965,
            2969
        ],
        "idp": 2702
    },
    {
        "id": 2882,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Ingeniería",
        "WBS": "1.5.3.1.3.1",
        "childsId": [
            2883,
            2884,
            2885
        ],
        "idp": 2881
    },
    {
        "id": 2883,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Revisión de los planos de esquemas de conexión del tablero",
        "WBS": "1.5.3.1.3.1.1",
        "childsId": [],
        "idp": 2882
    },
    {
        "id": 2884,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Supervisión de tareas de acondicionamiento",
        "WBS": "1.5.3.1.3.1.2",
        "childsId": [],
        "idp": 2882
    },
    {
        "id": 2885,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Corrección de los planos Red Line de la subestación",
        "WBS": "1.5.3.1.3.1.3",
        "childsId": [],
        "idp": 2882
    },
    {
        "id": 2886,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Preparación de materiales y equipos",
        "WBS": "1.5.3.1.3.2",
        "childsId": [
            2887,
            2888,
            2889
        ],
        "idp": 2881
    },
    {
        "id": 2887,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Movilización de herramientas",
        "WBS": "1.5.3.1.3.2.1",
        "childsId": [],
        "idp": 2886
    },
    {
        "id": 2888,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Equipos",
        "WBS": "1.5.3.1.3.2.2",
        "childsId": [],
        "idp": 2886
    },
    {
        "id": 2889,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check list de herramientas",
        "WBS": "1.5.3.1.3.2.3",
        "childsId": [],
        "idp": 2886
    },
    {
        "id": 2890,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado y Conexionado final en Celdas",
        "WBS": "1.5.3.1.3.3",
        "childsId": [
            2891,
            2892,
            2893,
            2894,
            2895
        ],
        "idp": 2881
    },
    {
        "id": 2891,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada hacia bornera de Corriente",
        "WBS": "1.5.3.1.3.3.1",
        "childsId": [],
        "idp": 2890
    },
    {
        "id": 2892,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Señales de Tensión",
        "WBS": "1.5.3.1.3.3.2",
        "childsId": [],
        "idp": 2890
    },
    {
        "id": 2893,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado de Bornera instalada a Repetidores",
        "WBS": "1.5.3.1.3.3.3",
        "childsId": [],
        "idp": 2890
    },
    {
        "id": 2894,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexionado de Señales",
        "WBS": "1.5.3.1.3.3.4",
        "childsId": [],
        "idp": 2890
    },
    {
        "id": 2895,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Rotulado de cables",
        "WBS": "1.5.3.1.3.3.5",
        "childsId": [],
        "idp": 2890
    },
    {
        "id": 2896,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas SAT",
        "WBS": "1.5.3.1.3.4",
        "childsId": [
            2897,
            2904,
            2908,
            2912,
            2918,
            2924
        ],
        "idp": 2881
    },
    {
        "id": 2897,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección de Equipos",
        "WBS": "1.5.3.1.3.4.1",
        "childsId": [
            2898,
            2899,
            2900,
            2901,
            2902,
            2903
        ],
        "idp": 2896
    },
    {
        "id": 2898,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Verificación",
        "WBS": "1.5.3.1.3.4.1.1",
        "childsId": [],
        "idp": 2897
    },
    {
        "id": 2899,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Panel Frontal",
        "WBS": "1.5.3.1.3.4.1.2",
        "childsId": [],
        "idp": 2897
    },
    {
        "id": 2900,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Salidas Digitales",
        "WBS": "1.5.3.1.3.4.1.3",
        "childsId": [],
        "idp": 2897
    },
    {
        "id": 2901,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de Resistencia por fase de los Circuitos de Corriente",
        "WBS": "1.5.3.1.3.4.1.4",
        "childsId": [],
        "idp": 2897
    },
    {
        "id": 2902,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de  fases de la Corriente de Línea",
        "WBS": "1.5.3.1.3.4.1.5",
        "childsId": [],
        "idp": 2897
    },
    {
        "id": 2903,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Check List de ajuste de conexionado de señales analógicas",
        "WBS": "1.5.3.1.3.4.1.6",
        "childsId": [],
        "idp": 2897
    },
    {
        "id": 2904,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Control de Calidad de Cables",
        "WBS": "1.5.3.1.3.4.2",
        "childsId": [
            2905,
            2906,
            2907
        ],
        "idp": 2896
    },
    {
        "id": 2905,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado del lado interior del tablero",
        "WBS": "1.5.3.1.3.4.2.1",
        "childsId": [],
        "idp": 2904
    },
    {
        "id": 2906,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Amarillado de los cables de la celda, hacia el  Tablero Registrador de Fallas",
        "WBS": "1.5.3.1.3.4.2.2",
        "childsId": [],
        "idp": 2904
    },
    {
        "id": 2907,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Megado  de cables de celda a Tablero Registrador de Falla",
        "WBS": "1.5.3.1.3.4.2.3",
        "childsId": [],
        "idp": 2904
    },
    {
        "id": 2908,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Tablero",
        "WBS": "1.5.3.1.3.4.3",
        "childsId": [
            2909,
            2910,
            2911
        ],
        "idp": 2896
    },
    {
        "id": 2909,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del tablero",
        "WBS": "1.5.3.1.3.4.3.1",
        "childsId": [],
        "idp": 2908
    },
    {
        "id": 2910,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inspección Interior del Equipo, para verificar que no existan residuos del conexionado en el interior del equipo",
        "WBS": "1.5.3.1.3.4.3.2",
        "childsId": [],
        "idp": 2908
    },
    {
        "id": 2911,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Energización del Equipo",
        "WBS": "1.5.3.1.3.4.3.3",
        "childsId": [],
        "idp": 2908
    },
    {
        "id": 2912,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de la maleta de pruebas de Inyección de Señales",
        "WBS": "1.5.3.1.3.4.4",
        "childsId": [
            2913,
            2914,
            2915,
            2916,
            2917
        ],
        "idp": 2896
    },
    {
        "id": 2913,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión directa en red con Laptop",
        "WBS": "1.5.3.1.3.4.4.1",
        "childsId": [],
        "idp": 2912
    },
    {
        "id": 2914,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de señales de Corriente y Tensión desde equipo Onmicrom en bornera de tablero",
        "WBS": "1.5.3.1.3.4.4.2",
        "childsId": [],
        "idp": 2912
    },
    {
        "id": 2915,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración de plantilla de señales a inyectar en equipo Onmicrom de acuerdo al protocolo",
        "WBS": "1.5.3.1.3.4.4.3",
        "childsId": [],
        "idp": 2912
    },
    {
        "id": 2916,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de señales de Corriente y tensión en la bornera del tablero",
        "WBS": "1.5.3.1.3.4.4.4",
        "childsId": [],
        "idp": 2912
    },
    {
        "id": 2917,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores registrado por software Real Time  Display",
        "WBS": "1.5.3.1.3.4.4.5",
        "childsId": [],
        "idp": 2912
    },
    {
        "id": 2918,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Corriente y tensión",
        "WBS": "1.5.3.1.3.4.5",
        "childsId": [
            2919,
            2920,
            2921,
            2922,
            2923
        ],
        "idp": 2896
    },
    {
        "id": 2919,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Seccionamiento de borneras de celda",
        "WBS": "1.5.3.1.3.4.5.1",
        "childsId": [],
        "idp": 2918
    },
    {
        "id": 2920,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Corriente y Tensión segun protocolo.",
        "WBS": "1.5.3.1.3.4.5.2",
        "childsId": [],
        "idp": 2918
    },
    {
        "id": 2921,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Entradas Digitales",
        "WBS": "1.5.3.1.3.4.5.3",
        "childsId": [],
        "idp": 2918
    },
    {
        "id": 2922,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lazo de corriente en los CT's",
        "WBS": "1.5.3.1.3.4.5.4",
        "childsId": [],
        "idp": 2918
    },
    {
        "id": 2923,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de lecturas de Tensión ",
        "WBS": "1.5.3.1.3.4.5.5",
        "childsId": [],
        "idp": 2918
    },
    {
        "id": 2924,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Calibración",
        "WBS": "1.5.3.1.3.4.6",
        "childsId": [
            2925,
            2930
        ],
        "idp": 2896
    },
    {
        "id": 2925,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Compensación (Offset)",
        "WBS": "1.5.3.1.3.4.6.1",
        "childsId": [
            2926,
            2927,
            2928,
            2929
        ],
        "idp": 2924
    },
    {
        "id": 2926,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de bornera cortocircuitada al Registrador",
        "WBS": "1.5.3.1.3.4.6.1.1",
        "childsId": [],
        "idp": 2925
    },
    {
        "id": 2927,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.3.1.3.4.6.1.2",
        "childsId": [],
        "idp": 2925
    },
    {
        "id": 2928,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores en Cero",
        "WBS": "1.5.3.1.3.4.6.1.3",
        "childsId": [],
        "idp": 2925
    },
    {
        "id": 2929,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Comando de Ajuste de lecturas en Cero sobre la tarjeta de adquisición",
        "WBS": "1.5.3.1.3.4.6.1.4",
        "childsId": [],
        "idp": 2925
    },
    {
        "id": 2930,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ajuste de Ganancia (Span) ",
        "WBS": "1.5.3.1.3.4.6.2",
        "childsId": [
            2931,
            2932,
            2933,
            2934,
            2935,
            2936
        ],
        "idp": 2924
    },
    {
        "id": 2931,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales en valores nominales",
        "WBS": "1.5.3.1.3.4.6.2.1",
        "childsId": [],
        "idp": 2930
    },
    {
        "id": 2932,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ejecución del Programa MFR Calibratión",
        "WBS": "1.5.3.1.3.4.6.2.2",
        "childsId": [],
        "idp": 2930
    },
    {
        "id": 2933,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripcción del valor Maximo de escala de la tarjeta de Adquisición",
        "WBS": "1.5.3.1.3.4.6.2.3",
        "childsId": [],
        "idp": 2930
    },
    {
        "id": 2934,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inscripción de los valores inyectados en el modulo de escalamiento y ajuste de ganancia",
        "WBS": "1.5.3.1.3.4.6.2.4",
        "childsId": [],
        "idp": 2930
    },
    {
        "id": 2935,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Actualización de Configuración en la PC desde el Registrador",
        "WBS": "1.5.3.1.3.4.6.2.5",
        "childsId": [],
        "idp": 2930
    },
    {
        "id": 2936,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Lectura de valores obtenidos en el lado primario en el \\\"Real Time Software\\\"",
        "WBS": "1.5.3.1.3.4.6.2.6",
        "childsId": [],
        "idp": 2930
    },
    {
        "id": 2937,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del Equipo",
        "WBS": "1.5.3.1.3.5",
        "childsId": [
            2938,
            2945
        ],
        "idp": 2881
    },
    {
        "id": 2938,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración Off-line del Equipo",
        "WBS": "1.5.3.1.3.5.1",
        "childsId": [
            2939,
            2940,
            2941,
            2942,
            2943,
            2944
        ],
        "idp": 2937
    },
    {
        "id": 2939,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de las señales Analógicas",
        "WBS": "1.5.3.1.3.5.1.1",
        "childsId": [],
        "idp": 2938
    },
    {
        "id": 2940,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Etiquetado de los canales digitales ",
        "WBS": "1.5.3.1.3.5.1.2",
        "childsId": [],
        "idp": 2938
    },
    {
        "id": 2941,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Agrupamiento de pantallas de Tensión y Corriente por linea",
        "WBS": "1.5.3.1.3.5.1.3",
        "childsId": [],
        "idp": 2938
    },
    {
        "id": 2942,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Re-escalamiento de todos los canales analógicos del Registrado de fallas",
        "WBS": "1.5.3.1.3.5.1.4",
        "childsId": [],
        "idp": 2938
    },
    {
        "id": 2943,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Definición de los Triggers de las señales analógicas por nivel de señal",
        "WBS": "1.5.3.1.3.5.1.5",
        "childsId": [],
        "idp": 2938
    },
    {
        "id": 2944,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración del estado de los canales digitales",
        "WBS": "1.5.3.1.3.5.1.6",
        "childsId": [],
        "idp": 2938
    },
    {
        "id": 2945,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Configuración en Línea",
        "WBS": "1.5.3.1.3.5.2",
        "childsId": [
            2946,
            2947,
            2948,
            2949,
            2950
        ],
        "idp": 2937
    },
    {
        "id": 2946,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Asignación de Dirección IP 172.30.186.89",
        "WBS": "1.5.3.1.3.5.2.1",
        "childsId": [],
        "idp": 2945
    },
    {
        "id": 2947,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Habilitación de Cross Trigger",
        "WBS": "1.5.3.1.3.5.2.2",
        "childsId": [],
        "idp": 2945
    },
    {
        "id": 2948,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la escala de las señales analógicas",
        "WBS": "1.5.3.1.3.5.2.3",
        "childsId": [],
        "idp": 2945
    },
    {
        "id": 2949,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de la sincronización del equipo",
        "WBS": "1.5.3.1.3.5.2.4",
        "childsId": [],
        "idp": 2945
    },
    {
        "id": 2950,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación completa de la configuración del equipo",
        "WBS": "1.5.3.1.3.5.2.5",
        "childsId": [],
        "idp": 2945
    },
    {
        "id": 2951,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Sincronización de señal de GPS",
        "WBS": "1.5.3.1.3.6",
        "childsId": [
            2952,
            2953,
            2954,
            2955
        ],
        "idp": 2881
    },
    {
        "id": 2952,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado del cable coaxial",
        "WBS": "1.5.3.1.3.6.1",
        "childsId": [],
        "idp": 2951
    },
    {
        "id": 2953,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de Fibra Optica de sincronismo",
        "WBS": "1.5.3.1.3.6.2",
        "childsId": [],
        "idp": 2951
    },
    {
        "id": 2954,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Cableado, rotulado y conexionado de cable RS-485",
        "WBS": "1.5.3.1.3.6.3",
        "childsId": [],
        "idp": 2951
    },
    {
        "id": 2955,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de sincronismo",
        "WBS": "1.5.3.1.3.6.4",
        "childsId": [],
        "idp": 2951
    },
    {
        "id": 2956,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación de Señales de Campo",
        "WBS": "1.5.3.1.3.7",
        "childsId": [
            2957,
            2958,
            2959,
            2960,
            2961,
            2962,
            2963,
            2964
        ],
        "idp": 2881
    },
    {
        "id": 2957,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de la maleta de pruebas en campo",
        "WBS": "1.5.3.1.3.7.1",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2958,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "cambio de bornera de inyección de tensión en la caja de agrupamiento",
        "WBS": "1.5.3.1.3.7.2",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2959,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Instalación de una bornera de reflejo de la caja de agrupamiento de señales de tensión",
        "WBS": "1.5.3.1.3.7.3",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2960,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conexión de las señales de Tensión en la bornera reflejo de la caja de Agrupamiento",
        "WBS": "1.5.3.1.3.7.4",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2961,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inyección de Señales de Tensión y Corriente Segun el Protocolo de Pruebas",
        "WBS": "1.5.3.1.3.7.5",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2962,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reposición de Tableros y retiro de equipos de Inyección",
        "WBS": "1.5.3.1.3.7.6",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2963,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Interconexión de la laptop con el Software Display Station 32",
        "WBS": "1.5.3.1.3.7.7",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2964,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Verificación del lazo de Corriente y tensión desde el tablero del Registrador de fallas",
        "WBS": "1.5.3.1.3.7.8",
        "childsId": [],
        "idp": 2956
    },
    {
        "id": 2965,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Pruebas de Funcionamiento",
        "WBS": "1.5.3.1.3.8",
        "childsId": [
            2966,
            2967,
            2968
        ],
        "idp": 2881
    },
    {
        "id": 2966,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Generación de perturbaciones y verificación de oscilografía",
        "WBS": "1.5.3.1.3.8.1",
        "childsId": [],
        "idp": 2965
    },
    {
        "id": 2967,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Descarga de oscilografía y analisis de datos",
        "WBS": "1.5.3.1.3.8.2",
        "childsId": [],
        "idp": 2965
    },
    {
        "id": 2968,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Conformidad de funcionamiento",
        "WBS": "1.5.3.1.3.8.3",
        "childsId": [],
        "idp": 2965
    },
    {
        "id": 2969,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de recepción de comicionamiento RF1 Ilo1",
        "WBS": "1.5.3.1.3.9",
        "childsId": [],
        "idp": 2881
    }
				]
		    }
	    ]
	
	}
  ]

}).show();

Components.getComponentById('Okno').drawTree();
Components.create('Window', {
	title: 'Edicion de Actividades',
	height: 150,
	width: 465,
	x: 484,
    y: 61,
	closeAction:'hide',
	minimizable: false,
	id: 'windowEdicionActividades',
	items: [{
		type: 'Form',
		id: 'formActividades',
		border: false,
		defaultType: "textfield",																	
		fieldDefaults: {
			labelWidth: 60
		},
		items: 
		[
			{
				type: 'InputField',
				container: $('Id'),
				enabled:false,
				input:{cols:12,
					width: '80%',
					state:'default',
					readOnly:true,
					name: 'actividadId'
				 },
			},
			{	type: 'InputField',
				autocalcCols:true,
				container: $('#ejemplo6'),
				input:{cols:12, placeholder:'ADDON ICON DEFAULT',
					width: '80%',
					addon:{
						addonType: 'icon',
						type:'fa',
						class:'fa fa-font',
						position:'right'
					},
					state:'default',
				name: 'descripcion'
			},
			},
		],
		buttons: [
			{ 
				text: 'Aceptar Cambio',			
				x: 50,
				icon:{
				type:'fontawesome',
				class:'fa-check',
				position:'left',
		},
				handler: function(e) {
				Components.getComponentById("windowEdicionActividades").hide();
				var formData = Components.getComponentById("formActividades").getValues();			
					Components.getComponentById("Okno").actividadSeleccionada.edicion(formData);	 
					
				}
			},
			{ 
				text: 'Cancelar Cambio' ,
				x: 100,
				icon:{
				type:'fontawesome',
				class:'fa-close',
				position:'left',
		       },
		
				handler: function(e) {
					Components.getComponentById("windowEdicionActividades").hide();
				} 
			}
		]
	}
  ]
}).hide();
}