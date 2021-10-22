// let, var, const -----------------------------------------------

var x = 10;
var x = 11;
console.log(x)

const y = 10;

let z = 10;
let z = 12;

console.log(1234);
console.log('ice');

let myNum = 0;
console.log(`type of myNum is ${typeof myNum}`); 
console.log('type of myNum is ' + typeof myNum);

let greeting = 'Ho Ho';
// let greeter = 'hello';

function greeter() {
  // let greeting = 'hello';
  console.log(greeting);
  return 'งง';
}

console.log(greeting);

// console.log(greeter())
// console.log(typeof greeter())

var game = 'narak';
var game = 'narak*2'
console.log(game);

//implicit conversion -------------------------------------------
// เครื่องหมาย + เจอ string จะเเปลงอีกตัวเป็น string ทันที 
var n = 'y' + 1;
console.log(n);
console.log(typeof n);

var n = '10' + 1;
console.log(n);
console.log(typeof n);

 //เเต่ถ้าเเบบนี้จะเป็น 10 เป็น number
console.log('10' - 1);

//เครื่องหมายอื่นๆ จะเปลี่ยนทุกอย่างเป็น number *เจอตัวอักษรไปก็เป็น NaN ไปเลยสิคะ
var n = 'y' * 1;
console.log(n);
console.log(typeof n);

var n = '10' * 1;
console.log(n);
console.log(typeof n);








