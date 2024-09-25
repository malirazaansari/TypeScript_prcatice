"use strict";
var _a;
const employee2 = {
    id: 2,
    name: "ALi",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLB(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.4;
    }
}
let lastName = {
    draw: () => { },
    move: () => { },
};
let quantity = 50;
function greet2(name) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log("hola");
}
greet2(undefined);
greet2("Ali raza");
greet2(null);
function getCustomer(id) {
    return id === 0 ? null : { brithday: new Date() };
}
let customer = getCustomer(2);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.brithday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let arr3 = [1, 2];
arr3 === null || arr3 === void 0 ? void 0 : arr3[0];
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed4 = null;
let ride = {
    speed4: speed4 !== null && speed4 !== void 0 ? speed4 : 30,
};
let phone3 = (document.getElementById("phone"));
phone3.value;
function render2(document) {
    if (typeof document === "string")
        console.log(document.toLowerCase() + "its a string type document");
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log("hello world");
//# sourceMappingURL=advancetype.js.map