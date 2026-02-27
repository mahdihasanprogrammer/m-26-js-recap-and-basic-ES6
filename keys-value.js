const product ={
    name:'IPhone',
    price:85000,
    model:'15 pro',
    releaseDate:2023,
    camera:"50mp",
    color:'white'
}

const keys = Object.keys(product);
const values = Object.values(product);
const entries = Object.entries(product);

console.log(values)

// for(const a of entries){
//     for(const b of a){
//         console.log(b)
//     }
// }