let myName = "bhabesh   "
let mySurname = "Behera    "
console.log(myName.truelength);

let myHeroes = ["thor","spiderman"]
let heroPower = {
    thor: "Thunder",
    spiderman: "Web",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.bhabesh = function(){
    console.log("Bhabesh is present in all objects");
    
}
Array.prototype.heyhitesh = function(){
    console.log("Hey Hitesh is present in all arrays");
    
}
heroPower.bhabesh()
myHeroes.bhabesh()
myHeroes.heyhitesh()
// heroPower.heyhitesh()

const User = {
    name: "Bhabesh",
    email:"kingdehaze@gmail.com"
}
const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__: TeachingSupport
}
Teacher.__proto__=User

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.length}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"icecream".trueLength()