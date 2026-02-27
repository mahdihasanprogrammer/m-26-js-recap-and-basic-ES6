
// function add(num1, num2){
//     const result = num1+num2;
//     console.log(num1, num2,result)
// }

// add(20)


//1 set default parameter for number 0, jodi add or substract uddesso hoy;
function add2(num1, num2=0){
    const result = num1+num2;
    console.log(num1, num2,result)
}

// add2(20, 50)


//2 set default parameter for number 1 , jodi multiply or divided  uddesso hoy
function multy (num1=1, num2=1){
    const result = num1 * num2;
    console.log(result)
}

// multy(2);
// multy();



//3 set default parameter for string;
// example 1;
function name (first , last=''){
    const result = first +" "+last;
    console.log(result)
}
// name('Mahdi')

// example 2;
function name2 (first , last='Habib'){
    const result = first +" "+last;
    console.log(result)
}
// name2()


//4 object parameter default value;
function obj(num1, num2={}){
   
    console.log(num1, num2)
}




const student = {
    name:'hasan',
    result : 500,
}

const bike = {
    name:'hero',
    price : 100,
}

obj(bike);


// set default parameter for array;
function arr(num1, num2=[]){
    console.log(num1, num2)
}
arr([10,50])


