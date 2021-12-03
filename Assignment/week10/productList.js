import stationeries from "./stationeries.js";

// เลือก node id = products ในหน้า index.html
const productsEle = document.querySelector("#products");

//for of เพื่อวนอ่านค่าแต่ละตัวใน array ของ stationeries
for (let stationery of stationeries) {
    let divProductEle = document.createElement("div"); // สร้าง div เปล่าขึ้นมา
    divProductEle.setAttribute("id", stationery.id); // กำหนด id ของ div โดยเอาจาก id ใน stationery
    // กำหนดค่าของกล่อง(div)ที่เก็บ product แต่ละชิ้น
    divProductEle.className =
        "w-56 md:w-72 bg-white mt-20 shadow-lg rounded-lg overflow-hidden";
    let divProductName = appendProductName(stationery);
    let divImgProduct = appendImgProduct(stationery);
    let divProductDetail = appendProductDetail(stationery);
    // นำ divProductName, divImgProduct, divProductDetail เข้าไปอยู่ใน divProductEle
    divProductEle.appendChild(divProductName); //อันนี้คือค่าที่ได้มาจาก return ของ function มาเเล้ว มันไม่ใช่ function นะ
    divProductEle.appendChild(divImgProduct);
    divProductEle.appendChild(divProductDetail);
    productsEle.appendChild(divProductEle); // นำ divProductEle เข้าไปต่อที่ productsEle
}
// function แสดงชื่อสินค้า
function appendProductName(stationery) {
    let divProductName = document.createElement("div");
    divProductName.className =
        "py-2 text-center font-bold uppercase tracking-wide text-gray-800";
    divProductName.textContent = stationery.name; 
    return divProductName;
    // divProductName = <div class = "py-2 text-center font-bold uppercase tracking-wide text-gray-800">name</div>
}
// function ที่รวมราคาสินค้า, จำนวนสินค้า และปุ่มเพิ่มลงตะกร้า ไว้ใน div เดียวกัน
function appendProductDetail(stationery) {
    let divProductDetail = document.createElement("div");
    divProductDetail.className =
        "flex items-center justify-between py-2 px-3 bg-gray-400";
    let divPriceEle = appendDivPriceEle(stationery);
    // สร้างปุ่ม "เพิ่มลงตะกร้า"
    let addToCartBtn = document.createElement("button");
    addToCartBtn.setAttribute("id", stationery.name);
    addToCartBtn.className =
        "bg-green-500 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-green-600";
    addToCartBtn.textContent = "เพิ่มลงในตะกร้า";
    divProductDetail.appendChild(divPriceEle);
    divProductDetail.appendChild(addToCartBtn);
    return divProductDetail;
}
// function แสดงราคาและจำนวนสินค้า
function appendDivPriceEle(stationery) {
    let divPriceEle = document.createElement("div");
    let priceEle = document.createElement("h2");
    priceEle.className = "text-gray-800 font-bold";
    priceEle.textContent = `${stationery.price} THB`;
    let stockEle = document.createElement("h4");
    stockEle.className = "text-gray-800 font-bold text-xs";
    stockEle.textContent = `(Instock: ${stationery.stock})`;
    divPriceEle.appendChild(priceEle);
    divPriceEle.appendChild(stockEle);
    return divPriceEle;
}
// function แสดงรูปภาพ
function appendImgProduct(stationery){
    let divImgProduct = document.createElement("div");
    divImgProduct.className = 
        "max-w-sm rounded overflow-hidden shadow-lg";
    let ImgEle = document.createElement("img");
    ImgEle.className = "w-full";
    ImgEle.src = stationery.srcimg;
    ImgEle.style = "height:300px";
    divImgProduct.appendChild(ImgEle);
    return divImgProduct;
}