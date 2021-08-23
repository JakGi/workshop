let age: any;

age = 23;

age = true;
console.log(age);
age = "Hi";
console.log(age);
age = { name: "Luigi" };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push("mario");
mixed.push(true);

console.log(mixed);

let ninja: {
  name: any;
  age: any;
};

ninja = { name: "mario", age: 23 };
console.log(ninja);

ninja = { name: "luigi", age: "23" };
console.log(ninja);
