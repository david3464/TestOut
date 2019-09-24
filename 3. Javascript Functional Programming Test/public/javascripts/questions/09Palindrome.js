var P09_1 = function(str) {
  var reg = /[\W_]/g;
  var smallStr = str.toLowerCase().replace(reg, "");
  console.log(smallStr);
  var result = smallStr.split("").reverse().join("");
  if (result === smallStr) return true + " " + result;
  return false;


}; 

console.log(P09_1("racecar!"));
