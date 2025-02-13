class User{
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`Username is ${this.username}`);
        
    }
    createId(){
        return `${this.username}123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId());

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
}
const iphone = new Teacher("iphone","i@phone.com","123")
iphone.logme();

//STATIC keyword doesnot allow to access the properties of the class even to its child
