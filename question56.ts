/* Keep Only String: Given a mix of different types of items, make a new list that has only words.*/


let mixedArray = ["Karachi", 10, true, "Car", "TypeScript", false, 52]
let StringArray = mixedArray.filter(item => typeof item === "string")
console.log(StringArray);
