// Objects are unordered collections of data.
// Object property consists of pair: key and value.

// JavaScript is built of the basis of objects so almost
// everything in JS is object.

// How to create object:

const myObj = {};
const myObj2 = new Object();

// Example Object

const team = {
    name: "team",   // key: name, value: "team";
    members: 4,
    5: 6,
    count: function () {              // we can also use notation" count() {}
        return this.members;
    },
}

// Adding properties

team.adress = "przykładowa ulica";
team['city'] = "Gdańsk";

// Reading properties

console.log(team.name);
console.log(team[5]);  // this kind of notation is usefull when key is a number,

// function asigned to object is called method

// Method calling

team.count();
team['count']();

// Deleting property

delete team.city;

// Nesting properties

const user = {
    name: "Joe",
    surname: "Doe",
    adress: {
        city: "Gdańsk"
    }
}

console.log(user.adress.city);

// Optional chaining

user?.orders.count; // if we don't know is property orders in user object we cant use
                    //   optional chaining

// Objects methods

Objects.values(team) // returning values
Objects.keys(team)  // returning keys

// Iteration

for (value of Object.values(team)) {
    console.log(value);
}

for (key of Object.keys(team)) {
    console.log(key);
}

for (const [key, value] of Object.entries(team)) {
    console.log(value);
    console.log(key);
}

console.log(Object.entries(team)); // [key, value], [key, value], ...
console.log(Object.fromEntries(team)) // builds object from array