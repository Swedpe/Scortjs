
function WBSControlEventos(){
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
					id : 'PropBtn1',
					shape:'box',
					scale:'minier',
					icon:{
								type:'fontawesome',
								class:'fa-pencil',
								color:'#000099',
								position:'left',
					},
					
					tooltip:'PC_EditarNodo_00161',
					listeners: {
						click: function() {
							//console.log(Components.getComponentById("Okno").nodoSeleccionado);
							if(Components.getComponentById("Okno").nodoSeleccionado!=-1)
							{
								Components.getComponentById("windowEdicionNodos").show();
								//Dar Formato para los datos de un FormContainer
								var WinData = {
												NodoId:Components.getComponentById("Okno").nodoSeleccionado.id,
												Descripcion:Components.getComponentById("Okno").nodoSeleccionado.Descripcion,
												Background:Components.getComponentById("Okno").nodoSeleccionado.Background,
												stroke:Components.getComponentById("Okno").nodoSeleccionado.stroke,
													};
								//colocar los datos en el FormContainer
								Components.getComponentById("formNodos").setValues(WinData);
							}
							else
							{console.log("seleccione un nodo")}
						}
					}
				},
		   {
				type: 'Button',
				id : 'izquierdaBtn',
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-arrow-left',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Agregar_Hermano_a_la_Izquierda_00359',
				listeners: {
					click: function() {							
						if(Components.getComponentById("Okno").nodoSeleccionado != -1)
							Components.getComponentById("Okno").nodoSeleccionado.AgregaHermano(1,0);
						else
							alert("Debe seleccionar un Nodo");
					}
				}
			},
			{
				type: 'Button',
				id : 'derechaBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-arrow-right',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Agregar_Hermano_a_la_Derecha_00358',
				listeners: {
					click: function() {
					   if(Components.getComponentById("Okno").nodoSeleccionado != -1)
							Components.getComponentById("Okno").nodoSeleccionado.AgregaHermano(0,0);
						else
							alert("Debe seleccionar un Nodo");
					}
				}
			},
			{
				type: 'Button',
				id : 'arribaBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-arrow-up',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Agregar_Nuevo_Padre_00357',
				listeners: {
					click: function() {
						if(Components.getComponentById("Okno").nodoSeleccionado != -1)
								Components.getComponentById("Okno").nodoSeleccionado.AgregarPadre(null);
							else
								alert("Debe seleccionar un Nodo");
					}
				}
			},
			{
				type: 'Button',
				id : 'abajoBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-arrow-down',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Agregar_Hijo_00356',
				listeners: {
					click: function() {
						 if(Components.getComponentById("Okno").nodoSeleccionado != -1)
							Components.getComponentById("Okno").nodoSeleccionado.AddChild(null);
						else
							alert("Debe seleccionar un Nodo");
						
					  
					}
				}
			}
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
	title: 'Edicion de nodos',
	height: 250,
	width: 465,
	x: 484,
    y: 61,
	closeAction:'hide',
	minimizable: false,
	id: 'windowEdicionNodos',
	items: [{
		type: 'Form',
		id: 'formNodos',
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
					name: 'NodoId'
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
				name: 'Descripcion'
			},
			},
			{type: 'InputField',
					id:'colorea',
					input:{
					cols:12,
					name:'colorin',
					type:'colorPicker',
					preferredFormat: "hex",
					width: '130',
					name: 'Background',
					listeners: {
						onValidateSucess: function() {
						alert("onValidateSucess");
						}
					}
				},

			},
			{type: 'InputField',
					id:'colorea2',
					input:{
					cols:12,
					name:'colorin2',
					type:'colorPicker',
					preferredFormat: "hex",
					width: '130',
					name: 'stroke',
					listeners: {
						onValidateSucess: function() {
						alert("onValidateSucess");
						}
					}
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
				Components.getComponentById("windowEdicionNodos").hide();
				var formData = Components.getComponentById("formNodos").getValues();			
					Components.getComponentById("Okno").nodos[formData.NodoId].Edicion(formData);	 
					
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
					Components.getComponentById("windowEdicionNodos").hide();
				} 
			}
		]
	}
  ]
}).hide();
}