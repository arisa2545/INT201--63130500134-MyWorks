// 1. query target node
const okBtn = document.querySelector("#submitOK");
const divBtn = document.querySelector('#divButtonPanel');

// 2. register(or add) event handler to target node
// okBtn.onclick = showMessage;
// okBtn.onclick = () => {
//     alert('Good luck');
// }
// okBtn.onclick = null; // remove event
let count = 0;
okBtn.addEventListener('click', showMessage, false)

// divBtn.addEventListener('click', (e) => {
//     alert(`submit botton click
//             event target id : ${e.target.id}
//             event target : ${e.target}
//             event current target : ${e.currentTarget}
//             event type : ${e.type}`);
// }, false) //ลองเปลี่ยนๆเป็น true ได้น้าไอซ์ในอนาคต

// okBtn.removeEventListener('click', showMessage)



// 3. preopare event handler
function showMessage (e) {
    // alert(`submit botton click
    //         event target id : ${e.target.id}
    //         event target : ${e.target}
    //         event current target : ${e.currentTarget}
    //         event type : ${e.type}`);

    count += 1;
    console.log(count)

}



console.log(count)