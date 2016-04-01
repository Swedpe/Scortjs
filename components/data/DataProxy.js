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
Components.DataProxy.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
		//
		reader: {
			type: 'ajax',
			url: '',
			extraParams: [],
			readerinternalconfig: {
				type: 'json',
				totalProperty: 'total',
				root:'items'
			},
			beforeSend: function(obj){ return true;},
			complete: function(obj, exito){}
			
		},
		create:{
			type: 'ajax',
			url: '',
			extraParams: [],
			createinternalconfig: {
				type: 'json',
				succesProperty: 'succes',
				succes:'data'
			},
			beforeSend: function(obj){ return true;},
			complete: function(obj, exito){}
		},
		update:{
			type: 'ajax',
			url: '',
			extraParams: [],
			createinternalconfig: {
				type: 'json',
				succesProperty: 'succes',
				succes:'data'
			},
			beforeSend: function(obj){ return true;},
			complete: function(obj, exito){}
		},
		deleterow:{
			type: 'ajax',
			url: '',
			extraParams: [],
			createinternalconfig: {
				type: 'json',
				succesProperty: 'succes',
				succes:'data'
			},
			beforeSend: function(obj){ return true;},
			complete: function(obj, exito){}
		},
		/*
        type: 'ajax',
        url: '',
        extraParams: [],
        reader: {
            type: 'json',
            totalProperty: 'total',
            root:'items'
        },
		*/
        id: "dataproxy-"+ Math.round(Math.random() * 2000),
       
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined){
            if(i == "listeners" || i=='reader') {
                for(var j in dataObj[i]) {
                    this.config[i][j] = dataObj[i][j];
                }
            }
            else
                this.config[i] = dataObj[i];
        }
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.listeners = this.config.listeners;
    this.extraParams = this.config.reader.extraParams;   
    this.reader = this.config.reader;  
	this.createrow = this.config.create;
	this.updaterow = this.config.update;
	this.deleterow = this.config.deleterow;
    this.storeContainer = null;
}
//##############################################################################
Components.DataProxy.prototype.create = function() {}
//##############################################################################
Components.DataProxy.prototype.load = function(pageSize, pageNro,functions) {
	/* Se genera una peticion ajax al servidor, la peticion es asincrona.
	@Param pageSize Numero de elementos por pagina
	@Param pageNro Numero de pagina
	@Param functions, funcion que se ejecuta cada vez que los datos son retornados del servidor en el Evento success
	*/
    var start = (pageNro - 1) * pageSize;
    var limit = pageSize;
	this.stringData = this.generateStringData("reader");
    var stringData = this.stringData + "&start=" + start + "&limit=" + limit;
    
    var $this = this;   
    $.ajax({
        xhr:  (window.ActiveXObject) ?
        function() {
        try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {}
        } :
        function() {
        return new window.XMLHttpRequest();
        },
        cache: false,
        url: $this.config.reader.url,
        type: $this.config.reader.type,
        data: stringData,
        beforeSend: $this.reader.beforeSend,
        contentType: "application/x-www-form-urlencoded",
        dataType: $this.reader.readerinternalconfig.type,
        success: function(data) {
            if($this.storeContainer != null) {
                $this.storeContainer.loadDataProxy(data);
				if (functions!= undefined){
					functions(data);
				}
            }
            else {
                alert('No se tiene un store container');
            }
        },
        complete: $this.reader.complete		
    });
    return false;
}
//##############################################################################
Components.DataProxy.prototype.insert = function(newrecord) {
    this.stringData = this.generateStringData("create");
    var stringData = this.stringData +"&"+$.param(newrecord);    
    var $this = this; 
	//createrow = Proxy.create, definido por el usuario.
    $.ajax({
        xhr:  (window.ActiveXObject) ?
        function() {
        try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {}
        } :
        function() {
        return new window.XMLHttpRequest();
        },
        cache: false,
        url: $this.createrow.url,										//url definido en proxy.create
        type: $this.createrow.type,										//tipo de envio [post,get,ajax]
        data: stringData,												//datos formados entre extraParams y los datos del formulario
        beforeSend: $this.createrow.beforeSend,							//llamado a evento
        contentType: "application/x-www-form-urlencoded",
        dataType: $this.createrow.createinternalconfig.type,			//Json por defecto
        success: function(data) {										//Se espera que el servidor PHP retorne los datos en Formato JSON del registro insertado.		
			$this.storeContainer.addRegFromServer(data);
        },
        complete: function(obj, exito){
			if($this.storeContainer.container.tittleToolbar !=  undefined){
				if($this.storeContainer.container.tittleToolbar.ventanaeditor != undefined)
					 Components.getComponentById($this.storeContainer.container.tittleToolbar.form.id).Clear();
			}			
			$this.createrow.complete(obj, exito);						//llamado a evento
		}	
    });
    return false;
}
//##############################################################################
Components.DataProxy.prototype.update = function(record,position) {
    this.stringData = this.generateStringData("update");
    var stringData = this.stringData +"&"+$.param(record);    
    var $this = this;  
    $.ajax({
        xhr:  (window.ActiveXObject) ?
        function() {
        try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {}
        } :
        function() {
        return new window.XMLHttpRequest();
        },
        cache: false,
        url: $this.createrow.url,
        type: $this.createrow.type,
        data: stringData,
        beforeSend: $this.createrow.beforeSend,
        contentType: "application/x-www-form-urlencoded",
        dataType: $this.createrow.createinternalconfig.type,
        success: function(data) {			
			$this.storeContainer.updaterecord(data,position);
        },
        complete: function(obj, exito){
			if($this.storeContainer.container.tittleToolbar !=  undefined){
				if($this.storeContainer.container.tittleToolbar.ventanaeditor != undefined)
					 Components.getComponentById($this.storeContainer.container.tittleToolbar.form.id).Clear();
			}			
			$this.createrow.complete(obj, exito);
		}	
    });
    return false;
}
//##############################################################################
Components.DataProxy.prototype.deletereg = function(record,position) {
    this.stringData = this.generateStringData("delete");
    var stringData = this.stringData +"&"+$.param(record);    
    var $this = this;  
    $.ajax({
        xhr:  (window.ActiveXObject) ?
        function() {
        try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {}
        } :
        function() {
        return new window.XMLHttpRequest();
        },
        cache: false,
        url: $this.deleterow.url,
        type: $this.deleterow.type,
        data: stringData,
        beforeSend: $this.deleterow.beforeSend,
        contentType: "application/x-www-form-urlencoded",
        dataType: $this.deleterow.createinternalconfig.type,
        success: function(data) {			
			$this.storeContainer.deleterecord(data,position);
        },
        complete: function(obj, exito){					
			$this.deleterow.complete(obj, exito);
		}	
    });
    return false;
}
//##############################################################################
Components.DataProxy.prototype.deleteregs = function(records) {
    this.stringData = this.generateStringData("delete");
	var params="";
	for(var rec in records)	
		params+=records[rec].ID+",";
	
	params =params.substr(0,(params.length-1));	
    var stringData = this.stringData +"&multiple="+params;    
    var $this = this;  
    $.ajax({
        xhr:  (window.ActiveXObject) ?
        function() {
        try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {}
        } :
        function() {
        return new window.XMLHttpRequest();
        },
        cache: false,
        url: $this.deleterow.url,
        type: $this.deleterow.type,
        data: stringData,
        beforeSend: $this.deleterow.beforeSend,
        contentType: "application/x-www-form-urlencoded",
        dataType: $this.deleterow.createinternalconfig.type,
        success: function(data) {			
			$this.storeContainer.deletemultiplerecord(data,records);
        },
        complete: function(obj, exito){					
			$this.deleterow.complete(obj, exito);
		}	
    });
    return false;
}

//##############################################################################
Components.DataProxy.prototype.generateStringData = function(type) {
    var stringData = "";
	switch(type){		
		case "reader":
			for(var label in this.config.reader.extraParams) {
				stringData += (label + "=" + this.config.reader.extraParams[label] + "&");
			}
		break;
		case "create":
			for(var label in this.config.create.extraParams) {
				stringData += (label + "=" + this.config.create.extraParams[label] + "&");
			}
		break;
		case "update":
			for(var label in this.config.update.extraParams) {
				stringData += (label + "=" + this.config.update.extraParams[label] + "&");
			}
		break;		
		case "delete":
			for(var label in this.config.deleterow.extraParams) {
				stringData += (label + "=" + this.config.deleterow.extraParams[label] + "&");
			}
		break;	
	}
	
    return stringData.substr(0, stringData.length - 1);
}





function pruebaProxy1() {
    var proxy = Components.create('DataProxy', 
        {
            type: 'POST',
            url: 'modulos.php',
            extraParams: {
                modulo:'admin',
                ajax: 'admin',
                administra:'traductor',
                operacion:1,
                filtrotraductor:'NULL'
            },
            reader: {
                type: 'json',
                totalProperty: 'conteo',
                root:'Items'
            }
        }
    );
    return proxy;
}