var controlVal = 3;
var multiplier = function(number, phase) {
    var val = controlVal ++;
    return val;
};
console.log(multiplier(22, 2));
console.log(multiplier(22, 2));
console.log(multiplier(22, 2));