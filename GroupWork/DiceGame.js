
// สร้าง object ที่ชื่อว่า person1 เก็บชื่อคน , scoreต่อรอบ , ผลลัพธ์
let person1 = {name: "Ice", scoreEachRound: [], result: []} ;
let person2 = {name: "Spy", scoreEachRound: [], result: []} ;
let person3 = {name: "Chit", scoreEachRound: [], result: []} ;
let person4 = {name: "So", scoreEachRound: [], result: []} ;
let person5 = {name: "Tee", scoreEachRound: [], result: []} ;

// สร้าง object ที่ชื่อว่า dice เก็บฟังก์ชั่น Math.floor(Math.random() *6)+1  // สุ่มตัวเลข 1-6
let dice = {roll: function(){return Math.floor(Math.random() * 6) + 1}}

//สร้างฟังก์ชั่น diceGame
function diceGame(player1, player2, total_Round){
    player1["scoreEachRound"] = [];
    player2.scoreEachRound = [];
    player1.result = [];
    player2.result = [];

    let total_dice_p1 = 0; //สร้าง object กำหนดค่า แต้มรวมของ p1
    let total_dice_p2 = 0; //สร้าง object กำหนดค่า แต้มรวมของ p2

    // สร้าง for loop เป็นการวนให้ผู้เล่นถอยลูกเต๋าในเเต่ละรอบ
    for(let round = 1; round <= total_Round; round++){
        //สร้าง object กำหนดค่าด้วย function dice.roll
        let diceForP1 = dice.roll();
        let diceForP2 = dice.roll();
        
        player1.scoreEachRound.push(diceForP1); //นำค่าที่ได้จาก diceForP1 push ขึ้นไปยัง Array scoreEachRound
        player2.scoreEachRound.push(diceForP2); //นำค่าที่ได้จาก diceForP2 push ขึ้นไปยัง Array scoreEachRound

        if(diceForP1 > diceForP2) {         // คำสั่ง กำหนดเงื่อน if เช็คค่า diceForP1 หากมากกว่า diceForP2 จะส่งค่าตามคำสั่งด้านล่าง
            player1.result.push('Win');     // แต้มลูกเต่า P1 > P2 | P1 ส่งค่าขึ้น Array player1.result = 'Win'
            player2.result.push('Lose');    // แต้มลูกเต่า P1 > P2 | P2 ส่งค่าขึ้น Array player2.result = 'Lose'
        }else if(diceForP2 > diceForP1) {   // คำสั่ง else if เช็คค่า diceForP2 หากมากกว่า diceForP1 จะส่งค่าตามคำสั่งด้านล่าง
            player1.result.push('Lose');    // แต้มลูกเต่า P2 > P1 | P1 ส่งค่าขึ้น Array player1.result = 'Lose'
            player2.result.push('Win');     // แต้มลูกเต่า P2 > P1 | P2 ส่งค่าขึ้น Array player1.result = 'Win'
        }else {                             // หากไม่เป็นตามเงื่อนไขสักข้อ
            player1.result.push('Draw');    // ส่งค่าขึ้น Array player1.result = 'Draw'
            player2.result.push('Draw');    // ส่งค่าขึ้น Array player2.result = 'Draw'
        }

        // บวกค่าที่ได้จากการถอยลูกเต๋าในรอบนี้ของเเต่ละคนให้กับ total_dice_p1 เเละ total_dice_p2 ตามลำดับ
        total_dice_p1 += diceForP1; 
        total_dice_p2 += diceForP2;
        //total_dice_p2 = total_dice_p2 + diceForP1   
        
    }

    if(total_dice_p1 > total_dice_p2) {
        return `${player1.name} Win!`;
        //return player1.name;
    }else if(total_dice_p2 > total_dice_p1) {
        return `${player2.name} Win!`;
        //return player2.name;
    }else {
        return 'Draw!';
    }   
}

// console.log(`Winner is ${diceGame(person1, person2, 10)}`)
// console.log(`Winner is ${diceGame(person3, person4, 5)}`)
console.log(`Dice Game -----------------`);
//console.log(`Winner is ${diceGame(person5, person1, 5)}`);
console.log(diceGame(person5, person1, 5));

console.log(`\nGame Details --------------`);
console.log(`Player 1 is ${person5.name}`);
console.log(`The result of each round : ${person5.result}`)

console.log(`Player 2 is ${person1.name}`);
console.log(`The result of each round : ${person1.result}`)
