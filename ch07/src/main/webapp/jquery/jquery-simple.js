// 간단 jquery 만들어 보기
var jQuery = function(selector){
    if(typeof(param) === 'function'){
        window.addEventListener("load", param);
        return;
    }

    if(typeof(param) === 'string'){
        var elements = document.querySelectorAll(param);
        return new _jQuery(elements);
    }
}

var _jQuery = function(elements){ // 유사배열이라서 forEach는 사용 못함
    this.length = elements.length;
    for(var i = 0; i < elements.length; i++){
        this[""+i] = elements[i]; // number -> string
    }
}

_jQuery.prototype.css = function(name, value){
    for(var i = 0; i < this.length; i++){
        this[i].style[name] = value;
    }
}

_jQuery.prototype.get = function(index){
    return this[index];
}

_jQuery.prototype.click = function(handler){
	for(var i = 0; i < this.length; i++){
		this[i].addEventListener("click", handler);
	}
}

var $ = jQuery;