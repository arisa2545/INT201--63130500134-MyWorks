import {kfcMenu} from "./menus.js";
let toggle = false;

let divAllMenu = document.querySelector('#allMenu').children;
export function checkToggle() {
  toggle = !toggle;
  if(toggle) {
      document.querySelector('#inputValue').style = 'display: inline';
      document.querySelector('#searchBtn').style = 'display: inline';                 
      const searchBtn = document.querySelector('#searchBtn');
      searchBtn.addEventListener('click', () => {
          let value = document.querySelector('#inputValue').value;
          searchMenu(value);
      })
      let inputValue = document.querySelector('#inputValue');
      inputValue.addEventListener('keyup' , () =>{
          if(inputValue.value == ''){
            showAllMenu();
          }
      })
  } else {
      document.querySelector('#inputValue').style = 'display: none';
      document.querySelector('#searchBtn').style = 'display: none';
      showAllMenu();
  }
}

function searchMenu(value) {
    let pattern = new RegExp(value, 'i')
    const searchMenuId = [];
    kfcMenu.filter((menu) => {
      if(menu.menuName.match(pattern) != null) {
        searchMenuId.push(menu.menuId);
      }
    });

    for(let i of divAllMenu) {
      if(searchMenuId.includes(i.id)){
        i.style.display = 'inline';
      } else {
        i.style.display = 'none';
      }
    }
}

function showAllMenu() {
    for(let i of divAllMenu) {
      i.style.display = 'inline';
    }
}