//array destructuring assignment + rest parameter
[subject, students, ...listOfStudents] = ['INT201', 50, 'A', 'B', 'C'];
console.log(subject);
console.log(students);
//เเก้แบบนี้ได้โล้ย
listOfStudents[0] = 'ICE'
listOfStudents[1] = 'LOVE'
listOfStudents[2] = 'GAME'
console.log(listOfStudents);

//object destructuring assignment + rest parameter
({productId, productName, ...rest} = {productId: 'Coke', productName: 111, productPrice: 10, stock: 5});
console.log(productId);
console.log(productName);
//เเก้ได้น้า
rest.productPrice = 15;
console.log(rest);