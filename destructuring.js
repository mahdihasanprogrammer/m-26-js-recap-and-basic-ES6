
const product ={
    name:'IPhone',
    price:85000,
    model:'15 pro',
    releaseDate:2023,
    camera:"50mp",
    color:'white'
}

// const price = product.price;
// const name = product.name;
// console.log(name,price)



//object destructuring;

// method-1
const {name, price , model, releaseDate, camera, color}= product;
// console.log(name);


// method-2;
const {brand, price:bikePrice,cc=125,model:bikeModel} = {brand:'hero',price:50000, color:'red',model:2018};
// console.log(cc);



// array destructuring;

// rest operator;
const [a,...b] =[10,20,30];
console.log(a,b);


const [f,c,j]= [50,150,32];
console.log(Array);