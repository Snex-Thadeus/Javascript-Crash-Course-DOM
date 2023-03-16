const arr = ["Daily","Tuition","Tutorials"];

function getData([w1,w2,w3]){
    return `${w1},${w2},${w3}`;
}

console.log(getData(arr));

/** call() Method */
function Magic(){
    return `Welcome, to ${this.name}`;
}

const obj1 = {name: "Daily"};
const obj2 = {name: "Tuition"};

console.log(Magic.call(obj1)); // call() method with ob1 parameter