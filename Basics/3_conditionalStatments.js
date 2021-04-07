
// Conditional Statments

// based on boolean values /true-false/


const condition1 = true;
const condition2 = false;

if (condition1) {
    console.log(condition1);
} else if (condition2) {
    console.log(condition2);
} else {
    console.log("nothing happend")
}

// if value is true execute the code
// if else - if condition before was false check this condition if true, execute
// else - if noting before conditions failed execute this code

switch (condition1) {
    case true:
      console.log('true');
    break;
    case false:
        console.log('not true');
    break;
    default:
        console.log('maybe true');
    break;
}

// Same as before, default works like else, and case represents if statments.
// switch is used when the condition statment is very large

// Ternary Operator // Conditional Operator
// shorter form of if statment

result = true ? yes : no;

// condition before ? is true? than execute first statment if not execute secound statment (after : )
// never nest one ternary in another
// don't use ternary operator if you are not returning enything like this:

user.valid ? user.save() : user.printErrors()