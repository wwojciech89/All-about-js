// Prototype - object that each function in JS has, and it's used to add properties available in every instance of function.
// Every object created based on this function will have access to the same prototype

// Example

function Vehicle(name, color) {
    const car = Object.create(Vehicle.prototype)

    car.name = name;
    car.color = color;
    car.engineStatus = "off";

    return car;
}

Vehicle.prototype.startEngine = function() {

    this.engineStatus = "on";
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
}
Vehicle.prototype.stopEngine = function() {

    this.engineStatus = "off";
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
}

const car1 = Vehicle(`Mustang`, `red`);