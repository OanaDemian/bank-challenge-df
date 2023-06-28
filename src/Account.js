class Account {
  #transaction;
  #newBalance = 0.0;
  #transactions = [];

  constructor() {
    this.#transaction = {};
    this.#transactions;
    this.#newBalance;
  }

  getTransactions() {
    return this.#transactions;
  }

  getBalance() {
    return this.#newBalance;
  }

  #privateDeposit() {
    this.#newBalance = this.#newBalance + this.#transaction.getAmount();
    this.#transactions = [...this.#transactions, { transaction: this.#transaction, newBalance: this.#newBalance}];  
  }

  #privateWithdrawal() {
    this.#newBalance = this.#newBalance - this.#transaction.getAmount();
    this.#transactions = [...this.#transactions, { transaction: this.#transaction, newBalance: this.#newBalance}];  
  }

  newTransaction(transaction) {
    this.#transaction = transaction;
    if (this.#transaction.getType() === 'credit') this.#privateDeposit();
    if (this.#transaction.getType() === 'debit')  this.#privateWithdrawal();
  }
}

export default Account;