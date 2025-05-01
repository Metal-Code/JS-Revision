console.log("Stack and heap memory");
console.log("---------------------");

// Stack (Stack is used for Primitive datatypes)
// gives copy of the varible
// Heap (Heap is used for non primitive datatypes)
// Give the reference of the variable

let myName = "Ayush";
let anotherName = myName;
anotherName = "Metal-Code";

console.log(myName);
console.log(anotherName);

let user1 = {
    email : "Ayushkumar15807@gmail.com",
    upi : "xyz@oksbi"
}

let user2 = user1;
user2.email = "Metalbond@gmail.com";

console.log(user1);
console.log(user2);
