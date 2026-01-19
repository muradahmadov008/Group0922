// BANK ACCOUNT PERSONAL


const BankAccount ={
    name:null,
    surname:null,
    balance:0,
    history:[],
    card_number:null,

    constructor: function(name , surname, balance ){

    this.name = name;
    this.surname = surname;
    this.balance = balance;
    this.card_number = Math.round(Math.random() * 10000000000000000)

    const newAccount = {...this}

    return newAccount;

},

addBalance:function(amount){
    this.balance += amount
    this.history = [`+${amount}`, ...this.history]
},

withdrawBalance:function(amount){

    if(this.balance > amount){
        this.balance = this.balance -amount
        this.history = [`-${amount}`, ...this.history]
    }else{
        console.log("Insufficient funds");
    }   
},

showBalance:function(){

    console.log("==============");
    console.log("Full Name: ", this.name + " " +this.surname);
    console.log("Balance: ", this.balance);
    console.log("==============");

}

}

const MuradAccount = BankAccount.constructor("Murad", "Akmedov", 5000);
MuradAccount.addBalance(1000)
MuradAccount.addBalance(1000)
MuradAccount.addBalance(1000)
MuradAccount.addBalance(1000)
MuradAccount.addBalance(1000)

// MuradAccount.showBalance.call(MuradAccount)

MuradAccount.withdrawBalance(5000)
MuradAccount.showBalance.call(MuradAccount)
MuradAccount.withdrawBalance(4000)
MuradAccount.showBalance.call(MuradAccount)


console.log(MuradAccount);