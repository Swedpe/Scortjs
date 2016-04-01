/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WBSnode v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.WBSNode.prototype.init = function(dataObj) {
	this.config = {	
		container: $('body'),
		id: "WBSNode-"+ Math.round(Math.random() * 2000),		//no deveria ser asignado un ip por este metodo aleatorio, de preferencia siempre envie los ids.
		idp:"",
		Descripcion:"",
		PosCajitaX : 10,
		AnchoCajita : 100,
		BasePosX : 0,				//posicion donde se comienza a dibujar
		BasePosY : 0,
		Ancho : 120,				//Ancho de la tarea incluyendo el detalle de sus hijos
		Alto : 50,
		childs : new Array(),  		//Los hijos como objetos 
		childsId : new Array(),
		chilsDraw : new Array(),			//Los hijos que estan dibujados
		Visualizacion : "Normal",
		SeleccionBox : "",			//caja que se creara cuando un nodo este seleccionado alrrededor de este.
		Seleccionado : false,
		Status : "Maximizado",	
		TextCajita : new Array(),					//Aqui estara contenida la caja con su texto. que seran creadas con Draw			
		tipoObjeto : 'tarea',
		Background : '#FFFFFF',				//Color de fondo de cada nodo por defecto se usa el color blanco
		stroke : 'green',
		Level:1,
		screenGrid:'',			
		tree:'',							//el arbol del Wbs Objeto, padre de todos los nodos 
		listeners: {						//Todos los Eventos que se disparan en diferentes situaciones
				show: function(obj){},
				maximize: function(obj){},
				minimize: function(obj){},
				select: function(obj){},
				deselect: function(obj){},
				hide: function(obj){},
				onrequestaddchild: dataObj.tree.listeners.onNoderequestaddchild,
				onrequestaddbrother: dataObj.tree.listeners.onNoderequestaddbrother,
				onrequestEdit:dataObj.tree.listeners.onNoderequestEdit,					//evento individual por nodo, petición de edición
				onEdit:dataObj.tree.listeners.onEdit,									//evento individual por nodo,  luego de edición
				onSelectForCopy: dataObj.tree.listeners.onNodeSelectForCopy,
				oncreateCopyTask: dataObj.tree.listeners.oncreateCopyTask,
				onSelectForCut: dataObj.tree.listeners.onNodeSelectForCut,				
				onrequestaddbrother: dataObj.tree.listeners.onNoderequestaddbrother,
				onNodePaste: dataObj.tree.listeners.onNodePaste,
				onNodeCut: dataObj.tree.listeners.onNodeCut,
				onaddchild: function(obj){},
				onaddbrother: function(obj,dir){}
				
			}
		}
		
	for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if(i == "listeners") {
                for(var j in dataObj[i]) 
                    this.config[i][j] = dataObj[i][j];                
            }
            else
                this.config[i] = dataObj[i];
        }
    } 
	
		this.id=this.config.id;							//Id de nodo
		this.idp=this.config.idp;						//Id del Nodo Padre
		this.Descripcion = this.config.Descripcion;		//Texto que se mostrara en en nodo
		this.Padre='';									//Nodo Padre
		this.Level = this.config.Level;					//Nivel en el arbol, el uno es el mas alto
		this.screenGrid = this.config.screenGrid;
		this.dibujado = false;
		
		this.PosCajitaX = this.config.PosCajitaX;
		//this.PosCajitaX = this.config.PosCajitaX;		
		this.AnchoCajita = this.config.AnchoCajita;
		this.BasePosX = this.config.BasePosX;			//posicion donde se comienza a dibujar
		this.BasePosY = this.config.BasePosY;
		this.Ancho = this.config.Ancho;					//Ancho de la tarea incluyendo el detalle de sus hijos
		this.Alto = this.config.Alto;
		this.childs = this.config.childs;  				//Los hijos como objetos Nodo
		this.chilsDraw = this.config.chilsDraw;			//Los hijos que están dibujados, solo los ids
		this.ChildLines = new Array();					//las lineas que enlazan con cada hijo
		this.ChildArrow = new Array();					//las puntas de las lineas que enlazan con cada nodo hijo
		this.Visualizacion = this.config.Visualizacion;
		this.SeleccionBox = this.config.SeleccionBox;
		this.Seleccionado = this.config.Seleccionado;
		this.Status = this.config.Status;	
		this.TextCajita = this.config.TextCajita;		//Aqui estara contenida la caja con su texto. que seran creadas con Draw
		this.ControlBox ="";							//la caja inferior de cada nodo que controla el maximizado y el minimizado
		this.tipoObjeto = this.config.tipoObjeto;
		this.Background = this.config.Background;
		this.stroke = this.config.stroke;
		this.tree = this.config.tree;
		//parametros adicionales requeridos por el algoritmo ECO
		this.leftNeighbor = null;						//se usan con el algoritmo ECO
		this.rightNeighbor = null;						//se usan con el algoritmo ECO
		this.prelim = 0;
		this.modifier = 0;
		this.siblingIndex = 0;
		
		if (this.idp!=0){this.Level = this.Padre.Level+1;}
		else if (this.idp == 0)
		{this.Level=1;}
		else
		{this.Level = 'indefinido';}		
		this.childsId = this.config.childsId;		
		this.listeners = this.config.listeners;
		//calculamos el ancho de su cajita, o ancho de nodo en base a su texto.
		if(this.tipoObjeto!='WBSPARENT'){
			this.Textprocesor = new TextProcesor(this.id + " " + this.Descripcion,false);
			this.AnchoCajita = this.Textprocesor.MaxLetrasResult*7;
		}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.Seleccionar = function(){
    this.grupo= ((!this.tree.grupo)?'':$('#'+this.tree.grupo));
	var wbstree = this.tree;
	if (wbstree.nodoSeleccionado != -1)	
		wbstree.nodoSeleccionado.DesSeleccionar();
	
	wbstree.nodoSeleccionado = this;
	this.SeleccionBox =  this.screenGrid.svg.rect(this.grupo,this.TextCajita.posx-5, this.TextCajita.posy-5, this.TextCajita.varAncho+10, this.TextCajita.varAlto+10, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'tarea'+this.id });		
    this.Seleccionado = true;
	this.listeners.select(this);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.DesSeleccionar = function(){
	var wbstree = this.tree;
	if(this.SeleccionBox.parentElement != undefined) //Caso especial de cortado
		this.screenGrid.svg.remove(this.SeleccionBox);
	wbstree.nodoSeleccionado = -1;
	this.listeners.deselect (this);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.AddChild = function(nodo){
/*Crear un nodo hijo a el nodo seleccionado,
@Param nodo, se envia null o un array de datos para un nodo.
*/
if (!this.listeners.onrequestaddchild(this)){
		return false;
};
	if(this.tree.nodoSeleccionado == -1){
		alert("No se puede realizar este proceso, debe seleccionar un Nodo Primero");
		return false;
	}
if(nodo==null){
		var nodo ={									
					 type: 'WBSNode', 
					 id:this.tree.nodos.length,
					 idp:this.id,
					 tipoObjeto:'Tarea',
					 Descripcion:this.tree.nodos.length+' Nueva Tarea WBS',
					 container : this.tree.root,
					 screenGrid : this.tree.screenGrid,
					 tree : this.tree
		};
}else{
	nodo.container = this.tree.root;
	nodo.screenGrid = this.tree.screenGrid;
	nodo.tree = this.tree;
	nodo.tipoObjeto='Tarea';
}		
		
		this.screenGrid.Maxid = nodo.id;
		this.childsId.push(nodo.id);
		var element = Components.create('WBSNode', nodo);
		this.tree.items[nodo.id] = nodo;
        this.tree.nodos[element.id] = element;
		this.tree.nodos[this.id].Status ="Maximizado";
		this.childs[nodo.id]=this.tree.nodos[element.id];
		this.ControlBox.Box.setAttribute("visibility", "visible");
		this.ControlBox.Simbolo.setAttribute("visibility", "visible");	
		this.listeners.onaddchild(this);
	return true;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.Edicion = function(NewData){
/* edición de nodo, se permite editar:
- Descripción
- Color de Fondo
- Color de Lineas
//luego aumentar mas posibilidades
*/	
for (i in NewData){
	switch(i){
		case 'Descripcion':
			this.cambiarDescripcion(NewData[i]);
			break;
		case 'Background':
			this.cambiarBackground(NewData[i]);
			break;
		case 'stroke':
			this.cambiarstroke(NewData[i]);
			break;
	}
}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.cambiarDescripcion = function(NewText){
/*cambia la descripcion de la caja de texto que contiene cada nodo, y luego recalcula el ancho.
si los anchos son nesesarios de cambiar se procedera a reposicionamiento y calculo
newtext es el nuevo valor que se tomara en descripción
*/
this.Descripcion = NewText;
this.TextCajita.ChangeText(NewText);
this.AnchoCajita = this.TextCajita.varAncho;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.cambiarBackground = function(NewBackground){
/*cambia el tipo de borde q contiene al nodo
@param NewBackground, el nuevo color del fondo del nodo, la funcion se vera reflejada cuando se redibuje el nodo y no directamente luego de llamar a esta funcion.
*/
this.Background = NewBackground;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.cambiarstroke = function(Newstroke){
/*cambia el color del borde q contiene al nodo
@param Newstroke, el nuevo color del borde de el nodo.
*/
this.stroke = Newstroke;
this.TextCajita.Caja.setAttribute('stroke',Newstroke);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.SeleccionarCopy = function(Recursivo){
	//efecto gráfico para indicar la selección para copia
	this.TextCajita.Caja.setAttribute('stroke','#a8ff00');
	//y ahora hacer lo mismo con los hijos
	if(Recursivo==1){
		for (var indice in this.childsId){
            if(typeof this.tree.nodos[this.childsId[indice]]=="undefined")
				continue;
			this.tree.nodos[this.childsId[indice]].SeleccionarCopy(Recursivo);
		}
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.SeleccionarCut = function(Recursivo){
    //cambia de color la tarea y las tareas hijas para proceder a operaciones de clipboard
    //si recursivo == 1 se procede a realizar el pintado en las tareas hijas y las hijas de las hijas.
		this.TextCajita.Caja.setAttribute('stroke','#e3f5d0');
	//y ahora hacer lo mismo con los hijos
	if(Recursivo==1){
		for (var indice in this.childsId){
            if(typeof this.tree.nodos[this.childsId[indice]]=="undefined")
				continue;
			this.tree.nodos[this.childsId[indice]].SeleccionarCut(Recursivo);
		}
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.DesSeleccionarClipBoard = function(Recursivo){
	//efecto gráfico para indicar la selección para copia
	this.TextCajita.Caja.setAttribute('stroke','green');
	//y ahora hacer lo mismo con los hijos
	if(Recursivo==1){
		for (var indice in this.childsId){
            if(typeof this.tree.nodos[this.childsId[indice]]=="undefined")
				continue;
			this.tree.nodos[this.childsId[indice]].DesSeleccionarClipBoard(Recursivo);
		}
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.CreateCopyTask = function(Padre){
	console.log("CreateCopyTask");
	console.log(Padre)
	var newNodeData ={};								
	jQuery.extend(true,newNodeData,this.tree.items[this.id]);	
	newNodeData.id=this.tree.nodos.length;
	newNodeData.Descripcion='Copia '+this.Descripcion;	
	newNodeData.idp= Padre.id; 
	this.tree.screenGrid.Maxid = newNodeData.id;
	var CopyTask = Components.create(newNodeData.type, newNodeData);
	this.tree.items[newNodeData.id] = newNodeData;
    this.tree.nodos[CopyTask.id] = CopyTask;
	
	for(var indice in newNodeData.childsId)
	{
		if(this.tree.nodos[newNodeData.childsId[indice]] != undefined){
			var TempCopyTask = this.tree.nodos[newNodeData.childsId[indice]].CreateCopyTask(CopyTask);
			CopyTask.childsId[indice]= TempCopyTask.id;
			CopyTask.childs[TempCopyTask.id]=TempCopyTask; 			
		}
	}
	this.listeners.oncreateCopyTask(CopyTask);
	return CopyTask;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.AgregarPadre = function(nodo){
/*Crear un nodo padre nuevo para el nodo seleccionado,
@Param nodo, se envia null o un array de datos para un nodo.
*/
	if(this.tree.nodoSeleccionado == -1){
		alert("No se puede realizar este proceso, debe seleccionar un Nodo Primero");
		return false;
	}
			//1 Creamos la nueva tarea
		var Datos ={
					 type: 'WBSNode', 
					 id:this.tree.nodos.length,
					 idp:this.idp,
					 tipoObjeto:this.tipoObjeto,
					 Descripcion:'TareanuevaPadre',
					 container : this.tree.root,
					 screenGrid : this.tree.screenGrid,
					 tree : this.tree,
					 childsId:[this.id]					 
					};
		
		idn = Datos.id;
		this.screenGrid.Maxid = Datos.id;
		TareaTemp = this;
		Padre = this.tree.nodos[this.idp];
		pos = Padre.childsId.indexOf(this.id);
		//cambiando de padre
		TareaTemp.idp= Datos.id;
		//haciendo que el hijo del ex padre sea el nuevo nodo
		Padre.childsId[pos]=idn;
									
		var element = Components.create(Datos.type, Datos);
		this.tree.items[Datos.id] = Datos;
        this.tree.nodos[element.id] = element;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.AgregaHermano = function(Lado,nodo){
if(!this.listeners.onrequestaddbrother(this.Lado)){
return false;										//si este listener retorna false no se crea el nodo
}
	if(this.tree.nodoSeleccionado == -1){
		alert("No se puede realizar este proceso, debe seleccionar un Nodo Primero");
		return false;
	}
//Si no se envia datos del nodo entonces se crean datos por defecto
if(typeof(nodo.type)=='undefined'){
	var nodo ={									
		type: 'WBSNode', 
		id:this.tree.nodos.length,
		idp:this.idp,
		tipoObjeto:this.tipoObjeto,
		Descripcion:'TareanuevaHermana',
		container : this.tree.root,
		screenGrid : this.tree.screenGrid,
		tree : this.tree
		};
	}
	else
	{	nodo.tree = this.tree;
		nodo.idp = this.idp;
		nodo.container = this.tree.root;
		nodo.screenGrid = this.tree.screenGrid;
		nodo.tipoObjeto=this.tipoObjeto;
	}
			
		this.screenGrid.Maxid = nodo.id;
		if(this.idp != null){
			if (Lado==0)
				this.tree.nodos[this.idp].childsId.splice(this.tree.nodos[this.idp].childsId.indexOf(this.id)+1,0,nodo.id);		
			else if (Lado == 1)		
				this.tree.nodos[this.idp].childsId.splice(this.tree.nodos[this.idp].childsId.indexOf(this.id),0,nodo.id);
		}
		
		var element = Components.create('WBSNode', nodo);
		this.tree.items[nodo.id] = nodo;
        this.tree.nodos[element.id] = element;
		this.tree.nodos[this.idp].childs[nodo.id]=this.tree.nodos[nodo.id]; 		
		this.listeners.onaddbrother(this,Lado);
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.ChangeStatus = function(){
	var items = this.tree.nodos;
	var seleccionada = this.tree.nodoSeleccionado;
	if (this.Status!="minimizado"){
		this.Minimize();
		if (seleccionada != -1)		
			items[seleccionada.id].DesSeleccionar();
	}else
		this.Maximize();
		this.tree.drawTree();
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.Minimize = function(){
	if (this.Status!="minimizado"){
		this.Status = "minimizado";	
		for (var indice in this.childsId){
			this.tree.nodos[this.childsId[indice]].Minimize();
		}
		this.listeners.minimize(this);
	}
	
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.Maximize = function(){
	if (this.Status=="minimizado"){
		this.Status = "Maximizado";	
		this.listeners.maximize(this);		
		for (var indice in this.childsId){
			this.tree.nodos[this.childsId[indice]].Maximize();
		}
	}
	
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._setNeighbors = function(node, level) {
    node.leftNeighbor = this.tree.previousLevelNode[level];
    if(node.leftNeighbor != null)
        node.leftNeighbor.rightNeighbor = node;
    this.tree.previousLevelNode[level] = node;	
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._getLeftSibling = function () {
	//busca el hermano de la izquierda, compartiendo el mismo padre
    if(this.leftNeighbor != null && this.leftNeighbor.idp == this.idp)
        return this.leftNeighbor;
    else
        return null;	
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._getChildrenCenter = function (tree) {
    node = this._getFirstChild();
    node1 = this._getLastChild();
    return node.prelim + ((node1.prelim - node.prelim) + tree._getNodeSize(node1)) / 2;	
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._getRightSibling = function () {
	//busca el hermano de la derecha, compartiendo el mismo padre
    if(this.rightNeighbor != null && this.rightNeighbor.Padre == this.Padre)
        return this.rightNeighbor;
    else
        return null;	
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._getLevel = function () {
	if (this.Padre.id == -1) {return 0;}
	else return this.Padre._getLevel() + 1;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._getFirstChild = function () {
	//retorna el nodo objeto localizado en la primera poscicion
	return this.tree.nodos[this.childsId[0]];
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._getLastChild = function () {	
//retorna el nodo objeto localizado en la ultima poscicion
	return this.tree.nodos[this.childsId[this.childsId.length - 1]];
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype._getChildrenCount = function () {
	if (this.Status!='Maximizado') return 0;
    return this.childsId.length;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.create = function() {
    console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al create generico de Components que agrega un div al contenedor
    return this ;
	}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.show = function() {
    console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al show generico de Components que muestra un div al contenedor
      return this;
	}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.WBSNode.prototype.calculaNodo  = function(PadreObj) {
	this.tree.LayoutAlgoritm.calculaNodoW(this.id,PadreObj);
	//this.calculaNodoW(PadreObj);
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.draw = function(){
if(this.tree.nodos[this.idp].Status=='Maximizado'){
	if(this.tipoObjeto!='WBSPARENT'){
		var propiedades = {
				'x':this.PosCajitaX,
				'y':this.BasePosY,
				'texto':this.id + " " + this.Descripcion,
				'id':this.id,
				'Padre':this,
				grupo:((!this.tree.grupo)?'':$('#'+this.tree.grupo)),
				'tipoObjeto':this.tipoObjeto,
				'Background':this.Background,
				'stroke':this.stroke,
				'EsUltimo':(this.EsUltimo == undefined)?true:false
			};
		this.TextCajita = new textCajita(this.screenGrid.svg,propiedades);
			this.TextCajita.draw();						//dibujar la cajita
			this.DrawChildLines();
			var propiedades ={
				'x':this.PosCajitaX+this.AnchoCajita/2,
				'y':this.BasePosY+this.Alto,
				'Padre':this,
				'id':this.id,
				 grupo:((!this.tree.grupo)?'':$('#'+this.tree.grupo)),
				'EsUltimo':(this.EsUltimo == undefined)?true:false				
			};
			var items = this.tree.nodos;
			this.ControlBox= new ControlBox(this.screenGrid.svg,propiedades,items);
		}
	this.dibujado=true;
	}
}

Components.WBSNode.prototype.DrawChildLines = function(){
if(this.Status=='Maximizado'){
    this.grupo= ((!this.tree.grupo)?'':$('#'+this.tree.grupo));
	var MiCentroX = 0;
	var MiCentroY = 0;
	var HijoCentroX = 0;
	var HijoCentroY = 0;
	//el punto central de la parte inferior para el padre
	MiCentroY = this.BasePosY + this.Alto;
	//el punto central de la parte superior para el hijo
	//var g = this.screenGrid.svg.group({stroke: 'green'}); 
	var items = this.tree.nodos;
	for (var indice in this.childsId){
				HijoCentroX = this.tree.nodos[this.childsId[indice]].PosCajitaX + this.tree.nodos[this.childsId[indice]].AnchoCajita/2;
				HijoCentroY = this.tree.nodos[this.childsId[indice]].BasePosY;
				if (typeof(this.ChildLines[indice])=='undefined'){
					this.ChildLines[indice]=this.screenGrid.svg.polyline(this.grupo,[[this.PosCajitaX + this.AnchoCajita/2, MiCentroY],[this.PosCajitaX + this.AnchoCajita/2, this.BasePosY + this.Alto +(HijoCentroY-MiCentroY)/2],[HijoCentroX, MiCentroY +(HijoCentroY-(this.BasePosY + this.Alto))/2],[HijoCentroX, HijoCentroY]],{fill: 'none', stroke: 'blue', strokeWidth: 1,class_: 'tarea'+this.id}); 
					this.ChildArrow[indice] =this.screenGrid.svg.polygon(this.grupo,[[HijoCentroX,HijoCentroY],[HijoCentroX+5,HijoCentroY-10],[HijoCentroX-5,HijoCentroY-10],[HijoCentroX,HijoCentroY]], {fill: 'red', stroke: 'blue', strokeWidth: 1,class_: 'tarea'+this.id}); 
				}
		items[this.childsId[indice]].DrawChildLines();
	}
}	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.removeGraphics = function(){
	/*Pasos: 0)Destruir sus hijos 
	1)destruir su text cajita  
	2)destruir los textos  
	3)destruir la cajita de control 
	4)Destruir la linea de Union 
	5)destruir la punta de la flecha 
	6)Calcular de nuevo la posicion de sus padres*/
	//Paso 0:
	console.log(this.id)
	if (this.dibujado==true)
	{
	for (var indice in this.childsId){
		this.tree.nodos[this.childsId[indice]].removeGraphics();
		if (typeof(this.ChildLines[indice])=='object'){
			this.screenGrid.svg.remove(this.ChildLines[indice]);
			this.screenGrid.svg.remove(this.ChildArrow[indice]);
			//delete this.tree.nodos[this.childsId[indice]];
			delete this.chilsDraw[indice];
			delete this.ChildLines[indice];
			delete this.ChildArrow[indice];
		}
	}
	if(typeof(this.TextCajita)=='object'){
		this.screenGrid.svg.remove(this.TextCajita.Caja);
		for (var indice in this.TextCajita.ArrayTextos)
			this.screenGrid.svg.remove(this.TextCajita.ArrayTextos[indice]);
		
		this.screenGrid.svg.remove(this.ControlBox.Box);
		this.screenGrid.svg.remove(this.ControlBox.Simbolo);
	}
	this.dibujado=false;
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.LimpiarCalculosPrevios = function()
{
	this.prelim = 0;
	this.modifier = 0;
	this.PosCajitaX = 10;		
	this.BasePosX = 0;	
	this.BasePosY = 0;
	this.leftNeighbor = null;						//se usan con el algoritmo ECO
	this.rightNeighbor = null;	
	this.siblingIndex = 0;
}

//