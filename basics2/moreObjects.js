const discord = new Object();
// Creates a singleton object

/*
const discord = {} //also creates an empty object
** but this is not a singleton object **
*/

// console.log(discord);
// console.log(typeof discord);

discord.id = '1'
discord.name = "Metal"
discord.isLoggedIn = false
// console.log(discord);

const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        userFullname : {
            firstName : "Ayush",
            lastName : "Sharma"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2:"b", 3:"c"}
const obj2 = {4: "d", 5:"e", 6:"f"}

// Merging of objects
// const obj3 = {obj1, obj2}


// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
// Object.assign(obj1, obj2) copies properties from obj2 into obj1, mutates obj1, and returns it.
// Object.assign() copies properties from one or more source objects to a target object and returns the modified target object.

// const obj3 = Object.assign({},obj1, obj2)
// console.log(obj3);
// It creates and returns a new merged object from obj1 and obj2 without changing the originals.

// Spread Method like arrays
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    { id: 1, tag: 'a' },
    { id: 2, tag: 'b' },
    { id: 3, tag: 'c' },
    { id: 4, tag: 'd' },
    { id: 5, tag: 'e' }
];

// console.log(users[2].tag);
// console.log(discord);
// console.log(Object.keys(discord));
// console.log(Object.values(discord));
// returns an array

// console.log(typeof Object.keys(discord));
// answer is object even though it returns an array
// It gives "object" because arrays in JavaScript are a special type of object. 
// The typeof operator can’t differentiate between arrays and objects, so it returns "object" for both.

console.log(Object.entries(discord));
// Object.entries() returns an array of key-value pairs from the given object, where each pair is represented as a sub-array.

console.log(discord.hasOwnProperty('isLoggedIn'));
// hasOwnProperty() returns true if the object has the specified property directly, not inherited from its prototype.

