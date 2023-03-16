/** Sum of Array */

let arry = [1,2,3,4,5,6];
let arrSum = 0;

// forEach
arry.forEach(element => {
    arrSum = arrSum + element;
});
console.log(arrSum);

/** Su, of 2D array */
let multi = [[1,2,3],[4,5,6],[7,8,9]];
let multiSum = 0;

for(let i=0; i<multi.length; i++){
    multi[i].forEach(element =>{
        multiSum = multiSum + element;
    });
}
console.log(multiSum);

/** Su, of 3D array */
let three = [[[1,2,3,11]],[[4,5,6,7,10]],[[7,8,9,12]]];

let thSum = 0;

for(let i=0; i<three.length; i++){
    three[i].forEach(element =>{
        for(let j=0; j<element.length; j++){
            thSum = thSum + element[i];
        }
    });
}
console.log(thSum);