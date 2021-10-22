//add is a global scope
let result = 10;
const add = function (n1, n2) {
  //n1, n2, result  are local scope
  // let result = 0;
  console.log(`result in add() is ${result}`);
  result = n1 + n2;

  console.log(`result: ${result}`); //n1+n2
  return n1 + n2;
};
console.log(`result: ${result}`); //10

console.log(add(5, 2)); //n1=5, n2=2,result=7
console.log(add(10, 20)); //n1=10, n2=20, result=30
console.log(add(1, 4));

function operator(n1, n2, fn) {
  return fn(n1, n2); // not equals to "return fn"
}

let addResult3 = operator(5, 3, add);
// not equals to "operator( 5, 3, add())"
console.log(addResult3);