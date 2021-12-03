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
];

for(const menu of kfcMenu){

    //allMenu เป็น div ก้อนใหญ่สุด
    const allMenu = document.querySelector('#allMenu');
  
    //<div class="cardBody" style="border:1px solid black; margin:10px; border-radius:10px">
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
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

    //<button type="button" class="btn btn-danger">ราคา</button>
    const buttonPriceEle = document.createElement('button');
    buttonPriceEle.setAttribute('type', 'button');
    buttonPriceEle.setAttribute('class', 'btn btn-danger');
    buttonPriceEle.textContent = '฿' + menu.price;
    console.log(buttonPriceEle);

    //add ข้อมูลใน key ต่างๆที่เป็นรายละเอียดสินค้าลงใน div cardBody
    cardBody.appendChild(menuImgEle);
    cardBody.appendChild(h4MenuNameEle);
    cardBody.appendChild(pMenuDescEle);
    cardBody.appendChild(pMenuStatusEle);
    cardBody.appendChild(buttonPriceEle);

    //add cardBody ลงใน div ก้อนใหญ่สุด นั่นก็คือ allMenu
    allMenu.appendChild(cardBody);

}