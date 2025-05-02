// Objects are declared in 2 ways
// 1. like a literal
// 2. like a constructor

/* Study about singleton */

const sym = Symbol("key1")
// To use a symbol as a key in an object

// Literal way
const user = {
    [sym] : "myKey1",
    name : "Ayush",
    age : 22,
    location : "Pune",
    email : "Metalbond69@gmail.com",
    isMale : true,
    lastLoginDays : ["Wedenesday", "Thursday", "Friday"]
}
// two ways to access objects
// First
// console.log(user.email);

// Second
// console.log(user["email"]);
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["isMale"]);
// console.log(user[sym]);

// To make changes in the object
user.email = "xyz@gmail.com"
// console.log(user);


// to lock the value, so it can't be changed, we can freeze it
// Object.freeze(user);
user.email = "xyz@mitwpu.edu.in"
// console.log(user["email"]);

user.greeting = function(){
    console.log("Adding function to object")
}

user.greeting2 = function(){
    console.log(`Hello user ${this.name} your age is ${this.age}`)
}

console.log(user.greeting());
console.log(user.greeting2());
