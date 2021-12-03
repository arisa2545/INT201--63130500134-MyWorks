import {Cookie} from "./cookie.js";

export let incarts = {
    items: [] , 
    itemId: [] , 
    totalQty: 0 ,
    totalPrice: 0 
};

// เป็นการอัพเดตข้อมูลใน carts ลงใน cookie
export function save() {
  Cookie.set('cart', JSON.stringify(incarts));
}

export function clearAll() {
  alert('Clear your carts !!');
  // clear ของทุกอย่างออก
  incarts.items = []; 
  incarts.itemId = []; 
  incarts.totalQty = 0;
  incarts.totalPrice = 0;
  
  // อัพเดตตรงที่เเสดง total quantity
  const cartAmount = document.querySelector('#amount');
  cartAmount.textContent = incarts.totalQty

  // อัพเดตข้อมูลของ carts ต่างๆใน cookie
  save()
}


export function addItem(newItem) {

    // ถ้า array items ที่อยู่ใน carts ไม่มีของอยู่ในตะกร้า หรือสินค้าที่จะเพิ่มเข้าไปนั้นไม่เคยมีการเพิ่มลงตะกร้ามาก่อน
    //ให้ทำการเพิ่ม object newItem เข้าไปใน array items เเละเพิ่ม id ของ newItem เข้าไปใน array itemId เพื่อเก็บประวัติไว้ว่าเคยมีเมนูอันนี้เพิ่มเข้ามาเเล้ว
    if(incarts.items.length == 0 || incarts.itemId.includes(newItem.id) == false){
        incarts.items.push(newItem)
        incarts.itemId.push(newItem.id)
  
      // เเต่ถ้าเคยเมนูอันนี้ในตะกร้าเเล้วให้ทำการวนลูปหาว่าว่าเมนูนี้อยู่ index ไหนของ array items เเล้วเพิ่ม qty เข้าไป 1
      } else {
          for(let checkItem of incarts.items) {
            if(checkItem.id == newItem.id) {
              checkItem.qty++ ;
            }
          }
      }
  
      
      incarts.totalQty = incarts.items.reduce((sum,item) => {return sum += item.qty}, 0);
      incarts.totalPrice = incarts.items.reduce((sum,item) => {return sum += (item.price * item.qty)}, 0);
      console.log(incarts)
  
      const cartAmount = document.querySelector('#amount');
      cartAmount.textContent = incarts.totalQty;

}

// function ที่จะโหลดเมนูในตะกร้าเก่าขึ้นมาใหม่
export function loadCarts() {
  incarts = JSON.parse(Cookie.getCookie('cart'));
  console.log(incarts);

  const cartAmount = document.querySelector('#amount');
  cartAmount.textContent = incarts.totalQty
}

export function showCarts() {

  // เปลี่ยนให้ display ของ modal เป็น block เพื่อให้ modal เเสดงออกมา
  const modal = document.querySelector('#myModal');
  modal.style.display = "block";

  // set ให้ modal body เป็น div ว่างๆ เป็นการ clear ของอันเก่าที่เราเคยเรียกเเสดงไปเเล้ว
  const modalBody = document.querySelector('.modal-body');
  modalBody.textContent = '';

  if(incarts.items.length == 0) {
      modalBody.textContent = 'There are no order in your cart.'

  } else {
    // วนลูปเเสดงรายการเมนูเเต่ละอันที่อยู่ใน array items ของ object carts
    for(let menu of incarts.items) {

      // div ใหญ่ที่ครอบเเต่ละ menu
      const divItem = document.createElement('div');
      divItem.className = 'd-flex border p-2';

      // div ย่อยที่เเสดงชื่อเมนู
      const divMenuName = document.createElement('div');
      divMenuName.className = 'p-2';
      divMenuName.style = 'width: 260px';
      divMenuName.textContent = menu.name;

      // div ย่อยที่เเสดงราคา
      const divMenuPrice = document.createElement('div');
      divMenuPrice.className = 'p-2 flex-fill text-center';
      divMenuPrice.textContent = `${menu.price}฿`;
    
      // div ย่อยที่เเสดงจำนวนเมนูที่กดเพิ่มเข้ามา
      const divMenuQty = document.createElement('div');
      divMenuQty.className = 'p-2 fw-bolder text-end';
      divMenuQty.style = 'width: 80px';
      divMenuQty.textContent = `× ${menu.qty}`;

      // นำ div ย่อยเเต่ละอันมา appendChild ให้กับ div ใหญ่ของเเต่ละเมนู
      divItem.appendChild(divMenuName);
      divItem.appendChild(divMenuPrice);
      divItem.appendChild(divMenuQty);

      // นำ div ใหญ่ของเเต่ะลเมนูมา appendChild ให้กับ modalBody
      modalBody.appendChild(divItem)

    }
    
  }

  document.querySelector('#totalPrice').textContent = `total price : ${incarts.totalPrice}`;

  // ใส่ event ให้กับปุ่มปิดที่อยู่ใน modal เมื่อคลิกที่ปุ่มจะปิดเเท็บของ modal
  const closeBtn = document.getElementById("close")
  closeBtn.addEventListener('click', () => {modal.style.display = "none";})

  // เมื่อคลิกที่ส่วนใดๆของจอ ที่อยู่ของนอกกรอบ modal ให้ทำการปิดเเท็บ modal ลง
  window.addEventListener('click', (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })
  
}

