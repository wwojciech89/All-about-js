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
//parameters we want to remove