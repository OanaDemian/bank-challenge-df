import Account from "./Account.js";
import Transaction from "./Transaction.js";

const transaction1 = new Transaction(new Date(2012, 1, 10), "credit", 1000);
const transaction2 = new Transaction(new Date(2012, 1, 13), "credit", 2000);
const transaction3 = new Transaction(new Date(2012, 1, 14), "debit", 500);
const account = new Account();
account.newTransaction(transaction1);
account.newTransaction(transaction2);
account.newTransaction(transaction3);
console.log(account.getBalance()); 
console.log(transaction1.getFormattedDate());



