function sayMyName(){
    console.log("My name is Bhabesh");
}
sayMyName();

function addTwoNumber(number1,number2) {
    return number1 + number2;
}
console.log(addTwoNumber(10,20));




function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(200,300,400));

const user = {
    username : "Bhabesh",
    price : 1000
}


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

const myNewArray = [200,400,300,600];
function returnSecondValue(getArray) {
    return getArray[1];
}