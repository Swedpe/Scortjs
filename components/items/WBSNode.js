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
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com], Fritz Velarde-Alvarez Aguilar (f.velardealvarez@gmail.com).
*/
Components.WBSNode.prototype.init = function(dataObj) {
	this.config = {	
		container: $('body'),
		id: "WBSNode-"+ Math.round(Math.random() * 2000),		//no deberia ser asignado un ip por este metodo aleatorio, de preferencia siempre envie los ids.
		idp:"",
		datos:{},
		Descripcion:"",
		PosCajitaX : 10,
		AnchoCajita : 100,
		// BasePosX : 0,				//posicion donde se comienza a dibujar
		BasePosY : 0,
		// Ancho : 120,				//Ancho de la tarea incluyendo el detalle de sus hijos
		Alto : 50,
		iSiblingSeparation : 40,	//numero de pixeles de separacion entre hermanos		agregar para descargar
		childs : new Array(),  		//Los hijos como objetos NO ESTA FUNCIONANDO CORRECTAMENTE
		childsId : new Array(),
		chilsDraw : new Array(),			//Los hijos que estan dibujados
		Visualizacion : "Normal",
		type:"WBSNode",
		SeleccionBox : "",			//caja que se creara cuando un nodo este seleccionado alrrededor de este.
		Seleccionado : false,
		Status : "Maximizado",
		visible: true,
		salud:true,
		TextCajita : 0,					//Aqui estara contenida la caja con su texto. que seran creadas con Draws
		tipoObjeto : 'Tarea',
		Background : '#FFFFFF',				//Color de fondo de cada nodo por defecto se usa el color blanco
		stroke : '#258E3A',
		Level:'',							//Level -1 xq sera el level del WBSPARENT
		bolita:false,						//cuando no se desea dibujar la cajita, ni div, ni q tenga texto, el texto estara en el tooltip
		screenGrid:'',			
		tree:'',							//el arbol del Wbs Objeto, padre de todos los nodos 
		viewFormat:'',
		viewToolTip:'',
		actividadesId: [],
		items:[],
		dibujarActividades : false,
		fakeChild: false,						//usado para los hijos fantasma
		Padre:'',
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
            if((i == "listeners")||(i=="items")||(i=="actividadesId")) {
                for(var j in dataObj[i]) 
                    this.config[i][j] = dataObj[i][j];                
            }
            else
                this.config[i] = dataObj[i];
        }
    }
		this.Cambio_B_a_C = false;						// se actiba cuando hay un cambio de bolita a cuadrado
		this.newChild = false; 							// Nuevo nodo hijo fuerza  hacer drawChildLineas          
		this.id=this.config.id;							//Id de nodo
		this.idp=this.config.idp;						//Id del Nodo Padre
		this.datos = this.config.datos;					//Texto que se mostrara en en nodo
		this.Descripcion = this.config.Descripcion;		//Texto que se mostrara en en nodo
		this.tree = this.config.tree;
		this.tipoObjeto = this.config.tipoObjeto;
		this.Padre=this.config.Padre;									//Nodo Padre
		if(this.tree.nodos[this.idp])
			this.Padre=this.tree.nodos[this.idp];		//pregunta en caso del copy y se crea d nuevo fake child
		//--------------------------------------------------------
		//asignando el Level deacuerdo al level del padre
		if(this.tipoObjeto!='WBSPARENT'){
			if(this.idp==-1){
				this.config.Level=1
				// this.tree.items[this.id].Level=1
				}
			else{
				this.config.Level=this.Padre.Level+1;
				// this.config.Level=this.tree.items[this.idp].Level+1;
				// if(this.tree.items[this.id])
					// this.tree.items[this.id].Level=this.config.Level;
				}
		}
		//--------------------------------------------------------
		this.Level = this.config.Level;					//Nivel en el arbol, el uno es el mas alto
		this.bolita = this.config.bolita;
		this.screenGrid = this.config.screenGrid;
		this.dibujado = false;
		this.salud=true;
		this.PosCajitaX = this.config.PosCajitaX;	
		this.AnchoCajita = this.config.AnchoCajita;
		// this.BasePosX = this.config.BasePosX;			//posicion donde se comienza a dibujar
		this.BasePosY = this.config.BasePosY;
		// this.Ancho = this.config.Ancho;					//Ancho de la tarea incluyendo el detalle de sus hijos
		this.Alto = this.config.Alto;
		this.type = this.config.type;
		this.childs = this.config.childs;  				//Los hijos como objetos Nodo
		this.chilsDraw = this.config.chilsDraw;			//Los hijos que están dibujados, solo los ids
		this.ChildLines = new Array();					//las lineas que enlazan con cada hijo
		this.ChildArrow = new Array();					//las puntas de las lineas que enlazan con cada nodo hijo
		this.Visualizacion = this.config.Visualizacion;
		this.SeleccionBox = this.config.SeleccionBox;
		this.Seleccionado = this.config.Seleccionado;
		this.Status = this.config.Status;
		this.visible = this.config.visible;
		this.TextCajita = this.config.TextCajita;		//Aqui estara contenida la caja con su texto. que seran creadas con Draw
		this.ControlBox ="";							//la caja inferior de cada nodo que controla el maximizado y el minimizado
		this.Background = this.config.Background;
		this.stroke = this.config.stroke;
		
		this.actividadesId = this.config.actividadesId;
		this.items = this.config.items;
		this.dibujarActividades = this.config.dibujarActividades;
		this.fakeChild=this.config.fakeChild;
		//parametros adicionales requeridos por el algoritmo ECO
		this.leftNeighbor = null;						//se usan con el algoritmo ECO
		this.rightNeighbor = null;						//se usan con el algoritmo ECO
		this.prelim = 0;
		this.modifier = 0;
		this.siblingIndex = 0;	
		this.childsId = this.config.childsId;		
		this.listeners = this.config.listeners;
		// calculamos el ancho de su cajita, o ancho de nodo en base a su texto.
		//this.aplicarTemplate();
		// if(Object.keys(this.items).length!=0)					//si tiene actividades
		if(this.actividadesId.length!=0 && this.childsId.length!=0)
			alert("El WBSnodo '"+this.id+"' del WBStree '"+this.tree.id+"' tiene actividades y nodos hijos a la vez")
		else if(this.dibujarActividades)					//si tiene actividades
			this.createFakeChild();
		// if(Object.keys(this.items).length!=0 && !this.dibujarActividades){
		if(this.actividadesId.length!=0 && !this.dibujarActividades){
			this.Status = "minimizado";
		}
		this.tree._setLevelHeight(this,this.Level)
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.create = function() {
    //console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al create generico de Components que agrega un div al contenedor

	return this ;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.createFakeChild = function(){
			var fake ={
					 type: 'WBSNode', 
					 id:"fake"+this.id,
					 idp:this.id,
					 Padre:this,
					 Descripcion:'HOLA',
					 container : this.tree.root,
					 screenGrid : this.tree.screenGrid,
					 fakeChild:true,
					 tree : this.tree,
					 tipoObjeto:'Tarea',
		};
			this.childsId.push(fake.id);
			var element = Components.create('WBSNode', fake);
			// this.tree.items[fake.id] = fake;
			this.tree.nodos[element.id] = element;
			this.childs[fake.id]=this.tree.nodos[element.id];
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.WBSNode.prototype.aplicarTemplate = function() {
	///incluido por para borrar calclos previos de div por el drawActividades
	// if(this.dibujado==true){
		// this.divTexto.remove();
		// delete this.divTexto;
	// }
	// console.log(this.id);
	
	
	if(this.tipoObjeto!='WBSPARENT'){
		if(!this.bolita){
			
		if(this.fakeChild){
		this.AnchoCajita=250;
		/**	EN CASO DE SER fakeChild, es decir, un hijo fantasma para que los nodos del nivel siguente se dibujen correctamente debajo de las actividades
		1) se crean las actividades del padre
		2) se calcula el alto de las actividades y se le asigna ese alto a la caja
		3) se remueve el div del "lienzo"
		4) se eleimina el div como atributo
		*/
			// this.Alto=50;
		// if(this.Padre.divActividades){
			// this.Alto=this.Padre.divActividades[0].offsetHeight-this.Padre.actividades[parseInt(Object.keys(this.Padre.actividades)[0])].distanciaNodo;  //parseInt(Object.keys(this.Padre.actividades)[0]) = primer elemento
			// this.Alto=this.Alto<0?0:this.Alto;
		// }else{
			this.Padre.calcActividades();
			this.Alto=this.Padre.divActividades[0].offsetHeight-this.Padre.actividades[parseInt(Object.keys(this.Padre.actividades)[0])].distanciaNodo;  //parseInt(Object.keys(this.Padre.actividades)[0]) = primer elemento
			this.Alto=this.Alto<0?0:this.Alto;
		// this.Padre.destroyActividades();
		// }
		// if(this.tree.Dibujado){
			// this.Alto=this.Alto-(this.tree.maxLevelHeight[this.Padre.Level]-this.Padre.Alto);
			// this.Alto=this.Alto<0?0:this.Alto;
		// }
	}else{
			if(!this.divTexto){
				// this.divTexto=$('<div id="testNodo'+ this.id+'" class="cajita_WBS_Node" ><p class="pNodoSvg" >'+texto+'</p></div>');
				this.divTexto=$('<div id="testNodo'+ this.id+'" class="cajita_WBS_Node" >'+eval(this.config.viewFormat)+'</div>');
				$('body').append(this.divTexto);
				// style="max-width:'+250+'px; font-size:'+11+'px; visibility:hidden;position: absolute;height: auto;width: auto; 
				// var test = document.getElementById("testNodo"+this.id);
				// this.tree.svgContend.append(test);
				// this.tree.svgContend.append(this.divTexto);
				$("#testNodo"+this.id).bind('click', {OBJ:this}, function(event) {
					event.data.OBJ.seleccionar();
				});
			}else{
				this.divTexto.show();
			}
			this.Alto = (this.divTexto[0].offsetHeight);
			var ancho = (this.divTexto[0].clientWidth);
			//this.Alto=(alto>this.Alto?alto:this.Alto);
			// this.AnchoCajita = (this.dibujarActividades?250:ancho);
			this.AnchoCajita = ancho;
			
			// this.AnchoCajita = (Object.keys(this.items)==false&&this.Status=='minimizado'?ancho:250);
			this.tree.svgContend.append(this.divTexto);		/// se hace append al final xq si todo es bolita y el svg es pequeño, se hacen mal los calculos
			
			if(this.tree.toolTipOBJ){
				this.setEvent1("#testNodo"+this.id);
			}
		}
		}else{
			this.Alto=0;
			this.AnchoCajita=0;
			this.config.iSiblingSeparation=10;
		}
	}
	
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.setEvent1 = function(argumento){	
	var texto = eval(this.config.viewToolTip);
			$(argumento).bind('mouseenter',{OBJ:this}, function(event) {
				thos=event.data.OBJ;
				switch(thos.tree.toolTipOBJ.orientacion){
				case 'derecha':
					var x=thos.PosCajitaX+thos.AnchoCajita;
					var y=thos.BasePosY+thos.Alto/2;
					break;
				case 'izquierda':
					var x=thos.PosCajitaX;
					var y=thos.BasePosY+thos.Alto/2;
					break;
				case 'abajo':
					var x=thos.PosCajitaX+thos.AnchoCajita/2;
					var y=thos.BasePosY+thos.Alto;
					break;
				case 'arriba':
					var x=thos.PosCajitaX+thos.AnchoCajita/2;
					var y=thos.BasePosY;
					break;
				}
				// var dataToolTip={texto: thos.id+" "+thos.Descripcion,x:x,y:y,color:thos.stroke};
				var dataToolTip={texto: texto,x:x,y:y,color:thos.stroke};
				thos.tree.toolTipOBJ.mouseenter(event,dataToolTip);
					
					///cuando el tree hace translate xq la posicion de un nodo lo puso en negativo
					var suma = parseFloat($('.svgToolTip').css('left').split('px')[0]) + event.data.OBJ.tree.treeOffSetX;
					$('.svgToolTip').css('left',suma+'px');
					$(event.data.OBJ.tree.svgcontainer.svg.grupo123).attr('transform','translate('+event.data.OBJ.tree.treeOffSetX+' '+0+')'); //buscar un translate solo de X para luego poder hacer un traslado independiente de Y
			});

			$(argumento).bind("mouseleave", {OBJ:this}, function(event) {
					//console.log('mouseleave');
					event.data.OBJ.tree.toolTipOBJ.mouseleave();
			});
}
Components.WBSNode.prototype.createTexCajita = function(){
if(this.TextCajita==0){		//TextCajita = 0 cuando es la primera pasada, 
			var propiedades = {
				'x':0,
				'y':0,
				// 'texto':this.texto,
				'id':this.id,
				'Padre':this,
				grupo:this.grupo,
				'tipoObjeto':this.tipoObjeto,
				'bolita':this.bolita,
				'Background':this.Background,
				'varAncho':this.AnchoCajita,
				'varAlto':this.Alto,
				'stroke':this.stroke,
				'EsUltimo':(this.EsUltimo == undefined)?true:false
			};			//la primera vez que se dibuja se crea el objeto textcajita
		this.TextCajita = new textCajita(this.screenGrid.svg,propiedades);	
}
}	
//------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.draw = function(){	
if(this.tree.nodos[this.idp].Status=='Maximizado' && this.visible && this.tree.nodos[this.idp].visible==true){
	if(this.tipoObjeto!='WBSPARENT'){
		if(this.newChild)
		{
			this.DrawChildLines();
			this.newChild=false;
		}
// Borrame luego-----------
		if(this.id=="fake16"){
		 		console.log("->"+this.BasePosY);
		 	}
//------------------------------		 	
		if(this.TextCajita.dibujado==false){		//TextCajita = 0 cuando es la primera pasada, 
			//this.createTexCajita();
			this.TextCajita.draw();						//dibujar la cajita o bolita
			this.DrawChildLines();
			//el div que va centrado en el area que ocupa una caja css
			$("#testNodo"+this.id).css("left",this.PosCajitaX);
			$("#testNodo"+this.id).css("top",this.BasePosY);
			//$("#testNodo"+this.id).css("width",this.AnchoCajita);
			//$("#testNodo"+this.id).css("height",this.Alto);
			$("#testNodo"+this.id).css("visibility",'visible');
			// $("#testNodo"+this.id).css("z-Index",9000);
			//---------------
			if(!this.bolita){						//si no es bolita
			// if(Object.keys(this.items).length!=0){
			if(this.actividadesId.length!=0){
					// if(this.dibujarActividades&&this.Status=="Maximizado"){
					if(this.dibujarActividades){
						this.calcActividades();
						this.drawActividades();
					}
					// if(!this.dibujarActividades){
						// this.destroyActividades();
					// }
				}
			}
				var propiedades ={
					'x':this.AnchoCajita/2,
					'y':this.Alto,
					'Padre':this,
					'id':this.id,
					 // grupo:((!this.tree.grupo)?'':$('#'+this.tree.grupo)),
					 grupo:this.grupo,
					// 'EsUltimo':(this.EsUltimo == undefined)?true:false				
					// 'esUltimo':(this.childsId.length==0||this.tree.nodos[this.childsId[0]].fakeChild)?true:false				
					'esUltimo':(this.childsId.length==0)?true:false				
				};
				
				if(this.bolita)
					propiedades['y']=propiedades['y']+5;
				
				if(this.tree.config.orientation=="left"){
					propiedades['x']=this.AnchoCajita+5;		//se suma 5 para cuadrar el boton expandir
					propiedades['y']=this.Alto/2-5;				//se resta 5 para cuadrar el boton expandir
					if(this.bolita)
						propiedades['x']=propiedades['x']+5;
				}
				// var items = this.tree.nodos;
				this.ControlBox= new ControlBox(this.screenGrid.svg,propiedades,this.tree.nodos);
				
			///traido del else xq al maximizar los nodos que tienen estatus minimizado desde un inicio tienen hijos con grupo, pero sin transform,translate	
				 // if ((this.TextCajita.posx==this.PosCajitaX)&&(this.TextCajita.posy==this.BasePosY)){
														// 1) no mover porque la caja esta en el mismo lugar calculado anteriormente
				// }else{
														// 1)mover la caja a la poscicion correcta.
				 if(this.tree.dibujado&&(this.TextCajita.posx!=this.PosCajitaX)&&(this.TextCajita.posy!=this.BasePosY)){
					this.TextCajita.Move({x:this.PosCajitaX,y:this.BasePosY});
					this.Padre.DrawChildLines();
				}
				if(this.tree.toolTipOBJ){
					this.setEvent1(this.TextCajita.Caja);
				} 
				// this.dibujado=true;
	}else{
		//si las coordenadas X y Y son iguales no hacer nada, en caso contrario mover la caja a el nuevo lugar que corresponda
		
		if ((this.TextCajita.posx==this.PosCajitaX)&&(this.TextCajita.posy==this.BasePosY)){
			//console.log("Entro y no arregla el texto "+ this.id);
			if(!this.bolita)
				this.TextCajita.Move({x:this.PosCajitaX,y:this.BasePosY});
		//1) no mover porque la caja esta en el mismo lugar calculado anteriormente
		}else{
		 //1)mover la caja a la poscicion correcta.
		 	
				this.TextCajita.Move({x:this.PosCajitaX,y:this.BasePosY});
		 		this.fixChildLineControlBox();
		}
		//la estructura de una flecha depende del atributo xDiff de la linea siempre y cuando el ancho de la caja no haya sido alterado
		if(this.childsId.length!=0 && this.Status=="minimizado")
		{
			this.fixChildLineControlBox();
		}
		 if(this.Padre.id!=-1){
			var xDif = parseInt($(this.Padre.ChildLines[this.id]).attr('xdiff'));
			var xDiff2 = parseInt(this.PosCajitaX-this.Padre.PosCajitaX);
			var yDif = parseInt($(this.Padre.ChildLines[this.id]).attr('ydiff'));
			var yDiff2 = parseInt(this.BasePosY-this.Padre.BasePosY);
			
			if(Math.abs(xDif)!=Math.abs(xDiff2)||Math.abs(yDif)!=Math.abs(yDiff2)){
				console.log('fixline'+this.id);
				this.fixChildLine();
			}
			else if(this.Cambio_B_a_C){
					this.Cambio_B_a_C=false;
					this.fixChildLine();
				}
		}
		
						
						/*if(this.id!=-1){
							var xDif = parseInt($(this.ChildLines[this.id]).attr('xdiff'));
							var yDif = parseInt($(this.ChildLines[this.id]).attr('ydiff'));
							for(var i in this.childsId){
								var xDiff2 = parseInt(this.tree.nodos[this.childsId[i]].PosCajitaX-this.PosCajitaX);
								var yDiff2 = parseInt(this.tree.nodos[this.childsId[i]].BasePosY-this.BasePosY);
								if(xDif!=xDiff2||yDif!=yDiff2){
									console.log('fixline');
									this.fixChildLine(this.tree.nodos[this.childsId[i]]);
								}
							}
						};*/
						
						
						
						//var xDiffNow = this.p
		//ahora para las actividades
		if(!this.bolita){						//si no es bolita
			$("#testNodo"+this.id).css("visibility",'visible');
			// if(Object.keys(this.items).length!=0){
			if(this.actividadesId.length!=0){
					// if(this.dibujarActividades&&this.Status=="Maximizado"){
					if(this.dibujarActividades){
						this.calcActividades();
						this.drawActividades();
					}
					// if(!this.dibujarActividades){
						// this.destroyActividades();
					// }
				}
		}
	}
	if(this.fakeChild){
		this.TextCajita.Caja.setAttribute("visibility", "hidden");
		return;
	}
    
		// if(this.tree.toolTipOBJ){
			// this.setEvent1(this.TextCajita.Caja);
		// }
	}
	}
	else{
		this.visible = false;
		}
}
//---------------------------------------------------------------------------------------------------------------------
/*Components.WBSNode.prototype.fixChildLine = function(nodoHijo){
	//ajustar los parametros de la linea cuando hay minimizacion o maximizacion
	//una childline esta definida por 4 puntos.
		var aumento=nodoHijo.bolita?15:10;
	if(this.tree.config.orientation=="top"){
		var point1 = [this.PosCajitaX -nodoHijo.PosCajitaX+ this.AnchoCajita/2, this.BasePosY-nodoHijo.BasePosY+this.Alto+aumento];
		var point2 = [this.PosCajitaX -nodoHijo.PosCajitaX+ this.AnchoCajita/2, -this.tree.config.iLevelSeparation/2];
		var point3 = [nodoHijo.AnchoCajita/2, -this.tree.config.iLevelSeparation/2];
		var point4 = [nodoHijo.AnchoCajita/2, -4];
		var cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
		$(this.ChildLines[nodoHijo.id]).attr('points',cord);
		var xdiff = this.PosCajitaX -nodoHijo.PosCajitaX;
		$(this.ChildLines[nodoHijo.id]).attr('xdiff',xdiff);
		var ydiff = this.BasePosY -nodoHijo.BasePosY;
		$(this.ChildLines[nodoHijo.id]).attr('ydiff',ydiff);
		//ahora se procede a analizar la punta de la flecha.
		if(nodoHijo.bolita){
			$(this.ChildArrow[nodoHijo.id]).attr('visibility','hidden');
		}else{
			$(this.ChildArrow[nodoHijo.id]).attr('visibility','visible');
			point1 = [nodoHijo.AnchoCajita/2, 0];
			point2 = [nodoHijo.AnchoCajita/2+5,-10];
			point3 = [nodoHijo.AnchoCajita/2-5,-10];
			point4 = [nodoHijo.AnchoCajita/2,0];
			cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
			// console.log(this.ChildArrow);
			$(this.ChildArrow[nodoHijo.id]).attr('points',cord);
		}
		//ahora se procede a analizar el controlBox.
		var posX;
		if(this.Status=="Maximizado")
			posX=-2.5;
		else
			posX=-4;
		if(this.bolita){
			this.ControlBox.Box.setAttribute('x',-5);
			this.ControlBox.Box.setAttribute('y',5);
			this.ControlBox.Simbolo.setAttribute('x',posX);
			this.ControlBox.Simbolo.setAttribute('y',13);
		}else{
			if(this.ControlBox){
			posX=posX+this.AnchoCajita/2;
			this.ControlBox.Box.setAttribute('x',this.AnchoCajita/2-5);
			this.ControlBox.Box.setAttribute('y',this.Alto);
			this.ControlBox.Simbolo.setAttribute('x',posX);
			this.ControlBox.Simbolo.setAttribute('y',this.Alto+8);
			}
		}
	}else if(this.tree.config.orientation=="left"){
		var point1 = [this.PosCajitaX -nodoHijo.PosCajitaX+ this.AnchoCajita+aumento, this.BasePosY-nodoHijo.BasePosY+this.Alto/2];
		var point2 = [-nodoHijo.tree.config.iLevelSeparation/2, this.BasePosY-nodoHijo.BasePosY+this.Alto/2];
		var point3 = [-nodoHijo.tree.config.iLevelSeparation/2, nodoHijo.Alto/2];
		var point4 = [-4, nodoHijo.Alto/2];
		var cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
		$(this.ChildLines[nodoHijo.id]).attr('points',cord);
		var xdiff = this.PosCajitaX -nodoHijo.PosCajitaX;
		$(this.ChildLines[nodoHijo.id]).attr('xdiff',xdiff);
		var ydiff = this.BasePosY -nodoHijo.BasePosY;
		$(this.ChildLines[nodoHijo.id]).attr('ydiff',ydiff);
		//ahora se procede a analizar la punta de la flecha.
		if(nodoHijo.bolita){
			$(this.ChildArrow[nodoHijo.id]).attr('visibility','hidden');
		}else{
			$(this.ChildArrow[nodoHijo.id]).attr('visibility','visible');
			point1 = [0, nodoHijo.Alto/2];
			point2 = [-10, nodoHijo.Alto/2+5];
			point3 = [-10,nodoHijo.Alto/2-5];
			point4 = [0, nodoHijo.Alto/2];
			cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
			// console.log(this.ChildArrow);
			$(this.ChildArrow[nodoHijo.id]).attr('points',cord);
		}
		//ahora se procede a analizar el controlBox.
		var posX;
		if(this.Status=="Maximizado")
			posX=-2.5;
		else
			posX=-4;
		if(this.bolita){
			this.ControlBox.Box.setAttribute('x',5);
			this.ControlBox.Box.setAttribute('y',-5);
			this.ControlBox.Simbolo.setAttribute('x',posX+10);
			this.ControlBox.Simbolo.setAttribute('y',13-10);
		}else{
			if(this.ControlBox){
			posX=posX+this.AnchoCajita+5;
			this.ControlBox.Box.setAttribute('x',this.AnchoCajita);
			this.ControlBox.Box.setAttribute('y',this.Alto/2-5);
			this.ControlBox.Simbolo.setAttribute('x',posX);
			this.ControlBox.Simbolo.setAttribute('y',this.Alto/2+3);
			}
		}
	}
}*/
//-----------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.fixChildLineControlBox = function()
{
	var posX;
	if(this.Status=="Maximizado")
		posX=-2.5;
	else
		posX=-4;

	if(this.tree.config.orientation=="top"){
		if(this.bolita){
			this.ControlBox.Box.setAttribute('x',-5);
			this.ControlBox.Box.setAttribute('y',5);
			this.ControlBox.Simbolo.setAttribute('x',posX);
			this.ControlBox.Simbolo.setAttribute('y',13);
		}else{
			if(this.ControlBox){
			posX=posX+this.AnchoCajita/2;
			this.ControlBox.Box.setAttribute('x',this.AnchoCajita/2-5);
			this.ControlBox.Box.setAttribute('y',this.Alto);
			this.ControlBox.Simbolo.setAttribute('x',posX);
			this.ControlBox.Simbolo.setAttribute('y',this.Alto+8);
			}
		}
	}
	else if(this.tree.config.orientation=="left"){
		if(this.bolita){
			this.ControlBox.Box.setAttribute('x',5);
			this.ControlBox.Box.setAttribute('y',-5);
			this.ControlBox.Simbolo.setAttribute('x',posX+10);
			this.ControlBox.Simbolo.setAttribute('y',13-10);
		}else{
			if(this.ControlBox){
			posX=posX+this.AnchoCajita+5;
			this.ControlBox.Box.setAttribute('x',this.AnchoCajita);
			this.ControlBox.Box.setAttribute('y',this.Alto/2-5);
			this.ControlBox.Simbolo.setAttribute('x',posX);
			this.ControlBox.Simbolo.setAttribute('y',this.Alto/2+3);
			}
		}
	}
}
//---------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.fixChildLine = function(){
	//ajustar los parametros de la linea cuando hay minimizacion o maximizacion
	//una childline esta definida por 4 puntos.
		var aumento=this.bolita?15:10;
		//console.log(this.id);
	if(this.tree.config.orientation=="top"){
		var point1 = [this.Padre.PosCajitaX -this.PosCajitaX+ this.Padre.AnchoCajita/2, this.Padre.BasePosY-this.BasePosY+this.Padre.Alto+aumento];
		var point2 = [this.Padre.PosCajitaX -this.PosCajitaX+ this.Padre.AnchoCajita/2, -this.tree.config.iLevelSeparation/2];
		var point3 = [this.AnchoCajita/2, -this.tree.config.iLevelSeparation/2];
		var point4 = [this.AnchoCajita/2, -4];
		var cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
		$(this.Padre.ChildLines[this.id]).attr('points',cord);
		var xdiff = this.Padre.PosCajitaX -this.PosCajitaX;
		$(this.Padre.ChildLines[this.id]).attr('xdiff',xdiff);
		var ydiff = this.Padre.BasePosY -this.BasePosY;
		$(this.Padre.ChildLines[this.id]).attr('ydiff',ydiff);
		//ahora se procede a analizar la punta de la flecha.
		if(this.bolita){
			$(this.Padre.ChildArrow[this.id]).attr('visibility','hidden');
		}else{
			$(this.Padre.ChildArrow[this.id]).attr('visibility','visible');
			point1 = [this.AnchoCajita/2, 0];
			point2 = [this.AnchoCajita/2+5,-10];
			point3 = [this.AnchoCajita/2-5,-10];
			point4 = [this.AnchoCajita/2,0];
			cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
			// console.log(this.Padre.ChildArrow);
			$(this.Padre.ChildArrow[this.id]).attr('points',cord);
		}
		this.Padre.fixChildLineControlBox();
		//ahora se procede a analizar el controlBox.
		/*var posX;
		if(this.Padre.Status=="Maximizado")
			posX=-2.5;
		else
			posX=-4;

		if(this.Padre.bolita){
			this.Padre.ControlBox.Box.setAttribute('x',-5);
			this.Padre.ControlBox.Box.setAttribute('y',5);
			this.Padre.ControlBox.Simbolo.setAttribute('x',posX);
			this.Padre.ControlBox.Simbolo.setAttribute('y',13);
		}else{
			if(this.Padre.ControlBox){
			posX=posX+this.Padre.AnchoCajita/2;
			this.Padre.ControlBox.Box.setAttribute('x',this.Padre.AnchoCajita/2-5);
			this.Padre.ControlBox.Box.setAttribute('y',this.Padre.Alto);
			this.Padre.ControlBox.Simbolo.setAttribute('x',posX);
			this.Padre.ControlBox.Simbolo.setAttribute('y',this.Padre.Alto+8);
			}
		}*/
	}else if(this.tree.config.orientation=="left"){
		var point1 = [this.Padre.PosCajitaX -this.PosCajitaX+ this.Padre.AnchoCajita+aumento, this.Padre.BasePosY-this.BasePosY+this.Padre.Alto/2];
		var point2 = [-this.tree.config.iLevelSeparation/2, this.Padre.BasePosY-this.BasePosY+this.Padre.Alto/2];
		var point3 = [-this.tree.config.iLevelSeparation/2, this.Alto/2];
		var point4 = [-4, this.Alto/2];
		var cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
		$(this.Padre.ChildLines[this.id]).attr('points',cord);
		var xdiff = this.Padre.PosCajitaX -this.PosCajitaX;
		$(this.Padre.ChildLines[this.id]).attr('xdiff',xdiff);
		var ydiff = this.Padre.BasePosY -this.BasePosY;
		$(this.Padre.ChildLines[this.id]).attr('ydiff',ydiff);
		//ahora se procede a analizar la punta de la flecha.
		if(this.bolita){
			$(this.Padre.ChildArrow[this.id]).attr('visibility','hidden');
		}else{
			$(this.Padre.ChildArrow[this.id]).attr('visibility','visible');
			point1 = [0, this.Alto/2];
			point2 = [-10, this.Alto/2+5];
			point3 = [-10,this.Alto/2-5];
			point4 = [0, this.Alto/2];
			cord = point1.join()+' '+point2.join()+' '+point3.join()+' '+point4.join();
			// console.log(this.Padre.ChildArrow);
			$(this.Padre.ChildArrow[this.id]).attr('points',cord);
		}
		this.Padre.fixChildLineControlBox();
		
		//ahora se procede a analizar el controlBox.
		/*var posX;
		if(this.Padre.Status=="Maximizado")
			posX=-2.5;
		else
			posX=-4;
		if(this.Padre.bolita){
			this.Padre.ControlBox.Box.setAttribute('x',5);
			this.Padre.ControlBox.Box.setAttribute('y',-5);
			this.Padre.ControlBox.Simbolo.setAttribute('x',posX+10);
			this.Padre.ControlBox.Simbolo.setAttribute('y',13-10);
		}else{
			if(this.Padre.ControlBox){
			posX=posX+this.Padre.AnchoCajita+5;
			this.Padre.ControlBox.Box.setAttribute('x',this.Padre.AnchoCajita);
			this.Padre.ControlBox.Box.setAttribute('y',this.Padre.Alto/2-5);
			this.Padre.ControlBox.Simbolo.setAttribute('x',posX);
			this.Padre.ControlBox.Simbolo.setAttribute('y',this.Padre.Alto/2+3);
			}
		}*/
	}
}
//---------------------------------------------------------------------------------------------------------------------
//Dibujo de las Lineas
Components.WBSNode.prototype.DrawChildLines = function(){
if(this.childsId.length!=0){
if(this.Status=='Maximizado'&&!this.tree.nodos[this.childsId[0]].fakeChild){
    // this.grupo= ((!this.tree.grupo)?'':$('#'+this.tree.grupo));
    //this.grupo= this.grupo;
    if(this.id==1009)
    	console.log("error");
	var MiCentroX = 0;
	var MiCentroY = 0;
	var HijoCentroX = 0;
	var HijoCentroY = 0;
	var aumento=this.bolita?15:10;
	if(this.tree.config.orientation=="top"){
		//el punto central de la parte inferior para el padre
		MiCentroY = this.Alto;
		var levelHeight = this.tree.maxLevelHeight[this.Level];
		//el punto central de la parte superior para el hijo
		//var g = this.screenGrid.svg.group({stroke: 'green'}); 
		// var items = this.tree.nodos;
		for (var indice in this.childsId){
			var xDiff = this.tree.nodos[this.childsId[indice]].PosCajitaX - this.PosCajitaX;
			var yDiff = this.tree.nodos[this.childsId[indice]].BasePosY - this.BasePosY;
					HijoCentroX = xDiff + this.tree.nodos[this.childsId[indice]].AnchoCajita/2;
					HijoCentroY = this.tree.nodos[this.childsId[indice]].BasePosY-this.BasePosY;
					if (typeof(this.ChildLines[this.childsId[indice]])=='undefined'){
						var point1 = [this.PosCajitaX -this.tree.nodos[this.childsId[indice]].PosCajitaX+ this.AnchoCajita/2, this.BasePosY-this.tree.nodos[this.childsId[indice]].BasePosY+this.Alto+aumento];
						var point2 = [this.PosCajitaX -this.tree.nodos[this.childsId[indice]].PosCajitaX+ this.AnchoCajita/2, -this.tree.config.iLevelSeparation/2];
						var point3 = [this.tree.nodos[this.childsId[indice]].AnchoCajita/2, -this.tree.config.iLevelSeparation/2];
						var point4 = [this.tree.nodos[this.childsId[indice]].AnchoCajita/2, -4];
						this.ChildLines[this.childsId[indice]] =this.screenGrid.svg.polyline(this.tree.nodos[this.childsId[indice]].grupo,[point1,point2,point3,point4],
						{'xdiff':xDiff,'ydiff':yDiff,fill: 'none', stroke: '#0000FF', strokeWidth: 1,class_: 'tarea'+this.id}); 
						if(!this.tree.nodos[this.childsId[indice]].bolita)
							this.ChildArrow[this.childsId[indice]] =this.screenGrid.svg.polygon(this.tree.nodos[this.childsId[indice]].grupo,[[this.tree.nodos[this.childsId[indice]].AnchoCajita/2,0],[this.tree.nodos[this.childsId[indice]].AnchoCajita/2+5,-10],[this.tree.nodos[this.childsId[indice]].AnchoCajita/2-5,-10],[this.tree.nodos[this.childsId[indice]].AnchoCajita/2,0]], 
							{fill: '#FF0000', stroke: '#0000FF', strokeWidth: 1,class_: 'tarea'+this.id}); 
					}
		}
	}else if(this.tree.config.orientation=="left"){
		//el punto central de la parte derecha para el padre
		MiCentroY = this.BasePosY + this.Alto/2; 
		var levelWidth = this.tree.maxLevelWidth[this.Level];
		// var items = this.tree.nodos;
		for (var indice in this.childsId){
			var xDiff = this.tree.nodos[this.childsId[indice]].PosCajitaX - this.PosCajitaX;
			var yDiff = this.tree.nodos[this.childsId[indice]].BasePosY - this.BasePosY;
				MicentroX = this.PosCajitaX + this.AnchoCajita;
					HijoCentroX = this.tree.nodos[this.childsId[indice]].PosCajitaX ;
					HijoCentroY = yDiff+this.tree.nodos[this.childsId[indice]].BasePosY+this.Alto/2;
					// if(this.id=="0")
					// var circulo=this.screenGrid.svg.circle(MicentroX,MiCentroY, 2, {fill: 'blue', stroke: 'red'});
					
					// var circulo=this.screenGrid.svg.circle(HijoCentroX,HijoCentroY, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5});
					// $(circulo).html('<title>Nombre:  '+this.childsId[indice]+'<title>');
					
					// var circulo2=this.screenGrid.svg.circle(this.PosCajitaX + this.AnchoCajita,MiCentroY-this.Alto/2, 5, {fill: 'red', stroke: 'blue', strokeWidth: 5});
					// $(circulo2).html('<title>Nombre:  '+this.id+'<title>');
					// (MicentroX+HijoCentroX)/2
					// var circulo=this.screenGrid.svg.circle((this.PosCajitaX+levelWidth+HijoCentroX)/2,HijoCentroY, 2, {fill: 'blue', stroke: 'red'});
					
					if (typeof(this.ChildLines[this.childsId[indice]])=='undefined'){	
						var point1 = [this.PosCajitaX -this.tree.nodos[this.childsId[indice]].PosCajitaX+ this.AnchoCajita+aumento, this.BasePosY-this.tree.nodos[this.childsId[indice]].BasePosY+this.Alto/2];
						var point2 = [-this.tree.config.iLevelSeparation/2, this.BasePosY-this.tree.nodos[this.childsId[indice]].BasePosY+this.Alto/2];
						var point3 = [-this.tree.config.iLevelSeparation/2, this.tree.nodos[this.childsId[indice]].Alto/2];
						var point4 = [-4, this.tree.nodos[this.childsId[indice]].Alto/2];
						this.ChildLines[this.childsId[indice]] =this.screenGrid.svg.polyline(this.tree.nodos[this.childsId[indice]].grupo,[point1,point2,point3,point4],
						{'xdiff':xDiff,'ydiff':yDiff,fill: 'none', stroke: '#0000FF', strokeWidth: 1,class_: 'tarea'+this.id}); 
						if(!this.tree.nodos[this.childsId[indice]].bolita)
							this.ChildArrow[this.childsId[indice]] =this.screenGrid.svg.polygon(this.tree.nodos[this.childsId[indice]].grupo,[[0,this.tree.nodos[this.childsId[indice]].Alto/2],[-10,this.tree.nodos[this.childsId[indice]].Alto/2+5],[-10,this.tree.nodos[this.childsId[indice]].Alto/2-5],[0,this.tree.nodos[this.childsId[indice]].Alto/2]], 
							{fill: '#FF0000', stroke: '#0000FF', strokeWidth: 1,class_: 'tarea'+this.id}); 
					}
					
			// this.tree.nodos[this.childsId[indice]].DrawChildLines();
		}
	}
	}
}	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.calcActividades = function(){

		// if(Object.keys(this.items).length!=0){
// if(!this.divActividades){		
	
	if(!this.divActividades){
		//entrando por primera vez.
		//this.grupoActividades = this.screenGrid.svg.group(this.tree.grupo,{id: 'grupoActividades '+this.id});
		this.actividades = [];
		this.divActividades = $('<div id="divActividades'+ this.id+'" class="divActividades" style="position: absolute; width: 250px; top:'+(this.BasePosY+this.Alto+20)+'px; left:'+(this.PosCajitaX+this.AnchoCajita/2-115)+'px"></div>');		///115=maxWidth(250)/2-10
			///+20 la distancia entre Nodo y actividades
			// this.screenGrid.svg.circle(10,(this.BasePosY+this.Alto+20), 2, {fill: 'blue', stroke: 'red'});
			
			// $('body').append(this.divActividades);
			this.tree.svgContend.append(this.divActividades);
			// for(var i in this.items) {
			for(var i in this.actividadesId) {
				// var item = this.tree.actividades[this.actividadesId[i]];
				var item = {};
				jQuery.extend(true,item,this.tree.actividades[this.actividadesId[i]]);
				if(item.type != 'WBSActividad')
					continue;
				item.container = this.tree.root;
				item.screenGrid = this.screenGrid;
				item.node = this;
				// if(parseInt(Object.keys(this.items)[0])!=this.items[i].id){		//si el id del elemento 0 this.items es igual a this.items[i].id
				if(this.actividadesId[0]!=item.id){
					item.hermanoAnterior = this.actividades[i-1];
				}
				var element = Components.create('WBSActividad', item);					// el create quiza deberia estar en otro lado
				// this.actividades[element.id.split('-')[1]] = element;
				this.actividades.push(element);
			}
			for(var indice in this.actividades){
				this.actividades[indice].calcActividad();
			}
	}else{
		//ya estaba dibujada antes, entonces solo relocalizar
		this.divActividades.css("top",this.BasePosY+this.Alto+20);
		this.divActividades.css("left",this.PosCajitaX+this.AnchoCajita/2-115);
		this.divActividades.show();
	}		
			
			if(this.tree.config.orientation=='left'){				// en el caso de orientacion left va al final porque necesita la suma de alturas de los divs de cada atividad
				this.divActividades.css("top",this.BasePosY+this.Alto/2-this.divActividades[0].clientHeight/2);
				this.divActividades.css("left",this.PosCajitaX+this.AnchoCajita+this.tree.config.iLevelSeparation);
				// for(var indice in this.actividades){
					// this.actividades[indice].drawLines();
				// }
			}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.drawActividades = function(){
			for(var indice in this.actividades){
				this.actividades[indice].grupo = this.grupo;
				this.actividades[indice].indice=indice;
				this.actividades[indice].calcActividad();			//aca se hace el ultimo calculo con datos finales
				this.actividades[indice].draw();
			}
		// }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.destroyActividades = function(){
	console.log('destroyactividades');
	// if(Object.keys(this.items).length!=0){
		if(this.divActividades){
			this.divActividades.remove();
			delete this.divActividades;
		}
		for(var indice in this.actividades){
			this.actividades[indice].ocultar();
		}
		this.actividades=[];
	// }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.ocultarActividades = function(){
		if(this.divActividades){
			this.divActividades.hide();
		}
		for(var indice in this.actividades){
			this.actividades[indice].ocultar();
		}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.agregarActividad = function(){
	if(this.childsId.length==0 || this.tree.nodos[this.childsId[0]].fakeChild){
		// console.log("se puede añadir actividades")
		// var idRecibido = Math.round(Math.random() * 2000);			//es un id recibido desde PHP
		// var idRecibido = this.actividades.length;					//es un id recibido desde PHP
		var idRecibido = this.tree.actividades.length;					//es un id recibido desde PHP
		nuevaActividad={	id:idRecibido,
					type: 'WBSActividad',
					"descripcion": "nada por ahora",
					"inicio":"fecha",
					"fin":"fecha",
					},
		// this.items[idRecibido]=nuevaActividad;
		this.tree.actividades[idRecibido]=nuevaActividad;
		this.actividadesId.push(idRecibido);
		this.dibujarActividades=true;
		if(this.childsId.length==0){
			this.createFakeChild();
			this.ControlBox.Box.setAttribute("fill", "#B2B2B2");
			this.ControlBox.Box.setAttribute("visibility", "visible");
			this.ControlBox.Simbolo.setAttribute("visibility", "visible");
			this.Status="Maximizado";
		}
		this.destroyActividades();
		this.tree.drawTree();
	}
	else
		console.log("El nodo ya tiene uno o mas nodos hijos")
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.expandirActividades = function(){
	console.log('maximizar actividades');
	// if(Object.keys(this.items).length!=0 && !this.bolita){
	if(this.actividadesId.length!=0 && !this.bolita){
		this.Status ="Maximizado";
		this.dibujarActividades=true;
		// this.divTexto.remove();
		// delete this.divTexto;
		// this.aplicarTemplate();
		this.childsId.length==0?this.createFakeChild():{};
	}
	for(var u in this.childsId){
		this.tree.nodos[this.childsId[u]].expandirActividades();
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.contraerActividades = function(){
	console.log('minimizar actividades');
	if(this.actividadesId.length!=0 && !this.bolita){
		this.Status ="minimizado";
		this.dibujarActividades=false;
		this.ocultarActividades();
		// this.divTexto.remove();
		// delete this.divTexto;
		// this.aplicarTemplate();
	}
	for(var u in this.childsId){
		this.tree.nodos[this.childsId[u]].contraerActividades();
	}
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// Components.WBSNode.prototype.showActividades = function(){
	// if(Object.keys(this.items)==false)
		// console.log("no hay actividades");
	// else{
		// for(var indice in this.actividades){
			// this.actividades[indice].show();
		// }
	// }
// }
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Components.WBSNode.prototype.hideActividades = function(){
	// if(Object.keys(this.items)==false)
		// console.log("no hay actividades");
	// else{
		// for(var indice in this.actividades){
			// this.actividades[indice].hide();
		// }
	// }
// }
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Components.WBSNode.prototype.forceMaxWidth = function(){
	
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.seleccionar = function(){
    // this.grupo= ((!this.tree.grupo)?'':$('#'+this.tree.grupo));
    // this.grupo= this.grupo;
	var wbstree = this.tree;
	if(wbstree.nodoSeleccionado==this){
		wbstree.nodoSeleccionado.desSeleccionar();
	}else{
		if (wbstree.nodoSeleccionado != -1)	
			wbstree.nodoSeleccionado.desSeleccionar();
		
		wbstree.nodoSeleccionado = this;
		// this.SeleccionBox =  this.screenGrid.svg.rect(this.grupo,-5, -5, this.TextCajita.varAncho+10, this.TextCajita.varAlto+10, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'tarea'+this.id });		
		if(!this.bolita)
			this.SeleccionBox =  this.screenGrid.svg.rect(this.grupo,-5, -5, this.AnchoCajita+10, this.Alto+10, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'tarea'+this.id });		
		else
			this.SeleccionBox =  this.screenGrid.svg.rect(this.grupo,-5, -5, +10, +10, 10, 10, {fill: "none", stroke: "red", strokeWidth: 2,class_: 'tarea'+this.id });		
		
		this.Seleccionado = true;
		this.listeners.select(this);
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.desSeleccionar = function(){
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
	if(this.actividadesId.length!= 0){
		alert("No se puede realizar este proceso, el nodo actual tiene actividades");
		return false;
	}
if(nodo==null){
		var nodo ={									
					 type: 'WBSNode', 
					 id:this.tree.nodos.length,
					 idp:this.id,
					 Descripcion:' Nueva Tarea WBS',
					 //viewFormat:this.tree.config.viewFormat,
					 container : this.tree.root,
					 screenGrid : this.tree.screenGrid,
					 tree : this.tree,
					 tipoObjeto:'Tarea',
		};
}else{
	nodo.container = this.tree.root;
	nodo.screenGrid = this.tree.screenGrid;
	nodo.tree = this.tree;
	nodo.tipoObjeto='Tarea';
}		
		if(!nodo.viewFormat)
			nodo["viewFormat"]=this.tree.config.viewFormat;
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
		element.aplicarTemplate();
		this.newChild=true;
		this.tree.drawTree();
		//this.DrawChildLines();
	return true;
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
if(nodo==null){
		var nodo ={									
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
}else{
	nodo.container = this.tree.root;
	nodo.screenGrid = this.tree.screenGrid;
	nodo.tree = this.tree;
	nodo.tipoObjeto='Tarea';
	childsId:[this.id];
}	
		this.tree.nodos[this.idp].newChild=true;
		this.Padre.ChildLines[this.id].remove();
		delete this.Padre.ChildLines[this.id];
		if(this.Padre.ChildArrow[this.id])
			this.Padre.ChildArrow[this.id].remove();
		delete this.Padre.ChildArrow[this.id];
		if(!nodo.viewFormat)
			nodo["viewFormat"]=this.tree.config.viewFormat;
		
		this.screenGrid.Maxid = nodo.id;
		// TareaTemp = this;
		Padre = this.tree.nodos[this.idp];
		pos = Padre.childsId.indexOf(this.id);
		//cambiando de padre
		this.idp= nodo.id;
		//haciendo que el hijo del ex padre sea el nuevo nodo
		Padre.childsId[pos]=nodo.id;
									
		var element = Components.create(nodo.type, nodo);
		this.Padre = element;
		this.tree.items[nodo.id] = nodo;
        this.tree.nodos[element.id] = element;
        element.aplicarTemplate();
		this.tree.drawTree();
		//this.Padre.Padre.DrawChildLines();
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
		if(!nodo.viewFormat)
			nodo["viewFormat"]=this.tree.config.viewFormat;
			
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
		this.tree.nodos[this.idp].newChild=true;
		element.aplicarTemplate();
		this.tree.drawTree();
		//this.Padre.DrawChildLines();
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
				this.tree.drawTree();
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
	if(this.Descripcion == NewText){
	}else{
		this.Descripcion = NewText;
		this.divTexto.remove();
		delete this.divTexto;
		// if(this.tree.algorithm=='ecotree')
			this.aplicarTemplate();
		// else{
		// this.TextCajita.ChangeText(NewText);
		// this.AnchoCajita = this.TextCajita.varAncho;
		// }
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.calcularSalud = function(NewText){
/*Activa un calculo para calculo de salud,
si salud es true, el nodo es azul
si salud es false, el nodo es rojo y contagia a toda la cadena a partir de el hasta el nodo padre total.
solo es aplicable a nodos sin hijos.
*/
if (this.childsId.length>0){
this.salud = true;
for(hijo in this.childsId){
	if(this.tree.nodos[this.childsId[hijo]].salud==false){
		this.salud = false;
	}
}

}
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
Components.WBSNode.prototype.seleccionarCopy = function(/*Recursivo*/){
	//efecto gráfico para indicar la selección para copia
	if(!this.fakeChild)
		this.TextCajita.Caja.setAttribute('stroke','#a8ff00');
	//y ahora hacer lo mismo con los hijos
	// if(Recursivo==1){
		for (var indice in this.childsId){
            if(typeof this.tree.nodos[this.childsId[indice]]=="undefined")
				continue;
			this.tree.nodos[this.childsId[indice]].seleccionarCopy(/*Recursivo*/);
		}
	// }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.seleccionarCut = function(/*Recursivo*/){
    //cambia de color la tarea y las tareas hijas para proceder a operaciones de clipboard
    //si Recursivo == 1 se procede a realizar el pintado en las tareas hijas y las hijas de las hijas.
	///////no veia razon para q exista Recursivo
	if(!this.fakeChild)
		this.TextCajita.Caja.setAttribute('stroke','#e3f5d0');
	//y ahora hacer lo mismo con los hijos
	// if(Recursivo==1){
		for (var indice in this.childsId){
            if(typeof this.tree.nodos[this.childsId[indice]]=="undefined")
				continue;
			this.tree.nodos[this.childsId[indice]].seleccionarCut(/*Recursivo*/);
		}
	// }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.desSeleccionarClipBoard = function(/*Recursivo*/){
	//efecto gráfico para indicar la selección para copia
	if(!this.fakeChild)
		this.TextCajita.Caja.setAttribute('stroke',this.stroke);
	//y ahora hacer lo mismo con los hijos
	// if(Recursivo==1){
		for (var indice in this.childsId){
            if(typeof this.tree.nodos[this.childsId[indice]]=="undefined")
				continue;
			this.tree.nodos[this.childsId[indice]].desSeleccionarClipBoard(/*Recursivo*/);
		}
	// }
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.createCopyTask = function(Padre){
	console.log("createCopyTask");
	console.log(Padre)
	if(Padre.childsId.length==0)
	{
		Padre.ControlBox.Box.setAttribute("visibility", "visible");
		Padre.ControlBox.Simbolo.setAttribute("visibility", "visible");	
	}
	Padre.newChild=true;
	
	var newNodeData ={};								
	jQuery.extend(true,newNodeData,this.tree.items[this.id]);
	newNodeData.childsId=[];
	jQuery.extend(true,newNodeData.childsId,this.tree.nodos[this.id].childsId);
	//newNodeData.childsId=this.tree.nodos[this.id].childsId;	
	newNodeData.id=this.tree.nodos.length;
	newNodeData.Descripcion='Copia '+this.Descripcion;	
	newNodeData.idp= Padre.id;
	// newNodeData.Padre= Padre;
	this.tree.screenGrid.Maxid = newNodeData.id;
	var CopyTask = Components.create(newNodeData.type, newNodeData);
	this.tree.items[newNodeData.id] = newNodeData;
    this.tree.nodos[CopyTask.id] = CopyTask;
	CopyTask.aplicarTemplate();
	for(var indice in newNodeData.childsId)
	{
		if(this.tree.nodos[newNodeData.childsId[indice]] != undefined){
			var TempCopyTask = this.tree.nodos[newNodeData.childsId[indice]].createCopyTask(CopyTask);
			CopyTask.childsId[indice]= TempCopyTask.id;
			CopyTask.childs[TempCopyTask.id]=TempCopyTask; 			
		}
	}
	this.listeners.oncreateCopyTask(CopyTask);
	
	return CopyTask;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.bolizando = function(){
	//postorden
	for (var indice in this.childsId){
			this.tree.nodos[this.childsId[indice]].bolizando();
	}
	// if (!this.bolita && !this.fakeChild){
	if (!this.bolita){
		// console.log("bolizando: "+this.id);
		this.config.iSiblingSeparation=10;
		this.divTexto?this.divTexto.hide():{};
		this.bolita=true;
		this.aplicarTemplate();
		if(this.TextCajita!=0){
			this.TextCajita.changeShape('bolita');
			this.Cambio_B_a_C=true;
		}
		//this.TextCajita.Caja.remove();
		//this.TextCajita.Caja=this.TextCajita.svg.circle(this.TextCajita.grupo,this.TextCajita.posx, this.TextCajita.posy, 3,  {fill: this.stroke, stroke: this.stroke, strokeWidth: 3,class_: 'tarea'+this.id });
		
		// if(Object.keys(this.items).length!=0){
		if(this.actividadesId.length!=0){
			this.ControlBox.Box.setAttribute("visibility", "hidden");
			this.ControlBox.Simbolo.setAttribute("visibility", "hidden");	
			this.Status = "minimizado";
			this.dibujarActividades = false;
			this.ocultarActividades();
		}
		// this.aplicarTemplate();
	}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.cuadrando = function(){
	for (var indice in this.childsId){
			this.tree.nodos[this.childsId[indice]].cuadrando();
	}
	if (this.bolita && this.visible){
		console.log("cuadrando: "+this.id);
		this.config.iSiblingSeparation=40;
		this.bolita=false;
		//this.Alto =50;
		if(!this.fakeChild)				//porque aca se crean las actividades del padre de nuevo
			this.aplicarTemplate();
		if(this.TextCajita!=0){
			this.TextCajita.changeShape('cuadrado');
			this.Cambio_B_a_C=true;
		}
		if(this.actividadesId.length!=0){
			this.ControlBox.Box.setAttribute("visibility", "visible");
			this.ControlBox.Simbolo.setAttribute("visibility", "visible");	
		}
		// this.tree.calcTree();
		// this.tree.drawTree();
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.ChangeStatus = function(){
	var items = this.tree.nodos;
	var seleccionada = this.tree.nodoSeleccionado;
	if (this.Status!="minimizado"){
		this.Minimize();
		if (seleccionada != -1)		{
			items[seleccionada.id].desSeleccionar();
		}
	}else
		this.Maximize();
	this.tree.drawTree();
	
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.hideNodo = function(){
	if(this.visible){
		this.visible=false;
		if(this.TextCajita!=0)
			this.TextCajita.Caja.setAttribute("visibility",'hidden');
		// this.grupo.setAttribute("visibility", "hidden");		
		this.grupo.setAttribute("display", "none");		
		if(this.divTexto){
			this.divTexto.css("visibility","hidden");
		}
		if(this.fakeChild){
			this.Padre.ocultarActividades();
			this.Padre.dibujarActividades=false;
			this.Padre.Status='minimizado';
		}
		for (var indice in this.childsId){
			this.tree.nodos[this.childsId[indice]].hideNodo();
		}
	 }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.showNodo = function(){
		this.visible=true;
		if(typeof(this.grupo)!='undefined'){
			if(this.TextCajita!=0)
			{
				if(typeof(this.TextCajita.Caja)=="undefined")
				{
					this.draw();						//dibujar la cajita o bolita
					this.Padre.DrawChildLines();
				}
				this.TextCajita.Caja.setAttribute("visibility",'visible');
			}
			// this.grupo.setAttribute("visibility", "visible");		
			this.grupo.setAttribute("display", "block");		
		}
		
		if(typeof(this.divTexto)!='undefined'){
			this.divTexto.css("visibility","visible");
		}
		if(this.Status=="Maximizado"){			
			for (var indice in this.childsId){
				this.tree.nodos[this.childsId[indice]].showNodo();
			}
		}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.Minimize = function(){
	if (this.Status!="minimizado"){
		this.Status = "minimizado";
		
		$(this.ControlBox.Simbolo).text("+");
		// this.ControlBox.Simbolo.setAttribute("x",this.AnchoCajita/2-4);
		//ocultar las lineas que conecta a los childs
		var lineC = 0;
		for (var indice in this.childsId){
			//ocultando div
			// Components.getComponentById("Okno").nodos[3].divTexto.css("visibility","hidden")
			//if(this.tree.nodos[this.childsId[indice]].divTexto)
				// this.tree.nodos[this.childsId[indice]].divTexto.css("visibility","hidden");
			//ocultar caja
			this.tree.nodos[this.childsId[indice]].hideNodo();
			//recursivo
			//this.tree.nodos[this.childsId[indice]].Minimize();
			
		}
		this.listeners.minimize(this);
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.Maximize = function(){
	console.log('maximize');
	if (this.Status=="minimizado"){
		this.Status = "Maximizado";
		
		$(this.ControlBox.Simbolo).text("-");
		// this.ControlBox.Simbolo.setAttribute("x",this.AnchoCajita/2-2.5);
		
		this.listeners.maximize(this);
		//hacemos visibles las lineas hacia los childs
		//mostramos los nodos
		for (var indice in this.childsId){
			this.tree.nodos[this.childsId[indice]].showNodo();
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
Components.WBSNode.prototype.show = function() {
    console.log("do nothing");//funcion vacia necesaria xk si no existe  llama al show generico de Components que muestra un div al contenedor
      return this;
	}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.removeGraphics = function(){
	/*Pasos: 0)Destruir sus hijos 
	1)destruir su text cajita  
	2)destruir los textos  
	3)destruir la cajita de control 
	4)Destruir la linea de Union 
	5)destruir la punta de la flecha 
	6)Calcular de nuevo la posicion de sus padres*/
	//Paso 0:
	//console.log(this.id)
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
	/**borra la linea y la flecha q tiene el padre hacia el nodo
		aun falta ver si hay resultados adversos
		*/
	if(this!=-1){
		var padre=this.tree.nodos[this.idp];
		var idx = padre.childsId.indexOf(this.id);
		this.screenGrid.svg.remove(padre.ChildLines[idx]);
		this.screenGrid.svg.remove(padre.ChildArrow[idx]);
		delete padre.chilsDraw[idx];
		delete padre.ChildLines[idx];
		delete padre.ChildArrow[idx];
	}
	this.dibujado=false;
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.LimpiarCalculosPrevios = function()
{
	// this.destroyActividades();
	this.prelim = 0;
	this.modifier = 0;
	this.PosCajitaX = 10;		
	// this.BasePosX = 0;	
	this.BasePosY = 0;
	this.leftNeighbor = null;						//se usan con el algoritmo ECO
	this.rightNeighbor = null;	
	this.siblingIndex = 0;
}

//