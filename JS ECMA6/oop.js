// Object-Oriented Programming

// Object is a simple unordered collection of property which has a name and value
// Object = Properties + Methods

/** Object Reference */
const obj = {};

// create reference
const y = obj;

// create property
y.d = "Property Created Using Reference";
console.log(obj.d); //you can get object property created from the reference


// CLASS DECLARATION
class Model{
    constructor(Mno, Mname){
        this.Mno = Mno; // this keyword refers to instance of the Class
        this.Mname = Mname;

    }

    // create method
    show(){
        console.log(`Model Number: ${this.Mno} 
Model Name: ${this.Mname}`);
    }
}

// create instance of the class
const obj1 = new Model(550, "BMW");
obj1.show();

// use of instanceof keyword
console.log(obj1 instanceof Model); // return true because obj1 is instance of Model class


/** Prototype */ 
// Every function has a special prototype property

let f = function(){
    this.a = 1;
    this.b = 2;

}

let o = new f();
o.d = 5 // create property using instance

// now create prototype property
f.prototype.b=3; //override property b if it does not exist
f.prototype.c=4; // create prototype c property

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

// call f() function
console.log(f); // call reference // equal to the constructor prototype
console.log(f.prototype);


/** Static Method */
// static methodname(){statements;} can't access using instance of a class rather call class itself
// they are used to create utility functions

class StaticClassMethod{
     // declare a constructor
     constructor(){
        // console.log(StaticClassMethod.onCall1); // call static method
        console.log(this.constructor.onCall()); // both statements are same
     }

    static onCall(){
        return "This is a static method";
}

// create another static method
static onCall1(){
    

    return `${this.onCall()} called using another static method`;
}
}

// create instance of demo
const st = new StaticClassMethod(); // called static method using an instance

// call static method using an instance
// console.log(st.onCall()); // return error st.onCall is not a function

console.log(StaticClassMethod.onCall1()); // static method called using class name

/** Inheritance */
// Mechanism that allow to create new classes from the older classes
// Uisning inheritance you can reuse properties and methods of the parent class in the child class.


// create parent class Person
class Person{
    constructor(fname,lname){
        this.fname = fname;
        this.lname = lname;
    }
}

// create child class
class Age extends Person{
    constructor(age){
        // call super() method
        super("Snex", "Teddy"); // will call contructor of the Person Class
        this.age = age;

    }

    // create method to display fname,lname and age
    showUp(){
        console.log(this.fname + " "+ this.lname);
        console.log(`Your age is ${this.age}`);
    }
}

// create instance of the child class
const d = new Age(25);
d.showUp(); // call child class method showUp()

console.log(d.fname);

/** Prototype Inheritance */
// Object.__proto__

let car = {
    Wheel: "four",
    Model: "Tesla",
    shows(){
        console.log(`Car Model ${this.Model}, Has ${this.Wheel} Wheels.`);
    }
};

// declare another object bike
let bike = {
    CC: 250,
    __proto__: car // created __proto__ property of bike object and specify car object
};

// declare another object bicycle 
let bicycle= {
    Gear: 5,
    __proto__: bike // created __proto__ property of bicycle object and specify bike object
};

/*
// specify __proto__ property to bike project
bike.__proto__ = car;
console.log(bike.CC);

// access car property using bike object
console.log(bike.Wheel);
console.log(bike.Model);
**/

bike.shows(); // access car method using bike object
console.log(bicycle); // prototype chain
console.log(bicycle.__proto__.__proto__);


/** Polymorphism */
// Perform same action in different ways
// Used to override any property and method

// declare parent class
class Employee{
    constructor(name){
        this.name = name;
        this.age = 25;
    }

    // declare a method
    EmployeeName(){
        console.log(`Employee Name ${this.name}`);
    }
}

// Inherit parent class
class Member extends Employee{
    constructor(name, salary){
        super(name); // call parent class constructor with child class parameter
        this.name = name;
        this.salary = salary;
        this.age = 45; // override age property of parent class
    }


// Override EmployeeName() Method of parent class
EmployeeName(){
    console.log(`Employee Name ${this.name}, Age ${this.age} and Salary ${this.salary}`);
}
}

// create instance of the child class
const mb = new Member("Snex Tedy", 2500);
mb.EmployeeName(); // execute child class method


/** String Representation */
// Object.toString()

// call date object
const dt = new Date();

console.log(dt);
console.log(dt.toString());


console.log(typeof dt.toString()); // convert an object into a string
console.log(typeof dt); // return object