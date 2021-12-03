let kfcMenu = [
  { 
    menuImg: 'sooktermjor.png', 
    menuId: 'm001',
    menuName: 'Sook Tem Jor',
    menuDesc: '4 pcs. Fried Chicken , 7 pcs. Chicken Pop , 6 pcs. Nugget , 1 Regular French fries',
    price: 199.00 ,
    menuStatus:'available'  
  }
,
  {
    menuImg: 'chicknbun.png',
    menuId: 'm002',
    menuName: 'Chick and Bun',
    menuDesc: 'Boneless Chicken with Soft Bun, Topped with Delicious Special Mayo Sauce, Yummy!!!',
    price: 29.00 ,
    menuStatus:'sold out'  
  }
,
  {
    menuImg: 'buckethaichok_dlv_new.png',
    menuId: 'm003',
    menuName: 'Bucket Hai Chok',
    menuDesc: '4 pcs. Fried Chicken , 2 pcs. WingZ Zabb , 4 pcs. Nugget , 2 Pepsi',
    price: 239.00 ,
    menuStatus:'available'  
  }
,
  {
    menuImg: 'plantbasebrice.png',
    menuId: 'm004',
    menuName: 'Plant-Based Zabb Rice Bowl',
    menuDesc: 'Plant-Based Zabb Rice Bowl',
    price: 75.00 ,
    menuStatus:'sold out'  
  }
,
  {
    menuImg: 'SPICY_CHICKEN_RICE_BOWL.png',
    menuId: 'm005',
    menuName: 'Spicy Chicken Rice Bowl',
    menuDesc: 'Spicy Chicken Rice Bowl',
    price: 65.00 ,
    menuStatus:'available'  
  }
,
  {
    menuImg: 'green_curry_crispy_chicken_rice.png',
    menuId: 'm006',
    menuName: 'Green Curry Crispy Chicken Rice',
    menuDesc: 'Chicken pop topped with special green curry sauce served in a hot rice bowl.',
    price: 65.00 ,
    menuStatus:'available'  
  }
];

const search = document.querySelector('#searchIcon');
const divSearch = document.querySelector('#divSearch');
const searchBar = document.querySelector('#searchBar')

let toggle = false;
// let pattern = true;
search.addEventListener('click', checkToggle);


function checkToggle() {
    toggle = !toggle ;
    if(toggle) {
        // const input = document.createElement('input');
        // input.id = 'inputValue'
        // input.type = 'text';
        // input.placeholder = 'search...'
        // searchBar.appendChild(input);
        searchBar.innerHTML = `<input id = 'inputValue' type = 'text' placeholder="search">
        <button id = 'searchBtn' type="button" class="btn btn-primary btn-sm ms-3">search</button>`;
        const searchBtn = document.querySelector('#searchBtn');
        searchBtn.addEventListener('click', () => {
            let value = document.querySelector('#inputValue').value;
            //console.log(value)

            let pattern = new RegExp(value, 'i')
            //console.log(pattern)

            for(let menu of kfcMenu) {
                if(menu.menuName.match(pattern) != null) {
                        
                  const divMenuEle = document.createElement('div');
                  divMenuEle.setAttribute('id',menu.menuId);
                  divMenuEle.setAttribute('class','container col-4 mx-auto ');
                  //divMenuEle.setAttribute('style','margin: 5em');
                  console.log(divMenuEle);
                
                  const divAlertEle = document.createElement('div')
                  divAlertEle.setAttribute('class', 'alert alert-light border rounded-3 p-3');
                  divAlertEle.setAttribute('role', 'alert')
                
                  //img
                  const menuImgEle = document.createElement('img');
                  menuImgEle.setAttribute('src',menu.menuImg);
                  menuImgEle.setAttribute('class', 'rounded mx-auto d-block my-3')
                  menuImgEle.setAttribute('style','width: 375px');
                  //console.log(menuImgEle);
                
                  //menuName
                  const pMenuNameEle = document.createElement('p');
                  pMenuNameEle.setAttribute('class', 'fw-bolder')
                  pMenuNameEle.textContent = menu.menuName;
                  //console.log(pMenuNameEle);
                
                  const pMenuDescEle = document.createElement('p');
                  pMenuDescEle.textContent = menu.menuDesc;
                
                  const pMenuPriceEle = document.createElement('p');
                  pMenuPriceEle.textContent = 'Menu Price: ' + menu.price;
                
                  const pMenuStatusEle = document.createElement('p');
                  pMenuStatusEle.textContent = 'Status: ' + menu.menustatus;
                
                  const bottonEle = document.createElement('botton');
                  bottonEle.setAttribute('type', 'botton');
                  bottonEle.setAttribute('class', 'btn btn-danger btn-block text-white');
                  bottonEle.textContent = 'Add to cart'
                
                  divAlertEle.appendChild(menuImgEle);
                  divAlertEle.appendChild(pMenuNameEle);
                  divAlertEle.appendChild(pMenuDescEle);
                  divAlertEle.appendChild(pMenuStatusEle);
                  divAlertEle.appendChild(pMenuPriceEle);
                  divAlertEle.appendChild(bottonEle);
                
                  divMenuEle.appendChild(divAlertEle)
                  divMenusEle.appendChild(divMenuEle);
                
                }
            }

            
        })

    } else {
        // searchBar.removeChild(divSearch.lastChild);
        searchBar.innerHTML = '';
    }
}


  // div ก้อนใหญ่
const divMenusEle = document.querySelector('#allMenu');
console.log(divMenusEle);

// const divSearch = document.querySelector('#search')
 
for(const menu of kfcMenu) {
  const divMenuEle = document.createElement('div');
  divMenuEle.setAttribute('id',menu.menuId);
  divMenuEle.setAttribute('class','container col-4 mx-auto ');
  //divMenuEle.setAttribute('style','margin: 5em');
  console.log(divMenuEle);

  const divAlertEle = document.createElement('div')
  divAlertEle.setAttribute('class', 'alert alert-light border rounded-3 p-3');
  divAlertEle.setAttribute('role', 'alert')

  //img
  const menuImgEle = document.createElement('img');
  menuImgEle.setAttribute('src',menu.menuImg);
  menuImgEle.setAttribute('class', 'rounded mx-auto d-block my-3')
  menuImgEle.setAttribute('style','width: 350px');
  //console.log(menuImgEle);

  //menuName
  const pMenuNameEle = document.createElement('p');
  pMenuNameEle.setAttribute('class', 'fw-bolder')
  pMenuNameEle.textContent = menu.menuName;
  //console.log(pMenuNameEle);

  const pMenuDescEle = document.createElement('p');
  pMenuDescEle.textContent = menu.menuDesc;

  const pMenuPriceEle = document.createElement('p');
  pMenuPriceEle.textContent = 'Menu Price: ' + menu.price;

  const pMenuStatusEle = document.createElement('p');
  pMenuStatusEle.textContent = 'Status: ' + menu.menustatus;

  const bottonEle = document.createElement('botton');
  bottonEle.setAttribute('type', 'botton');
  bottonEle.setAttribute('class', 'btn btn-danger btn-block text-white');
  bottonEle.textContent = 'Add to cart'

  divAlertEle.appendChild(menuImgEle);
  divAlertEle.appendChild(pMenuNameEle);
  divAlertEle.appendChild(pMenuDescEle);
  divAlertEle.appendChild(pMenuStatusEle);
  divAlertEle.appendChild(pMenuPriceEle);
  divAlertEle.appendChild(bottonEle);

  divMenuEle.appendChild(divAlertEle)
  divMenusEle.appendChild(divMenuEle);
}

