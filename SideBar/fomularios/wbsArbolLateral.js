
function WBSArbolLateral(){
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
		id: 'ChartProyectoWindowsToolBar',
		region: 'top',
		items: [
		
			{
				type: 'Button',
				id : 'VerData',
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-tree',
					color:'#000099',
					position:'left',
				},
				tooltip:'RO_LEFT',
				listeners: {
					click: function() {
						Components.getComponentById("Okno").cambiarOrientacion("left")
					}
				}
			},
			{
				type: 'Button',
				id : 'VerData',
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-tree',
					color:'yellow',
					position:'left',
				},
				tooltip:'RO_TOP',
				listeners: {
					click: function() {
						Components.getComponentById("Okno").cambiarOrientacion("top")
					}
				}
			},
			{
				type: 'Button',
				id : 'exchange',
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa fa-exchange',
					color:'black',
					position:'left',
				},
				tooltip:'PC_Cambiar_orientacion',
				listeners: {
					click: function() {							
							if (Components.getComponentById("Okno").config.orientation == "top")
							Components.getComponentById("Okno").cambiarOrientacion("left");
							else if (Components.getComponentById("Okno").config.orientation == "left")
							Components.getComponentById("Okno").cambiarOrientacion("top");
							
					}
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
				items:[
					{	
						 type: 'WBSNode', 
						 id:0,
						 idp:null,
						 Descripcion:'Nodo 0 Padre',
						 tipoObjeto:'Cabecera',
						 childsId:[1,2,3]
					},
					{	
						 type: 'WBSNode', 
						 id:1,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Nada'
						
						
					},
					{	
						 type: 'WBSNode', 
						 id:2,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Nada',
						 
					},
					{	
						 type: 'WBSNode', 
						 id:3,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'No Puedo Tener mas hijos',
						 childsId:[4,5,6],
						 listeners: {
							onrequestaddchild: function(obj){								       
								  alert("no mas hijos");
								  return false;
							}
						 }
						  
					},
					{	
						 type: 'WBSNode', 
						 id:4,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'No mas Hermanos',
						 listeners: {
							onrequestaddbrother: function(obj){								       
								  alert("No mas Hermanos");
								  return false;
							}
						 }
						 
					},
					{	
						 type: 'WBSNode', 
						 id:5,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'onaddbrother propio del Nodo',
						listeners: {
							onaddbrother: function(obj,Lado){		
							}
						 }
					},
					{	
						 type: 'WBSNode', 
						 id:6,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Evento Luego de Crear Hijo',
						 listeners: {
							onaddchild: function(obj,Lado){		
							}
						 }
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