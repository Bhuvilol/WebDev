const user = {
    username: "Bhabesh",
    price: 1000,
    
    welcomeMessage: function() {
        console.log(`Welcome ${this.username} to our website`);
        console.log(this);
        
    }
}
user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);

function chai(){
    let username = "bhabesh"
    console.log(this);
    console.log(this.username);
    
}
chai();

const obj = () => {
    let username = "liku"
    console.log(this);
    
}
obj();