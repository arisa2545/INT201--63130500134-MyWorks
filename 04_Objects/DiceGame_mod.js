let player1 = {
    name: "chananya",
    rollValue: [],
    score: 0
};

let player2 = {
    name: "Arisa",
    rollValue: [],
    score: 0
};

let numDice = [1,2,3,4,5,6];
let dice = {rollDice () {return Math.floor((Math.random() * numDice.length) + 1)}};

function diceGame(roundPlay){
    for(let i=0; i<roundPlay; i++){
        let score = play(i);
        return compare(i);
    }
}

function play(index){
    player1.rollValue[index] = dice.rollDice();
    player2.rollValue[index] = dice.rollDice();
    return player1.rollValue[index], player2.rollValue[index]
}

function compare(index){
    if(player1["rollValue"][index] > player2["rollValue"][index]){
        return `${player1.name} is win`;
    }else if(player1["rollValue"][index] < player2["rollValue"][index]){
        return `${player2.name} is win`;
    }else
        return "You Draw!";
}

console.log(diceGame(3));
console.log(player1.rollValue);
// console.log(player2.rollValue[0]);

// if(player1["rollValue"][0] > player2["rollvalue"][0]){
//     console.log(`${player1.name} is win`);
// }else if(player1["rollvalue"][0] < player2["rollvalue"][0]){
//     console.log(`${player2.name} is win`);
// }else{
//     console.log("You Draw!");
// }

// console.log(player1.rollValue[0]);
// console.log(player1.rollValue[1]);
// console.log(player1.rollValue[2]);
