class PrintStatement { 
  static #headerRow = "date       || credit  || debit  || balance";

  static printHeader() {
    return this.#headerRow;
  }

  static formatDate(transaction) {
    return transaction.getDate().toLocaleDateString("en-GB");

  }
}

export default PrintStatement;

