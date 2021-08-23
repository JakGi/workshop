// exlicity types
let character: string;
let age: number;
let isLoggedIn: boolean;
// age = 'ss'
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;


// arrays
let ninjas:string[] = [];
// ninjas = [10, 23]
ninjas = ['joshi', 'mario'];
ninjas.push('shaun'); 

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('hello');
mixed.push(23);
mixed.push(true)
console.log(mixed)
let uid: string|number;
uid = 12;
uid = 'Kuba';
// uid = true

// objects
let ninjaOne: object;
ninjaOne = {name: 'Kuba', age:30}
// ninjaOne = 'heelo'
ninjaOne = []

let ninjaTwo: {
    name: string,
    age: number,
    betlColor: string
}

ninjaTwo = {
    name: 'mario',
    age: 30,
    betlColor: 'Black'
}