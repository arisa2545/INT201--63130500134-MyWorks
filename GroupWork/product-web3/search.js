import {showMenus} from "./menu_list.js";
import {kfcMenu} from "./menus.js";

// ตัวแปร toggle จะเก็บสถานะของช่อง searchBar เเละปุ่ม search ว่ากำลังเปิดอยู่รึป่าว
let toggle = false;

export function checkToggle() {
  //switch toggle ถ้า toggle เป็น false อยู่จะเปลี่ยนเป็น true  
  toggle = !toggle;
  if(toggle) {
      //ถ้า true จะเเสดง search bar กับปุ่ม search ออกมา
      //ให้ทำการเปลี่ยน display ใน style ของช่อ search เเละปุ่ม search เป็น inline 
      document.querySelector('#inputValue').style = 'display: inline';
      document.querySelector('#searchBtn').style = 'display: inline';
                              
      const searchBtn = document.querySelector('#searchBtn');

      //add event เข้าไปใน searchBtn เมื่อทำการ click เเล้วจะเอา value ที่พิมพ์เข้ามาไปหาว่ามันคือตัวไหนบ้างของ kfcMenu เเล้วก็เมนูเหล่านั้นเเสดงออกมา
      searchBtn.addEventListener('click', () => {

          //เอาค่าที่กรอกลงในช่องค้นหาที่มี id เป็น inputValue ไปเก็บไว้ในตัวแปร value
          let value = document.querySelector('#inputValue').value;
          console.log(value)

          //นำ value มาสร้างเป็น pattern ด้วย regular expression object ที่กำหนด attribute เป็น i (ignore case) เพื่อใช้ในการค้นหาชื่อเมนูที่มีประกอบด้วย pattern นั้นๆอยู่ สามารถใช้ทั้งตัวพิมพ์เล็กและตัวพิมพ์ใหญ่ในการค้นหาได้
          let pattern = new RegExp(value, 'i')

          //ใช้ filter ในการวนลูปเข้าไปเช็ค condition ใน kfcMenu โดยจะ filter เฉพาะเมนูที่มีชื่อประกอบด้วย pattern ที่กำหนดไว้ เเละนำไปเก็บไว้กับ searchMenu
          //method .match(pattern) ทำการเปรียบเทียบชื่อเมนูกับ pattern ที่เราใส่ไว้ ถ้า match กันจะ return menuName ออกมาก ถ้าไม่จะ return null ซึ่งเราต้องการเฉพาะตัวที่ match จึงกำหนดเงื่อนไขเป็น !=null
          const searchMenu = kfcMenu.filter((menu) => {return menu.menuName.match(pattern) != null});
          console.log(searchMenu);

          //เเสดงเมนูใน searchMenu 
          showMenus(searchMenu);
          
      })

      let inputValue = document.querySelector('#inputValue');
      
      //add event เข้าไปใน inputValue เมื่อทำการ keyup (ทุกๆครั้งที่ปล่อยปุ่มบนแป้มพิมพ์) จะเข้า function ที่มี condition ดังนี้
      inputValue.addEventListener('keyup' , () =>{
        //ถ้า true จะแสดง menuname
          if(inputValue.value == ''){
            //เเสดงเมนูในทั้งหมดใน kfcMenu
            showMenus(kfcMenu);
          }
      })

  } else {
      //ถ้า false จะไม่เเสดง search bar กับปุ่ม search ออกมา
      //ให้ทำการเปลี่ยน display ใน style ของช่อ search เเละปุ่ม search เป็น none
      document.querySelector('#inputValue').style = 'display: none';
      document.querySelector('#searchBtn').style = 'display: none';
      showMenus(kfcMenu);
  }
}