function CrearGML(tree){
//Crear archivo GML a partir de los datos de el Proyecto.
salida = "";
nodosTxt = "";
verticesTxt = "";
for(nodo in tree.nodos){
	TareaX = tree.nodos[nodo];
	nodosTxt = nodosTxt + crearNodoGML(TareaX);
	verticesTxt = verticesTxt + CrearVericesGML(TareaX);
}
salida = "directed 1"+
"graph [";

salida = salida +  nodosTxt;
salida = salida + verticesTxt;
salida = salida + ']';
return salida;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
function crearNodoGML(TareaData){
$nodo = 'node ['+
'id '+TareaData.Id+
'template "oreas:std:rect simple"\n'+
'label "'+TareaData.Id+
'graphics ['+
'w 33.00000000\n'+
'h 23.00000000\n'+
'fill "#add8e6"\n'+
'line "#4682b4"\n'+
'pattern "1"\n'+
'stipple 1\n'+
'lineWidth 2.000000000\n'+
'width 1.0\n'+
']\n'+
']\n';
return $nodo;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function CrearVericesGML(TareaData){
$vertices = "";	
for(Sucesora in TareaData.Sucesoras){
	suc =  TareaData.Sucesoras[Sucesora];
	vertices = vertices + 'edge ['+
	'source '+TareaData.Id+ 
	'target '+suc.Id+
	'graphics ['+
	'type "line"'+
	'arrow "none"'+
	'stipple 1'+
	'lineWidth 2.000000000'+
	'fill "#000000"'+
	']'+
	']';
	}
return $vertices;
}