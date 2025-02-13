const user = {
    username : "Bhabesh",
    logincount : 8,
    signedIn : true,

    getuserdetails:function(){
        // console.log("Got user details");
        // console.log(`Username is ${this.username}`);
        console.log(this);
        
        
    }
}

console.log(user.username);
console.log(user.getuserdetails());

const promiseOne = new Promise()
const date = new Date()
