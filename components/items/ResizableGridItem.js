/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	ResizableGrid v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	Uses: Este Widget esta basado en el trabajo de Alvaro Prieto Lauroba http://www.bacubacu.com/colresizable/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].		
*/
Components.ResizableGrid.prototype.init = function(dataObj) {
		this.config = {	
		container: $('body'),
		parent:'',						//Al trabajar en combinacion con gridContainer este es el enlace al componente de la tabla completa.
		subcontainer:'', 				//en caso que verticalScroll sea true este es el cuerpo de la tabla this.TableBody;	
		id: "ResizableGrid-"+ Math.round(Math.random() * 2000),
		draggingClass: 'JCLRgripDrag',	//css-class esta calse es usada cuando estamos en proceso de redimencionado (para propositos visuales)
		gripInnerHtml: '',				//para generar un elemento de arrastre personalizado				
		liveDrag: true,				//permite que los cambios en la tabla sean en tempo real	
		fixed: true,                    //el ancho de la tabla no cambia a pesar que se cambien los anchos de las columnas
		minWidth: 15, 					//Ancho minimo aceptado para una columna
		headerOnly: false,				//specifies that the size of the the column resizing anchors will be bounded to the size of the first row 
		hoverCursor: "e-resize",  		//cursor to be used on grip hover
		dragCursor: "e-resize",  		//cursor to be used while dragging
		postbackSafe: false, 			//when it is enabled, table layout can persist after postback or page refresh. It requires browsers with sessionStorage support (it can be emulated with sessionStorage.js). 
		flush: false, 					//when postbakSafe is enabled, and it is required to prevent layout restoration after postback, 'flush' will remove its associated layout data 
		marginLeft: null,				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
		marginRight: null, 				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
		disable: false,					//disables all the enhancements performed in a previously colResized table	
		partialRefresh: false,			//can be used in combination with postbackSafe when the table is inside of an updatePanel		
		listeners: {
				onDrag: function(event){}, 					//callback function to be fired during the column resizing process if liveDrag is enabled
				onResize: function(event){}	
		}
					
	 };			
	for(var i in dataObj) {
        if(this.config[i] != undefined){            
			if(i == "listeners") {
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
	this.subcontainer = this.config.subcontainer;	
	this.drag = null;			//reference to the current grip that is being dragged
	//common strings for packing
	this.PX = "px";
	this.SIGNATURE ="JColResizer";
    this.FLEX = "JCLRFlex";
	//short-cuts
	this.ie = navigator.userAgent.indexOf('Trident/4.0')>0;
	this.anchos=[];//valor de ancho de cada columna	
	}

Components.ResizableGrid.prototype.create = function(){		
		if(this.config.disable) return this.destroy(this.container);				//destruir el componente 
		var	id = this.container.id = this.container.attr("id") || this.SIGNATURE+ Math.round(Math.random() * 2000);	//its id is obtained, randomId es generado		
		this.container.p = this.config.postbackSafe; 							//short-cut to detect postback safe 		
		if(!this.container.is("table") && !this.config.partialRefresh) return; 		//if the object is not a table or if it was already processed then it is ignored.
		this.container.g = []; 
		this.container.c = []; 
		this.container.w = this.container.width(); 
		this.container.gc = this.container.prev(); 
		this.container.f=this.config.fixed;	//this.container.c and this.container.g are arrays of columns and grips respectively				
		if(this.config.marginLeft) this.container.gc.css("marginLeft", this.config.marginLeft);  	//if the table contains margins, it must be specified
		if(this.config.marginRight) this.container.gc.css("marginRight", this.config.marginRight);  	//since there is no (direct) way to obtain margin values in its original units (%, em, ...)
		this.container.cs = parseInt(this.container.css('border-spacing'))||2;	//table cellspacing (not even jQuery is fully cross-browser)
		this.container.b  = parseInt(this.container.css('border-left-width'))||1;	//outer border width (again cross-browser issues)
		// if(!(tb.style.width || tb.width)) this.container.width(this.container.width()); //I am not an IE fan at all, but it is a pity that only IE has the currentStyle attribute working as expected. For this reason I can not check easily if the table has an explicit width or if it is rendered as "auto"
		this.createGrips();		//grips are created
		return this ;
}
Components.ResizableGrid.prototype.createGrips  = function(){
		var $this=this;
		var th = this.container.find(">thead>tr>th,>thead>tr>td");														//si la tabla fue creada semanticamente correcta, sera obtenida
		if(!th.length) th = this.container.find(">tbody>tr:first>th,>tr:first>th,>tbody>tr:first>td, >tr:first>td");	//Pero algunos programadores no son semanticamente correctos
		th = th.filter(":visible");																						//filtrar las columnas invisibles
		this.container.cg = this.container.find("col"); 			
		this.container.ln = th.length;							//table length is stored	
		th.each(function(i){						//iterate through the table column headers			
			var colheaderfull = $(this); 						//jquery wrap for the current column			
			g= $('<span class="'+$this.SIGNATURE+'">&nbsp;</span>');
			colheaderfull.prepend(g);
            if(i == $this.container.ln-1){
                g.addClass("JCLRLastGrip"); 
            }
            g.bind('touchstart mousedown', {OBJ:$this},$this.onGripMouseDown); //bind the mousedown event to start dragging 
			g.t = $this.container;
			g.i = i;
			g.colheaderfull = colheaderfull;
			colheaderfull.w =colheaderfull.width();		//some values are stored in the grip's node data
			$this.container.g.push(g);
			$this.container.c.push(colheaderfull);						//the current grip and column are added to its table object
			colheaderfull.width(colheaderfull.w).removeAttr("width");				//the width of the column is converted into pixel-based measurements
			g.data($this.SIGNATURE, {i:i, t:$this.container.attr("id"), last: i == $this.container.ln-1});	 //grip index and its table name are stored in the HTML 												
		}); 	
		this.container.cg.removeAttr("width");	//remove the width attribute from elements in the colgroup 
		//si algunas columnas de la tabla tienen anchos definidos interfieren con el correcto funcionamiento por lo cual se les remueve.
		this.subcontainer.find('td, th').not(th).not('table th, table td').each(function(){  
			$(this).removeAttr('width');	//the width attribute is removed from all table cells which are not nested in other tables and dont belong to the header
		});		
        if(!this.container.f){
            this.container.removeAttr('width').addClass(this.FLEX); //if not fixed, let the table grow as needed
        }	
}
Components.ResizableGrid.prototype.syncGrips = function (){	
//no need los glips ya son parte de la tabla, y nunca se van a descuadrar, de su poscicion
};
Components.ResizableGrid.prototype.onGripMouseDown  = function(e){	
		var o = $(this).data(e.data.OBJ.SIGNATURE);			//obtener grip's data {Position[i], tablename[t], last}
		var t = e.data.OBJ.container;						//tabla de la cabecera	
		var g = t.g[o.i];									//Obtener el objeto grip, almacenado, en el array de datos de la tabla
        var oe = e.originalEvent.touches;           //touch or mouse event?
        g.ox = oe? oe[0].pageX: e.pageX;            //la poscicion origial x es almacenada
		//crear los 2 eventos para drag
		$(document).bind('touchmove.'+e.data.OBJ.SIGNATURE+' mousemove.'+e.data.OBJ.SIGNATURE, {OBJ:e.data.OBJ},e.data.OBJ.onGripDrag )
		$(document).bind('touchend.'+e.data.OBJ.SIGNATURE+' mouseup.'+e.data.OBJ.SIGNATURE,{OBJ:e.data.OBJ}, e.data.OBJ.onGripDragOver);	//mousemove and mouseup events are bound
		$("head").append("<style type='text/css'>*{cursor:"+ e.data.OBJ.config.dragCursor +"!important}</style>"); 	//mantener el cursor en drag, mientras no se suelte el mouse
		g.addClass(e.data.OBJ.config.draggingClass); 	//add the dragging class (to allow some visual feedback)				
		e.data.OBJ.drag = g;							//el glip actual es almaceado a nivel de ResizableGrid
		//if(t.c[o.i].l) for(var i=0,c; i<t.ln; i++){ c=t.c[i]; c.l = false; c.w= c.width(); } 	//if the colum is locked (after browser resize), then c.w must be updated		
		return false; 	//prevent text selection
}
Components.ResizableGrid.prototype.onGripDrag  = function(e){
	var $this = e.data.OBJ
	if(!$this.drag) return; 
       		//table object reference 
        var oe = e.originalEvent.touches;
        var ox = oe ? oe[0].pageX : e.pageX;    //original position (touch or mouse)
        var x =  ox - $this.drag.ox;	        //Variacion de la coordenada x desde la poscicion inicial, hasta el lugar actual
		//console.log(x);										
		var mw = $this.config.minWidth;			//ancho mínimo que se puede permitir una columna
		var i = $this.drag.i;					//i = numero de columna que esta siendo modificada
		var l = $this.container.cs*1.5 + mw + $this.container.b;	//ancho mínimo permitido calculado con los css de borde mas.
        var last = i == $this.container.ln-1;                 		//bool; last = el ultimo glip
        //calcular si el arrastre no supero los limites
		var min =  l;	//min width
		var max = $this.container.g[i+1].colheaderfull.width() - l;	
		
		$this.drag.x = x;	 
		//$this.drag.css("left",  x + "px"); 	//apply position increment	
        if(last){									//if it is the last grip
            var c = $this.container.c[$this.drag.i];					//width of the last column is obtained
			$this.drag.w = c.w + x- $this.drag.l;         
        }              
		if($this.config.liveDrag){ 			//if liveDrag is enabled
			if(last){
			    c.width($this.drag.w);
                $this.container.w = $this.container.width();
			}else{				
				$this.container.g[i].colheaderfull.width($this.container.g[i].colheaderfull.width()+x);
				$this.container.g[i+1].colheaderfull.width($this.container.g[i+1].colheaderfull.width()-x);
			}
			var cb = $this.config.listeners.onDrag;							//check if there is an onDrag callback
			e.currentTarget = $this.container[0];
			$this.drag.ox = ox;	
			cb(e); 		//if any, it is fired
			
		}
		return false; 	//prevent text selection while dragging	
}
Components.ResizableGrid.prototype.onGripDragOver  = function(e){
		var $this =e.data.OBJ;
		$(document).unbind('touchend.'+$this.SIGNATURE+' mouseup.'+$this.SIGNATURE).unbind('touchmove.'+$this.SIGNATURE+' mousemove.'+$this.SIGNATURE);
		$("head :last-child").remove(); 				//remove the dragging cursor style	
		if(!$this.drag) return;
		
		var oe = e.originalEvent.touches;
        var ox = oe ? oe[0].pageX : e.pageX;    //original position (touch or mouse)
        var x =  ox - $this.drag.ox;	        //Variacion de la coordenada x desde la poscicion inicial, hasta el lugar actual
		console.log(x);
		
		$this.drag.removeClass($this.config.draggingClass);		//remove the grip's dragging css-class		
		var i = $this.drag.i;                 //column index
        var last = i == $this.container.ln-1;         //check if it is the last column's grip (usually hidden)
        var c = $this.container.g[i].c;               //the column being dragged
        if(last){
            c.width($this.drag.w);
            c.w = $this.drag.w;
        }else{
           $this.container.g[i].colheaderfull.width($this.container.g[i].colheaderfull.width()+x);
		   $this.container.g[i+1].colheaderfull.width($this.container.g[i+1].colheaderfull.width()-x);
        }
        if(!$this.container.f) applyBounds($this.container);	//if not fixed mode, then apply bounds to obtain real width values
		
		$this.ColResize(e); 	//if there is a callback function, it is fired
		$this.drag = null;	
}
Components.ResizableGrid.prototype.syncCols = function(i,isOver){
		var inc = this.drag.x-this.drag.l, c = this.container.c[i], c2 = this.container.c[i+1]; 			
		var w = c.w + inc;	var w2= c2.w- inc;	//their new width is obtained					
		c.width( w + "px");			
		this.container.cg.eq(i).width( w + "px"); 
        if(this.container.f){ //if fixed mode
            c2.width(w2 + "px");
            this.container.cg.eq(i+1).width( w2 + "px");
        }
		if(isOver){
            c.w=w; 
            c2.w= this.container.f ? w2 : c2.w;
        }
};
Components.ResizableGrid.prototype.destroy = function(){
		if(!this.container||!this.container.is("table")) return;			//if none, then it wasn't processed	 
		this.container.removeClass(this.SIGNATURE+" "+this.FLEX).gc.remove();	//class and grips are removed
		delete this.container;						//clean up data
};
Components.ResizableGrid.prototype.applyBounds = function(){
        var w = $.map(this.container.c, function(c){			//obtain real widths
            return c.width();
        });
        this.container.width(this.container.width()).removeClass(this.FLEX);	//prevent table width changes
        $.each(this.container.c, function(i,c){
            c.width(w[i]).w = w[i];				//set column widths applying bounds (table's max-width)
        });
		this.container.addClass(this.FLEX);						//allow table width changes
};
Components.ResizableGrid.prototype.onResize = function(){
	//evento que se ejecuta cuando se finaliza el redimencionando de el ancho de algunacolumna.
			var t = this.container, i, mw=0;				
			t.removeClass(this.SIGNATURE);						//firefox doesn't like layout-fixed in some cases
			if (t.f && t.w != t.width()) {					//if the the table's width has changed and it is in fixed mode
				t.w = t.width();							//its new value is kept the active cells area is obtained
				for(i=0; i<t.ln; i++) mw+= t.c[i].w;		
				//cell rendering is not as trivial as it might seem, and it is slightly different for
				//each browser. In the beginning i had a big switch for each browser, but since the code
				//was extremely ugly now I use a different approach with several re-flows. This works 
				//pretty well but it's a bit slower. For now, lets keep things simple...   
				for(i=0; i<t.ln; i++) t.c[i].css("width", M.round(1000*t.c[i].w/mw)/10 + "%").l=true; 
				//c.l locks the column, telling us that its c.w is outdated									
			}
			this.syncGrips(t.addClass(this.SIGNATURE));
		
};

Components.ResizableGrid.prototype.ColResize = function(e){	
		/**Funcion util solo con las tablas creadas por gridcontainer con la opcion verticalscroll.
		sirve para encajar los anchos de las columnas de la cabecera con los anchos de las columnas de el cuerpo.
		esta compuesto de 3 pasos, 
		1)La cabecera intenta pasar todos los anchos al cuerpo de la tabla
		2)El cuerpo pasa los anchos aceptados a la cabecera.
		3)Se sincronizan los glips con las comumnas  
		*/
		 var parent =  (e== undefined)?this:e.data.OBJ;
		 var indice =0;		
		 parent.anchos=[];
		 var total =0;
		 parent.container.find("th").each (function() {
			parent.anchos.push($(this).outerWidth());
		 });
		
		parent.subcontainer.find("th").each (function() {
			$(this).css("width",parent.anchos[indice]);
			indice++
		}); 	
		indice =0;
		parent.anchos = [];
		parent.subcontainer.find("th").each (function() {
			parent.anchos.push($(this).outerWidth());
		});
		parent.container.find("th").each (function() {
			$(this).outerWidth(parent.anchos[indice]-1);
			indice++
		}); 
		
		if(parent.container.width()> parent.subcontainer.width())//si hay scroolbar			
			parent.container.parent().css("padding-right","17px");
		if(parent.container.width()< parent.subcontainer.width())
			parent.container.parent().css("padding-right","0px");
			
		//parent.syncGrips();
		if(e!= undefined)
			parent.config.listeners.onResize(e);
}