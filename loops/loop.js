// for(let i = 1; i<=10; i++)
// {
//     if(i==5)
//         console.log("5 is the best number");    
//     console.log(i);
// }

// for(let i=1; i<=10; i++)
// {
//     console.log(`Table of ${i}`);
    
//     for(let j=1; j<=10; j++)
//     {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

let arr = [1,2,3,4,5,6,7,8]
console.log(arr.length);

for (let index = 0; index < arr.length; index++) 
{
    const element = arr[index];
    // console.log(element);    
}


// break and continue 

for(let i=1; i<=20; i++)
{
    if(i==5)
    {
        // console.log("5 detected");
        break;
        // break: Exits the current loop immediately.
    }
    // console.log(`Value of i is ${i}`);
}

for(let i=1; i<=20; i++)
{
    if(i==5)
    {
        console.log("5 detected");
        continue;
        // continue: Skips the current iteration and moves to the next one.
    }
    console.log(`Value of i is ${i}`);
}