import {kfcMenu} from "./menus.js";

let carts = {items: [], itemId: [], totalPrice: 0, totalQty: 0};

const search = document.querySelector('#searchIcon');
const divSearch = document.querySelector('#divSearch');
const searchBar = document.querySelector('#searchBar');
const clearBtn = document.querySelector('#clearBtn');
const cartAmount = document.querySelector('#amount');
let divMenusEle = document.querySelector('#allMenu');

// show all menu
showMenu(kfcMenu)

// add event ไปที่ icon ค้นหา
let toggle = false;
search.addEventListener('click', checkToggle);

clearBtn.addEventListener('click', clearCarts);

function clearCarts() {
  carts = {items: [], itemId: [], totalPrice: 0, totalQty: 0};
  cartAmount.textContent = carts.totalQty;
}

function checkToggle() {
  //switch toggle 
  toggle = !toggle ;
  if(toggle) {
      // const input = document.createElement('input');
      // input.id = 'inputValue'
      // input.type = 'text';
      // input.placeholder = 'search...'
      // searchBar.appendChild(input);

      //ถ้า true จะเเสดง search bar กับปุ่ม serach ออกมา
      searchBar.innerHTML = `<input id = 'inputValue' type = 'text' placeholder=" search ..." class = "form-control">
      <button id = 'searchBtn' type="button" class="btn btn-danger btn-sm ms-3">search</button>`;

      //อันนี้จะ add event ให้กับปุ่ม search 
      const searchBtn = document.querySelector('#searchBtn');
      // click เเล้วจะเอา value ที่พิมเข้ามาไปหาว่ามันคือตัวไหนบ้างของ kfcMenu เเล้วก้เเสดงออกมา
      searchBtn.addEventListener('click', () => {
        
          let value = document.querySelector('#inputValue').value;
          //console.log(value)

          let pattern = new RegExp(value, 'i')
          //console.log(pattern)

          const searchMenu = kfcMenu.filter((menu) => {return menu.menuName.match(pattern) != null});
          console.log(searchMenu);
          showMenu(searchMenu);

      })

      let inputValue = document.querySelector('#inputValue');
      inputValue.addEventListener('keyup' , () =>{
          // console.log(inputValue.value)
          if(inputValue.value == ''){
            showMenu(kfcMenu);
          }
      } 
      )

  } else {
      // searchBar.removeChild(divSearch.lastChild);
      searchBar.innerHTML = '';
  }
}

function showMenu(arr) {
  divMenusEle.innerHTML = '';  
  for(let menu of arr) {
  const divMenuEle = document.createElement('div');
  divMenuEle.setAttribute('class','container col-4 mx-auto mb-5');
  //divMenuEle.setAttribute('style','margin: 5em');
  console.log(divMenuEle);

  const divAlertEle = document.createElement('div')
  divAlertEle.setAttribute('class', 'alert alert-light border rounded-3 p-3');
  divAlertEle.setAttribute('id',menu.menuId);
  divAlertEle.setAttribute('role', 'alert')

  //img
  const menuImgEle = document.createElement('img');
  menuImgEle.setAttribute('src',menu.menuImg);
  menuImgEle.setAttribute('class', 'rounded mx-auto d-block my-3')
  menuImgEle.setAttribute('style','width: 300px');
  //console.log(menuImgEle);

  //menuName
  const pMenuNameEle = document.createElement('p');
  pMenuNameEle.setAttribute('class', 'fw-bolder')
  pMenuNameEle.textContent = menu.menuName;
  //console.log(pMenuNameEle);

  const pMenuDescEle = document.createElement('p');
  pMenuDescEle.textContent = menu.menuDesc;

  // const pMenuPriceEle = document.createElement('p');
  // pMenuPriceEle.textContent = 'Menu Price: ' + menu.price;

  const pMenuStatusEle = document.createElement('p');
  pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;

  //<div class="btn ">ราคา</button>
  const divPriceEle = document.createElement('div');
  divPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
  divPriceEle.textContent = '฿' + menu.price;
  console.log(divPriceEle);

  const buttonAddEle = document.createElement('button');
  buttonAddEle.setAttribute('type', 'button');
  buttonAddEle.setAttribute('class', 'container btn btn-danger');
  buttonAddEle.textContent = 'Add To Cart';

  buttonAddEle.addEventListener('click', () => {
    // const parent = event.target.parentNode;
    // console.log(event.target.parentNode);
    // alert(`Add Menu ID '${parent.id}' to Your Cart`)

    alert(`Add Menu ID '${menu.menuId}' to Your Cart`)
  
    const itemAdd = kfcMenu.find((item) => {return item.menuId == menu.menuId})
    //console.log(itemAdd)
    let newItem = {id: itemAdd.menuId, name: itemAdd.menuName, price: itemAdd.price, qty: 1};
    //console.log(newItem)

    if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
      carts.items.push(newItem)
      carts.itemId.push(newItem.id)

    } else {

        for(let i of carts.items) {
          if(i.id == newItem.id) {
            i.qty++ ;
          }
        }
    }

    carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
    carts.totalPrice = carts.items.reduce((sum,item) => {return sum += item.price}, 0)
    console.log(carts.itemId);
    console.log(carts.items)
    console.log(carts)

    cartAmount.textContent = carts.totalQty;
    
  })

  divAlertEle.appendChild(menuImgEle);
  divAlertEle.appendChild(pMenuNameEle);
  divAlertEle.appendChild(pMenuDescEle);
  divAlertEle.appendChild(pMenuStatusEle);
  divAlertEle.appendChild(divPriceEle);
  divAlertEle.appendChild(buttonAddEle);

  divMenuEle.appendChild(divAlertEle)
  divMenusEle.appendChild(divMenuEle);
  }
}
