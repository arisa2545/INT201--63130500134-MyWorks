//declared value
x = 10
var xvar = 10;
let xlet = 10;
const xconst = 10;

let xlet  = 10+10;

//update value
x = x + 10
xvar = xvar + 10;
xlet = xlet + 10;

// xconst = xconst + 10;
console.log(`xconst = ${xconst}`);
//re-declared value

x = "LOL"
var xvar = "LOL";

//let xlet = "LOL";

//let xconst = "LOL";
console.log(x);
console.log(xvar);
console.log(xlet);
console.log(xconst);

let data = [2, 4, 8, 16, 32, 64, 128, 256, 512] 
let sum = 0;
for(let element of data) {
sum += element;
};

console.log(`sum = ${sum}`);

// let count = 0;
// while(count < 10) {
// console.log(count);
// count++;


let num = 10;

function print() {
    console.log(num)
}