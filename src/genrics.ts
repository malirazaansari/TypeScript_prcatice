class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}

  static WrapArray<T>(value: T) {
    return [value];
  }
}

let pair = new KeyValuePair(/*<string, number>*/ "ali", 3); //it can now byself that what value we have assigned to them
pair.value;
let numbers = KeyValuePair.WrapArray(1);

//keyof opeartor
interface Product {
  name: string;
  price: number;
}
class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  //T is Product
  //key of T => name or price
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();

store.add({ name: "Phone", price: 100 });

store.find("name", "Phone");
store.find("price", 100);

//type mapping
interface Products {
  name: string;
  price: string;
}
type ReadOnly<T> = {
  //index signature
  //keyof
  [K in keyof T]: T[K];
};
type Optional<T> = {
  [K in keyof T]?: T[K];
};
type NullAble<T> = {
  [K in keyof T]: T[K] | null;
};
let product: ReadOnly<Product> = {
  name: "a",
  price: 1,
};
