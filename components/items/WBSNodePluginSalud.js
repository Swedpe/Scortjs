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
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.WBSNode.prototype.SumaColores = function(color1,color2){
	if(color2==0 || color1==0)
		return 0;
	if(color1==1)
		return color2;
	if(color2==1)
		return color1;
	if(color1 ==2 && color2==3 )
		return 2;
	if(color2 == 2&& color1==3 )
		return 2;
	if(color1==color2)
		return color1;
}
Components.WBSNode.prototype.calcularSalud = function(){
/*Activa un calculo para calculo de salud,
si salud es true, el nodo es azul
si salud es false, el nodo es rojo y contagia a toda la cadena a partir de el hasta el nodo padre total.
solo es aplicable a nodos sin hijos.
*//*
if (this.childsId.length>0){
this.salud = true;
for(hijo in this.childsId){
	if(this.tree.nodos[this.childsId[hijo]].salud==false){
		this.salud = false;
		break;
	}
}	
}*/

var salud=1;
if (this.childsId.length>0){
	for(hijo in this.childsId){
			salud=this.SumaColores(salud,this.tree.nodos[this.childsId[hijo]].salud);
		}
}	
else
	var salud = this.salud;


this.salud=salud;
switch(salud)
{
	case 0:
		this.cambiarstroke('red');
		break;
	case 1:
		this.cambiarstroke('green');
		break;
	case 2:
		this.cambiarstroke('yellow');
		break;
	case 3:
		this.cambiarstroke('blue');
		break;
};/*
if(this.salud){
	this.cambiarstroke('green');
}
else{
	this.cambiarstroke('red');
}*/
if(this.Padre.id!= -1){
	this.Padre.calcularSalud(salud);
}
}
