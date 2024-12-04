const coding = ["js","cpp","java","py"];
coding.forEach( function (item) {
    console.log(item);
    
})
coding.forEach( (val)=> {
    console.log(val);
})
function printme(vval) {
    console.log(vval);
    
}
coding.forEach(printme);

coding.forEach((v, index, arr)=>{
    console.log(v, index, arr);
    
})

const myCoding = [
    {
        languagename:"javascript",
        languagefilename: "js"
    },
    {
        languagename:"C++",
        languagefilename: "cpp"
    },
    {
        languagename:"Java",
        languagefilename: "java"
    }
]
myCoding.forEach((items)=>{
    console.log(items.languagename);
    
});