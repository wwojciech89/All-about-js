// Operators

// Arithmetic Operators

 1 + 2; // adding
 3 - 1; // substraction
 5 * 2; // multiplication
 4 / 2; // dividing
 4 % 3; // remainder - returns remainder left over when we devide one operand by another.

 // it works exactly like math operations

// Assignment operators
let x = 1; // assign the number to the variable
x += 10; // add 10 to value of x which was 1 so x is 11 now
// works exact the same as x = x + 10
x -= 1;
x *= 5;
x /= 7;
x %= 3;

//Post-incrementation // Pre-incrementation
let num = 5;
num++ // post-incrementation, num will be 6 in next line
num = num + 1 // this is not the same becouse in this example num is 6 now;
++num // this time it will works exactly as num = num + 1;

//Post-decrementation // Pre-decrementation
// works exactly the same
let num2 = 5;
num2--;
num2 = num2 - 1;
--num2

//Comparison Operator
let a = 1;
let b = 2;

a == b; // false
a != b; // true
a < b; // true
a > b; // false
a >= b // false
let c = "1";
a == c // true, comparison, implicit conversion
a === c // false, comparision with strict checking data type

// Logical Operators

let first = true;
let second = false;

first && second; // false, opeartor and
first || second; // true, operator or
// ! - operator not, if we are checking it's true ? when we put ! befre we are checking it's not true;
first && !second; // true

// Single-valued operators

const obj = {
    property: 'value';
};

delete obj.property; // delete property

typeof obj; // return typeof value

void obj; // when we want to execute exoression but don;t want to return any value;


// Relational Operators

console.log('property' in obj); // returns true if the property is in object;
console.log(obj instanceof Object) // checking if object is an instance of class;


