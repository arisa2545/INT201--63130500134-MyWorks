// object ที่มี function ข้างใน
let triangle = {
    base: 3,
    height: 2,
    area: function(){return 0.5*this.base*this.height},
}
// console.log(triangle.area()); // การเข้าถึง function
// console.log(triangle.base); // การเข้าถึง key ทั่วไป

// object ซ้อน Object (aggregate multiple value)
let customer = { 
    id: '0134',
    name: 'Arisa',
    order: {order_number: '112233', products: {'banana' : 1, 'apple' : 2}, amount: 300} 
}
console.log(customer.order.order_number); //การเข้าถึง object ใน object
for(let key in customer){
    console.log(key);
    console.log(customer[key]);
}

// Object ที่มี array อยู่ข้างใน
let question = {
    question: '1+1=?',
    choice: [1, 2, 3]
} 