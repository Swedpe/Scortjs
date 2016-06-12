
function WBSMultiple(){
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
					
  
    {
        "id": 1,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Implementación de Equipos RF para las Sub-Estaciones de SPCC ",
        "WBS": "1",
        "childsId": [
            2,
            7
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
            8
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
            9
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
    
				]
		    }
	    ]
	
	}
  ]

}).show();

Components.getComponentById('Okno').drawTree();
visiblesSideBar[2]=Components.create('Window',{
	
	title: "WBS Eventos",		
	height:450, 
	width:750,
	x: 484,
    y: 561,
	state:'error',
	items:[
	{
		type: 'ToolBar',
		id:'statusbar002',
		region: 'bottom',
		 items:[
		   {
				type: 'ProgressBar',	
				x:0,
				y:70,
				align: "left",
				width: 250,
				value:0,
				id:'progressload1',
				state:'error',
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
				id:'Okno2',
				plugins:{ svgToolTip:{
						type: 'svgToolTip',
						orientacion:'abajo',
						parentType: 'WBSTree',
			}},
			listeners: {
							onDrawTree: function(obj,paso){						
								  Components.getComponentById('progressload1').setValue(paso);
							}
						 },
				items:[
					
 
    {
        "id": 21,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Implementación de Equipos RF para las Sub-Estaciones de SPCC ",
        "WBS": "1",
        "childsId": [
            22,
            27
        ],
    },
    {
        "id": 22,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Inicio de Proyecto",
        "WBS": "1.1",
        "childsId": [
            23,
            26
        ],
        "idp": 21
    },
    {
        "id": 23,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "KOM - Reunión de Inicio del Proyecto",
        "WBS": "1.1.1",
        "childsId": [
            24,
            25
        ],
        "idp": 22
    },
    {
        "id": 24,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Traslado del Personal a Ilo",
        "WBS": "1.1.1.1",
        "childsId": [],
        "idp": 23
    },
    {
        "id": 25,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Reunión de Inicio y Defición del Acta",
        "WBS": "1.1.1.2",
        "childsId": [],
        "idp": 23
    },
    {
        "id": 26,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Acta de constitución aprobada",
        "WBS": "1.1.2",
        "childsId": [],
        "idp": 22
    },
    {
        "id": 27,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Ingeniería",
        "WBS": "1.2",
        "childsId": [
            28
        ],
        "idp": 21
    },
    {
        "id": 28,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Común - Consolidado",
        "WBS": "1.2.1",
        "childsId": [
            29
        ],
        "idp": 27
    },
    {
        "id": 29,
        "type": "WBSNode",
        "tipoObjeto": "Tarea",
        "Descripcion": "Planificación",
        "WBS": "1.2.1.1",
        "childsId": [
        ],
        "idp": 28
    },
    
    
				]
		    }
	    ]
	
	}
  ]

}).show();

Components.getComponentById('Okno2').drawTree();
}