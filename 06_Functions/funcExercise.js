//1.
function getCourse() {
    return 'INT201 Client Side Programming I';
}

//2.
  function echo(text) {
    return text;
}
  
//3.
function isKMUTTStudent(student) {
    if (student.id.length == 13) return true;
    else return false;
}

  
//4.
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

  
//5.
function greetingSomeOne(name) {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}



//Arrow function --------------------------------------------------------
//1.
let getCourse = () => 'INT201 Client Side Programming I';

//2.
let echo = text => text;

//3.
let isKMUTTStudent = student => student.id.length == 13;
// student => {
//     if (student.id.length == 13) return true;
//     else return false;
// }

//4.
let sum = (num1, num2, num3) => num1 + num2 + num3;

//5.
let greetingSomeOne = 
name => {
    const greeting = ['hi', 'hello', 'hey'];
    return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
}







//examples of reduce and map functions
let products = [
    { prodId: 1, price: 10, amount: 2 }, 
    { prodId: 2, price: 5, amount: 10 } 
  ];
  
let priceIncludeVat = products.map(
    (product) => product.price + product.price * 0.07
);
  
  console.log(priceIncludeVat);
  
  
let totalAmt = products.reduce(
    (total, curProd) => (total += curProd.amount),
    0
);
  
console.log(totalAmt);