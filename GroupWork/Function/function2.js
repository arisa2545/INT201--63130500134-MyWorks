// closures -------------------------------------------------------------------------------------
let numbers = function (...arrNumber) {
    function find(name) {
        switch(name) {
            case "sum" : return arrNumber.reduce((sum,number) => {return sum + number}, 0)
            break;
            case "min" : return Math.min(...arrNumber)
            break;
            case "max" : return Math.max(...arrNumber) 
        }
    }
    return find;
}
// let setNumber1 = numbers(20, 30, 40);
// console.log(setNumber1("min"))
// console.log(setNumber1("sum"))
// console.log(setNumber1("max"))


// higher order function and closures -----------------------------------------------------------------------------------------
// function orderDetail เป็น higher order function เพราะมีการ return ตัวที่เป็น inner function ซึ่งก็คือ function action
// function orderDetail มี parameter ที่รับ products ของ order เข้ามา
let orderDetail = function (products) {
    // function action เป็น closures เพราะว่า inner function มีการอ้างถึงตัวแปรที่มาจาก outer function และเก็บรักษาตัวแปรนั้นไว้ 
    // function action มี parameter ที่รับ name ของ action ที่จะทำ (print, add, remove) และรับ item ที่จะทำการ add หรือ remove เข้ามา
    function action(name,item) {
        // switch จะทำการเเยกว่าจะทำ action ไหน
        switch(name) {
            // case "print" จะทำการเเสดง element ของ products ทั้งหมดออกมา โดยใช้ forEach ในการวน loop
            case "print" : return products.forEach(item => console.log(item));
            break;
            // case "add" จะทำการเพิ่ม item ลงไปใน array products
            case "add" : return products.push(item);
            break;
            // case "remove" จะทำการลบ item ออกจาก array products 
            // ซึ่งใช้ method splice(start, deleteCount) ในการลบ โดยจะใช้ indexOf() ในการหา index ของ item นั้นๆ เเละระบุเป็น start ใน parameter 
            case "remove" : return products.splice(products.indexOf(item), 1);
            default:
            break;
        }
    }
    return action;
}

// let order1 = orderDetail(["coke", "cake"]);
// order1("print");
// console.log("------------------------")

// order1("add", "apple");
// order1("print");
// console.log("------------------------")

// order1("remove", "coke");
// order1("print")
// console.log("------------------------")



// higher order function -------------------------------------------------------------------------
let isOdd = number => number % 2 !== 0;
let isEven = number => number % 2 === 0;
// let numberSet = [20,30,41];
// console.log(numberSet.filter(isOdd)) 
// console.log(numberSet.filter(isEven)) 

// default parameter, Rest parameter, destructuring ---------------------------------------------
function courseList([course = 'unknow', lecture = 'unknow', ...students]) {
    console.log(`${course}`);
    console.log(`Lecture : ${lecture}`);
    console.log(`Students : ${students}`);
    // students.forEach(student => console.log(student))
}

// courseList(['INT201', undefined , 'ice', 'game'])


// let order = [{productName: "coke", amount: 2, priceEach: 10},
//              {productName: "banana", amount: 1, priceEach: 5},
//              {productName: "lay", amount: 2, priceEach: 20}, 
//             ]

export {orderDetail, courseList}







