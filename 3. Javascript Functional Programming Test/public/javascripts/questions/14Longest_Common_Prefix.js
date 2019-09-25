var LCP14_1 = function(str) {
  let prefix = "";
  if (str.length === 0 ) return prefix;
  for (let i = 0; i < str[0].length;i++) {
    const char = str[0][i];
    for (let j = 0; j < str.length;j++) {
      if (str[j][i] !== char ) return prefix
    }
    prefix = prefix + char;
  }
  return prefix;
}

let array_1 = ["apple", "apply", "append"];

console.log(LCP14_1(array_1));