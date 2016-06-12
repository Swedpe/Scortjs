Components = {
    objects: new Array(),
    undefinedObjects: new Array(),
	activeComponent: null,
    idsObjsAndPosition: {},
    counterComponents: 0,
	checkExternalClick: null,

    create : function(type, dataObj) {
        var element = new Components[type](dataObj);
        // element.position = this.counterComponents;

        // Para manejar los componentes creados por el framework
		if(this.undefinedObjects.length==0){
			element.position = this.counterComponents;
			this.objects[this.counterComponents] = element;
			if(this.idsObjsAndPosition[element.id] == undefined)
				this.idsObjsAndPosition[element.id] = new Array();
			
			this.idsObjsAndPosition[element.id].push(element.position);
			this.counterComponents++;
			

		 } else{
			 element.position = this.undefinedObjects[this.undefinedObjects.length-1];
			this.objects[this.undefinedObjects[this.undefinedObjects.length-1]] = element;
			if(this.idsObjsAndPosition[element.id] == undefined)
				this.idsObjsAndPosition[element.id] = new Array();
			
			this.idsObjsAndPosition[element.id].push(this.undefinedObjects[this.undefinedObjects.length-1]);
			this.undefinedObjects.splice(this.undefinedObjects.length-1,1);
			if(element.id==undefined){
					console.log("undefined")
				}
			}
		// console.log(this.undefinedObjects.length);
		
        element.create();
        return element;
    },


    getComponentById: function(id) {
        var positions = this.idsObjsAndPosition[id];
        if(positions == undefined || positions.length == 0)
            return undefined;
        else
            return this.objects[positions[0]];
        /*
        for(var i in this.objects) {
            if(this.objects[i].id == id)
                return this.objects[i];
        }
        return undefined;
        */
    },

    formatString: function(str) {
        var newStr = str;
        for (var i = 1; i < arguments.length; i++) {
            var regex = new RegExp('\\{' + (i-1) + '\}', 'g');
            newStr = newStr.replace(regex, arguments[i]);
        }
        return newStr;
    },

    formatDate: function(date, format) {
        return new Date(date).toString(format);
    },
	  formatTime: function(time, format) {
        return new Time(time).toString(format);
    },

    Component : function(dataObj) {},
    InputField: function(dataObj){
		this.init(dataObj);
	},

   Component : function(dataObj) {},
    InputRow: function(dataObj){
		this.init(dataObj);
	},

	Separator: function(dataObj) {
        this.init(dataObj);
    },
	TextArea: function(dataObj) {
        this.init(dataObj);
    },
    ActionColumn: function(dataObj) {
        this.init(dataObj);
    },
    Button: function(dataObj) {
        this.init(dataObj);
    },
	onoffswitch: function(dataObj) {
        this.init(dataObj);
    },
	MenuScort: function(dataObj) {
        this.init(dataObj);
    },
	MenuItem: function(dataObj) {
        this.init(dataObj);
    },
	FreeDiv: function(dataObj) {
        this.init(dataObj);
    },
    ProgressBar: function(dataObj) {
        this.init(dataObj);
    },
	colorPicker: function(dataObj) {
        this.init(dataObj);
    },
	EasyPieChart: function(dataObj) {
        this.init(dataObj);
    },
	svgFloatingMenu: function(dataObj) {
        this.init(dataObj);
    },
	AutoCompleteInputField: function(dataObj) {
        this.init(dataObj);
    },
    CheckboxField: function(dataObj) {
        this.init(dataObj);
    },

    CheckColumn: function(dataObj) {
        this.init(dataObj);
    },
    HtmlScreenGrid: function(dataObj) {
        this.init(dataObj);
    },

    ComboBox: function(dataObj) {
        this.init(dataObj);
    },

    DataProxy: function(dataObj) {
        this.init(dataObj);
    },

    DateColumn: function(dataObj) {
        this.init(dataObj);
    },
	ToolsColumn: function(dataObj) {
        this.init(dataObj);
    },
    DateField: function(dataObj) {
        this.init(dataObj);
    },
	DatePicker: function(dataObj) {
        this.init(dataObj);
    },
	Timepicker: function(dataObj) {
        this.init(dataObj);
    },

    ClockPicker: function(dataObj) {
        this.init(dataObj);
    },
    FileField: function(dataObj) {
        this.init(dataObj);
    },

    Form: function(dataObj) {
        this.init(dataObj);
    },

    GridColumn: function(dataObj) {
        this.init(dataObj);
    },

    GridContainer: function(dataObj) {
        this.init(dataObj);
    },

	GridContainer: function(dataObj) {
        this.init(dataObj);
    },

	Sidebar: function(dataObj) {
        this.init(dataObj);
    },

	SidebarItem: function(dataObj) {
        this.init(dataObj);
    },


    Label: function(dataObj) {
        this.init(dataObj);
    },

	Image: function(dataObj) {
        this.init(dataObj);
    },

	FileUploader: function(dataObj) {
        this.init(dataObj);
    },

    MenuPanel: function(dataObj) {
        this.init(dataObj);
    },

    NumberColumn: function(dataObj)     {
        this.init(dataObj);
    },

    NumberField: function(dataObj) {
        this.init(dataObj);
    },

    PagingToolbar: function(dataObj) {
        this.init(dataObj);
    },

	GridContainerTitle: function(dataObj) {
        this.init(dataObj);
    },

	ResizableGrid: function(dataObj) {
        this.init(dataObj);
    },

    Panel: function(dataObj) {
        this.init(dataObj);
    },

    Slider : function(dataObj) {
        this.init(dataObj);
    },

    SplitButton: function(dataObj) {
        this.init(dataObj);
    },

    Splitter: function(dataObj) {
        this.init(dataObj);
    },

    StatusBar: function(dataObj) {
        this.init(dataObj);
    },

    StoreContainer: function(dataObj) {
        this.init(dataObj);
    },
	fontawesomegrid: function(dataObj) {
        this.init(dataObj);
    },
    Tab : function(dataObj) {
        this.init(dataObj);
    },

    TabPanel : function(dataObj) {
        this.init(dataObj);
    },

    AccordeonContainer : function(dataObj) {
        this.init(dataObj);
    },

	AccordeonItem : function(dataObj) {
        this.init(dataObj);
    },
	//elementos svg
	svgToolTip : function(dataObj) {
        this.init(dataObj);
    },
	SvgContainer : function(dataObj) {
        this.init(dataObj);
    },
    PolarSvg : function(dataObj) {
        this.init(dataObj);
    },
	curvaS: function(dataObj) {
        this.init(dataObj);
    },
	pie3DSvg : function(dataObj) {
        this.init(dataObj);
    },
	WBSTree : function(dataObj) {
        this.init(dataObj);
    },

	WBSNode: function(dataObj) {
        this.init(dataObj);
    },
	
	WBSActividad: function(dataObj) {
        this.init(dataObj);
    },

	WBSMini: function(dataObj) {
        this.init(dataObj);
    },

	Pert: function(dataObj) {
        this.init(dataObj);
    },

	GrafoNodo: function(dataObj) {
        this.init(dataObj);
    },

	GrafoEdge: function(dataObj) {
        this.init(dataObj);
    },

    TextField: function(dataObj) {
        this.init(dataObj);
    },

    ToolBar: function(dataObj) {
        this.init(dataObj);
    },

    Window : function(dataObj) {
        this.init(dataObj);
    }
}
//##############################################################################
Components.Component.prototype.add = function(component){
//tomar en cuenta que component es una estructura y no es el objeto en si,
    if (Components.getComponentById(component.id)==undefined){
		this.items.push(component);
		return this.drawItem(component);
	}
	else{
		console.log('Id repetido');
		return false;
	}
}
//##############################################################################
Components.Component.prototype.remove = function(idComponent){
    for(var i in this.items) {
        if(this.items[i].id == idComponent) {
            this.items.splice(i,1);
            this.itemsObjs[i].destroy();
            this.itemsObjs.splice(i,1);
            break;
        }
    }
}
//##############################################################################
Components.Component.prototype.resizeBody = function(){}
//##############################################################################
Components.Component.prototype.show = function(){
    if(this.config.hidden) {
        this.hide();
    }
    else {
        this.divContainer.show();
        if(this.itemsObjs != undefined) {
            for(var i in this.itemsObjs) {
                this.itemsObjs[i].show();
            }
        }

 }
 return this;
}


//##############################################################################
Components.Component.prototype.hide = function() {
    this.divContainer.hide();
    /*
    if(this.itemsObjs != undefined) {
        for(var i in this.itemsObjs) {
            this.itemsObjs[i].hide();
        }
    }*/
}
//##############################################################################
Components.Component.prototype.enable = function() {
    this.config.enabled = true;
    this.divContainer.removeClass(this.className + '-disabled').addClass(this.className + '-enabled');
}
//##############################################################################
Components.Component.prototype.disable = function() {
    this.config.enabled = false;
    this.divContainer.removeClass(this.className + '-enabled').addClass(this.className + '-disabled');
}
//##############################################################################
Components.Component.prototype.create = function() {
	//El componente de botton no requiere de un div, a nivel superior
			this.divContainer = $('<div class="'+this.className+'" id="'+this.id+'"></div>');
			this.container.append(this.divContainer);
}
//##############################################################################

Components.Component.prototype.destroy = function() {
	//destruye componente, iniciando primero la destruccion de sus componentes hijos [this.itemsObjs]
    if(this.itemsObjs != undefined) {
        for(var i in this.itemsObjs) {
            this.itemsObjs[i].destroy();
        }
    }
	//se destruye la referencia al componente en el array global Components.objects
    delete Components.objects[this.position];
	Components.undefinedObjects.push(this.position);	//al eliminar el componente del array global se deja un espacio [undefined] por llenar, almacenamos el indice
    var pos = Components.idsObjsAndPosition[this.id].indexOf(this.position);
    Components.idsObjsAndPosition[this.id].splice(pos, 1);//se remueve el elemento de el array idsObjsAndPosition
	if(this.divContainer)		//la mayoria de componentes tienen this.divContainer, como elemento visual principal, 
		this.divContainer.remove();	//eliminamos el divcontainer.
}
//##############################################################################
Components.Component.prototype.setPosition = function(posX, posY) {
    this.setPositionX(posX);
    this.setPositionY(posY);
}
//##############################################################################
Components.Component.prototype.setPositionX = function(posX) {
    this.divContainer.css("left", posX);
}
//##############################################################################
Components.Component.prototype.setPositionY = function(posY) {
    this.divContainer.css("top", posY);
}
//##############################################################################
Components.Component.prototype.setHeight = function(height) {
    this.divContainer.css("height", height);
}
//##############################################################################
Components.Component.prototype.setWidth = function(width) {
    this.divContainer.css("width", width);
}
//########################################################################################################################
Components.Component.prototype.getConfig = function(configOption) {
 //obtiene una opcion de configuracion de un componente si no es en el mismo en su padre recursivamente.
	if((this.config[configOption]!=null)&&(this.config[configOption]!=undefined)){
		return this.config[configOption];
	}else{
			if((this.config.parent!='')&&(this.config.parent!=undefined)){
				return this.config.parent.getConfig(configOption);
			}
			else{
				return null;
			}
	}
}
//##############################################################################
if(typeof(Validador)!="undefined"){
Components.Component.prototype.validador =  new Validador();}
Components.Separator.prototype = new Components.Component();
Components.TextArea.prototype = new Components.Component();
Components.ActionColumn.prototype = new Components.Component();
Components.Button.prototype = new Components.Component();
Components.onoffswitch.prototype = new Components.Component();
Components.MenuScort.prototype = new Components.Component();
Components.MenuItem.prototype = new Components.Component();
Components.FileUploader.prototype = new Components.Component();
Components.FreeDiv.prototype = new Components.Component();
Components.ProgressBar.prototype = new Components.Component();
Components.colorPicker.prototype = new Components.Component();
Components.EasyPieChart.prototype= new Components.Component();
Components.svgFloatingMenu.prototype= new Components.Component();
Components.AutoCompleteInputField.prototype = new Components.Component();
Components.CheckboxField.prototype = new Components.Component();
Components.CheckColumn.prototype = new Components.Component();
Components.ComboBox.prototype = new Components.Component();
Components.DateColumn.prototype = new Components.Component();
Components.ToolsColumn.prototype = new Components.Component();
Components.FileField.prototype = new Components.Component();
Components.Form.prototype = new Components.Component();
Components.GridColumn.prototype = new Components.Component();
Components.GridContainer.prototype = new Components.Component();
Components.Label.prototype = new Components.Component();
Components.Image.prototype = new Components.Component();
Components.MenuPanel.prototype = new Components.Component();
Components.NumberColumn.prototype = new Components.Component();
Components.ResizableGrid.prototype = new Components.Component();
Components.PagingToolbar.prototype = new Components.Component();
Components.GridContainerTitle.prototype = new Components.Component();
Components.fontawesomegrid.prototype = new Components.Component();
Components.Panel.prototype = new Components.Component();
Components.Slider.prototype = new Components.Component();
Components.SplitButton.prototype = new Components.Component();
Components.Splitter.prototype = new Components.Component();
Components.StatusBar.prototype = new Components.Component();
Components.Tab.prototype = new Components.Component();
Components.TabPanel.prototype = new Components.Component();
Components.AccordeonContainer.prototype = new Components.Component();
Components.AccordeonItem.prototype = new Components.Component();
Components.WBSTree.prototype = new Components.Component();
Components.WBSNode.prototype = new Components.Component();
Components.WBSActividad.prototype = new Components.Component();
Components.WBSMini.prototype = new Components.Component();
Components.svgToolTip.prototype = new Components.Component();
Components.SvgContainer.prototype = new Components.Component();
Components.PolarSvg.prototype = new Components.Component();
Components.curvaS.prototype = new Components.Component();
Components.pie3DSvg.prototype = new Components.Component();
Components.Pert.prototype = new Components.Component();
Components.GrafoNodo.prototype = new Components.Component();
Components.GrafoEdge.prototype = new Components.Component();
Components.ToolBar.prototype = new Components.Component();
Components.Window.prototype = new Components.Component();
Components.HtmlScreenGrid.prototype = new Components.Component();
Components.InputField.prototype = new Components.Component();
Components.InputRow.prototype = new Components.Component();
Components.TextField.prototype = new Components.Component();
Components.NumberField.prototype = new Components.Component();
Components.DateField.prototype = new Components.Component();
Components.DatePicker.prototype = new Components.Component();
Components.Timepicker.prototype = new Components.Component();
Components.ClockPicker.prototype = new Components.Component();
Components.Sidebar.prototype = new Components.Component();
Components.SidebarItem.prototype = new Components.Component();
//----------------------------------------------------Cargar Componente Pesado 300k------------------------------------------------------------------------------
var tinimcePostLoad = new Array();				//los componentes que van a ser modificados por tinymce [TextArea, ]
var visiblesSideBar = new Array();			//los componentes que van a ser modificados por tinymce [TextArea, ]

function Loadtinymce(){
	$.getScript("//tinymce.cachefly.net/4.2/tinymce.min.js", function(){
		//Cuando ya esta cargadpo tynymce inicializa los componentes que le van esperando.
		for(elemento in tinimcePostLoad){
			console.log("test aqui");
			tinymce.init(tinimcePostLoad[elemento].params);
			//tinimcePostLoad[elemento].element.hide();
		}
		tinimcePostLoad = new Array();
	});
	return true;
}

