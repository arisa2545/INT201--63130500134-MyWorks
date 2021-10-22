//for-in
console.log('for-of');
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (let item in data) {
  sum += data[item];
  console.log(`${typeof item}`)
}
console.log(`sum = ${sum}`);