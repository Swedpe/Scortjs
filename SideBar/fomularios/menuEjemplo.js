
function ejemploMenu(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">MENU CONTAINERS</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-6" style="height:320px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">MENU CON TOOLBAR</P></font></strong> <br><br></div><div id="ejemplo2" class="col-sm-6" style="height: 320px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> MENU CONTAINER</P></font></strong> </div></div><div><div id="ejemplo3" class="col-sm-6" style="height: 320px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">MENU DROPDOWN</P></font></strong> </div><div id="ejemplo4" class="col-sm-6" style="height: 320px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">MENU SVG - WBSITEM</P></font></strong> </div> </div>',
});
	
visiblesSideBar[1]=Components.create('Window',{
        container: $('#ejemplo1'),
		title: "TOOL BAR - DEMO ", 
        x: 60,
        y: 46,
		height:246, 
        state : 'error',
		width:397,
        items: [
          {
				type: 'ToolBar',
				region: 'top',
			    state : 'error',
				items: [				        
					{
						type: 'Button',
						text:'buscar',
						width: 85,
						scale: 'small',
				
						icon:{
							type:'fontawesome',
							class:'fa-search',
							position:'left',
						},
						tooltip:'OK',
						handler: function() {
						   
						}
					},
					{
						type: 'TextField',                                    
						allowBlank: false,
						listeners: {
							specialkey: function(f,e){
								if (e.getKey() == e.ENTER) {
									
								}
							}
						}
					},
					{
						type: 'Button',
						text:'Guardar',
						width: 85,
						scale: 'small',
						icon:{
							type:'fontawesome',
							class:'fa-floppy-o',
							position:'left',
						},
						tooltip:'OK',
						handler: function() {
						   
						}
					},
					{
						type: 'Button',
						text:'Copiar',
						width: 85,
						scale: 'small',
						icon:{
							type:'fontawesome',
							class:'fa-copy',
							position:'left',
						},
						
						
						tooltip:'OK',
						handler: function() {
						   
						}
					},
					{
						type: 'Button',
						text:'Cortar',
						width: 85,
						scale: 'small',
						icon:{
							type:'fontawesome',
							class:'fa-scissors',
							position:'left',
						},
						
						tooltip:'OK',
						handler: function() {
						   
						}
					}
			]		
            }
        ]
    }).show();

visiblesSideBar[2]=Components.create('Window',{		
        container: $('#ejemplo2'),
		title: "Menu Container", 
        x: -57,
        y: 45,
		height:247, 
      state:'highlight',
	  width:388,		
        items: [
			{
								type: 'ToolBar',
                                region: 'top',
                                 state:'highlight',
								items: [								
									{
										type: 'Button',
										id: 'RestoreSlices',
										shape:'box',
										scale:'minier',
										
										icon:{
													type:'fontawesome',
													class:'fa-plus',
													color:'#000099',
													position:'left',
										},
										css:{ 'width': '25px',
										 'height': '25px',},
										tooltip: 'Restaurar Valores Iniciales',
										listeners: {
											click: function() {
												var menu = Components.getComponentById('EscalaTiempo').menu;
												menu.add(CreateItem());
											}
										}									
									},
									{
										type: 'SplitButton',
										id: 'EscalaTiempo',
										text : 'Escala de Barras',
										tooltip: 'Elegir tipo de documento',
										menu: {
											items: [
													{
													id: 'ninguno',
													text: '<img src="images/play.png">Ninguno',									
													handler: function() {
														Components.getComponentById('mitxt').setValue('ninguno');
													}  
												},
												{
													id: 'semanal',
													text: '<img src="images/pie2.png">Semanal',
													handler: function() {
														Components.getComponentById('mitxt').setValue('semanal');
													}  
												},
												{
													id: 'mensual',
													text: '<img src="images/ungroup.png">Mensual',
													handler: function() {
														Components.getComponentById('mitxt').setValue('mensual');
														
													}  
												}
											]
										}
									 },                         
									{type: 'InputField',
										input:{cols:12,
											width: '174px',
											//placeholder:'INPUT STATE HIGHLIGHT + ICON',
											state:'highlight',
											css:{'width':'174px'}
										},

									  },	       
                         ]							
			}            
        ]
    }).show();
	
		function CreateItem(){
				var myitem = {					   
					id: 'mensual',
					text: '<img src="images/clock24.png"><b>Tiempo</b> de <i>Ejecucion</i>',
					handler: function() {
						Components.getComponentById('mitxt').setValue('Tiempo de Ejecucion');														
					}  
											
				}
					return myitem;				
				}
visiblesSideBar[3]=Components.create('Window',{
		container: $('#ejemplo3'),
		x: 60,
        y: 48,
		title: "MENU DROP-DOWN",		
		height:272, 
        width:384,
        state:'active',
		items:[
			{
                type: 'ToolBar',
                id: 'ChartProyectoWindowsToolBar',
                state:'active',
				region: 'top',
                items: [                   
                    {  type: 'MenuScort',						//el menu principal
                        id : 'BtnArrastre',        
						menuType:'ButtonDropDown',
						 items:[
						 
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									Visible:false,
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonVisible',        
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
										id : 'BtnArrastre',        
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
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-genderless',	
											},	
											tooltip:'Circular',
											listeners: {
												click: function() {
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
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-square-o',	
											},	
											tooltip:'Rectangular',
											listeners: {
												click: function() {
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
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-codepen',	
											},	
											tooltip:'Hexagon',
											listeners: {
												click: function() {
												}
											}
											}
											],
									}
									],					
									tooltip:'Drag',
								}
								]
							}
							]
					},
					{  type: 'MenuScort',						//el menu principal
                        id : 'BtnArrastre',        
						menuType:'ButtonDropDown',
						 items:[
						 
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									Visible:false,
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonVisible',        
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
										id : 'BtnArrastre',        
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
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-genderless',	
											},	
											tooltip:'Circular',
											listeners: {
												click: function() {
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
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-square-o',	
											},	
											tooltip:'Rectangular',
											listeners: {
												click: function() {
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
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-codepen',	
											},	
											tooltip:'Hexagon',
											listeners: {
												click: function() {
												}
											}
											}
											],
									}
									],					
									tooltip:'Drag',
								}
								]
							}
							]
					},
					 {  type: 'MenuScort',						//el menu principal
                        id : 'BtnArrastre',        
						menuType:'ButtonDropDown',
						 items:[
						 
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									Visible:false,
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonVisible',        
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
										id : 'BtnArrastre',        
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
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-genderless',	
											},	
											tooltip:'Circular',
											listeners: {
												click: function() {
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
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-square-o',	
											},	
											tooltip:'Rectangular',
											listeners: {
												click: function() {
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
											id : 'BotonParacuadrado',        
											scale:'minier',
											shape:'box',
											icon:{
												type:'fontawesome',
												class:'fa-codepen',	
											},	
											tooltip:'Hexagon',
											listeners: {
												click: function() {
												}
											}
											}
											],
									}
									],					
									tooltip:'Drag',
								}
								]
							}
							]
					},
                    
                ]
            },
           
         ]
        
    }).show();
	visiblesSideBar[4]=Components.create('Window',{
		title: "WBS Pert",		
        state:'info',
		container: $('#ejemplo4'),
		x: -54,
        y: 57,
		height:272, 
        width:384,
        items:[
			{
                type: 'ToolBar',
                id: 'ChartProyectoWindowsToolBar',
                region: 'top',
                state:'info',
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
                        id : 'BtnShape',
                        scale:'minier',
						shape:'box',
						icon:{
							type:'fontawesome',
							class:'fa-connectdevelop',	
						},	
                        tooltip:'Shape',
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
						scale:'minier',
						shape:'box',
						icon:{
							type:'fontawesome',
							class:'fa-toggle-off',	
						},
                        tooltip:'Drag',
                        listeners: {
                            click: function(e) {
							//hacer que el elemento sea dragable
                               Components.getComponentById('PertTree').nodos[Components.getComponentById('PertTree').nodoSeleccionado].StartDrag();
                            }
                        }
                    },
					 {  type: 'MenuScort',						//el menu principal
                        id : 'BtnArrastre',        
						menuType:'ButtonDropDown',
						 items:[
							{
							type: 'MenuItem',						
							id:'MenuSup',
							submenu:{
									Visible:false,
									VisibleOnHover:true,
									VisibleOnClick:false,		
							},
								items:[
								{					
									type: 'Button',				//el boton que estara visible en el toolbar
									id : 'BotonVisible',        
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
								id : 'BtnArrastre',        
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
									scale:'minier',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-genderless',	
									},	
									tooltip:'Circular',
									listeners: {
										click: function() {
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
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-square-o',	
									},	
									tooltip:'Rectangular',
									listeners: {
										click: function() {
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
									id : 'BotonParacuadrado',        
									scale:'minier',
									shape:'box',
									icon:{
										type:'fontawesome',
										class:'fa-codepen',	
									},	
									tooltip:'Hexagon',
									listeners: {
										click: function() {
										}
									}
									}
									],
								}
								],					
								tooltip:'Drag',
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
          
            ]
        
    }).show();	
	
}