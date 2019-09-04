//book practice 
const taxRate = 0.08;
const mentalThresh = 240;
const phoneAcc = 10;
const phonePrice = 50;

var bankAccount = 240;
var amount = 0;
var phonesBought = 0;
var accBought = 0;

function calculateTax (amount){
    return amount * taxRate;
}

function formatAmount(amount){
    return "$" + amount.toFixed(2);
}

while (amount <= bankAccount){
    //keep buying phones
    amount = amount + phonePrice;
    phonesBought++;
    //keep buy acc
    if (amount <= mentalThresh){
        amount = amount + phoneAcc;
        accBought++;
    }
}

//final purchases
amount = amount + calculateTax(amount);
//a tally of everything
console.log("your purchases " + formatAmount(amount));
console.log("You bought this many phones:" + phonesBought);
console.log("and this many acc: " + accBought);

//can you afford it?
if (amount <= bankAccount){
    console.log("you can afford this purchase");
}
    else {console.log ("you cant buy this");
}
