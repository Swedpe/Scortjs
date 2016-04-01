function unescapeHTML(html) {
	var htmlNode = document.createElement("DIV");
	htmlNode.innerHTML = html;
	if(htmlNode.innerText !== undefined)
	return htmlNode.innerText; // IE
	return htmlNode.textContent; // FF
	
}
function isNumber (o) {
	  return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
}
function parseDouble(value){
  if(typeof value == "string") 
    value = value.match(/^-?\d*/)[0];
	
  return !isNaN(parseInt(value)) ? value * 1 : NaN;
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
