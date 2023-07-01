class Transaction {
  #date;
  #type;
  #amount;
  #formattedDate;
  
  constructor(date = new Date(), type, amount = 0) {
    this.#date = date;
    this.#formattedDate = this.#formatDate(date);
    this.#type = type;
    this.#amount = amount;
  }

  getType() {
    return this.#type.type;
  }

  getAmount() {
    return this.#amount;
  }

  getFormattedDate() {
    return this.#formattedDate;
  }
  
  getDate() {
    return this.#date;
  }
  
  #formatDate(date) {
    const formattedDate = date.toLocaleDateString("en-GB");
    return formattedDate;
  }
}
export default Transaction;