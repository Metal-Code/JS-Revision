const score = 400;
const balance = new Number(100);
// console.log(score);
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(4));
// Gives precision values

const otherNumber = 3.14159265359;
// console.log(otherNumber.toPrecision(5));
// Will round off upto 5 digits starting from left

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //will convert it into us based decimal system with commas
// console.log(hundreds.toLocaleString("en-IN")); //will convert it into indian based decimal system with commas

//---------------------MATHS--------------------------------

// console.log(Math);
// console.log(Math.abs(-4)); // Gives absolute value
// console.log(Math.round(4.69));
// console.log(Math.ceil(5.456)); // Gives Ceiling value, like the next Number
// console.log(Math.floor(2.5)); // Gives the floor value
// console.log(Math.min(1,2,3,4,5,6)); //gives min value 
// console.log(Math.max(1,2,3,4,5,6)); //gives max value 

// console.log(Math.random());
// Will give random value between 0 and 1
console.log(Math.random()*10);

// Suppose you wanna get number between 10 and 20
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// +1 to avoid 0 value