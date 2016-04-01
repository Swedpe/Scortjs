$( document ).ready(function(){
	Components.create('ProgressBar',{  	
	x:0,
	y:70,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:50,
	state:'active',
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:100,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:80,
	state:'error',
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:57,
	state:'warning',
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:180,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:70,
	state:'info',
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	container: $('#ejemplo1'),
	align: "left",
	width: 250,
	value:30,
}).show();	
Components.create('ProgressBar',{  	
	x:0,
	y:150,
	container: $('#ejemplo1'),
	align: "left",
	width: 250,
	value:30,
	state:'highlight',
}).show();
//segundo bloque -----------------------------------------------------------------------------------------------------------------------------
container: $('#ejemplo2'),
Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo2'),
	align: "left",
	width: 250,
	value:30,
	state:'active',
	scale:'minier',
	animate:true,
	
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:100,
	align: "left",
	width: 250,
	value:45,
	container: $('#ejemplo2'),
	scale:'mini',
	state:'error',
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	width: 250,
	value:57,
	scale:'small',
	container: $('#ejemplo2'),
	state:'warning',
	
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:180,
	align: "left",
	width: 250,
	value:70,
	container: $('#ejemplo2'),
	scale:'medium',
	state:'info',
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	width: 250,
	scale:'large',
	value:82,
	container: $('#ejemplo2'),
}).show();		

Components.create('ProgressBar',{  	
	x:0,
	y:180,
	align: "left",
	width: 250,
	value:95,
	container: $('#ejemplo2'),
	state:'highlight',
	scale:'large',
}).show();
	 		 
//tercer bloque ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo4'),
	align: "left",
	width: 250,
	value:30,
	state:'active',
	scale:'minier',
	class:'striped',
	animate:false,
	
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:100,
	container: $('#ejemplo4'),
	align: "left",
	width: 250,
	value:45,
	class:'striped',
	scale:'mini',
	state:'error',
	animate:false,
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	container: $('#ejemplo4'),
	align: "left",
	width: 250,
	value:57,
	scale:'small',
	class:'striped',
	state:'warning',
	animate:false,
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:180,
	container: $('#ejemplo4'),
	align: "left",
	width: 250,
	value:70,
	class:'striped',
	scale:'medium',
	state:'info',
	animate:false,
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	container: $('#ejemplo4'),
	align: "left",
	width: 250,
	scale:'large',
	value:82,
	class:'striped',
	animate:false,
}).show();		

Components.create('ProgressBar',{  	
	x:0,
	y:180,
	container: $('#ejemplo4'),
	align: "left",
	width: 250,
	value:95,
	class:'striped',
	state:'highlight',
	scale:'large',
	animate:false,
}).show();

//quinto bloque -------------------------------------------------------------------------------------------------------------------------------------
Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo6'),
	align: "left",
	shape:'circle',
	value:30,
	scale:'minier',
	state:'active',
	animate:false,			
}).show();
Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo6'),
	shape:'circle',
	value:45,
	state:'info',
	scale:'mini',
	animate:false,			
}).show();
Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo6'),
	shape:'circle',
	value:57,
	scale:'small',
	state:'error',
	animate:false,		
}).show();
Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo6'),
	shape:'circle',
	value:70,
	scale:'medium',
	state:'warning',
	animate:false,			
}).show();
Components.create('ProgressBar',{  	
	container: $('#ejemplo6'),
	shape:'circle',
	value:82,
	state:'highlight',
	scale:'large',
	animate:false,		
}).show(); 
//sexto bloque --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.create('ProgressBar',{  	
	x:0,
	y:70,
	align: "left",
	width: 250,
	value:30,
	state:'active',
	container: $('#ejemplo7'),
	class:'striped',
	animate:true,
	
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:100,
	align: "left",
	width: 250,
	value:45,
	class:'striped',
	container: $('#ejemplo7'),
	state:'error',
	animate:true,
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	width: 250,
	value:57,
	container: $('#ejemplo7'),
	class:'striped',
	state:'warning',
	animate:true,
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:180,
	align: "left",
	width: 250,
	value:70,
	class:'striped',
	container: $('#ejemplo7'),
	state:'info',
	animate:true,
}).show();

Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	width: 250,
	container: $('#ejemplo7'),
	value:82,
	class:'striped',
	animate:true,
}).show();		

Components.create('ProgressBar',{  	
	x:0,
	y:180,
	align: "left",
	width: 250,
	value:95,
	class:'striped',
	state:'highlight',
	container: $('#ejemplo7'),
	animate:true,
}).show();
	 
});