import Account from "./Account.js";
import Transaction from "./Transaction.js";
import TxnType from "./TxnType.js";
import PrintStatement from "./PrintStatement.js";

const transaction1 = new Transaction(new Date(2012, 0, 10), TxnType.credit, 1000);
const transaction2 = new Transaction(new Date(2012, 0, 13), TxnType.credit, 2000);
const transaction3 = new Transaction(new Date(2012, 0, 14), TxnType.debit, 500);
const account = new Account();
account.newTransaction(transaction1);
account.newTransaction(transaction2);
account.newTransaction(transaction3);
console.log(PrintStatement.printTransactionsRows(account.getAccountUpdate()));
