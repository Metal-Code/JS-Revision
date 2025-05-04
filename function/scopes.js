var c = 69
let a = 500
if(true)
{
    let a = 10
    // console.log("Inner: ",a);
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

// In Node.js, global variables are only available in the same file. 
// They don’t automatically become global like in the browser. 

function one()
{
    const username = "Ayush";
    // console.log("For outer function");
    

    function two()
    {
        const website = "Github";
        // console.log(username);
        
    }
    // console.log(website);
    two()
}

one()

if(true)
{
    const username = "Ayush";
    if(username === "Ayush")
    {
        const website = "Discord";
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


/*********************************************************/

console.log(addOne(5));

function addOne(num)
{
    return num + 1;

}

// console.log(addTwo(6));
// Will throw an error, calling the function before declaring it in a variable
// It is a concept of hoisting
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(6));
