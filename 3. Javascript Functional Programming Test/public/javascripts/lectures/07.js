function sum () {
  // alert(arguments.length);
  result = 0; 
  for (let i = 0;i<arguments.length;i++) {
    result += arguments[i];
  };
  return result;
};

function css(obj, name, value) {
  if(arguments.length == 2){
    return ojb.style[name];
  } else {
    obj.style[name] = value;

  }
}

function getStyle(obj, name) {
  if(obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj,false)[name];
  }
}

var arr = [1,3,6,2,4,7,0,3,56,7,4,6,4,6]
arr.sort(function(n1, n2){
  return n1-n2
})
console.log(arr);




window.onload = function() {
  var oDiv1 = document.getElementById('div1');
  console.log(getStyle(oDiv1, 'width'));
}