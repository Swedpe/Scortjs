/**
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
	Color Picker v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].

	Componente Basado en el trabajo de:
	Brian Grinstead  ---->  https://github.com/bgrins/spectrum
*/

Components.colorPicker.prototype.init = function (dataObj) {
	this.type = 'colorPicker';
	this.config =  {
		name:'',
		parent:'',							//se usa especialmente cuando es parte de un form
		container: $('body'),
        // Callbacks
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,
        // Options
        color: false,
        flat: false,
		enabled: null,					//controlar el atributo  disabled/enabled del text input
        showInput: false,							//mostrar o no un inputfield en la ventana flotante
        allowEmpty: false,				
        showButtons: true,							//mostrar botones
        clickoutFiresChange: true,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        hideAfterPaletteSelect: false,
        togglePaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "Escoger",
        togglePaletteMoreText: "more",
        togglePaletteLessText: "less",
        clearText: "Clear Color Selection",
        noColorSelectedText: "No Color Selected",
        preferredFormat: false,
        containerClassName: "",
        showAlpha: false,
        theme: "sp-light",
        palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
        selectionPalette: [],
        disabled: false,
        offset: null
    };
	
	var $this = this;
	this.opts = $.extend({}, this.config, dataObj);							//usar los datos y extender los parametros por defecto 
	this.config = this.opts;
	this.inputElement = Components.create('TextField',{
				CodeHelper:$this,
				container:this.opts.container,
				parent:this,
				listeners: {
					specialKey: function(obj, event){
						if (event.keyCode == 13) { 
							var Cpicker = obj.CodeHelper;
							var value = obj.getValue();
							if ((value === null || value === "") && Cpicker.allowEmpty) {
								Cpicker.set(null);
								Cpicker.updateOriginalInput(true);
							}
							else {
								var tiny = tinycolor(value);
								if (tiny.isValid()) {
									Cpicker.set(tiny);
									Cpicker.updateOriginalInput(true);
								}
								else {
									obj.divInput.addClass("sp-validation-error");
								}
							}
						}
				}
				},
				addon:{
					addonType: 'button',
					position:'right',
				icon:{
					type:'fa',
					class:'fa-square',
					
					},
					
				css:{'margin-bottom': '0'},
				tooltip:'Color',	  
				handler: function(e) {					//cuando se le da click al botton addon.
						//console.log(e.data.OBJ);
						if (e.data.OBJ.parent.parent.enabled) {
						e.data.OBJ.parent.parent.toggle();
						}
						e.stopPropagation();
						if (!$(e.target).is("input")) {
						e.preventDefault();
						}
				}
			},
				
		//},
		});
	var element = this.inputElement.divInput;
	//creamos un input para poner el colorPicker
	var $this = this;														//referencia al componente, util para lugares fuera de contexto de this
	
	this.opts.callbacks = {
		'move': bind(this.opts.move, element),
		'change': bind(this.opts.change, element),
		'show': bind(this.opts.show, element),
		'hide': bind(this.opts.hide, element),
		'beforeShow': bind(this.opts.beforeShow, element)
	};

	var opts = this.opts;
	this.IE = !!/msie/i.exec( window.navigator.userAgent );
	
	this.rgbaSupport = (function() {									//determinar si el navegador soporta RGBA
	function contains( str, substr ) {
		return !!~('' + str).indexOf(substr);
	}

	var elem = document.createElement('div');
	var style = elem.style;
	style.cssText = 'background-color:rgba(0,0,0,.5)';
	return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
	})();
	this.replaceInput = [
	"<div class='sp-replacer'>",
		"<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
	"</div>"
	].join('');
	this.markup = (function () {									//html basico del componente, si el navegador es IE tiene un comportamiento especial

	// IE does not support gradients with multiple stops, so we need to simulate
	//  that for the rainbow slider with 8 divs that each have a single gradient
	var gradientFix = "";
	if ($this.IE) {
		for (var i = 1; i <= 6; i++) {
			gradientFix += "<div class='sp-" + i + "'></div>";
		}
	}

	return [
		"<div class='sp-container sp-hidden'>",
			"<div class='sp-palette-container'>",
				"<div class='sp-palette sp-thumb sp-cf'></div>",
				"<div class='sp-palette-button-container sp-cf'>",
					"<button type='button' class='sp-palette-toggle'></button>",
				"</div>",
			"</div>",
			"<div class='sp-picker-container'>",
				"<div class='sp-top sp-cf'>",
					"<div class='sp-fill'></div>",
					"<div class='sp-top-inner'>",
						"<div class='sp-color'>",
							"<div class='sp-sat'>",
								"<div class='sp-val'>",
									"<div class='sp-dragger'></div>",
								"</div>",
							"</div>",
						"</div>",
						"<div class='sp-clear sp-clear-display'>",
						"</div>",
						"<div class='sp-hue'>",
							"<div class='sp-slider'></div>",
							gradientFix,
						"</div>",
					"</div>",
					"<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
				"</div>",
				"<div class='sp-input-container sp-cf'>",
					"<input class='sp-input' type='text' spellcheck='false'  />",
				"</div>",
				"<div class='sp-initial sp-thumb sp-cf'></div>",
				"<div class='sp-button-container sp-cf'>",
					"<a class='sp-cancel' href='#'></a>",
					"<button type='button' class='sp-choose'></button>",
				"</div>",
			"</div>",
		"</div>"
	].join("");
})();
		
		this.flat = opts.flat;										//si flat es false, se muestra todo el componente de un golpe, con flat true solo se muestra como addon del inputfield
		this.name = opts.name;
        this.showSelectionPalette = opts.showSelectionPalette;
        this.localStorageKey = opts.localStorageKey;
        this.theme = opts.theme;
        this.callbacks = opts.callbacks;
        this.resize = throttle(this.reflow, 10);
        this.visible = false;
        this.isDragging = false;
        this.dragWidth = 0;
        this.dragHeight = 0;
        this.dragHelperHeight = 0;
        this.slideHeight = 0;
        this.slideWidth = 0;
        this.alphaWidth = 0;
        this.alphaSlideHelperWidth = 0;
        this.slideHelperHeight = 0;
        this.currentHue = 0;
        this.currentSaturation = 0;
        this.currentValue = 0;
        this.currentAlpha = 1;
        this.palette = [];
        this.paletteArray = [];
        this.paletteLookup = {};
        this.selectionPalette = opts.selectionPalette.slice(0);
        this.maxSelectionSize = opts.maxSelectionSize;
        this.draggingClass = "sp-dragging";
        this.shiftMovementDirection = null;
		//creacion de elementos y asignacion de variables a partir de partes de la interface
        this.doc = element[ 0 ].ownerDocument;
		this.body = this.doc.body;
        this.boundElement = $(element[0]);												//elemento al que esta asociado el control y todo sus controles
        this.disabled = false;
        this.container = $(this.markup, this.doc).addClass(this.theme);
        this.pickerContainer = this.container.find(".sp-picker-container");
		this.dragger = this.container.find(".sp-color");
        this.dragHelper = this.container.find(".sp-dragger");
        this.slider = this.container.find(".sp-hue");
        this.slideHelper = this.container.find(".sp-slider");
        this.alphaSliderInner = this.container.find(".sp-alpha-inner");
		this.alphaSlider = this.container.find(".sp-alpha");
        this.alphaSlideHelper = this.container.find(".sp-alpha-handle");
        this.textInput = this.container.find(".sp-input");								//elemento input dentro de la ventana que se despliega, no es el input principal
        this.paletteContainer = this.container.find(".sp-palette");
        this.initialColorContainer = this.container.find(".sp-initial");
        this.cancelButton = this.container.find(".sp-cancel");
        this.clearButton = this.container.find(".sp-clear");
        this.chooseButton = this.container.find(".sp-choose");
        this.toggleButton = this.container.find(".sp-palette-toggle");
		
        this.isInput = this.boundElement.is("input");
        this.isInputTypeColor = this.isInput && this.boundElement.attr("type") === "color" && this.inputTypeColorSupport();
        this.shouldReplace = this.isInput && !this.flat;
		this.replacer = this.inputElement.addon.divContainer//(this.shouldReplace) ? $(this.replaceInput).addClass(this.theme).addClass(this.opts.className) : $([]);
        this.offsetElement = this.replacer;
        this.previewElement = this.replacer.find('i');
        this.initialColor = this.opts.color || (this.isInput && this.boundElement.val());
		this.colorOnShow = false;
        this.preferredFormat = this.opts.preferredFormat;
        this.currentPreferredFormat = this.preferredFormat;
        this.clickoutFiresChange = !this.opts.showButtons || this.opts.clickoutFiresChange;
        this.isEmpty = !this.initialColor;
        this.allowEmpty = this.opts.allowEmpty && !this.isInputTypeColor;
		this.initialize();

		var spect = {
		show: this.show,
		hide: this.hide,
		toggle: this.toggle,
		reflow: this.reflow,
		option: this.option,
		enable: this.enable,
		disable: this.disable,
		offset: this.setOffset,
		set: function (c) {
			this.set(c);
			this.updateOriginalInput();
		},
		get: this.get,
		destroy: this.destroy,
		container: this.container
		};

		spect.id = 1;
    this.localization = { };
    this.palettes = { };
	//control de enabled desde el componente hacia los padres
	if(this.config.enabled==null){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true;
		}
	}
	console.log(this.enabled);
	this.parent = this.config.parent;
    return this;
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.colorPicker.prototype.create = function(){
	this.enabled?this.enable():this.disable();
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.colorPicker.prototype.paletteTemplate = function  (p, color, className, opts) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var current = p[i];
            if(current) {
                var tiny = tinycolor(current);
                var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                c += (tinycolor.equals(color, current)) ? " sp-thumb-active" : "";
                var formattedString = tiny.toString(opts.preferredFormat || "rgb");
                var swatchStyle = this.rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
                html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
            } else {
                var cls = 'sp-clear-display';
                html.push($('<div />')
                    .append($('<span data-color="" style="background-color:transparent;" class="' + cls + '"></span>')
                        .attr('title', opts.noColorSelectedText)
                    )
                    .html()
                );
            }
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    Components.colorPicker.prototype.hideAll = function () {
		this.hide();
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.colorPicker.prototype.disable = function() {
	//change input state to disable, el componente ya no sera editable
	this.enabled=false;
	this.inputElement.divInput.prop('disabled', true);
	this.inputElement.disable();
	// console.log("NumberField funcion disable "+this.enabled);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	
Components.colorPicker.prototype.enable = function() {
	//change input state to enable, el componente sera editable
	this.enabled=true;
	this.inputElement.divInput.prop('disabled', false);
	this.inputElement.enable();
	// console.log("NumberField funcion enable "+this.enabled);
}
 //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------   
 Components.colorPicker.prototype.applyOptions = function () {

 if (this.opts.showPaletteOnly) {
                this.opts.showPalette = true;
            }

            this.toggleButton.text(this.opts.showPaletteOnly ? this.opts.togglePaletteMoreText : this.opts.togglePaletteLessText);

            if (this.opts.palette) {
                this.palette = this.opts.palette.slice(0);
                this.paletteArray = $.isArray(this.palette[0]) ? this.palette : [this.palette];
                this.paletteLookup = {};
                for (var i = 0; i < this.paletteArray.length; i++) {
                    for (var j = 0; j < this.paletteArray[i].length; j++) {
                        var rgb = tinycolor(this.paletteArray[i][j]).toRgbString();
                        this.paletteLookup[rgb] = true;
                    }
                }
            }

            this.container.toggleClass("sp-flat", this.flat);
            this.container.toggleClass("sp-input-disabled", !this.opts.showInput);
            this.container.toggleClass("sp-alpha-enabled", this.opts.showAlpha);
            this.container.toggleClass("sp-clear-enabled", this.allowEmpty);
            this.container.toggleClass("sp-buttons-disabled", !this.opts.showButtons);
            this.container.toggleClass("sp-palette-buttons-disabled", !this.opts.togglePaletteOnly);
            this.container.toggleClass("sp-palette-disabled", !this.opts.showPalette);
            this.container.toggleClass("sp-palette-only", this.opts.showPaletteOnly);
            this.container.toggleClass("sp-initial-disabled", !this.opts.showInitial);
            this.container.addClass(this.opts.className).addClass(this.opts.containerClassName);

            this.reflow();
        }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------		

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------			
Components.colorPicker.prototype.initialize =  function() {

	if (this.IE) {
		this.container.find("*:not(input)").attr("unselectable", "on");
	}
	this.applyOptions();
	if (!this.allowEmpty) {
		this.clearButton.hide();
	}

	if (this.flat) {
		this.boundElement.after(this.container).hide();
	}
	else {

		var appendTo = this.opts.appendTo === "parent" ? this.boundElement.parent() : $(this.opts.appendTo);
		if (appendTo.length !== 1) {
			appendTo = $("body");
		}

		appendTo.append(this.container);
	}

	this.updateSelectionPaletteFromStorage();
	
	this.boundElement.bind("click touchstart", {OBJ:this}, function (e) {
		if (!e.data.OBJ.disabled) {
			e.data.OBJ.toggle();
		}

		e.stopPropagation();

		if (!$(e.target).is("input")) {
			e.preventDefault();
		}
	});

	if(this.boundElement.is(":disabled") || (this.opts.disabled === true)) {
		this.disable();
	}

	// Prevent clicks from bubbling up to document.  This would cause it to be hidden.
	this.container.click(stopPropagation);

	// Handle user typed input
	this.textInput.change(this.setFromTextInput);
	this.textInput.bind("paste", function () {
		setTimeout(this.setFromTextInput, 1);
	});
	//textinput es el input que esta en la ventana flotante
	this.textInput.keydown({OBJ:this},function (e) { if (e.keyCode == 13) { 
	e.data.OBJ.setFromTextInput(); 
	} });
	//
	//this.textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

	this.cancelButton.text(this.opts.cancelText);
	this.cancelButton.bind("click", {OBJ:this}, function (e) {
		var $this = e.data.OBJ;
		e.stopPropagation();
		e.preventDefault();
		$this.revert();
		$this.hide();
	});

	this.clearButton.attr("title", this.opts.clearText);
	this.clearButton.bind("click", function (e) {
		e.stopPropagation();
		e.preventDefault();
		isEmpty = true;
		move();

		if(flat) {
			//for the flat style, this is a change event
			$this.updateOriginalInput(true);
		}
	});

	this.chooseButton.text(this.opts.chooseText);
	this.chooseButton.bind("click", {OBJ:this}, function (e) {
		var $this = e.data.OBJ;
		e.stopPropagation();
		e.preventDefault();

		if ($this.IE && $this.textInput.is(":focus")) {
			$this.textInput.trigger('change');
		}

		if ($this.isValid()) {
			$this.updateOriginalInput(true);
			$this.hide();
		}
	});

	this.toggleButton.text(this.opts.showPaletteOnly ? this.opts.togglePaletteMoreText : this.opts.togglePaletteLessText);
	this.toggleButton.bind("click", {OBJ:this}, function (e) {
		e.stopPropagation();
		e.preventDefault();

		this.opts.showPaletteOnly = !this.opts.showPaletteOnly;

		// To make sure the Picker area is drawn on the right, next to the
		// Palette area (and not below the palette), first move the Palette
		// to the left to make space for the picker, plus 5px extra.
		// The 'applyOptions' function puts the whole container back into place
		// and takes care of the button-text and the sp-palette-only CSS class.
		if (!this.opts.showPaletteOnly && !flat) {
			container.css('left', '-=' + (pickerContainer.outerWidth(true) + 5));
		}
		console.log('call incomplete');
		 e.data.OBJ.applyOptions();
	});

	draggable(this.alphaSlider, function (dragX, dragY, e) {
		this.currentAlpha = (dragX / alphaWidth);
		isEmpty = false;
		if (e.shiftKey) {
			this.currentAlpha = Math.round(this.currentAlpha * 10) / 10;
		}

		this.move();
	}, this.dragStart, this.dragStop,this);

	draggable(this.slider, function (dragX, dragY) {
		this.currentHue = parseFloat(dragY / slideHeight);
		isEmpty = false;
		if (!this.opts.showAlpha) {
			this.currentAlpha = 1;
		}
		this.move();
	}, this.dragStart, this.dragStop,this);

	draggable(this.dragger, function (dragX, dragY, e) {

		// shift+drag should snap the movement to either the x or y axis.
		if (!e.shiftKey) {
			shiftMovementDirection = null;
		}
		else if (!shiftMovementDirection) {
			var oldDragX = this.currentSaturation * dragWidth;
			var oldDragY = dragHeight - (this.currentValue * dragHeight);
			var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

			shiftMovementDirection = furtherFromX ? "x" : "y";
		}

		var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
		var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

		if (setSaturation) {
			this.currentSaturation = parseFloat(dragX / dragWidth);
		}
		if (setValue) {
			this.currentValue = parseFloat((dragHeight - dragY) / dragHeight);
		}

		isEmpty = false;
		if (!this.opts.showAlpha) {
			currentAlpha = 1;
		}

		this.move();

	}, this.dragStart, this.dragStop,this);

	if (!!this.initialColor) {
		this.set(this.initialColor);

		// In case color was black - update the preview UI and set the format
		// since the set function will not run (default color is black).
		this.updateUI();
		this.currentPreferredFormat = this.preferredFormat || tinycolor(this.initialColor).format;

		this.addColorToSelectionPalette(this.initialColor);
	}
	else {
		this.updateUI();
	}

	if (this.flat) {
		this.show();
	}

	function paletteElementClick(e) {
		var $this = e.data.OBJ;
		console.log($(e.target).closest(".sp-thumb-el").data("color"));
		if (e.data && e.data.ignore) {
			$this.set($(e.target).closest(".sp-thumb-el").data("color"));
			$this.move();
		}
		else {
			$this.set($(e.target).closest(".sp-thumb-el").data("color"));
			$this.move();
			$this.updateOriginalInput(true);
			if ($this.opts.hideAfterPaletteSelect) {
			  $this.hide();
			}
		}

		return false;
	}

	var paletteEvent = this.IE ? "mousedown" : "click touchstart";
	this.paletteContainer.delegate(".sp-thumb-el", paletteEvent,{OBJ:this},paletteElementClick);
	this.initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, {ignore: true, OBJ:this}, paletteElementClick);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//funcion extraida para poder probar
        Components.colorPicker.prototype.updateSelectionPaletteFromStorage = function () {

            if (this.localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[this.localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[this.localStorageKey];
                        $.each(oldPalette, function(i, c) {
                             this.addColorToSelectionPalette(c);
                        });
                    }
                }
                catch(e) { }

                try {
                    this.selectionPalette = window.localStorage[this.localStorageKey].split(";");
                }
                catch (e) { }
            }
        }

        Components.colorPicker.prototype.addColorToSelectionPalette = function(color) {
            if (this.showSelectionPalette) {
                var rgb = tinycolor(color).toRgbString();
                if (!this.paletteLookup[rgb] && $.inArray(rgb, this.selectionPalette) === -1) {
                    this.selectionPalette.push(rgb);
                    while(this.selectionPalette.length > this.maxSelectionSize) {
                        this.selectionPalette.shift();
                    }
                }

                if (this.localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[this.localStorageKey] = this.selectionPalette.join(";");
                    }
                    catch(e) { }
                }
            }
        }

        Components.colorPicker.prototype.getUniqueSelectionPalette = function () {
			//
            var unique = [];
            if (this.opts.showPalette) {
                for (var i = 0; i < this.selectionPalette.length; i++) {
                    var rgb = tinycolor(this.selectionPalette[i]).toRgbString();

                    if (!this.paletteLookup[rgb]) {
                        unique.push(this.selectionPalette[i]);
                    }
                }
            }

            return unique.reverse().slice(0, this.opts.maxSelectionSize);
        }

        Components.colorPicker.prototype.drawPalette = function () {

            var currentColor = this.get();
			var $this = this;
            var html = $.map(this.paletteArray, function (palette, i) {
                return $this.paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, $this.opts);
            });

            this.updateSelectionPaletteFromStorage();

            if (this.selectionPalette) {
                html.push(this.paletteTemplate(this.getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", this.opts));
            }

            this.paletteContainer.html(html.join(""));
        }

         Components.colorPicker.prototype.drawInitial = function () {
            if (this.opts.showInitial) {
                var initial = this.colorOnShow;
                var current = this.get();
                this.initialColorContainer.html(this.paletteTemplate([initial, current], current, "sp-palette-row-initial", this.opts));
            }
        }

        Components.colorPicker.prototype.dragStart = function () {
            if (this.dragHeight <= 0 || this.dragWidth <= 0 || this.slideHeight <= 0) {
                this.reflow();
            }
            this.isDragging = true;
            this.container.addClass(this.draggingClass);
            shiftMovementDirection = null;
            this.boundElement.trigger('dragstart', [ this.get() ]);
        }

        Components.colorPicker.prototype.dragStop = function () {
            this.isDragging = false;
            this.container.removeClass(this.draggingClass);
            this.boundElement.trigger('dragstop', [ this.get() ]);
        }

        Components.colorPicker.prototype.setFromTextInput = function () {
		//este es valido solo para el textinput que aparece flotante
            var value = this.textInput.val();

            if ((value === null || value === "") && this.allowEmpty) {
                this.set(null);
                this.updateOriginalInput(true);
            }
            else {
                var tiny = tinycolor(value);
                if (tiny.isValid()) {
                    this.set(tiny);
                    this.updateOriginalInput(true);
                }
                else {
                    this.textInput.addClass("sp-validation-error");
                }
            }
        }

        Components.colorPicker.prototype.toggle = function () {
            if (this.visible) {
                this.hide();
            }
            else {
                this.show();
            }
        }

        Components.colorPicker.prototype.show = function () {
            var event = $.Event('beforeShow');

            if (this.visible) {
                this.reflow();
                return;
            }

            this.boundElement.trigger(event, [ this.get() ]);

            if (this.callbacks.beforeShow(this.get()) === false || event.isDefaultPrevented()) {
                return;
            }

            this.hideAll();
            this.visible = true;

            $(this.doc).bind("keydown", this.onkeydown);
            $(this.doc).bind("click", {OBJ:this},this.clickout);
            $(window).bind("resize", {OBJ:this},this.resize);
            this.replacer.addClass("sp-active");
            this.container.removeClass("sp-hidden");

            this.reflow();
            this.updateUI();

            this.colorOnShow = this.get();

            this.drawInitial();
            this.callbacks.show(this.colorOnShow);
            this.boundElement.trigger('show', [ this.colorOnShow ]);
        }

        Components.colorPicker.prototype.onkeydown = function (e) {
            // Close on ESC
            if (e.keyCode === 27) {
                this.hide();
            }
        }

        Components.colorPicker.prototype.clickout =  function (e) {
            var $this = e.data.OBJ;
			// Return on right click.
            if (e.button == 2) { return; }

            // If a drag event was happening during the mouseup, don't hide
            // on click.
            if ($this.isDragging) { return; }

            if ($this.clickoutFiresChange) {
                $this.updateOriginalInput(true);
            }
            else {
                $this.revert();
            }
            $this.hide();
        }

        Components.colorPicker.prototype.hide = function () {
            // Return if hiding is unnecessary
            if (!this.visible || this.flat) { return; }
            this.visible = false;

            $(this.doc).unbind("keydown", this.onkeydown);
            $(this.doc).unbind("click", this.clickout);
            $(window).unbind("resize", this.resize);

            this.replacer.removeClass("sp-active");
            this.container.addClass("sp-hidden");

            this.callbacks.hide(this.get());
            this.boundElement.trigger('hide', [ this.get() ]);
        }

        Components.colorPicker.prototype.revert = function () {
            this.set(this.colorOnShow, true);
        }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.colorPicker.prototype.setValue = function (color) {
	//funcion para mantener compativilidad con InputFiled
	this.set(color);	
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
         Components.colorPicker.prototype.set = function (color, ignoreFormatChange) {
            if (tinycolor.equals(color, this.get())) {
                // Update UI just in case a validation error needs
                // to be cleared.
                this.updateUI();
                return;
            }

            var newColor, newHsv;
            if (!color && this.allowEmpty) {
                isEmpty = true;
            } else {
                isEmpty = false;
                newColor = tinycolor(color);
                newHsv = newColor.toHsv();

                this.currentHue = (newHsv.h % 360) / 360;
                this.currentSaturation = newHsv.s;
                this.currentValue = newHsv.v;
                this.currentAlpha = newHsv.a;
            }
            this.updateUI();

            if (newColor && newColor.isValid() && !ignoreFormatChange) {
                this.currentPreferredFormat = this.preferredFormat || newColor.getFormat();
            }
		//linea aumentada por willanca
		this.updateOriginalInput();	
        }

         Components.colorPicker.prototype.get = function (opts) {
            opts = opts || { };

            if (this.allowEmpty && this.isEmpty) {
                return null;
            }

            return tinycolor.fromRatio({
                h: this.currentHue,
                s: this.currentSaturation,
                v: this.currentValue,
                a: Math.round(this.currentAlpha * 100) / 100
            }, { format: opts.format || this.currentPreferredFormat });
        }

        Components.colorPicker.prototype.isValid = function () {
            return !this.textInput.hasClass("sp-validation-error");
        }

        Components.colorPicker.prototype.move = function () {
            this.updateUI();
            this.callbacks.move(this.get());
            this.boundElement.trigger('move', [ this.get() ]);
        }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Components.colorPicker.prototype.updateUI = function () {
            this.textInput.removeClass("sp-validation-error");
            this.updateHelperLocations();
            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor.fromRatio({ h: this.currentHue, s: 1, v: 1 });
            this.dragger.css("background-color", flatColor.toHexString());
            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = this.currentPreferredFormat;
            if (this.currentAlpha < 1 && !(this.currentAlpha === 0 && this.format === "name")) {
                if (this.format === "hex" || this.format === "hex3" || this.format === "hex6" || this.format === "name") {
                    this.format = "rgb";
                }
            }

            var realColor = this.get({ format: format }),
                displayColor = '';
             //reset background info for preview element
            this.previewElement.removeClass("sp-clear-display");
            this.previewElement.css('color', 'transparent');

            if (!realColor && allowEmpty) {
                // Update the replaced elements background with icon indicating no color selection
                this.previewElement.addClass("sp-clear-display");
            }
            else {
                var realHex = realColor.toHexString(),
                    realRgb = realColor.toRgbString();

                // Update the replaced elements background color (with actual selected color)
                if (this.rgbaSupport || realColor.alpha === 1) {
                    this.previewElement.css("color", realRgb);
                }
                else {
                    this.previewElement.css("color", "transparent");
                    this.previewElement.css("filter", realColor.toFilter());
                }
                if (this.opts.showAlpha) {
                    var rgb = realColor.toRgb();
                    rgb.a = 0;
                    var realAlpha = tinycolor(rgb).toRgbString();
                    var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                    if (this.IE) {
                        this.alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                    }
                    else {
                        this.alphaSliderInner.css("background", "-webkit-" + gradient);
                        this.alphaSliderInner.css("background", "-moz-" + gradient);
                        this.alphaSliderInner.css("background", "-ms-" + gradient);
                        // Use current syntax gradient on unprefixed property.
                        this.alphaSliderInner.css("background",
                            "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
                    }
                }

                displayColor = realColor.toString(format);
            }

            // Update the text entry input as it changes happen
            if (this.opts.showInput) {
                this.textInput.val(displayColor);
            }

            if (this.opts.showPalette) {
                this.drawPalette();
            }

            this.drawInitial();
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------		
Components.colorPicker.prototype.updateHelperLocations = function () {
	var s = this.currentSaturation;
	var v = this.currentValue;

	if(this.allowEmpty && this.isEmpty) {
		//if selected color is empty, hide the helpers
		this.alphaSlideHelper.hide();
		this.slideHelper.hide();
		this.dragHelper.hide();
	}
	else {
		//make sure helpers are visible
		this.alphaSlideHelper.show();
		this.slideHelper.show();
		this.dragHelper.show();

		// Where to show the little circle in that displays your current selected color
		var dragX = s * dragWidth;
		var dragY = dragHeight - (v * dragHeight);
		dragX = Math.max(
			-dragHelperHeight,
			Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
		);
		dragY = Math.max(
			-dragHelperHeight,
			Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
		);
		this.dragHelper.css({
			"top": dragY + "px",
			"left": dragX + "px"
		});

		var alphaX = this.currentAlpha * this.alphaWidth;
		this.alphaSlideHelper.css({
			"left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
		});

		// Where to show the bar that displays your current selected hue
		var slideY = (this.currentHue) * this.slideHeight;
		this.slideHelper.css({
			"top": (slideY - slideHelperHeight) + "px"
		});
	}
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------		
		Components.colorPicker.prototype.getValue = function(){
			return this.get().toString(this.currentPreferredFormat);
		}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------		
        Components.colorPicker.prototype.updateOriginalInput = function (fireCallback) {
            var color = this.get(),
                displayColor = '',
                hasChanged = !tinycolor.equals(color, this.colorOnShow);

            if (color) {
                displayColor = color.toString(this.currentPreferredFormat);
                // Update the selection palette with the current color
                this.addColorToSelectionPalette(color);
            }

            if (this.isInput) {
                this.boundElement.val(displayColor);
            }

            if (fireCallback && hasChanged) {
                this.callbacks.change(color);
                this.boundElement.trigger('change', [ color ]);
            }
        }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        Components.colorPicker.prototype.reflow = function () {
            dragWidth = this.dragger.width();
            dragHeight = this.dragger.height();
            dragHelperHeight = this.dragHelper.height();
            slideWidth = this.slider.width();
            slideHeight = this.slider.height();
            slideHelperHeight = this.slideHelper.height();
            alphaWidth = this.alphaSlider.width();
            alphaSlideHelperWidth = this.alphaSlideHelper.width();

            if (!this.flat) {
                this.container.css("position", "absolute");
                if (this.opts.offset) {
                    this.container.offset(this.opts.offset);
                } else {
                    this.container.offset(getOffset(this.container, this.offsetElement));
                }
            }

            this.updateHelperLocations();

            if (this.opts.showPalette) {
                this.drawPalette();
            }

            this.boundElement.trigger('reflow');
        }

        Components.colorPicker.prototype.destroy = function () {
            this.boundElement.show();
            offsetElement.unbind("click touchstart");
            this.container.remove();
            this.replacer.remove();
        }

        Components.colorPicker.prototype.option = function (optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;
            applyOptions();
        }

         // Components.colorPicker.prototype.enable= function () {
            // disabled = false;
            // this.boundElement.attr("disabled", false);
            // offsetElement.removeClass("sp-disabled");
        // }

        // Components.colorPicker.prototype.disable = function () {
            // hide();
            // disabled = true;
            // this.boundElement.attr("disabled", true);
            // offsetElement.addClass("sp-disabled");
        // }

         Components.colorPicker.prototype.setOffset = function (coord) {
            opts.offset = coord;
            reflow();
        }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        offset.top += inputHeight;

        offset.left -=
            Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offset.left + dpWidth - viewWidth) : 0);

        offset.top -=
            Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return offset;
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop,componentRef) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);
		var $this = componentRef;

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents["touchmove mousemove"] = move;
        duringDragEvents["touchend mouseup"] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {

            if (dragging) {
				
                // Mouseup happened outside of window
                if ($this.IE && doc.documentMode < 9 && !e.button) {
                    return stop();
                }

                var t0 = e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0];
                var pageX = t0 && t0.pageX || e.pageX;
                var pageY = t0 && t0.pageY || e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

               onmove.apply($this, [dragX, dragY, e]);
            }
        }

        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);

            if (!rightclick && !dragging) {
                if (onstart.apply($this, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    move(e);

                    prevent(e);
                }
            }
        }

        function stop(e) {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");

                // Wait a tick before notifying observers to allow the click event
                // to fire in Chrome.
                setTimeout(function() {
                    onstop.apply($this, arguments);
                }, 0);
            }
            dragging = false;
        }

        $(element).bind("touchstart mousedown", {OBJ:componentRef}, start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }

    function inputTypeColorSupport() {
        return this.inputTypeColorSupport();
    }

    /**
    * Define a jQuery plugin
    */
    Components.colorPicker.prototype.inputTypeColorSupport = function () {
        if (typeof inputTypeColorSupport._cachedResult === "undefined") {
            var colorInput = $("<input type='color'/>")[0]; // if color element is supported, value will default to not null
            inputTypeColorSupport._cachedResult = colorInput.type === "color" && colorInput.value !== "";
        }
        return inputTypeColorSupport._cachedResult;
    };

   

    Components.colorPicker.prototype.processNativeColorInputs = function () {
        var colorInputs = $("input[type=color]");
        if (colorInputs.length && !inputTypeColorSupport()) {
            colorInputs.spectrum({
                preferredFormat: "hex6"
            });
        }
    };

