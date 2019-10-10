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

//提示出本网址的所有信息
document.write('<p>Here’s some information about this document:</p>');    
document.write('<ul>');    
document.write('<li>Referring Document: ' + document.referrer + '</li>');    
document.write('<li>Domain: ' + document.domain + '</li>');    
document.write('<li>URL:'  + document.URL + '</li>'); 
document.write('</ul>'); 
console.log('Here’s some information about this document:');    
console.log('Referring Document: ' + document.referrer );    
console.log('Domain: ' + document.domain );    
console.log('URL:'  + document.URL ); 

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

// 弹出确认(ok)或者取消(cancel)
//alert ok or cancel 
//return the result in the website
var userChoice = window.confirm('Choose OK or Cancel');
var result = (userChoice == true) ?'OK' : 'Cancel';
document.write(result);    



var myOffset = -2;    
var currentDate = new Date();    
var userOffset = currentDate.getTimezoneOffset()/60; 
var timeZoneDifference = userOffset - myOffset;    
currentDate.setHours(currentDate.getHours() + timeZoneDifference);    
document.write("The time and date in Central Europe is: " + currentDate.toLocaleString()); 


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

// x = findMax(1, 123, 500, 115, 44, 88);
function FindMax() {
  var i, max = arguments[0];
  if(arguments.length < 2) return max;

  for (i = 0; i < arguments.length; i++) {
      if (arguments[i] > max) {
          max = arguments[i];
      }
  }
  return max;
}

// x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  var i, sum = 0;
  for(i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
} 