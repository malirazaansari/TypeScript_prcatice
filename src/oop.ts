class Account {
  //   readonly id: number;
  //   name: string;
  //   private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {
    // this.id = id;
    // this.name = name;
    // this._balance = balance;
  }

  deposite(amount: number) {
    if (amount <= 0) throw new Error("Amount should be positive");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
  //   set balance(value: number) {
  //     if (value < 0) throw new Error("Balance should be positive");
  //     this._balance = value;
  //   }
}

let account2 = new Account(123, "Ali Raza", 0);
account2.deposite(100);
console.log(account2.balance);
console.log(account2 instanceof Account);

//index signature
class SeatAssignment {
  // A1, A2
  // john, ali
  // index signature property
  [seat: string]: string;
}

let seatAssignment: SeatAssignment = {
  A1: "john",
  A2: "ali",
};
let seats = new SeatAssignment();
seats.A3 = "Ali raza";
console.log(seatAssignment.A1); // john
console.log(seats.A3);

//static members
class Ride {
  private static _activeRides: number = 0; // it will member of class and single instance of memory
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
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.acticeRides);

//inheritance
class Person {
  constructor(public fName: string, public lName: string) {}

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
  constructor(public sId: number, fName: string, lName: string) {
    super(fName, lName);
  }
  takeTest() {
    console.log("taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principle extends Person {
  override get fullName() {
    return "Principle " + super.fullName;
  }
}

let teacher = new Teacher("john", "smith");
console.log(teacher.fullName);
// let student = new Student(1, "Ali", "razaansari");
// student.talk();

printName([
  new Student(1, "Haider", "Ali"),
  new Teacher("john", "smith"),
  new Principle("Muznah", "Rehman"),
]);

function printName(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}

//abstract class
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  render() {
    console.log(
      `Drawing a circle with radius ${this.radius} and color ${this.color}`
    );
  }
}

let shape = new Circle(3, "red");
console.log(shape.render());

//interfaces
// abstract class Calender {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }
interface Calender {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalender extends Calender {
  sync(): void;
}

class GoogleCalender implements Calender {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
