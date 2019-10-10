var numbers = [1,2,3,4,5,6];
console.log(numbers.length);
var first = numbers[0];
var last = numbers[numbers.length - 1];
console.log(first, last);
numbers.forEach(function(item, index) {
  console.log(item, index);
});
var pos = numbers.indexOf(3)
console.log(pos);
var order = numbers.slice();
console.log(order);

range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));