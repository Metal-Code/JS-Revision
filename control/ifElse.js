const isLoggedIn = true

// If the condition is true, the block executes.
// If the condition is false, the block is skipped.

if(2 === '2')
{
    console.log("executed");
}

const temp = 50
if(temp < 50)
{
    console.log("Less than 50");
}
else
{
    console.log("More than 50");
}

const score = 500
if(score > 100)
{
    let power = "fly"
    // var power = "fly"
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);

const balance = 1000
// if(balance > 500) console.log(`test`), console.log("test 2"), 
// console.log("This is how multiple lines can be written and the scope would be same as curly brackets");

// if(balance < 500)
// {
//     console.log("less than 500");
// }
// else if(balance <=750)
// {
//     console.log("less than 750");
// }
// else
// {
//     console.log("Less than 900");   
// }

const userLoggedIn = true;
const debitCard = true;
const isLoggedInGoogle = true;
const isLoggedInEmail = true;

// if(userLoggedIn && debitCard)
// {
//     console.log("Allowed for purchase");
// }

if(isLoggedInGoogle || isLoggedInEmail)
{
    console.log("Logged in from either of it");   
}
