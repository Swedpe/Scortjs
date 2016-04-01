/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
Components.EasyPieChart.prototype.init = function(opts) {
	this.config = {
		container: $('body'),
		barColor: '#ef1e25',				//color de la barra de avance porcentual
		trackColor: '#D9DBE1',				//color de la guia de el progress var
		scaleColor: '#000000',				//
		scaleLength: 0,						//longitud de las lineas de escala, 0 para no mostrarlas
		lineCap: 'round',
		lineWidth: 7,
		trackWidth: undefined,
		scale:'medium',
		rotate: 0,
		currentValue:0,						//la animacion de valor iniciara en este valor
		datapercent:50,						//el valor final que tiene el progress.
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};
	this.config.renderer = this.CanvasRenderer;
	var options = {};
	this.options = options;
	
	for(var i in opts) {
        if(this.config[i] != undefined)
            this.config[i] = opts[i];
    }
	switch(this.config.scale){
		case 'medium':
		this.config.size =  110;
		break;
		case 'minier':
		this.config.size =  50;
		break;
		case 'mini':
		this.config.size =  70;
		break;
		case 'small':
		this.config.size =  90;
		break;
		case 'large':
		this.config.size =  150;
		break;
	}		
	this.el = this.config.container;
	/*for (var i in defaultOptions) {
		if (defaultOptions.hasOwnProperty(i)) {
			options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
			if (typeof(options[i]) === 'function') {
				options[i] = options[i].bind(this);
			}
		}
	}*/
}
//--------------------------------------------------------------------------------------------------------------------------
Components.EasyPieChart.prototype.create = function() {//init();
	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
		// merge user options into default options


		// check for jQuery easing
		if (typeof(this.config.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[this.config.easing])) {
			this.config.easing = jQuery.easing[this.config.easing];
		} else {
			this.config.easing = this.config.easing;
		}

		// process earlier animate option to avoid bc breaks
		if (typeof(this.config.animate) === 'number') {
			this.config.animate = {
				duration: this.config.animate,
				enabled: true
			};
		}

		if (typeof(this.config.animate) === 'boolean' && !this.config.animate) {
			this.config.animate = {
				duration: 1000,
				enabled: this.config.animate
			};
		}

		// create renderer
		this.renderer = new this.config.renderer(this.el, this.config);

		// initial draw
		this.renderer.draw(this.config.currentValue);

		// initial update
		/*if (this.el.dataset && this.el.dataset.percent) {
			this.update(parseFloat(this.el.dataset.percent));
		} else if (this.el.getAttribute && this.el.getAttribute('data-percent')) {
			this.update(parseFloat(this.el.getAttribute('data-percent')));
		}*/
		this.update(this.config.datapercent);
		
	return this;	
}
Components.EasyPieChart.prototype.show = function() {
//do noting
}


	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
Components.EasyPieChart.prototype.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (this.config.animate.enabled) {
			this.renderer.animate(this.config.currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		this.config.currentValue = newValue;
		return this;
}
Components.EasyPieChart.prototype.updateScale = function(newsize) {
		newValue = parseFloat(newValue);
		this.renderer.changescale(newsize);
		return this;
}

	/**
	 * Disable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
Components.EasyPieChart.prototype.disableAnimation = function() {
		this.config.animate.enabled = false;
		return this;
	};

	/**
	 * Enable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
Components.EasyPieChart.prototype.enableAnimation = function() {
		this.config.animate.enabled = true;
		return this;
	};

//-------------------------------------------------------------------------------------------------------------------------------
/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
Components.EasyPieChart.prototype.CanvasRenderer = function(el, options) {
	this.options = options;
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.append(canvas);

	if (typeof(G_vmlCanvasManager) === 'object') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	//nueva funcion para cambiar el valor de el radio directamente.
	
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.trackWidth || options.lineWidth, 1);
	};

  /**
    * Canvas accessor
   */
  this.getCanvas = function() {
    return canvas;
  };

  /**
    * Canvas 2D context 'ctx' accessor
   */
  this.getCtx = function() {
    return ctx;
  };

	this.changescale = function(newScale){
		
		options.size = newScale;		
		canvas.width = canvas.height = newScale;
		ctx.translate(options.size / 2, options.size / 2);
		ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);
		this.clear();
		cachedBackground = false;
		radius = (options.size - options.lineWidth) / 2;
		//el valor hay que leer de algun elemento;
		this.draw(options.percent);
	};
  
	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param {number} percent Percent shown by the chart between -100 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		drawCircle(color, options.lineWidth, percent / 100);
		options.percent = percent;
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param {number} from Starting percentage
	 * @param {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
}