
function ejemploWBS(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">WBS-ITEMS</P></font></strong><div class="row"> <div  id="ejemplo1" class="col-sm-6" style="height: 500px;" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ARBOL WBS SIMPLE</P></font></strong></div><div id="ejemplo2" class="col-sm-6" style="height: 500px;"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> ARBOL WBS + SELECCION</P></font></strong> </div></div><div class="row"> <div  id="ejemplo3" class="col-sm-6" style="height: 500px;"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ARBOL WBS + AGREGACION DE NODOS</P></font></strong></div> <div id="ejemplo4" class="col-sm-6" style="height: 500px;"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ARBOL WBS + FUNCIONALIDAD</P></font></strong> </div></div><div class="row"> <div id="ejemplo5" class="col-sm-6" style="height: 500px;"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ARBOL WBS + FUNCIONES EXTRAS</P></font></strong> </div><div id="ejemplo6" class="col-sm-6" style="height: 500px;"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">ARBOL WBS + FUNCIONES EXTRAS</P></font></strong> </div></div>',});
	
visiblesSideBar[1]=Components.create('Window',{
	container: $('#ejemplo1'),
behavior:'panel',
title: "WBS Basico",		
state:'active',
height:400, 
width:400,
items:[
{
	 type: 'SvgContainer', 
	 region: 'center',
	 id:'mysvg',
	 items:[
		{
			type: 'WBSTree',						
			id:'Okno1',
			items:[
				{	
					 type: 'WBSNode', 
					 id:0,
					 idp:null,
					 Descripcion:'soy tu papi',
					 tipoObjeto:'Cabecera',
					 childsId:[1,2,3]
				},
				{	
					 type: 'WBSNode', 
					 id:1,
					 idp:0,
					 tipoObjeto:'Tarea',
					 Descripcion:'cain'
				},
				{	
					 type: 'WBSNode', 
					 id:2,
					 idp:0,
					 tipoObjeto:'Tarea',
					 Descripcion:'abel',
					
				},
				{	
					 type: 'WBSNode', 
					 id:3,
					 idp:0,
					 tipoObjeto:'Tarea',
					 Descripcion:'leonel',
					 childsId:[4,5,6]								
				},
				{	
					 type: 'WBSNode', 
					 id:4,
					 idp:3,
					 tipoObjeto:'Tarea',
					 Descripcion:'raquel',
					
				},
				{	
					 type: 'WBSNode', 
					 id:5,
					 idp:3,
					 tipoObjeto:'Tarea',
					 Descripcion:'Isabel'
				},
				{	
					 type: 'WBSNode', 
					 id:6,
					 idp:3,
					 tipoObjeto:'Tarea',
					 Descripcion:'Ezequiel'
				}
			]
	}
	]

}
]	
}).show();

visiblesSideBar[2]=Components.create('Window',{
	behavior:'panel',
		container: $('#ejemplo2'),
title: "WBS Eventos",	
state:'active',	
height:400, 
width:400,
items:[
	{
			type: 'ToolBar',
			id: 'ChartProyectoWindowsToolBar',
			region: 'top',
			items: [
			   {
					type: 'Button',
					id : 'PropBtn',
					shape:'box',
					scale:'minier',
					icon:{
					type:'fontawesome',
					class:'fa-send',
					position:'left',
					},
				state:'active',
				
				tooltip:'Seleccion Elemento',	  
				handler: function() {					
				Components.getComponentById('100').Seleccionar();
				alert("seleccionado el elemento 100")
	}  
				}      	  
			]
		},
	{
	 type: 'SvgContainer', 
	 region: 'center',
	 id:'mysvg1',
	 items:[
		{
			type: 'WBSTree',						
			id:'Okno2',
			items:[
				{	
					 type: 'WBSNode', 
					 id:100,
					 idp:null,
					 Descripcion:'Nodo 0 Padre',
					 tipoObjeto:'Cabecera',
					 childsId:[101,102,103]
				},
				{	
					 type: 'WBSNode', 
					 id:101,
					 idp:100,
					 tipoObjeto:'Tarea',
					 Descripcion:'Listener:show',
					 listeners: {
						show: function(obj){
							alert(obj.Descripcion);
						}
					  }
					
				},
				{	
					 type: 'WBSNode', 
					 id:102,
					 idp:100,
					 tipoObjeto:'Tarea',
					 Descripcion:'Listener:hide',
					 listeners: {
						hide: function(obj){
							alert(obj.Descripcion);
						}
					  }
				},
				{	
					 type: 'WBSNode', 
					 id:103,
					 idp:100,
					 tipoObjeto:'Tarea',
					 Descripcion:'Listener:maximize,minimize',
					 childsId:[104,105,106],
					  listeners: {
						maximize: function(obj){
							alert(obj.Descripcion);
						},
						minimize: function(obj){
							alert("Minimizar");
						}
					  }
				},
				{	
					 type: 'WBSNode', 
					 id:104,
					 idp:103,
					 tipoObjeto:'Tarea',
					 Descripcion:'Listener:select',
					 listeners: {
						select: function(obj){
							alert(obj.Descripcion);
						}
					  }
				},
				{	
					 type: 'WBSNode', 
					 id:105,
					 idp:103,
					 tipoObjeto:'Tarea',
					 Descripcion:'Listener:deselect',
					 listeners: {
						deselect: function(obj){
							alert(obj.Descripcion);
						}
					  }
				},
				{	
					 type: 'WBSNode', 
					 id:106,
					 idp:103,
					 tipoObjeto:'Tarea',
					 Descripcion:'Listener:null'
				}
			]
	    }
	  ]
	
	}
  ]      
}).show();
 visiblesSideBar[4]=Components.create('Window',{
	title: "WBS Eventos",		
height:400, 
width:400,
	container: $('#ejemplo3'),
    behavior:'panel',
	state:'active',
	items:[
		{
			type: 'ToolBar',
			id: 'ChartProyectoWindowsToolBar',
			region: 'top',
			items: [
			   {
					type: 'Button',
					id : 'PropBtn',
					shape:'box',
					scale:'minier',
					icon:{
								type:'fontawesome',
								class:'fa-pencil',
								color:'#000099',
								position:'left',
					},
					
					tooltip:'PC_Editar_00161',
					listeners: {
						click: function() {
							Components.getComponentById("windowEdicionNodos").show();
							//Dar Formato para los datos de un FormContainer
								var WinData = {Descripcion:Components.getComponentById("Okno3").nodoSeleccionado.Descripcion,
											   NodoId:Components.getComponentById("Okno3").nodoSeleccionado.id	
												};
							//colocar los datos en el FormContainer
							Components.getComponentById("formNodos").setValues(WinData);
						}
					}
				}      	  
			]
		},
		{
			 type: 'SvgContainer', 
			 region: 'center',
			 id:'mysvg2',
			 items:[
				{
					type: 'WBSTree',						
					id:'Okno3',
					items:[
						{	
							 type: 'WBSNode', 
							 id:0,
							 idp:null,
							 Descripcion:'Nodo Editable Raiz',
							 tipoObjeto:'Tarea',
							 childsId:[1,2,3]
						},
						{	
							 type: 'WBSNode', 
							 id:1,
							 idp:0,
							 tipoObjeto:'Tarea',
							 Descripcion:'Nodo Editable B'
						},
						{	
							 type: 'WBSNode', 
							 id:2,
							 idp:0,
							 tipoObjeto:'Tarea',
							 Descripcion:'Nodo Editable C'	
						},
						{	
							 type: 'WBSNode', 
							 id:3,
							 idp:0,
							 tipoObjeto:'Tarea',
							 Descripcion:'Nodo Editable D',
							 childsId:[4,5,6]
						},
						{	
							 type: 'WBSNode', 
							 id:4,
							 idp:3,
							 tipoObjeto:'Tarea',
							 Descripcion:'Nodo Editable E'	 
						},
						{	
							 type: 'WBSNode', 
							 id:5,
							 idp:3,
							 tipoObjeto:'Tarea',
							 Descripcion:'Nodo Editable F'
						},
						{	
							 type: 'WBSNode', 
							 id:6,
							 idp:3,
							 tipoObjeto:'Tarea',
							 Descripcion:'Nodo Editable G'
						}
					]
			}
			]
		
		}
	 ]	
}).show();
 visiblesSideBar[5]=Components.create('Window', {
	container: $('#ejemplo3'),
	title: 'Edicion de nodos',
	x:96,
	y:128,
height:168, 
width:438,
	state:'active',
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
				type: 'TextField',
				label: 'Id',
				labelWidth: 250,
				readOnly:true,
				name: 'NodoId'
			},
			{
				type: 'TextField',
				label: 'Descripcion',
				labelWidth: 250,
				name: 'Descripcion'
			}
		],
		buttons: [
			{ 
				text: 'Aceptar Cambio',			
				x: 50,
				//State:'info',
				icon:{
				type:'fontawesome',
				class:'fa-check',
				position:'left',
		},
				handler: function(e) {
				var formData = Components.getComponentById("formNodos").getValues();				
				Components.getComponentById("Okno3").nodos[formData.NodoId].Edicion(formData);	 
				}
			},
			{ 
				text: 'Cancelar Cambio' ,
				x: 100,
				//State:'info',
				icon:{
				type:'fontawesome',
				class:'fa-close',
				position:'left',
		       },
		
				handler: function(e) {
					
				} 
			}
		]
	}
  ]
});
 visiblesSideBar[6]=Components.create('Window',{
	container: $('#ejemplo4'),
    behavior:'panel',
	title: "WBS Eventos",		
	height:400, 
width:400,
	state:'active',
	items:[
	{
		type: 'ToolBar',
		id: 'ChartProyectoWindowsToolBar',
		region: 'top',
		items: [
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
						if(Components.getComponentById("Okno4").nodoSeleccionado != -1)
							Components.getComponentById("Okno4").nodoSeleccionado.AgregaHermano(1,0);
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
					   if(Components.getComponentById("Okno4").nodoSeleccionado != -1)
							Components.getComponentById("Okno4").nodoSeleccionado.AgregaHermano(0,0);
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
						BarraArribaTareaSVG();
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
						 if(Components.getComponentById("Okno4").nodoSeleccionado != -1)
							Components.getComponentById("Okno4").nodoSeleccionado.AddChild(-1);
						else
							alert("Debe seleccionar un Nodo");
					}
				}
			},
			{
				type: 'Button',
				id : 'select',
				shape:'box',
				scale:'minier',
					icon:{
				type:'fontawesome',
				class:'fa-send',
				position:'left',
					},
				state:'active',
				tooltip:'Seleccion Elemento',	  
				handler: function() {					
					Components.getComponentById('0').Seleccionar();
					alert("seleccionado el elemento 0")
				}  
			}
		]
	},
	{
		 type: 'SvgContainer', 
		 region: 'center',
		 id:'mysvg3',
		 items:[
			{
				type: 'WBSTree',						
				id:'Okno4',
				items:[
					{	
						 type: 'WBSNode', 
						 id:99,
						 idp:null,
						 Descripcion:'Nodo 0 Padre',
						 tipoObjeto:'Cabecera',
						 childsId:[991],
						 listeners: {
							onaddchild: function(obj){
								alert("hijoo");
								
							}
						}
					},
					{	
						 type: 'WBSNode', 
						 id:991,
						 idp:99,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:show',
						listeners: {
							onaddbrother: function(obj,dir){								       
								  alert("hermano "+((dir==0)?"derecha":"izquierda"));
							}
						 }
						
					},
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
						 Descripcion:'Listener:show'
						
						
					},
					{	
						 type: 'WBSNode', 
						 id:2,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:hide',
						 
					},
					{	
						 type: 'WBSNode', 
						 id:3,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:maximize,minimize',
						 childsId:[4,5,6],
						  
					},
					{	
						 type: 'WBSNode', 
						 id:4,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:select',
						 
					},
					{	
						 type: 'WBSNode', 
						 id:5,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:deselect',
						
					},
					{	
						 type: 'WBSNode', 
						 id:6,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:null'
					}
				]
		}
		]
	
	}
  ]	
}).show();
 visiblesSideBar[8]=Components.create('Window',{
    container: $('#ejemplo5'),
    behavior:'panel',
	title: "WBS Copiar Pegar",		
	container: $('#ejemplo5'),
height:400, 
width:400,
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
				state:'error',
				icon:{
							type:'fontawesome',
							class:'fa-files-o',
							color:'#000099',
							position:'left',
				},
				tooltip:'Copiar',
				listeners: {
					click: function() {
						Components.getComponentById('Okno5').clipboard.Prepare("Copy");                               
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
						Components.getComponentById('Okno5').clipboard.Prepare("Cortar");
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
						Components.getComponentById('Okno5').clipboard.Clear();
						
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
						Components.getComponentById('Okno5').clipboard.Paste();
					}
				}
			},
			{
				type: 'Button',
				id : 'select',
				shape:'box',
				scale:'minier',
					icon:{
				type:'fontawesome',
				class:'fa-send',
				position:'left',
					},
				state:'active',
				tooltip:'Seleccion Elemento',	  
				handler: function() {					
					Components.getComponentById('0').Seleccionar();
					alert("seleccionado el elemento 0")
				}  
			}
		]
	},
	{
		 type: 'SvgContainer', 
		 region: 'center',
		 id:'mysvg4',
		 items:[
			{
				type: 'WBSTree',						
				id:'Okno5',
				clipboard:true,
				 listeners: {
					onNodeSelectForCopy: function() {
						Components.getComponentById('copyBtnWBS').setIcon('images/redcopy24.png');
						Components.getComponentById('pasteBtnWBS').enable();
					},
					onNodeSelectForCut: function() {
						Components.getComponentById('pasteBtnWBS').enable();
					},							
					onCancelClipoard: function() {
						Components.getComponentById('copyBtnWBS').setIcon('images/copy16.png');	
						Components.getComponentById('cutBtnWBS').setIcon('images/cut16.png');
						Components.getComponentById('pasteBtnWBS').disable();
					}
				},
				items:[
					{	
						 type: 'WBSNode', 
						 id:0,
						 idp:null,
						 Descripcion:'Gerente general',
						 tipoObjeto:'Cabecera',
						 childsId:[1,2,3]
					},
					{	
						 type: 'WBSNode', 
						 id:1,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Gerente de recursos humanos',
						
						
					},
					{	
						 type: 'WBSNode', 
						 id:2,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Gerente de logÃ­stica',
						 
					},
					{	
						 type: 'WBSNode', 
						 id:3,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Gerente de Desarrollo',
						 childsId:[4,5,6]								 
					},
					{	
						 type: 'WBSNode', 
						 id:4,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'LÃ­der de proyecto',								
					},
					{	
						 type: 'WBSNode', 
						 id:5,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Planeamiento'								 
					},
					{	
						 type: 'WBSNode', 
						 id:6,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Calidad'
					}
				]
		}
		]
	
	}
   ]	
}).show();
visiblesSideBar[10]=Components.create('Window',{
	title: "WBS Eventos",		
	container: $('#ejemplo6'),
    behavior:'panel',
height:400, 
width:400,
	state:'active',
	items:[
		{
			type: 'ToolBar',
			id: 'ChartProyectoWindowsToolBar',
			region: 'top',
			items: [
		   {
				type: 'Button',
				id : 'PropBtn',
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-pencil',
					color:'#000099',
					position:'left',
				},
				tooltip:'PC_Editar_00161',
				listeners: {
					click: function() {
						BarraEditarTareaSVG();
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
						BarraIzquierdaTareaSVG();
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
						BarraDerechaTareaSVG();
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
						BarraArribaTareaSVG();
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
						BarraAbajoTareaSVG();
					}
				}
			},
			{
				type: 'Button',
				id : 'resumenaBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-compress',
							color:'#000099',
							position:'left',
				},
				
				tooltip:'PC_Comprimir_Cajas_00355',
				listeners: {
					click: function() {
						VistaResumenTareaSVG();
					}
				}
			},
			{
				type: 'Button',
				id : 'expandeBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-arrows-alt',
							color:'#000099',
							position:'left',
				},
				 tooltip:'PC_Expandir_Cajas_00354',
				listeners: {
					click: function() {
						VistaExpandidaTareaSVG();
					}
				}
			},
			//{
					//xtype: 'tbseparator'
			//},
			{
				type: 'Button',
				id : 'minimizeBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-minus',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Minimizar_00353',
				listeners: {
					click: function() {
						if(SVGTareaSeleccionada!=-1)
							ArrayTareas[SVGTareaSeleccionada].Minimize();
					}
				}
			},
			{
				type: 'Button',
				id : 'maximizeBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-plus',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Maximizar_00352',
				listeners: {
					click: function() {
						if(SVGTareaSeleccionada!=-1)
							ArrayTareas[SVGTareaSeleccionada].Maximize();
					}
				}
			},
			{
				type: 'Button',
				id : 'minimizetotalBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-minus-circle',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Minimizar_Todo_00351',
				listeners: {
					click: function() {
						MinimizarTotalTareasSVG();
					}
				}
			},
			{
				type: 'Button',
				id : 'maximizetotalBtn',        
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-plus-circle',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Maximizar_Todo_00350',
				listeners: {
					click: function() {
						MaximizarTotalTareasSVG();
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
						ClipboardObj.Prepare("Cortar");
					}
				}
			},
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
				tooltip:'PC_Copiar_00348',
				listeners: {
					click: function() {
						ClipboardObj.Prepare("Copy");
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
						ClipboardObj.Clear();
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
						ClipboardObj.Paste();
					}
				}
			},
			{
			type: 'Button',
				id : 'VistaDuracion',
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-clock-o',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Ver_Duraciones_00337',
				listeners: {
					click: function() {
						VistaDuracionTareaSVG();
					}
				}
			},
			{
				type: 'Button',
				id : 'WBSRutaCritica',
				enableToggle: true,
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-sitemap',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Ruta_Critica_00286',
				listeners: {
					click: function() {
						PaintCriticalPath("WBS");
					}
				}
			},
			{
				type: 'Button',
				id : 'WBSRutasCriticasDetalles',
				hidden: true,
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-sitemap',
							color:'#000099',
							position:'left',
				},
				tooltip:'Rutas criticas',
				listeners: {
					click: function(event) {
						ShowListaRutasCriticas(event, "WBS");
					}
				}
			},
			{ 
				type: 'Button',
				id : 'WBSMostrarActividades',
				enableToggle: true,
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-indent',
							color:'#000099',
							position:'left',
				},
				
				tooltip:'PC_Mostrar_Actividades_00340',
				listeners: {
					click: function() {
						$.ajax({
							async: true,									
							beforeSend: function(){
								var g=$('<div id="ActividadesLoader" style="position: absolute;width:100%; text-align:center; margin-top:250px;"><img alt="" title="" border="0" src="images/pre-loaderbig.gif" /></div>') 
								$("#divLoadDB").html('Cargando....');
								$this.scrollingWindow.before(g)
							},									
							success: function() {
									WBSMostrarActividadesAnimada();

									$("#divLoadDB").html('Listo');
									$('#ActividadesLoader').remove();
							}	
						});
					}     
				}
			},
			{
				type: 'Button',
				id : 'WBSMostrarDinero',
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-dollar',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Balance_Economico_00341',
				listeners: {
					click: function() {
						Components.getComponentById('FloatingPanel').setVisible(true);
						Components.getComponentById('FloatingPanel').setPosition(0,54);
					}
				}
			},
			{
				type: 'Button',
				id : 'WBSManodeArrastre',
			   shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-hand-o-up',
							color:'#000099',
							position:'left',
				},
				tooltip:'PC_Mover_Ventana_00342',
				enableToggle: true,
				listeners: {
					click: function(event) {
						if (Components.getComponentById('WBSManodeArrastre').pressed) {
							ActivarArrastreWindow('SVGContendX', 'ScrollingWindowSVG_WBS');
						}
						else
							DesactivarArrastreWindow('SVGContendX', 'ScrollingWindowSVG_WBS');
					}
				}
			},
			{
				type: 'Button',
				id : 'MiniViewProyecto_SvgMainWindow',
				shape:'box',
				scale:'minier',
				icon:{
							type:'fontawesome',
							class:'fa-search-minus',
							color:'#000099',
							position:'left',
				},
				tooltip:'Mostrar Miniatura',
				enableToggle : true,
				listeners: {
					click: function (event) {
						if(event.data.OBJ.pressed){
							$this.miniView = new MiniViewWindow($this.svgContend, $this.scrollingWindow, $this.window, ArrayTareas, $this.grupo, 0);
							$this.miniView.btnMiniView = Components.getComponentById('MiniViewProyecto_SvgMainWindow');
							$this.miniView.crearWindow();
							$this.miniView.open();
						}
						else{
							$this.miniView.close();
							$this.miniView = null;
						}
					}
				}
			},
			{
				type: 'Button',
				id : 'select',
				shape:'box',
				scale:'minier',
					icon:{
				type:'fontawesome',
				class:'fa-send',
				position:'left',
					},
				state:'active',
				tooltip:'Seleccion Elemento',	  
				handler: function() {					
					Components.getComponentById('0').Seleccionar();
					alert("seleccionado el elemento 0")
				}  
			}
		]
	},
	{
		 type: 'SvgContainer', 
		 region: 'center',
		 id:'mysvg5',
		 items:[
			{
				type: 'WBSTree',						
				id:'Okno6',
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
						 Descripcion:'Listener:show',
						 listeners: {
							show: function(obj){
								alert(obj.Descripcion);
							}
						  }
						
					},
					{	
						 type: 'WBSNode', 
						 id:2,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:hide',
						 listeners: {
							hide: function(obj){
								alert(obj.Descripcion);
							}
						  }
					},
					{	
						 type: 'WBSNode', 
						 id:3,
						 idp:0,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:maximize,minimize',
						 childsId:[4,5,6],
						  listeners: {
							maximize: function(obj){
								alert(obj.Descripcion);
							},
							minimize: function(obj){
								alert("Minimizar");
							}
						  }
					},
					{	
						 type: 'WBSNode', 
						 id:4,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:select',
						 listeners: {
							select: function(obj){
								alert(obj.Descripcion);
							}
						  }
					},
					{	
						 type: 'WBSNode', 
						 id:5,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:deselect',
						 listeners: {
							deselect: function(obj){
								alert(obj.Descripcion);
							}
						  }
					},
					{	
						 type: 'WBSNode', 
						 id:6,
						 idp:3,
						 tipoObjeto:'Tarea',
						 Descripcion:'Listener:null'
					}
				]
			}
			]
		
		}
	]	
}).show();
}