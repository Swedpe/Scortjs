function ejemploButtonBuilder(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<div class="row">'+
		'<div  id="S1-1" class="col-sm-6" style="height: inherit;">'+
			'<div class="row">'+
				'<div  id="S1-A" class="col-sm-12" style="height: inherit"></div>'+
				'<br><br>'+
			'</div>'+
		'</div>'+
		'<div  id="S1-2" class="col-sm-6" style="height: inherit">'+
			'<div class="row">'+
				'<div  id="S2-1" class="col-sm-12" style="height: inherit"></div>'+
					'<br><br>'+
			'</div>'+
		'</div>'+
		'<br><br>'+
	'</div>'+
	'<div class="row">'+
	'<div  id="S1-B" class="col-sm-6" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D; margin: 10px 0 5px 165px; font-size: 14pt">BUTTON BUILDER-EJEMPLO</P></font></strong> <strong><FONT FACE="arial"> <p style="color: #black;margin: 10px 0 80px 165px; font-size: 16pt">Button Builder for Scorts JS</P></font></strong> </div><div  class="col-sm-6" style="height: inherit"><div class="row"><div  id="S2-2" class="col-sm-12" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Cambio de Color:</P></font></strong> </div></div><div class="row"><div  id="S2-3" class="col-sm-12" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Cambio de tamaño:</P></font></strong> </div></div><div class="row"><div  id="S2-4" class="col-sm-12" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Cambio de forma:</P></font></strong> </div></div></div></div><div class="row"><div  class="col-sm-12"><strong><FONT FACE="arial"> <p style="color: #black; font-size: 11pt">Posicion del icono</P></font></strong> </div></div><div class="row"><div  id="posit" class="col-sm-12" style="height: inherit" ></div></div><div class="row"><div  class="col-sm-12"><H1>FONTAWESOME</H1></div></div><div class="row"><div  id="p-2B" class="col-sm-12" style="height: inherit" ></div></div><div class="row"><div  class="col-sm-12"><H1>GLIPICONS</H1></div></div><div class="row"><div  id="p-2C" class="col-sm-12" style="height: inherit"></div></div></div></div>',
});
visiblesSideBar[1]=Components.create('Button',{	
	id:'state1',
	container: $('#S2-2'),
	scale: 'medium',
	state:'error',
	text:'Error',
	tooltip:'Tamaño Personalizado',	 
	handler: function() {
	Components.getComponentById('ejemplo').changeColor(1 ,'error');
}  
}).show();

visiblesSideBar[2]=Components.create('Button',{	
	id:'state2',
	container: $('#S2-2'),
	scale: 'medium',
	text:'Highlight',
	state:'highlight',
	tooltip:'texto + icono',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeColor(1 ,'highlight');
	}  
}).show();

visiblesSideBar[3]=Components.create('Button',{		
	id:'state3',
	container: $('#S2-2'),
	scale: 'medium',
	text:'Default',
	tooltip:'Small button',	  
	handler: function() {

	Components.getComponentById('ejemplo').changeColor(1 ,'default');
	}  
}).show();

visiblesSideBar[4]=Components.create('Button',{		
	id:'state4',
	container: $('#S2-2'),
	state:'active',
	scale: 'medium',
	text:'Active',
	tooltip:'Medium button',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeColor(1 ,'active');
	}  
}).show();
visiblesSideBar[5]=Components.create('Button',{
	id:'state5',
	container: $('#S2-2'),
	state:'info',	
	scale: 'medium',
	text:'Info',
	tooltip:'Boton Info',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeColor(1 ,'info');
	}  
}).show();

visiblesSideBar[6]=Components.create('Button',{
	id:'state6',
	container: $('#S2-2'),
	state:'warning',		
	scale: 'medium',
	text:'Warning',
	tooltip:'Boton Warning',
	handler: function() {
	Components.getComponentById('ejemplo').changeColor(1 ,'warning');
	}
}).show();
///////////////////SOLO-TAMAÑOS///////////////////	
visiblesSideBar[7]=Components.create('Button',{
	id:'scale1',
	container: $('#S2-3'),
	scale: 'minier',
	state:'error',
	text:'minier',
	tooltip:'Tamaño Personalizado',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeScale('minier');
	}  
}).show();

visiblesSideBar[8]=Components.create('Button',{	
	id:'scale2',
	container: $('#S2-3'),
	scale: 'mini',
	text:'mini',
	state:'highlight',
	tooltip:'boton mini',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeScale('mini');
	}  
}).show();

visiblesSideBar[10]=Components.create('Button',{
	id: 'scale3',
	container: $('#S2-3'),
	scale: 'small',
	text:'small',
	tooltip:'Small button',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeScale('small');
	}  
}).show();
visiblesSideBar[11]=Components.create('Button',{		
	id:'scale4',
	container: $('#S2-3'),
	state:'active',
	scale: 'medium',
	text:'medium',
	tooltip:'medium active',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeScale('medium');
	}  
}).show();
visiblesSideBar[12]=Components.create('Button',{
	id:'scale5',
	container: $('#S2-3'),
	state:'info',	
	scale: 'large',
	text:'large',
	tooltip:'large Info',	  
	handler: function() {
	Components.getComponentById('ejemplo').changeScale('large');
	}  
}).show();



/////////////TEXTFIELD - INPUT //////////////////
visiblesSideBar[13]=Components.create('TextField',{
	id:'textinput0',
	container: $('#S2-1'), 
	label: '<b>&nbsp;Escriba el texto aqui :</b>',
	width: 250,
	alignLabel: "left",
	css:{
	float:'left',},
	handler: function() {
	Components.getComponentById('ejemplo').text("");
	}  
}).show();


visiblesSideBar[14]=Components.create('Button',{
	id :'bin',
	container: $('#S2-1'),
	scale: 'small',
	text:'cambio',
	//width:250,
	tooltip:'Tamaño Personalizado',
	css:{
	float:'left',

	},
	handler: function() 
	{console.log('hola');
		var texto = "";
		texto=Components.getComponentById('textinput0').getText();
		Components.getComponentById('ejemplo').setText(texto);}  
}).show();

///////////////////////////////////////ICONOS GLIPS/////////////////////////////////////////////////////////

visiblesSideBar[15]=Components.create('HtmlScreenGrid',{		
container: $('#p-2C'),
text:'Tamaño Personalizado',
ColsDef:[                       
	{	ancho: 12,
		ClassId: 'row2'
	},
	]
});
visiblesSideBar[16]=Components.create('HtmlScreenGrid',{		
container: $('#p-2C'),
text:'Tamaño Personalizado',
ColsDef:[                       
	{	ancho: 12,
	ClassId: 'row2'
	}
 ]
});


visiblesSideBar[17]=Components.create('fontawesomegrid',{
	container: $('#p-2C'),
	container: $('.row2'),
	scale: 'small',				//minier,mini,medium,small,large 
	type:'glipicon',			//tipo
	handler: function( e, font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
		var fontprocesado = font.substring(""+10);
		//console.log(font);
		console.log(fontprocesado);
		ico={ type:'fa',  class:''};
			 Components.getComponentById('ejemplo').changeIcono(1,ico);
	}
}).show();
//////////////GRILLA FONTAWESOME///////////////////////////
visiblesSideBar[18]=Components.create('HtmlScreenGrid',{		
container: $('#p-2B'),
text:'Tamaño Personalizado',
ColsDef:[                       
		{	ancho: 12,
		ClassId: 'row1'
		},
	]
});
visiblesSideBar[19]=Components.create('HtmlScreenGrid',{		
	container: $('#p-2B'),
	text:'Tamaño Personalizado',
	ColsDef:[                       
		{	ancho: 12,
			ClassId: 'row1'
		}
	]
});
visiblesSideBar[20]=Components.create('fontawesomegrid',{
	container: $('#p-2B'),
	container: $('.row1'),
	scale: 'small',				//minier,mini,medium,small,large 
	type:'fontawesome',			//tipo
	handler: function( e, font) {		//global, todos los botones de fontawesomegrid enviaran el mismo evento
		var fontprocesado = font.substring(""+3);
		console.log(fontprocesado);
		ico={ type:'fa',
		class:fontprocesado
			};
	Components.getComponentById('ejemplo').changeIcono(1,ico);
	}
}).show();

//boton principal--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	 
visiblesSideBar[21]=Components.create('Button',{
	id :'ejemplo',
	container: $('#S1-B'),
	scale: 'medium',
	text:'Ejemplo',
	width:250,
	tooltip:'Tamaño Personalizado',
	handler: function() 
	{}  
	
	
}).show();

////////////toogle///////////////

visiblesSideBar[22]=Components.create('Button',{
	id :'ejemplo2',
	container: $('#S1-B'),
	scale: 'medium',
	text:'Ejemplo2',
	width:250,
	tooltip:'Tamaño Personalizado',
	icon:{
			type:'glyphicon',
			class:'glyphicon-chevron-left',
			position:'left'
		},
		icon2:{					//icono para el segundo estado
			type:'fa',
			class:'fa-cart-plus',
			color:'red',
			position:'left'
		},
		
	
		enableToggle:true,
		
	
	handler: function() 
	{}  
	
	
}).show();

//////////////////////////left//////////////////////////////////
visiblesSideBar[23]=Components.create('Button',{
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
	{ iconp1={position:'left'};
	  Components.getComponentById('ejemplo').changeIcono(1,iconp1);
	}  
}).show();
/////////////////////////////right////////////////////////////////////////
visiblesSideBar[24]=Components.create('Button',{
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
	iconp12={position:'right'};
	Components.getComponentById('ejemplo').changeIcono(1,iconp12);
	}  
}).show();
////////////////////////////////SHAPE - FORMA /////////////////////////////////////////

visiblesSideBar[25]=Components.create('Button',{	
id:'sh1',
container: $('#S2-4'),
	state:'error',
	text:'rect',
	scale: 'medium',
	tooltip:'Medium button',	  
	handler: function() {
		Components.getComponentById('ejemplo').changeForma('');
	}  
}).show();



visiblesSideBar[26]=Components.create('Button',{
	id:'sh2',
	container: $('#S2-4'),
	state:'warning',		
	scale: 'small',
	shape:'box',
	text:'Box',
	tooltip:'Boton Warning',
	handler: function() {
		console.log('box');
		Components.getComponentById('ejemplo').changeForma('box');
	} 		
}).show();

visiblesSideBar[27]=Components.create('Button',{
	id:'sh3',
	container: $('#S2-4'),
	state:'info',
	scale: 'large',
	shape:'circle',
	text:'circle',
	tooltip:'medium active',	  
	handler: function() {
		Components.getComponentById('ejemplo').changeForma('circle');
	}  
 }).show();
 
 visiblesSideBar[28]=Components.create('Image',{ 
		id:"myimage",
       container: $('#S1-A'),
	   tooltip: "Imagen2",		
        image:'images/logo.png',  
		width:150,
												
}).show();
}