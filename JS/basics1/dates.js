// let myDate = new Date()
// console.log(myDate.toString());     //Tue Aug 06 2024 22:37:31 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());     //Tue Aug 06 2024
// console.log(myDate.toISOString());   //2024-08-06T17:07:31.684Z
// console.log(myDate.toLocaleString());   //6/8/2024, 10:37:31 pm

let myCreateDate1 = new Date(2023,0,23)
console.log(myCreateDate1.toDateString());

let myCreateDate2 = new Date(2023,0,23,5,3)
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date("01-14-2023")
console.log(myCreateDate3.toLocaleString());
console.log(myCreateDate3.getTime());

let myTimeStamp = Date.now()
console.log(myTimeStamp);       //in milliseconds
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})
