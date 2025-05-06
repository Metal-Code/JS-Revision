const arr = [1,2,3,4,5,6,7,8,9,10]

const intialValue = 0;
const total = arr.reduce( (acc, currVal) => {
    // console.log(`Current accumulator value: ${acc} and current value is ${currVal}`);
    return acc  + currVal
}, intialValue)
// console.log(total);

const cart = [
    { item : "Keyboard", price : 999},
    { item : "Pen-drive", price : 299},
    { item : "RTX 4050", price : 39999},
    { item : "RAM 16GB", price : 18999},
    { item : "Wecam", price : 2999}
]

const pay = cart.reduce( (acc, obj)=> {
    return acc + obj.price
},0)

console.log(pay);
