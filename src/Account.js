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

  #privateBankAccountChecks(transaction) {
    this.#privateAmountChecks(transaction);
    // this.#privateTypeChecks(transaction);
    this.#privateAmountPositiveChecks(transaction);
  }

  #privateAmountPositiveChecks(transaction) {
    if (transaction.getAmount() < 0) {
      throw new Error("Error: Transaction amount must be greater than 0.");
    }
  }

  #privateAmountChecks(transaction) {
    if (typeof (transaction.getAmount()) != "number") {
      throw new Error("Error: Transaction amount must be a number.");
    }
  }

  // #privateTypeChecks(transaction) {
  //   if (typeof (transaction.getType()) != "string") {
  //     throw new Error("Error: Transaction type must be a string.");
  //   }
  // }

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
    this.#privateBankAccountChecks(transaction);
    if (this.#transaction.getType() === "credit") this.#privateDeposit();
    if (this.#transaction.getType() === "debit")  this.#privateWithdrawal();
  }
}

export default Account;