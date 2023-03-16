let day = "Sunday";

switch(day){
    case 'Monday':
        console.log("7am");
        break; // get out of the switch block
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("4am");
        break;
    case 'Friday':
        console.log("9am");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("8am");
        break;
    default:
        console.log("Watch News at anytime")
}


let x = 0;

while(x<10){
    x++;

    if(x==5){
        continue; // continue will skip the rest of the code
    }
    console.log(x);
}