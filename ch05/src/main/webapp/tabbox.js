// DOM Level 2 Event 처리: element의 event의 Listener를 등록 방식
// 2) JavaScipt code(DOM API)로만 작성하기

var onTabClicked = function() {
	// unselected
	var lisSelected = document.getElementsByClassName("selected");
	(lisSelected.length == 1) && (lisSelected[0].className = "");
	
	// selected
	this.className = "selected";
};


 
window.onload = function() {
	var divTabBox = document.getElementsByClassName("tab-box")[0];
	console.log(divTabBox.childNodes);
	
	var ul = divTabBox.childNodes[1];
	var liTabs = ul.getElementsByTagName("li");
	
	for(var i = 0; i < liTabs.length; i++){
		liTabs[i].addEventListener("click", onTabClicked);
	}
}