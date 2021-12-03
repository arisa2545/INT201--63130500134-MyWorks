import { products } from "./product.js";
console.log(products[0].id);
//Select div products List
const divProducts = document.querySelector('#products');
divProducts.setAttribute("class", "container row justify-content-center mx-auto");

//Array for extract data from Product-list
for (let i = 0; i < products.length; i++) {
    //Create div and set id for each item
    const ProductEle = document.createElement("div");
    ProductEle.setAttribute('id', products[i].id);
    ProductEle.setAttribute("class", "container col-4 mx-auto border");
    ProductEle.setAttribute("style", "margin-bottom: 50px; text-align: center;")

    const pProductImg = document.createElement("img");
    pProductImg.setAttribute("src", products[i].img);
    pProductImg.setAttribute("height", 200);

    //Create tag p and set text content (ID)
    const pProductId = document.createElement('p');
    pProductId.textContent = ` ID : ${products[i].id}`;

    //Create tag p and set text content (Name)
    const pProductName = document.createElement('p');
    pProductName.textContent = ` Name : ${products[i].name}`;

    //Create tag p and set text content (Price)
    const pProductPrice = document.createElement('p');
    pProductPrice.textContent = ` Price : ${products[i].price}` + ' Baht ';

    //Create tag p and set text content (Stock)
    const pProductStock = document.createElement('p');
    pProductStock.textContent = ` Stock : ${products[i].stock}`;

    const pProductButtom = document.createElement('buttom');
    pProductButtom.setAttribute("type", "button");
    pProductButtom.setAttribute("class", "btn btn-dark");
    pProductButtom.setAttribute("onclick", "addAlert()");
    pProductButtom.textContent = "Add Now";



    //AppendChild to ProductEle
    ProductEle.appendChild(pProductImg);
    ProductEle.appendChild(pProductId);
    ProductEle.appendChild(pProductName);
    ProductEle.appendChild(pProductPrice);
    ProductEle.appendChild(pProductStock);
    ProductEle.appendChild(pProductButtom);

    //AppendChild to divProducts
    divProducts.appendChild(ProductEle);
}