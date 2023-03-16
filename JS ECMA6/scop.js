/** Block Scoping is surrounded by curly braces {} */

console.log("Block Start...");
{
    console.log("Inside Block");
    const x = 5;
    console.log(x);
}

console.log("Block End");
console.log(`Outside of the block:x=${x}`);