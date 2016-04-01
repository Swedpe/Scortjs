/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	FreeDiv v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.fontawesomegrid.prototype.init = function(dataObj) {
    this.config = {
		tipo :'ScreenRow',
        container: $('body'),
        id: "HtmlScreenGrid-"+ Math.round(Math.random() * 2000),             
		scale:'large',
		hidden: false,
		type:'none',
        items: [],
		html:'',	
		ColsDef :new Array(), 
		listeners: {
            click: function(event,font){}
        },
		handler: function(e,font){}
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) 
			this.config[i] = dataObj[i];        
    }
    
    this.id = this.config.id;
	this.Cols = new Array();
    this.container = this.config.container;
    this.className = "ScreenGrid"; 
	this.items = this.config.items;	
	this.itemsObjs = [];
    
}
//##############################################################################
Components.fontawesomegrid.prototype.create = function() {
    Components.Component.prototype.create.call(this);
	//leer el archivo xml que tiene la lista completa de los font awesome icons
	var $this = this;
	var urlx="";

	html = $('<div class="screenrow">'+
	          '<div class="col-md-12">'+
	              '<ul class="fontawesomegrid-icons"></ul>'+
	         ' </div>'+
	' </div>');  
	this.divContainer.append(html);		
	this.ulnode = $("ul",this.divContainer);
	if($this.config.type != "none")
	{
		switch(this.config.type){
			case 'fontawesome':
			urlx= "fonts/font-awesome-4.3.0/fontawesome.xml";
			break;
			case 'glipicon':
			urlx= "fonts/Glypsicons/Glyphicons.xml";
			break;
		}
		
	}
	
	$.ajax({
	
     url : urlx,
    dataType: "xml",
    success: function (xml) {
	var Mainnode = xml.getElementsByTagName("resources");
		x = Mainnode[0].children;
		if ($this.config.type=='fontawesome'){
			for (i=0;i<x.length;i++) {
			$this.ulnode.append('<li><a href="#" class="fontawesomeButton buttonItem buttonItem-'+$this.config.scale+'"><span class="fa '+x[i].getAttribute("name")+'"></span></a></li>');}
			}
		else if ($this.config.type=='glipicon'){
			for (i=0;i<x.length;i++) {
				$this.ulnode.append('<li><a href="#" class="fontawesomeButton buttonItem buttonItem-'+$this.config.scale+'"><span class="glyphicon '+x[i].getAttribute("name")+'"></span></a></li>');}
			}
		$this.buttons =  $('.fontawesomeButton',$this.divContainer);
		switch($this.config.scale){
			case 'minier':
				$this.buttons.css('width','20px');	
			break;
			case 'mini':
				$this.buttons.css('width','25px');	
			break;
			case 'small':
				$this.buttons.css('width','30px');	
			break;
			case 'medium':
				$this.buttons.css('width','45px');	
			break;	
			case 'large':
				$this.buttons.css('width','50px');	
			break;
		}
 		$this.setControls();
	}
	});
	return this ;
}
Components.fontawesomegrid.prototype.setControls = function() {
    this.buttons.bind("click", {OBJ:this}, function(event) {
       //event.data.OBJ.config.listeners.click(event);
        //event.data.OBJ.handler(event);
		var font = "";
		if(event.target.type==undefined){			//cuando se le hace click directamente al icono
			font = event.target.className
			event.data.OBJ.config.listeners.click(event,font);
			event.data.OBJ.config.handler(event,font);
		}else	//cuando se le hace click al boton
		{	font = event.target.firstChild.className;
			event.data.OBJ.config.listeners.click(event,font);
			event.data.OBJ.config.handler(event,font);
		}
        
    });
}
//##############################################################################
Components.fontawesomegrid.prototype.show = function() {
    if(!this.config.hidden)
        Components.Component.prototype.show.call(this);
    else
        this.hide();
 return this;
}







