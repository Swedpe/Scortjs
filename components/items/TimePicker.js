/*
 * Original Code jQuery UI Timepicker
 * Copyright 2010-2013, Francois Gelinas
 * http://fgelinas.com/code/timepicker
 ____                 _         _ ____  
/ ___|  ___ ___  _ __| |_      | / ___| 
\___ \ / __/ _ \| '__| __|  _  | \___ \ 
 ___) | (_| (_) | |  | |_  | |_| |___) |
|____/ \___\___/|_|   \__|  \___/|____/ 
                                        
Adaptacion ScortJs Timepicker v 1.0 - a jQuery Ui extension
	Licences: MIT & GPL
	modificado y adaptado por el equipo: Scort Js  http://swedpe.com/scortjs/
	* Programadores:
    * William Uria Martinez[Williamuriamartinez@hotmail.com], Angela Mayhua[], Cesar Cardenas[ccardenashq@gmail.com].
 
*/
var PROP_NAME = 'timepicker',
        tpuuid = new Date().getTime();
Components.Timepicker.prototype.init =   function Timepicker(dataObj) {
		this.dataObj = dataObj;
        this.debug = true; // Change this to true to start debugging
        this._curInst = null; // The current instance in use
        this._disabledInputs = []; // List of time picker inputs that have been disabled
        this._timepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._dialogClass = 'ui-timepicker-dialog'; // The name of the dialog marker class
        this._mainDivId = 'ui-timepicker-div'; // The ID of the main timepicker division
        this._inlineClass = 'ui-timepicker-inline'; // The name of the inline marker class
        this._currentClass = 'ui-timepicker-current'; // The name of the current hour / minutes marker class
        this._dayOverClass = 'ui-timepicker-days-cell-over'; // The name of the day hover marker class
		this.type = 'timePicker';
		this.className = 'timePicker';
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            hourText: 'Horas', // Display text for hours section
            minuteText: 'Minutos', // Display text for minutes link
            amPmText: ['AM', 'PM'], // Display text for AM PM
            closeButtonText: 'Cerrar', // Text for the confirmation button (ok button)
            nowButtonText: 'Ahora', // Text for the now button
            deselectButtonText: 'unSelect' // Text for the deselect button
        };
        this.config = { // Global defaults for all the time picker instances
			container: $('body'),
			parent:'',
			name: "name-" + Math.round(Math.random() * 2000),
			enabled:null,
			value: null,
			width:'100%',
			id:"InputField-"+ Math.round(Math.random() * 2000),
            showOn: 'focus', // 'focus' for popup on focus,
            // 'button' for trigger button, or 'both' for either (not yet implemented)
            button: null, // 'button' element that will trigger the timepicker
            showAnim: 'fadeIn', // Name of jQuery animation for popup
            showOptions: {}, // Options for enhanced animations
            appendText: '', // Display text following the input box, e.g. showing the format
			state:'default',	//color de input box
            beforeShow: null, // Define a callback function executed before the timepicker is shown
            onSelect: null, // Define a callback function when a hour / minutes is selected
            onClose: null, // Define a callback function when the timepicker is closed

            timeSeparator: ':', // The character to use to separate hours and minutes.
            periodSeparator: ' ', // The character to use to separate the time from the time period.
            showPeriod: false, // Define whether or not to show AM/PM with selected time
            showPeriodLabels: true, // Show the AM/PM labels on the left of the time picker
            showLeadingZero: true, // Define whether or not to show a leading zero for hours < 10. [true/false]
            showMinutesLeadingZero: true, // Define whether or not to show a leading zero for minutes < 10.
            altField: '', // Selector for an alternate field to store selected time into
            defaultTime: 'now', // Used as default time when input field is empty or for inline timePicker
            // (set to 'now' for the current time, '' for no highlighted time)
            myPosition: 'left top', // Position of the dialog relative to the input.
            // see the position utility for more info : http://jqueryui.com/demos/position/
            atPosition: 'left bottom', // Position of the input element to match
            // Note : if the position utility is not loaded, the timepicker will attach left top to left bottom
            //NEW: 2011-02-03
            onHourShow: null, // callback for enabling / disabling on selectable hours  ex : function(hour) { return true; }
            onMinuteShow: null, // callback for enabling / disabling on time selection  ex : function(hour,minute) { return true; }
			validar:{'hora':true},
			listeners: {
				selectionHours: function(event) {},
				selectionMinutes: function(event) {},
				selectionNow: function() {},
				onValidateSucess: function(event) {},
				onValidateFail: function(event) {},
			}, 
            hours: {
                starts: 0, // first displayed hour
                ends: 23 // last displayed hour
            },
            minutes: {
                starts: 0, // first displayed minute
                ends: 55, // last displayed minute
                interval: 5, // interval of displayed minutes
                manual: [] // optional extra manual entries for minutes
            },
            rows: 4, // number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2
            // 2011-08-05 0.2.4
            showHours: true, // display the hours section of the dialog
            showMinutes: true, // display the minute section of the dialog
            optionalMinutes: false, // optionally parse inputs of whole hours with minutes omitted

            // buttons
            showCloseButton: true, // shows an OK button to confirm the edit
            showNowButton: true, // Shows the 'now' button
            showDeselectButton: true, // Shows the deselect time button

            maxTime: {
                hour: null,
                minute: null
            },
            minTime: {
                hour: null,
                minute: null
            }
        };
		for(var i in dataObj) {
			// if(this.config[i] != undefined){
			if(typeof(this.config[i]) != "undefined"){
				if(i == "listeners") {
					for(var j in dataObj[i]) {
						this.config[i][j] = dataObj[i][j];
					}
				}
				else
					this.config[i] = dataObj[i];
			}
		};
		
        $.extend(this.config, this.regional['']);
		
		this.listeners = this.config.listeners;
		this.name=this.config.name;
		this.id=this.config.id;
		
		var tiempoActual = new Date();                         // currentTime cambiado por tiempoActual para q no haya conflicto
		
		if (this.config.value==null){
			this.inputMinutos = tiempoActual.getMinutes();
			this.inputHoras = tiempoActual.getHours();
		}
		else
		{
			var res = this.config.value.split(":");
			this.inputHoras = parseInt(res[0]);
			this.inputMinutos = parseInt(res[1]);
		}
		this.lastVal= "";
		if(this.config.enabled==null){
		if(this.config.parent!=''){
			this.enabled=this.config.parent.getConfig('enabled');
			if(this.enabled==null){
				this.enabled = true;
			}
		}else{
			this.enabled=true
		}
	};
		
		this.tpDiv = $('<div id="' + this._mainDivId + '" class="ui-timepicker '+this.config.state+' ui-widget ui-helper-clearfix ui-corner-all " style="display: none"></div>');
		 $('body').append(this.tpDiv);
    }
	//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Components.Timepicker.prototype.create = function() {
     this.TextField = Components.create('TextField',{
			container:this.config.container,
			width: '100%',
			parent:this,
			state:this.config.state,
			 listeners: {
				click: function(event){
					//console.log("click sin tapujos");
				if(!event.data.OBJ.parent.enabled){
					return;
				}else{
						data={container: $('.ui-timepicker-buttonpane .ui-widget-content', event.data.OBJ.parent.tpDiv),
					scale: 'small',
					text:'small',
					icon:{
						 type:'fontawesome',
							class:'fa-cubes'}
					};
					//console.log("evento clic del textfield");
					if(event.data.OBJ.parent._timepickerShowing){
						event.data.OBJ.parent._hideTimepicker();
					}else{
						event.data.OBJ.parent._showTimepicker(event);
						//$.timepicker._showTimepicker(event.data.OBJ.divInput[0]);
					}
					// event.stopPropagation();
					//event.data.OBJ.parent._timepickerShowing =!event.data.OBJ.parent._timepickerShowing;
				}
				}
			},
			addon:{
				addonType: 'button',
				state:this.config.state,
				position:this.config.buttonPosition,
				icon:{
					type:'fa',
					class:'fa-clock-o',
					},
				tooltip:'Info',	  
				handler: function(event) {
					
					event.data.OBJ.parent.parent._adjustZIndex(event);
				}  
				},
		});
		
		if (this.config.width!=-1){
			this.TextField.zoneInput.css('width',this.config.width);
		}
		
		this._attachTimepicker( this.TextField.divInput[0],this.dataObj);
		if(Components.checkExternalClick==null)
		{	Components.checkExternalClick=this._checkExternalClick;	
			$(document).mousedown(Components.checkExternalClick);
		}
		this._updateSelectedValue();
    }
    Components.Timepicker.prototype._attachTimepicker = function(target, settings) {
        /* Attach the time picker to a jQuery selection.
        @param  target    element - the target input field or division or span
        @param  settings  object - the new settings to use for this time picker instance (anonymous) */
        // check for settings on the control itself - in namespace 'time:'
        var inlineSettings = null;
        var nodeName = target.nodeName.toLowerCase();
        var inline = (nodeName == 'div' || nodeName == 'span');
		this.inline = inline;

			target.id = this.config.id; 

        var inst = this._newInst($(target), inline);
        inst.settings = $.extend({}, settings || {}, inlineSettings || {});
            this._connectTimepicker(target, inst);
            // init inst.hours and inst.minutes from the input value
            this._setTimeFromField(inst);
        
    };
	
	    /* Create a new instance object. */
    Components.Timepicker.prototype._newInst = function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
            return {
                id: id,
                input: target, // associated target
                inline: inline, // is timepicker inline or not :
                tpDiv: (!inline ? this.tpDiv : // presentation div
                    $('<div class="' + this._inlineClass + ' ui-timepicker ui-widget  ui-helper-clearfix"></div>'))
            };
	},
	
	Components.Timepicker.prototype._connectTimepicker = function(target, inst) {
		/* Attach the time picker to an input field. */
		var input = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (input.hasClass(this.markerClassName)) {
			return;
		}
		this._attachments(input, inst);
		input.addClass(this.markerClassName).
		keydown({OBJ:this},this._doKeyDown).
		keyup({OBJ:this},(this._doKeyUp)).
		bind("setData.timepicker", function(event, key, value) {
			inst.settings[key] = value;
		}).
		bind("getData.timepicker", function(event, key) {
			return this.config.key;
		});
		$.data(target, PROP_NAME, inst);
	};
	
	Components.Timepicker.prototype._attachments = function(input, inst) {
        /* Make attachments based on settings. */
        var appendText = this.config.appendText;
        var isRTL = this.config.isRTL;
        if (inst.append) {
            inst.append.remove();
        }
        if (appendText) {
            inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
            input[isRTL ? 'before' : 'after'](inst.append);
        }
        // input.unbind('focus.timepicker', this._showTimepicker);
        input.unbind('click.timepicker', this._adjustZIndex);

        if (inst.trigger) {
            inst.trigger.remove();
        }

        var showOn = this.config.showOn;
        if (showOn == 'focus' || showOn == 'both') { // pop-up time picker when in the marked field
            // input.bind("focus.timepicker", {OBJ:this},this._showTimepicker);
            input.bind("click.timepicker", {OBJ:this},this._adjustZIndex);
        }
        if (showOn == 'button' || showOn == 'both') { // pop-up time picker when 'button' element is clicked
            var button = this.config.button;

            // Add button if button element is not set
            if (button == null) {
                button = $('<button class="ui-timepicker-trigger" type="button">...</button>');
                input.after(button);
            }

            $(button).bind("click.timepicker", function() {
                if ($.timepicker._timepickerShowing && $.timepicker._lastInput == input[0]) {
                    $.timepicker._hideTimepicker();
                } else if (!inst.input.is(':disabled')) {
                    // $.timepicker._showTimepicker(input[0]);
                }
                return false;
            });

        }
    };
	
    Components.Timepicker.prototype._showTimepicker = function(event) {
        /* Pop-up the time picker for a given input field.
			@param  input  element - the input field attached to the time picker or
			event - if triggered by focus */
        var $this = event.data.OBJ.parent;
		input = $this.TextField.divInput[0];//event.target || event;
        if (input.nodeName.toLowerCase() != 'input') {
            input = $('input', input.parentNode)[0];
        } // find from button/image trigger

        if (!$this.enabled) {
            return;
        }	
    
        $this.lastVal = null;
        $this._lastInput = input;

        $this._setTimeFromField();

        // calculate default position
        if ($this._inDialog) {
            input.value = '';
        } // hide cursor
        if (!$this._pos) { // position below input
            $this._pos = $this._findPos(input);
            $this._pos[1] += input.offsetHeight; // add the height
        }
        var isFixed = false;
        $(input).parents().each(function() {
            isFixed |= $(this).css('position') == 'fixed';
            return !isFixed;
        });

        var offset = {
            left: $this._pos[0],
            top: $this._pos[1]
        };

        $this._pos = null;
        // determine sizing offscreen
        $this.tpDiv.css({
            position: 'absolute',
            display: 'block',
            top: '-1000px'
        });
        $this._updateTimepicker();


        // position with the ui position utility, if loaded
        if ((!$this.inline) && (typeof $.ui.position == 'object')) {
            $this.tpDiv.position({
                // of: inst.input,
                of: this.TextField.divInput,
                my: $this.config.myPosition,
                at: $this.config.atPosition,
                collision: 'flip'
            });
            var offset = $this.tpDiv.offset();
            $this._pos = [offset.top, offset.left];
        }
        // reset clicked state
        $this._hoursClicked = false;
        $this._minutesClicked = false;
		$this._timepickerShowing = true;
		Components.activeComponent = this;
    };
	Components.Timepicker.prototype._hideTimepicker = function(input) {
		// var inst = this._curInst;
		if (this._timepickerShowing) {
             this.tpDiv.hide();
             
            this._lastInput = null;
            if (this._inDialog) {
                this._dialogInput.css({
                    position: 'absolute',
                    left: '0',
                    top: '-100px'
                });
                if ($.blockUI) {
                    $.unblockUI();
                    $('body').append(this.tpDiv);
                }
            }
            this._inDialog = false;


        }
		this._timepickerShowing = false;
		Components.activeComponent = null;
    };
	
    /* Generate the HTML for the current state of the time picker. */
Components.Timepicker.prototype._generateHTML = function() {
	
        var h, m, row, col, html, hoursHtml, minutesHtml = '';
            showPeriod = this.config.showPeriod;
            showPeriodLabels = this.config.showPeriodLabels;
            showLeadingZero = this.config.showLeadingZero;
            showHours = this.config.showHours;
            showMinutes = this.config.showMinutes;
            amPmText = this.config.amPmText;
            rows = this.config.rows;
            amRows = 0,
            pmRows = 0,
            amItems = 0,
            pmItems = 0,
            amFirstRow = 0,
            pmFirstRow = 0,
            hours = Array(),
            hours_options = this.config.hours;
            hoursPerRow = null,
            hourCounter = 0,
            hourLabel = this.config.hourText;
            // showCloseButton = this.config.showCloseButton;
            // closeButtonText = this.config.closeButtonText;
            showNowButton = this.config.showNowButton;
            nowButtonText = this.config.nowButtonText;
            // showDeselectButton = this.config.showDeselectButton;
            deselectButtonText = this.config.deselectButtonText;
            this.showButtonPanel = this.config.showCloseButton || this.config.showNowButton || this.config.showDeselectButton;



        // prepare all hours and minutes, makes it easier to distribute by rows
        for (h = hours_options.starts; h <= hours_options.ends; h++) {
            hours.push(h);
        }
        hoursPerRow = Math.ceil(hours.length / rows); // always round up

        if (showPeriodLabels) {
            for (hourCounter = 0; hourCounter < hours.length; hourCounter++) {
                if (hours[hourCounter] < 12) {
                    amItems++;
                } else {
                    pmItems++;
                }
            }
            hourCounter = 0;

            amRows = Math.floor(amItems / hours.length * rows);
            pmRows = Math.floor(pmItems / hours.length * rows);

            // assign the extra row to the period that is more densely populated
            if (rows != amRows + pmRows) {
                // Make sure: AM Has Items and either PM Does Not, AM has no rows yet, or AM is more dense
                if (amItems && (!pmItems || !amRows || (pmRows && amItems / amRows >= pmItems / pmRows))) {
                    amRows++;
                } else {
                    pmRows++;
                }
            }
            amFirstRow = Math.min(amRows, 1);
            pmFirstRow = amRows + 1;

            if (amRows == 0) {
                hoursPerRow = Math.ceil(pmItems / pmRows);
            } else if (pmRows == 0) {
                hoursPerRow = Math.ceil(amItems / amRows);
            } else {
                hoursPerRow = Math.ceil(Math.max(amItems / amRows, pmItems / pmRows));
            }
        }


        html = '<table class="ui-timepicker-table ui-widget-content ui-corner-all"><tr>';

        if (showHours) {

            html += '<td class="ui-timepicker-hours">' +
                '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' +
                hourLabel +
                '</div>' +
                '<table class="ui-timepicker">';

            for (row = 1; row <= rows; row++) {
                html += '<tr>';
                // AM
                if (row == amFirstRow && showPeriodLabels) {
                    html += '<th rowspan="' + amRows.toString() + '" class="periods" scope="row">' + amPmText[0] + '</th>';
                }
                // PM
                if (row == pmFirstRow && showPeriodLabels) {
                    html += '<th rowspan="' + pmRows.toString() + '" class="periods" scope="row">' + amPmText[1] + '</th>';
                }
                for (col = 1; col <= hoursPerRow; col++) {
                    if (showPeriodLabels && row < pmFirstRow && hours[hourCounter] >= 12) {
                        html += this._generateHTMLHourCell( undefined, showPeriod, showLeadingZero);
                    } else {
                        html += this._generateHTMLHourCell( hours[hourCounter], showPeriod, showLeadingZero);
                        hourCounter++;
                    }
                }
                html += '</tr>';
            }
            html += '</table>' + // Close the hours cells table
                '</td>'; // Close the Hour td
        }

        if (showMinutes) {
            html += '<td class="ui-timepicker-minutes">';
            html += this._generateHTMLMinutes();
            html += '</td>';
        }

        html += '</tr>';


        if (this.showButtonPanel) {
            var buttonPanel = '<tr><td colspan="3"><div class="ui-timepicker-buttonpane ui-widget-content">';

            html += buttonPanel + '</div></td></tr>';
            // html +=  '</div></td></tr>';
        }
        html += '</table>';

        return html;
    }
    

    /* Handle keystrokes. */
    Components.Timepicker.prototype._doKeyDown = function(event) {
		var $this = event.data.OBJ;
        var inst = $this._getInst(event.target);
        var handled = true;
        inst._keyEvent = true;
        if ($this._timepickerShowing) {
            switch (event.keyCode) {
                case 9:
                    $this._hideTimepicker();
                    handled = false;
                    break; // hide on tab out
                case 13:
                   $this._updateSelectedValue();
                   $this._hideTimepicker();
                    return false; // don't submit the form
                    break; // select the value on enter
                case 27:
                    $this._hideTimepicker();
                    break; // hide on escape
                default:
                    handled = false;
            }
        } else if (event.keyCode == 36 && event.ctrlKey) { // display the time picker on ctrl+home
            // $this._showTimepicker(this);
        } else {
            handled = false;
        }
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
		
    };

    /* Update selected time on keyUp */
    /* Added verion 0.0.5 */
    Components.Timepicker.prototype._doKeyUp = function(event) {	   
			var $this= event.data.OBJ
			// event.data.OBJ
            $this._setTimeFromField();
            $this._updateTimepicker();
			event.data.OBJ.Validar(event);
        }
		
	Components.Timepicker.prototype.Validar = function(event) {
		//console.log("validar");
		// if(this.config.validar['requerido'])
			// this.config.validar['elemento'] = this.divInput;
		if(this.validador){
			this.validado = this.validador.Validar(this.TextField.divInput.val(),this.config.validar);
			if(!this.validado){
				this.listeners.onValidateFail(event);
			}else{
				this.listeners.onValidateSucess(event);
			}
		}
	}
    Components.Timepicker.prototype._adjustZIndex = function(event) {
		//podemos tener 2 tipos de this, por lo cual diferenciamos primero este detalle.
		var $this = event.data.OBJ;
		if($this.tipo=="button")
			$this = event.data.OBJ.parent.parent;
		input = $this.TextField.divInput[0]
		   event = event.target || event;
           
			var inst = $this._getInst(event);
            $this.tpDiv.css('zIndex', $this._getZIndex(input) + 1);
        }
        // This is an enhanced copy of the zIndex function of UI core 1.8.?? For backward compatibility.
        // Enhancement returns maximum zindex value discovered while traversing parent elements,
        // rather than the first zindex value found. Ensures the timepicker popup will be in front,
        // even in funky scenarios like non-jq dialog containers with large fixed zindex values and
        // nested zindex-influenced elements of their own.
    Components.Timepicker.prototype._getZIndex = function(target) {
        var elem = $(target);
        var maxValue = 0;
        var position, value;
        while (elem.length && elem[0] !== document) {
            position = elem.css("position");
            if (position === "absolute" || position === "relative" || position === "fixed") {
                value = parseInt(elem.css("zIndex"), 10);
                if (!isNaN(value) && value !== 0) {
                    if (value > maxValue) {
                        maxValue = value;
                    }
                }
            }
            elem = elem.parent();
        }

        return maxValue;
    };

    /* Generate the time picker content. */
    Components.Timepicker.prototype._updateTimepicker = function() {
            if (this.showButtonPanel) {
				if (this.config.showNowButton) {
					if(this.showNowButton){
						this.showNowButton.remove();}
				}
				if (this.config.showDeselectButton) {
					if(this.showDeselectButton){
							this.showDeselectButton.remove();}
				}
				if (this.config.showCloseButton) {
					if(this.showCloseButton){
						this.showCloseButton.remove();}
				}
        }
			this.tpDiv.empty();
			this.tpDiv.append(this._generateHTML());
			if (this.showButtonPanel) {
				if (this.config.showCloseButton) {
					this.showCloseButton = Components.create('Button',{
					container: $('.ui-timepicker-buttonpane',this.tpDiv),
					scale: 'mini',
					parent: this,
					text: this.config.closeButtonText,
					state: this.TextField.config.state,
					css: {'float':'right'},
					icon:{
						type:'fontawesome',
						class:'fa-times',
					},
					tooltip:'boton Done',	  
					handler: function(event) {
								event.data.OBJ.parent._hideTimepicker();
							} 
				})
				}
				if (this.config.showNowButton) {
					this.showNowButton = Components.create('Button',{
					container: $('.ui-timepicker-buttonpane',this.tpDiv),
					scale: 'mini',
					parent: this,
					text: this.config.nowButtonText,
					state: this.TextField.config.state,
					css: {'float':'right'},
					icon:{
						type:'fontawesome',
						class:'fa-group',
					},
					tooltip:'boton showNowButton',	  
					handler: function(event) {
								event.data.OBJ.parent.selectNow(event);
							}  
				})
				}
				if (this.config.showDeselectButton) {
					this.showDeselectButton = Components.create('Button',{
					container: $('.ui-timepicker-buttonpane',this.tpDiv),
					scale: 'mini',
					parent: this,
					text: this.config.deselectButtonText,
					state: this.TextField.config.state,
					css: {'float':'right'},
					icon:{
						type:'fontawesome',
						class:'fa-group',
					},
					tooltip:'boton showDeselectButton',	  
					handler: function(event) {
								event.data.OBJ.parent.deselectTime();
							}  
				})
				}
				
			}
            this.setControls();
        },

Components.Timepicker.prototype.setControls = function() {
            var borders = this._getBorders(this.tpDiv),
                self = this;
            this.tpDiv
                .find('iframe.ui-timepicker-cover') // IE6- only
                .css({
                    left: -borders[0],
                    top: -borders[1],
                    width: this.tpDiv.outerWidth(),
                    height: this.tpDiv.outerHeight()
                })
                .end();
                // after the picker html is appended bind the click & double click events (faster in IE this way
                // then letting the browser interpret the inline events)
                // the binding for the minute cells also exists in _updateMinuteDisplay
                
				// seleccion de minutos
				 this.tpDiv.find('.ui-timepicker-minute-cell').unbind().bind("click", {
                    OBJ:this//fromDoubleClick: false
                }, $.proxy(this.selectMinutes, this));
				
				//seleccion de horas
                this.tpDiv.find('.ui-timepicker-hour-cell')
                .unbind().bind("click", {
                    OBJ:this//fromDoubleClick: false
                }, $.proxy(this.selectHours, this));
					
				this.tpDiv.find('.' + this._dayOverClass + ' a')
                .trigger('mouseover')
                .end()
                // .find('.ui-timepicker-now').bind("click",{OBJ:this},function(e) {
                    // e.data.OBJ.selectNow(e);
                // }).end()
                // .find('.ui-timepicker-deselect').bind("click",{OBJ:this}, function(e) {
                    // e.data.OBJ.deselectTime(e);
                // }).end()
                // .find('.ui-timepicker-close').bind("click", {OBJ:this},function(e) {
                    // e.data.OBJ._hideTimepicker();
                // }).end();
        };

    /* Special function that update the minutes selection in currently visible timepicker
     * called on hour selection when onMinuteShow is defined  */
    Components.Timepicker.prototype._updateMinuteDisplay = function() {
        var newHtml = this._generateHTMLMinutes();
        this.tpDiv.find('td.ui-timepicker-minutes').html(newHtml);
        this.setControls();
        // after the picker html is appended bind the click & double click events (faster in IE this way
        // then letting the browser interpret the inline events)
        // yes I know, duplicate code, sorry
        /*                .find('.ui-timepicker-minute-cell')
                            .bind("click", { fromDoubleClick:false }, $.proxy($.timepicker.selectMinutes, this))
                            .bind("dblclick", { fromDoubleClick:true }, $.proxy($.timepicker.selectMinutes, this));
        */

    };

    /*
     * Generate the minutes table
     * This is separated from the _generateHTML function because is can be called separately (when hours changes)
     */
    Components.Timepicker.prototype._generateHTMLMinutes = function() {

            var m, row, html = '',
                rows = this.config.rows,
                minutes = Array(),
                minutes_options = this.config.minutes,
                minutesPerRow = null,
                minuteCounter = 0,
                showMinutesLeadingZero = (this.config.showMinutesLeadingZero == true),
                onMinuteShow = this.config.onMinuteShow,
                minuteLabel = this.config.minuteText;

            if (!minutes_options.starts) {
                minutes_options.starts = 0;
            }
            if (!minutes_options.ends) {
                minutes_options.ends = 59;
            }
            if (!minutes_options.manual) {
                minutes_options.manual = [];
            }
            for (m = minutes_options.starts; m <= minutes_options.ends; m += minutes_options.interval) {
                minutes.push(m);
            }
            for (i = 0; i < minutes_options.manual.length; i++) {
                var currMin = minutes_options.manual[i];

                // Validate & filter duplicates of manual minute input
                if (typeof currMin != 'number' || currMin < 0 || currMin > 59 || $.inArray(currMin, minutes) >= 0) {
                    continue;
                }
                minutes.push(currMin);
            }

            // Sort to get correct order after adding manual minutes
            // Use compare function to sort by number, instead of string (default)
            minutes.sort(function(a, b) {
                return a - b;
            });

            minutesPerRow = Math.round(minutes.length / rows + 0.49); // always round up

            /*
             * The minutes table
             */
            // if currently selected minute is not enabled, we have a problem and need to select a new minute.
            
			
			// if (onMinuteShow &&
                // (onMinuteShow.apply((inst.input ? inst.input[0] : null), [inst.hours, inst.minutes]) == false)) {
                // loop minutes and select first available
                // for (minuteCounter = 0; minuteCounter < minutes.length; minuteCounter += 1) {
                    // m = minutes[minuteCounter];
                    // if (onMinuteShow.apply((inst.input ? inst.input[0] : null), [inst.hours, m])) {
                        // inst.minutes = m;
                        // break;
                    // }
                // }
            // }



            html += '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' +
                minuteLabel +
                '</div>' +
                '<table class="ui-timepicker">';

            minuteCounter = 0;
            for (row = 1; row <= rows; row++) {
                html += '<tr>';
                while (minuteCounter < row * minutesPerRow) {
                    var m = minutes[minuteCounter];
                    var displayText = '';
                    if (m !== undefined) {
                        displayText = (m < 10) && showMinutesLeadingZero ? "0" + m.toString() : m.toString();
                    }
                    html += this._generateHTMLMinuteCell( m, displayText);
                    minuteCounter++;
                }
                html += '</tr>';
            }

            html += '</table>';

            return html;
        },

        /* Generate the content of a "Hour" cell */
        Components.Timepicker.prototype._generateHTMLHourCell = function(hour, showPeriod, showLeadingZero) {
			// console.log("el this:   ");
			// console.log(this);
            var displayHour = hour;
            if ((hour > 12) && showPeriod) {
                displayHour = hour - 12;
            }
            if ((displayHour == 0) && showPeriod) {
                displayHour = 12;
            }
            if ((displayHour < 10) && showLeadingZero) {
                displayHour = '0' + displayHour;
            }

            var html = "";
            var enabled = true;
            var onHourShow = this.config.onHourShow; //custom callback
            var maxTime = this.config.maxTime;
            var minTime = this.config.minTime;

            if (hour == undefined) {
                html = '<td><span class="ui-state-'+this.config.state+' ui-state-disabled">&nbsp;</span></td>';
                return html;
            }

            // if (onHourShow) {
                // enabled = onHourShow.apply((inst.input ? inst.input[0] : null), [hour]);
            // }

            if (enabled) {
                if (!isNaN(parseInt(maxTime.hour)) && hour > maxTime.hour) enabled = false;
                if (!isNaN(parseInt(minTime.hour)) && hour < minTime.hour) enabled = false;
            }

            if (enabled) {
                html = '<td class="ui-timepicker-hour-cell" data-timepicker-instance-id="#' + this.config.id.replace(/\\\\/g, "\\") + '" data-hour="' + hour.toString() + '">' +
                    '<a class="timepicker-'+this.config.state+' ' +
                    (hour == this.inputHoras ? 'ui-state-active' : '') +
                    '">' +
                    displayHour.toString() +
                    '</a></td>';
            } else {
                html =
                    '<td>' +
                    '<span class="ui-state-'+this.config.state+' ui-state-disabled ' +
                    (hour == this.inputHoras ? ' ui-state-active ' : ' ') +
                    '">' +
                    displayHour.toString() +
                    '</span>' +
                    '</td>';
            }
            return html;
        },

        /* Generate the content of a "Hour" cell */
        Components.Timepicker.prototype._generateHTMLMinuteCell = function( minute, displayText) {
            var html = "";
            var enabled = true;
            var hour = this.inputHoras;
            var onMinuteShow = this.config.onMinuteShow; //custom callback
            var maxTime = this.config.maxTime;
            var minTime = this.config.minTime;

            // if (onMinuteShow) {
                // NEW: 2011-02-03  we should give the hour as a parameter as well!
                // enabled = onMinuteShow.apply((inst.input ? inst.input[0] : null), [inst.hours, minute]); //trigger callback
            // }

            if (minute == undefined) {
                html = '<td><span class="ui-state-'+this.config.state+' ui-state-disabled">&nbsp;</span></td>';
                return html;
            }

            if (enabled && hour !== null) {
                if (!isNaN(parseInt(maxTime.hour)) && !isNaN(parseInt(maxTime.minute)) && hour >= maxTime.hour && minute > maxTime.minute) enabled = false;
                if (!isNaN(parseInt(minTime.hour)) && !isNaN(parseInt(minTime.minute)) && hour <= minTime.hour && minute < minTime.minute) enabled = false;
            }

            if (enabled) {
                html = '<td class="ui-timepicker-minute-cell" data-timepicker-instance-id="#' + this.config.id.replace(/\\\\/g, "\\") + '" data-minute="' + minute.toString() + '" >' +
                    '<a class="timepicker-'+this.config.state+' ' +
                    (minute == this.inputMinutos ? 'ui-state-active' : '') +
                    '" >' +
                    displayText +
                    '</a></td>';
            } else {

                html = '<td>' +
                    '<span class="ui-state-'+this.config.state+' ui-state-disabled" >' +
                    displayText +
                    '</span>' +
                    '</td>';
            }
            return html;
        };

    Components.Timepicker.prototype._destroyTimepicker = function(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName == 'input') {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName)
                    // .unbind('focus.timepicker', this._showTimepicker)
                    .unbind('click.timepicker', this._adjustZIndex);
            } else if (nodeName == 'div' || nodeName == 'span')
                $target.removeClass(this.markerClassName).empty();
        },

        /* Enable the date picker to a jQuery selection.
           @param  target    element - the target input field or division or span */
    Components.Timepicker.prototype.enable = function() {
		this.TextField.enable();
		this.enabled = true;            
     };

    /* Disable the time picker to a jQuery selection.
     */
    Components.Timepicker.prototype.disable = function() {
		this.TextField.disable();
		this.enabled = false;
	};


    /* Find an object's position on the screen. */
    Components.Timepicker.prototype._findPos = function(obj) {
        // var inst = this._getInst(obj);
        var isRTL = this.config.isRTL;
        while (obj && (obj.type == 'hidden' || obj.nodeType != 1)) {
            obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
        }
        var position = $(obj).offset();
        return [position.left, position.top];
    };

    /* Retrieve the size of left and top borders for an element.
    @param  elem  (jQuery object) the element of interest
    @return  (number[2]) the left and top borders */
    Components.Timepicker.prototype._getBorders = function(elem) {
        var convert = function(value) {
            return {
                thin: 1,
                medium: 2,
                thick: 3
            }[value] || value;
        };
        return [parseFloat(convert(elem.css('border-left-width'))),
            parseFloat(convert(elem.css('border-top-width')))
        ];
    };

    /* Close time picker if clicked elsewhere. */
    // function _checkExternalClick (event) {
    Components.Timepicker.prototype._checkExternalClick = function(event) {
		if (Components.activeComponent==null) {
             return;
		}
        var $target = $(event.target);
		//console.log($target);
        if ($target[0].id != Components.activeComponent._mainDivId &&
            $target.parents('#' + Components.activeComponent._mainDivId).length == 0 &&
            !$target.hasClass(Components.activeComponent.markerClassName) &&
            !$target.hasClass(Components.activeComponent._triggerClass) &&
			Components.activeComponent._timepickerShowing && !(Components.activeComponent._inDialog && $.blockUI) && 
			Components.activeComponent.TextField.divInput[0]!=$target[0] && 
			Components.activeComponent.TextField.addon.divContainer[0] != $target[0])
			
			{if (Components.activeComponent.TextField.addon.divContainer[0] != $target.parent())
				{Components.activeComponent._hideTimepicker();
				console.log("escondido");
				event.stopPropagation();
				}
				}
    };

    /* Hide the time picker from view.
    @param  input  element - the input field attached to the time picker */
    /* Retrieve the instance data for the target control.
    @param  target  element - the target input field or division or span
    @return  object - the associated instance data
    @throws  error if a jQuery problem getting data */
    Components.Timepicker.prototype._getInst = function(target) {
        try {
            return $.data(target, PROP_NAME);
        } catch (err) {
            throw 'Missing instance data for this timepicker';
        }
    };

    /* Parse existing time and initialise time picker. */
    Components.Timepicker.prototype._setTimeFromField = function() {
        if (this.TextField.divInput.val() == this.lastVal) {
            return;
        }
        var defaultTime = this.config.defaultTime;

        var timeToParse = defaultTime == 'now' ? this._getCurrentTimeRounded() : defaultTime;
        if ((this.inline == false) && (this.TextField.divInput.val() != '')) {
            timeToParse = this.TextField.divInput.val()
        }

        if (timeToParse instanceof Date) {
            // inst.hours = timeToParse.getHours();
            // inst.minutes = timeToParse.getMinutes();
			this.inputHoras = timeToParse.getHours();
            this.inputMinutos = timeToParse.getMinutes();
			
        } else {
            var timeVal = this.lastVal = timeToParse;
            if (timeToParse == '') {
                // inst.hours = -1;
                // inst.minutes = -1;
				this.inputHoras = -1;
				this.inputMinutos = -1;
            } else {
                var time = this.parseTime( timeVal);
                // inst.hours = time.hours;
                // inst.minutes = time.minutes;
				this.inputHoras = time.hours;
                this.inputMinutos = time.minutes;
            }
        }


        this._updateTimepicker();
    };

    /* Set the time for a jQuery selection.
	    @param  target  element - the target input field or division or span
	    @param  time    String - the new time */
    Components.Timepicker.prototype._setTimeTimepicker = function(target, time) {
        var inst = this._getInst(target);
        if (inst) {
            this._setTime(inst, time);
            this._updateTimepicker();
            }
    };

    /* Set the time directly. */
    Components.Timepicker.prototype.setTime = function(inst, time, noChange) {
            var origHours = inst.hours;
            var origMinutes = inst.minutes;
            if (time instanceof Date) {
                inst.hours = time.getHours();
                inst.minutes = time.getMinutes();
            } else {
                var time = this.parseTime( time);
                inst.hours = time.hours;
                inst.minutes = time.minutes;
            }

            if ((origHours != inst.hours || origMinutes != inst.minutes) && !noChange) {
                inst.input.trigger('change');
            }
            this._updateTimepicker();
            this._updateSelectedValue();
        },

        /* Return the current time, ready to be parsed, rounded to the closest minute by interval */
        Components.Timepicker.prototype._getCurrentTimeRounded = function() {
            var currentTime = new Date(),
                currentMinutes = currentTime.getMinutes(),
                minutes_options = this.config.minutes,
                // round to closest interval
                adjustedMinutes = Math.round(currentMinutes / minutes_options.interval) * minutes_options.interval;
            currentTime.setMinutes(adjustedMinutes);
            return currentTime;
        };
		
Components.Timepicker.prototype.setValue = function(value){
	// var res = this.config.value.split(":");
	var res = value.split(":");
	this.inputHoras = parseInt(res[0]);
	this.inputMinutos = parseInt(res[1]);
	this._updateSelectedValue();
}
Components.Timepicker.prototype.getValue = function(){
	return this.inputHoras + ":" + this.inputMinutos;
}
    /*
     * Parse a time string into hours and minutes
     */
    Components.Timepicker.prototype.parseTime = function( timeVal) {
        var retVal = new Object();
        retVal.hours = -1;
        retVal.minutes = -1;

        if (!timeVal)
            return '';

        var timeSeparator = this.config.timeSeparator,
            amPmText = this.config.amPmText,
            showHours = this.config.showHours,
            showMinutes = this.config.showMinutes,
            optionalMinutes = this.config.optionalMinutes,
            showPeriod = (this.config.showPeriod == true),
            p = timeVal.indexOf(timeSeparator);

        // check if time separator found
        if (p != -1) {
            retVal.hours = parseInt(timeVal.substr(0, p), 10);
            retVal.minutes = parseInt(timeVal.substr(p + 1), 10);
        }
        // check for hours only
        else if ((showHours) && (!showMinutes || optionalMinutes)) {
            retVal.hours = parseInt(timeVal, 10);
        }
        // check for minutes only
        else if ((!showHours) && (showMinutes)) {
            retVal.minutes = parseInt(timeVal, 10);
        }

        if (showHours) {
            var timeValUpper = timeVal.toUpperCase();
            if ((retVal.hours < 12) && (showPeriod) && (timeValUpper.indexOf(amPmText[1].toUpperCase()) != -1)) {
                retVal.hours += 12;
            }
            // fix for 12 AM
            if ((retVal.hours == 12) && (showPeriod) && (timeValUpper.indexOf(amPmText[0].toUpperCase()) != -1)) {
                retVal.hours = 0;
            }
        }

        return retVal;
    };

    Components.Timepicker.prototype.selectNow = function() {
            // var id = $(element.target).attr("data-timepicker-instance-id"),
                // $target = $(id),
                // inst = this._getInst($target[0]);
				
            //if (!inst || (input && inst != $.data(input, PROP_NAME))) { return; }
			input = this.TextField.divInput[0];
			var inst = this._getInst(input);
            var currentTime = new Date();
            this.hours = currentTime.getHours();
            this.minutes = currentTime.getMinutes();
			this.inputMinutos = currentTime.getMinutes();
			this.inputHoras = currentTime.getHours();
            this._updateSelectedValue();
            this._updateTimepicker();
            this._hideTimepicker();
			this.listeners.selectionNow();
        },

	Components.Timepicker.prototype.deselectTime = function(event) {
            var id = $(event.target).attr("data-timepicker-instance-id"),
                $target = $(id),
                inst = this._getInst($target[0]);
            inst.hours = -1;
            inst.minutes = -1;
            this._updateSelectedValue();
            this._hideTimepicker();
        };


    Components.Timepicker.prototype.selectHours = function(event) {
        var $this=event.data.OBJ;
		var $td = $(event.currentTarget),
            id = $td.attr("data-timepicker-instance-id"),
            newHours = parseInt($td.attr("data-hour")),
            fromDoubleClick = event.data.fromDoubleClick,
            $target = $(id),
            inst = this._getInst($target[0]),
            showMinutes = (this.config.showMinutes == true);

        // don't select if disabled
        if (!this.enabled) {
            return false
        }
		
		this.listeners.selectionHours(event);
		
        $td.parents('.ui-timepicker-hours:first').find('a').removeClass('ui-state-active');
        $td.children('a').addClass('ui-state-active');
        $this.hours = newHours;
		$this.inputHoras = newHours;
        // added for onMinuteShow callback
        var onMinuteShow = this.config.onMinuteShow;
        var maxTime = this.config.maxTime;
        var minTime = this.config.minTime;
        if (onMinuteShow || maxTime.minute || minTime.minute) {
            // this will trigger a callback on selected hour to make sure selected minute is allowed. 
            this._updateMinuteDisplay();
        }

        this._updateSelectedValue();

        $this._hoursClicked = true;
        if (($this._minutesClicked) || (fromDoubleClick) || (showMinutes == false)) {
            this._hideTimepicker();
        }
        // return false because if used inline, prevent the url to change to a hashtag
        return false;
    };

    Components.Timepicker.prototype.selectMinutes = function(event) {
        var $this=event.data.OBJ;
		var $td = $(event.currentTarget),
            id = $td.attr("data-timepicker-instance-id"),
            newMinutes = parseInt($td.attr("data-minute")),
            fromDoubleClick = event.data.fromDoubleClick,
            $target = $(id),
            inst = this._getInst($target[0]),
            showHours = (this.config.showHours == true);

        // don't select if disabled
        if (!this.enabled) {
            return false
        }
		
		this.listeners.selectionMinutes(event);
		
        $td.parents('.ui-timepicker-minutes:first').find('a').removeClass('ui-state-active');
        $td.children('a').addClass('ui-state-active');
		this.inputMinutos = newMinutes;
        $this.minutes = newMinutes;
        this._updateSelectedValue();

        $this._minutesClicked = true;
        if (($this._hoursClicked) || (fromDoubleClick) || (showHours == false)) {
            this._hideTimepicker();
            // return false because if used inline, prevent the url to change to a hashtag
            return false;
        }

        // return false because if used inline, prevent the url to change to a hashtag
        return false;
    };

    Components.Timepicker.prototype._updateSelectedValue = function() {
        var newTime = this._getParsedTime();		//darle formato a la 
         this.TextField.setValue(newTime);
       return newTime;
    };



        /* Detach a timepicker from its control.
           @param  target    element - the target input field or division or span */


        /* this function process selected time and return it parsed according to instance options */
        Components.Timepicker.prototype._getParsedTime = function() {
            if (this.inputHoras == -1 && this.inputMinutos == -1) {
                return '';
            }

            var period = "",
                showPeriod = (this.config.showPeriod == true),
                showLeadingZero = (this.config.showLeadingZero == true),
                showHours = (this.config.showHours == true),
                showMinutes = (this.config.showMinutes == true),
                optionalMinutes = (this.config.optionalMinutes == true),
                amPmText = this.config.amPmText,
                selectedHours = this.inputHoras ? this.inputHoras : 0,
                selectedMinutes = this.inputMinutos ? this.inputMinutos : 0,
                displayHours = selectedHours ? selectedHours : 0,
                parsedTime = '';

            // fix some display problem when hours or minutes are not selected yet
            if (displayHours == -1) {
                displayHours = 0
            }
            if (selectedMinutes == -1) {
                selectedMinutes = 0
            }

            if (showPeriod) {
                if (this.inputHoras == 0) {
                    displayHours = 12;
                }
                if (this.inputHoras < 12) {
                    period = amPmText[0];
                } else {
                    period = amPmText[1];
                    if (displayHours > 12) {
                        displayHours -= 12;
                    }
                }
            }

            var h = displayHours.toString();
            if (showLeadingZero && (displayHours < 10)) {
                h = '0' + h;
            }

            var m = selectedMinutes.toString();
            if (selectedMinutes < 10) {
                m = '0' + m;
            }

            if (showHours) {
                parsedTime += h;
            }
            if (showHours && showMinutes && (!optionalMinutes || m != 0)) {
                parsedTime += this.config.timeSeparator;
            }
            if (showMinutes && (!optionalMinutes || m != 0)) {
                parsedTime += m;
            }
            if (showHours) {
                if (period.length > 0) {
                    parsedTime += this.config.periodSeparator + period;
                }
            }

            return parsedTime;
        };

        /* This might look unused but it's called by the $.fn.timepicker function with param getTime */
        /* added v 0.2.3 - gitHub issue #5 - Thanks edanuff */
        Components.Timepicker.prototype._getTimeTimepicker= function(input) {
            var inst = this._getInst(input);
            return this._getParsedTime(inst);
        };
        Components.Timepicker.prototype._getHourTimepicker= function(input) {
            var inst = this._getInst(input);
            if (inst == undefined) {
                return -1;
            }
            return inst.hours;
        };
        Components.Timepicker.prototype._getMinuteTimepicker= function(input) {
            var inst = this._getInst(input);
            if (inst == undefined) {
                return -1;
            }
            return inst.minutes;
        };
	
