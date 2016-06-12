/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	svgFloatingMenu v 1.0 - a jQuery Ui extension
	Licences:GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Edgar Uria Martinez (Williamuriamartinez@hotmail.com).
*/
Components.svgFloatingMenu.prototype.init = function(dataObj){
	/** @param dataObj.pico tamaño de la flechita
	 * @param dataObj.offset espacio entre el target y el pico
	 * @param dataObj.orientacion si va arriba o hacia abajo
	 */
	 console.log(dataObj);
this.tipo = 'svgFloatingMenu';
	 this.config = {
	container: $('body'),
	id: "svgFloatingMenu"+ Math.round(Math.random() * 2000),
	offset:3,
	pico:6,
	orientacion:"derecha",
	// fontSize:13,
	color:"black",
	parentType:'',
	parentComponent:'',
	items: [],
	listeners: {
		show: function(){},
		hide: function(){}
	}
};
	
	for(var i in dataObj) {
        if(this.config[i] != undefined) {
            if((i == "listeners")) {
                for(var j in dataObj[i])
                    this.config[i][j] = dataObj[i][j];
            }
            else
                this.config[i] = dataObj[i];
        }
    }
	this.offset=this.config.offset;
	this.pico=this.config.pico;
	this.orientacion=this.config.orientacion;
	// this.fontSize=this.config.fontSize;
	this.color=this.config.color;
	this.svg=dataObj.svg;
	this.estilos='';
	this.items = this.config.items;
	this.itemsObjs = [];
	this.parentComponent = this.config.parentComponent;
	// this.target=dataObj.target;
	//createToolTip
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgFloatingMenu.prototype.create=function(){
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgFloatingMenu.prototype.draw=function(x,y){
	
	console.log('floatingdraw');
	var offset=this.offset;
	var pico=this.pico;
	// var fontSize=this.fontSize;
	var color=this.color;
	
	this.divContainer=$('<div id="'+this.config.id+'" class="svgFloatingMenu"></div>');
	switch(this.parentComponent.tipo){
		case 'GrafoPert':
		this.parentComponent.svgContend.append(this.divContainer)
		break;
		case 'WBSTree':
		this.parentComponent.svgContend.append(this.divContainer)
		break;
	}
	console.log(this.divContainer);
	//$(".svgFloatingMenu").css("left",x2);
	//$(".svgFloatingMenu").css("top",y2);
	$(".svgFloatingMenu").css("visibility",'visible');
	this.drawItems();
	this.ocultar();
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
* objectSelection esta funcion mostrara un menu flotante dependiendo a tipo de elemento 
**/
Components.svgFloatingMenu.prototype.objectSelection=function(object,event){
	//momento en que el menu se hace visible y se coloca al lado del componente
	console.log(this.divContainer[0]);
			this.divContainer.show();
			switch(object.tipo){
				case 'GrafoNodo':
				switch(this.orientacion){
					case 'derecha':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.BasePosX+object.AnchoShape/2+5);
						this.divContainer.css('top',object.BasePosY-y);
					break;
					case 'arriba':
						var x=this.divContainer[0].getBoundingClientRect().width/2;
						this.divContainer.css('left',object.BasePosX-x);
						this.divContainer.css('top',object.BasePosY-object.AnchoShape-10);
					break;
					case 'abajo':
						var x=this.divContainer[0].getBoundingClientRect().width/2;
						this.divContainer.css('left',object.BasePosX-x);
						this.divContainer.css('top',object.BasePosY+object.AnchoShape/2+5);
					break;
					case 'izquierda':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.BasePosX-object.AnchoShape-10);
						this.divContainer.css('top',object.BasePosY-y);
					break;
				}
				break;
				case 'GrafoEdge':
				switch(this.orientacion){
					case 'derecha':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.BasePosX+object.AnchoShape/2+5);
						this.divContainer.css('top',object.BasePosY-y);
					break;
					case 'arriba':
						var x=this.divContainer[0].getBoundingClientRect().width/2;
						this.divContainer.css('left',object.BasePosX-x);
						this.divContainer.css('top',object.BasePosY-object.AnchoShape-10);
					break;
					case 'abajo':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.NodoSalida.BasePosX-(object.NodoSalida.BasePosX-object.NodoLLegada.BasePosX)/2);
						this.divContainer.css('top',object.NodoSalida.BasePosY-(object.NodoSalida.BasePosY-object.NodoLLegada.BasePosY)/2);
					break
					case 'izquierda':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.BasePosX-object.AnchoShape-10);
						this.divContainer.css('top',object.BasePosY+y);
					break;
				}
				break;
				case 'NodoWBS':
				switch(this.orientacion){
					case 'derecha':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.PosCajitaX-25);
						this.divContainer.css('top',object.BasePosY+object.Alto/2-y);
					break;
					case 'arriba':
						var x=this.divContainer[0].getBoundingClientRect().width/2;
						this.divContainer.css('left',object.PosCajitaX+object.AnchoCajita/2-x);
						this.divContainer.css('top',object.BasePosY-object.Alto-5);
					break;
					case 'abajo':
						var x=this.divContainer[0].getBoundingClientRect().width/2;
						this.divContainer.css('left',object.PosCajitaX+object.AnchoCajita/2-x);
						this.divContainer.css('top',object.BasePosY+object.Alto+5);
					break;
					case 'izquierda':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.PosCajitaX+object.AnchoCajita+10);
						this.divContainer.css('top',object.BasePosY+object.Alto/2-y);
					break;
				}
				break;
				case 'GrafoEdge':
				switch(this.orientacion){
					case 'derecha':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.BasePosX+object.AnchoShape/2+5);
						this.divContainer.css('top',object.BasePosY-y);
					break;
					case 'arriba':
						var x=this.divContainer[0].getBoundingClientRect().width/2;
						this.divContainer.css('left',object.BasePosX-x);
						this.divContainer.css('top',object.BasePosY-object.AnchoShape-10);
					break;
					case 'abajo':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.NodoSalida.BasePosX-(object.NodoSalida.BasePosX-object.NodoLLegada.BasePosX)/2);
						this.divContainer.css('top',object.NodoSalida.BasePosY-(object.NodoSalida.BasePosY-object.NodoLLegada.BasePosY)/2);
					break
					case 'izquierda':
						this.divContainer.css('max-width','25px');
						var y=this.divContainer[0].getBoundingClientRect().height/2;
						this.divContainer.css('left',object.BasePosX-object.AnchoShape-10);
						this.divContainer.css('top',object.BasePosY-y);
					break;
				}
				break;
			}
	}


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgFloatingMenu.prototype.destroy=function(){
   Components.Component.prototype.destroy.call(this);
	$('.svgFloatingMenu').remove();
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgFloatingMenu.prototype.ocultar=function(){
  this.divContainer.hide(); 
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.svgFloatingMenu.prototype.drawItems = function() {
	console.log(this.items);
    for(var i in this.items) {
        this.drawItem(this.items[i]);
    }
}
//##############################################################################
Components.svgFloatingMenu.prototype.drawItem = function(item) {
    item.container = this.divContainer;
    item.parent = this;
	console.log(item);
    var newItem = Components.create(item.type, item);
    this.itemsObjs.push(newItem);
    //this.resizeBody();
    return newItem;
}



















