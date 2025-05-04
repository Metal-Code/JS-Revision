// rest operator (same like spread  operator even syntax but it depends upon use case and stuff to determine whether it is pread or rest operator)
// function calcCartPrice(...num1)
// {
//     return num1;
// }

function calcCartPrice(val1, val2, ...num1)
{
    return num1;
}

// console.log(calcCartPrice(200,400,500,800,900));

const user = {
    name : "Ayush",
    price : "1999"
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user)

handleObject({
    name : "Metal",
    price : "1 million"
})

// Can also pass objects as argument

const arr = [200, 400, 600, 800]

function returnsSecondValue(getArray)
{
    return getArray[1];
}
// Arrays as an argument

console.log(returnsSecondValue(arr));
