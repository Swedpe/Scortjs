function ejemploProgress(){
Components.create('FreeDiv',{
freeHtml:true,
id:'mainContent',
container: $('.page-content'),
html:'<strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 14pt">PROGRESS BAR ITEM - EJEMPLO COMPLETO </P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4" style="height: inherit" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Progress con diferentes colores</P></font></strong><br><br></div><div id="ejemplo2" class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Progress-rect solid con diferentes tamaños</P></font></strong> </div><div id="ejemplo4" class="col-sm-4" style="height: inherit"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">Progress-rect striped con diferentes tamaños</P></font></strong> </div></div><!--El ancho es de 12 columnas, una vez ocupadas las 12 se cierra el row--><div class="row"><div id="ejemplo6" class="col-sm-6" style =" height: inherit ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Progress- circle con diferentes tamaños</P></font></strong> </div><div id="ejemplo7" class="col-sm-6" style =" height: inherit ;">  <strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Progress-rect striped + animacion</P></font></strong> </div></div>',
});
visiblesSideBar[1]=Components.create('ProgressBar',{  	
	id:'prueba',
	x:0,
	y:70,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:50,
	state:'active',
}).show();

visiblesSideBar[2]=Components.create('ProgressBar',{  	
	x:0,
	y:100,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:80,
	state:'error',
}).show();

visiblesSideBar[3]=Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:57,
	state:'warning',
}).show();

visiblesSideBar[4]=Components.create('ProgressBar',{  	
	x:0,
	y:180,
	align: "left",
	container: $('#ejemplo1'),
	width: 250,
	value:70,
	state:'info',
}).show();

visiblesSideBar[5]=Components.create('ProgressBar',{  	
	x:0,
	y:150,
	container: $('#ejemplo1'),
	align: "left",
	width: 250,
	value:30,
}).show();	
visiblesSideBar[6]=Components.create('ProgressBar',{  	
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
visiblesSideBar[7]=Components.create('ProgressBar',{  	
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

visiblesSideBar[8]=Components.create('ProgressBar',{  	
	x:0,
	y:100,
	align: "left",
	width: 250,
	value:45,
	container: $('#ejemplo2'),
	scale:'mini',
	state:'error',
}).show();

visiblesSideBar[9]=Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	width: 250,
	value:57,
	scale:'small',
	container: $('#ejemplo2'),
	state:'warning',
	
}).show();

visiblesSideBar[10]=Components.create('ProgressBar',{  	
	x:0,
	y:180,
	align: "left",
	width: 250,
	value:70,
	container: $('#ejemplo2'),
	scale:'medium',
	state:'info',
}).show();

visiblesSideBar[11]=Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	width: 250,
	scale:'large',
	value:82,
	container: $('#ejemplo2'),
}).show();		

visiblesSideBar[12]=Components.create('ProgressBar',{  	
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
visiblesSideBar[13]=Components.create('ProgressBar',{  	
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

visiblesSideBar[14]=Components.create('ProgressBar',{  	
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

visiblesSideBar[15]=Components.create('ProgressBar',{  	
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

visiblesSideBar[16]=Components.create('ProgressBar',{  	
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

visiblesSideBar[17]=Components.create('ProgressBar',{  	
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

visiblesSideBar[18]=Components.create('ProgressBar',{  	
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
visiblesSideBar[19]=Components.create('ProgressBar',{  	
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
visiblesSideBar[20]=Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo6'),
	shape:'circle',
	value:45,
	state:'info',
	scale:'mini',
	animate:false,			
}).show();
visiblesSideBar[29]=Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo6'),
	shape:'circle',
	value:57,
	scale:'small',
	state:'error',
	animate:false,		
}).show();
visiblesSideBar[21]=Components.create('ProgressBar',{  	
	x:0,
	y:70,
	container: $('#ejemplo6'),
	shape:'circle',
	value:70,
	scale:'medium',
	state:'warning',
	animate:false,			
}).show();
visiblesSideBar[22]=Components.create('ProgressBar',{  	
	container: $('#ejemplo6'),
	shape:'circle',
	value:82,
	state:'highlight',
	scale:'large',
	animate:false,		
}).show(); 
//sexto bloque --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
visiblesSideBar[23]=Components.create('ProgressBar',{  	
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

visiblesSideBar[24]=Components.create('ProgressBar',{  	
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

visiblesSideBar[25]=Components.create('ProgressBar',{  	
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

visiblesSideBar[26]=Components.create('ProgressBar',{  	
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

visiblesSideBar[27]=Components.create('ProgressBar',{  	
	x:0,
	y:150,
	align: "left",
	width: 250,
	container: $('#ejemplo7'),
	value:82,
	class:'striped',
	animate:true,
}).show();		

visiblesSideBar[28]=Components.create('ProgressBar',{  	
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
}