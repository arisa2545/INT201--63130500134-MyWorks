import {kfcMenu} from "./menus.js";

export function checkSearchPanel(){
  const searchBtn = document.querySelector('#searchBtn');
  const inputValue = document.querySelector('#inputValue');
    if(searchBtn.style.display === 'none' && inputValue.style.display === 'none'){
      inputValue.style.display = 'flex';
      searchBtn.style.display = 'flex';

      searchBtn.addEventListener('click', () => {
        //เอาค่าที่กรอกลงในช่องค้นหาที่มี id เป็น inputValue ไปเก็บไว้ในตัวแปร value
        let value = document.querySelector('#inputValue').value;
        searchMenu(value);
      })
    
      //add event เข้าไปใน inputValue เมื่อทำการ keyup (ทุกๆครั้งที่ปล่อยปุ่มบนแป้มพิมพ์) 
      //เเล้ว value ในช่อง input เป็น '' (ตอนทำการลบคำออกจากช่อง search) จะทำการเเสดงทุกเมนูออกมา
      inputValue.addEventListener('keyup' , () =>{
        if(inputValue.value == ''){
          //เข้าไปเปลี่ยนทุกๆ div ใน divAllMenu ให้เเสดง display เป็น inline
          showAllMenu();
        }
      })


    }else{
      inputValue.style.display = 'none';
      searchBtn.style.display = 'none';
      showAllMenu();
    }
}

function searchMenu(value) {
    //นำ value มาสร้างเป็น pattern ด้วย regular expression object ที่กำหนด attribute เป็น i (ignore case) เพื่อใช้ในการค้นหาชื่อเมนูที่มีประกอบด้วย pattern นั้นๆอยู่ สามารถใช้ทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่ในการค้นหาได้
    let pattern = new RegExp(value, 'i')

    //ใช้ filter ในการวนลูปเข้าไปเช็ค condition ใน kfcMenu โดยจะ filter เฉพาะเมนูที่มีชื่อประกอบด้วย pattern ที่กำหนดไว้ เเละนำ id ของเมนูนั้น push เข้าไปที่ array searchMenuId
    //method .match(pattern) ทำการเปรียบเทียบชื่อเมนูกับ pattern ที่เราใส่ไว้ ถ้า match กันจะ return menuName ออกมาก ถ้าไม่จะ return null ซึ่งเราต้องการเฉพาะตัวที่ match จึงกำหนดเงื่อนไขเป็น !=null
    const searchMenuId = [];
    kfcMenu.filter((menu) => {
      if(menu.menuName.match(pattern) != null) {
        searchMenuId.push(menu.menuId);
      }
    });

    //เมื่อได้ id ของเมนูที่ต้องค้นหาทั้งหมดเเล้ว จะทำการวนลูปเข้าไปใน div เเต่ละตัวของ divAllMenu เเละเช็คว่า id ของ div มีอยู่ใน searchMenuId หรือป่าว
    //ถ้า id ของ div มีอยู่ใน searchMenuId จะกำหนดให้ display ของ div นั้นเป็น inline เพื่อให้มันเเสดงออกมา
    //เเต่ถ้า id ของ div ไม่อยู่ใน searchMenuId จะกำหนดให้ display ของ div นั้นเป็น none เพื่อไม่ให้มันเเสดงออกมา
    for(let i of divAllMenu) {
      if(searchMenuId.includes(i.id)){
        i.style.display = 'inline';
      } else {
        i.style.display = 'none';
      }
    }
}

function showAllMenu() {
    //เข้าไปเปลี่ยนทุกๆ div ใน divAllMenu ให้เเสดง display เป็น inline
    for(let i of divAllMenu) {
      i.style.display = 'inline';
    }
}