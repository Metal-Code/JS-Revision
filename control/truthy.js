const UserEmail = "Ayush@gmail.com"
const arr = []

if(UserEmail)
{
    console.log("User has email");
}
else
{
    console.log("User does not have email");
}

/* Falsy Values */
/*
    1. false
    2. 0
    3. -0
    4. BigInt - 0n
    5. ""
    6. null
    7. undefined
    8. NaN
*/

// Truthy Values
/*
    1. "0" -> 0 in string is true
    2. "false" -> false in string is true
    3. " " -> empty space in string is true
    4. []
    5. {}
    6. function(){} -> empty function
*/

// if(arr.length===0)
// {
//     console.log("Array is empty");   
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0)
{
    console.log("Object is empty");
}

// console.log(false == 0);
// console.log(false == '');
// console.log(0 == '');

// Nullish Coalescing Operator (??) 
// Does safety check for null or undefined

let val;
val = 5 ?? 10
console.log(val);

val = null ?? 10
console.log(val);

val = undefined ?? 69
console.log(val);

val = null ?? 10 ?? 15
console.log(val);
// Will be assigned the first number

// Terniary Operator

// condition ? true : false

const blueLagoon = 40
blueLagoon < 30 ? console.log("Less than 30") : console.log("more than 30");

