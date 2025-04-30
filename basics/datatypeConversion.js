let score = 22

let temp = "69";
let temp1 = "21ayush";
let temp2 = null;

let choice = true;
// console.log(typeof score);
// //or
// console.log(typeof(score));

// console.log(typeof temp);


let valueInNumber = Number(temp);
let valueInNumber1 = Number(temp1);
let valueInNumber2 = Number(temp2);
let valueInNumber3 = Number(choice);
// console.log(typeof valueInNumber);
// console.log(typeof valueInNumber1);
// console.log(typeof valueInNumber2);
// console.log(typeof valueInNumber3);
// console.log(valueInNumber1);
// console.log(valueInNumber2);
// console.log(valueInNumber3);


let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

let someNumber = 69;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);

// console.log(stringNumber);


// ************* Operations ****************

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "Hello";
let str2 = "Ayush";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// If the first operand is a string, the entire expression is treated as string concatenation; 
// if it's a number, JavaScript adds numbers until it encounters a string, then switches to concatenation.


// console.log(true);
// console.log(+true);
// console.log(+"");


let gameCounter = 100;
gameCounter++;
++gameCounter;
// console.log(gameCounter);



// comparison
// console.log("2" > 1);
// console.log("02" > 1);
// first converts 2 into number

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(null <= 0);
// In JavaScript, null is converted to 0 in relational comparisons like >= or <, but not in equality (==) checks. 
// That's why null >= 0 is true, but null > 0 and null == 0 are false.
console.log("----")
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);
// In JavaScript, undefined == 0 is false because undefined only equals null with ==.
// In comparisons, undefined becomes NaN, so all relational checks like >, <, or >= return false.

console.log("_____");

//=== is used to check the equality considering the datastype as well
console.log(2==="2")