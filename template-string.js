
const number = 50+10;
const result = `my first exam result is: ${number}, second result is 50`;
console.log(result)



function getHtml(name, price, isStudent){
    const div = `
    <p>my name is ${name}</p>
    <h1>my Lapto price :  ${price}</h1>
    <p> i am  is student? ${isStudent} </p>
    `
    console.log(div);
}

getHtml('Mahdi Hasan', 500, false);



const myName = " mahdi hasan,\ iam from noakhali bangladesh , \n where are you /n";
console.log(myName)