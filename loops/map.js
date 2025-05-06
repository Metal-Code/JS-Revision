const num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = num.map( (item) => {return item + 10} )

// Map and filter chaining
const newNum = num.map( (num) => num * 10 ).map( (item) => item + 1).filter( (item) => item >=40)

console.log(newNum);


// maps
/*
Purpose: To transform each element in an array.
Returns: A new array of the same length with modified values.
Does not remove any items — just changes them.
*/

// filter
/*
Purpose: To select only elements that match a condition.
Returns: A new array with only matching items.
May return fewer items than the original.
*/