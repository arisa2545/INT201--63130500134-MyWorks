import {car} from "./carList.js";
import {showProduct} from "./showProduct.js";

export let carts = {items: [], itemId: [] , totalQty: 0};

showProduct(car);

export const divSearchCartEle = document.querySelector("#searchCart");

export const divSearch =document.createElement("div")
export const divSeachBar =document.createElement("div")
const divcart = document.createElement("div")

export const searchIcon =document.createElement("img")
searchIcon.setAttribute("src","image/searchIcon.png")
searchIcon.setAttribute("height", 20);
searchIcon.setAttribute("width", 20);

const cart = document.createElement("img")
cart.setAttribute("src","image/cart.png")
cart.setAttribute("height", 35);
cart.setAttribute("width", 35);

const amount = document.createElement("span");
amount.setAttribute('id', 'num')
amount.setAttribute('class', 'border border-2 fs-5');
amount.setAttribute('style', 'width: 10000px');
amount.textContent = ' 0 ';

const bin = document.createElement("img")
bin.setAttribute("src","image/bin.png")
bin.setAttribute('id', 'clear')
bin.setAttribute("height", 35);
bin.setAttribute("width", 35);
bin.addEventListener('click', () => {
    alert('click ok to clear all of carts')
    carts = {items: [], itemId: [] , totalQty: 0};
    const amount = document.querySelector('#num');
    amount.textContent = 0;
    console.log(carts)
})


divSearch.appendChild(searchIcon);
divSearchCartEle.appendChild(divSearch);
divSearch.appendChild(divSeachBar);
divcart.appendChild(cart);
divcart.appendChild(amount);
divcart.appendChild(bin);
divSearchCartEle.appendChild(divcart);

export function showSearchBar(){
    const input =document.createElement("input")
    input.setAttribute("id","inputValue")
    input.setAttribute("type","text")

    const button =document.createElement("button")
    button.textContent = "Search";
    button.setAttribute("id","searchButton");

    divSeachBar.appendChild(input);
    divSeachBar.appendChild(button);
}

let toggle = false;
searchIcon.addEventListener('click', checkToggle);
function checkToggle() {
    toggle = !toggle ;
    if(toggle) {
        //ถ้า true จะเเสดง search bar กับปุ่ม serach ออกมา
        showSearchBar();

        const searchBtn = document.querySelector('#searchButton');
        searchBtn.addEventListener('click', () => {
            const value = document.querySelector('#inputValue').value;

            let pattern = new RegExp(value, 'i');
            console.log(pattern)

            const newSearch = car.filter((item) => {return item.carName.match(pattern) != null});
            console.log(newSearch)

            showProduct(newSearch);

        })

        const searchBar = document.querySelector('#inputValue');
        searchBar.addEventListener('keyup', () => {
            if(searchBar.value == '') {
                showProduct(car);
            }
        })

        
    } else {
        divSeachBar.innerHTML = '';
    }
  }


//         //อันนี้จะ add event ให้กับปุ่ม search 
//         // click เเล้วจะเอา value ที่พิมเข้ามาไปหาว่ามันคือตัวไหนบ้างของ kfcMenu เเล้วก้เเสดงออกมา
//         button.addEventListener('click', () => {
//             let value = document.querySelector('#inputValue').value;
  
//             let pattern = new RegExp(value, 'i')
  
//             const searchMenu = car.filter((car) => {return car.carName.match(pattern) != null});
//             console.log(searchMenu);
//             showProduct(searchMenu);
  
//         })
  
//         let inputValue = document.querySelector('#inputValue');
//         inputValue.addEventListener('keyup' , () =>{
//             // console.log(inputValue.value)
//             if(inputValue.value == ''){
//               showProduct();
//             }
//         } 
//         )

//   // add event to bottonAddEle
// const addbutton = document.querySelector(".addToCart");
//     addbutton.addEventListener('click', () => {
//     // const parent = event.target.parentNode;
//     // console.log(event.target.parentNode);
//     // alert(`Add Menu ID '${parent.id}' to Your Cart`)

//     alert(`Add '${car.carName}' to Your Cart`)
  
//     const itemAdd = kfcMenu.find((item) => {return item.menuId == menu.menuId})
//     console.log(itemAdd)
//     let newItem = {id: itemAdd.menuId, name: itemAdd.menuName, price: itemAdd.price, qty: 1};
//     //console.log(newItem)

//     if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
//       carts.items.push(newItem)
//       carts.itemId.push(newItem.id)

//     } else {

//         for(let i of carts.items) {
//           if(i.id == newItem.id) {
//             i.qty++ ;
//           }
//         }
//     }

//     carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
//     carts.totalPrice = carts.items.reduce((sum,item) => {return sum += item.price}, 0)
//     console.log(carts.itemId);
//     console.log(carts.items)
//     console.log(carts)

//     const cartAmount = document.querySelector('#amount');
//     cartAmount.textContent = carts.totalQty;
    
//   })