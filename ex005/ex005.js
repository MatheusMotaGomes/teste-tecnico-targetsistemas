function inverterString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }
  return reversedStr;
}


let minhaString = prompt("Digite algo :")
let stringInvertida = inverterString(minhaString);
alert(stringInvertida);
