
function ejemploPert(){
visiblesSideBar = new Array();
visiblesSideBar[1]=Components.create('Window',{
		title: "Scortjs WBS Pert Component SWEDPE",		
        container: $('.page-content'),
		state:'info',
		    x: 484,
            y: 61,
		height:383, 
        width:522,
        items:[
			{
                type: 'ToolBar',
                id: 'ChartProyectoWindowsToolBar',
                state:'info',
				region: 'top',
                items: [
                   {
                        type: 'Button',
                        id : 'BtnCritical',
                        scale:'minier',
                        shape:'box',                      
						icon:{
							type:'fontawesome',
							class:'fa-sitemap',		
						},
                        tooltip:'Critical',
                        listeners: {
                            click: function() {
                            }
                        }
                    },
                    {
                        type: 'Button',
                        id : 'BtnRefresh',        
                        scale:'minier',
						shape:'box',
						icon:{
							type:'fontawesome',
							class:'fa-refresh',	
						},	
                        tooltip:'Refresh',
                        listeners: {
                            click: function() {
                            }
                        }
                    },
                    {
                        type: 'Button',
                        id : 'BtnArrastre',
						enabled:false,								
						scale:'minier',
						shape:'box',
						icon:{
							type:'fontawesome',
							class:'fa-toggle-off',	
						},
                        tooltip:'Enable Drag',
                        listeners: {
                            click: function(e) {
							if((Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].DragStatus==false)){
									Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].enableDrag();
									Components.getComponentById('BtnArrastre').divContainer.append('<i class="layerIcon2 buttonItem-icon-left   fa fa-ban" style="top: 5%;color: rgba(255, 0, 0, 0.55);position: absolute;z-index: 1;left: 17%;font-size: 27px;"></i>');
									Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Disable Drag');

								}
								else{
									Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].disableDrag();
									$('.layerIcon2',Components.getComponentById('BtnArrastre').divContainer).remove();
									Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Enable Drag');
								}
                               
							   
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
							enabled:false,
							submenu:{
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonMenuShapes',
									enabled:false,				//inicialmente disabled		
									scale:'minier',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-connectdevelop',	
									},	
									tooltip:'Refresh',
									listeners: {
										click: function() {
										}
									}					
								},
								{type: 'MenuScort',			//el sub menu
								id : 'SubMenuBotones',        
								scale:'minier',
								shape:'box',
								icon:{
									type:'fontawesome',
									class:'fa-toggle-off',	
								},
								items:[											
								{
								type: 'MenuItem',						
								id:'Circleshape',
									items:[
									{													
									type: 'Button',				//el Primer boton oculto del menu
									id : 'BotonParaCirculo', 
									enabled:false,									
									scale:'minier',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-genderless',	
									},	
									tooltip:'Circular',
									listeners: {
										click: function() {
											var NodoId = Components.getComponentById('PertTree').nodoSeleccionado;
											Components.getComponentById('PertTree').nodos[NodoId].ChangeShape('circulo');
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
									scale:'minier',
									enabled:false,
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-square-o',	
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
									scale:'minier',
									enabled:false,
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-codepen',	
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
								tooltip:'Hexagon',
								}
								]
							}
							]
					},
                    {
                        type: 'Button',
                        id : 'BtnZoom',        
                        scale:'minier',
						shape:'box',
						icon:{
							type:'fontawesome',
							class:'fa-search',	
						},
                        tooltip:'Zoom',
                        listeners: {
                            click: function() {
                                BarraAbajoTareaSVG();
                            }
                        }
                    }
                ]
            },
            {
				 type: 'SvgContainer', 
				 region: 'center',
				 id:'PertSVG',
				 items:[
						{
						type: 'Pert',						
						id:'PertTree',
						 listeners: {
                            onNodeSelect: function(e) {
								//activar los controles de un nodo. este listener afecta a todos los nodos.
								Components.getComponentById('MenuSup').enable();
								Components.getComponentById('BotonMenuShapes').enable();
								Components.getComponentById('BotonParaCirculo').enable();
								Components.getComponentById('BotonParaHexagono').enable();
								Components.getComponentById('BotonParacuadrado').enable();
								//el botón que habilita el arrastre
								Components.getComponentById('BtnArrastre').enable();
								console.log()
								if((e.DragStatus==true)&&($('.layerIcon2',Components.getComponentById('BtnArrastre').divContainer).length==0)){
									Components.getComponentById('BtnArrastre').divContainer.append('<i class="layerIcon2 buttonItem-icon-left   fa fa-ban" style="top: 5%;color: rgba(255, 0, 0, 0.55);position: absolute;z-index: 1;left: 17%;font-size: 27px;"></i>');
									Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Disable Drag');

								}
								else{
									$('.layerIcon2',Components.getComponentById('BtnArrastre').divContainer).remove();
									Components.getComponentById('BtnArrastre').divContainer.prop('title', 'Enable Drag');
								}
								
								
                            }
                        },
						
						items:[
								{
								 PertId:1,
								 type: 'GrafoNodo', 
								 X:15,
								 Y:36,
								 shape:'hexagono',
								 internalData:{
									descripcion:'Swedpe ScortJs',
									duracion:'10h',
									holgura:'8d',
									visibleId:'100'
									},
								},
								{
								 		
								 type: 'GrafoNodo',
								 PertId:2,								 
								 X:15,
								 Y:14,						 
								 Sucesoras:[3],
								 internalData:{
									descripcion:'Framework',
									duracion:'58h',
									holgura:'6d',
									visibleId:'101'
									},
								},
								{	
								 type: 'GrafoNodo', 
								 X:45,
								 Y:25,
								 Predecesoras:[2],
								 Sucesoras:[4],
								 PertId:3,	
								 internalData:{						
									descripcion:'Pre Finish',
									duracion:'87h',
									holgura:'1d',
									visibleId:'102'
									},
								},
								{	
								 type: 'GrafoNodo', 
								 X:85,
								 Y:25,
								 Predecesoras:[3],
								 PertId:4,	
								 internalData:{						
									descripcion:'Finish',
									duracion:'1h',
									holgura:'1d',
									visibleId:'103'
									},
								},								
							]
						}
						]
			
			}
            ]
        
    }).show();
}