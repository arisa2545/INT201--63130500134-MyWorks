import {products} from './product.js';

const button = document.querySelector('#search');
const searchbar = document.querySelector('#searchbar');
const feed = document.querySelector('#feed');
const opal = document.querySelector('#active');
let item =[];
let index = 0;
let toggle = false;
let product1 = products;
showProduct();
button.addEventListener("click" , ()=> {
    toggle = !toggle;
    if(toggle){
        searchbar.innerHTML = `<input type = 'text' placeholder="Search..." id="searchValue" class="form-control">` 
        let searchValue = document.querySelector('#searchValue');
        searchValue.addEventListener('keyup' , () =>{
            let value = new RegExp(searchValue.value , 'i');
            product1 = [];
            products.map((p) => {
                if (p.name.match(value) != null) {
                    product1.push(p);
                }
            })
            item = product1;
            showProduct(item);
        } 
        )
    }else{
        searchbar.innerHTML = '';
    }
})

opal.addEventListener("click" , ()=>{
    showProduct(item);
})

function showProduct(list = product1){
    feed.innerHTML = "";
    for(let pd of list){
        //Create div and set id for each item
    const ProductEle = document.createElement("div");
    ProductEle.setAttribute('id', pd.id);
    ProductEle.setAttribute("class", "container col-4 mx-auto");
    ProductEle.setAttribute("style", "margin-bottom: 50px; text-align: center;")

    const pProductImg = document.createElement("img");
    pProductImg.setAttribute("src", pd.img);
    pProductImg.setAttribute("height", 200);
    pProductImg.setAttribute("class", "bg-white");

    //Create tag p and set text content (ID)
    const pProductId = document.createElement('p');
    pProductId.textContent = ` ID : ${pd.id}`;

    //Create tag p and set text content (Name)
    const pProductName = document.createElement('p');
    pProductName.textContent = ` Name : ${pd.name}`;

    //Create tag p and set text content (Price)
    const pProductPrice = document.createElement('p');
    pProductPrice.textContent = ` Price : ${pd.price}` + ' Baht ';

    //Create tag p and set text content (Stock)
    const pProductStock = document.createElement('p');
    pProductStock.textContent = ` Stock : ${pd.stock}`;

    const pProductButtom = document.createElement('buttom');
    pProductButtom.setAttribute("type", "button");
    pProductButtom.setAttribute("class", "btn btn-dark button");
    pProductButtom.setAttribute("onclick", "addAlert()");
    pProductButtom.textContent = "Add Now";

    //AppendChild to ProductEle
    ProductEle.appendChild(pProductImg);
    ProductEle.appendChild(pProductId);
    ProductEle.appendChild(pProductName);
    ProductEle.appendChild(pProductPrice);
    ProductEle.appendChild(pProductStock);
    ProductEle.appendChild(pProductButtom);

    feed.appendChild(ProductEle);
    }
}




