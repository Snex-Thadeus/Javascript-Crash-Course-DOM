/** Function Arguments */

function demo(a, b){
    return (a+b)/2;
}

console.log(demo(4, 40));

/** Anonymous Function */
// function() {}

const f = function() {
    // Statements
}

f(); // call function

// Function as an object property

const o = {
    name: "Anonymous Function",
    invoke() {
        return "Yo called Me!";
    }
};
console.log(o.invoke()); // Call method using object property

/** Arrow Notation */
/**
 * You can omit the function keyword
 * If the function take on single parameter, then you can omit the parentheses
 * If the function only has single statement, then you can omit curly braces */ 

const f1 = () => "Hey Everyone";

const f2 = arg1 => `Value of the Argument: ${arg1}`;

const f3 = (arg2, arg3) => arg2*arg3;

/**This Keyword - Refers to the current object */
const obj = {
    name: "Daily Tuition",
    Magic() {return `Hello ${this.name}`;}
}

console.log(obj.Magic());

// Immediately Invoked Function Expression IIFE
// Syntax

(function(){
    // body of the function
})