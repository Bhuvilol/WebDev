const score = 400
const bal = new Number(100)
console.log(bal);
console.log(bal.toString().length);
console.log(bal.toFixed(2));

const otherNum =123.8966
console.log(otherNum.toPrecision(3));           //returns a string value

const hundreds = 100000000
console.log(hundreds.toLocaleString());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

// +++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(5.93));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9));
console.log(Math.sqrt(49));
console.log(Math.min(1,2,3,4,5,6,-9));
console.log(Math.max(1,2,3,4,5,67,7,));
console.log(Math.random());
console.log(Math.floor((Math.random()*10) + 1));

const min = 10
const max = 20

// (Math.floor(Math.random() * (max-min+1))+min)
console.log(Math.floor((Math.random())*(max-min+1))+min);