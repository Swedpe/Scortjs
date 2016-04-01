
function ejemplovistaGrid(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">VISTA TABLAS GRID</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4" style="height:500px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">TABLA GRID SIMPLE</P></font></strong></div><div id="ejemplo2" class="col-sm-4" style="height: 500px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> TABLA GRID + SELECTOR</P></font></strong> </div><div id="ejemplo3" class="col-sm-4" style="height: 500px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">TABLA GRID + COMBO</P></font></strong> </div></div><div><div id="ejemplo4" class="col-sm-6" style="height: 500px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">TABLA GRID + PAGINADOR</P></font></strong> </div><div id="ejemplo5" class="col-sm-6" style="height: 500px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">TABLA GRID  + TOOLBARITEM</P></font></strong> </div></div>',
});
	
visiblesSideBar[1]=Components.create('Window',{
title: "GridPrueba1", 
height:259, 
 behavior:'panel',
container: $('#ejemplo1'),
state:'error',
width:422,
items: [
{
type: "GridContainer",
region: "center",
id: "GridPrueba",
state:'error',
cellEditing: {clicksToEdit: 2},
autoScroll: true,
columns: [
	{
		type: "GridColumn",
		text: "ID",
		dataIndex: "pos2",
		width: "26%",
		editor: {
							type: 'TextField',
							allowBlank: false
		}
	},
	
	
	{
		type: "GridColumn",
		text: "NOMBRE",
		dataIndex: "pos1",
		width: "40%",
		editor: {
							type: 'TextField',
							allowBlank: false
		}
	},
	{
		type: "GridColumn",
		text: "EDAD",
		dataIndex: "pos4",
		typeData: "number",
		sortable: true,
		filter: true,
		 width: "40%",
		 editor: {
							type: 'NumberField',
							allowBlank: false
						}
	},					
	
],
store: { //store permite almacenar los datos en el grid.
	fields: ["pos1", "pos2", "pos4"], //pos1:representa al nombre
									  //pos2:representa el ID      
									  //pos4:representa la EDAD
									  //Cada pos es definido en cada columa como data index.
	data: [
		{ pos1: "Cesar", pos2: 01, pos4:21},
		{ pos1: "abelardo", pos2: 02, pos4:19},
		{ pos1: "geanfranco", pos2: 03, pos4:10},
		{ pos1: "ernesto", pos2: 04, pos4:40},
		{ pos1: "roberto", pos2: 05, pos4:50},
		{ pos1: "luis", pos2: 06, pos4:50},
		{ pos1: "jose", pos2: 07, pos4:50},
		{ pos1: "daniel", pos2: 08, pos4:50},
		{ pos1: "william", pos2: 09, pos4:50},
		{ pos1: "ana", pos2: 10, pos4:45}
	]
}
}
]
}).show();

visiblesSideBar[2]=Components.create('Window',{
        container: $('#ejemplo3'),
		 behavior:'panel',
		state:'active',
		title: "GridPrueba3", 
        height:320, 
        width:570,
        items: [
            {
                type: "GridContainer",
                region: "center",
                id: "GridPrueba1",
				state:'active',
				cellEditing: {clicksToEdit: 2},
				autoScroll: true,
                selModel: {
                                type: "checkboxmodel",
                                checkOnly: false,
                               
                },	
                columns: [
                    {
                        type: "GridColumn",
                        text: "NOMBRE",
                        dataIndex: "pos1",
						width: "20%",
						editor: {
                                            type: 'TextField',
                                            allowBlank: false
                        }
                    },
					{
                        type: "GridColumn",
                        text: "EDAD",
                        dataIndex: "pos4",
                        typeData: "number",
                        sortable: true,
                        filter: true,
						 width: "16%",
                         editor: {
                                            type: 'NumberField',
                                            allowBlank: false
                                        }
                    },					
					{
                            type: 'GridColumn',                            
                            text: 'NICKNAME',							
                            width: "20%",
							  editor: {
                                            type: 'TextField',
                                            allowBlank: false
                                        },
                            renderer: function(value, metaData, record, row, col, store, gridView){                               
								return record.pos1+record.pos4;
                            }
                     },
                  
                    {
                        type: "GridColumn",
						id:"combocolumn",
                        text: "L.ORIGEN",
                        dataIndex: "pos3",
                        sortable: true,
                        filter: true,
						width: "20%",
						editor:{
                                            type: 'ComboBox',
                                            displayField: 'TipoVariable',
                                            valueField: 'TipoVariable',
                                            store: {
                                                id: 'DataTypes',
                                                fields: ['IdTipoVariable','TipoVariable'],
                                                data: [
                                                    { 'IdTipoVariable': '1', "TipoVariable": "Arequipa"  },									
                                                    { 'IdTipoVariable': '3', "TipoVariable": "Moquegua"  },
                                                    { 'IdTipoVariable': '4', "TipoVariable": "Cusco"  },
                                                    { 'IdTipoVariable': '5', "TipoVariable": "Puno"  },
													{ 'IdTipoVariable': '6', "TipoVariable": "Tacna"  }
                                                ]
                                            }
                                 }
                    }
                ],
                store: {
                    fields: ["pos1", "pos2", "pos3", "pos4"],
                    data: [
                        { pos1: "Cesar", pos2: true, pos3:"Arequipa", pos4:21},
                        { pos1: "abelardo", pos2: false, pos3:"Puno", pos4:19},
                        { pos1: "geanfranco", pos2: true, pos3:"Arequipa", pos4:10},
                        { pos1: "ernesto", pos2: false, pos3:"Tacna", pos4:40},
                        { pos1: "roberto", pos2: true, pos3:"Tacna", pos4:50},
                        { pos1: "luis", pos2: true, pos3:"Arequipa", pos4:50},
                        { pos1: "jose", pos2: true, pos3:"Cusco", pos4:50},
                        { pos1: "daniel", pos2: true, pos3:"Puno", pos4:50},
                        { pos1: "luis", pos2: true, pos3:"Moquegua", pos4:50},
                        { pos1: "jose", pos2: true, pos3:"Moquegua", pos4:50},
                        { pos1: "daniel", pos2: true, pos3:"Tacna", pos4:50},
                        { pos1: "isac", pos2: true, pos3:"Tacna", pos4:50},
                        { pos1: "emma", pos2: true, pos3:"Arequipa", pos4:50},	
						{ pos1: "emma", pos2: true, pos3:"Arequipa", pos4:50},							
                        { pos1: "william", pos2: true, pos3:"Arequipa", pos4:50}
                    ]
                }
            }
        ]
    }).show();
visiblesSideBar[3]=Components.create('Window',{
title: "GridPrueba2", 
container: $('#ejemplo2'),
 behavior:'panel',
height:260, 
state:'highlight',
width:600,
items: [
{
type: "GridContainer",
region: "center",
id: "GridPrueba2",
state:'highlight',
autoScroll:true,
selModel: { //define el modelo de seleccion
	 type: "checkboxmodel", // modelo de seleccion es check
	 checkOnly: false,   
			   
},	
columns: [
	{
		type: "GridColumn",  //tipo de columna a usar
		text: "NOMBRE",     // texto de la columna
		dataIndex: "pos1", //indice a usar para hacer ref. a la columna 
						  //desde los contenedores de datos local o remoto.
		width: "26%",    //ancho de la columna , la suma % de todas las
						//columnas debe ser 100%
		sortable: false,
		editor: {
							type: 'TextField',
							allowBlank: false
		}
	},
	{
		type: "GridColumn",
		text: "EDAD",
		dataIndex: "pos4",
	   // typeData: "number",
	   // sortable: true,
	   filter: false,
		 width: "26%",
		 editor: {
							type: 'TextField',
							allowBlank: false
						}
	},					
	{
			type: 'GridColumn',                            
			text: 'NICKNAME',							
			width: "26%",
			sortable: false,
			filter: false,
			editor: {
							type: 'TextField',
							allowBlank: false
						},
			renderer: function(value, metaData, record, row, col, store, gridView){                               
				return record.pos1+record.pos4;
			}
	 },
   

 
],
store: {
	fields: ["pos1", "pos2", "pos4"],
	data: [
		{ pos1: "Cesar", pos2: true, pos4:21},
		{ pos1: "abelardo", pos2: false, pos4:19},
		{ pos1: "geanfranco", pos2: true, pos4:10},
		{ pos1: "ernesto", pos2: false,  pos4:40},
		{ pos1: "roberto", pos2: true, pos4:50},
		{ pos1: "luis", pos2: true, pos4:50},
		{ pos1: "jose", pos2: true,pos4:50},
		{ pos1: "daniel", pos2: true, pos4:50},
		{ pos1: "luis", pos2: true, pos4:50}
		
	]
},
}
]
}).show();
	visiblesSideBar[4]=Components.create('Window',{
title: "GridPrueba2", 
container: $('#ejemplo4'),
 behavior:'panel',
height:260, 
state:'warning',
width:600,
items: [
	{
		type: "GridContainer",
		region: "center",
		id: "GridPrueba3",
		state:'warning',
		cellEditing: {clicksToEdit: 2},
		autoScroll: true,
		selModel: {
						type: "checkboxmodel",
						checkOnly: false,
					   
		},	
		columns: [
			{
				type: "GridColumn",
				text: "NOMBRE",
				dataIndex: "pos1",
				width: "26%",
				editor: {
									type: 'TextField',
									allowBlank: false
				}
			},
			{
				type: "GridColumn",
				text: "EDAD",
				dataIndex: "pos4",
			   // typeData: "number",
			   // sortable: true,
				//filter: true,
				 width: "26%",
				 editor: {
									type: 'TextField',
									allowBlank: false
								}
			},					
			{
					type: 'GridColumn',                            
					text: 'NICKNAME',							
					width: "26%",
					  editor: {
									type: 'TextField',
									allowBlank: false
								},
					renderer: function(value, metaData, record, row, col, store, gridView){                               
						return record.pos1+record.pos4;
					}
			 },
		   
		
		 
		],
		store: {
			pageSize:5,
			fields: ["pos1", "pos2", "pos4"],
			data: [
				{ pos1: "Cesar", pos2: true, pos4:21},
				{ pos1: "abelardo", pos2: false, pos4:19},
				{ pos1: "geanfranco", pos2: true, pos4:10},
				{ pos1: "ernesto", pos2: false,  pos4:40},
				{ pos1: "roberto", pos2: true, pos4:50},
				{ pos1: "luis", pos2: true, pos4:50},
				{ pos1: "jose", pos2: true,pos4:50},
				{ pos1: "daniel", pos2: true, pos4:50},
				{ pos1: "luis", pos2: true, pos4:50}
				
			]
		},
		bbar: { //determina la barra de paginaciion
					displayInfo: true,
					displayMsg: 'Mostrando  {0} - {1} de {2}',
					emptyMsg: "No hay temas a mostrar"
				},
				
	}
]
}).show();
	visiblesSideBar[5]=Components.create('Window',{
        title: "GridPrueba5", 
        behavior:'panel',
		container: $('#ejemplo5'),
		height:260, 
        state:'info',
		width:600,
        items: [
            {
                type: "GridContainer",
                region: "center",
                id: "GridPrueba4",
				state:'info',
				cellEditing: {clicksToEdit: 2},
				autoScroll: true,
                selModel: {
                                type: "checkboxmodel",
                                checkOnly: false,
                               
                },	
                columns: [
                    {
                        type: "GridColumn",
                        text: "NOMBRE",
                        dataIndex: "pos1",
						width: "26%",
						editor: {
                                            type: 'TextField',
                                            allowBlank: false
                        }
                    },
					{
                        type: "GridColumn",
                        text: "EDAD",
                        dataIndex: "pos4",
                       // typeData: "number",
                       // sortable: true,
                        //filter: true,
						 width: "26%",
                         editor: {
                                            type: 'TextField',
                                            allowBlank: false
                                        }
                    },					
					{
                            type: 'GridColumn',                            
                            text: 'NICKNAME',							
                            width: "26%",
							  editor: {
                                            type: 'TextField',
                                            allowBlank: false
                                        },
                            renderer: function(value, metaData, record, row, col, store, gridView){                               
								return record.pos1+record.pos4;
                            }
                     },
                   
                
                 
                ],
                store: {
                    fields: ["pos1", "pos2", "pos4"],
                    data: [
                        { pos1: "Cesar", pos2: true, pos4:21},
                        { pos1: "abelardo", pos2: false, pos4:19},
                        { pos1: "geanfranco", pos2: true, pos4:10},
                        { pos1: "ernesto", pos2: false,  pos4:40},
                        { pos1: "roberto", pos2: true, pos4:50},
                        { pos1: "luis", pos2: true, pos4:50},
                        { pos1: "jose", pos2: true,pos4:50},
                        { pos1: "daniel", pos2: true, pos4:50},
                        { pos1: "luis", pos2: true, pos4:50}
                        
                    ]
                },
				bbar: { //determina la barra de paginacion														//barra de paginacion,  los parametros [1,2,3] -> [Elemento de inicio de grupo,Elemento Final de grupo, Total de elementos]
                            displayInfo: true,
                            displayMsg: 'Mostrando  {0} - {1} de {2}',
                            emptyMsg: "No hay temas a mostrar"
                        },
						gridviewtittle: {
                           displayInfo:  true,
                        },
            }
        ]
    }).show();
	
}