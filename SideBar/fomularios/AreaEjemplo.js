
function ejemploArea(){
visiblesSideBar = new Array();
//Components.create('FreeDiv',{
//id:'mainContent',
//freeHtml:true,
//container: $('.page-content'),
//html:'<div id="parte2" class="col-sm-12"><strong><FONT FACE="arial"><p style="color: #BD133D; font-size: 14pt">BOTONES E ICONOS SCORT</P></font></strong><div class="row"><div  id="ejemplo1" class="col-sm-4" style="height: 200px" ><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Botones con diferentes estados</P></font></strong><br><br></div><div id="ejemplo2" class="col-sm-4" style="height: 150px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt"> Botones con diferentes tamaños</P></font></strong> </div><div id="ejemplo4" class="col-sm-4" style="height: 150px"><strong><FONT FACE="arial"> <p style="color: #BD133D; font-size: 12pt">Botones de distintos tamaños + iconos</P></font></strong> </div></div><!--El ancho es de 12 columnas, una vez ocupadas las 12 se cierra el row-->	<div class="row"><div id="ejemplo5" class="col-sm-12" style =" height: 230px ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Botones cuadrados de distintos tamaños + iconos </P></font></strong> </div> </div>	<div class="row"><div id="ejemplo6" class="col-sm-4" style =" height: 300px ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Botones cuadrados de distintos tamaños sin descripcion</P></font></strong> </div><div id="ejemplo7" class="col-sm-8" style =" height: 300px ;" align="right">  <strong><FONT FACE="arial"> <p align="center" style="color: #BD133D; font-size: 12pt"> Botones circulares de distintos tamaños + iconos</P></font></strong> </div></div><div class="row"><div id="ejemplo8" class="col-sm-12" style =" height: 230px ;"><strong><FONT FACE="arial"> <p align="left" style="color: #BD133D; font-size: 12pt">Botones Glip de distintas formas </P></font></strong> </div></div><!--creo 2 columnas una de 4 y otra de 8, la de 8 no la usare pero igual la declaro para que no descuadren los demas elementos--><div class="row"><div class="col-sm-4" style="height: 20px"></div><div id="InputE3" class="col-sm-4"></div><div class="col-sm-4"></div></div><div class="row"><div id="ejemplo3"  class="col-sm-11" style="height: 350px"><strong><FONT FACE="arial"> <p align="center" style="color: #BD133D; font-size: 12pt">GALERIA DE BOTONES + ICONOS FONTAWESOME</P></font></strong> 		</div></div><div class="row"><div class="col-sm-4" style="height: 20px"></div><div id="InputE300" class="col-sm-4"></div><div class="col-sm-4"></div></div><div class="row"><div id="ejemplo300"  class="col-sm-11" style="height: 350PX"><strong><FONT FACE="arial"> <p align="center" style="color: #BD133D; font-size: 12pt">GALERIA DE BOTONES + ICONOS GLIP </P></font></strong></div></div></div>',
//};//);
	
visiblesSideBar[1]=Components.create('Form',{		
	container: $('.page-content'),
	title: "EJEMPLO TEXT-AREA", 
	state:'active',
	width:'420px',
	height:'312px',
	items:[
	{type: 'InputField',
		id:'HtmlNewTab',
		label: {html:'<b>Ejemplo de TextArea</b>',
				cols:12},
		input:{cols:12,
			name:'HtmlNewTab',
			type: 'TextArea',
			value:'Contenido Html prueba para este contenedor',
			tinymce:true,
		},		
	},
  ]
}).show();
}