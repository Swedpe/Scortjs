$( document ).ready(function(){

Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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

 Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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

 Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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
//segundo bloque -----------------------------------------------------------------------------------------------------------------------------
Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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

 Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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

 Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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
Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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

 Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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

 Components.create('Slider',{ 
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
 Components.create('Slider',{ 
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
});