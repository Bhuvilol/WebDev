class User{
    constructor(username){
        this.username =username
    }
    logme(){
        console.log(`Username is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addcourse(){
        console.log(`Username is ${this.username} and email is ${this.email} and password is ${this.password}`);
    }
}
const chai = new Teacher("chai","chai@fb.com","123")
chai.logme();
chai.addcourse();
