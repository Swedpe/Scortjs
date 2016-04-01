/**		
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	GridExport v 1.0 - a jQuery Ui extension, plugin para gridcontainer
	Licences: GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
	* Se uso Codigo de Giri Raj https://www.facebook.com/giri.raj.1656(INDIA)
	* requiere de jquery.base64.js
*/
//exportación de datos de una tabla a formatos XML, XLS y PDF
Components.gridExport.prototype.init = function(dataObj) {
	if(dataObj.state){this.state = dataObj.state}; 
	this.config = {	
		separator: ',',
		ignoreColumn: [],
		tableName:'yourTableName',
		type:'csv',
		pdfFontSize:14,
		pdfLeftMargin:20,
		escape:'true',
		htmlContent:'false',
		consoleLog:'false'
        id: "gridExport-"+ Math.round(Math.random() * 2000),              
		parent:'',
		itemSeleccionado:false,
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }  
    this.parent = this.config.parent;				//normalmente sera un componente gridcontainer aunque en casos especiales podría ser otro
	this.id = this.config.id;
	this.e1 = '';
	this.e2 = '';
	return this;
}
Components.gridExport.prototype.create = function() {
	/* obtener las 2 tablas */
	this.e1=this.parent.tablehead;
	this.e2=this.parentrowTitle;
	return this;
}
//######################################################################################################################################################################################################
Components.gridExport.prototype.GenerateSQL = function(e1,e2) {	
/*e1 tabla de header.
  e2 tabla de datos*/					  
					var tdData ="INSERT INTO `"+this.config.tableName+"` (";
					$(el).find('thead').find('tr').each(function() {
					
						$(this).filter(':visible').find('th').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(this.config.ignoreColumn.indexOf(index) == -1){
									tdData += '`' + parseString($(this)) + '`,' ;									
								}
							}
							
						});
						tdData = $.trim(tdData);
						tdData = $.trim(tdData).substring(0, tdData.length -1);
					});
					tdData += ") VALUES ";
					// Row vs Column
					$(e2).find('tbody').find('tr').each(function() {
					tdData += "(";
						$(this).filter(':visible').find('td').each(function(index,data) {
							if ($(this).css('display') != 'none'){
								if(this.config.ignoreColumn.indexOf(index) == -1){
									tdData += '"'+ parseString($(this)) + '",';
								}
							}
						});
						
						tdData = $.trim(tdData).substring(0, tdData.length -1);
						tdData += "),";
					});
					tdData = $.trim(tdData).substring(0, tdData.length -1);
					tdData += ";";
					
					//output
					//console.log(tdData);
					
					if(this.config.consoleLog == 'true'){
						console.log(tdData);
					}
					console.log(tdData);
					var base64data = "base64," + $.base64.encode(tdData);
					window.open('data:application/sql;filename=exportData;' + base64data);
}
//######################################################################################################################################################################################################
//########################################################################################################################################################################################################
//##############################################################################

