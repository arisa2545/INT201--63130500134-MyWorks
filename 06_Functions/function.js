//function declaration
function sum(numbers) {
    let total = 0; //local variable 
    for (let num of numbers) total += num; 
    return total; 
}
  
  console.log(sum([1, 2, 3]));

  //calling function, function execution
  sum([1, 2, 5, 10]);


//function expression
const myFunc = function (numbers) {
    let total = 0; //local variable 
    for (let num of numbers) total += num;
    return total;
};
  
//calling function, function execution
console.log(myFunc([1, 2, 3]));



//function expression +destructuring assignment
const myFunc_2 = function ([num1, num2], value) {
    console.log(num1); 
    console.log(num2); 
    console.log(value);
};
  
//calling function, function execution
myFunc_2([10, 20], 5);


//function expression +destructuring assignment
const myFunc_3 = function (num1, num2, num3) {
    console.log(num1); 
    console.log(num2);
    console.log(num3);
};
  
//calling function, function execution with spread operator 
myFunc_3(...[10, 20, 5]);