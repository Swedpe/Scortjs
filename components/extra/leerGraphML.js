function LeerGrapML(){
$.ajax({
	type: "GET",
	url: "importExport/formato.GraphML",
	dataType: "xml",
	success: function(xml) {
  var nodos=new Array();
  var id=[];
  var x=[];
  var y=[];
  var Predecesoras=[];
  var Sucesoras=[];
  var texto = [];
  var totalNodos=0;
    $(xml).find("node").each(function () {
      if(typeof(nodos[parseInt($(this).attr('id'))])=='undefined')
      
  
  nodos[parseInt($(this).attr('id'))]={};
      nodos[parseInt($(this).attr('id'))].PertId=$(this).attr('id');
	  nodos[parseInt($(this).attr('id'))].type= 'GrafoNodo';     
	  nodos[parseInt($(this).attr('id'))].Y=$(this).find('data').eq(1).text();
      nodos[parseInt($(this).attr('id'))].X=$(this).find('data').eq(2).text();
      nodos[parseInt($(this).attr('id'))].internalData={};
      nodos[parseInt($(this).attr('id'))].internalData.descripcion=parseInt($(this).attr('id'));//Xdata[parseInt($(this).attr('id'))].datos.Descripcion;
      nodos[parseInt($(this).attr('id'))].internalData.duracion='Nah';
      nodos[parseInt($(this).attr('id'))].internalData.holgura='Nad';
      nodos[parseInt($(this).attr('id'))].internalData.visibleId=parseInt($(this).attr('id'));
    });
    $(xml).find("edge").each(function () {
        if(typeof(nodos[parseInt($(this).attr('target'))].Predecesoras)=='undefined')
          nodos[parseInt($(this).attr('target'))].Predecesoras=[];
        if(typeof(nodos[parseInt($(this).attr('source'))].Sucesoras)=='undefined')
          nodos[parseInt($(this).attr('source'))].Sucesoras=[];

        nodos[parseInt($(this).attr('source'))].Sucesoras.push($(this).attr('target'));
        nodos[parseInt($(this).attr('target'))].Predecesoras.push($(this).attr('source'));
      });

download('texto.json',JSON.stringify(nodos, undefined, 4));
}
})
}
