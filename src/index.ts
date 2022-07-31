/* Starting with the Hello world syntax */

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
