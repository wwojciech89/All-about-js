
// Variable

// It is used to storage informations / values

 let myName = "Mariusz";

//  Here are three things going on:
//  Declaration / Initialization* (more info below in Hoisting paragraph) / Assign

// let - declaration, myName - identifier/ name, "Mariusz" - value;

//  In this case we declared/ initiated veriable and assign it with value "Mariusz"

 let myAge;
 myAge = 32;

//  In this case we first declared / initiated veriable with no value,
//  and then assing it with value 32.

//  So at this point we know that process to create veriable is named DECLARATION
//  and process of value assignment is named ASSIGN


// There are keywords that allowes us to create veriables:

// 1. var

// var is oldest one before it was the only way to create veriables in JS before 2015.
// we don't use it alot in modern coding

// var declaretion sets value to undefined if there is no assigne.
// var is the only keyword that can redelcare veriable what is disordely

var mySport = "boxing";
var mySport = "surfing";

// u can't do this with let or const
// var has function scope


// 2. let

// new keyword ES6

// let has a block scope
// u can't redeclare veriable
// let declaretion sets value to undefined if there is no assigne.

// 3. const

// new keyword ES6

//  const has a block scope
//  can't be redeclare veriable
//  need to be assigned after declaration
//  value can't be changed
//  const declaretion sets value to undefined if there is no assigne.



// HOSITING in veriables

// is mechanism in which declared veriable is hoisted to the top of scope in which it was assigned.

console.log(myCar);  // myCar = undefined
var myCar = "ford";
console.log(myCar);  // myCar = ford

// One more time, creating veriable in JS is:
// Delcaration - creates veriable in scope
// *Initialization - reserving space in memory
// Assign - assign value to veriable

console.log(carType); // cartType is not defined
let carType = "focus";
console.log(carType); // carType = "focus"

// when we are useing var, hoisted are Declaration and Initialization, there for we have undefined
// when we are useing let or const, hoisted is only Delcaration so result is only "is not defined"