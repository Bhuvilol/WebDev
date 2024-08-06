const name = "Bhabesh"
const repoCount = 50

// console.log(name+repoCount+" Value");
// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);
const gameName = new String('LikuDa-iter');
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5) //negative values cannot be entered
console.log(newString);
const anotherString = gameName.slice(-9,4)
console.log(anotherString);
console.log(gameName.trim);//removes the white spaces in a string
console.log(gameName.replace('-','#'));
console.log(gameName.includes('-'));
console.log(gameName.split('-'));//splits the given string into substring and return as array