
var RTI13_1 = function(num) {
  var result= "";
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
  for (var key in RomanToNumber){
    if(num >= RomanToNumber[key]){
      result += key.repeat(Math.trunc(num/RomanToNumber[key]));
      num -= RomanToNumber[key]*Math.trunc(num/RomanToNumber[key]);

    }
  }
  return result;
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
  var result = "";

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
  return result;
};

var RTI13_3 = function(num) {
  var result= "";
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
  return result;
};


console.log(RTI13_1(1234));
// console.log(RTI13_2(3876));