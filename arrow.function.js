
// normal function / ba function declaration;
function add(num1, num2){
    return num1*num2;
}

console.log(add(2,10))


// function expression;
var add2 = function (num1, num2){
    return num1+ num2;
}

// console.log(add2(10,52))



// 3. arrow function;

// 1
var add3 = (num1, num2,num3)=> num1+num2+num3;
console.log(add3(10,15,6));

// 2
const sum = (num1, num2)=>{
    return num1+num2;
}
console.log(sum(25,25))

// 3 
const nobracket = num => num *5;
console.log(nobracket(7));

const substract = (num1,num2) => num1 - num2;
console.log(substract(50,12))


const modulo = num1 => num1 % 2===0;
console.log(modulo(45));


if(10 % 2 ===0){
    console.log("even")
}else{
    console.log("odd")
}


// ternary operator;
10 % 2===0 ?
     console.log('this is even number') :   
     console.log('this is odd');