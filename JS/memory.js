// Stack memory(Primitive)        allocates the copy of data
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

let Name1 = "Bhabesh"
let Name2 = Name1
Name2 = "Liku"

console.log(Name1);
console.log(Name2);


// Heap(NonPrimitive)       allocates the referenca of the actual data
// Array
// Object
// Function
let userOne ={
    email:"likugpr1999@gmail.com",
    upi:"bhabesh333@ybl"
}
let userTwo = userOne

userTwo.email = "bhabeshcse@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
