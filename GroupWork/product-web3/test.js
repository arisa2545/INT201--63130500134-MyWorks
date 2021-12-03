// let cookie = decodeURIComponent(document.cookie);
// let cookieArr = cookie.split('; ')
// console.log(cookieArr)

// let cartItem = cookieArr.find(c => c.startsWith('cartItems=')).split('=')[1]
// console.log(cartItem)

findValue('cartItems')
function findValue(name) {
    let cname = decodeURIComponent(name)
    let cookie = decodeURIComponent(document.cookie);
    let cookieArr = cookie.split('; ')
    console.log(cookieArr)

    let value = cookieArr.find(c => c.startsWith(`${cname}=`)).split('=')[1]
    console.log(value)
    let con = JSON.parse(value)
    console.log(con)
    console.log(typeof(con))

    return value;

}
// console.log(cookieArr[1].substring(1))

// for(let i = 0; i < cookieArr.length; i++) {
//     let c = cookieArr[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//       console.log(c)
//     }
    
//   }

// for(let c of cookieArr){
//     if(c.charAt(0) == ' ') {
//         c = c.substring
//     }
// }
//console.log(cookieArr)

