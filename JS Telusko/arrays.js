let values = [5,6,9];

console.log(values[1]);

let names = ['Snex', 'Odhis', 'Teddy', 5]
names.push('Lwande') //LIFO
names.pop() //Removes the last element
names.shift() // Removes the first element
names.unshift(2) // Add the element at the beginnig
names.splice(2) //(start, number of elements to remove)

console.log(names)


// For of Loop in Array - does use iterable objects and loop over generated values.
let nums = [];
nums[0] = 5;
nums[99] = 9;

for(let n of nums){
    // console.log(nums);
}

// Array Destructuring
let numbers = [5,7,3,4]

let [e,f,g,h] = numbers;

console.log(numbers);

let words = "My Name is Snex Teddy".split(' ');

let [a,b,, ...d] = words; // ...(Three dots) means rest of the elments

console.log(d)

// Array Methods
let numms = [43,54,32,65,76,35,34];

let result = numms.filter( n => n%2===0)
     .map( n => n*2) // takes a values and change it
    //  .forEach((n) => {console.log(n);});
     .reduce((a,b) => a+b); // returns 1 value

console.log(result);
