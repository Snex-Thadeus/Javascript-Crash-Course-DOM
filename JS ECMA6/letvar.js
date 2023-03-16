// Hoisting  - a variable or function can be used before it has been declared.
console.log(a);
var a = 1;
// This code will output undefined because the variable a is hoisted to the top of its scope, but its value is not assigned until later in the code.

// declare for loop with var keyword
for(var i=0; i<3; i++){
    // inside block
    console.log(i);
}
// outside block
console.log("Outside Block:" +i); // can access i variable outside of the block


// declare for loop with let keyword
for(let k=0; k<3; k++){
    // inside block
    console.log(k);
}
// outside block
console.log("Outside Block:" +k); // can't access k variable outside of the block

// Javascript strick mode

// "use strict";

x = "Global"; // declare x variable and assume as a global variable

console.log(x);