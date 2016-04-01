
function ejemploButton(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div id="parte2" class="col-sm-12"><strong><FONT FACE="arial"><p style="color: #BD133D; font-size: 14pt">BOTONES E ICONOS SCORT</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4" style="height: 200px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Botones con diferentes estados</P></font></strong><br><br></div><div id="ejemplo2" class="col-sm-4" style="height: 150px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Botones con diferentes tamaños</P></font></strong> </div><div id="ejemplo4" class="col-sm-4" style="height: 150px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">Botones de distintos tamaños + iconos</P></font></strong> </div></div><!--El ancho es de 12 columnas, una vez ocupadas las 12 se cierra el row-->	<div class="row"><div id="ejemplo5" class="col-sm-12" style =" height: 230px ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Botones cuadrados de distintos tamaños + iconos </P></font></strong> </div> </div>	<div class="row"><div id="ejemplo6" class="col-sm-4" style =" height: 300px ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Botones cuadrados de distintos tamaños sin descripcion</P></font></strong> </div><div id="ejemplo7" class="col-sm-8" style =" height: 300px ;" align="right">  <strong><FONT FACE="arial"> <p align="center" style="color: #BD133D; font-size: 12pt"> Botones circulares de distintos tamaños + iconos</P></font></strong> </div></div><div class="row"><div id="ejemplo8" class="col-sm-12" style =" height: 230px ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Botones Glip de distintas formas </P></font></strong> </div></div><!--creo 2 columnas una de 4 y otra de 8, la de 8 no la usare pero igual la declaro para que no descuadren los demas elementos--><div class="row"><div class="col-sm-4" style="height: 20px"></div><div id="InputE3" class="col-sm-4"></div><div class="col-sm-4"></div></div><div class="row"><div id="ejemplo3"  class="col-sm-11" style="height: 350px"><strong><FONT FACE="arial"> <p align="center" style="color: #BD133D; font-size: 12pt">GALERIA DE BOTONES + ICONOS FONTAWESOME</P></font></strong> 		</div></div><div class="row"><div class="col-sm-4" style="height: 20px"></div><div id="InputE300" class="col-sm-4"></div><div class="col-sm-4"></div></div><div class="row"><div id="ejemplo300"  class="col-sm-11" style="height: 350PX"><strong><FONT FACE="arial"> <p align="center" style="color: #BD133D; font-size: 12pt">GALERIA DE BOTONES + ICONOS GLIP </P></font></strong></div></div></div>',
});
	
visiblesSideBar[1]=Components.create('Button',{
	scale: 'medium',
	container: $('#ejemplo1'),
	state:'error',
	text:'Estado error',
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('error');
				}  
}).show();

visiblesSideBar[2]=Components.create('Button',{

		scale: 'medium',
		container: $('#ejemplo1'),
		text:'Estado highlight',
		state:'highlight',
		tooltip:'texto + icono',	  
		handler: function() {
					alert('highlight');
				}  
	}).show();
	
visiblesSideBar[3]=Components.create('Button',{				
		scale: 'medium',
		container: $('#ejemplo1'),
		text:'Estado default',
		icon: 
			{
								type:'image',
								image:'images/plussymbol.png',  
								position:'left'
							
			},
					
		tooltip:'Small button',	  
		handler: function() {
						alert('default');
					}  
		}).show();
visiblesSideBar[4]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo1'),
		scale: 'medium',
		text:'Estado active',
		tooltip:'Medium button',	  
		handler: function() {
			alert('active');
		}  
	}).show();
visiblesSideBar[5]=Components.create('Button',{
		state:'info',	
		container: $('#ejemplo1'),
		scale: 'medium',
		text:'Estado info',
		tooltip:'Boton Info',	  
		handler: function() {
			alert('info');
		}  
	}).show();

visiblesSideBar[6]=Components.create('Button',{
		state:'warning',
		container: $('#ejemplo1'),					
		scale: 'medium',
		text:'Estado warning',
		tooltip:'Boton Warning',	
	}).show();
	
visiblesSideBar[7]=Components.create('Button',{		
		id:"botontoggle",
		container: $('#ejemplo1'),
		state:'info',		//estado 1 
		State2:'error',		//estado 2 
		scale: 'medium',
		icon:
			{
								type:'image',
								image:'images/ok.png',  
								position:'left'
							
			},
					
		tooltip:'Toggle Button',
		text:'Toggle Info-Error',
		enableToggle:true,
		handler: function() {
				 console.log("ee");
		}    							
	 }).show();
//segundo bloque -----------------------------------------------------------------------------------------------------------------------------

visiblesSideBar[8]=Components.create('Button',{		 
				scale: 'minier',
				container: $('#ejemplo2'),
				state:'error',
				text:'minier',
				tooltip:'Tamaño Personalizado',	  
				handler: function() {
					alert('minier');
				}  
		}).show();

visiblesSideBar[9]=Components.create('Button',{		
				scale: 'mini',
				container: $('#ejemplo2'),
				text:'mini',
				state:'highlight',
				tooltip:'boton mini',	  
				handler: function() {
							alert('mini');
						}  
			}).show();
			
visiblesSideBar[10]=Components.create('Button',{		
				scale: 'small',
				container: $('#ejemplo2'),
				text:'small',
				tooltip:'Small button',	  
				handler: function() {
								alert('small');
							}  
				}).show();
visiblesSideBar[11]=Components.create('Button',{		
				state:'active',
				container: $('#ejemplo2'),
				scale: 'medium',
				text:'medium',
				tooltip:'medium active',	  
				handler: function() {
					alert('medium');
				}  
			}).show();
visiblesSideBar[12]=Components.create('Button',{
				state:'info',	
				container: $('#ejemplo2'),
				scale: 'large',
				text:'large',
				tooltip:'large Info',	  
				handler: function() {
					alert('large');
				}  
			}).show();

visiblesSideBar[13]=Components.create('Button',{
				state:'warning',	
				container: $('#ejemplo2'),				
				scale: 'medium',
				text:'medium',
				tooltip:'Boton Warning',	
			}).show();
			
visiblesSideBar[14]=Components.create('Button',{		
				id:"botontoggle",
				container: $('#ejemplo2'),
				state:'info',		//estado 1 
				
				State2:'error',		//estado 2 
				scale: 'small',
				tooltip:'Small info Toggle',
				text:'small Toggle',
				enableToggle:true,
				handler: function() {
						 console.log("small togle");
				}    
												
			 }).show();
visiblesSideBar[15]=Components.create('Button',{		
				state:'error',		//estado 1 
				container: $('#ejemplo2'),
				State2:'active',		//estado 2 
				scale: 'mini',
				tooltip:'mini Toggle',
				text:'mini Toggle',
				enableToggle:true,
				handler: function() {
						 console.log("mini togle");
				}    
												
			 }).show();	 
visiblesSideBar[16]=Components.create('Button',{		
				state:'active',		//estado 1 
				container: $('#ejemplo2'),
				State2:'highlight',		//estado 2 
				scale: 'minier',
				tooltip:'minier Toggle',
				text:'minier Toggle',
				enableToggle:true,
				handler: function() {
						 console.log("mini togle");
				}   
									
			 }).show();	 		 
//tercer bloque ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

visiblesSideBar[17]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo4'),
	state:'error',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white'
	},
	text:'minier',
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();

visiblesSideBar[18]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo4'),
		text:'mini',
		state:'highlight',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white'
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
    
visiblesSideBar[19]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo4'),
		text:'small',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();
visiblesSideBar[20]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo4'),
		scale: 'medium',
		text:'medium',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[21]=Components.create('Button',{
		state:'info',
		container: $('#ejemplo4'),		
		scale: 'large',
		text:'large',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();

visiblesSideBar[22]=Components.create('Button',{
		state:'warning',
		container: $('#ejemplo4'),
		
		scale: 'medium',
		icon:{
			type:'fontawesome',
			class:'fa-cc-visa',
			color:'white',
			position:'right'
		},
		text:'medium',
		tooltip:'Boton Warning',	
    }).show();
    
visiblesSideBar[23]=Components.create('Button',{		
		id:"botontoggle",
		container: $('#ejemplo4'),
		state:'info',		//estado 1 
		State2:'error',		//estado 2 
		scale: 'small',
		icon:{
			type:'fontawesome',
			class:'fa-ra',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-cart-plus',
			color:'white'
		},
		tooltip:'Small info Toggle',
		text:'small Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("small togle");
		}    
                                        
     }).show();
visiblesSideBar[24]=Components.create('Button',{
		
		state:'error',	
	    container: $('#ejemplo4'),//estado 1 
		State2:'active',			//estado 2 
		scale: 'mini',
		icon:{
			type:'fontawesome',
			class:'fa-tty',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-joomla',
			color:'white'
		},
		tooltip:'mini Toggle',
		text:'mini Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
visiblesSideBar[25]=Components.create('Button',{		
		state:'active',		//estado 1 
		container: $('#ejemplo4'),
		State2:'highlight',		//estado 2 
		scale: 'minier',
		icon:{
			type:'fontawesome',
			class:'fa-reddit',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-user-secret',
			color:'white'
		},
		tooltip:'minier Toggle',
		text:'minier Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
//cuarto bloque ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[26]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo5'),
	state:'error',
	shape:'box',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white',
		position:'right'
	},
	text:'minier',
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();
visiblesSideBar[27]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo5'),
	state:'error',
	shape:'box',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white',
		position:'left'
	},
	text:'minier',
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();

visiblesSideBar[28]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo5'),
		text:'mini',
		state:'highlight',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white',
			position:'right'
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
visiblesSideBar[29]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo5'),
		text:'mini',
		state:'highlight',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white',
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
    
visiblesSideBar[30]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo5'),
		text:'small',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white',
			position:'right'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();
visiblesSideBar[31]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo5'),
		text:'small',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white',
			position:'left'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();		
visiblesSideBar[32]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo5'),
		scale: 'medium',
		text:'medium',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white',
			position:'right'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[33]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo5'),
		scale: 'medium',
		text:'medium',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white',
			position:'left'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[34]=Components.create('Button',{
		state:'info',
		container: $('#ejemplo5'),		
		scale: 'large',
		text:'Large',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white',
			position:'right'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();
visiblesSideBar[35]=Components.create('Button',{
		state:'info',
		container: $('#ejemplo5'),
		scale: 'large',
		text:'Large',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white',
			position:'left'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();
visiblesSideBar[36]=Components.create('Button',{
		state:'warning',
		container: $('#ejemplo5'),		
		scale: 'medium',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cc-visa',
			color:'white',
			position:'right'
		},
		text:'medium',
		tooltip:'Boton Warning',	
    }).show();
    
visiblesSideBar[37]=Components.create('Button',{		
		id:"botontoggle",
		shape:'box',
		container: $('#ejemplo5'),
		state:'info',		//estado 1 
		State2:'error',		//estado 2 
		scale: 'small',
		icon:{
			type:'fontawesome',
			class:'fa-ra',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-cart-plus',
			color:'white'
		},
		tooltip:'Small info Toggle',
		text:'Toggle1',
		enableToggle:true,
		handler: function() {
				 console.log("small togle");
		}    
                                        
     }).show();
visiblesSideBar[38]=Components.create('Button',{		
		container: $('#ejemplo5'),
		state:'error',				//estado 1 
		State2:'active',			//estado 2 
		scale: 'mini',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-tty',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-joomla',
			color:'white'
		},
		tooltip:'mini Toggle',
		text:'Toggle2',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
visiblesSideBar[39]=Components.create('Button',{		
		container: $('#ejemplo5'),
		state:'active',		//estado 1 
		State2:'highlight',		//estado 2 
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-reddit',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-user-secret',
			color:'white'
		},
		tooltip:'minier Toggle',
		text:'Toggle3',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
//quinto bloque -------------------------------------------------------------------------------------------------------------------------------------

visiblesSideBar[40]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo6'),
	state:'error',
	shape:'box',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white',
		position:'right'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();
visiblesSideBar[41]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo6'),
	state:'error',
	shape:'box',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white',
		position:'left'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();

visiblesSideBar[42]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo6'),
		state:'highlight',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white',
			position:'right'
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
visiblesSideBar[43]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo6'),
		text:'mini',
		state:'highlight',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white',
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
    
visiblesSideBar[44]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo6'),
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white',
			position:'right'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();
visiblesSideBar[45]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo6'),
		text:'small',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white',
			position:'left'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();		
visiblesSideBar[46]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo6'),
		scale: 'medium',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white',
			position:'right'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[47]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo6'),
		scale: 'medium',
		text:'medium',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white',
			position:'left'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[48]=Components.create('Button',{
		state:'info',	
		container: $('#ejemplo6'),
		scale: 'large',
		text:'Large',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white',
			position:'right'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();
visiblesSideBar[49]=Components.create('Button',{
		state:'info',	
		container: $('#ejemplo6'),
		scale: 'large',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white',
			position:'left'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();
visiblesSideBar[50]=Components.create('Button',{
		state:'warning',		
		container: $('#ejemplo6'),
		scale: 'medium',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cc-visa',
			color:'white',
			position:'right'
		},
		tooltip:'Boton Warning',	
    }).show();
    
visiblesSideBar[51]=Components.create('Button',{		
		id:"botontoggle",
		shape:'box',
		container: $('#ejemplo6'),
		state:'info',		//estado 1 
		State2:'error',		//estado 2 
		scale: 'small',
		icon:{
			type:'fontawesome',
			class:'fa-ra',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-cart-plus',
			color:'white'
		},
		tooltip:'Small info Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("small togle");
		}    
                                        
     }).show();
visiblesSideBar[52]=Components.create('Button',{		
		
		state:'error',				//estado 1 
		State2:'active',			//estado 2 
		container: $('#ejemplo6'),
		scale: 'mini',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-tty',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-joomla',
			color:'white'
		},
		tooltip:'mini Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
visiblesSideBar[53]=Components.create('Button',{		
		state:'active',		//estado 1 
		State2:'highlight',		//estado 2 
		container: $('#ejemplo6'),
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-reddit',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-user-secret',
			color:'white'
		},
		tooltip:'minier Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
//sexto bloque --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[54]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo7'),
	state:'error',
	shape:'circle',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white',
		position:'right'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();
visiblesSideBar[55]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo7'),
	state:'error',
	shape:'circle',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white',
		position:'left'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('minier');
				}  
}).show();

visiblesSideBar[56]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo7'),
		state:'highlight',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white',
			position:'right'
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
visiblesSideBar[57]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo7'),
		text:'mini',
		state:'highlight',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white',
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
    
visiblesSideBar[58]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo7'),
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white',
			position:'right'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();
visiblesSideBar[59]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo7'),
		text:'small',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white',
			position:'left'
		},
		tooltip:'Small button',	  
		handler: function() {
						alert('small');
					}  
		}).show();		
visiblesSideBar[60]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo7'),
		scale: 'medium',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white',
			position:'right'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[61]=Components.create('Button',{		
		state:'active',
		container: $('#ejemplo7'),
		scale: 'medium',
		text:'medium',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white',
			position:'left'
		},
		tooltip:'medium active',	  
		handler: function() {
			alert('medium');
		}  
    }).show();
visiblesSideBar[62]=Components.create('Button',{
		state:'info',	
		container: $('#ejemplo7'),
		scale: 'large',
		text:'Large',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white',
			position:'right'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();
visiblesSideBar[63]=Components.create('Button',{
		state:'info',	
		container: $('#ejemplo7'),
		scale: 'large',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white',
			position:'left'
		},
		tooltip:'large Info',	  
		handler: function() {
			alert('large');
		}  
    }).show();
visiblesSideBar[64]=Components.create('Button',{
		state:'warning',		
		container: $('#ejemplo7'),
		scale: 'medium',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-cc-visa',
			color:'white',
			position:'right'
		},
		tooltip:'Boton Warning',	
    }).show();
    
visiblesSideBar[65]=Components.create('Button',{		
		id:"botontoggle",
		shape:'circle',
		container: $('#ejemplo7'),
		state:'info',		//estado 1 
		State2:'error',		//estado 2 
		scale: 'small',
		icon:{
			type:'fontawesome',
			class:'fa-ra',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-cart-plus',
			color:'white'
		},
		tooltip:'Small info Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("small togle");
		}    
                                        
     }).show();
visiblesSideBar[66]=Components.create('Button',{		
		state:'error',				//estado 1 
		State2:'active',			//estado 2 
		container: $('#ejemplo7'),
		scale: 'mini',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-tty',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-joomla',
			color:'white'
		},
		tooltip:'mini Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
visiblesSideBar[67]=Components.create('Button',{		
		state:'active',		//estado 1 
		State2:'highlight',		//estado 2 
		container: $('#ejemplo7'),
		scale: 'minier',
		shape:'circle',
		icon:{
			type:'fontawesome',
			class:'fa-reddit',
			color:'white',
			position:'right'
		},
		icon2:{					//icono para el segundo estado
			type:'fontawesome',
			class:'fa-user-secret',
			color:'white'
		},
		tooltip:'minier Toggle',
		enableToggle:true,
		handler: function() {
				 console.log("mini togle");
		}    
                                        
     }).show();	 
	 
//septimo bloque --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//DIFERENTES TAMAÑO + GLIPICONS--------------------------------------------
visiblesSideBar[68]=Components.create('Button',{		 
	scale: 'minier',
	container: $('#ejemplo8'),
	state:'error',
	text:'Minier',
	//shape:'box',
	icon:{
		type:'glipicon',
			class:'glyphicon-zoom-in',
			color:'white',
			position:'left'
	},
	tooltip:'GlipIcon Mini',	  
	handler: function() {
					alert('minier');
				}  
}).show();
visiblesSideBar[69]=Components.create('Button',{		 
	scale: 'mini',
	container: $('#ejemplo8'),
	state:'highlight',
	text:' mini',
	//shape:'circle',
	icon:{
		type:'glipicon',
		class:'glyphicon-trash',
		color:'white',
		position:'left'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('mini');
				}  
}).show();
visiblesSideBar[70]=Components.create('Button',{		 
	scale: 'small',
	container: $('#ejemplo8'),
	state:'active',
	text:' mini',
	//shape:'circle',
	icon:{
		type:'glipicon',
		class:'glyphicon-play-circle',
		color:'white',
		position:'left'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('mini');
				}  
}).show();
visiblesSideBar[71]=Components.create('Button',{		
		scale: 'medium',
		container: $('#ejemplo8'),
		text: 'Medium',
     	icon:{
			type:'glipicon',
			class:'glyphicon-repeat',
			animate:true,
		
			position:'right'
		},
		tooltip:'medium button',	  
		handler: function() {
						alert('medium');
					}  
		}).show();
		
    
visiblesSideBar[72]=Components.create('Button',{		
		scale: 'medium',
		container: $('#ejemplo8'),
		text: 'Medium',
		state:'info',
		shape:'circle',
		icon:{
			type:'glipicon',
			class:'glyphicon-star',
			color:'white',
			position:'right'
		},
		tooltip:'medium button',	  
		handler: function() {
						alert('medium');
					}  
		}).show();
visiblesSideBar[73]=Components.create('Button',{		
		scale: 'large',
		container: $('#ejemplo8'),
		state:'warning',
		text:'large',
		shape:'circle',
		icon:{
			type:'glipicon',
			class:'glyphicon-tree-conifer',
			color:'white',
			position:'left'
		},
		tooltip:'large button',	  
		handler: function() {
						alert('large');
					}  
		}).show();

visiblesSideBar[74]=Components.create('Button',{		
		scale: 'medium',
		container: $('#ejemplo8'),
		text: 'Medium',
		state:'highlight',
		shape:'circle',
		icon:{
			type:'glipicon',
			class:'glyphicon-camera',
			color:'white',
			position:'right'
		},
		tooltip:'medium button',	  
		handler: function() {
						alert('medium');
					}  
		}).show();
		
visiblesSideBar[75]=Components.create('Button',{		
		scale: 'medium',
		container: $('#ejemplo8'),
		text: 'Medium',
		shape:'box',
		icon:{
			type:'glipicon',
			class:'glyphicon-refresh',
			animate:true,
			
			position:'right'
		},
		tooltip:'medium button',	  
		handler: function() {
						alert('medium');
					}  
		}).show();
		
		
visiblesSideBar[76]=Components.create('Button',{		
		scale: 'small',
		container: $('#ejemplo8'),
		text:'small',
		state:'active',
		shape:'box',
		icon:{
			type:'glipicon',
			class:'glyphicon-envelope',
			color:'white',
		},
		tooltip:'boton small',	  
		handler: function() {
					alert('small');
				}  
	}).show();
	
visiblesSideBar[77]=Components.create('Button',{		
		scale: 'mini',
		container: $('#ejemplo8'),
		text:'mini',
		state:'info',
		shape:'box',
		icon:{
			type:'glipicon',
			class:'glyphicon-floppy-save',
			color:'white',
		},
		tooltip:'boton mini',	  
		handler: function() {
					alert('mini');
				}  
	}).show();
visiblesSideBar[78]=Components.create('Button',{		
		scale: 'minier',
		container: $('#ejemplo8'),
		text:'minier',
		state:'error',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:' fa-bed',
			color:'white',
			animate:false,
		},
		tooltip:'boton minier',	  
		handler: function() {
					alert('minier');
				}  
	}).show();
//bloque final -------------------------------------------------------------------------------------------------------------------------------
			
visiblesSideBar[79]=Components.create('HtmlScreenGrid',{
container: $('#ejemplo3'),
text:'Tamaño Personalizado',
height:20,
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row2'
  },
]
});
visiblesSideBar[80]=Components.create('HtmlScreenGrid',{
container: $('#ejemplo3'),
text:'Tamaño Personalizado',
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row1'
  }
]
});
visiblesSideBar[81]=Components.create('TextField',{	container: $('.row2'),
	container: $('#InputE3'),
	label: '<b> Class del icono :</b>',
	id: 'IcoClass',
	x: -20,
	y:-20,
	width: 128,
	height: 20,
	alignLabel: "left",
	labelWidth: 186,				
	readOnly: false,
	styleLabel:'customlabel',
	InputCss:
		{ 'border': "1px solid #125EB1",
		 'background-color':  "#FFFFFF",
		 'color': "#125EB1",
		'margin-left':'4px'
		}
	
	}).show();
visiblesSideBar[82]=Components.create('fontawesomegrid',{
		container: $('.row1'),
		container: $('#ejemplo3'),
		scale: 'mini',			//minier,mini,medium,small,large 
		type:'fontawesome',	
		handler: function(e,font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
						Components.getComponentById('IcoClass').setValue(font);
					}
	}).show();
	
	//bloque final 2 -------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[83]=Components.create('HtmlScreenGrid',{
container: $('#ejemplo300'),
text:'Tamaño Personalizado',
height:20,
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row2'
  },
]
});
visiblesSideBar[84]=Components.create('HtmlScreenGrid',{
container: $('#ejemplo300'),
text:'Tamaño Personalizado',
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row1'
  }
]
});
visiblesSideBar[85]=Components.create('TextField',{	container: $('.row2'),
	container: $('#InputE300'),
	label: '<b> Class del icono :</b>',
	id: 'IcoClass',
	width: 128,
	height: 20,
	alignLabel: "left",
	labelWidth: 186,				
	readOnly: false,
	styleLabel:'customlabel',
	InputCss:
		{ 'border': "1px solid #125EB1",
		 'background-color':  "#FFFFFF",
		 'color': "#125EB1",
		'margin-left':'4px'
		}
	
	}).show();
visiblesSideBar[86]=Components.create('fontawesomegrid',{
		container: $('.row1'),
		container: $('#ejemplo300'),
		scale: 'mini',			//minier,mini,medium,small,large 
		type:'glipicon',	
		handler: function(e,font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
						Components.getComponentById('IcoClass').setValue(font);
					}
	}).show();
}