function LeerProject(){
$.ajax({
	type: "GET",
	url: "importExport/ProjectFile.xml",
	dataType: "xml",
	success: function(xml) {
		var data=new Array();
	console.log("Lectura");
			var data=new Array();
			var ou = new Array();
	$(xml).find("Tasks").each(function () {
		//indice=$(this).find("UID").text();
		//data[indice]=new Array();
		//data[indice].id= parseInt($(this).find("UID").text());
		/*data[indice].type=$(this).find("type").text();
		data[indice].Descripcion=$(this).find("descripcion").text();
		data[indice].background=$(this).find("background").text();
		data[indice].stroke=$(this).find("stroke").text();
		data[indice].idp=$(this).find("idp").text();
		data[indice].childsId=new Array();*/
		console.log('One By one');
		TareasXML = this.getElementsByTagName('Task');
			for (Tareas in TareasXML){
			//try {
				if(typeof(TareasXML[Tareas])=='object'){
					TareaId = parseInt(TareasXML[Tareas].getElementsByTagName('ID')[0].innerHTML);
					if(!data[TareaId]){
						data[TareaId] = {};
					}
					data[TareaId].type = 'WBSNode';
					data[TareaId].tipoObjeto='Tarea';
					data[TareaId].id = TareaId;
					if(!data[TareaId].datos){
						data[TareaId].datos = {};
					}
					
					data[TareaId].datos.Descripcion = TareasXML[Tareas].getElementsByTagName('Name')[0].innerHTML;
					data[TareaId].datos.Cost = TareasXML[Tareas].getElementsByTagName('Cost')[0].innerHTML;	
					data[TareaId].datos.OutlineNumber = TareasXML[Tareas].getElementsByTagName('OutlineNumber')[0].innerHTML;	
					data[TareaId].childsId = [];
					//********Extraer el padre ID
					ou[data[TareaId].datos.OutlineNumber] = TareaId;
					var TreeIndex = data[TareaId].datos.OutlineNumber.split(".");
					if(TreeIndex.length>1){
						var IdPadreT = TreeIndex.splice(0,TreeIndex.length-1);
						data[TareaId].idp = ou[IdPadreT.join('.')];
					}else{
						data[TareaId].idp = 0;
					}
					data[data[TareaId].idp].childsId.push(TareaId);
					//++++++++++++Leer Fechas
					data[TareaId].datos.Start = TareasXML[Tareas].getElementsByTagName('Start')[0].innerHTML;	
					data[TareaId].datos.End = TareasXML[Tareas].getElementsByTagName('Finish')[0].innerHTML;	
					//++++++++++++Leer predecesoras
					data[TareaId].datos.predecesorLink = [];
					
					$(TareasXML[Tareas]).find('PredecessorLink').each(function () {
						predelink  = {}
						predelink.id = $(this).find('PredecessorUID').text();
						predelink.lag = $(this).find('LinkLag').text();
						data[TareaId].datos.predecesorLink.push(predelink);
						if(!data[predelink.id]){
							data[predelink.id] = {};
						}
						if(!data[predelink.id.datos){
							data[predelink.id].datos = {};
						}
						if(!data[predelink.id.datos.Sucesoras){
							data[predelink.id].datos.Sucesoras = {};
						}
						data[predelink.id].datos.Sucesoras.push(TareaId);
						
						//console.log(this);
					});
			}
			//catch(err) {
			//	console.log(err);
			//}		
			}
			console.log(data);
			download('texto.json',JSON.stringify(data, undefined, 4));
	  });
	}
  });
} 