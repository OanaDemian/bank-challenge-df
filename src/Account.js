class Account {
  #transaction;
  #balance = 0.0;
  #accountUpdate = [];

  constructor() {
    this.#transaction = {};
    this.#accountUpdate;
    this.#balance;
  }

  getAccountUpdate() {
    return this.#accountUpdate;
  }

  getBalance() {
    return this.#balance;
  }

  #privateBankAccountChecks(transaction) {
    this.#privateAmountChecks(transaction);
    this.#privateTypeChecks(transaction);
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

  #privateTypeChecks(transaction) {
    if (typeof (transaction.getType()) != "string") {
      throw new Error("Error: Transaction type must be a string.");
    }
  }

  #privateDeposit() {
    this.#balance = this.#balance + this.#transaction.getAmount();
    this.#accountUpdate = [{ transaction: this.#transaction, balance: this.#balance}, ...this.#accountUpdate];  
  }

  #privateWithdrawal() {
    this.#balance = this.#balance - this.#transaction.getAmount();
    this.#accountUpdate = [{ transaction: this.#transaction, balance: this.#balance}, ...this.#accountUpdate];  
  }

  newTransaction(transaction) {
    this.#transaction = transaction;
    this.#privateBankAccountChecks(transaction);
    if (this.#transaction.getType() === "credit") this.#privateDeposit();
    if (this.#transaction.getType() === "debit")  this.#privateWithdrawal();
  }
}

export default Account;