//1 Math.
const max = Math.max(5,7,8,20,31,64,10);
// console.log(max);

const arr = [10,20,30,40,50,60,70];
// console.log(Math.max(...arr))
// console.log(...arr)


//2. copy 
const arr2 =[...arr,200,300];
arr2.push(100);
// console.log(arr, arr2);

//3. marge;
const margeArr = [...arr, ...arr2];
// console.log(margeArr);


const params = [15,20,35];
function nums(a,b,c){
    return a+b+c;
}

console.log(nums(...params));
// console.log(...params)


// object copy;
const bikeObj = {name:'hero',price:5000};
const newObj = {...bikeObj};
console.log(newObj)

// object marge;
const user ={name:'Mahdi'};
const newUser = {age:20};
const margeObj = {user,newUser};
console.log(margeObj)


// spread in string;
const name = "mahdi hasan";
const newName = [name];
console.log(name, newName)
console.log(newName.join(''))

