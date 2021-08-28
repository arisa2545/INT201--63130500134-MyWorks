//let, const ,var -> scope of variable

//const cannot be update

//var can re-declare but let and const cannot
var std = 10;
var std = 'myStudent'; 
// console.log(std);
// console.log(`type of std is ${typeof std}`)
// console.log(typeof std)

function doSomething(){
    const x = 10;
    console.log(x)
}

setTimeout(function () {console.log('JS')}, 3000);
// setTimeout(doSomething(), 3000);

doSomething();
// console.log(typeof doSomething());



