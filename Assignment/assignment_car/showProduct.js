import {car} from "./carList.js";
import {carts} from "./searchProduct.js";

//export const divProductEle = document.querySelector("#product");

// export let carts = {items: [], itemId: [] , totalQty: 0};


export function showProduct(arr){
    const divProductEle = document.querySelector("#product");
    divProductEle.textContent = '';
    for (let i = 0; i < arr.length; i++) {
        //สร้าง div กําหนด attribute ของ id เเละตกเเต่งจัดระยะด้วย bootstrap
        const divCarEle = document.createElement("div");
        // divCarEle.setAttribute("class", "car");
        divCarEle.setAttribute("class", "px-1 mx-1 div-link");
        divCarEle.setAttribute("id", arr[i].carId);
    
        //สร้าง tag img กําหนด attribute src เพื่อนํา path file ของรูปภาพมาใส่ เเละกําหนดความกว้างความสูงของรูป
        //กําหนดให้ pCarImageEle เป็น child ของ div divCarEle
        const pCarImageEle = document.createElement("img");
        pCarImageEle.setAttribute("src", arr[i].image);
        pCarImageEle.setAttribute("height", 150);
        pCarImageEle.setAttribute("width", 270);
        divCarEle.appendChild(pCarImageEle);
    
        //สร้าง tag h3 เพื่อแสดงชื่อของรถเป็น heading3
        //กําหนดให้ h3CarNameEle เป็น child ของ div divCarEle
        const h3CarNameEle = document.createElement("h3");
        h3CarNameEle.textContent = arr[i].carName;
        divCarEle.appendChild(h3CarNameEle);
    
        // //สร้าง tag p เพื่อแสดง id ของรถเป็น p
        // //กําหนดให้ pCarIdEle เป็น child ของ div divCarEle
        // const pCarIdEle = document.createElement("p");
        // pCarIdEle.textContent = "Car Id: " + car[i].carId;
        // divCarEle.appendChild(pCarIdEle);
    
        //สร้าง tag p เพื่อแสดง color ของรถเป็น p
        //กําหนดให้ pCarColorEle เป็น child ของ div divCarEle
        const pCarColorEle = document.createElement("p");
        pCarColorEle.textContent = "Color: " + arr[i].color;
        divCarEle.appendChild(pCarColorEle);
    
        //สร้าง tag p เพื่อแสดง price ของรถเป็น p
        //กําหนดให้ pCarPriceEle เป็น child ของ div divCarEle
        const pCarPriceEle = document.createElement("p");
        pCarPriceEle.textContent = "Price: " + arr[i].price;
        divCarEle.appendChild(pCarPriceEle);

        const addCarEle = document.createElement("button");
        addCarEle.setAttribute("id","addToCart");
        addCarEle.textContent = "Add to cart";
        divCarEle.appendChild(addCarEle);

        addCarEle.addEventListener('click', () => {
            alert(`add car name : ${arr[i].carName}`);

            let newItem = {id: arr[i].carId, name: arr[i].carName, color: arr[i].color, qty: 1};

            if(carts.items.length == 0 || carts.itemId.includes(newItem.id) == false) {
                carts.items.push(newItem);
                carts.itemId.push(newItem.id);
            } else {
                for(let i = 0; i < carts.items.length; i++) {
                    if(newItem.id == carts.items[i].id) {
                        carts.items[i].qty += 1;
                    }
                }
            }

            carts.totalQty = carts.items.reduce((sum, item) => {return sum += item.qty}, 0);
            const amount = document.querySelector('#num');
            amount.textContent = carts.totalQty;
            console.log(carts);

        })
    
        //กําหนดให้ divCarEle เป็น child ของ div divCarsEle
        divProductEle.appendChild(divCarEle);
    
    } 
}
//showProduct(car);
    