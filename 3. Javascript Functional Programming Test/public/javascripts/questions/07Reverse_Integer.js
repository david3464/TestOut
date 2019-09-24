/*
Specifications 
    Input 321
    Output 123
*/
// solution 1
var RI07_1 = function(num) {
    var y;
    if(num < 0){
        y=num.toString().split('').reverse();
        console.log(y);
        y.unshift('-');
        y.pop();
        y = parseInt(y.join(''));
        //Check for 32 bit outside of bounds
        if(y < -2147483648 ) {
            return 0
        }
        //positive case start here
    } else {
        y = parseInt(num.toString().split('').reverse().join(''));
        //Check for 32 bit outside of bounds
        if (y > 2147483648) {
            return 0
        } 
    }
    return y
}

// solution 2 
var RI07_2 = function (num) {
    var a = num.toString().split('').reverse().join('');
    //split is return the first one ps: if negative sign is return NaN
    return parseInt(a)*Math.sign(num);
}

// solution 3
var RI07_3 = function (num) {
    //create xstring var to change x to string
    //create result to return at the end (empty string)
    var xstring = num.toString();
    var result = '';
    //if (xstring[first])is '-' 
        //append '-' to result string
        //splice first character of string
    //else if (xstring[last] is 0)
        //splice last character of string 
    if (xstring[0] === '-'){
        result += '-';
        xstring = xstring.slice(1);
    } else if (xstring[xstring.length - 1] === '0'){
        xstring = xstring.slice(0, xstring.length-1)
    }

    for (var i = xstring.length -1; i >=0; i--){
        result += xstring[i];
    }
    //xstring that is perfectly ready to go through a for loop
    //reverse for loop through x string
    return (parseInt(result));
};

console.log(RI07_3(1230));
console.log(RI07_3(-4560));
console.log(RI07_3(5600));
