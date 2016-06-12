
function WBSCambioForma(){
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
				id : 'bolita',
				shape:'box',
				scale:'minier',
				icon:{
					type:'fontawesome',
					class:'fa-circle',
					color:'#000099',
					position:'left',
				},
				tooltip:'bolita',
				listeners: {
					click: function() {
						if(Components.getComponentById("Okno").nodoSeleccionado != -1){
							Components.getComponentById("Okno").nodoSeleccionado.bolizando();
							Components.getComponentById("Okno").calcTree();
							Components.getComponentById("Okno").drawTree();
						}else
							console.log("Debe seleccionar un Nodo");
						
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
					class:'fa-square-o',
					color:'#000099',
					position:'left',
				},
				tooltip:'cuadrado',
				listeners: {
					click: function() {
						if(Components.getComponentById("Okno").nodoSeleccionado != -1){
							Components.getComponentById("Okno").nodoSeleccionado.cuadrando();
							Components.getComponentById("Okno").calcTree();
							Components.getComponentById("Okno").drawTree();
						}else
							console.log("Debe seleccionar un Nodo");
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
					class:'fa-exchange',
					color:'#000099',
					position:'left',
				},
				tooltip:'exchange',
				listeners: {
					click: function() {
					var seleccionado = Components.getComponentById("Okno").nodoSeleccionado;
						if(seleccionado != -1){
							if(seleccionado.bolita){
								seleccionado.cuadrando();
								seleccionado.tree.calcTree();
								Components.getComponentById("Okno").drawTree();
							}else{
								seleccionado.bolizando();
								Components.getComponentById("Okno").calcTree();
								seleccionado.tree.drawTree();
								}
						}else{
							console.log("Debe seleccionar un Nodo");
						}
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
}