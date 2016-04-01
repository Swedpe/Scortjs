var textCajita=function(svg,propiedad){
		this.svg = svg;
		this.dibujado = false;
		this.varTextInicial=unescapeHTML(propiedad['texto']);
		//this.Textprocesor = new TextProcesor(this.varTextInicial,false);
		//this.TextprocesorMini = "";
		this.posx=propiedad.x;
		this.posy=propiedad.y;
		this.Background=propiedad.Background;
		this.id = propiedad.id;
		this.Padre = propiedad.Padre;
		this.tipoObjeto = propiedad.tipoObjeto;
		this.varAncho = propiedad.varAncho;
		this.bolita = propiedad.bolita;
		//el ancho de la caja es calculado por <div> y html Basado en el texto, y posteriormente es usado para el resto de calculos, por WBSNode
		//this.varAncho=this.Textprocesor.MaxLetrasResult*7;
		// this.varAlto=50;
		this.varAlto = propiedad.varAlto;
		this.distanciaLineaY=100;
		//this.ArrayTextos = new Array();        
		//this.ArrayTextosMini = new Array();
		this.grupo= propiedad.grupo;//$('#tareasgroupsvg')
		this.stroke=propiedad.stroke;
		var varTexInicialTemporal=this.varTextInicial;
	return this;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
textCajita.prototype.draw=function(desp){
//dibujar la caja
// console.log('dibujar caja');
if(!this.bolita)
	this.Caja=this.svg.rect(this.grupo,this.posx, this.posy, this.varAncho, this.varAlto, 0, 0, {fill: this.Background, stroke: this.stroke, strokeWidth: 3,class_: 'tarea'+this.id });
else{
	this.Caja=this.svg.circle(this.grupo,0, 0, 3,  {fill: this.stroke, stroke: this.stroke, strokeWidth: 3,class_: 'tarea'+this.id });
	}	
var arrayTexto = new Array();
//dibujar las cadenas de texto.	
	this.setEventSelec(this.Caja);
	 // $(this.Caja).bind('click', {Padre:this.Padre}, function(event) {
		// event.data.Padre.seleccionar();
	// });
this.dibujado = true;	
	return this;
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
textCajita.prototype.setEventSelec=function(argumento){
	$(argumento).bind('click', {Padre:this.Padre}, function(event) {
			event.data.Padre.seleccionar();
		});
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------
textCajita.prototype.Move=function(desp){
	if((desp.x!=-1)||(desp.y!=-1)){
		if (this.Padre.divTexto){
			console.log("mover mover");
			this.Padre.divTexto.css("left",desp.x);
			this.Padre.divTexto.css("top",desp.y);
		}
		//mover la caja a la poscicion correcta
		$(this.grupo).attr('transform','translate('+desp.x+','+desp.y+')');
		this.posx = desp.x;	
		this.posy = desp.y;
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// textCajita.prototype.ChangeText=function(NewText){
	//primero destruir los antiguos objetos SVG 
// this.grupo= $('#tareasgroupsvg');
	//Aqui falta el codigo que modifica las cajas de texto flotantes que muestran el contenido de las cajas
// this.ChangeAncho(Ancho);
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// textCajita.prototype.ChangeAncho=function(NewAncho){
	//al cambiar el tamaño de el texto cambia el tamaño de la caja, al cambiar el tamaño de la caja, cambia su ancho, al cambiar su ancho se requiere re calcular la posición de 
	//prácticamente todo el árbol.
// this.varAncho=this.Textprocesor.MaxLetrasResult*7;
// this.Caja.setAttribute('width',this.varAncho);//[this.posx, this.posy, this.varAncho, this.varAlto, 10, 10])
// }
textCajita.prototype.changeShape=function(shape){
	var temp;
	switch(shape){
	case 'bolita':
		if(this.tempCaja==undefined){
			this.tempCaja=this.svg.circle(this.grupo,0, 0, 3,  {fill: this.stroke, stroke: this.stroke, strokeWidth: 3,class_: 'tarea'+this.id });
			// console.log('circle X:'+this.posx);
			this.setEventSelec(this.tempCaja);
			this.Padre.setEvent1(this.tempCaja);
		}
		break;
	case 'cuadrado':
		this.varAncho=this.Padre.AnchoCajita;
		this.varAlto=this.Padre.Alto;
		if(this.tempCaja==undefined){
			this.tempCaja=this.svg.rect(this.grupo,0, 0, this.varAncho, this.varAlto, 0, 0, {fill: this.Background, stroke: this.stroke, strokeWidth: 3,class_: 'tarea'+this.id });
			this.setEventSelec(this.tempCaja);
			this.Padre.setEvent1(this.tempCaja);
				if(this.Padre.childsId.length!=0&&!this.Padre.tree.nodos[this.Padre.childsId[0]].fakeChild){
					// console.log("hola");
					for (var indice in this.Padre.childsId){
						this.Padre.ChildArrow[this.Padre.childsId[indice]] =this.Padre.screenGrid.svg.polygon(this.Padre.tree.nodos[this.Padre.childsId[indice]].grupo,[[this.Padre.tree.nodos[this.Padre.childsId[indice]].AnchoCajita/2,0],[this.Padre.tree.nodos[this.Padre.childsId[indice]].AnchoCajita/2+5,-10],[this.Padre.tree.nodos[this.Padre.childsId[indice]].AnchoCajita/2-5,-10],[this.Padre.tree.nodos[this.Padre.childsId[indice]].AnchoCajita/2,0]], 
						{fill: '#FF0000', stroke: '#0000FF', strokeWidth: 1,class_: 'tarea'+this.Padre.id}); 
					}
				}
		}
		break;
	}
	temp=this.tempCaja;
		this.tempCaja=this.Caja;
		this.Caja=temp;
		// $(this.tempCaja).css("visibility",'hidden');
		// $(this.Caja).css("visibility",'visible');
		this.tempCaja.setAttribute("visibility",'hidden');
		if(this.Padre.fakeChild || !this.Padre.visible)
			this.Caja.setAttribute("visibility",'hidden');
		else
			this.Caja.setAttribute("visibility",'visible');
}











