/** Exception Handling */

// syntax

try{
    console.log("Try Block");
} catch(e){
    console.log(`Catch Block Error: ${e}`)
}finally{
    console.log("Finally Execute"); //Finally will always execute
}


/** Regular Expression */
// long syntax
// let reg = new RegExp("pattern","flags");

// short syntax
// let reg1 = /pattern/flags;

let str = "Welcome to daily tuition";

// call regular expression constructor
// let reg2 = new RegExp("daily");
let reg2 = /DAILY/i; //using short syntax

console.log(str.search(reg2)); // return index number starting position

// five type of flags

/**
 * 1)i-case sensitive flag
 * 2)g-global search
 * 3)m-multiline search
 * 4)u-unique code
 * 5)p-sticky search
 */

