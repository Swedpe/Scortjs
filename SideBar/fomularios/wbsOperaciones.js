
function WBSOperaciones(){
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
				id : 'copyBtnWBS',    
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-files-o',
							color:'#000099',
							position:'left',
				},
				tooltip:'Copiar',
				listeners: {
					click: function() {
						Components.getComponentById('Okno').clipboard.Prepare("Copy");                               
					}
				}
			},
			{
				type: 'Button',
				 id : 'cutBtnWBS', 
				 shape:'box',
				 scale:'minier',
				 
				icon:{
							type:'fontawesome',
							class:'fa-cut',
							color:'#000099',
							position:'left',
				},
					
				tooltip:'PC_Cortar_00349',
				listeners: {
					click: function() {
						Components.getComponentById('Okno').clipboard.Prepare("Cortar");
					}
				}
			},					
			{
				type: 'Button',
				id : 'CancelCBtnWBS',  
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-times-circle',
							color:'#000099',
							position:'left',
				},
				
				tooltip:'PC_Cancelar_Operaciones_00339',
				listeners: {
					click: function() {
						Components.getComponentById('Okno').clipboard.Clear();
						
					}
				}
			},
			{
				type: 'Button',
				id : 'pasteBtnWBS',
				shape:'box',
				scale:'minier',
			   icon:{
							type:'fontawesome',
							class:'fa-paste',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Pegar_00338',
				listeners: {
					click: function() {
						Components.getComponentById('Okno').clipboard.Paste();
						Components.getComponentById('Okno').drawTree();
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
				clipboard:true,
				 listeners: {
					onNodeSelectForCopy: function() {
						Components.getComponentById('copyBtnWBS').changeIcono(1,{color:'red'});
						Components.getComponentById('pasteBtnWBS').enable();
					},
					onNodeSelectForCut: function() {
						Components.getComponentById('pasteBtnWBS').enable();
					},							
					onCancelClipoard: function() {
						Components.getComponentById('copyBtnWBS').changeIcono(1,{color:'#000099'});	
						Components.getComponentById('cutBtnWBS').changeIcono(1,{color:'#000099'});
						Components.getComponentById('pasteBtnWBS').disable();
					},
					oncreateCopyTask: function(obj) {
						console.log("se creo nueva tarea mediante copia");
						console.log(obj);
						
					},
				},
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