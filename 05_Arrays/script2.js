//...spread operator

let a = [1, 2, 3, 4];
let b = [10, ...a, 50];
console.log(`b: ${b}`); // [10, 1, 2, 3, 4, 50]
console.log(`b.length: ${b.length}`); //6

let c = [5, 10, 15];
let d = [...c];
d[0] = 10;
console.log(`d: ${d}`); // [10, 10, 15]
console.log(`c[0]: ${c[0]}`); //5
console.log(`d[0]: ${d[0]}`); //10

//Array() constructor
let e = new Array();
console.log(`e: ${e}`); //{}
console.log(`e.length: ${e.length}`); //0

let f = new Array(10);
console.log(`f: ${f}`); //,,,,,,,,,
console.log(`f.length: ${f.length}`); //10

let g = new Array(3, 2, 1, 'testing');
console.log(`g.length: ${g.length}`); //4

//Array.of()
let h = Array.of();
console.log(`h: ${h}`); //{}
console.log(`h.length: ${h.length}`); //0

let i = Array.of(5);
console.log(`i: ${i}`); //5
console.log(`i.length: ${i.length}`); //5

let j = Array.of(1, 2, 3);
console.log(`j: ${j}`); // 1,2,3
console.log(`j.length: ${j.length}`); //3

//Array.from()
let k = Array.from(j);
console.log(`k: ${k}`);
console.log(`k.length: ${k.length}`);

//เปลี่ยน k เเล้วเเต่ j ไม่เปลี่ยน ถึงเเม้ k จะไปก้อป j มา
k[0] = 11;
console.log(k)
console.log(j)
