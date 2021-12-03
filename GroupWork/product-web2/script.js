import {kfcMenu} from "./menus.js";

// object ของตะกร้าสินค้า 
let carts = {items: [], itemId: [] , totalQty: 0};

// show all menu
showMenus(kfcMenu)

const search = document.querySelector('#searchIcon');
const searchBar = document.querySelector('#searchBar')
const cartAmount = document.querySelector('#amount');

// กำหนดตัวเเปร toggle เพื่อเอาไว้เช็คว่าตอนช่องและปุ่ม search กำลังเเสดงอยู่รึป่าว
let toggle = false;
search.addEventListener('click', checkToggle);

clearBtn.addEventListener('click', clearCarts);

// function ที่จะทำการ clear สินค้าทั้งหมดออกจากตะกร้า 
function clearCarts() {
  carts = {items: [], itemId: [], totalQty: 0};
  cartAmount.textContent = 0;
  console.log(carts.items);
}

// function ที่จะเช็คว่าตอนนี้ช่องเเละปุ่ม search กำลังเปิดหรือปิดอยู่
function checkToggle() {
  //switch toggle 
  toggle = !toggle ;
  if(toggle) {

      //ถ้า true จะเเสดง search bar กับปุ่ม serach ออกมา
      searchBar.innerHTML = `<input id = 'inputValue' type = 'text' placeholder=" search ..." class = "form-control">
                             <button id = 'searchBtn' type="button" class="btn btn-danger btn-sm ms-3">search</button>`;

      //อันนี้จะ add event ให้กับปุ่ม search 
      const searchBtn = document.querySelector('#searchBtn');

      // ทำการ add event ให้กับปุ่ม search เมื่อ click เเล้วจะนำ value ที่พิมไว้ในช่อง search เข้ามาไปหาว่าตรงกับตัวไหนใน kfcMenu บ้าง เเล้วก็เมนูเหล่านั้นเเสดงออกมา
      searchBtn.addEventListener('click', () => {

          // ทำการ querySelector ช่อง search เเละ get value ออกมา จากนั้นนำไปเก็บไว้ในตัวแปร value
          let value = document.querySelector('#inputValue').value;
          //console.log(value)

          //นำ value มาสร้างเป็น pattern ด้วย regular expression object ที่กำหนด attribute เป็น i (ignore case) เพื่อใช้ในการค้นหาชื่อสินค้าที่มีประกอบด้วย pattern นั้นๆอยู่
          let pattern = new RegExp(value, 'i')
          //console.log(pattern)

          //ใช้ filter ในการวนลูปเข้าไปเช็น condition ใน kfcMenu โดยจะ filter เฉพาะเมนูที่มีชื่อประกอบด้วย pattern ที่กำหนดไว้ เเละเข้าไป assign ให้กับ searchMenu
          const searchMenu = kfcMenu.filter((menu) => {return menu.menuName.match(pattern) != null});
          //console.log(searchMenu);
          //เเสดง menu ที่อยู่ใน searchMenu ออกมา
          showMenus(searchMenu);
          

      })

      // add event ใหกับช่อง search ทุกๆครั้งที่ทำการกดหรือปล่อยปุ่มใดๆบน keyborad เเล้ว value ในช่อง search มีค่าเป็น '' ให้ทำการเเสดงเมนูทั้งหมดใน kfcMenu ออกมา
      let inputValue = document.querySelector('#inputValue');
      inputValue.addEventListener('keyup' , () =>{
          // console.log(inputValue.value)
          if(inputValue.value == ''){
            showMenus(kfcMenu);
          }
      })

  } else {
      // ในกรณีที่ toggle เป็น true (ช่องเเละปุ่ม search เเสดงอยู่เเล้ว) ให้ทำการซ้อนช่องเเละปุ่ม search ไว้โดยการลบ tag หรือข้อความทั้งหมดใน searchBar
      searchBar.innerHTML = '';
  }
}


function showMenus(arr) {
  //allMenu เป็น div ก้อนใหญ่สุดที่มี selector เป็นชนิด id มีอยู่แล้วใน html สามารถใช้ querySelector ในการเข้าถึงได้เลย
  let allMenu = document.querySelector('#allMenu');
  // จะ clear div ในให้เป็น div ว่างๆก่อนทุกครั้ง
  allMenu.textContent = '';
  
  //ใช้ for..of เพื่อเข้าถึงข้อมูลในแต่ละ index ของ array ที่จะรับเข้ามา
  for(let menu of arr) {
  //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
  const cardBody = document.createElement('div');
  //สร้าง element div และ assign ให้กับ cardBody

  cardBody.setAttribute('id', menu.menuId);
  cardBody.setAttribute('class', 'card-body ');
  cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:20px; max-width: 400px;');
  //กำหนด attribute class และ attribute style ให้กับ cardBody เพื่อจัดรูปแบบให้กับ element div
  //console.log(cardBody);

  //<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
  const menuImgEle = document.createElement('img');
  //สร้าง element img และ assign ให้กับ menuImgEle

  menuImgEle.setAttribute('class', 'card-img-top');
  menuImgEle.setAttribute('src', menu.menuImg);
  menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
  //กำหนด attribute src โดย value เอามาจาก key ที่ชื่อว่า menuImg ซึ่งมาจาก object ที่อยู่ใน array kfcMenu
  //console.log(menuImgEle);

  //<h4 class="card-title" style="color:red;">ชื่อเมนู</h4>
  const h4MenuNameEle = document.createElement('h4');
  //สร้าง element h4 และ assign ให้กับ h4MenuNameEle

  h4MenuNameEle.setAttribute('class', 'card-title');
  h4MenuNameEle.setAttribute('style', 'color:red;');
  //กำหนด attribute class และ attribute style ให้กับ h4MenuNameEle เพื่อจัดรูปแบบให้กับ element h4

  h4MenuNameEle.textContent = menu.menuName;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuName ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element h4
  //console.log(h4MenuNameEle);

  //<p class="card-text">Description</p>
  const pMenuDescEle = document.createElement('p');
  //สร้าง element p และ assign ให้กับ pMenuDescEle

  pMenuDescEle.setAttribute('class', 'card-text');
  //กำหนด attribute class ให้กับ pMenuDescEle เพื่อจัดรูปแบบให้กับ element p

  pMenuDescEle.textContent = menu.menuDesc;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuDesc ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
  //console.log(pMenuDescEle);

  //<p class="card-text">Status</p>
  const pMenuStatusEle = document.createElement('p');
  //สร้าง element p และ assign ให้กับ pMenuStatusEle

  pMenuStatusEle.setAttribute('class', 'card-text');
  //กำหนด attribute class ให้กับ pMenuStatusEle เพื่อจัดรูปแบบให้กับ element p

  pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า menuStatus ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element p
  //console.log(pMenuStatusEle);

  //<div class="d-inline-flex px-4... ">ราคา</div>
  const divMenuPriceEle = document.createElement('div');
  //สร้าง element div และ assign ให้กับ divMenuPriceEle

  divMenuPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-dark rounded-3 border-2 fw-bold');
  divMenuPriceEle.textContent = '฿' + menu.price;
  //ใช้ textContent เพื่อเอา value ของ key ที่ชื่อว่า price ซึ่งมาจาก object ที่อยู่ใน array kfcMenu มาแสดงผลใน element div
  //console.log(divMenuPriceEle);

  //<button type = "button" class = "container btn btn-danger">Add To Cart</button>
  const buttonAddEle = document.createElement('button');
  buttonAddEle.setAttribute('type', 'button');
  buttonAddEle.setAttribute('class', 'container btn btn-danger');
  buttonAddEle.textContent = 'Add To Cart';
  //ใช้ textContent เพื่อเเสดงคำว่า 'Add To Cart' ใน button ของ
  
  // add event to bottonAddEle ถ้าทำการ click ที่ปุ่มนี้จะทำการเพิ่ลเมนูนี้เข้าไปในตะกร้า
  buttonAddEle.addEventListener('click', () => {
    // const parent = event.target.parentNode;
    // console.log(event.target.parentNode);
    // alert(`Add Menu ID '${parent.id}' to Your Cart`)
    
    //แสดง alert บอก id สินค้าที่เพิ่มเข้าตะกร้า
    alert(`Add Menu ID '${menu.menuId}' to Your Cart`)
  
    // const itemAdd = kfcMenu.find((item) => {return item.menuId == menu.menuId})
    // console.log(itemAdd)

    //let newItem = {id: itemAdd.menuId, name: itemAdd.menuName, price: itemAdd.price, qty: 1};
    //console.log(newItem)

    // สร้าง object ที่จะเพิ่มเข้าไป
    let newItem = {id: menu.menuId, name: menu.menuName, price: menu.price, qty: 1};

    // ถ้า array items ที่อยู่ใน carts ไม่มีของอยู่ในตะกร้า หรือสินค้าที่จะเพิ่มเข้าไปนั้นไม่เคยมีการเพิ่มลงตะกร้ามาก่อน
    //ให้ทำการเพิ่ม object newItem เข้าไปใน array items เเละเพิ่ม id ของ newItem เข้าไปใน array itemId เพื่อเก้บประวัติไว้ว่าเคยมีเมนูอันนี้เพิ่มเข้ามาเเล้ว
    if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false){
      carts.items.push(newItem)
      carts.itemId.push(newItem.id)

    // เเต่ถ้าเคยเมนูอันนี้ในตะกร้าเเล้วให้ทำการวนลูปหาว่าว่าเมนูนี้อยู่ index ไหนของ array items เเล้วเพิ่ม qty เข้าไป 1
    } else {
        for(let checkItem of carts.items) {
          if(checkItem.id == newItem.id) {
            checkItem.qty++ ;
          }
        }
    }

    //ใช้ reduce ให้การคำนวนหาจำนวนเมนูทั้งหมดที่อยู่ใน array items ที่อยู่ใน object carts
    carts.totalQty = carts.items.reduce((sum,item) => {return sum += item.qty}, 0);
    console.log(carts.itemId);
    console.log(carts.items)
    console.log(carts)

    //ใช้ textContent ในการเเสดง totalQty ใน object carts ลงใน cartAmount (tag span ที่มี id เป็น amount)
    cartAmount.textContent = carts.totalQty;
    
  })


  //add ข้อมูลใน key ต่างๆที่เป็นรายละเอียดสินค้าลงใน div cardBody
  cardBody.appendChild(menuImgEle);
  cardBody.appendChild(h4MenuNameEle);
  cardBody.appendChild(pMenuDescEle);
  cardBody.appendChild(pMenuStatusEle);
  cardBody.appendChild(divMenuPriceEle);
  cardBody.appendChild(buttonAddEle);
  
  //add cardBody ลงใน div ก้อนใหญ่สุด นั่นก็คือ allMenu
  allMenu.appendChild(cardBody);

  }
}


let greyMode  = localStorage.getItem('bgColor');
const greyModeToggle = document.querySelector('#mode');
const bodyBg = document.querySelector('#body');

if(greyMode === 'grey'){
  enableGreyMode();
}

function enableGreyMode(){
    bodyBg.style = 'background-color:lightgrey;';
    greyModeToggle.className = 'bx bxs-toggle-right bx-lg';
    localStorage.setItem('bgColor' , 'grey'); //สีเทา
}

function disableGreyMode(){
  bodyBg.style = 'background-color:white;';
  greyModeToggle.className = 'bx bxs-toggle-left bx-lg';
  localStorage.setItem('bgColor' , 'null'); //สีขาว
}

greyModeToggle.addEventListener('click', () => {
  greyMode  = localStorage.getItem('bgColor');
  if(greyMode === 'null'){
    enableGreyMode();
  }else{
    disableGreyMode();
  }
  }
);


