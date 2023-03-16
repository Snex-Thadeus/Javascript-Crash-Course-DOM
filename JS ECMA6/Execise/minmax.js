/** Write a program to find maximum and minimum 
 * number from an array element
 */

let min = (array, min=array[0]) => {
    for(let i=0; i<array.length; i++){
        if(min>array[i]) min = array[i];
    }
    return min;
};

// create an array
const arry = [1,2,4,3,0,-3];
console.log("Minimum Value is:" + min(arry));

// Maximum number
let max = (array, max=array[0]) => {
    for(let i=0; i<array.length; i++){
        if(max<array[i]) max = array[i];
    }
    return max;
};


console.log("Maximum Value is:" + max(arry));