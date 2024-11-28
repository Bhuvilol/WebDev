// Immedietly Invoked Function Expression

function chai(){
    console.log(`DB CONNECTED`);
    
}
chai();

(function tea(){
    console.log(`DB TEA CONNECTED`);
})();

((name)=>{
    console.log(`DB connected again ${name}`);
})('bhabesh');