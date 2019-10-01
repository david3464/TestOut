// 修改input string 成指定格式
const myVariable = '“Hello there”';  
const firstString = 'My String';  
const finalString = firstString.bold().toLowerCase().fontcolor('red');     
document.write(myVariable.big() + '<br>');    
document.write(myVariable.blink() + '<br>');    
document.write(myVariable.bold() + '<br>');    
document.write(myVariable.fixed() + '<br>');    
document.write(myVariable.fontcolor('red') + '<br>');    
document.write(myVariable.fontsize('18pt') + '<br>');    
document.write(myVariable.italics() + '<br>');    
document.write(myVariable.small() + '<br>');    
document.write(myVariable.strike() + '<br>');    
document.write(myVariable.sub() + '<br>');    
document.write(myVariable.sup() + '<br>');    
document.write(myVariable.toLowerCase() + '<br>');    
document.write(myVariable.toUpperCase() + '<br>');    
document.write(finalString + '<br>');   

// 判断数组元素是否重复
//input array
//return array 
var UniqueArr = function(arr) {
  var result = [], json = {};
  for (var i = 0, len = arr.length; i < len; i++){
      if (!json[arr[i]]) {
          json[arr[i]] = 1;
          result.push(arr[i]);  //返回没被删除的元素
      }
  }
  return result;
};

// 判断数组元素是否重复
//input array
//return true/false
var isRepeat = function(arr) {  //arr是否有重复元素
  var hash = {};
  for (var i in arr) {
      if (hash[arr[i]]) return true;
      hash[arr[i]] = true;
  }
  return false;
};

// 生成随机数
//input min and max number 
//return random integer number between min and max
function RandomNum(min, max){
  return min + parseInt((Math.random() * (max-min +1)));
}

