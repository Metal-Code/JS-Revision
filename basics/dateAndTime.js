let myDate = new Date()
// console.log(typeof myDate)
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
let DateNight = new Date(2025, 4, 1) // year, month, date
// Month in JS sstart from 0 and ends with 11

// console.log(DateNight.toLocaleString());
// console.log(DateNight.toDateString());

let newDate = new Date("2025-05-01");
// console.log(newDate.toLocaleString());
// console.log(newDate.getTime());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let date2 = new Date();
console.log(date2.getDate());
console.log(date2.getMonth()+1);

