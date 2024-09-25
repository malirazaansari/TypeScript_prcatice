// type alasises
type Employee = {
  readonly id: number;
  name?: string;
  retire: (date: Date) => void;
};

const employee2: Employee = {
  id: 2,
  name: "ALi",
  retire: (date: Date) => {
    console.log(date);
  },
};

//union type
function kgToLB(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.4;
  }
}

//intersection
type Draggable = {
  draw: () => void;
};
type Resizeable = {
  move: () => void;
};
type UIWidget = Draggable & Resizeable;
let lastName: UIWidget = {
  draw: () => {},
  move: () => {},
};

//litral types(excat or specific value)
type Quantit = 50 | 100;
let quantity: Quantit = 50; //now its value will be 50 or 100 nothing else we can use it as a type alasise

//nullable values
function greet2(name: string | null | undefined) {
  if (name) console.log(name.toLowerCase());
  else console.log("hola");
}
greet2(undefined);
greet2("Ali raza");
greet2(null);

//optional chaining
type Customer = {
  brithday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { brithday: new Date() };
}
let customer = getCustomer(2);
// if (customer !== null && customer !== undefined) console.log(customer.brithday);
//optional property access operator
console.log(customer?.brithday?.getFullYear());

//optional element access operator for array use
let arr3 = [1, 2];
arr3?.[0];
//optional call
let log: any = null; // (message: string) => console.log(message)
log?.("a"); // if it is refrence function it only runs then otherwise no

//nullish coalecseing operator
let speed4: number | null = null;
let ride = {
  //falsy (undefined, null , false, 0 ,"")
  speed4: speed4 ?? 30, //speed4 !== null ? speed4 : 30, //speed4 || 30,
};

//type assertion
let phone3 = (<HTMLInputElement>(
  document.getElementById("phone")
)) as HTMLInputElement;
//HTMLElement
//HTMLInputElement <> is also same as "as" keywords
phone3.value; // now we can access value property after as keyword before it we cant use that

//unknwon type
function render2(document: unknown) {
  if (typeof document === "string")
    console.log(document.toLowerCase() + "its a string type document");
  //   document.fly();
  //   document.move();
}

//nerver type
function processEvents(): never {
  while (true) {
    //..........
  }
}
processEvents();
console.log("hello world"); //now this code is unreachable due to never type
