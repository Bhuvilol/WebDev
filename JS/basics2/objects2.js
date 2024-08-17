// const tinderUser = new Object();       //Singleton
const tinderUser = {}                   //Non-Singleton 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Samay",
            lastname : "Raina"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}
const obj3 = {obj1,obj2}   //obj3 is an object with two keys and values
const obj4 = Object.assign({},obj1,obj2)  //copies the value of obj1 and obj2 to obj4
console.log(obj4);

const obj5 = {...obj1,...obj2}  //spreads each value of the objects
console.log(obj5);

const users = [
    {
        id: "123pqr",
        name: "Samay",
        isLoggedIn: false
    },
    {
        id: "456def",
        name: "Harkirat",
        isLoggedIn: false
    }
]
console.log(users[1].name);

console.log(tinderUser);
console.log(Object.keys(tinderUser));       //datatype : arrays
console.log(Object.values(tinderUser));     //datatype : arrays
console.log(Object.entries(users));    //datatype : arrays
console.log(tinderUser.hasOwnProperty("mothersname"));


const course = {
    coursename : "Javascript",
    price : "999",
    duration : "10 hours",
    instructor : "Hitesh"
}

const{instructor}=course
console.log(instructor);
const{instructor:courseinstructor}=course
console.log(courseinstructor);

const navbar =({company}) => {

}

navbar(company = "Bhabesh")
console.log(company);

// JSON
// {
//     "name":"Bhabesh",
//     "coursename" : "Javascript",
//     "price" : "999",
// }