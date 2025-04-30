const accountID = 2103;
let accountEmail = "ayush21@gmail.com";
var accountPassword = "12345";
accountCity = "Pune";

let accountState;

// accountID = 21 //not allowed

accountEmail = "Nigg@gmail.com"
accountPassword = "21212"
accountCity = "Korba"
console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var because of issue in block scope and functional scope
*/