class Dice {
    constructor(gameTitle) { 
        console.log('constructor is working');

        if(gameTitle == undefined){  
            this._diceName = 'unknow';
        }else {
            this._diceName = gameTitle;
        }

        this._faceValue = 0;  
    }
  
    roll() { 
        this._faceValue = Math.floor(Math.random() * 6) + 1;
        return this._faceValue;  
    }

    get faceValue() {
        console.log('getter is working')
        return this._faceValue;
    }

    set faceValue(faceValue) {
        console.log('setter is working')
        this._faceValue = faceValue
    }

    // toString() {
    //     console.log('toString is working');
    //     return `Game = ${this._game}, Face_value = ${this._faceValue}`;
    // }
  
  }
  
  //#1
  
  let dice1 = new Dice();  
  console.log(dice1); 
  console.log(dice1.roll());
  console.log(dice1.faceValue);
//   console.log(dice1["faceValue"]); //เรียก getter เหมือนกัน

  dice1["faceValue"] = 6 //เรียก setter
  console.log(dice1);
  console.log(dice1.toString());
  
//   let dice2 = new Dice('');
//   console.log(dice2);
//   console.log(dice2.roll());


Dice.prototype.toString = function(){
    console.log('toString is working');
    return `Game = ${this._game}, Face_value = ${this._faceValue}`;
}

console.log(dice1.toString());