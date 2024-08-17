// const marvel_heroes = ["thor", "iron man", "captain america", "black widow", "hulk", "hawkeye"];
// const dc_heroes = ["batman", "superman", "flash", "wonder woman", "batman", "superman", "flash", "wonder woman"];

// marvel_heroes.push(dc_heroes);     //returns array inside array 
    
// const all_heroes = marvel_heroes.concat(dc_heroes);    //returns an concatenated array of 2 array
// console.log(all_heroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes];    //returns spread out value of more than one array
// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Bhabesh"));    //returns false
console.log(Array.from("Bhabesh"));        //returns array of characters
console.log(Array.from({name: "Bhabesh"}));  


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));    //returns a new array from a set of elements


