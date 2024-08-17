"use strict";     // treat all JS code as newer version

// alert(3+3)         deprecated(we are using nodejs, not browser)
let name = "Bhabesh"
let age = 18
let isLoggedIn = false

//number(int)
//bigint(long)(typeof bigint)
//string =>""
//boolean => true/false
//null => standalone value  (null is a type of object)
//undefined => (typeof undefined)
//symbol => unique (typeof symbol)
//object(typeof symbol)
//Arrays (typeof object)
//function(typeof function)
console.log(typeof null);
const heros = ["Shaktiman","Naagraj","Doga"]
let myobj = {
    name: "hitesh",
    age: 22
}
const myFinc = function () {
    console.log("Hello world");
}
console.log(typeof BigInt);