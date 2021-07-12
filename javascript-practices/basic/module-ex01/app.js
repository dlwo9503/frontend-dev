/* app module */

const App = function(){
    const app = {};
    app.textContent = "Hello World";

    return app;
}

module.exports = App; // App를 모듈화 시켜서 내보내기, 함수 하나만 내보낼 수 있음

// module.exports = function(){ // 이런식으로도 사용 가능
//     const app = {};
//     app.textContent = "Hello World";
//     return app;
// }