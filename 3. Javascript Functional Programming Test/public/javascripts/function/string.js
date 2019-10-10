var numbers = [1,2,3,4,5,6];
console.log(numbers.length);
var first = numbers[0];
var last = numbers[numbers.length - 1];
console.log(first, last);
numbers.forEach(function(item, index, array) {
  console.log(item, index);
});