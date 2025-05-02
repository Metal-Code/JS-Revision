function sayMyName(){
    console.log("This is function");
}

/*
sayMyName
// this is the reference of the function

sayMyName()
// this is the execution of the function
*/

// values when defining the function is parameters
function add(num1 ,num2){
    console.log(num1 + num2);
}

function add1(num1 ,num2){
    return num1 + num2;
}


// when calling a function the values are called as arguments
add(4,5);
// add(4,"5");
// add(4,'a');
// add(4,null)
// In numeric operations, null behaves like 0, so add(4, null) results in 4

const result = add1(64,8);
// console.log(result);

// function loginUserMsg(username)
// {
//     if(username === undefined)
//     {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} is logged in`;
// }
function loginUserMsg(username = "defaultUsername")
{
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} is logged in`;
}

// console.log(loginUserMsg());

const a = loginUserMsg("Ayush")
const a1 = loginUserMsg()
console.log(a);
console.log(a1);

