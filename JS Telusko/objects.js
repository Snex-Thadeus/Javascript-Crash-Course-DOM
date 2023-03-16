let input = 'name';

let alien = {
    name: 'Snex',
    technology: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Hp'
    }
};

// delete alien.laptop;

console.log(alien.name); // Snex  console.log(alien[input]); 

console.log(alien.laptop.brand);

// For in Loop - Loops over enumerable properties
// Syntax 
/* for(variable in object)
    statement; */

for(let key in alien){
    console.log(key, alien[key]);
}
