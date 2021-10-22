let arrList = []; // Start with an empty array.
arrList[0] = 10; // add elements to it.
arrList[1] = 20; // add elements to it.
arrList[2] = 'ten'; // add elements to it.

delete arrList[1]; // delete element at index 1
console.log(arrList); // 10, ,ten

console.log(`length: ${arrList.length}`); //3
