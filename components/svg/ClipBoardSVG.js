var Clipboard=function(){
	this.giftObject = -1;					//objeto que lanzo la operación
	this.recieverObject = -1;
	this.operacionActiva = false;			//1 = copy, 2 = Corte
	this.objetoContenido = 'Nada';
	this.CopyActive = false;
	this.CutActive = false;
	this.tree=null;	
}
//------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.EnablePaste=function(){
    Components.getComponentById('pasteBtnWBS').enable();
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.Prepare=function(Operacion){
/*
@Param Operacion, 2 operaciones posibles, copiar[Copy,Cortar]  
@Use  this.tree.nodoSeleccionado, tomado del arbol svg, el nodo seleccionado actualmente
Se crea el objeto giftObject, que es usado posteriormente cuando se realiza la operacion paste.
*/
if(this.tree.nodoSeleccionado!=-1 && this.tree.actividadSeleccionada!=-1){
	alert("Seleccione un Nodo o una Actividad, no ambos");
}else{
	if(this.tree.nodoSeleccionado!=-1)
		this.giftObject = this.tree.nodoSeleccionado;
	else if(this.tree.actividadSeleccionada!=-1)
		this.giftObject = this.tree.actividadSeleccionada
	else{
		alert("Debe seleccionar un Nodo o una Actividad primero");
		return;	
	}
	if (this.operacionActiva==false){
		switch (Operacion)
			{
			case "Copy":			
					// this.giftObject = this.giftObject;
					//this.objetoContenido = this.giftObject.tipoObjeto;	
					//this.CopyActive = true;
					this.operacionActiva = 'copy';
					this.giftObject.seleccionarCopy(/*1*/);												//disparar los efectos graficos de la seleccion 
					this.giftObject.listeners.onSelectForCopy(this.giftObject);		//disparar el evento del nodo. 1 sola vez
				
			break;
			case "Cortar":				
					this.giftObject.seleccionarCut(/*1*/);		
					this.operacionActiva = 'cut';
					this.giftObject.listeners.onSelectForCut(this.giftObject);			
			break;
		}
	}
	else
		alert("Existen Operaciones pendientes con el Porta Papeles, Operacion Cancelada");
}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.Paste=function(){
/**
		**Funcion booleana, si se permite hacer alguna modificacion retorna false y no se realiza la siguiente funcion externa.
@Use this.giftObject, objeto nodo creado previamente  
@Use this.tree.nodoSeleccionado, nodo que esta actualmente seleccionado en el arbol 
@Use this.tree.actividadseleccionada, actividad que esta actualmente seleccionada en el arbol 
*/
switch(this.giftObject.tipoObjeto){
	case 'actividad':
		if (this.giftObject != -1 && this.tree.nodoSeleccionado!= -1 && (this.tree.nodoSeleccionado.childsId.length==0 || this.tree.nodos[this.tree.nodoSeleccionado.childsId[0]].fakeChild)){
			this.recieverObject = this.tree.nodoSeleccionado;
			switch (this.giftObject.tipoObjeto){
				case "actividad":
					switch(this.operacionActiva){
						case 'copy':
							this.exeCopyTaskActivity();
						break;
						case 'cut':
							this.exeCutTaskActivity();
						break;
					}
				break;
			}
			return true;
		}else{
			alert("Imposible: Asegúrese de haber seleccionado un nodo y de que ese nodo no tenga nodos hijos.");
			return false;
		}
	break;
	case 'Tarea':
		if (this.giftObject != -1 && this.tree.nodoSeleccionado!= -1 && this.tree.nodoSeleccionado.actividadesId.length==0){
			this.recieverObject = this.tree.nodoSeleccionado;
			switch (this.giftObject.tipoObjeto){
				case "Tarea":
					switch(this.operacionActiva){
					case 'copy':
						this.exeCopyTaskNode();
					break;
					case 'cut':
						this.exeCutTaskNode();
					break;
					}
				break;
			}
			return true;
		}else{
			alert("Imposible: Asegúrese de haber seleccionado un nodo y de que ese nodo no tenga actividades.");
			return false;
		}
	break;
}
/* if(this.giftObject.tipoObjeto=="actividad"){
	if (this.giftObject != -1 && (this.tree.nodoSeleccionado.childsId.length==0 || this.tree.nodos[this.tree.nodoSeleccionado.childsId[0]].fakeChild)){
	this.recieverObject = this.tree.nodoSeleccionado;
	switch (this.giftObject.tipoObjeto){
		case "actividad":
			switch(this.operacionActiva){
				case 'copy':
					this.exeCopyTask();
				break;
				case 'cut':
					this.exeCutTask();
				break;
			}
		break;
	}
	}
	else
		alert("Imposible: Asegúrese de haber seleccionado un nodo y de que ese nodo no tenga nodos hijos.");
}else if(this.giftObject.tipoObjeto == "Tarea"){
	if (this.giftObject != -1 && this.tree.nodoSeleccionado!= -1 && Object.keys(this.tree.nodoSeleccionado.items).length==0){
		this.recieverObject = this.tree.nodoSeleccionado;
		switch (this.giftObject.tipoObjeto){
			case "Tarea":
				switch(this.operacionActiva){
				case 1:
				case 'copy':
					this.EXECopyTask();
				break;
				case 2:
				case 'cut':
				this.EXECutTask();
				break;
				}
			break;
		}
	}else
		alert("Imposible: Asegúrese de haber seleccionado un nodo y de que ese nodo no tenga actividades.");
} */
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.Clear=function(){
	if(this.giftObject != -1){
		if(this.tree.nodoSeleccionado != -1)
			this.tree.nodoSeleccionado.desSeleccionar();
		if(this.tree.actividadSeleccionada != -1)
			this.tree.actividadSeleccionada.desSeleccionar();		
		this.giftObject.desSeleccionar();
		this.giftObject.desSeleccionarClipBoard();
		this.objetoContenido = "Nada";
		this.giftObject = -1;
		this.operacionActiva=false;
	}
	if(this.recieverObject!= -1){
		this.recieverObject.desSeleccionar();
		this.objetoContenido = "Nada";
		this.giftObject = -1;
		this.operacionActiva=false;
	}
	this.tree.listeners.onCancelClipoard(this.tree);
	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.exeCopyTaskNode=function(){
/*
@Use this.giftObject, objeto nodo creado previamente, cuando se selecciono la operacion a realizar  
@Use this.recieverObject, nodo que esta actualmente seleccionado en el arbol, y que sera el receptor de los nodos copiados
*/
	PadreFin = this.recieverObject;
	// PadreIni = this.tree.nodos[this.giftObject.idp];	
	PadreIni = this.giftObject.Padre;	
		var TareaCopy = this.giftObject.createCopyTask(this.recieverObject);
		TareaCopy.idp=PadreFin.id;
		// TareaCopy.Padre=PadreFin;
		this.tree.items[TareaCopy.id].idp = PadreFin.id;
		PadreFin.childsId.push(TareaCopy.id);
		PadreFin.childs[TareaCopy.id]=TareaCopy; 
		PadreFin.Status = "Maximizado";
		// if(this.recieverObject!= -1)					///comentado para poder hacer multiples copias
			// PadreFin.desSeleccionar();
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.exeCutTaskNode=function(){	
/*
@Use this.giftObject,nodo seleccionado previamente para realizar la operacion, cuando se selecciono la operacion a realizar  
@Use this.recieverObject, nodo que esta actualmente seleccionado en el arbol, y que sera el receptor de los nodos cortados
*/		
	PadreFin =  this.recieverObject;
	PadreIni = this.tree.nodos[this.giftObject.idp];	
			//Borrandose a si mismo con su hijos
			idx = PadreIni.childsId.indexOf(this.giftObject.id);		//era variable global
			if(idx!=-1){
				delete PadreIni.childs[idx];
				delete PadreIni.chilsDraw[idx];
				PadreIni.screenGrid.svg.remove(PadreIni.ChildLines[idx]);
				PadreIni.screenGrid.svg.remove(PadreIni.ChildArrow[idx]);
				delete PadreIni.ChildLines[idx];
				delete PadreIni.ChildArrow[idx];
				PadreIni.childsId.splice(idx, 1);
			}
			//Manipulando la Tarea receptora
			//1)Agregamos a la tarea receptora el id de la tarea cortada
			PadreFin.childsId.push(this.giftObject.id);	
			PadreFin.childs[this.giftObject.id]=this.giftObject;		//todavia no esta bien implementado childs
			this.giftObject.idp = PadreFin.id;
			this.giftObject.Padre = PadreFin;
			PadreFin.Status =  "Maximizado";
			
			if(this.tree.nodoSeleccionado)		
				PadreFin.desSeleccionar();		
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.exeCopyTaskActivity=function(){
/*
@Use this.giftObject, objeto nodo creado previamente, cuando se selecciono la operacion a realizar  
@Use this.recieverObject, nodo que esta actualmente seleccionado en el arbol, y que sera el receptor de los nodos copiados
*/
	PadreFin = this.recieverObject;
	PadreIni = this.tree.actividadSeleccionada.node;
		var tareaCopy = this.giftObject.createCopyTask(PadreFin);
		// PadreFin.items[tareaCopy.id] = tareaCopy;
		PadreFin.tree.actividades[tareaCopy.id] = tareaCopy;
		PadreFin.actividadesId.push(tareaCopy.id);
		
		PadreFin.Status = "Maximizado";
		PadreFin.dibujarActividades= true;
		// PadreFin.divTexto.remove();
		// PadreFin.divTexto;					//estas 3 lineas eran para q el padre agrande su ancho al maximo
		// PadreFin.calculaNodoEco();
		PadreFin.childsId.length==0?PadreFin.createFakeChild():{};
		PadreFin.destroyActividades();
		// if(this.recieverObject!= -1)			///comentado para poder hacer multiples copias
			// PadreFin.desSeleccionar();
		// console.log("hola");
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Clipboard.prototype.exeCutTaskActivity=function(){	
/*
@Use this.giftObject,actividad seleccionada previamente para realizar la operacion, cuando se selecciono la operacion a realizar  
@Use this.recieverObject, nodo que esta actualmente seleccionado en el arbol, y que sera el receptor de los nodos cortados
*/		
	PadreFin = this.recieverObject;
	PadreIni = this.tree.actividadSeleccionada.node;	

		// PadreIni.items.splice([this.giftObject.id.split('-')[1]],1);
		// PadreFin.items.push(this.giftObject.id);
		// PadreFin.items[Object.keys(PadreFin.items).length+2]=PadreIni.items[this.giftObject.id.split('-')[1]];
		// delete PadreIni.items[this.giftObject.id.split('-')[1]];
		this.tree.actividades[this.giftObject.id.split('-')[1]].idp=PadreFin.id;
		PadreIni.actividadesId.splice(PadreIni.actividadesId.indexOf(parseInt(this.giftObject.id.split('-')[1])),1);
		PadreFin.actividadesId.push(parseInt(this.giftObject.id.split('-')[1]));
		

		
		// PadreFin.divTexto.remove();
		// PadreFin.divTexto;							//estas 3 lineas eran para q el padre agrande su ancho al maximo
		// PadreFin.calculaNodoEco();
		PadreFin.childsId.length==0?PadreFin.createFakeChild():{};
		if(PadreIni.actividadesId.length==0){
			this.tree.nodos[PadreIni.childsId[0]].destroy();
			// this.node.tree.nodos.splice(this.node.childsId[0],1)
			delete this.tree.nodos[PadreIni.childsId[0]];
			delete PadreIni.chilsDraw[PadreIni.childsId[0]];
			PadreIni.childsId=[];
		}
		PadreIni.destroyActividades();
		PadreFin.destroyActividades();
		//Manipulando la Tarea receptora
		//1)Agregamos a la tarea receptora el id de la tarea cortada
		
		// PadreFin.childs[this.giftObject.id]=this.giftObject;

		PadreFin.Status =  "Maximizado";
		PadreFin.dibujarActividades= true;
		
		this.giftObject = -1;
		this.Clear();
}














