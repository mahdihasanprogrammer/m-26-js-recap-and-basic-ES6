const product ={
    name:'IPhone',
    price:85000,
    model:'15 pro',
    releaseDate:2023,
    camera:"50mp",
    color:'white'
}

// freeze object and seal object;
// Object.freeze(product);
Object.seal(product)
product.age=25;
product.model='16 pro';
// console.log(product)

// delete property from object;
delete product.color;
console.log(product)


