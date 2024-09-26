"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    static WrapArray(value) {
        return [value];
    }
}
let pair = new KeyValuePair("ali", 3);
pair.value;
let numbers = KeyValuePair.WrapArray(1);
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let store = new Store();
store.add({ name: "Phone", price: 100 });
store.find("name", "Phone");
store.find("price", 100);
let product = {
    name: "a",
    price: 1,
};
//# sourceMappingURL=genrics.js.map