function ejemploWindowsBuilder(){
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div class="row"><div  id="S1-1" class="col-sm-6" style="height: inherit;"><div class="row"><div  id="S1-A" class="col-sm-12" style="height: inherit"></div><br><br></div></div><div  id="S1-2" class="col-sm-6" style="height: inherit"><div class="row"><div  id="S2-1" class="col-sm-12" style="height: inherit"></div><br><br></div></div><br><br></div><div class="row"><div  id="S1-B" class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D; margin: 10px 0 5px 165px; font-size: 14pt">WINDOWS BUILDER-EJEMPLO</P></font></strong><strong><FONT FACE="arial"> <p style="color: #black;margin: 10px 0 80px 165px; font-size: 16pt">Window Builder for Scorts JS</P></font></strong></div><div  class="col-sm-6" style="height: inherit"><div class="row"><div  id="S2-2" class="col-sm-12" style="height: 440px"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">CAMBIO DE COLORES:</P></font></strong></div><div  id="S2-3" class="col-sm-12" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Agregar Header Buttons:</P></font></strong></div></div></div></div></div>',
});
visiblesSideBar[1]=Components.create('Window',{
       container: $('#S2-2'),
	   x:-72,
        y:230,
       height:150, 
        width:200, 
		state:'active',
		title: "active", 
        html:'<div><i>Soy un ventana Default</i> <b>modal</b></div>',
		listeners: {
                            click: function() {
								Components.getComponentById('window').changeState('active'); 
                            }
                        } 
		
    }).show();
visiblesSideBar[2]=Components.create('Window',{
container: $('#S2-2'),
x:363,
y:59,
        height:150, 
        width:200 ,
		state:'info',
		title: "info", 
        html:'<div><i>Soy un ventana Default</i> <b>modal</b></div>',
		listeners: {
                            click: function() {
								Components.getComponentById('window').changeState('info'); 
                            }
                        }
    }).show();
visiblesSideBar[3]=Components.create('Window',{
container: $('#S2-2'),
x:-71,
y:60,
      height:150, 
        width:200, 
		state:'error',
		title: "error", 
        html:'<div><i>Soy un ventana Default</i> <b>modal</b></div>',
		listeners: {
                            click: function() {
								Components.getComponentById('window').changeState('error'); 
                            }
                        }
    }).show();	
visiblesSideBar[4]=Components.create('Window',{
container: $('#S2-2'),
x:141,
y:61,
 height:150, 
        width:200,
		state:'highlight',
		title: "highlight", 
        html:'<div><i>Soy un ventana Default</i> <b>modal</b></div>',
		listeners: {
                            click: function() {
								Components.getComponentById('window').changeState('highlight'); 
                            }
                        }
    }).show();
visiblesSideBar[5]=Components.create('Window',{
container: $('#S2-2'),
x:142,
y:231,
 height:150, 
        width:200,
		state:'warning',
		title: "warning", 
        html:'<div><i>Soy un ventana Default</i> <b>modal</b></div>',
		listeners: {
                            click: function() {
								Components.getComponentById('window').changeState('warning'); 
                            }
                        }
    }).show();
visiblesSideBar[6]=Components.create('Window',{
container: $('#S2-2'),
x:366,
y:232,
 height:150, 
        width:200,
		title: "Default", 
        html:'<div><i>Soy un ventana Default</i> <b>modal</b></div>',
		listeners: {
                            click: function() {
								Components.getComponentById('window').changeState('default'); 
                            }
                        }
    }).show();
///////////////////SOLO-TAMAÑOS///////////////////	
visiblesSideBar[7]=Components.create('Button',{
    id:'hola',	
    container: $('#S2-3'),	
	scale: 'minier',
	state:'active',	
	shape:'box',
	icon:{
		type:'fontawesome',
		class:'fa-align-left',
		color:'white'
	},
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
		button={scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-align-left',
			color:'white'
		},
		handler: function() {
			alert('Hola Boton Extra');
		  }
	};
   Components.getComponentById('window').createHeaderButton(button);
	}  
}).show();

visiblesSideBar[8]=Components.create('Button',{		
		container: $('#S2-3'),
		scale: 'minier',
		state:'active',	
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white'
		},
		tooltip:'boton mini',	  
		handler: function() {
		
		button={
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-group',
			color:'white'
		},
		handler: function() {
			alert('Hola Boton Extra');
		}
	  };
     Components.getComponentById('window').createHeaderButton(button);
	}  
	}).show();

visiblesSideBar[9]=Components.create('Button',{		
		container: $('#S2-3'),
		scale: 'minier',
		state:'active',	
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white'
		},
		tooltip:'Small button',	  
		handler: function() {
		
		button={
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cubes',
			color:'white'
		},
		handler: function() {
			alert('Hola Boton Extra');
		}
	  };
     Components.getComponentById('window').createHeaderButton(button);
	}  
}).show();
		
visiblesSideBar[10]=Components.create('Button',{		
		container: $('#S2-3'),
		state:'active',
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white',
		},
		tooltip:'medium active',	  
		handler: function() {
		
		button={
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cut',
			color:'white'
		},
		handler: function() {
			alert('Hola Boton Extra');
		}
	  };
     Components.getComponentById('window').createHeaderButton(button);
		}  
    }).show();

visiblesSideBar[11]=Components.create('Button',{
		container: $('#S2-3'),
		state:'active',	
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white',
		},
		tooltip:'large Info',	  
		handler: function() {
		button={
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-floppy-o',
			color:'white'
		},
		handler: function() {
			alert('Hola Boton Extra');
		}
	  };
     Components.getComponentById('window').createHeaderButton(button);
		}  
    }).show();

visiblesSideBar[12]=Components.create('Button',{
		container: $('#S2-3'),
		state:'active',		
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cc-visa',
			color:'white',
			position:'right'
		},
		tooltip:'Boton Warning',
        handler: function() {
		button={
		scale: 'minier',
		shape:'box',
		icon:{
			type:'fontawesome',
			class:'fa-cc-visa',
			color:'white'
		},
		handler: function() {
			alert('Hola Boton Extra');
		}
	  };
     Components.getComponentById('window').createHeaderButton(button);
	}  		
 }).show();
//Progress principal--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	 
visiblesSideBar[13]=Components.create('Window',{
id:'window',
container: $('#S1-B'),
x:30,
y:102,
resizable:false,
      height:250, 
        width:400, 
		state:'default',
		title: "default", 
        html:'<div><i>Soy un ventana Default</i> <b>modal</b></div>',
		headerbuttons:[
			{type:'Button',		 
			scale: 'minier',
			shape:'box',
			icon:{
				type:'fontawesome',
				class:'fa-cog',
				color:'white',
			},
			tooltip:'Tamaño Personalizado',	  
			
			  listeners: {
				click: function(){ 
					var ButtonContainer = Components.getComponentById('window');
					ButtonContainer.add(CreateButton());
			}
           }
		}
		]
    }).show();

visiblesSideBar[14]=Components.create('Image',{ 
		id:"myimage",
       container: $('#S1-A'),
	   tooltip: "Imagen2",		
        image:'images/logo.png',  
		width:150,
												
}).show();
}