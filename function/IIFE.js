/*
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
It is used to create a private scope and avoid polluting the global namespace, 
especially in situations where you want to protect variables from outside access.
*/


(function temp()
{
    // Name IIFE because it has name
    console.log(`DataBase Connected`);
})();
// ** A semicolon after an IIFE ensures the function is treated as a complete statement and 
// prevents errors when another statement (like another IIFE) follows. It's a safety best practice. **


// Syntax
// ()()
// (Function Definiton) (execution call)


( (name) => {
    // Simple IIFE
    console.log(`Hello ${name} DB is Connected`);
    
})("Ayush")