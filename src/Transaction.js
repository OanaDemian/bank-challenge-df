class Transaction {
  #date;
  #type;
  #amount;
  
  constructor(date = new Date(), transactionType, amount = 0) {
    this.#date = date;
    this.#type = transactionType;
    this.#amount = amount;
  }

  getType() {
    return this.#type.type;
  }

  getAmount() {
    return this.#amount;
  }

  getDate() {
    return this.#date;
  }

}
export default Transaction;