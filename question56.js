/* Keep Only String: Given a mix of different types of items, make a new list that has only words.*/
var mixedArray = ["Karachi", 10, true, "Car", "TypeScript", false, 52];
var StringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(StringArray);
