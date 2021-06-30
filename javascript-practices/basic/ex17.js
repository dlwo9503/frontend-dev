console.log("===global===");
global.name = "둘리";
console.log(name, global.name);
var email = "dlwo9503@naver.com";
console.log(email, global.email);

console.log("===function 객체 메서드 apply===");

var f1 = function(){
    console.log(this);
}
f1();

// this 바꾸기
var o = {
    name: "마이콜"
}
f1.apply(o); // 함수 호출

console.log("===function 객체 메서드 call===");
var f2 = function(s){
    console.log(s + ":" + this.name);
}
f2.call(o, "hi"); // 함수 호출