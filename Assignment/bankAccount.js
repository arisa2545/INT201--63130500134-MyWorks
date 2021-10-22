
let countacid = 1001;

class bankAccount {
    constructor(customer, balance) {

        this._accountId =countacid;
        countacid += 1;
        this._customer = customer;

        if(balance < 0 || balance == undefined) {
            this._balance = 0;
        }else {
            this._balance = balance;
        }    
    }

    desposit(money) {
        if(money == undefined || money <= 0) {
            return 'your money is not correct'
        }else {
            this._balance += money;
            return 'complete';
        }
    }

    withdraw(money) {
        if(money == undefined || money <= 0) {
            return 'your money is not correct'
        }else {
            if(money > this._balance){
                return 'your balance not enough';
            }else {
                this._balance -= money;
                return 'complete';
            }
            
        }
    }

    get balance() {
        return this._balance;
    }

    get customer() {
        return this._customer;
    }

    get accountId() {
        return this._accountId;
    }

}

let customer1 = {firstName : 'Arisa',
                 lastName : 'Audom'};

let customer2 = {firstName : 'Pichaya',
                 lastName : 'Pairin'};

let account1 = new bankAccount(customer1, 0);
let account2 = new bankAccount(customer2, 200);

console.log(account1);
console.log(account2)

// console.log(account1.desposit(2000));
// console.log(account1.withdraw(1000));
// console.log(account1.balance);

// console.log(account1.desposit(-1));
// console.log(account1.withdraw(0));

