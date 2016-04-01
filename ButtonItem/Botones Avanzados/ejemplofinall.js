$( document ).ready(function(){
	
	Components.create('Button',{
	scale: 'medium',
	container: $('#ejemplo1'),


	state:'error',
	text:'Estado error',
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
					alert('error');
				}  
}).show();

Components.create('Button',{

		scale: 'medium',
		container: $('#ejemplo1'),
		text:'Estado highlight',
		state:'highlight',
		tooltip:'texto + icono',	  
		handler: function() {
					alert('highlight');
				}  
	}).show();
	
Components.create('Button',{				
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
Components.create('Button',{		
		state:'active',
		container: $('#ejemplo1'),
		scale: 'medium',
		text:'Estado active',
		tooltip:'Medium button',	  
		handler: function() {
			alert('active');
		}  
	}).show();
Components.create('Button',{
		state:'info',	
		container: $('#ejemplo1'),
		scale: 'medium',
		text:'Estado info',
		tooltip:'Boton Info',	  
		handler: function() {
			alert('info');
		}  
	}).show();

Components.create('Button',{
		state:'warning',
		container: $('#ejemplo1'),					
		scale: 'medium',
		text:'Estado warning',
		tooltip:'Boton Warning',	
	}).show();
	
Components.create('Button',{		
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

				Components.create('Button',{		 
				scale: 'minier',
				container: $('#ejemplo2'),
				state:'error',
				text:'minier',
				tooltip:'Tamaño Personalizado',	  
				handler: function() {
					alert('minier');
				}  
		}).show();

		Components.create('Button',{		
				scale: 'mini',
				container: $('#ejemplo2'),
				text:'mini',
				state:'highlight',
				tooltip:'boton mini',	  
				handler: function() {
							alert('mini');
						}  
			}).show();
			
		Components.create('Button',{		
				scale: 'small',
				container: $('#ejemplo2'),
				text:'small',
				tooltip:'Small button',	  
				handler: function() {
								alert('small');
							}  
				}).show();
		Components.create('Button',{		
				state:'active',
				container: $('#ejemplo2'),
				scale: 'medium',
				text:'medium',
				tooltip:'medium active',	  
				handler: function() {
					alert('medium');
				}  
			}).show();
		Components.create('Button',{
				state:'info',	
				container: $('#ejemplo2'),
				scale: 'large',
				text:'large',
				tooltip:'large Info',	  
				handler: function() {
					alert('large');
				}  
			}).show();

		Components.create('Button',{
				state:'warning',	
				container: $('#ejemplo2'),				
				scale: 'medium',
				text:'medium',
				tooltip:'Boton Warning',	
			}).show();
			
		Components.create('Button',{		
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
		Components.create('Button',{		
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
		Components.create('Button',{		
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

				Components.create('Button',{		 
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

Components.create('Button',{		
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
    
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{
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

Components.create('Button',{
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
    
Components.create('Button',{		
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
Components.create('Button',{
		
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
Components.create('Button',{		
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

			
	Components.create('Button',{		 
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
Components.create('Button',{		 
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

Components.create('Button',{		
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
Components.create('Button',{		
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
    
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{
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
Components.create('Button',{
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
Components.create('Button',{
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
    
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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

				Components.create('Button',{		 
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
Components.create('Button',{		 
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

Components.create('Button',{		
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
Components.create('Button',{		
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
    
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{
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
Components.create('Button',{
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
Components.create('Button',{
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
    
Components.create('Button',{		
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
Components.create('Button',{		
		
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
Components.create('Button',{		
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


				Components.create('Button',{		 
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
Components.create('Button',{		 
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

Components.create('Button',{		
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
Components.create('Button',{		
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
    
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{
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
Components.create('Button',{
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
Components.create('Button',{
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
    
Components.create('Button',{		
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
Components.create('Button',{		
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
Components.create('Button',{		
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

	Components.create('Button',{		 
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
Components.create('Button',{		 
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

Components.create('Button',{		 
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
Components.create('Button',{		
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
		
    
Components.create('Button',{		
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
Components.create('Button',{		
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

Components.create('Button',{		
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
		
	Components.create('Button',{		
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
		
		
Components.create('Button',{		
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
	
Components.create('Button',{		
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
	
	Components.create('Button',{		
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

			
Components.create('HtmlScreenGrid',{
container: $('#ejemplo3'),
text:'Tamaño Personalizado',
height:20,
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row2'
  },
]
});
Components.create('HtmlScreenGrid',{
container: $('#ejemplo3'),
text:'Tamaño Personalizado',
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row1'
  }
]
});
Components.create('TextField',{	container: $('.row2'),
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

	Components.create('fontawesomegrid',{
		container: $('.row1'),
		container: $('#ejemplo3'),
		scale: 'mini',			//minier,mini,medium,small,large 
		type:'fontawesome',	
		handler: function(e,font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
						Components.getComponentById('IcoClass').setValue(font);
					}
	}).show();
	
	//bloque final 2 -------------------------------------------------------------------------------------------------------------------------------
Components.create('HtmlScreenGrid',{
container: $('#ejemplo300'),
text:'Tamaño Personalizado',
height:20,
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row2'
  },
]
});
Components.create('HtmlScreenGrid',{
container: $('#ejemplo300'),
text:'Tamaño Personalizado',
ColsDef:[                       
  {	ancho: 12,
	ClassId: 'row1'
  }
]
});
Components.create('TextField',{	container: $('.row2'),
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

	Components.create('fontawesomegrid',{
		container: $('.row1'),
		container: $('#ejemplo300'),
		scale: 'mini',			//minier,mini,medium,small,large 
		type:'glipicon',	
		handler: function(e,font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
						Components.getComponentById('IcoClass').setValue(font);
					}
	}).show();
	 
});