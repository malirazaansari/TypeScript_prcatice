console.log("Hello world");

let age: number = 21;
console.log(age);

if (age < 50) age += 10;
console.log(age);

let sales = 123_456;
let fullName = "Ali Raza";
let is_published = true;
let level;

//tuples
let user: [number, string, boolean, number] = [1, "ali", true, 2];

// enum
const small = 1;
const medium = 2;
const large = 3;

//Pascal case
//rest values will assign byself with ++ of 1st
enum Size {
  Small = 1,
  Medium,
  Large,
}

//function
function calculateTax(income: number, texYear = 2022): number {
  if (texYear < 2022) {
    return income * 1.1;
  } else {
    return income * 1.2;
  }
}

console.log(calculateTax(20000, 2023)); //we cannot give thrid parameter here its no js its ts not accept

//objects
const employee: {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void; //return type should be given if function in objects
} = {
  id: 2,
  name: "ALi",
  retire: (date: Date) => {
    console.log(date);
  },
};
// employee.name = "ALi raza";
