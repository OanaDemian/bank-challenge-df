class PrintStatement { 
  static #header = "date       || credit  || debit  || balance";
  static printHeader() {
    return this.#header;
  }
}
export default PrintStatement;

// Create strings to populate an array and use a function to loop through the array and log it would be my advice…static print function…