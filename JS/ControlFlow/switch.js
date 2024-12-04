// switch (month) {
//     case 1:
//         console.log("January");
        
//         break;
//     case 2:
//         console.log("February");
        
//         break;
//     case 3:
//         console.log("March");
        
//         break;
//     case 4:
//         console.log("April");
        
//         break;
//     default:
//         break;
// }

//falsy values : 
// false, 0, -0, BigInt On, NaN, null, undefined, "", ''

//truthy values : 
// true, 1, 1n, BigInt Off, NaN, null, undefined, "", ''\
//"0", 'false'," ". ' '

//ternary operator
console.log(true?1:0);

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    if (element === 0) {
        console.log("ha ha");
    }
}

let myArray = ["flash", "batman", "superman", "wonder woman", "iron man", "spiderman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
let index = 0;
while (2==2) {
    console.log(`Value of index is ${index}`);
    index = index+2;
    if(index > 10) break;
}

let arr = 0;
while (arr<myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr+1;    
}

