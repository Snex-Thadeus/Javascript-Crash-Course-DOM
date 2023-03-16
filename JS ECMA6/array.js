// Array are ordered with numerical indices.
// arrat start with 0 index
// Array literal are constructed with [] brackets

// Different types of array literals
const arr1 = [1,2,3,4,5]; // simple array

console.log(arr1[2]);

const arr2 = ["one",2,true]; // nonhomogeneous array literal

const arr3 = ["one","two",[1,2,3]]; // array containing array

console.log(arr3[2][0]); // would return number 1

//nohomogeneous array containing array
const arr4 = [
    {name: "Daily", No:39},
    [
        //declare two objects
        {name: "Tutorials", subject: 'array'},
        {name: "Tutorials", subject: 'Literals'}
    ]
];

console.log(arr4[1][0].name);


//array containing array function
const arr5 = [
    {name: "Daily Tuition", videos:150},
    [
        //on 0 index of inner array
        function(){
            return "Containing Array";
        },
        //on 1 index of inner array
        "three"
]
];

console.log(arr5[1][0]()); // return reference of the function


/** add or remove array element */ 
// pop,push,shift and unshift

const arr = [2,3,4];
// push method return  length after inserting array element
console.log("---->",arr.push("a"));
console.log(arr);

// pop method removes the last element in an array
console.log("---->",arr.pop());
console.log(arr);

// shift and unshift method
console.log("---->",arr.unshift(1)); //return the length and add element at the beginning
console.log(arr);

console.log("---->",arr.shift()); //return removed element
console.log(arr);


// Slice vs Splice method
//  slice() returns a new array and does not modify the original array, 
//while splice() modifies the original array and can also return a new array that contains the removed elements.

const ar = [1,2,3];

console.log(ar.concat(4,5,6)); // add element at the end

// Slice() Method
const ar1 = [1,2,3,4,5];

console.log(ar1.slice(3)); // start from the 3 element

console.log(ar1.slice(2, -1)); // start from 2 element and end with 5 element

const fruits = ['apple', 'banana', 'orange', 'peach'];
const citrus = fruits.slice(2); // returns a new array ['orange', 'peach']
const someFruits = fruits.slice(1, 3); // returns a new array ['banana', 'orange']


// Splice() Method - Add and remove array element from any index
const ar2 = [1,4,5];

ar2.splice(1,0,2,3); // adds 2,3 after the first index

console.log(ar2); // return 1,2,3,4,5

// remove array elements
ar2.splice(1,2); // start from 1 index and remove 2 elements 2 and 3
console.log(ar2);

const fruits1 = ['apple', 'banana', 'orange', 'peach'];
const citrus1 = fruits1.splice(2); // removes 'orange' and 'peach' from the original array and returns them as a new array ['orange', 'peach']
const someFruits1 = fruits1.splice(1, 2, 'grape', 'kiwi'); // removes 'banana' and 'orange' from the original array and adds 'grape' and 'kiwi' to the array, returns a new array ['banana', 'orange']


// copyWithin() and fill()

// copyWithin() arr.copyWithin(target,start,end); modifies an array by copying a sequence of elements within the same array. 
const numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(2, 0, 2); // [1, 2, 1, 2, 5]
// copies the first two elements (1, 2) to the target index 2. The resulting array has 1, 2, 1, 2, 5.


// fill() arr.fill(value,start,end)
// fill() modifies an array by filling all the elements with a specified value.
const numbers1 = [1, 2, 3, 4, 5];
numbers1.fill(0, 2, 4); // [1, 2, 0, 0, 5]
// fills the array with 0 starting at index 2 up to index 4. The resulting array has 1, 2, 0, 0, 5.


// Object - is a container in javascript

const obj = {
    name:"String",
    value:45
};

// Array(It's also type of object) Vs Object
// Array can access using index whereas object can access using string or symbol
// Arry[0] index come before array[1] index
// no guaranteed that object.a come before object.b

let person = {
    name: "John",
    age: 30,
    city: "New York"
  };

let personName = person.name; // John
let personAge = person["age"]; // 30

const obj1 = {
    f1:"Hello",
    f2:"Everyone",
    f3:"Welcome",
    f4:"Back to",
    f5:"Snex-Tech Programmer"
}

// Using control flow statement
for(let f in obj1){
    console.log(obj1[f]); //print object properties
}