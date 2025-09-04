//votre code ici
function printNumbers(n) {
  let string = "";
  for (let i = 1; i <= n; i++) {
    string = string + i + " ";
  }
  return string.trim();
}
export default printNumbers;

console.log(printNumbers(5));
