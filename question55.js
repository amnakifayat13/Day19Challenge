/* Double Numbers in an Array: Make a list of numbers. Then use a trick to make a new list where each number
is twice its own value. */
console.log("Twice Numbers");
var numberList = [1, 2, 3, 4, 5];
var twiceNumbers = numberList.map(function (number) { return number * 2; });
console.log(twiceNumbers);
console.log("Exponent Numbers");
// Exponent
var numberList1 = [1, 2, 3, 4, 5];
var exponentNumbers = numberList.map(function (number) { return Math.pow(number, 2); });
console.log(exponentNumbers);
