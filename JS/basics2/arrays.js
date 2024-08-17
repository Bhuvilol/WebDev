// array

const myArray = [1,2,3,4,5]
const heroes = ["Batman", "Superman", "Wonder Woman", "Green Lantern", "Flash"]
const myArray2 = new Array(10,20,30,40,50)
console.log(myArray2);
console.log(myArray);
console.log(heroes);
console.log(myArray[0]);


// array methods
myArray.push(6)
myArray.push(7)     // adds to the end of the array
console.log(myArray);
myArray.pop()       // removes the last element of the array
console.log(myArray);
myArray.unshift(9)  // adds to the beginning of the array
console.log(myArray);
myArray.shift()     // removes the first element of the array
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(10));


const newArray = myArray.join()     // joins the array into a string

console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

console.log("A",myArray);

const myn1 = myArray.slice(1,3)    // returns the elements from the index 1 to the index 3
console.log(myn1);                

console.log("B",myArray);            // doesnot modifies the original array

const myn2 = myArray.splice(1,3)   // removes the first element and returns the removed elements
console.log(myn2);                 
console.log("C",myArray);           // modifies the original array

