/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	GridContainer v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
*/
Components.GridContainer.prototype.init = function(dataObj) {
    this.config = {
        container: $('body'),
		state:'default',
        id: "gridcontainer-"+ Math.round(Math.random() * 2000),
        title: "",
        selModel: {
            type: "default",
            listeners: {}
        },
        cellEditing: {
            clicksToEdit: -1,
			listeners: {
                edit: function(ed, e){}
            }
        },
        store: -1,
        columns: [],		
        width: '100%',
        height: -1,
        bbar: -1,
		gridviewtittle: -1,
		position:'right',
		gridExporter:-1,
		verticalScroll: false,
        autoScroll: false,					//Indica si se crearan o no las barras, para poder visualizar tablas grandes.
		resizable:-1,						//objeto de referencia que permite que las columnas se puedan redimencionar
		responsive:false
    };
    
    for(var i in dataObj) {
        if(this.config[i] != undefined) {
            switch(i){
                case "selModel": case "cellEditing":
                    for(var j in dataObj[i]) {
                        this.config[i][j] = dataObj[i][j];
                    }
                    break;
                default:
                    this.config[i] = dataObj[i];
            }
        }
    }
    
    this.id = this.config.id;
    this.container = this.config.container;
    this.className = "gridContainer";
    this.store = null;
    this.pagingToolbar = null;
	this.tittleToolbar = null;
    this.itemsObjs = new Array();
    this.verticalScroll = this.config.verticalScroll;
    this.TableBody = null;
    this.rowTitle = null;
    this.editorCurrent = null;
    this.cellOld = null;
    this.cellCurr = null;
	this.indiceColumnasCalculadas=0;
}
//##############################################################################
Components.GridContainer.prototype.create = function() {
    Components.Component.prototype.create.call(this);
    //si se activa la opcion de verticalScroll, se creara un div adicional y la cabecera de la tabla sera dibujada en ese div
	if (this.verticalScroll){
		this.divContainer.append('<div class="divgridhead"><table class ="gridhead" id="'+this.id+'" cellspacing="0"><thead><tr class="ScrollGridHeader"></tr></thead></table></div>');
		this.tablehead = $('table.gridhead', this.divContainer);
	}
    //se crea la tabla principal, en caso de funcion normal TrTitleGrid es la cabecera normal de la tabla, en caso de verticalScroll, sera la cabecera fantasma
	this.divContainer.append('<div class="divgridBody"><table class="gridbody '+this.config.state+'" cellspacing="0"><tr class="TrTitleGrid '+this.config.state+'"></tr></table></div>');
	this.divContainer.addClass('table-'+this.config.state);
	this.TableBody = $('table.gridbody', this.divContainer);	
	if(this.verticalScroll){		
		this.divTableBody =  $('.divgridBody', this.divContainer);
		this.rowTitle = $('.ScrollGridHeader', this.divContainer);
		this.rowTitle2=$('.TrTitleGrid', this.TableBody);
	}else{
		this.rowTitle = $('.TrTitleGrid', this.TableBody);
	}
    //dibujar las cabeceras de todas las columnas
    this.drawColumns();
    
    if(this.config.store != -1){
        this.config.store.container = this;
        this.store = Components.create('StoreContainer', this.config.store);
		this.drawRows(); //El creador del store container  carga los datos
    }
    
    if(this.config.bbar != -1) {
			switch(this.config.bbar.position){
				case "down":
					this.divContainer.append('<div class="divgridPager"><table class ="gridPager" id="Pager_'+this.id+'" cellspacing="0"><thead></thead></table></div>');
				break;
				case "up":
					this.divContainer.prepend('<div class="divgridPager"><table class ="gridPager" id="Pager_'+this.id+'" cellspacing="0"><thead></thead></table></div>');
				break;
				case undefined:			
					this.divContainer.prepend('<div class="divgridPager"><table class ="gridPager" id="Pager_'+this.id+'" cellspacing="0"><thead></thead></table></div>');
				break;	
			} 
		this.gridPager = $('table.gridPager', this.divContainer);
		var toolbarcolspan =this.config.columns.length;		
		this.gridPager.append('<tr id='+this.id+'-bbar'+'><td colspan='+toolbarcolspan+' style="padding:0px;"></td></tr>');
        this.config.bbar.store = this.store;
		this.config.bbar.state = this.config.state;
        this.config.bbar.container = $('td', '#' + this.id + '-bbar', this.TableBody);
        this.pagingToolbar = Components.create('PagingToolbar', this.config.bbar);
		if(this.store.config.proxy.length == 0)
			this.setTotalData(this.store.config.data.length);
    }
   if(this.config.gridviewtittle != -1) {
		this.divContainer.prepend('<div class="divgridTittle"><table class ="gridTittle" id="Tittle_'+this.id+'" cellspacing="0"><thead></thead></table></div>');
		this.gridTittle = $('table.gridTittle', this.divContainer);
		var toolbarcolspan =this.config.columns.length;	
		this.gridTittle.append('<tr id='+this.id+'-tittle'+'><th colspan='+toolbarcolspan+' style="padding:0px;"></th></tr>');
		this.config.gridviewtittle.parent = this;
		this.config.gridviewtittle.state = this.config.state;
        this.config.gridviewtittle.container = $('th', '#' + this.id + '-tittle', this.TableBody);
        this.tittleToolbar = Components.create('GridContainerTitle', this.config.gridviewtittle);
	}
	if(this.config.gridExporter != -1) {
		this.config.gridExporter.parent = this;
		this.gridExporter = Components.create('gridExport', this.config.gridExporter);
	}
    if(this.config.width.toString().replace("%","")>-1 ) {
        this.divContainer.css("width", this.config.width);
    }
	if(this.config.height.toString().replace("%","")>-1 ) {
        this.divContainer.css("height", this.config.height);
    }
    if((this.config.autoScroll)&&(!this.config.verticalScroll)) {
        this.divContainer.css("overflow", "auto");
    }else if(this.config.verticalScroll){
		this.divTableBody.css("overflow", "auto");
	}
    
    this.setControls();	
	//Agregar class a todas las cabeceras
	$(this.rowTitle).find("th").each(function(){ 
		$(this).addClass("ui-state");
	});
	return this ;
}
//##############################################################################
Components.GridContainer.prototype.drawRows = function() {
	page=this.store.currentpage;	
	this.clear();
	var desde = 0;
	var hasta = this.store.data.length;		
	if(page != undefined && this.store.pageSize != -1) {
		if(this.store.proxy!=null){
			desde = 0;
			hasta =(desde+this.store.pageSize)-1;
		}
		else{
		desde = ((page-1)*this.store.pageSize);
		hasta =(desde+this.store.pageSize)-1;
		}
	}
	
	for (var index = desde; index < this.store.data.length; index++) {
			if(index>=desde && index<=hasta){
				if(typeof(this.store.data[index]) == "string") {
					var value = this.store.data[index];
					this.store.data[index] = {0: value};
				}
				this.store.data[index].position = index;
				this.drawRowData(this.store.data[index]);
			}
	}	
}		
//##############################################################################
Components.GridContainer.prototype.drawColumns = function() {
    var $this = this;
	//basado en el modelo de seleccion esta parte crea una nueva columna check para poder ser usada para seleccion multiple, pero no es la mejor solucion, 
	//requiere un reanalisis.
    switch(this.config.selModel.type) {
        case "checkboxmodel":
            var selModel = {
                type: "CheckColumn", 
                dataIndex: "rowSelected",
                width: 20,
                listeners: this.config.selModel.listeners,
				isselmodel:true
            };
            selModel.listeners.checkchange = function(event, nroRow, isChecked) {
                var objRow = $($('tr',$this.TableBody)[nroRow+1]);
                if(isChecked){
					if(objRow.find("td").length > 0)//select current row
							$this.selectRow(objRow, true);  
					else{//select all  rows	
							var indice =0;							
							$('tr',$this.TableBody).each(function(){
								if(indice>0){									
										$this.selectRow($(this), true);								
										$("."+$this.id+"_rowSelected",$(this)).find(".off").removeClass("off").addClass("on");
								}
								indice++;
							})			
						}							
                }else{ 
					if(objRow.find("td").length > 0)//deselect current row
						objRow.removeClass('rowGrid-selected ui-state-'+$this.config.state+'');
					else{//deselect all  rows
							var indice =0;								
							$('tr',$this.TableBody).each(function(){
								if(indice>0){
									$(this).removeClass('rowGrid-selected ui-state-'+$this.config.state+'');
									$("."+$this.id+"_rowSelected",$(this)).find(".on").removeClass("on").addClass("off");
								}	
								indice++;
							})				
						}	
                }
                if($this.config.selModel.listeners.checkChange)
                    $this.config.selModel.listeners.checkChange(event, nroRow, isChecked);
            };
			this.config.columns.splice(0,0,selModel);
            
        break;
    }
    
    for(var i in this.config.columns) {
        this.drawColumn(this.config.columns[i]);
    }
}
//##############################################################################
Components.GridContainer.prototype.drawColumn = function(item) {
  if(this.verticalScroll)
   {
		item.container1 = this.rowTitle2;
   }	
	item.container = this.rowTitle;
    item.parentName = this.id;
	item.parent = this;
    var element = Components.create(item.type, item);
	if(item.dataIndex==undefined){
		item.dataIndex = 'Calculada'+this.indiceColumnasCalculadas; 
		this.indiceColumnasCalculadas = this.indiceColumnasCalculadas + 1;
	} 
    this.itemsObjs[item.dataIndex] = element;
    this.setControlResize(element.id);
}
//##############################################################################
Components.GridContainer.prototype.drawRowData = function(data) {
    var row ="";
	var contentField = "";
    var idrow = this.id + "_" + data.position;
    if($("#"+idrow,this.TableBody).length==0){			
		row = $('<tr id="'+idrow+'" class="scort-row"></tr>');
		this.TableBody.append(row);  
	}	
	else{
		row = $("#"+idrow,this.TableBody);
		row.html('');
	}
    row.data('record', data);
    
	
    for(var col in this.itemsObjs) {
        contentField = data[this.itemsObjs[col].dataIndex];
        this.itemsObjs[col].drawData($("#" + idrow), contentField);
    }

    this.setControlsRow(idrow);
}
//##############################################################################
Components.GridContainer.prototype.setControlsRow = function(idrow) {
    // Activamos los controles de edicion
    if(this.config.cellEditing.clicksToEdit != -1) {
        if(this.config.cellEditing.clicksToEdit == 2) {
            $('td', '#'+idrow).bind("dblclick", {OBJ:this}, function(event){						
				if($(this).data("dataIndex")!= ""  && $(this).data("dataIndex")!= undefined){ //Si la columna no tiene dataindex no se activa el editor					 
					event.data.OBJ.setEditor($(this));
				}
            });
        }
    }
    
    switch(this.config.selModel.type) {
        case "default":
            $('#'+idrow, this.TableBody).bind("click", {OBJ:this}, function(event) {
                event.data.OBJ.selectRow($(this), false);
                //$('tr', event.data.OBJ.TableBody).removeClass('rowGrid-selected');
                //$(this).addClass('rowGrid-selected');
            });
            break;
       /* case "checkboxmodel":
            $($('.checkboxGrid', '#'+idrow)[0]).bind("click", {OBJ:this}, function(event) {
                var info = event.currentTarget.className.split(' ');
                var objRow = $(this).closest('tr');

                if(info[1] == "off") {
                    event.data.OBJ.selectRow(objRow, true);
                }
                else {
                    objRow.removeClass('rowGrid-selected');
                }
            });            
            break;*/
    }
}
//##############################################################################
Components.GridContainer.prototype.setControls = function() {
    $('.btnSortGrid', this.rowTitle).bind("click", {OBJ:this}, function(event){
        event.data.OBJ.sort(event.currentTarget);
    });
    
    $('.btnFilterGrid', this.rowTitle).bind("click", {OBJ:this}, function(event){
        var field = $(event.currentTarget).closest('th').get(0).id.split("_")[1];
        event.data.OBJ.filterBy(field);
    });
    
    $(".btnFilterCancelGrid", this.rowTitle).bind("click", {OBJ:this}, function(event) {
        var field = $(event.currentTarget).closest('th').get(0).id.split("_")[1];
        event.data.OBJ.filterCancel(field);
    });
    
    $(".inputFilterGrid", this.rowTitle).keyup({'OBJ':this},function(event) {
        var field = $(event.currentTarget).closest('th').get(0).id.split("_")[1];
        var text = $(this).val();
        event.data.OBJ.filterVisibles(field, text);
    });
}
//##############################################################################
Components.GridContainer.prototype.setControlResize = function(classCol) {
   
}
//##############################################################################
Components.GridContainer.prototype.setEditor = function(cellCurrent) {
    if(this.editorCurrent != null) {
        var dataCellOld = this.editorCurrent.getValue();
        this.editorCurrent.destroy();
        this.cellCurr.html(dataCellOld);
        
        // ejecutamos listener de edicion
        var record = this.itemsObjs[this.cellCurr.data('dataIndex')].createRecord(this.cellCurr);
        this.config.cellEditing.listeners.edit(this, record);
    }
   
    if(this.itemsObjs[cellCurrent.data('dataIndex')].editable) {
        this.cellCurr = cellCurrent;
        var infoCurrent = unescapeHTML(cellCurrent.html());
        cellCurrent.html('');

        this.editorCurrent = this.itemsObjs[cellCurrent.data('dataIndex')].showEditor(cellCurrent);
        if(this.editorCurrent != null){
            this.editorCurrent.setValue(infoCurrent);
            $("input","#"+this.editorCurrent.id).keypress({OBJ:this},function(e) {
                if(e.which == 13) {                  
                    var dataCellOld = e.data.OBJ.editorCurrent.getValue();
                    e.data.OBJ.editorCurrent.destroy();
                    e.data.OBJ.cellCurr.html(dataCellOld);
                    // ejecutamos listener de edicion
                    var record = e.data.OBJ.itemsObjs[e.data.OBJ.cellCurr.data('dataIndex')].createRecord(e.data.OBJ.cellCurr);
                    e.data.OBJ.config.cellEditing.listeners.edit(e.data.OBJ, record);
                }
            });
        }
    }
}
//##############################################################################
Components.GridContainer.prototype.sort = function(currentTarget) {
	var th = currentTarget.divContainer;
    var field = th.get(0).id.split("_")[1];
    var orderCurrent = th.attr("data-sort");
	console.log(orderCurrent);
    var nextState = "";
    
	for (columna in this.itemsObjs){					//cambiamos el icono de sort de todas las columnas, a neutro.
		ico={ type:'fa',class:'fa-sort'};
		if(this.itemsObjs[columna].sortbutton)
			this.itemsObjs[columna].sortbutton.changeIcono(1,ico);
	}
    switch(orderCurrent) {
        case "nosorted":
			ico1={ type:'fa',class:'fa-caret-up'};
            nextState = "sortedup";
            break;
        case "sortedup":
			ico1={ type:'fa',class:'fa-caret-down'};
            nextState = "sorteddown";
            break;
        case "sorteddown":
			ico1={ type:'fa',class:'fa-caret-up'};
            nextState = "sortedup";
            break;
    }
    currentTarget.sortbutton.changeIcono(1,ico1);   
	th.attr("data-sort",nextState);
    
    var data = this.store.sortData(field, nextState);
    for (var index in data){
        this.TableBody.append($('#'+this.id+"_" + data[index].position));
    }
}
//##############################################################################
Components.GridContainer.prototype.filterBy = function(field) {
    var idColumn = this.id + '_' + field;
    var contentColumn = $("#" + idColumn, this.rowTitle);
    $('.btnFilterGrid', contentColumn).hide();
    $('span', contentColumn).hide();
    $('.inputFilterGrid', contentColumn).show();
    $('.btnFilterCancelGrid', contentColumn).show();
}
//##############################################################################
Components.GridContainer.prototype.filterVisibles = function(field, text){
    for (var index in this.store.data) {
        var str = unescapeHTML(this.store.getAt(index)[field]);
        if (str == ''){
            $('#'+this.id+'_'+this.store.data[index].position, this.TableBody).show();
        }
        else{
            var n = str.indexOf(text);
            if (n != -1){
                $('#'+this.id+'_'+this.store.data[index].position, this.TableBody).show();
            }
            else{
                $('#'+this.id+'_'+this.store.data[index].position, this.TableBody).hide();
            }
        }
    } //highlight
}
//##############################################################################
Components.GridContainer.prototype.filterCancel = function(field) {
    var idColumn = this.id + '_' + field;
    var contentColumn = $("#" + idColumn, this.rowTitle);
    $('.btnFilterGrid', contentColumn).show();
    $('span', contentColumn).show();
    $('.inputFilterGrid', contentColumn).hide();
    $('.btnFilterCancelGrid', contentColumn).hide();
}
//##############################################################################
Components.GridContainer.prototype.selectRow = function(row, multiple) {
    if(!multiple)
        $('tr', this.TableBody).removeClass('rowGrid-selected ui-state-'+this.config.state+'');
    
    $(row).addClass('rowGrid-selected ui-state-'+this.config.state+'');
}
//##############################################################################
Components.GridContainer.prototype.clear = function() { 
	$('tr', this.TableBody).slice(1).remove();
}
//##############################################################################
Components.GridContainer.prototype.setTotalData = function(totalData) {
    if(this.config.bbar != -1)
        this.pagingToolbar.setTotalData(totalData);
}
//##############################################################################
// Verifica que una fila esta seleccionada en el grid
Components.GridContainer.prototype.getSelection = function() {
    if($('.rowGrid-selected', this.TableBody).length == 0)
        return [];
    else {
        var rowsSelected = [];
        $('.rowGrid-selected', this.TableBody).each(function(index, row){
            rowsSelected.push($(row).data('record'));
        });
        return rowsSelected;
    }
}
//##############################################################################
Components.GridContainer.prototype.getStore = function() {
    return this.store;
}
//##############################################################################
Components.GridContainer.prototype.getCount = function() {
    return this.store.data.length;
}
//##############################################################################
Components.GridContainer.prototype.resizeBody = function() {
     //this.TableBody es la tabla para el cuerpo de la tabla;
	 //tris.tablehead es la tabla para la cabecera de la tabla;	 
	 if(this.config.resizable != -1) {
		if(this.verticalScroll){									//si la tabla tiene scroll vertical se envia la cabecera y el cuerpo
			this.config.resizable.container = this.tablehead;
			this.config.resizable.subcontainer = this.TableBody;			
		}else{
			this.config.resizable.container = this.TableBody;}		//si la tabla no tiene vertical scroll solo se envia la cabecera que igualmente afectara toda la tabla
		if(this.resizecontrol == undefined){
			this.config.resizable.parent = this;											//referencia directa al GridContainer
			this.resizecontrol = Components.create('ResizableGrid', this.config.resizable);	
		}
		if(this.verticalScroll){
			var heightTb = this.divContainer.height()-this.tablehead.height()-((this.gridPager != undefined)?this.gridPager.height():0)-((this.gridTittle != undefined)?this.gridTittle.height():0);
			this.TableBody.parent().css("height",heightTb);	
			}
			//this.GridColResize();
		this.resizecontrol.ColResize();	
		return;	
   }else{
		if(this.verticalScroll)
			this.GridColResize();
	}	
		
   
   if(this.verticalScroll){
	this.TableBody.parent().css("height",this.divContainer.height()-this.tablehead.height()-((this.gridPager != undefined)?this.gridPager.height():0)-((this.gridTittle != undefined)?this.gridTittle.height():0));
	if(this.tablehead.width()> this.TableBody.width())//si hay scroolbar
		this.tablehead.parent().css("padding-right","17px");
	if(this.tablehead.width()< this.TableBody.width())
		this.tablehead.parent().css("padding-right","0px");
	}
}
Components.GridContainer.prototype.GridColResize = function() {	
			 var indice =0;		
			 var anchos=[];
			 var total =0;
			 this.tablehead.find("th").each (function() {
				anchos.push($(this).outerWidth());
			 });
			
			this.TableBody.find("th").each (function() {
				$(this).css("width",anchos[indice]);
				indice++
			}); 	
			indice =0;
			anchos = [];
			this.TableBody.find("th").each (function() {
				anchos.push($(this).outerWidth());
			});
			this.tablehead.find("th").each (function() {
				$(this).outerWidth(anchos[indice]);
				indice++
			}); 		
}
Components.GridContainer.prototype.downloadPdf = function(pdfName,pag_inicial,pag_final) {	
	console.log('Descargar PDF');
	/*
	genera un archivo descargable PDF de el contenido de la tabla, si la tabla tiene paginador generara un archivo de varias paginas equivalente en PDF
	@param pdfName nombre del archivo que se requiere para descarga
	@param pag_inicial numero de pagina inicial
	@param pag_final numero de pagina final
	*/
	
	var doc = new jsPDF('p', 'pt');
	$this=this;
	if(this.store.proxy==null)										//este bloque de codigo es cuando los datos estan almacenados localmente
	{
		pag_inicial=pag_inicial-1;										//se resta 1 a pagina inicial para q en la iteracion del ""while(pag_inicial!=pag_final)"" se le sume d nuevo
		var pageSize=this.store.pageSize;							//numero de elementos por pagina
		if(pageSize==-1){											//no se definio un paginador, por ende todos los datos se muestran en la pagina 1
			pag_final=1;
			pageSize=this.store.totalData;
		}
		else{
			if(pag_final>Math.ceil(this.store.totalData/pageSize))  //si se pide un numero mayor que el numero de paginas que se tiene se ajusta a el numero maximo de paginas.
			pag_final=Math.ceil(this.store.totalData/pageSize);
		}
		var elemento=-1;
		var acumulador_pageSize=pageSize;
		if (pag_inicial>1){
			for (var t=0;t<pag_inicial;t++)
			{
				elemento=elemento+this.store.pageSize;
				acumulador_pageSize=acumulador_pageSize+pageSize;
			}
		}
		while(pag_inicial!=pag_final)									//aca se le suma el 1 a pag_inicial q se le resto anteriormente
		{
			pag_inicial=pag_inicial+1;
			//this.getStore().loadPage(pag_inicial,function(data){
			//	console.log(data);
			//});
			console.log(pag_inicial);
			var columns1= new Array();
			for (var i in this.config.columns){
				if(this.config.columns[i].type=="CheckColumn"){
					columns1.push(" ");
				}
				else{
				columns1.push(this.config.columns[i].text);}
			}
			var rows1= new Array();
			//var elemento=-1;
			while((elemento<acumulador_pageSize-1) && (elemento<parseInt(this.store.totalData)-1))
			//for (var i in this.store.data)
			{
				elemento=elemento+1;
				var adentro=new Array();
				for(var w in this.itemsObjs){
					if(this.itemsObjs[w].customrenderer){
						var valor=this.itemsObjs[w].renderer(0,0,this.store.data[elemento]);
						adentro.push(valor);
					}
					else{			
						adentro.push(this.store.data[elemento][w]);			
					}
				}
				rows1.push(adentro);
			}
			//pag_inicial=pag_inicial+1;
			doc.autoTable(columns1, rows1);
			if(pag_inicial<pag_final)
			{
				acumulador_pageSize=acumulador_pageSize+pageSize;
				doc.addPage();
				console.log("hola"+pag_inicial);
			}
		}
		doc.save(pdfName);
	}
	else
	{																			//este bloque de codigo es cuando los datos estan en base de datos, se piden paginas desde DB
		if(pag_final>$this.pagingToolbar.lastPage)
		pag_final=$this.pagingToolbar.lastPage;
		//-------------------------------------------------------------------
		var iterador=function(data){
			pag_inicial=pag_inicial+1;
			var columns1= new Array();												//titulos de columnas
			for (var i in $this.config.columns){
				if($this.config.columns[i].type=="CheckColumn"){
					columns1.push(" ");
				}
				else{
				columns1.push($this.config.columns[i].text);}
			}
			var rows1= new Array();													//datos de columnas
			for (var i in data.Items){
				var adentro=new Array();
				for(var w in $this.itemsObjs){
					if($this.itemsObjs[w].customrenderer){
						var valor=this.itemsObjs[w].renderer(0,0,data.Items[i]);
						adentro.push(valor);
					}
					else{		
						adentro.push(data.Items[i][w]);			
					}
				}
				rows1.push(adentro);
		}
		doc.autoTable(columns1, rows1);
		if(pag_inicial<=pag_final)//parseInt(this.pagingToolbar.lastPage)+1	)
		{
			doc.addPage();
			$this.getStore().loadPage(pag_inicial,iterador);
		}
		else{doc.save(pdfName);}
		}
		//--------------------------------------------------
		this.getStore().loadPage(pag_inicial,iterador);
	}
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.GridContainer.prototype.generateXml = function(xmlName,pag_inicial,pag_final) {
	
	var nameSpace = "scortjs";
	var worksheet = document.createElementNS(nameSpace,"Worksheet");
		worksheet.setAttribute("ss:Name", "Hoja1" );
	$this=this;
	if(this.store.proxy==null)
	{
		pag_inicial=pag_inicial-1;
		var pageSize=this.store.pageSize;
		if(pageSize==-1){											//no se definio un paginador, por ende todos los datos se muestran en la pagina 1
			pag_final=1;
			pageSize=this.store.totalData;
		}
		else{
			if(pag_final>Math.ceil(this.store.totalData/pageSize))  //si se pide un numero mayor que el numero de paginas que se tiene se ajusta a el numero maximo de paginas.
			pag_final=Math.ceil(this.store.totalData/pageSize);
		}
		var elemento=-1;
		var acumulador_pageSize=pageSize;
		if (pag_inicial>1){
			for (var t=0;t<pag_inicial;t++)
			{
				elemento=elemento+this.store.pageSize;
				acumulador_pageSize=acumulador_pageSize+pageSize;
			}
		}
		var table = document.createElementNS(nameSpace,"Table");
			var ExpandedRowCount=this.store.totalData+10;               	//determinar la cantidad rows del table
			var ExpandedColumnCount=10;										//todavia no se de donde sacar este dato
			table.setAttribute("ss:ExpandedColumnCount", ExpandedColumnCount );
			table.setAttribute("ss:ExpandedRowCount", ExpandedRowCount );
			table.setAttribute("x:FullColumns", "1" );
			table.setAttribute("x:FullRows", "1" );
			table.setAttribute("ss:DefaultColumnWidth", "60" );
			table.setAttribute("ss:DefaultRowHeight", "15" );
		
		var rowcabecera = document.createElementNS(nameSpace,"Row");
		rowcabecera.setAttribute("ss:Index", "1" );
		
		for (var i in this.config.columns)								//cabeceras
		{
			console.log(i);
			var cell = document.createElementNS(nameSpace,"Cell");
			cell.setAttribute("ss:Index",parseInt(i)+1 );
			var data = document.createElementNS(nameSpace,"Data");
			data.setAttribute("ss:Type", "String" );
			if(this.config.columns[i].type=="CheckColumn")
			{
				$(data).html(" ");
				//continue; 
			}
			else{
			$(data).html(this.config.columns[i].text);}
			cell.appendChild(data);
			rowcabecera.appendChild(cell);
		}
		table.appendChild(rowcabecera);

		while(pag_inicial!=pag_final)									//aca se le suma el 1 a pag_inicial q se le resto anteriormente
		{
			pag_inicial=pag_inicial+1;
			console.log(pag_inicial);
			while((elemento<acumulador_pageSize-1) && (elemento<parseInt(this.store.totalData)-1))	
			//for (var i in this.store.data)
			{	
				elemento=elemento+1;
				//pag_inicial=pag_inicial+1;
				var rowdatos = document.createElementNS(nameSpace,"Row");
				//rowdatos.setAttribute("ss:Index", parseInt(elemento)+2 );
				//var adentro=new Array();
				var v=0;
				for(var w in this.itemsObjs) 
				{
					var cell = document.createElementNS(nameSpace,"Cell");
					cell.setAttribute("ss:Index",v+1 );
					var data = document.createElementNS(nameSpace,"Data");
					data.setAttribute("ss:Type", "String" );
					//console.log(w);
					if(this.itemsObjs[w].customrenderer)
					{
						var valor=this.itemsObjs[w].renderer(0,0,this.store.data[elemento]);
						$(data).html(valor);
						//adentro.push(valor);
					}
					else if(w == "rowSelected")
					{
						$(data).html(" ");
					}
					else
					{	
						$(data).html(String(this.store.data[elemento][w]));
						//}	//console.log(w);
					}
					v=v+1;
					//console.log(w);
					cell.appendChild(data);
					rowdatos.appendChild(cell);
				}
				//console.log(adentro);
				table.appendChild(rowdatos);
				//rows1.push(adentro);
			}
			if(pag_inicial<pag_final)
			{
				acumulador_pageSize=acumulador_pageSize+pageSize;
				//doc.addPage();
				console.log("hola"+pag_inicial);
			}
		}

		worksheet.appendChild(table);
		var $root = (new XMLSerializer).serializeToString(worksheet);

		var downloadchar='<?xml version="1.0"?> <?mso-application progid="Excel.Sheet"?> <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40"> <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">  <Author>ususu</Author>  <LastAuthor>ususu</LastAuthor>  <Created>2015-10-08T17:19:08Z</Created>  <Version>14.00</Version> </DocumentProperties> <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">  <AllowPNG/> </OfficeDocumentSettings> <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> </ExcelWorkbook>';
		var restante='</Workbook>';
		downloadchar=downloadchar+$root+restante;

		//console.log($root);
		//return downloadchar;
		download(xmlName,downloadchar);
	}
	else
	{
		//var pag_inicial=1;
		//var pag_final=4;										//falta determinar numero de pag_final
		if(pag_final>$this.pagingToolbar.lastPage)
		pag_final=$this.pagingToolbar.lastPage;
		var table = document.createElementNS(nameSpace,"Table");
		var ExpandedRowCount=100;               		//falta determinar la cantidad rows del table
		var ExpandedColumnCount=10;										//todavia no se de donde sacar este dato
		table.setAttribute("ss:ExpandedColumnCount", ExpandedColumnCount );
		table.setAttribute("ss:ExpandedRowCount", ExpandedRowCount );
		table.setAttribute("x:FullColumns", "1" );
		table.setAttribute("x:FullRows", "1" );
		table.setAttribute("ss:DefaultColumnWidth", "60" );
		table.setAttribute("ss:DefaultRowHeight", "15" );
		var booleano=false;
//--------------------------------------------------fffffff---------------------------------------------------------------------------------------		
		var iterador=function(datass){
			//pag_inicial=pag_inicial+1;
			//console.log("hola");
			
			//if (pag_inicial==1){
			if (booleano==false){
				var rowcabecera = document.createElementNS(nameSpace,"Row");
				rowcabecera.setAttribute("ss:Index", "1" );
				for (var i in $this.config.columns)
				{
					console.log(i);
					var cell = document.createElementNS(nameSpace,"Cell");
					cell.setAttribute("ss:Index",parseInt(i)+1 );
					var data = document.createElementNS(nameSpace,"Data");
					data.setAttribute("ss:Type", "String" );
					if($this.config.columns[i].type=="CheckColumn")
					{
						$(data).html(" ");
						//continue; 
					}
					else{
					$(data).html($this.config.columns[i].text);}
					cell.appendChild(data);
					rowcabecera.appendChild(cell);
				}
				table.appendChild(rowcabecera);
				booleano=true;
			}
			for (var i in datass.Items)													
			{
				var rowdatos = document.createElementNS(nameSpace,"Row");
				//rowdatos.setAttribute("ss:Index", parseInt(i)+2 );
				//var adentro=new Array();
				var v=0;
				console.log(i)
				for(var w in $this.itemsObjs)
				{
					console.log(w)
					var cell = document.createElementNS(nameSpace,"Cell");
					cell.setAttribute("ss:Index",v+1 );
					var data = document.createElementNS(nameSpace,"Data");
					data.setAttribute("ss:Type", "String" );
					//console.log(w);
					if($this.itemsObjs[w].customrenderer)
					{
						var valor=$this.itemsObjs[w].renderer(0,0,datass.Items[i]);
						$(data).html(valor);
						//adentro.push(valor);
					}
					else if(w == "rowSelected")
					{
						$(data).html(" ");
					}
					else
					{	
						$(data).html(String(datass.Items[i][w]));
						//}	//console.log(w);
					}
					v=v+1;
					//console.log(w);
					cell.appendChild(data);
					rowdatos.appendChild(cell);
				}
				//console.log(adentro);
				table.appendChild(rowdatos);
				//rows1.push(adentro);
			}
			pag_inicial=pag_inicial+1;
			if(pag_inicial<=pag_final)//parseInt(this.pagingToolbar.lastPage)+1	)
			{
				$this.getStore().loadPage(pag_inicial,iterador);
			}
			else
			{
				worksheet.appendChild(table);
				var $root = (new XMLSerializer).serializeToString(worksheet);
				var downloadchar='<?xml version="1.0"?> <?mso-application progid="Excel.Sheet"?> <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40"> <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">  <Author>ususu</Author>  <LastAuthor>ususu</LastAuthor>  <Created>2015-10-08T17:19:08Z</Created>  <Version>14.00</Version> </DocumentProperties> <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">  <AllowPNG/> </OfficeDocumentSettings> <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> </ExcelWorkbook>';
				var restante='</Workbook>';
				downloadchar=downloadchar+$root+restante;
				//console.log($root);
				//return downloadchar;
				download(xmlName,downloadchar);
			}
		}
//--------------------------------------------------fffffff---------------------------------------------------------------------------------------
		this.getStore().loadPage(pag_inicial,iterador);
	}
	
	/*worksheet.appendChild(table);
	var $root = (new XMLSerializer).serializeToString(worksheet);
	
	
	var downloadchar='<?xml version="1.0"?> <?mso-application progid="Excel.Sheet"?> <Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" xmlns:html="http://www.w3.org/TR/REC-html40"> <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">  <Author>ususu</Author>  <LastAuthor>ususu</LastAuthor>  <Created>2015-10-08T17:19:08Z</Created>  <Version>14.00</Version> </DocumentProperties> <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">  <AllowPNG/> </OfficeDocumentSettings> <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> </ExcelWorkbook>';
	var restante='</Workbook>';
	downloadchar=downloadchar+$root+restante;

	//console.log($root);
	return downloadchar;*/

}













