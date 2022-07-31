"use strict";
let sales = 123455;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
numbers.forEach((n) => n.toFixed);
let user = [1, "Waheed"];
user.push(1);
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 1,
    name: "Captain",
    retire: (date) => {
        console.log(date);
    },
};
