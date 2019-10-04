var a = [1, 2, 5, 3, 1, 2, 8];
var b = [];
var len = a.length;
// console.log(a.sort());
var RD_1 = function() {
  return [...new Set(a)].sort();
}

//return object strings
var RD_2 = function() {
  obj ={};
  for (let i of a ) {
  obj[i] = true;
  }
  b = Object.keys(obj);
  return b;
}

//return number array
var RD_3 = function() {
  a.sort();
  console.log(a)
  let _temp;
  for (let i = 0; i < len; i++) {
    if(a[i] !== _temp) {
      b.push(a[i]);
      console.log(b);
      _temp = a[i];
    }
  }
  return b;
}

//return number array
var RD_4 = function() {
  for (let i = 0; i < len; i++) {
    if(b.indexOf(a[i]) === -1) {
      b.push(a[i]);
    }
  }
  return b;
}

console.log(RD_1());

console.log(1/10);