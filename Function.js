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

// Local Variables
function xFunction() {
    let carName = 'Shakil  Mahmud';
    return typeof carName;
}
