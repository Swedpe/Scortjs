function ejemploSliders(){
visiblesSideBar = new Array();
Components.create('FreeDiv',{
id:'mainContent',
freeHtml:true,
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">SLIDER ITEM SCORT</P></font></strong> <div class="row"><div  id="ejemplo1" class="col-sm-4" style="height: 300px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Sliders con diferentes estados</P></font></strong> <br><br></div><div id="ejemplo2" class="col-sm-4" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Sliders con diferentes estados + labels</P></font></strong> </div><div id="ejemplo3" class="col-sm-4" style="height: 300px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">Sliders con diferentes estados + iconos</P></font></strong> </div></div>',
});
visiblesSideBar[1]=Components.create('Slider',{ 
	x:10,
	y:50,	
    container: $('#ejemplo1'),
	width: 150,
	value: 50,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'error',
	tooltip:'Con etiqueta',
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[2]=Components.create('Slider',{ 
	x:10,
	y:90,		
 container: $('#ejemplo1'),
	width: 150,
	value: 50,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'highlight',
	tooltip:'Con etiqueta',

	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[3]=Components.create('Slider',{ 
	x:10,
	y:140,		
 container: $('#ejemplo1'),
	width: 150,
	value: 50,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'active',
	tooltip:'Con etiqueta',
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();

visiblesSideBar[4]= Components.create('Slider',{ 
	x:10,
	y:190,		
 container: $('#ejemplo1'),
	width: 150,
	value: 50,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'warning',
	tooltip:'Con etiqueta',
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[5]=Components.create('Slider',{ 
	x:10,
	y:250,		
 container: $('#ejemplo1'),
	width: 150,
	value: 50,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'info',
	tooltip:'Con etiqueta',
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[6]= Components.create('Slider',{ 
	x:10,
	y:320,		
 container: $('#ejemplo1'),
	width: 150,
	value: 50,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'default',
	tooltip:'Con etiqueta',
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
//segundo bloque -----------------------------------
visiblesSideBar[7]= Components.create('Slider',{ 
	x:10,
	y:50,
 container: $('#ejemplo2'),	
	width: 150,
	value: 50,
	label: "ERROR",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'error',
	tooltip:'Con etiqueta',
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[8]=Components.create('Slider',{ 
	x:10,
	y:90,	
 container: $('#ejemplo2'),		
	width: 150,
	value: 50,
	label: "HIGHLIGHT",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'highlight',
	tooltip:'Con etiqueta',

	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[9]= Components.create('Slider',{ 
	x:10,
	y:140,
 container: $('#ejemplo2'),		
	width: 150,
	value: 50,
	label: "ACTIVE",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'active',
	tooltip:'Con etiqueta',
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();

visiblesSideBar[10]= Components.create('Slider',{ 
	x:10,
	y:190,
 container: $('#ejemplo2'),		
	width: 150,
	value: 50,
	label: "WARNING",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'warning',
	tooltip:'Con etiqueta',
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[11]=  Components.create('Slider',{ 
	x:10,
	y:250,
 container: $('#ejemplo2'),		
	width: 150,
	value: 50,
	label: "INFO",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'info',
	tooltip:'Con etiqueta',
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();

visiblesSideBar[12]=Components.create('Slider',{ 
	x:10,
	y:320,
 container: $('#ejemplo2'),	
	width: 150,
	value: 50,
	label: "DEFAULT",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'default',
	tooltip:'Con etiqueta',
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
//tercer bloque ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[13]= Components.create('Slider',{ 
	x:10,
	y:50,
 container: $('#ejemplo3'),	
	width: 150,
	value: 75,
	label: "ERROR",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'error',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();

visiblesSideBar[14]= Components.create('Slider',{ 
	x:10,
	y:90,		
 container: $('#ejemplo3'),	
	width: 150,
	value: 25,
	label: "HIGHLIGHT",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'highlight',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},

	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[15]= Components.create('Slider',{ 
	x:10,
	y:140,		
 container: $('#ejemplo3'),	
	width: 150,
	value: 50,
	label: "ACTIVE",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'active',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();

visiblesSideBar[16]=Components.create('Slider',{ 
	x:10,
	y:190,		
 container: $('#ejemplo3'),	
	width: 150,
	value: 75,
	label: "WARNING",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'warning',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();
visiblesSideBar[17]=Components.create('Slider',{ 
	x:10,
	y:250,		
 container: $('#ejemplo3'),	
	width: 150,
	value: 100,
	label: "INFO",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'info',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();

visiblesSideBar[18]= Components.create('Slider',{ 
	x:10,
	y:320,		
	width: 150,
	value: 50,
 container: $('#ejemplo3'),	
	label: "DEFAULT",
	labelWidth: 100,
	increment: 25,
	minValue: 0,
	maxValue: 100,
	state:'default',
	tooltip:'Con etiqueta',
	icon:{
		type:'fontawesome',
		class:'fa-renren',
		//color:'yellow'
	},
	
	listeners: {
		change: function( event, ui ) {			  
			}
	}
}).show();	 
}