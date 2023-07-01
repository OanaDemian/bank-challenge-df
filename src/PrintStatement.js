class PrintStatement { 
  static #headerRow = "date       || credit  || debit  || balance";
  static formattedTransaction = '';

  static printHeader() {
    return this.#headerRow;
  }
}

export default PrintStatement;

