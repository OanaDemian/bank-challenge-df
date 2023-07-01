class Transaction {
  #date;
  #type;
  #amount;
  
  constructor(date = new Date(), type, amount = 0) {
    this.#date = date;
    this.#type = type;
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