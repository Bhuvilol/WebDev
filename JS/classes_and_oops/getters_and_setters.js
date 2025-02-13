class user{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}123`
    }
    set password(value){
        this._password = value
    }

}
const bhabesh = new user("bhabesh@gmail.com","abc")
console.log(bhabesh.password);
console.log(bhabesh.email);