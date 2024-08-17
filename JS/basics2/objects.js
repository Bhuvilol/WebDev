//singleton
//Object.create

//object literals

const mySym = Symbol('key1');
const JsUser = {
    name: 'John',
    "full name": 'John Doe',
    [mySym]: "Papita",
    age: 30,
    location: 'Bhonsar',
    email: 'bhabescse@gmail.com',
    isLoggedIn: false
}

console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(typeof mySym);

JsUser.email = 'likugpr1999@gmaicom';
Object.freeze(JsUser);  // freezes the object : cannot be modified in future

console.log(JsUser);


//unfreeze the object first
JsUser.greeting = function() {
    console.log("hello Js User");
}
JsUser.greeting2 = function() {
    console.log(`Hello JS user.${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



