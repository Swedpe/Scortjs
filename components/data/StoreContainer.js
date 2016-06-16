/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	WindowContainer v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.StoreContainer.prototype.init = function(dataObj) {
    this.config = {
		dataLocation:'local',										//dataLocation [remote, local, Xml]
        container: $('body'),
        fields: [],
        proxy: [],
        pageSize: -1,
        id: "storecontainer-"+ Math.round(Math.random() * 2000),
        data: [],
		currentpage:1
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined)
            this.config[i] = dataObj[i];
    }
    this.dataLocation = this.config.dataLocation;
    this.id = this.config.id;
    this.container = this.config.container;
    this.data = this.config.data;
    this.fields = this.config.fields;
    this.totalData = this.data.length;
	this.currentpage = this.config.currentpage;
	this.pageSize = this.config.pageSize;    
    this.proxy = null;
    this.pagingToolbar = null;
}
//##############################################################################
Components.StoreContainer.prototype.create = function() {
    if(this.data.length != 0) {
        this.loadData();
    }
	return this ;
}
//##############################################################################
Components.StoreContainer.prototype.loadDataProxy = function(dataProxy) {   
	if(this.container.className =='gridContainer'){
		this.loadData(dataProxy[this.proxy.reader.readerinternalconfig.root]);
		this.container.setTotalData(dataProxy[this.proxy.reader.readerinternalconfig.totalProperty]);		
	}else
		this.loadData(dataProxy);
	//------------*-------------------------------------------------------------------------------------------------------------aqui
	var paginador=this.container.pagingToolbar;
	if(paginador!=null)
	{
		console.log("tiene paginador y lee base de datos");
		//this.container.pagingToolbar.updateToolbar(this.currentpage);
		paginador.currentPage = this.currentpage;														//desde aqui		codigo duplicade con pagintoolbaritem--> funcion = updateToolbar
		paginador.textCurrentPage.setValue(this.currentpage);
		
		if(paginador.currentPage == 1)
			paginador.changeStateButtons('prev', false);
		else
			paginador.changeStateButtons('prev', true);
		
		if(paginador.currentPage == paginador.lastPage)
			paginador.changeStateButtons('next', false);
		else
			paginador.changeStateButtons('next', true);										//hasta aqui
	}
	this.container.drawRows();
}
//##############################################################################
Components.StoreContainer.prototype.loadData = function(data) {
    if(data != undefined) {
        this.config.data = data;
        this.data = this.config.data;
    }    
    this.container.clear();    
}
//##############################################################################
Components.StoreContainer.prototype.sortData = function(field, state) {
    this.data = this.data.sort(sortingStore(field, this.getTypeDataColumn(field))); 
    if(state == "sorteddown")
        this.data.reverse();
    
    return this.data;
}
//##############################################################################
Components.StoreContainer.prototype.getTypeDataColumn = function(field) {
    return typeof(this.data[0][field]);
    /*for(var index in this.config.columns) {
        if(this.config.columns[index].dataIndex == field) {
            if(this.config.columns[index].typeData != undefined)
                return this.config.columns[index].typeData;
            else
                return "string";
        }
    }
    return undefined;
    */
}
//##############################################################################
Components.StoreContainer.prototype.add = function(record) {    
	if(this.proxy != null){					//trabajando con datos en base de datos
			this.proxy.insert(record);		//llamar al proxy y insertar el registro en el servidor		
	}else{
		//trabajando con datos locales
		this.addRegFromLocal(record);
	}
}
//-------------------------------------------------------------------------------
Components.StoreContainer.prototype.addRegFromLocal = function(record) {
		var index = this.config.data.push(record) - 1;
		this.data[index].position = index;
		this.container.drawRowData(this.data[index]);					//llamar GridContainer.drawRowData
}
//-------------------------------------------------------------------------------
Components.StoreContainer.prototype.addRegFromServer = function(record) {
	//el servidor retornara el numero de registros total, en record.conteo, lo actualizaremos
	this.container.setTotalData(record.conteo);
	if(this.container.pagingToolbar !=  null && (this.container.pagingToolbar.currentPage == this.container.pagingToolbar.lastPage)){ //si estamos en la ultima pagina del paginador dibujar el elemento
		var index = this.config.data.push(record.Item) - 1;
		this.data[index].position = index;		
		this.container.drawRowData(this.data[index])				////llamar GridContainer.drawRowData
	}			
}     
//##############################################################################
Components.StoreContainer.prototype.remove = function(record, update) {
    update = (update == undefined) ? true: update;
    this.data[record.position] = undefined;
    if(update) {
        this.updateData();
    }
}
//##############################################################################
Components.StoreContainer.prototype.updaterecord = function(record,position) {
	//Actualizara los datos de el array local o de la base de datos dependiendo de si se configuro el proxy o no.
	//@param record:   Son los nuevos valores del registo, en formato array de datos
	//@param position: Es un valor entero que indica el indice del registro que sera modificado.
   if(this.proxy != null){	
		if(record.conteo == undefined)
			this.proxy.update(record,position);
		else
		{	
			this.data[position] = record.Item;
			this.data[position].position = position ;
			this.container.drawRowData(this.data[position]);			
			$("#"+this.container.id + "_" + position,this.container.TableBody).find(".off").removeClass("off").addClass("on");
		}	
   }
   else{
	   this.data[position] = record;
	   this.updateData();
	   this.container.drawRows();
   }
}
//##############################################################################
Components.StoreContainer.prototype.deleterecord = function(record,position) {
   if(this.proxy != null){	
		if(record.conteo == undefined)
			this.proxy.deletereg(record,position);
		else{			
			this.container.setTotalData(record.conteo);
			this.data[position] = undefined;	
			this.updateData();
			if(this.container.pagingToolbar!= undefined)			
				this.container.pagingToolbar.updateToolbar(this.container.pagingToolbar.currentPage);
			else			
				this.loadPage(1);
		}	
   }
   else{
	   this.remove(record,true);
	   this.container.drawRows();
   }
}
//##############################################################################
Components.StoreContainer.prototype.deletemultiplerecord = function(records,deletedrecords) {
   if(this.proxy != null){	
		if(records.conteo == undefined)
			this.proxy.deleteregs(records);
		else{			
			this.container.setTotalData(records.conteo);
			for(var rec in deletedrecords)
				this.data[deletedrecords[rec].position] =  undefined;				
			this.updateData();
			if(this.container.pagingToolbar!= undefined)			
				this.container.pagingToolbar.updateToolbar(this.container.pagingToolbar.currentPage);
			else			
				this.loadPage(1);
		}	
   }
   else{
	   this.removeRecords(records);
	   this.container.drawRows();
   }
}
//##############################################################################
Components.StoreContainer.prototype.removeRecords = function(arrayRecords) {
    for(var i in arrayRecords) {
        this.remove(arrayRecords[i], false);
    }
    this.updateData();
}
//##############################################################################
Components.StoreContainer.prototype.updateData = function() {
    var newData = [];
    for(var i in this.data) {
        if(this.data[i] != undefined)
            newData.push(this.data[i]);
    }
    this.loadData(newData);
}
//##############################################################################
Components.StoreContainer.prototype.getAt = function(idRow) {
    return this.data[idRow];
}
//##############################################################################
Components.StoreContainer.prototype.getProxy = function() {
    return this.proxy;
}
//##############################################################################
Components.StoreContainer.prototype.loadPage = function(page,functions) {
	/*
	@param pagina:  pagina que se leera de la base de datos. 
	@param functions: funcion que se ejecutara cuando se ejecute el evento onsucess de el proxy recivira como parametro data. functions(data);
	*/
    if(this.config.proxy.length == 0) {
        alert('No se establecio un elemento Proxy para el Store');
        return false;
    }
    if(this.proxy == null){
       // crear el componente proxy
       this.proxy = Components.create('DataProxy', this.config.proxy);
       this.proxy.storeContainer = this;
    }
    
    // cargamos data desde proxy
    this.proxy.load(this.config.pageSize, page,functions);
    this.config.currentpage = page;
    this.currentpage = page;
    return true;
 }
//##############################################################################
function sortingStore(field, type) {
    switch(type) {
        case "string":
        case "number":
            return function (a,b) {
                var x, y;
                x = a[field];
                y = b[field];
                if (x < y){
				return -1;}
                if (x > y){
				return 1;}
                return 0;
              }
            break;
    }
    return undefined;
}
