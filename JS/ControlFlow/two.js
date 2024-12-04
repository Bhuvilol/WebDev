//for of
const arr = [1,2,3,4,5,6,7,8,9];
for (const element of arr) {
    console.log(element);
}
const greetings = "Hello World";
for (const element of greetings) {
    console.log(`Each char is ${element}`);
    
}

//Maps
const map = new Map();
map.set('IN',"India");
map.set('US',"United States");
map.set('UK',"United Kingdom");
map.set('CA',"Canada");
map.set('AU',"Australia");
for (const [key, value] of map) {
    console.log(`${key} is ${value}`);
}