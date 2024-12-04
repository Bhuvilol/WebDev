// const coding = ["js","cpp","java","py"];
// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);

const numbers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = numbers.filter((num)=>{
//     return num>4
// })
// console.log(newNums);

const newNums = []
numbers.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

const book = [
    {
        title:'The Hobbit',
        author:'J.R.R. Tolkien',
        genre:'fantasy',
        year:1937
    },
    {
        title:'The Lord of the Rings',
        author:'J.R.R. Tolkien',
        genre:'fantasy',
        year:1954
    },
    {
        title:'The Fellowship of the Ring',
        author:'J.R.R. Tolkien',
        genre:'fantasy',
        year:1954
    },
    {
        title:"The Two Towers",
        author:"J.R.R. Tolkien",
        genre:"historical",
        year:1954
    },
    {
        title:'A Game of Thrones',
        author:"George R.R. Martin",
        genre:"fantasy",
        year:2011
    },
    {
        title:'A Clash of Kings',
        author:"George R.R. Martin",
        genre:"historical",
        year:2009
    }
]
const userbooks = book.filter((bk)=>bk.year>1950 && bk.genre==="historical")
console.log(userbooks);

