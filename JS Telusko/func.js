let user = 'Snex'; // Global variable

function greet(user){
    let num = 5; // Local variable
    return `Hello ${user}`
}

let str = greet(user);
console.log(str);

// Function expression

let add = function(num1,num2, num3=1){

    return num1 + num2 + num3;
}

let result = add(4,5);
console.log(result);

// Arrow function
let addition = (num1,num2) => num1 + num2;

let results = add(7,5);
console.log(results);


let laptop = {
    cpu: 'i9',
    ram: 16,
    brand: 'Hp',

    getConfig: function(){
        console.log(this.cpu); //laptop.cpu
    }

}

laptop.getConfig();

// Constructor function
function Alien(name, tech){
    this.name = name;
    this.tech = tech;
}

let alien1 = new Alien('Snex', 'JS');

console.log(alien1);