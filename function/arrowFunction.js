const user = {
    username : "Ayush",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`);       
        // console.log(this);
    }   
}

// user.welcomeMessage()
// user.username = "Metal";
// user.welcomeMessage()

// console.log(this);

// function temp()
// {
//     let Uname = "Ayush"
//     console.log(this.Uname);
// }
// temp()
// this.Uname refers to the global object (like window in browsers),
// and since Uname is a local variable inside the temp function, it returns undefined.

const a = function()
{
    let Uname = "Ayush"
    // console.log(this.Uname);   
    // console.log(this);   
}
a()
// In a Regular function
// this refers to the global environment (e.g., window in browsers) if the function is called globally or as part of an object method.


const b = () =>{
    let Uname = "Ayush"
    // console.log(this.Uname);   
    // console.log(this);     
}
b()
// In Arrow function
// this refers to the lexical scope where the function is defined, not how it's called. 
// So, it "inherits" this from the surrounding environment (like the global scope or an enclosing function).


// Basic Syntax of arrow function
// () => {}
// Can be hold in a variable

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(5,8));


// Can also be written in a different manner
// *** Implicit Return ***
// const addTwo = (num1 ,num2) => num1 + num2
// or
const addTwo = (num1 ,num2) => (num1 + num2)
console.log(addTwo(5,8));
// When used curly braces return keyword is mandatory and without it, it is not mandatory


// To return an object
const objReturn = (num1 ,num2) => ({username : "Ayush"})
console.log(objReturn());


