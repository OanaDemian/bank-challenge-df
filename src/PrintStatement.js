class PrintStatement { 
  static #headerRow = "date       || credit  || debit  || balance";

  static printHeader() {
    return this.#headerRow;
  }
  static formatDateColumn(transaction) {
    return (PrintStatement.formatDate(transaction) + " || ");
  }
  static formatDate(transaction) {
    return transaction.getDate().toLocaleDateString("en-GB");
  }
}

export default PrintStatement;

