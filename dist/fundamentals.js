"use strict";
console.log("Hello world");
let age = 21;
console.log(age);
if (age < 50) age += 10;
console.log(age);
let sales = 123456;
let fullName = "Ali Raza";
let is_published = true;
let level;
let user = [1, "ali", true, 2];
const small = 1;
const medium = 2;
const large = 3;
var Size;
(function (Size) {
  Size[(Size["Small"] = 1)] = "Small";
  Size[(Size["Medium"] = 2)] = "Medium";
  Size[(Size["Large"] = 3)] = "Large";
})(Size || (Size = {}));
function calculateTax(income, texYear = 2022) {
  if (texYear < 2022) {
    return income * 1.1;
  } else {
    return income * 1.2;
  }
}
console.log(calculateTax(20000, 2023));
//# sourceMappingURL=index.js.map
