"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposite(amount) {
        if (amount <= 0)
            throw new Error("Amount should be positive");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account2 = new Account(123, "Ali Raza", 0);
account2.deposite(100);
console.log(account2.balance);
console.log(account2 instanceof Account);
class SeatAssignment {
}
let seatAssignment = {
    A1: "john",
    A2: "ali",
};
let seats = new SeatAssignment();
seats.A3 = "Ali raza";
console.log(seatAssignment.A1);
console.log(seats.A3);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get acticeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.acticeRides);
class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    get fullName() {
        return this.fName + " " + this.lName;
    }
    talk() {
        console.log("talking");
    }
    walk() {
        console.log("walking");
    }
}
class Student extends Person {
    constructor(sId, fName, lName) {
        super(fName, lName);
        this.sId = sId;
    }
    takeTest() {
        console.log("taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return "Principle " + super.fullName;
    }
}
let teacher = new Teacher("john", "smith");
console.log(teacher.fullName);
printName([
    new Student(1, "Haider", "Ali"),
    new Teacher("john", "smith"),
    new Principle("Muznah", "Rehman"),
]);
function printName(people) {
    for (let person of people)
        console.log(person.fullName);
}
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`Drawing a circle with radius ${this.radius} and color ${this.color}`);
    }
}
let shape = new Circle(3, "red");
console.log(shape.render());
class GoogleCalender {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
//# sourceMappingURL=oop.js.map