import {
  LogClassWithLevel,
  LogMethodWithLevel,
  addID,
  logClass,
  logMethod,
} from "./decorators";

@LogClassWithLevel("INFO")
@logClass
@addID
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @LogMethodWithLevel("INFO")
  @logMethod
  sayHi(surname: string) {
    console.log(`Hi, I'm ${this.name} ${surname}`);
  }
}

const person = new Person("Nazar");

person.sayHi("Pasha")

console.log(person); 
