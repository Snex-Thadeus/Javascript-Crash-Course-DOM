let map = new Map();

map.set("Snex", "Python");
map.set("Teddy", "Java");
map.set("Odhis", "JS");
map.set("Snex", "ML"); // It will update the value of Snex

// console.log(map.keys());
console.log(map.has("Teddy"));
console.log(map.get("Teddy"));

for(let [k,v] of map){
    console.log(k, " : ", v);
}

map.forEach((v,k) => {
    console.log(k, " : ", v);
})