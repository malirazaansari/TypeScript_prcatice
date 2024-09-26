type ComponentOptions = {
  selector: string;
};

//Decorator Factory.....Parameterized decorator
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("inserting the component in the DOM");
    };
  };
}
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.Pipe = true;
}
@Component({ selector: `#my-profile` })
@Pipe
//f(g(x))
class ProfileComponent {}

//method decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args2: any) {
    console.log("Before");
    original.call(this, ...args2);
    console.log("After");
  };
}
class Person1 {
  @Log
  say(message: string) {
    console.log("Person says" + message);
  }
}

let person = new Person1();
person.say("Hello");
//Accessor decoratoers set and get
//property decoratoers
//parameter decoratoers
