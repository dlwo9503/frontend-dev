const req01 = function(url, callback){ // req01는 db.query, $ajax 와 유사하다
    console.log('req01 [' + url + ']');
    setTimeout(() => {
        const resp = {
            data: "Hello World"
        }
        callback(resp);
    }, 1000);
}

req01("http://www.kickscar.com/api", function(response){
    console.log(response);
})

console.log("aaaa");