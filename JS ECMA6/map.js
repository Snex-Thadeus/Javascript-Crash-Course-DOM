// Map is just like a object taht they can map akey to a value

const arr1 = [1,2,4,8];

// call arr1 and pass map function
const map1 = arr1.map(x => x*2);

// call both arrays
console.log(arr1);
console.log(map1);


// delete object with two objects elements
const cart = [{product: "laptop",price:55000},{product:"mobile",price:14000}];

const product = cart.map(x=>x.product); //create array of product name
const price = cart.map(x=>x.price); // create array product price

console.log(product);
console.log(price);

/** Maps */

// call map constructor
const Mymaps = new Map();

// create 3 variablea
let keyString = "KeyString",
    keyObj = {},
    keyFunc = function(){};

// use set() method to set key =>
Mymaps.set(keyString, "KeyString Value");
Mymaps.set(keyObj, "KeyObj Value");
Mymaps.set(keyFunc, "KeyFunc Value");


// know size of the map
console.log(Mymaps.size);

// using get() method print map object values
console.log(Mymaps.get(keyString));
console.log(Mymaps.get(keyObj));
console.log(Mymaps.get(keyFunc));

// set Nan as a key
Mymaps.set(NaN, "Not a Number");
console.log(typeof NaN); // return number
console.log(Mymaps.get(NaN));

// iterate map key and values
for(let[key, value] of Mymaps){
    console.log(`Map Keys: ${key}, Values: ${value}`);
}


// another way to create map object
const NewMap = new Map([
    [1,'One'],
    [2,'Two'],
    [3,'Three']
]);

// Iterate this map object using forEach() Method
NewMap.forEach(function(value, key){
    console.log(`Map Keys: ${key}, Values: ${value}`);
});


/** WeakMap */
// key must be an object, cannot be iterated or cleared, keys can be garbage collected
// Garbage collection

let user = {
    name: "Daily"
};

user = null;
// now you can't access name property
//console.log(user.name); // now js put data in this property

// call weakmap constructor()
let weakmap = new WeakMap();

let obj = {}, obj1 = {};

// set weakmap key and value
weakmap.set(obj, "Private");
weakmap.set(obj1, "Private Data");

console.log(weakmap.get(obj1)); // weakmap key

// using for of loop we will try access weakmap key and value
/**  for(let [key, value] of weakmap){
    console.log(key);
    console.log(value);
} */ // return weakmap is not iterable 
// weakmap keys are private

/** Set */

// duplicate values are not allowed
// call set object constructor
const st = new Set();

// add element in the set object using add() method
st.add(1);
st.add(2);

// duplicate value rejected
st.add(2);
st.add({a:"One", b:"Two"});

console.log(st);

// to know element is present in the collection using has() method

console.log(st.has(4));

// delete the element
st.delete(2);

// iterate set() object using for of loop
for(let item of st){
    console.log(item)
}

// iterate set() object using forEach loop
st.forEach(value => {
    console.log(value);
});

/** WeakSet() */
// only contain objects, cannot be iterated

const ws = new WeakSet();

// declare 2 variable objects
let obj2={}, foo = {};

// add this object in the weakset collection
ws.add(obj2);
ws.add(foo);

console.log(ws);