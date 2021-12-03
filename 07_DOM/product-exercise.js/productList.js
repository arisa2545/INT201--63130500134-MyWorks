let product = {
    productId: 'p001',
    productName: 'Dell Notebook',  
    productDesc: 'monitor 15 inches, latitude 5500',
    price: 35000
};
  
//1. query div of products as reference node
const divProductsEle = document.querySelector('#products');
console.log(divProductsEle);
  
  
//2. create div of product element
// <div id="P001"></div>
const divProductEle = document.createElement('div');
divProductEle.setAttribute('id', product.productId);
console.log(divProductEle);
  
// 3. create p of product id element
// <p>Product Id: P001</p>
const pProductIdEle = document.createElement('p');
pProductIdEle.textContent = 'Product Id: ' + product.productId;
  
//4. add <p> product id to div of product
/* <div id="P001">  <p>Product Id: P001</p></div> */
divProductEle.appendChild(pProductIdEle);


// 5. create p of product name element
// <p>Product Name: Dell Notebook</p>
const pProductNameEle = document.createElement('p');
pProductNameEle.textContent = 'Product Name: ' + product.productName;
divProductEle.appendChild(pProductNameEle);

// product description ::
const pProductDescEle = document.createElement('p');
pProductDescEle.textContent = 'Product Description: ' + product.productDesc;
divProductEle.appendChild(pProductDescEle);

// product price ::
const pProductPriceEle = document.createElement('p');
pProductPriceEle.textContent = 'Product Description: ' + product.productDesc;
divProductEle.appendChild(pProductPriceEle);

divProductsEle.appendChild(divProductEle);