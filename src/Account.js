class Account {
  #transaction;
  #balance = 0.0;
  #balanceUpdate = [];

  constructor() {
    this.#transaction = {};
    this.#balanceUpdate;
    this.#balance;
  }

  getBalanceUpdate() {
    return this.#balanceUpdate;
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
    this.#balanceUpdate = [{ transaction: this.#transaction, balance: this.#balance}, ...this.#balanceUpdate];  
  }

  #privateWithdrawal() {
    this.#balance = this.#balance - this.#transaction.getAmount();
    this.#balanceUpdate = [{ transaction: this.#transaction, balance: this.#balance}, ...this.#balanceUpdate];  
  }

  newTransaction(transaction) {
    this.#transaction = transaction;
    this.#privateBankAccountChecks(transaction);
    if (this.#transaction.getType() === "credit") this.#privateDeposit();
    if (this.#transaction.getType() === "debit")  this.#privateWithdrawal();
  }
}

export default Account;