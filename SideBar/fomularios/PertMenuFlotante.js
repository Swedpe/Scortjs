function PertMenuFlotante(){
visiblesSideBar = new Array();
Components.create('Window', {
	title: 'Edicion de nodos',
	height: 250,
	width: 465,
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
				name: 'Duracion'
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
				name: 'Holgura'
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
					Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].Edicion(formData);	 
					
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
visiblesSideBar[1]=Components.create('Window',{
		title: "Scortjs WBS Pert Component SWEDPE",		
        container: $('.page-content'),
		autoShow:true,
		state:'info',
		    x: 484,
            y: 61,
		height:383, 
        width:522,
        items:[
			
			{
				 type: 'SvgContainer', 
				 region: 'center',
				 id:'PertSVG',
				 items:[
						{
						type: 'Pert',						
						id:'PertTree',
						scale:20,
						 listeners: {
                            onNodeSelect: function(e) {
							console.log("activar");
								//activar los controles de un nodo. este listener afecta a todos los nodos.
							
								
                            },
							offNodeSelect: function(e){
								
							},
							onNodeSelectSucesorLink:function(e)
							{
								Components.getComponentById('BtnCortar').enable();
							},
							offNodeSelectSucesorLink:function(e)
							{
								Components.getComponentById('BtnCortar').disable();
							},
                        },
						plugins:{ 
						floatingMenuEdge:{
							triger:'edge',
							type: 'svgFloatingMenu',
							orientacion:'abajo',
							parentType: 'WBSTree',
							items:[
								
									{
										type: 'Button',
										id : 'BtnCortar',
										shape:'box',
										scale:'windowHead',
										icon:{
											type:'fontawesome',
											class:'fa-scissors',
											color:'blue',
											position:'left',
										},
										tooltip:'Cortar enlace',
										listeners: {
											click: function(e) {
												Components.getComponentById('PertTree').edgeSeleccionado.Borrar();
											}
										}
									},
								]
								},
						floatingMenuNode:{
							triger:'node',
							type: 'svgFloatingMenu',
							orientacion:'abajo',
							parentType: 'WBSTree',
							items:[
								{
									type: 'Button',
									id : 'BtnArrastrar',
									scale:'windowHead',
									shape:'box',                      
									icon:{
										type:'fontawesome',
										class:'fa-hand-paper-o',	
										color:'blue',
									},
									tooltip:'Arrastrar',
									listeners: {
										click: function(e) {
											//console.log($('#nodoPert'+Components.getComponentById('PertTree').nodoSeleccionado));
											if((Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].DragStatus==false)){
												Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].enableDrag();
												Components.getComponentById('BtnArrastre').divContainer.append('<i class="layerIcon2 buttonItem-icon-left   fa fa-ban" style="top: 5%;color: rgba(255, 0, 0, 0.55);position: absolute;z-index: 1;left: 17%;font-size: 27px;"></i>');
												Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Disable Drag');
												Components.getComponentById('BtnArrastrar').divContainer.append('<i class="layerIcon2 buttonItem-icon-left  fa fa-ban" style="top: 5%;color: rgba(255, 0, 0, 0.55);position: absolute;z-index: 1;left: 17%;font-size: 13px; scale:windowHead;"></i>');
												Components.getComponentById('BtnArrastrar').divContainer.prop('title', 'Disable Drag');

											}
											else{
												Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].disableDrag();
												$('.layerIcon2',Components.getComponentById('BtnArrastre').divContainer).remove();
												Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Enable Drag');
												$('.layerIcon2',Components.getComponentById('BtnArrastrar').divContainer).remove();
												Components.getComponentById('BtnArrastrar').divContainer.prop('title', 'Enable Drag');
											}
										   
										   
										}
										}
									
								},
								{
									type: 'Button',
									id : 'BtnEditar',
									scale:'windowHead',
									shape:'box',                      
									icon:{
										type:'fontawesome',
										class:'fa-pencil-square-o',	
										color:'blue',
									},
									tooltip:'Editar Contenido!',
									listeners: {
										click: function(e) {
											//console.log($('#nodoPert'+Components.getComponentById('PertTree').nodoSeleccionado));
											
												Components.getComponentById("windowEdicionNodos").show();
												//Dar Formato para los datos de un FormContainer
												var WinData = {
																NodoId:Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].PertId,
																Descripcion:Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].internalData.descripcion,
																Duracion:Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].internalData.duracion,
																Holgura:Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].internalData.holgura,
																	};
												//colocar los datos en el FormContainer
												Components.getComponentById("formNodos").setValues(WinData);
											
										}
									}
								},
								{
									type: 'Button',
									id : 'Boton3',
									scale:'windowHead',
									shape:'box',                      
									icon:{
										type:'fontawesome',
										class:'fa-neuter',	
										color:'blue',
									},
									tooltip:'nuevo Enlace',
									listeners: {
										click: function(e) {
											Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].nuevoEnlace(1);
										}
									}
								},
								{
									type: 'Button',
									id : 'Boton4',
									scale:'windowHead',
									shape:'box',                      
									icon:{
										type:'fontawesome',
										class:'fa-mars-stroke',	
										color:'blue',
									},
									tooltip:'nuevo Enlace',
									listeners: {
										click: function(e) {
											//console.log($('#nodoPert'+Components.getComponentById('PertTree').nodoSeleccionado));
											Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].nuevoEnlace(2);
										}
									}
								},
								{  type: 'MenuScort',						//el menu principal
                        id : 'MenuBotonesShape',        
						menuType:'ButtonDropDown',
						 items:[
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonMenuShapes',
									
									scale:'windowHead',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-connectdevelop',	
										color:'blue',
									},	
									tooltip:'Refresh',
									listeners: {
										click: function() {
										}
									}					
								},
								{type: 'MenuScort',			//el sub menu
								id : 'SubMenuBotones',        
								scale:'windowHead',
								shape:'box',
								icon:{
									type:'fontawesome',
									class:'fa-toggle-off',	
									color:'blue',
								},
								items:[											
								{
								type: 'MenuItem',						
								id:'Circleshape',
									items:[
									{													
									type: 'Button',				//el Primer boton oculto del menu
									id : 'BotonParaCirculo', 
																	
									scale:'windowHead',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-genderless',	
										color:'blue',
									},	
									tooltip:'Circular',
									listeners: {
										click: function() {
											var NodoId = Components.getComponentById('PertTree').nodoSeleccionado;
											Components.getComponentById('PertTree').nodos[NodoId].ChangeShape('circle');
										}
									}
									}
									],
								},
								{
								type: 'MenuItem',						
								id:'BoxShape',
									items:[
									{
									type: 'Button',				//el Primer boton oculto del menu
									id : 'BotonParacuadrado',        
									scale:'windowHead',
									
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-square-o',	
										color:'blue',
									},	
									tooltip:'Rectangular',
									listeners: {
										click: function() {
										var NodoId = Components.getComponentById('PertTree').nodoSeleccionado;
											Components.getComponentById('PertTree').nodos[NodoId].ChangeShape('cuadrado');
										}
									}
									}
									],
								},
								{
								type: 'MenuItem',						
								id:'PoligonShape',
									items:[
									{
									type: 'Button',				//el Primer boton oculto del menu
									id : 'BotonParaHexagono',        
									scale:'windowHead',
									
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-codepen',	
										color:'blue'
									},	
									tooltip:'Hexagon',
									listeners: {
										click: function() {
											var NodoId = Components.getComponentById('PertTree').nodoSeleccionado;
											Components.getComponentById('PertTree').nodos[NodoId].ChangeShape('hexagono');
										}
									}
									}
									],
								}
								],					
								}
								]
							}
							]
					},
							
							]
						},
						},
						items:
							[
							
    {
        "PertId": "0",
        "type": "GrafoNodo",
        "Y": "50",
        "X": "30",
        "internalData": {
            "descripcion": "SANEAMIENTO - CHICHAS",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 0,
			critical:true
        },
		"Sucesoras": [
            "1","2"
        ]
    },
    {
        "PertId": "1",
        "type": "GrafoNodo",
        "Y": "30",
        "X": "90",
        "internalData": {
            "descripcion": "INICIO DE PROYECTO",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 1,
			critical:true
        },
		"Sucesoras": [
            "3"
        ],
        "Predecesoras": [
            "0"
        ]
    },
    {
        "PertId": "2",
        "type": "GrafoNodo",
        "Y": "100",
        "X": "90",
        "internalData": {
            "descripcion": "TOTAL PROYECTO",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 2
        },
		"Sucesoras": [
            "3"
        ],
        "Predecesoras": [
            "0"
        ]
    },
    {
        "PertId": "3",
        "type": "GrafoNodo",
        "Y": "50",
        "X": "180",
        "internalData": {
            "descripcion": "SISTEMA DE AGUA POTABLE",
            "duracion": "Nah",
            "holgura": "Nad",
            "visibleId": 3,
			critical:true
        },
        "Predecesoras": [
            "1","2"
        ]
    },
			]
						},
			]}
			]
        
    }).show();
}