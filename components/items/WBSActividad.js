/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WBSActividad v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
	* William Uria Martinez[Williamuriamartinez@hotmail.com]
    * Fritz Velarde-Alvarez Aguilar (f.velardealvarez@gmail.com).
*/
Components.WBSActividad.prototype.init = function(dataObj) {
	this.config = {
		container: $('body'),
		id: "WBSActividad"+ Math.round(Math.random() * 2000),
		idp:'',
		posCajitaX : 10,
		anchoCajita : 100,
		basePosX : 0,				//posicion donde se comienza a dibujar
		basePosY : 0,
		alto : 15,
		descripcion:"",
		TextCajita : new Array(),					//Aqui estara contenida la caja con su texto. que seran creadas con Draws
		tipoObjeto : 'actividad',
		Background : '#FFFFFF',
		stroke : '#258E3A',
		bolita:false,
		screenGrid:'',
		// dibujado : false,
		distanciaNodo:20,
		node : '',
		hermanoAnterior : {},
		// grupoActividades : {},
		// lista:{},
		listeners: {
			show: function(){},
			hide: function(){},
			select: function(obj){},
			deselect: function(obj){},
			onSelectForCopy: dataObj.node.tree.listeners.onNodeSelectForCopy,
			oncreateCopyTask: dataObj.node.tree.listeners.oncreateCopyTask,
			onSelectForCut: dataObj.node.tree.listeners.onNodeSelectForCut,		
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
	this.id=this.config.id;	
	this.idp=this.config.idp;	
		
	this.posCajitaX = this.config.posCajitaX;	
	this.anchoCajita = this.config.anchoCajita;
	this.basePosX = this.config.basePosX;			//posicion donde se comienza a dibujar
	this.basePosY = this.config.basePosY;
	this.ancho = this.config.ancho;					//Ancho de la tarea incluyendo el detalle de sus hijos
	this.alto = this.config.alto;
	this.descripcion = this.config.descripcion;
	this.TextCajita = this.config.TextCajita;		//Aqui estara contenida la caja con su texto. que seran creadas con Draw
	this.tipoObjeto = this.config.tipoObjeto;
	this.screenGrid = this.config.screenGrid;
	this.Background = this.config.Background;
	this.stroke = this.config.stroke;
	this.node = this.config.node;
	// this.dibujado = this.config.dibujado;
	this.distanciaNodo = this.config.distanciaNodo;
	this.hermanoAnterior = this.config.hermanoAnterior;
	this.listeners = this.config.listeners;
	this.grupo = dataObj.grupo;
	this.calculado = false;
	// this.container = this.config.container;
	this.indice=0;
	this.id=this.node.id+"-"+this.id;
};
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.create=function(){

};
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.calcActividad=function(){
	// this.grupoActividad= this.screenGrid.svg.group(this.node.tree.grupo,{id: 'grupoActividad '+this.id});
	if(!this.calculado)
	{}
	if(this.node.tree.config.orientation=="top")
		this.posCajitaX=this.node.PosCajitaX+this.node.AnchoCajita/2-115;				// mitad de maxAncho de nodo(250)/2-especie de sangria entre el PosCajitaX del nodo y sus actividades(10)
	else if(this.node.tree.config.orientation=="left")
		this.posCajitaX=this.node.PosCajitaX+this.node.AnchoCajita+this.node.tree.config.iLevelSeparation;
	// this.basePosY=this.node.BasePosY+this.node.Alto+(this.alto)*this.id+this.distanciaNodo;
	// this.basePosY=this.id==0?this.node.BasePosY+this.node.Alto+this.distanciaNodo:this.hermanoAnterior.basePosY+this.hermanoAnterior.alto
	
	var texto= this.descripcion;
	
	if(!this.divTexto){
		this.divTexto=$('<div id="testActividad'+' '+ this.id+'" class="cajitaActividad" ><p class="testParagraphActividad" >'+texto+'</p></div>');
			this.divTexto.bind('click', {OBJ:this}, function(event) {
			event.data.OBJ.seleccionar();
			});
		$('#divActividades'+ this.node.id).append(this.divTexto);
	}else{
		this.divTexto.show();
	}
	
	
	var alto = (this.divTexto[0].clientHeight);			//no tiene +15 (para q no este pegado arriba y abajo) xq no debe tener tanta distancia como los nodos
	this.basePosY = this.node.actividadesId[0]==parseInt(this.id.split("-")[1])?(this.divTexto[0].offsetParent.offsetTop):this.hermanoAnterior.basePosY+this.hermanoAnterior.alto;
	var ancho = (this.divTexto[0].clientWidth);
	this.alto=(alto>this.alto?alto:this.alto);
	this.anchoCajita = ancho;
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.draw=function(){
	$(this.divTexto).css("visibility",'visible');
	this.drawLines();
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.drawLines=function(){
	var node=this.node;
	if(node.tree.config.orientation=="top"){
		var partidaX = node.AnchoCajita/2;
		var diferencia = 10-this.distanciaNodo/2;
		var partidaY = node.Alto+10+diferencia;
		if(typeof(this.line)=='undefined' ){
			this.line = this.screenGrid.svg.polyline(this.grupo,[[partidaX,partidaY+diferencia],[partidaX-125,partidaY+diferencia],[partidaX-125,this.basePosY-this.node.BasePosY+this.alto/2],[partidaX-115,this.basePosY-this.node.BasePosY+this.alto/2]],
			{fill: 'none', stroke: '#0000FF', strokeWidth: 1,class_: 'actividad'+this.id});
		}else{
				this.line.points[0].x=partidaX;
				this.line.points[0].y=partidaY+diferencia;
				this.line.points[1].x=partidaX-125;
				this.line.points[1].y=partidaX+diferencia+5;
				this.line.points[2].x=partidaX-125;
				this.line.points[2].y=this.basePosY-this.node.BasePosY+this.alto/2;
				this.line.points[3].x=partidaX-115;
				this.line.points[3].y=this.basePosY-this.node.BasePosY+this.alto/2;
				$(this.line).css('visibility', 'visible');	
			
		}
	
	}else if(node.tree.config.orientation=="left"){
		var separacion = this.node.tree.config.iLevelSeparation/2;
		var partidaX = node.AnchoCajita;
		var partidaY = node.BasePosY + node.Alto/2;

		if(typeof(this.line)=='undefined' ){
				//console.log(node.actividades[this.indice].alto);
				this.line = this.screenGrid.svg.polyline(this.grupo,[[partidaX+8,32],[partidaX+separacion,32],[partidaX+separacion,node.actividades[this.indice].basePosY-node.BasePosY+node.actividades[this.indice].alto/2],[partidaX+separacion*2,node.actividades[this.indice].basePosY-node.BasePosY+node.actividades[this.indice].alto/2]],
				{fill: 'none', stroke: '#0000FF', strokeWidth: 1,class_: 'actividad'+this.id});
			}
			else{
				
				this.line.points[0].x=partidaX+8;
				this.line.points[0].y=32;
				this.line.points[1].x=partidaX+separacion;
				this.line.points[1].y=32;
				this.line.points[2].x=partidaX+separacion;
				this.line.points[2].y=node.actividades[this.indice].basePosY-node.BasePosY+node.actividades[this.indice].alto/2;
				this.line.points[3].x=partidaX+separacion*2;
				this.line.points[3].y=node.actividades[this.indice].basePosY-node.BasePosY+node.actividades[this.indice].alto/2;
				$(this.line).css('visibility', 'visible');	
			
			}
	}
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.seleccionar = function(){
    // this.grupo= ((!this.tree.grupo)?'':$('#'+this.tree.grupo));
    // this.grupo= this.tree.grupo;
	var wbstree = this.node.tree;
	if(wbstree.actividadSeleccionada==this){
		wbstree.actividadSeleccionada.desSeleccionar();
	}else{
	if (wbstree.actividadSeleccionada != -1)	
		wbstree.actividadSeleccionada.desSeleccionar();
	
	wbstree.actividadSeleccionada = this;
	// this.SeleccionBox =  this.screenGrid.svg.rect(this.grupo,this.posCajitaX-5, this.basePosY-2, this.anchoCajita+10, this.alto, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'tarea'+this.id });		
	// this.SeleccionBox =  this.screenGrid.svg.rect(this.grupo,node.AnchoCajita/2-115-5, -2, this.anchoCajita+10, this.alto, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'tarea'+this.id });		
	this.SeleccionBox =  this.screenGrid.svg.rect(this.grupo,-this.node.PosCajitaX+this.posCajitaX-5, -this.node.BasePosY+this.basePosY-2, this.anchoCajita+10, this.alto, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'tarea'+this.id });		
    this.Seleccionado = true;
	this.listeners.select(this);
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.desSeleccionar = function(){
	var wbstree = this.node.tree;
	if(this.SeleccionBox.parentElement != undefined) //Caso especial de cortado
		this.screenGrid.svg.remove(this.SeleccionBox);
	wbstree.actividadSeleccionada = -1;
	this.listeners.deselect (this);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.edicion = function(newData){
/* edición de actividad, se permite editar:
- Descripción
//luego aumentar mas posibilidades
*/	
	// console.log("hola");
	for (var i in newData){
		switch(i){
			case 'descripcion':
				this.cambiarDescripcion(newData[i]); 
				break;
		}
	}
	this.node.tree.drawTree();
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.cambiarDescripcion = function(newText){
/*cambia la descripcion de la actividad, y luego recalcula el ancho y alto del fake node.
si los anchos son nesesarios de cambiar se procedera a reposicionamiento y calculo
newtext es el nuevo valor que se tomara en descripción
*/
	if(this.descripcion == newText){
	}else{
		// this.descripcion = newText;
		// this.node.items[this.id].descripcion = newText;
		this.node.tree.actividades[this.id.split('-')[1]].descripcion = newText;
		// this.node.actividades[this.node.actividadesId.indexOf(parseInt(this.id.split('-')[1]))].descripcion = newText;
		this.node.destroyActividades();
		// this.divTexto.remove();
		// delete this.divTexto;
		// this.calcActividad();
		// this.node.tree.nodos[this.node.childsId[0]].calculaNodoEco();

	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.eliminar = function(){
/* eliminar la actividad
*/	
	// console.log("hola");
	this.desSeleccionar();
	delete this.node.tree.actividades[this.id.split('-')[1]];
	// delete this.node.actividadesId[this.node.actividadesId.indexOf(parseInt(this.id.split('-')[1]))];
	this.node.actividadesId.splice(this.node.actividadesId.indexOf(parseInt(this.id.split('-')[1])),1);
	// this.line.remove();
	// delete this.line;
	this.node.tree.actividadSeleccionada=-1;
	if(this.node.actividadesId.length==0){
		this.node.tree.nodos[this.node.childsId[0]].destroy();
		// this.node.tree.nodos.splice(this.node.childsId[0],1)
		delete this.node.tree.nodos[this.node.childsId[0]];
		delete this.node.chilsDraw[this.node.childsId[0]];
		this.node.childsId=[];
		this.node.ControlBox.Box.setAttribute("fill", "white");
		this.node.ControlBox.Box.setAttribute("visibility", "hidden");
		this.node.ControlBox.Simbolo.setAttribute("visibility", "hidden");
		//this.node.Status="minimizado";
	}
	this.node.destroyActividades();
	this.node.tree.drawTree();
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.seleccionarCopy = function(){
	console.log("actividad "+this.id+" seleccionada del nodo "+this.node.id+" para copiar")

}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.seleccionarCut = function(){
	console.log("actividad "+this.id+" seleccionada del nodo "+this.node.id+" para cortar")
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.desSeleccionarClipBoard = function(){
	//efecto gráfico para indicar la selección para copia

		// this.TextCajita.Caja.setAttribute('stroke','green');
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSActividad.prototype.createCopyTask = function(Padre){
	console.log("createCopyTask");
	console.log(Padre)
	var newActivityData ={};
	// jQuery.extend(true,newActivityData,this.node.items[this.id.split('-')[1]]);
	jQuery.extend(true,newActivityData,this.node.tree.actividades[this.id.split('-')[1]]);
	// newActivityData.id=Object.keys(Padre.items).length==0?0:Object.keys(Padre.items).length;		//+2 por actividades q el id del ultimo elemento conincide con el length. esto se arreglara porque lso datos vendran desde bse de datos PHP
	newActivityData.id=this.node.tree.actividades.length;		//+2 por actividades q el id del ultimo elemento conincide con el length. esto se arreglara porque lso datos vendran desde bse de datos PHP
	newActivityData.descripcion='Copia '+this.descripcion;
	newActivityData.idp= Padre.id;
	// this.tree.screenGrid.Maxid = newActivityData.id;								// por el momento no se para q es
	// var copyTask = Components.create(newActivityData.type, newActivityData);
	// Padre.items[newActivityData.id] = newActivityData;
    // this.tree.nodos[copyTask.id] = copyTask;
	
	// this.listeners.oncreateCopyTask(CopyTask);
	return newActivityData;
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Components.WBSActividad.prototype.Minimize=function(){
	$(this.line).attr('visibility', 'hidden');
	$(this.divTexto).hide();
	// this.grupo.hide();
	// $(this.divTexto).hide();
};*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
/*Components.WBSActividad.prototype.Maximize=function(){
	$(this.divTexto).css("left",this.posCajitaX);
	$(this.divTexto).css("top",this.basePosY);
	$(this.divTexto).css("width",this.anchoCajita);
	$(this.divTexto).css("height",this.alto);
	$(this.divTexto).css("visibility",'visible');
	
	$(this.grupo).attr('visibility', 'visible');
	// $(this.divTexto).show();
	// this.grupo.show();
	// $(this.divTexto).show();
};*/
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Components.WBSActividad.prototype.ocultar=function(){
	//$(this.divTexto).hide();
	$(this.line).css("visibility",'hidden');
	if(this==this.node.tree.actividadSeleccionada)
		this.desSeleccionar();
}; 

















