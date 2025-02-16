// Web Storage API
//  Not part of the DOM - refers to the Window API
//  Available to JS via the global variable: window

//  We don not have to type window, It is implied
const myArray = ["eat","sleep","code"]
const myObject = {
    name: "Dave",
    hobbies: ["eat","sleep","code"],
    logname: function(){
        console.log(this.name);
        
    }
};


sessionStorage.setItem("mySessionStore",JSON.stringify(myArray));
localStorage.setItem("myLocalStore",JSON.stringify(myArray));
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
// localStorage.removeItem("myLocalStore");
const key = localStorage.key(0);
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(key);
const storeLength = localStorage.length;
console.log(storeLength);

console.log(myLocalData);
