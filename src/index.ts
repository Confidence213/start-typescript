/* Starting with the Hello world syntax */

function doIt() {
  console.log("Hello World!");
}

// console.log("Hello World!");

/* Variables types in TS */

// let age: number = 20;

/* Built in types in typescript */

// let sales: number = 123_455;
// let course: string = "TypeScript";
// let is_published: boolean = true;

// let level;

/* The type any in TypecScript */

let sales: number = 123_455;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;

function render(document: any) {
  console.log(document);
}

/* The Arrays in TSc */

let numbers: number[] = [1, 2, 3];
numbers.forEach((n) => n.toFixed);

/* Tuples */

let user: [number, string] = [1, "Waheed"];
user.push(1);

/* Enums in tsc */

// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

/* Functions in TSC */
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(10_000);

/* Objects in TypeScript */

// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Captain",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

/***  Section 3 ***/

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};
let employee: Employee = {
  id: 1,
  name: "Captain",
  retire: (date: Date) => {
    console.log(date);
  },
};

/* Union types */

function kgToLbs(weight: number | string): number {
  //Narrowing

  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

/* Interscetion type */

let weight: number & string;

type Draggable = {
  drag: () => void;
};
type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

/* Literal types */
// We use this to limit any value in ts.
// Literal (exact, specific value)
type Quantity = 50 | 100; //---> Literal
//let quantity: 50 | 100; //hard coded
let quantity: Quantity = 100;

/* Nullable types */

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);

/* Optional Chaining */

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());

//Optional element access operator

//optional call operator
let log: any = null;
log?.("a");
