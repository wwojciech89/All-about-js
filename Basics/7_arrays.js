// Arrays

// Array declaration:
const oldArrayDeclaration = new Array(); // empty array

const newArrayDeclaration = []; // empty array

// to add value to array just add values in squeare bracket separating them with a comma

const arrayWithValues = [1,2, "a", "sdadsa", someVeriable, [], {}]

//Adding elements to existing array

arrayWithValues.push(6); // arrayWithValues = [1,2, "a", "sdadsa", someVeriable, [], {}, 6] Adding as last element
arrayWithValues.unshift(0); // // arrayWithValues = [0,1,2, "a", "sdadsa", someVeriable, [], {}, 6] Adding as first element

// Removing elements from existing array

arrayWithValues.pop(); // arrayWithValues = [0,1,2, "a", "sdadsa", someVeriable, [], {}] removing last element
arrayWithValues.shift(); // arrayWithValues = [1,2, "a", "sdadsa", someVeriable, [], {}, 6] removing first element

// Removing specific element of array

const newArray = [2,5,34]; // index of numbers starts at 0 so index for 2 is 0, for 5 is 1 and 34 is 2, and so on...

newArray.splice(0,1) // Splice removing or changing value. First parameter (0) is where we are starting nad secound 1 is how many
//parameters we want to remove. So at this point newArray will have to values [5,34]

// if we want to remove last value just as first parameter use -1;

// You can also replace value with splice, just add third parameter like this:

newArray.splice(-1,1,6) // newArray = [5,6];

// Slice - returns part of array depends if we use , or .
// Example:

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
let arrByQty = arr.slice(2.5); // This one returns five further elements starting at index 2
let arrByIndex = arr.slice(2,5); // This one returns all elements starting at index 2 to index 4 (index 5 is the boundary)

arrByQty => [2, 3, 4, 5, 6, 7]

arrByIndex => [2, 3, 4]

// Reading values of Array

const arrayReading = [0,1,2,3,4,5,6]

console.log(arrayReading[0]) // 0
console.log(arrayReading[2]) // 2
console.log(arrayReading[ arrayReading.length - 1]) // 6

// Overwriting values in array

arrayReading[4] = "a"; // const arrayReading = [0,1,2,3,a,5,6]

// Merging Arrays

const name1 = ["Andrzej", "Przemek"]
const name2 = ["Justyna", "Justyna"]

const name3 = name1.concat(name2) // useing concat method
const name4 = [...names1, names2] // useing spread, more frequent option


// Multidimensional arrays 

const oneArrayInAnother = [[1,2,3]]

// to get to value 1 we need to get it like that:

console.log(oneArrayInAnother[0][0])