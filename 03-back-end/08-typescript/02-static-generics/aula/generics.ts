function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação



interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
  console.log(message);
  return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber = processor(100, "Olá");
// let returnString = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".