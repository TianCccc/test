// This is my first  JavaScript code!
console.log('Hello World');

// let name = 'txu';
// console.log(name);

let firstName = 't', lastName = 'xu';
let FirstName;

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let name = 'txu' // String
let age = 24 // Number
let hi = 24.1 // Number
let isApproved = true; // Boolean
let test = undefined;
let selectedColor = null;

// Object
let person = {
    name: 'txu',
    age: 24
}
// Dot Notation
person.name = 'John';
// Bracket Notation
let seletcion = 'name';
person[selectedColor] = 'Mary';

// Array
let selectColors = ['red', 'blue'];
selectColors[2] = 1;
console.log(selectColors[0]);

// Functions
function greet() {
    console.log('Hello World');
}

greet();

function greets(hhh) {
    console.log('Hello ' + hhh);
}

greets('Txu');

function greetss(hhh, ttt) {
    console.log('Hello ' + hhh + ' '+ ttt);
}

greetss('Txu');

function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);