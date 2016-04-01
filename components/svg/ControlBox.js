var ControlBox = function(svg,Propiedad,nodos){
this.grupo= Propiedad.grupo;//$('#tareasgroupsvg')
this.BasePosX = Propiedad.x;
this.BasePosY = Propiedad.y;
this.Status = Propiedad.status;
this.Padre = Propiedad.Padre;
// thisttex.svg = svg;
// this.Box = svg.polygon(this.grupo, [[this.BasePosX-5,this.BasePosY],[this.BasePosX+5,this.BasePosY],[this.BasePosX+5,this.BasePosY+10],[this.BasePosX-5,this.BasePosY+10],[this.BasePosX-5,this.BasePosY]], {fill: 'white', stroke: 'blue', strokeWidth: 1,class_: 'tarea'+Propiedad.id}); 
this.Box = svg.rect(this.grupo,this.BasePosX-5, this.BasePosY,10, 10, {fill: "white", stroke: "blue", strokeWidth: 1,class_: 'tarea'+Propiedad.id });

if (Propiedad.Padre.Status == "Maximizado"){
	this.Simbolo = svg.text(this.grupo,this.BasePosX-2.5, this.BasePosY+8, "-",{fontFamily: "Verdana", fontSize: "10", fill: "blue", style: "cursor:pointer" } );
}
else
{
	this.Simbolo = svg.text(this.grupo,this.BasePosX-4, this.BasePosY+8, "+",{fontFamily: "Verdana", fontSize: "10", fill: "blue", style: "cursor:pointer" } );
}
this.esUltimo=Propiedad.esUltimo;
$(this.Simbolo).bind('click', {Padre:this.Padre}, function(event){
	// event.data.Padre.ChangeStatus();
	// if(Object.keys(event.data.Padre.items)==false){
		// event.data.Padre.ChangeStatus();
	// }else{
	// if(Object.keys(event.data.Padre.items).length!=0){
	if(event.data.Padre.actividadesId.length!=0){
		event.data.Padre.dibujarActividades=!event.data.Padre.dibujarActividades;
		// if(Object.keys(event.data.Padre.items).length!=0 && event.data.Padre.childsId.length==0 && event.data.Padre.dibujarActividades){
		if(event.data.Padre.actividadesId.length!=0 && event.data.Padre.childsId.length==0 && event.data.Padre.dibujarActividades){
			event.data.Padre.createFakeChild();
		}
		if(!event.data.Padre.dibujarActividades)				//para ser recursivo deberia ir en ChangeStatus o siguientes funciones
			event.data.Padre.ocultarActividades();
		// event.data.Padre.divTexto.remove();
		// delete event.data.Padre.divTexto;
		// event.data.Padre.calculaNodoEco();							//solo se llama a esta funcion para cambiarle el ancho
		// event.data.Padre.AnchoCajita=250							//al existir fakechild no es necesario cambiar el AnchoCajita para dar espacio a las actividades
		
		// event.data.Padre.tree.drawTree();
	}
	event.data.Padre.ChangeStatus();			//ChangeStatus llama al drawTree()
	});
       	
        //si la tarea es un contenedor de actividades se pinta de diferente color el simbolo de maximizar en el diagrama.    
        // if(nodos[Propiedad.id].childsId.length == contador){
		// if(Object.keys(this.Padre.items).length!=0){
		if(this.Padre.actividadesId.length!=0){
			this.Box.setAttribute("fill", "#B2B2B2");
			if(this.Padre.bolita){
				this.Box.setAttribute("visibility", "hidden");
				this.Simbolo.setAttribute("visibility", "hidden");
			}
		}

     //si la tarea no tiene hijos no se muestra el simbolo de maximizar  
     //aca entran tanto los nodos normales sin hijos como los fakenodes
     // if(this.esUltimo && Object.keys(nodos[Propiedad.id].items).length==0){
     if(this.esUltimo && this.Padre.actividadesId.length==0){
            this.Box.setAttribute("visibility", "hidden");
            this.Simbolo.setAttribute("visibility", "hidden");
			nodos[Propiedad.id].Status ="minimizado";
        }      
	
}
// ControlBox.prototype.setSimbolo=function(){
	// if (this.Padre.Status == "Maximizado"){
		// this.Simbolo = this.svg.text(this.grupo,this.BasePosX-2.5, this.BasePosY+8, "-",{fontFamily: "Verdana", fontSize: "10", fill: "blue", style: "cursor:pointer" } );
	// }
	// else
	// {
		// this.Simbolo = this.svg.text(this.grupo,this.BasePosX-4, this.BasePosY+8, "+",{fontFamily: "Verdana", fontSize: "10", fill: "blue", style: "cursor:pointer" } );
	// }
// }