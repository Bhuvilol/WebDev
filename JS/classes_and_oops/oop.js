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

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.getuserdetails = function(){
        console.log(`Username is ${this.username}`);
        console.log(`Login count is ${this.loginCount}`);
        console.log(`User is logged in ${this.isLoggedIn}`);
    return this;
    }
}