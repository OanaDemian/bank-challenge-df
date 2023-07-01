class PrintStatement { 
  static #headerRow = "date       || credit  || debit  || balance";

  static printHeader() {
    return this.#headerRow;
  }

  static createTransactionsRowsArray(transactionsArray) {
    const outputArray = [];
    outputArray.push(PrintStatement.#headerRow);
    for (let i = 0; i < transactionsArray.length; i++) {
      outputArray.push(PrintStatement.statementRow(transactionsArray[i].transaction).concat(PrintStatement.formatAmount(transactionsArray[i].balance)));
    }
    return outputArray;
  }

  static statementRow(transaction) {
    const date = PrintStatement.formatDateColumn(transaction);
    const credit = PrintStatement.formatCreditColumn(transaction);
    const debit = PrintStatement.formatDebitColumn(transaction);
    const transactionRow = date + credit + debit;
    return transactionRow; 
  }

  static formatCreditColumn(transaction) {
    if (transaction.getType() === 'credit') {
      return PrintStatement.formatTransactionAmount(transaction) + ' || ';
    }
    return '        || ';
  }

  static formatDebitColumn(transaction) {
    if (transaction.getType() === 'debit') {
      return PrintStatement.formatTransactionAmount(transaction) + ' || ';
    }
    return '       || ';
  } 

  static formatTransactionAmount(transaction) {
    return PrintStatement.formatAmount(transaction.getAmount());
  }

  static formatAmount(amount) {
    let formattedAmount = '';
    if (amount.toString().includes('.')) {
      formattedAmount = amount.toString().slice(0, [amount.toString().indexOf('.') + 3]);
      return formattedAmount;
    }
    return amount.toString() + '.00';
  }
  
  static formatDateColumn(transaction) {
    return (PrintStatement.formatDate(transaction) + " || ");
  }

  static formatDate(transaction) {
    return transaction.getDate().toLocaleDateString("en-GB");
  }
}

export default PrintStatement;

