const myNums = [1,2,3,4,5];

const myTotal =myNums.reduce((acc,cval)=>{
    console.log(`acc:${acc} cval:${cval}`);
    
    return acc+cval;
},0);

console.log(myTotal);

const shoppingCard = [
    {
        itemname: "JS course",
        price: 100,
        quantity: 1
    },
    {
        itemname: "Mastering porn",
        price: 500,
        quantity: 1
    },
    {
        itemname: "Trading course",
        price: 1200,
        quantity: 1
    }
]

const sumPrice = shoppingCard.reduce((acc,item)=>acc+item.price,0);
console.log(sumPrice);
