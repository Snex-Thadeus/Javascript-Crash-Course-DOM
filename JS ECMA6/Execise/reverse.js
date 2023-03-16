/** Write a program to reverse a number */
function reverse_num(n){
    n = n + "";
    let num = n.split("").reverse().join("");
    return num;
}

console.log(reverse_num(2345));


/** Write a program to reverse a number  without using
 * predefined split(), reverse() and join() method
*/

function reverse_fun(num){
    let n = num.toString();

    const number = [];
    let str = "";

    for(let i=n.length-1, k=0; i>=0; i--,k++){
        number[k] = n[i];
        str = str + number[k];
    }

    return parseInt(str);
}

console.log(reverse_fun(5678));