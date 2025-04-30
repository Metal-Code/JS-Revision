// Primitive
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, Functions

//JavaScript is dynamically typed, meaning variable types are determined at runtime and can change as the program runs. You don’t need to declare a variable’s type explicitly.


const id1 = Symbol("Ayush")
const id2 = Symbol("Ayush")
console.log(id1 === id2);
// even though the string is same the symbols are different.
// Symbols are used generally in frontend libraries to give unique labels or symbols.


// Object in js is like dictionary in python

let obj = {
    name : "Ayush",
    age : 22
}

// fuunctions can also be stored in a variable in JS
const myFunction = function()
{
    console.log("Hello world");
}

const colors = ["Red", "Blue", "Green"];
console.log(typeof colors);


const temp = null;
console.log(typeof temp);
const id = 15;
const bigNumber = 156165135162135165121651131564565652n;
console.log(typeof bigNumber);

console.log(typeof myFunction);
//it says function, but it is called as object function.