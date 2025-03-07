const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptographiy, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    }, 2000);
        
})
promiseOne.then(function(){
    console.log('Promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve()
    }, 2000);
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: 'John', age: 30, email:"kingdehazea@gmail.com"})
    },2000)
})

promiseThree.then(function(data){
    console.log(data);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "John", age: 30, email:"kingdehaze@gmail.com"})
        } else {
            reject('User not logged in')
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username:"javascript", password:"123"})
        } else {
            reject('User not logged in')
        }
    }, 2000);
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);  
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
}) 
.catch((error)=>{
    console.log(error);
})