
function WBSActividades(){
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
		items: [{
					type: 'Button',
					id : 'PropBtn2',
					shape:'box',
					scale:'minier',
					icon:{
								type:'fontawesome',
								class:'fa-pencil',
								color:'#009900',
								position:'left',
					},
					
					tooltip:'PC_EditarActividad_00163',
					listeners: {
						click: function() {
							//console.log(Components.getComponentById("Okno").actividadSeleccionada);
							if(Components.getComponentById("Okno").actividadSeleccionada!=-1)
							{
								Components.getComponentById("windowEdicionActividades").show();
								//Dar Formato para los datos de un FormContainer
								var WinData = {
												actividadId:Components.getComponentById("Okno").actividadSeleccionada.id,
												descripcion:Components.getComponentById("Okno").actividadSeleccionada.descripcion,
													};
								//colocar los datos en el FormContainer
								Components.getComponentById("formActividades").setValues(WinData);
							}
							else
							{console.log("seleccione una actividad")}
						}
					}
				},
				{
				type: 'Button',
				id : 'cuadrado',        
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-eraser',
					color:'#000099',
					position:'left',
				},
				tooltip:'eliminar actividad',
				listeners: {
					click: function() {
						if(Components.getComponentById("Okno").actividadSeleccionada != -1){
								Components.getComponentById("Okno").actividadSeleccionada.eliminar();
						}else
							console.log("Debe seleccionar un actividad");
					}
				}
				},
				{
				type: 'Button',
				id : 'cuadrado',        
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-plus-square-o',
					color:'#000099',
					position:'left',
				},
				tooltip:'añadir actividad seleccionando el nodo',
				listeners: {
					click: function() {
						if(Components.getComponentById("Okno").nodoSeleccionado != -1){
							Components.getComponentById("Okno").nodoSeleccionado.agregarActividad();
						}else
							console.log("Debe seleccionar un Nodo");
					}
				}
				},
				{
				type: 'Button',
				id : 'exp_activdades',        
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-list-ol',
					color:'#000099',
					position:'left',
				},
				tooltip:'expandir actividades de subarbol',
				listeners: {
					click: function() {
					var seleccionado = Components.getComponentById("Okno").nodoSeleccionado;
						if(seleccionado != -1){
							seleccionado.expandirActividades();
							seleccionado.tree.drawTree();
						}
							//console.log("Debe seleccionar un Nodo");
					}
				}
			},
			{
				type: 'Button',
				id : 'exp_activdades',        
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-history',
					color:'#000099',
					position:'left',
				},
				tooltip:'contraer actividades de subarbol',
				listeners: {
					click: function() {
					var seleccionado = Components.getComponentById("Okno").nodoSeleccionado;
						if(seleccionado != -1){
							seleccionado.contraerActividades();
							seleccionado.tree.drawTree();
						}
							//console.log("Debe seleccionar un Nodo");
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