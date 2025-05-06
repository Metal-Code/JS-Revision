
// FILTER
/*
.filter()
Use: To create a new array with only the elements that pass a condition.
Returns: A new array.
Purpose: Filtering/selecting items.
*/

// Foreach
/*
Use: To run a function on each element (for side effects).
Returns: Nothing (undefined).
Purpose: Doing something like logging, saving, updating, etc.
*/
const coding = ['java', 'pythin', 'c++', 'javascript', 'swift']

// const a = coding.forEach( (item)=> {
//     console.log(item);
//     return item
// })

// console.log(a);
// returns undefined

const num = [1,2,3,4,5,6,7,8,9,10]
const b = num.filter( (num) => num>4 )
// filter always returns the value 
// console.log(b);

const c = num.filter( (num) => {
    return num > 4
    // concept of {} and return refer from function/arrowFunction.js
})
// console.log(c);

// to do the same with the foreach
const d = []
num.forEach( (num) => {
    if(num > 4)
        d.push(num)
} )

// console.log(d);


const books = [
    { title: "The Silent Patient", genre: "Thriller", publish: 2019 },
    { title: "Atomic Habits", genre: "Self-help", publish: 2018 },
    { title: "1984", genre: "Dystopian", publish: 1949 },
    { title: "To Kill a Mockingbird", genre: "Classic", publish: 1960 },
    { title: "The Alchemist", genre: "Fiction", publish: 1988 },
    { title: "Becoming", genre: "Biography", publish: 2018 },
    { title: "Educated", genre: "Memoir", publish: 2018 },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925 },
    { title: "Dune", genre: "Science Fiction", publish: 1965 },
    { title: "Sapiens", genre: "History", publish: 2011 }
  ];

const userBooks = books.filter( (bk) => bk.genre === "Classic")
const userBooks1 = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
})
console.log(userBooks1);
