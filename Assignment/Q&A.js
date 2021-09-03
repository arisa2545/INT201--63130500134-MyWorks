class Player {
    name;
    AllQuestion = []
    AllChoose = [] 
    score = 0

    constructor(name){
        this.name = name;
    }

    play(question, answer) {
        this.AllQuestion.push(question);
        this.AllChoose.push(answer);
        if(question.correctChoice == answer){
            score++;
            console.log('Your answer are correct!')
        }else {
            console.log('Your answer are not correct!')
        }
    }

    getName(){
        return this.name;
    }

    getAllQuestion() {
        return this.AllQuestion;
    }

    getAllChoose() {
        return this.AllChoose;
    }

    getScore() {
        return this.score;
    }

}

// let pp = new Player('Arisa');
// pp.play(question1, 2);
let question1 = {question: '1+1=?', choice: [1, 2, 3], correctChoice: 2}
let question2 = {question: '2+2=?', choice: [9, 4, 3], correctChoice: 4}
let question3 = {question: 'game narak?', choice: ['yes', 'no'], correctChoice: 'yes'}
let question4 = {question: 'ice narak?', choice: ['yes', 'no'], correctChoice: 'yes'}
let question5 = {question: 'ice narak > game narak?', choice: ['yes', 'no'], correctChoice: 'No'}

let player1 = {name: 'Arisa', AllQuestion: [], AllChoose: [], result: 0}


function play(question, player, answer){
    player.AllQuestion.push(question.question);
    player.AllChoose.push(answer);
        if(question.correctChoice == answer){
            player.score++;
            console.log('Your answer are correct!')
        }else {
            console.log('Your answer are not correct!')
        }
}

play(question1, player1, 2);
play(question2, player1, 2);
play(question3, player1, 'yes');
console.log(player1)




// let xx = new question(x = 'Arisa', y = 10);
// console.log(xx)