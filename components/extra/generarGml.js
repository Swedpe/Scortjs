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
salida = "directed 1\n"+
"graph [\n";

salida = salida +  nodosTxt;
salida = salida + verticesTxt;
salida = salida + ']';
return salida;
}
//----------------------------------------------------------------------------------------------------------------------------------------------
function crearNodoGML(TareaData){
$nodo = 'node [\n'+
'id '+TareaData.id+'\n'+
'template "oreas:std:rect simple"\n'+
'label "'+TareaData.id+'"\n'+
'graphics [\n'+
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
vertices = "";	
for(Sucesora in TareaData.datos.Sucesoras){
	suc =  TareaData.datos.Sucesoras[Sucesora];
	vertices = vertices + 'edge [\n'+
	'source '+TareaData.id+'\n'+ 
	'target '+suc+'\n'+ 
	'graphics [\n'+
	'type "line"\n'+
	'arrow "none"\n'+
	'stipple 1\n'+
	'lineWidth 2.000000000\n'+
	'fill "#000000"\n'+
	']\n'+
	']\n';
	}
return vertices;
}