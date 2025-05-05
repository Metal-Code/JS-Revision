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
if(emptyObj.length === 0)
{
    console.log("Object is empty 11");
}