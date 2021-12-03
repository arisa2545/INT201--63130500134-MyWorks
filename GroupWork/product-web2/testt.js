let arr = [
    {id: 1, name: 'A', quantity : 1},
    {id: 2, name: 'B', quantity : 1},
    {id: 3, name: 'C', quantity : 1}

];

let arrId = [1,2,3];

//console.log(arr.forEach().includes({id: 1, name: 'A'}))
let newItem = {id: 1, name: 'A', quantity : 1}

console.log(arrId.includes(newItem.id))
if(arr.length == 0 || arrId.includes(newItem.id) == false) {
    arr.push(newItem);
    arrId.push(newItem.id)
} else {
    for(let i = 0; i < arr.length; i++) {
        if(newItem.id = arr[i].id) {
            arr[i].quantity += 1;
        }
    }
}

console.log(arr);
console.log(arrId)

let carts = [
    {_id: 1, _name: 'A', _quantity : 1}
];

carts[0]._quantity += 1 ;
console.log(carts)

// for(let i = 0; i < arr.length; i++) {
//     if(newItem.id == arr[i].id) {
//       // const itemIndex = carts.indexOf(newItem);
//       // console.log(itemIndex);
//       arr[i].quantity += 1;
//       //console.log(arr)
//       break
//     } else {}

// }

// arr.push(newItem);

// console.log(arr);



//arr[0].quantity += 1;
//console.log(arr[0])

// const members = [ 
//     {name: "Eve", age: 24}, 
//     {name: "Adam", age: 48}, 
//     {name: "Chris", age: 18}, 
//     {name: "Danny", age: 30}
//  ]
//  let result
//  for ( let i = 0; i < members.length; i++) {
//    if (members[i].age > 25) {
//       result = members[i]
//       break
//    }
//  }

//  console.log(result)

  