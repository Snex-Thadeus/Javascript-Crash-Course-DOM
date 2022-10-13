// console.log('Hello World');
// console.error('This is an error')
// console.warn('This is a warning')

// VARIABLES var, let, const
// const does not allow re-assignment of the value unlike let. You must initialize when using const

let score;
score = 10;
console.log(score)

const age= 6;
console.log(age)

// DATA TYPES - Strings, Numbers,Boolean,null,undefined

const name = 'Snex'; //String
const agee = 30; // Number 
const rating = 4.5;
const isCool = true; // boolean
const x = null; // null/empty
const y = undefined; // let z;

console.log(typeof rating)

// Concatenation
const namee = 'Snex';
console.log(`My name is ${namee} and I am ${age}`)

console.log(namee.length)
console.log(namee.toUpperCase())
console.log(namee.substring(0, 2).toLowerCase()) // gives first 2 digits
console.log(namee.split(''));

// Arrays - variables that hold multiple value
const numbers = new Array(1,2,3,4,5); // constructoer
console.log(numbers);

const fruits = ['apples', 'oranges', 'peas', 10, true];
fruits[5] = 'grapes'
fruits.push('mangoes') // add to the end
fruits.unshift('Strawberries') // add to the beginning
fruits.pop(); // delete the last element

console.log(fruits.indexOf('oranges'))
console.log(Array.isArray(fruits)) // checks if something is in the array
console.log(fruits);

// Object literals key-value pair
const person = {
    firstName: 'Snex',
    lastName: 'Tech',
    age: 30,
    hobbies: ['music', 'football', 'movies'],
    address: {
        street: '381 main st',
        city: 'Busia'
    }
};
person.email = 'snextech@gmail.com'

console.log(person.hobbies[1])
console.log(person)

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)


//FOR LOOPS
for(let i=0; i<10; i++){
    console.log(`For Loop Number: ${i}`);
}

// for(let i=0; i< todos.length; i++){
//     console.log(todos[i]);
// }

for(let todo of todos){
    console.log(todo);
}

// WHILE LOOP
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

// foEach, map, filter - High order array methods
todos.forEach(function(todo){
    console.log(todo.text)
});

// map returns an array
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

// Conditionals IF
const a = 30;

if(a === 10){ // x = '10' is the same as x == 10 and not x === 10
    console.log('a is 10'); // ||=OR &&=AND 
}else if(a > 10){
    console.log('a is greater than 10');
} else {
    console.log('a is less than 10');
}

// tenary operator
const c = 15;
const color = c > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither blue nor red');
        break
}

// FUNCTIONS

function addNums(num1=1, num2=1){
    return num1 + num2;
}
console.log(addNums(5, 5));

const addNum = (num1=1, num2=1) =>  num1 + num2;
console.log(addNum(7, 5));


// Constructor functions
// function Person(firstNam, lastNam, dob) {
//     this.firstNam = firstNam;
//     this.lastNam = lastNam;
//     this.dob = dob;
//     this.getFullName = function(){
//         return `${this.firstNam} ${this.lastNam}`;
//     }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// class -- Same as above
class Person{
    constructor(firstNam, lastNam, dob) {
        this.firstNam = firstNam;
        this.lastNam = lastNam;
        this.dob = dob;       
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.firstNam} ${this.lastNam}`;
    }
}


//  Instantiate object
const person1 = new Person('Snex', 'Teddy', '4-3-1990');
console.log(person1);
console.log(person1.getFullName());


// Document Object Model(DOM)
// Single element selectors
document.getElementById('my-form');
document.querySelector('.container'); // works like jQuery

// Multiple element
const items = document.querySelectorAll('.item'); // Node list, you can use array methods on it
items.forEach((item) => console.log(item));

// document.getElementsByClassName('item');

// Manipulating the DOM

const u1 = document.querySelector('.items');

// u1.remove(); // u1.lastElementChild.remove();
// u1.firstElementChild.textContent = 'Hello';
// u1.children[1].innerText = ['Brad'];
// u1.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// Events
// const btns = document.querySelector('.btn');
// btns.addEventListener('click', (e) => { // mouseover mouseout
//     e.preventDefault(); // prevents the form from submitting
//     document.querySelector('#my-form').style.background = '#ccc'
//     // document.querySelector('body').classList.add('bg-dark');
//     // document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello Snex</h1>'
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
