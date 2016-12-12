function Validador()
{
	

}

Validador.prototype.Validar = function(value,condiciones) {
	
	var resultado = true;
	
	for(var indice in condiciones)
	{		
		switch(indice)
		{
			case 'email':
			resultado= this.ValidarEmail(value)&&resultado;	
			break;
			case 'longitud':
			resultado= this.ValidarRango(value.replace(/\s+/g, '').length,condiciones.longitud)&&resultado;		
			break;
			case 'numero':
			resultado= this.ValidarNumero(value.replace(/\s+/g, ''),condiciones.numero)&&resultado;		
			break;
			case 'requerido':
			resultado= this.ValidarObligatorio(value.replace(/\s+/g, ''))&&resultado;		
			break;
			case 'texto':
			resultado= this.ValidarTexto(value.replace(/\s+/g, ''))&&resultado;	
			break;	
			case 'url':
			resultado= this.ValidarUrl(value.replace(/\s+/g, ''))&&resultado;		
			break;
			case 'ipv4':
			resultado= this.ValidateIPaddress(value.replace(/\s+/g, ''))&&resultado;		
			break;
			case 'hora':
			resultado= this.ValidateHour(value)&&resultado;
			break;
            case 'fecha':
            resultado= this.ValidarFecha(value,condiciones[indice])&&resultado;
            break;
		}
		
	}
	
	return resultado;
	
}

Validador.prototype.ValidarEmail = function(email) {
	 var emailParts = email.toLowerCase().split('@');
            if( emailParts.length == 2 ) {
               return this.ValidarDominio(emailParts[1])&&!(/[^\w\+\.\-]/.test(emailParts[0]));		   
			 
            }
            return false	
}
Validador.prototype.ValidateIPaddress = function(ipaddress){  
 if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))  
  {  
    return true;  
  }  
return false;  
} 
 
Validador.prototype.ValidarDominio = function(val) {

 var topDomains =  ['.ac', '.ad', '.ae', '.aero', '.af', '.ag', '.ai', '.al', '.am', '.an', '.ao',
                        '.aq', '.ar', '.arpa', '.as', '.asia', '.at', '.au', '.aw', '.ax', '.az', '.ba', '.bb',
                        '.bd', '.be', '.bf', '.bg', '.bh', '.bi', '.bike', '.biz', '.bj', '.bm', '.bn', '.bo',
                        '.br', '.bs', '.bt', '.bv', '.bw', '.by', '.bz', '.ca', '.camera', '.cat', '.cc', '.cd',
                        '.cf', '.cg', '.ch', '.ci', '.ck', '.cl', '.clothing', '.cm', '.cn', '.co', '.com',
                        '.construction', '.contractors', '.coop', '.cr', '.cu', '.cv', '.cw', '.cx', '.cy', '.cz',
                        '.de', '.diamonds', '.directory', '.dj', '.dk', '.dm', '.do', '.dz', '.ec', '.edu', '.ee',
                        '.eg', '.enterprises', '.equipment', '.er', '.es', '.estate', '.et', '.eu', '.fi', '.fj',
                        '.fk', '.fm', '.fo', '.fr', '.ga', '.gallery', '.gb', '.gd', '.ge', '.gf', '.gg', '.gh',
                        '.gi', '.gl', '.gm', '.gn', '.gov', '.gp', '.gq', '.gr', '.graphics', '.gs', '.gt', '.gu',
                        '.guru', '.gw', '.gy', '.hk', '.hm', '.hn', '.holdings', '.hr', '.ht', '.hu', '.id', '.ie',
                        '.il', '.im', '.in', '.info', '.int', '.io', '.iq', '.ir', '.is', '.it', '.je', '.jm', '.jo',
                        '.jobs', '.jp', '.ke', '.kg', '.kh', '.ki', '.kitchen', '.km', '.kn', '.kp', '.kr', '.kw',
                        '.ky', '.kz', '.la', '.land', '.lb', '.lc', '.li', '.lighting', '.lk', '.lr', '.ls', '.lt',
                        '.lu', '.lv', '.ly', '.ma', '.mc', '.md', '.me', '.menu', '.mg', '.mh', '.mil', '.mk', '.ml',
                        '.mm', '.mn', '.mo', '.mobi', '.mp', '.mq', '.mr', '.ms', '.mt', '.mu', '.museum', '.mv',
                        '.mw', '.mx', '.my', '.mz', '.na', '.name', '.nc', '.ne', '.net', '.nf', '.ng', '.ni',
                        '.nl', '.no', '.np', '.nr', '.nu', '.nz', '.om', '.org', '.pa', '.pe', '.pf', '.pg', '.ph',
                        '.photography', '.pk', '.pl', '.plumbing', '.pm', '.pn', '.post', '.pr', '.pro', '.ps', '.pt',
                        '.pw', '.py', '.qa', '.re', '.ro', '.rs', '.ru', '.rw', '.sa', '.sb', '.sc', '.sd', '.se',
                        '.sexy', '.sg', '.sh', '.si', '.singles', '.sj', '.sk', '.sl', '.sm', '.sn', '.so', '.sr',
                        '.st', '.su', '.sv', '.sx', '.sy', '.sz', '.tattoo', '.tc', '.td', '.technology', '.tel', '.tf',
                        '.tg', '.th', '.tips', '.tj', '.tk', '.tl', '.tm', '.tn', '.to', '.today', '.tp', '.tr', '.travel',
                        '.tt', '.tv', '.tw', '.tz', '.ua', '.ug', '.uk', '.uno', '.us', '.uy', '.uz', '.va', '.vc', '.ve',
                        '.ventures', '.vg', '.vi', '.vn', '.voyage', '.vu', '.wf', '.ws', '.xn--3e0b707e', '.xn--45brj9c',
                        '.xn--80ao21a', '.xn--80asehdb', '.xn--80aswg', '.xn--90a3ac', '.xn--clchc0ea0b2g2a9gcd', '.xn--fiqs8s',
                        '.xn--fiqz9s', '.xn--fpcrj9c3d', '.xn--fzc2c9e2c', '.xn--gecrj9c', '.xn--h2brj9c', '.xn--j1amh',
                        '.xn--j6w193g', '.xn--kprw13d', '.xn--kpry57d', '.xn--l1acc', '.xn--lgbbat1ad8j', '.xn--mgb9awbf',
                        '.xn--mgba3a4f16a', '.xn--mgbaam7a8h', '.xn--mgbayh7gpa', '.xn--mgbbh1a71e', '.xn--mgbc0a9azcg',
                        '.xn--mgberp4a5d4ar', '.xn--mgbx4cd0ab', '.xn--ngbc5azd', '.xn--o3cw4h', '.xn--ogbpf8fl', '.xn--p1ai',
                        '.xn--pgbs0dh', '.xn--q9jyb4c', '.xn--s9brj9c', '.xn--unup4y', '.xn--wgbh1c', '.xn--wgbl6a',
                        '.xn--xkc2al3hye2a', '.xn--xkc2dl3a5ee0h', '.xn--yfro4i67o', '.xn--ygbi2ammx', '.xxx', '.ye',
                        '.yt', '.za', '.zm', '.zw'],

                ukTopDomains = ['co', 'me', 'ac', 'gov', 'judiciary','ltd', 'mod', 'net', 'nhs', 'nic',
                        'org', 'parliament', 'plc', 'police', 'sch', 'bl', 'british-library', 'jet','nls'],

                dot = val.lastIndexOf('.'),
                domain = val.substring(0, dot),
                ext = val.substring(dot, val.length),
                hasTopDomain = false;

            for (var i = 0; i < topDomains.length; i++) {
                if (topDomains[i] === ext) {
                    if(ext==='.uk') {
                        //Run Extra Checks for UK Domain Names
                        var domainParts = val.split('.');
                        var tld2 = domainParts[domainParts.length-2];
                        for(var j = 0; j < ukTopDomains.length; j++) {
                            if(ukTopDomains[j] === tld2) {
                                hasTopDomain = true;
                                break;
                            }
                        }

                        if(hasTopDomain)
                            break;

                    } else {
                        hasTopDomain = true;
                        break;
                    }
                }
            }

            if (!hasTopDomain) {
                return false;
            } else if (dot < 2 || dot > 57) {
                return $.inArray(val, ['i.net', 'q.com', 'q.net', 'x.com', 'x.org', 'z.com', 'w.org']) > -1;
            } else {
                var firstChar = domain.substring(0, 1),
                    lastChar = domain.substring(domain.length - 1, domain.length);

                if (firstChar === '-' || firstChar === '.' || lastChar === '-' || lastChar === '.') {
                    return false;
                }
                if (domain.split('..').length > 1) {
                    return false;
                }
                if (domain.replace(/[-\da-z\.]/g, '') !== '') {
                    return false;
                }
            }

            return true;
 }
 
Validador.prototype.ValidarUrl = function(url) {          
            var urlFilter = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            if( urlFilter.test(url) ) {
                var domain = url.split('://')[1];
                var domainSlashPos = domain.indexOf('/');
                if(domainSlashPos > -1)
                    domain = domain.substr(0, domainSlashPos);

                return this.ValidarDominio(domain); // todo: add support for IP-addresses
            }
            return false;
}

Validador.prototype.ValidarNumero = function(val, options) {  //config.decimalSeparator : '.' como parametro de validacion de nuemros decimales
            if(val !== '') {                
                    decimalSeparator = options.decimalseparator || '';
                    allowsRange = false;                   
                    steps = options.decimales || '';
                    allowsSteps = false;
					
				if(options.negative != undefined && val.indexOf('-') === 0) {
                    val = val.substr(1);
                }
				
                if (options.rango)
                {
                    begin = parseFloat(options.rango.min);
                    end = parseFloat(options.rango.max);
                    allowsRange = true;
                }
                
                if(steps != "") 
				{
					allowsSteps = true;
				}

                if( decimalSeparator == ',' ) {
                    if( val.indexOf('.') > -1 ) {
                        return false;
                    }
                    // Fix for checking range with floats using ,
                    val = val.replace(',', '.');
                }

                if(options.tipo =='entero'  && val.replace(/[0-9]/g, '') === '' && (!allowsRange || (val >= begin && val <= end)) && (!allowsSteps || (val%steps == 0)) ) {
                    return true;
                }
                if(options.tipo =='decimal' && val.match(new RegExp('^([0-9]+)\\.([0-9]+)$')) !== null && (!allowsRange || (val >= begin && val <= end)) && (!allowsSteps || (val%steps == 0)) ) {
                    return true;
                }
            }
            return false;
} 
 Validador.prototype.ValidarAlfaNumerico =  function(val, $el) { //$el es el objeto html
            var patternStart = '^([a-zA-Z0-9',
                patternEnd = ']+)$',
                additionalChars = $el.attr('data-validation-allowing'),
                pattern = '';

            if( additionalChars ) {
                pattern = patternStart + additionalChars + patternEnd; 
            } else {
                pattern = patternStart + patternEnd;               
            }

            return new RegExp(pattern).test(val);
} 
Validador.prototype.ValidarPersonalizado = function(val, $el) {
            var regexp = new RegExp($el.valAttr('regexp'));
            return regexp.test(val);
} 
Validador.prototype.ValidateHour = function (value){
			var validaHoras = false;
			var validaMinutos = false;
			var datos = value.split(':');
			if(datos.length!=2){
				return false;
			}
			if(parseInt(datos[0])<=23&&(parseInt(datos[0])>=0)){
					validaHoras = true;
			}
			if(parseInt(datos[1])<=59&&(parseInt(datos[1])>=0)){
					validaMinutos = true;
			}
				return validaHoras&&validaMinutos;
}
Validador.prototype.ValidarFecha= function(date, df) { 
    //junto con date picker se personaliza el formato, lo cual complica esta logica
//df formato de fecha pesronalizado  ejemplo df: yy/MM/dd  => 2015/01/31 
            var dateFormat = 'yy-mm-dd';
                dateFormat = df.format;
            return this.parseDate(date, dateFormat) !== false;
} 
Validador.prototype.parseDate =  function(val, dateFormat) {

            var divider = dateFormat.replace(/[a-zA-Z]/gi, '').substring(0,1),
                regexp = '^',
                formatParts = dateFormat.split(divider),
                matches, day, month, year;

            //en este punto tenemos el formato desarmado en 3 partes, date picker tiene una particularidad
            //con los formatos, (y) = 2 digitos, y (yy) es 4 digitos
            $.each(formatParts, function(i, part) {
                if(part=='y'){
                    regexp += (i > 0 ? '\\'+divider:'') + '(\\d{'+2+'})';
                }
                else if (part=='yy'){
                    regexp += (i > 0 ? '\\'+divider:'') + '(\\d{'+4+'})';
                }
                else {
                    regexp += (i > 0 ? '\\'+divider:'') + '(\\d{'+part.length+'})';
                }
            });

            regexp += '$';
            matches = val.match(new RegExp(regexp));
            if (matches === null) {
                console.log('murio aqui');
                return false;
            }

            function parseDateInt (val) {
              if (val.indexOf('0') === 0) {
                val = val.replace('0', '');
              }
              return parseInt(val, 10);
            }
            
            function isShortMonth (m) {
                return (m % 2 === 0 && m < 7) || (m % 2 !== 0 && m > 7);
            }

            var findDateUnit = function(unit, formatParts, matches) {
                for(var i=0; i < formatParts.length; i++) {
                    if(formatParts[i].substring(0,1) === unit) {
                        return parseDateInt(matches[i+1]);
                    }
                }
                return -1;
            };
        
            month = findDateUnit('m', formatParts, matches);
            day = findDateUnit('d', formatParts, matches);
            year = findDateUnit('y', formatParts, matches);
        
            if ((month === 2 && day > 28 && (year % 4 !== 0  || year % 100 === 0 && year % 400 !== 0)) 
            	|| (month === 2 && day > 29 && (year % 4 === 0 || year % 100 !== 0 && year % 400 === 0))
            	|| month > 12 || month === 0) {
                return false;
            }
            if ((isShortMonth(month) && day > 30) || (!isShortMonth(month) && day > 31) || day === 0) {
                return false;
            }
            
            return [year, month, day];
}
Validador.prototype.ValidarRango = function(value, options) {			
			var respuesta = true;
			if(options.max != undefined)
				respuesta =(value <= parseInt(options.max,10))&& respuesta;   
			
			if(options.min != undefined)			
				respuesta = (options.min != undefined &&  value >= parseInt(options.min,10)) && respuesta; 					
					
            return respuesta; 
 }
 
 Validador.prototype.ValidarTexto = function(value) {			
			var respuesta = true;					
			respuesta = value.match(/^([a-zÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõÑñöùúûüýÿ])+$/i, '') !== null  && respuesta; 
            return respuesta; 
 }
Validador.prototype.ValidarLongitud = function(val, $el) {
  
            var lengthAllowed = $el.valAttr('length'),
                type = $el.attr('type');

            if(lengthAllowed == undefined) {
                var elementType = $el.get(0).nodeName;
                alert('Please add attribute "data-validation-length" to '+elementType+' named '+$el.attr('name'));
                return true;
            }

            // check if length is above min, below max or within range.
            var len = type == 'file' && $el.get(0).files !== undefined ? $el.get(0).files.length : val.length,
                lengthCheckResults = this.ValidarRango(len, lengthAllowed),
                checkResult;

            switch(lengthCheckResults[0])
            {   // outside of allowed range
                case "out":                   
                    checkResult = false;
                    break;
                // too short
                case "min":                   
                    checkResult = false;
                    break;
                // too long
                case "max":                   
                    checkResult = false;
                    break;
                // ok
                default:
                    checkResult = true;
            }
            
            return checkResult;
 }
 
 Validador.prototype.ValidarObligatorio = function(val) { 
            /*switch ( $el.attr('type') ) {
                case 'checkbox':
                    return $el.is(':checked');
                case 'radio':
                    return $container.find('input[name="'+$el.attr('name')+'"]').filter(':checked').length > 0;
                default:*/
                    return $.trim(val) !== '';
            //}
 }