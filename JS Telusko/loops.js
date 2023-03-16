// Initialize, condition, increment
let i = 10;

while(i<=10){ // Check for conditions the execute the block
    console.log("Hi Snex");
    i++;
}

do // Execute the block then check the conditions
{
    console.log("Hi Snex");
    i++;
} while(i<=5)

// For loop If you know the starting and ending values
for(let i=1; i<=5; i++){
    console.log("Hi Snex");
    for(let j=1; j<=5; j++)
    console.log("Hello", j);
}

for (let i=1; i < 4; i++){
    for (let j = 1; j < 6; j++){
        console.log(j);
    }
    console.log("\n");
}

parseInt(num) //--- Converts a floating number into integer

let num = 564782;

// while(num>0)
// {
//     console.log(num%10); // 2  8 7 4 6 5
//     num = parseInt(num /10);
// }

let count = 5;
do {
  console.log("Value of Count is  " + count); //5
  count--;
} while (count > 5);