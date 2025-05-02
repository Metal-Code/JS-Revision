const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Batman", "Superman", "Flash"];
// marvel.push(dc);
// push function pushes in the given array
// console.log(marvel);
// console.log(marvel[3][1]);

// const arr = marvel.concat(dc);
// // concat returns a new concatenated array
// console.log(arr);

// easier method to join array - spread
const arr = [...marvel, ...dc];
// console.log(arr);


const arr1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realArray = arr1.flat(Infinity);
// flat function takes an input upto that level it flattens the array
// and return a new array
// Infinity input will flatten any nested array

// console.log(realArray);

// console.log(Array.isArray("Ayush"));
// will tell if the given input is array or not

// console.log(Array.from("Ayush"));
// will convert the input into an array

console.log(Array.from({name: "Ayush"}));
// { name: "Ayush" } is just a plain object, and since it's not iterable and doesn’t have a length, 
// Array.from() has no idea how to turn it into an array — so it returns [].

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// Array.of() creates a new array from the arguments you pass to it, no matter what those values are.
