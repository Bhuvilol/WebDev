const myObject = {
    js:"javascript",
    cpp:"C++",
    java:"Java",
    py:"Python",
}
// for (const element of myObject) {
//     console.log(`${element} ahortuct key for ${myObject[element]}`);
    
// }
for (const key in myObject) {
    console.log(`${key} shortuct key for ${myObject[key]}`);
}
const programming = ["js","cpp","java","py"];
for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map();
// map.set("js","javascript");
// map.set("cpp","C++");
// map.set("java","Java");
// map.set("py","Python");
// for (const key in map) {
//     console.log(key);
// }
// wouldnt work because map is not an iterable


    