// JavaScript Function
function MultiplyTwoNumbers(x1, y1) {
    return x1 * y1;
}
let Result = MultiplyTwoNumbers(5, 10);
console.log(Result);

// Function Return 
var x = MyFunction(3, 4);

function MyFunction(a, b) {
    return a * b;
}
console.log(x);

// Why Functions?
// Convert Fahrenheit to Celsius:

var Celsius = toCelsius(77);
function toCelsius(f) {
    return (5 / 9) * (f - 32);
}
console.log(Celsius);

// Object Definition

// 1st way 
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(person.firstName + ' is ' + person.age + ' Years Old ');
// 2nd Way 
console.log(person['firstName'] + ' is ' + person['age'] + ' Years Old ');

// JavaScript Strings
let text = 'dhdwgbfwefejfh';
console.log(text.length);