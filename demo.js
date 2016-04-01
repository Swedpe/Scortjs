function unescapeHTML(html) {
	var htmlNode = document.createElement("DIV");
	htmlNode.innerHTML = html;
	if(htmlNode.innerText !== undefined)
	return htmlNode.innerText; // IE
	return htmlNode.textContent; // FF
	
}

function escapeHTML(str) {
    return String(str)
            .replace(/á/g, '&aacute;')
			.replace(/é/g, '&eacute;')
			.replace(/í/g, '&iacute;')
			.replace(/ó/g, '&oacute;')
			.replace(/ú/g, '&uacute;')
			.replace(/Á/g, '&Aacute;')
			.replace(/É/g, '&Eacute;')
			.replace(/Í/g, '&Iacute;')
			.replace(/Ó/g, '&Oacute;')
			.replace(/Ú/g, '&Uacute;')
			.replace(/ñ/g, '&ntilde;')
			.replace(/Ñ/g, '&Ñtilde;')			
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}

function isNumber (o) {
	  return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
}
function parseDouble(value){
  if(typeof value == "string") 
    value = value.match(/^-?\d*/)[0];
	
  return !isNaN(parseInt(value)) ? value * 1 : NaN;
}