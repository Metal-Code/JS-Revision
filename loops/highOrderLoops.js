/*
["", "", ""]
[{}, {}, {}]
*/
/*

1. for loop
Use: When you want full control using an index (start, stop, step).
Working: You manually set the loop counter and how it increments.
Works on: Arrays, Strings, anything index-based.

2. for...in loop
Use: To loop over keys or property names, mostly in objects.
Working: Goes through all enumerable properties (keys).
Works on: Objects ✅, Arrays ⚠️ (but gives indexes, not values), Strings ✅ (gives character indexes).

3. for...of loop
Use: To loop over values directly in iterable items.
Working: Iterates each item (not key/index), great for clean value access.
Works on: Arrays ✅, Strings ✅, Sets ✅, Maps ✅. ❌ Doesn’t work directly on plain objects.

4. forEach()
Use: Simple way to loop through array values and indexes using a callback.
Working: Automatically passes value, index, and the array to the callback.
Works on: Arrays ✅, array-like structures like NodeLists ✅. ❌ Not on plain objects or strings.

*/


// 1. for of
const arr = [1,2,3,4,5,6,7,8]
for (const i of arr) 
{
    // console.log(i);
}

const str = "obsciuweCB;OKCekc"
for (const i of str) 
{
    // console.log(i);
}


// Maps
// const map = new Map()
// map.set("IN", "India")
// map.set("US", "USA")
// map.set("FR", "France")
// map.set("GR", "Germany")

// console.log(map);

// for (const key of map)
// {
//     console.log(key);
//     // will return the key value pair in arrays
// }

// for (const [key] of map)
// {
//     console.log(key);
// }
// for (const [value] of map)
// {
//     console.log(value);
// }
// for (const [key, value] of map)
// {
//     console.log(key, " and ", value);
// }
// putting iterator inside the [] will not give the results in an array for the objects

const obj = {
    game1 : "NFS",
    game2 : "HellBlade: Senua's Sacrifice",
    game3 : "Serious Sam",
    game4 : "Left 4 Dead"
}

// for (const [key] of obj) 
// {
    // console.log(key);
// }
// Will not work


// To print keys or values or both of an object
// For in
// To print key
// for (const key in obj) 
// {
//     console.log(key);
// }
// // To print values
// for (const key in obj) 
// {
//     console.log(obj[key]);
// }
// for (const key in obj) 
// {
//     console.log(`${key} is ${obj[key]}`);
// }

const prog = ['c++', 'javascript', 'swift', 'java','python']

for (const key in prog) 
{   
    // console.log(key);
    // Returns the key or index of the values   
    // console.log(prog[key]);
    
}

const map = new Map()
map.set("IN", "India")
map.set("US", "USA")
map.set("FR", "France")
map.set("GR", "Germany")

for (const key in map) 
{
    // console.log(key);
    // will not print anything as MAP is NOT ITERATABLE   
}

// For each of
// **** Can't use break or continue in for each of loop ****
const coding = ['java', 'pythin', 'c++', 'javascript', 'swift']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val); 
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
// Giving reference

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); 
// } )
// Complete syntax

const code = [
    { name : "C++", extension : "cpp" },
    { name : "java", extension : "java" },
    { name : "javascript", extension : "js" },
    { name : "python", extension : "py" }
]

code.forEach( (item) => {
    // console.log(item.name);
    if(item.name != "hehe")
        console.log("HEHE not found");
})