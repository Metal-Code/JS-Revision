const arr = [1,2,3,4,5,6,7]
const color = ["red", "blue", "green", "yellow"]
// console.log(arr);

//---Array Methods----
arr.push(8)
// console.log(arr);
arr.pop()
// console.log(arr);
// arr.unshift(69)
// Inserts 69 at starts
// console.log(arr);
// console.log(arr.includes(5));
// Tells if the given element exists or not

// console.log(arr.indexOf(2));
// console.log(arr[2]);

const temp = arr.join()
// console.log(arr);
// console.log(typeof temp);

// ------------------------------Slice and splice----------------------------------
const arr2 = [1,2,3,4,5,6,7]
const a1 = arr2.slice(1,3);
console.log(a1);
console.log("original array after slice: ",arr2);
// slice **excludes** the ending index

const a2 = arr2.splice(1,3);
console.log(a2);
console.log("Original array after splice: ",arr2);
// splice can **include** elements at the given start index and modifies the original array
/* slice() copies parts of an array without changing it, 
 * while splice() modifies the original array by removing or adding elements. */

