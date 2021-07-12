module.exports = {
    PI: 3.14,
    min: function () {
        let min = Number.MAX_SAFE_INTEGER;
        Array.from(arguments).forEach(e => {
            min = e < min ? e : min;
        });
        return min;
    },
    max: function () {
        let max = Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(e => {
            max = e > max ? e : max;
        });
        return max;
    }
}

// exports.sum = function(){ // 이런식으로 혼용되게 사용 못함
// } // 이부분은 무시됨