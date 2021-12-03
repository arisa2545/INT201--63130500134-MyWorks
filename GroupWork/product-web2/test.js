//allMenu เป็น div ก้อนใหญ่สุด
const allMenu = document.querySelector('#allMenu');
allMenu.class = 'container d-flex align-items-center';
allMenu.innerHTML = '';

const cardBody = document.createElement('div');
cardBody.setAttribute('class', 'col-4 p-3');
cardBody.setAttribute('style', 'border:1px solid black; margin:10px; border-radius:10px');
console.log(cardBody);

//<img class="card-img-top" src="img_avatar1.png" style="width:300px; padding:20px; display: block; margin: auto;">
const menuImgEle = document.createElement('img');
menuImgEle.setAttribute('class', 'card-img-top');
menuImgEle.setAttribute('src', menu.menuImg);
menuImgEle.setAttribute('style', 'width:300px; padding:20px; display: block; margin: auto;');
console.log(menuImgEle);

//<h4 class="card-title" style="color:red;">ชื่อเมนู</h4>
const h4MenuNameEle = document.createElement('h4');
h4MenuNameEle.setAttribute('class', 'card-title');
h4MenuNameEle.setAttribute('style', 'color:red;');
h4MenuNameEle.textContent = menu.menuName;
console.log(h4MenuNameEle);

//<p class="card-text">Description</p>
const pMenuDescEle = document.createElement('p');
pMenuDescEle.setAttribute('class', 'card-text');
pMenuDescEle.textContent = menu.menuDesc;
console.log(pMenuDescEle);

//<p class="card-text">Status</p>
const pMenuStatusEle = document.createElement('p');
pMenuStatusEle.setAttribute('class', 'card-text');
pMenuStatusEle.textContent = 'Status: ' + menu.menuStatus;
console.log(pMenuStatusEle);

const divPriceEle = document.createElement('div');
divPriceEle.setAttribute('class', 'd-inline-flex px-4 py-1 mb-3 rounded-3 border border-danger rounded-3 border-3');
// buttonPriceEle.setAttribute('role', 'alert');
divPriceEle.textContent = '฿' + menu.price;
console.log(divPriceEle);

const buttonAddEle = document.createElement('button');
buttonAddEle.setAttribute('type', 'button');
buttonAddEle.setAttribute('class', 'container btn btn-danger');
buttonAddEle.textContent = 'Add To Cart';

//add ข้อมูลใน key ต่างๆที่เป็นรายละเอียดสินค้าลงใน div cardBody
cardBody.appendChild(menuImgEle);
cardBody.appendChild(h4MenuNameEle);
cardBody.appendChild(pMenuDescEle);
cardBody.appendChild(pMenuStatusEle);
cardBody.appendChild(divPriceEle);
cardBody.appendChild(buttonAddEle);

allMenu.appendChild(cardBody);