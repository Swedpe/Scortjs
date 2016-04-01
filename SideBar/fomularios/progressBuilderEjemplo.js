function ejemploProgressBuilder(){
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div class="row"><div  id="x1" class="col-sm-6" style="height: inherit;"><div class="row"><div  id="x1-1" class="col-sm-12" style="height: inherit"></div><br><br></div></div><div  id="x2" class="col-sm-6" style="height: inherit"><div class="row"><div  id="x2-1" class="col-sm-12" style="height: inherit"></div><br><br></div></div><br><br></div><div class="row"><div  id="S1-B" class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D;margin: 10px 0 80px 165px; font-size: 15pt">Progress Builder-Scorts JS</P></font></strong></div><div  class="col-sm-4" style="height: inherit"><div class="row"><div  id="ColorSelect" class="col-sm-12"><strong><FONT FACE="arial"> <center><h2>Cambio de Color</h2></center></font></strong></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt"> state: active</span></font></strong> </div><div  id="ColorActive" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt">state: error</span></font></strong> </div><div  id="Colorerror" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt"> state: warning</span></font></strong></div><div  id="Colorwarning" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt"> state: info</span></font></strong> </div><div  id="Colorinfo" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"> <span style="color: #black; font-size: 11pt">state: default</span></font></strong> </div><div  id="Colordefault" class="col-sm-6" style="height: inherit"></div></div></div></div><div  class="col-sm-4" style="height: inherit"><div id="tamanos"  class="col-sm-12" style="height: inherit"><strong><FONT FACE="arial"> <center><h2>Cambio de Tamaño</h2></center></font></strong></div><div class="row"><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt"> scale: minier</span></font></strong></div><div  id="minier" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt">scale: mini</span></font></strong> </div><div  id="mini" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt"> scale: small</span></font></strong></div><div  id="small" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"><span style="color: #black; font-size: 11pt"> scale: medium</span></font></strong> </div><div  id="medium" class="col-sm-6" style="height: inherit"></div></div><div class="row"><div  class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"> <span style="color: #black; font-size: 11pt">scale: large</span></font></strong></div><div  id="large" class="col-sm-6" style="height: inherit"></div></div></div></div></div></div><div class="row"><div  class="col-sm-6"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Posicion del progress</P></font></strong> </div></div><div class="row"><div  id="posit" class="col-sm-4" style="height: inherit" ></div><div  id="S2-1" class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"><center><h2>Cambio de valor</h2></center></font></strong></div><div id="classes"  class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"><center><h2>Cambio de clase</h2></center></font></strong> </div></div><div class="row"><div  id="S1-1" class="col-sm-6" style="height: inherit;"><div class="row"><div  id="S2-1" class="col-sm-12" style="height: inherit"></div><br><br></div></div><div  id="S1-2" class="col-sm-6" style="height: inherit"><div class="row"><div  id="S1-A" class="col-sm-12" style="height: inherit"></div><br><br></div></div><br><br></div>',
});
visiblesSideBar[1]=Components.create('ProgressBar',{  	
            container: $('#ColorActive'),
			align: "left",
			width: '100%',
			value:30,
			state:'active',
			class:'striped',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeState('active'); 
								Components.getComponentById('prueba2').changeState('active'); 
                            }
                        }
						
		}).show();
visiblesSideBar[2]=Components.create('ProgressBar',{  	
			container: $('#Colorerror'),
			align: "left",
			width: '100%',
			value:45,
			class:'striped',
			state:'error',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeState('error'); 
								Components.getComponentById('prueba2').changeState('error'); 
                            }
                        }
		}).show();
visiblesSideBar[3]=Components.create('ProgressBar',{  	
		    container: $('#Colorwarning'),
			align: "left",
			width: '100%',
			value:57,
			class:'striped',
			state:'warning',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeState('warning'); 
								Components.getComponentById('prueba2').changeState('warning'); 
                            }
                        }
		}).show();
visiblesSideBar[4]=Components.create('ProgressBar',{  	
		    container: $('#Colorinfo'),
			align: "left",
			width: '100%',
			value:70,
			class:'striped',
			state:'info',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeState('info'); 
								Components.getComponentById('prueba2').changeState('info'); 
                            }
                        }
		}).show();
visiblesSideBar[5]=Components.create('ProgressBar',{  	
			container: $('#Colordefault'),
			align: "left",
			width: '100%',
			value:82,
			class:'striped',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeState('default'); 
								Components.getComponentById('prueba2').changeState('default'); 
                            }
                        }
		}).show();	
///////////////////SOLO-TAMAÑOS///////////////////	
visiblesSideBar[6]=Components.create('ProgressBar',{  	
            container: $('#minier'),
			align: "left",
			width: '100%',
			value:30,
			state:'active',
			class:'striped',
			scale:'minier',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeScale('minier'); 
								Components.getComponentById('prueba2').changeScale('minier'); 
                            }
                        }
		}).show();
visiblesSideBar[7]=Components.create('ProgressBar',{  	
			container: $('#mini'),
			align: "left",
			width: '100%',
			value:45,
			class:'striped',
			scale:'mini',
			state:'error',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeScale('mini'); 
								Components.getComponentById('prueba2').changeScale('mini'); 
                            }
                        }
		}).show();
visiblesSideBar[8]=Components.create('ProgressBar',{  	
		    container: $('#small'),
			align: "left",
			width: '100%',
			value:57,
			class:'striped',
			scale:'small',
			state:'warning',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeScale('small'); 
								Components.getComponentById('prueba2').changeScale('small'); 
                            }
                        }
		}).show();
visiblesSideBar[9]=Components.create('ProgressBar',{  	
		    container: $('#medium'),
			align: "left",
			width: '100%',
			value:70,
			class:'striped',
			state:'info',
			scale:'medium',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeScale('medium'); 
								Components.getComponentById('prueba2').changeScale('medium'); 
                            }
                        }
		}).show();
visiblesSideBar[10]=Components.create('ProgressBar',{  	
			container: $('#large'),
			align: "left",
			width: '100%',
			value:82,
			scale:'large',
			class:'striped',
			animate:true,
			css:{
				'margin-left': '20px',
				display: 'inline-block'
			},
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeScale('large'); 
								Components.getComponentById('prueba2').changeScale('large'); 
                            }
                        }
		}).show();	
/////////////CLASS //////////////////
visiblesSideBar[11]=Components.create('ProgressBar',{  	
		    container: $('#classes'),
			align: "left",
			width: '100%',
			value:70,
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeClass('solid'); 
								Components.getComponentById('prueba2').changeClass('solid'); 
                            }
                        }
		}).show();
visiblesSideBar[12]=Components.create('ProgressBar',{  	
		    container: $('#classes'),
			class:'striped',
			align: "left",
			width: '100%',
			value:70,
			listeners: {
                            click: function() {
								Components.getComponentById('prueba').changeClass('striped'); 
								Components.getComponentById('prueba2').changeClass('striped'); 
                            }
                        }
		}).show();
/////////////TEXTFIELD - INPUT //////////////////
visiblesSideBar[13]=Components.create('TextField',{
	id:'textinput0',
	container: $('#S2-1'), 
	label: '<b>&nbsp;Escriba valor aqui (%) :</b>',
	width: 250,
	alignLabel: "left",
	css:{
	float:'left',}, 
	handler: function() {
	Components.getComponentById('prueba').text("");
	}  
}).show();
visiblesSideBar[14]=Components.create('Button',{
	id :'bin',
	container: $('#S2-1'),
	scale: 'small',
	text:'Cambiar Valor',
	//width:250,
	tooltip:'change',
	css:{
	float:'left',
	},
	listeners: {
                            click: function() {
								var valor = "";
								valor=Components.getComponentById('textinput0').getText();
								Components.getComponentById('prueba').setValor(valor); 
								Components.getComponentById('prueba2').setValor(valor);
                            }
    }
	
	
}).show();
//Progress principal--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	 
visiblesSideBar[15]=Components.create('ProgressBar',{  	
			id:'prueba',
			container: $('#S1-B'),
			align: "left",
			width: '100%',
			value:50,
		}).show();
//Progress principal 2--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	 
visiblesSideBar[16]=Components.create('ProgressBar',{  	
			id:'prueba2',
			container: $('#S1-B'),
			shape:'circle',
			value:65,
			state:'info', 
			animate:false,
		}).show();
//////////////////////////left//////////////////////////////////
visiblesSideBar[17]=Components.create('Button',{
	id :'le',
	container: $('#posit'),
	scale: 'medium',
	text:'Left',
	//width:250,
	tooltip:'Tamaño Personalizado',
	icon:{
		type:'glyphicon',
		class:'glyphicon-chevron-left',  
		position:'left'
	},
handler: function() 
	{
	Components.getComponentById('prueba').changePosition('left');
	}   
}).show();
/////////////////////////////right////////////////////////////////////////
visiblesSideBar[18]=Components.create('Button',{
	id :'ri',
	container: $('#posit'),
	scale: 'medium',
	text:'Right',
	//width:250,
	tooltip:'Tamaño Personalizado',
	icon:{
		type:'glyphicon',
		class:'glyphicon-chevron-right',  
		position:'right'
	},
handler: function() 
	{
	Components.getComponentById('prueba').changePosition('right');
	}  
}).show();
visiblesSideBar[19]=Components.create('Image',{ 
		id:"myimage",
       container: $('#x1-1'),
	   tooltip: "Imagen2",		
        image:'images/logo.png',  
		width:150,
												
}).show();
}