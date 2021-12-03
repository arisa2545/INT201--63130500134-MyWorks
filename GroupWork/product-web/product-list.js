let kfcMenu = [
    {
      menuImg: 'sooktermjor.png',
      menuId: 'm001',
      menuName: 'สุขเต็มจอ',
      menuDesc: 'ไก่ทอด 4 ชิ้น , ไก่ป๊อป 7 ชิ้น , นักเก็ตส์ 6 ชิ้น , เฟรนซ์ฟรายส์ ปกติ 1 ที่',
      price: 199.00 ,
      menustatus:'available'   
    }
  ,
    {
      menuImg: 'chicknbun.png',
      menuId: 'm002',
      menuName: 'ชิค แอนด์ บัน',
      menuDesc: 'ไก่ไม่มีกระดูกใส่ในขนมปังเนื้อนุ่ม ราดด้วยซอสมายองเนสรสชาติเข้มข้นสูตรพิเศษ',
      price: 29.00 ,
      menustatus:'sold out'   
    }
  ,
    {
      menuImg: 'buckethaichok_dlv_new.png',
      menuId: 'm003',
      menuName: 'บักเก็ตให้โชค',
      menuDesc: 'ไก่ทอด 4 ชิ้น , ไก่วิงซ์แซ่บ 2 ชิ้น , นักเก็ตส์ 4 ชิ้น , เป๊ปซี่ 2 ที่*',
      price: 239.00 ,
      menustatus:'available'   
    }
  ];


  // div ก้อนใหญ่
const divMenusEle = document.querySelector('#allMenu');
console.log(divMenusEle);


 
for(const menu of kfcMenu) {
  const divMenuEle = document.createElement('div');
  divMenuEle.setAttribute('id',menu.menuId);
  divMenuEle.setAttribute('class','container col-4 mx-auto border rounded-3 p-3');
  //divMenuEle.setAttribute('style','margin: 5em');
  console.log(divMenuEle);

  // const divAlertEle = document.createAttribute('div')
  // divAlertEle.setAttribute('class', 'alert alert-light');
  // divAlertEle.setAttribute('role', 'alert')

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

  divMenuEle.appendChild(menuImgEle);
  divMenuEle.appendChild(pMenuNameEle);
  divMenuEle.appendChild(pMenuDescEle);
  divMenuEle.appendChild(pMenuStatusEle);
  divMenuEle.appendChild(pMenuPriceEle);
  divMenuEle.appendChild(bottonEle);
  divMenusEle.appendChild(divMenuEle);
}

