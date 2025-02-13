const mynewobj={username:"username"}
console.log(mynewobj);

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

const chai = {
    name:"chai",
    price:250,
    isAvailable:true
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (const [key,value] of Object.entries(chai)){
    if (typeof value !== "function"){
        console.log(`${key} = ${value}`);
    }
    
    
} 