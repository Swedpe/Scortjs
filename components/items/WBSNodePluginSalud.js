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
Components.WBSNode.prototype.calcularSalud = function(){
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
		break;
	}
}	
}
if(this.salud){
	this.cambiarstroke('green');
}
else{
	this.cambiarstroke('red');
}
if(this.Padre!= -1){
	this.Padre.calcularSalud();
}
}
