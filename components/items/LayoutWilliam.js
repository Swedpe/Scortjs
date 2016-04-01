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
//var LayoutWilliam=function(){
function LayoutWilliam(tree){
this.tree = tree;
/*
Solo 3 funciones son nesesarias para calcular el layout con este algoritmo.
1)calculaNodoW.
2)GetChildBasePosx.
3)Calcular_Ancho.
*/		
}
//$this=this.tree.nodos[NodoId];
LayoutWilliam.prototype._positionTree  = function(tree,root) {
	this.tree.LayoutAlgoritm._firstWalk(-1,'undefined');
	this.tree.LayoutAlgoritm._secondWalk();
	// this.tree.LayoutAlgoritm.calculaBasePosY();
	//this.calculaNodoW(PadreObj);
}
LayoutWilliam.prototype._secondWalk  = function() {
	for(var index in this.tree.nodos){
		// if(this.tree.nodos[index].id!=-1&&this.tree.nodos[index].id!=0)
		if(this.tree.nodos[index].id!=-1&&this.tree.nodos[index].Padre.id!=-1)
		this.tree.nodos[index].BasePosY=this.tree.maxLevelHeight[this.tree.nodos[index].Level-1]+this.tree.nodos[this.tree.nodos[index].Padre.id].BasePosY+this.tree.config.iLevelSeparation;
		
		// console.log(this.tree.nodos[index].BasePosY)
		// console.log(this.tree.nodos[index].Padre)
		
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------

LayoutWilliam.prototype._firstWalk  = function(NodoId,PadreObj) {
	//generara una cadena de dibujo desde el padre hacia los hijos, recorrerá todo el diagrama.
	var $this=this.tree.nodos[NodoId];
	// console.log(this.tree.nodos[NodoId].Alto);
	//$this.BasePosX = 0;
	if(PadreObj=='undefined'){
		$this.BasePosX = 0;
		$this.Level = 0;
		this.calcLevelHeigth($this.Level,$this.Alto);
	}
	else{
		$this.BasePosX = PadreObj.tree.LayoutAlgoritm.GetChildBasePosx($this,PadreObj.id);
		$this.Level = ($this.idp==-1)?0:PadreObj.Level+1;
		// console.log(this.tree.nodos[NodoId].Level);
		this.calcLevelHeigth($this.Level,$this.Alto);
	}
	
	$this.PosCajitaX = $this.BasePosX + ($this.Ancho-$this.AnchoCajita)/2;
	$this.BasePosY = $this.screenGrid.Level[$this.Level].y;	
	
	if(typeof $this.screenGrid.MaxLevel == "undefined")
		$this.screenGrid.MaxLevel=0;
	
	if($this.screenGrid.MaxLevel<$this.Level)	
		$this.screenGrid.MaxLevel=$this.Level;
			
		if($this.tipoObjeto!='WBSPARENT'){
			$this.TextCajita.varAncho=$this.AnchoCajita;
			$this.Ancho = $this.AnchoCajita+20;
		}
		else
		{
			$this.Ancho = 120;		
			$this.Alto= 0;			
		}
		if(PadreObj!='undefined'){
			PadreObj.chilsDraw[$this.id] = $this.id; 
			PadreObj.tree.LayoutAlgoritm.Calcular_Ancho(false,NodoId);
		}
		//ahora calcular los hijos
		var items = $this.tree.nodos;   //problema aparente this.tree.nodos[NodoId].tree.nodos
		for (var indice in $this.childsId){
			if(typeof(items[$this.childsId[indice]]) !='undefined'){                           
                            $this.childs[$this.childsId[indice]]=items[$this.childsId[indice]];                           
                            // $this.childs[$this.childsId[indice]].Padre = $this;
							$this.childs[$this.childsId[indice]].tree.LayoutAlgoritm._firstWalk($this.childs[$this.childsId[indice]].id,$this);			
			}
		} 
		
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
LayoutWilliam.prototype.calcLevelHeigth = function(level,alto){
	if(this.tree.maxLevelHeight[level]==undefined)
		this.tree.maxLevelHeight[level]=alto;
	else{
		if(alto>this.tree.maxLevelHeight[level])
			this.tree.maxLevelHeight[level]=alto;
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
LayoutWilliam.prototype.GetChildBasePosx = function(child,NodoId){
//calcular la posicion inicial de implantacion de un nodo, a partir de sus hermanos y la poscicion inicial de su nodo padre.
//@Param, child[Entero], id del nodo hijo que se calcula
	var $this=this.tree.nodos[NodoId];
	AnchoTemp = 0;
	var items = $this.tree.nodos;
	for (var indice in $this.childsId){
	if ($this.childsId[indice] == child.id){
		return $this.BasePosX+AnchoTemp;
		break;
		}
                if(typeof items[$this.childsId[indice]]=="undefined")
                    continue;
		AnchoTemp = AnchoTemp + items[$this.childsId[indice]].Ancho;
	}
	return $this.BasePosX+AnchoTemp;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
LayoutWilliam.prototype.Calcular_Ancho=function(Repos,NodoId){
	/*
	Función para re calcular el ancho de un nodo rectangular, si el nodo cambia su propio ancho realizara cambios en la posición de los nodos que estén a su derecha
	y también realizara cambios en el ancho de su nodo padre.
	@param, Repos[booleano] -> afectar a los nodos a la izquierda
	*/
	var $this=this.tree.nodos[NodoId];
	var EjecutarCambio = true;
	var AnchoLlegada =  $this.Ancho;				//guardar el ancho actual 
	$this.Ancho = $this.TextCajita.varAncho+20;	//tomar el nuevo ancho, del ancho de la caja de texto.
	AnchoTemp = 0;
	AltoTemp = 0;
	var items = $this.tree.nodos;
	for (var indice in $this.chilsDraw){			//Calcular el ancho vasandose en los hijos
		AnchoTemp = AnchoTemp + items[$this.chilsDraw[indice]].Ancho;
	}
	

	if ((AnchoTemp==0)||($this.Ancho>AnchoTemp)){
		EjecutarCambio = false;
	}
	if (AnchoLlegada != AnchoTemp)
	{
		EjecutarCambio = true;
		if ((AnchoTemp==0)||($this.Ancho>AnchoTemp)){
			AnchoTemp = $this.TextCajita.varAncho+20;		//el ancho del nodo sin tomar cuenta que es padre
		}
	}
	if (EjecutarCambio){
		$this.Ancho = AnchoTemp;
		$this.PosCajitaX = $this.BasePosX+($this.Ancho/2)-($this.AnchoCajita)/2;
		if ($this.id!=-1) {
			if( typeof items[$this.idp] != "undefined")
			items[$this.idp].tree.LayoutAlgoritm.Calcular_Ancho(Repos,$this.idp);				//Lanzar una actualización de ancho para el padre de esta tarea.
		}
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------