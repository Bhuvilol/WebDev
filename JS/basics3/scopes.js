

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30
//     d = 40
// }

// console.log(a); //scopes here are not accessbile for outside
// console.log(b); //scopes here are not accessbile for outside
// console.log(c); //var variable is accessible for outside
// log(d);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// }

function one() {
    const username = "Bhabesh";
    function two() {
        const website = "https://www.bhabesh.com";
        console.log(username);
        console.log(website);
    }
    // console.log(website);
    two();
}
one();

if (true) {
    const username = "Bhabesh";
    if(username === "Bhabesh"){
        const website = "https://www.youtube.com";
        console.log(username);
        console.log(website);
    }
    // console.log(website);   
}

// ******************Interesting**********************
console.log(addone(5))
function addone(num){
    return num+1;
}

// addtwo(5);
const addtwo = function(num){
    return num + 2;
}