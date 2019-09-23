
var RTI13_1 = function(num) {
  var roman= "";
  var RomanToNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  return roman;
};

var RTI13_2 = function(num) {
  var romantonum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  // console.log(RomanToNum);
  var roman = "";

  for (var key in RomanToNum) {
    // console.log("key: ", key);
    // console.log("value: ", RomanToNum[key]);
    while (num>= RomanToNum[key]){
      roman += key;
      console.log(roman);
      num -= RomanToNum[key];
      console.log(num);
    }
  };
  return roman;
};

var RTI13_3 = function(num) {
  var roman= "";
  var roman_number = ["M", "CM", "D","CD","C", "XC","L", "XL", "X", "IX", "V", "IV", "I"];
  var number = ["1000", "900", "500","400","100", "90","50", "40", "10", "9", "5", "4", "1"];
  for (var i = 0; i <number.length; i++){
    while (num >= number[i]){
      roman += roman_number[i];
      num -= number[i];
      console.log(roman);
      console.log(num);
    }
  }
  return roman;
};


console.log(RTI13_1(3001));
// console.log(RTI13_2(3876));