// ordered list with unique elements
let nums = new Set();

nums.add(3);
nums.add(5);
nums.add(3);
nums.add("Snex");
nums.add("Teddy");
nums.add("Odhis");

nums.forEach(value => {
    console.log(value);
})

console.log(nums.has(3));


// Primitive data type are immutable  and JavaScript recognise four types of numeric literals binary, hexa, decimal,octa