function payment(price, money){
    if(money >= price){
        change = money - price;
        console.log('Payment Info -------------------------------');
        console.log(`total price : ${price}`);
        console.log(`received amount : ${money}`);
        console.log(`change : ${change}`);
        console.log('details of change');
        calculate(change);
        console.log('---------------------------------------------')
    }else {
        console.log('Your money is not enough to pay')
    }
    
}

function calculate(change) {
    let bank = [500, 100, 50, 20, 10, 2, 1]
    let detailOfChange = [];
    let count = 0;
    for(i = 0; i < bank.length; i++){
        if(change >= bank[i]){
            count = Math.floor(change/bank[i]);
            detailOfChange.push({valueOfbank: bank[i], numOfBank: count})
            change -= bank[i]*count;
        }
    }

    for(i = 0; i < detailOfChange.length; i++){
        console.log(detailOfChange[i])
        // console.log(`${detailOfChange[i].valueOfbank} baht (${detailOfChange[i].numOfBank})`);
    }
    return detailOfChange;
}

// payment(1000, 1523);
// calculate(523);
let arr = [{x: 100, y: 3}, {x: 100, y: 3}, {x: 100, y: 3}, {x: 100, y: 3}]
console.table(arr);




