// Functions

// It's a part of code that you can use more than ones

function sayHello() {   // function declaration
    console.log("hello");
}

sayHello(); // function call


// function declaration
function sayBye(user) {   // user is parameter
    return `bye ${user}!`; // return is a key word that specify what is function result;
}

//Function declaration uses hoisting so we can call function before declaration

sayBye('Mariusz');

const result = sayBye("Mariusz");
console.log(result)

// function expression

const add2 = function(arg1, arg2) {
    return arg1 + arg2;
}

console.log(add2(2,4))

// function expression is not working with hoisting so we can't call function before declaration

//
//
// Place for arrow function
//



// Pure function
// is function with features:

// is determistic - for the same parameters always return same result

// result depends only of parameters

// not modifing external values and variables

// don't have side effects like: DOM manipulation, HTTP requests, In/Out operation

//EXAMPLES: array.push() is not pure function becouse it modify array
// array.concat() is pure function becouse it concats two arrays in to new one without modifying them


// First class function

// in JS every function is a first class function,
// in programing language when function is treated like every variable

// first class function have features:

// u can use it as function call argument

// return as function result

// assign to variable like any other value

