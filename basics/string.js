const name = "Ayush";
const repoCount = 20;

// console.log(name + repoCount + "Value"); //old technique

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Hell blade - Senua's Sacrifice")

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName.__proto__); // __proto__ is a reference to the prototype object from which the current object inherits methods and properties.
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(' '));

// const a = gameName.substring(0,3)
// console.log(a);
// Doesn't include the ending index 

// var b = gameName.slice(0,3);
// console.log(b);
// Also has negative index support

const temp = "     ayush  ";
// console.log(temp);
// console.log(temp.trim());

const url = "https://github.com/Metal%20Code";
// console.log(url.replace('%20', "-"))

// console.log(url.includes("Metal"));

console.log(gameName.split('blade'));
// The split() method divides a string into an array of substrings based on a specified separator.