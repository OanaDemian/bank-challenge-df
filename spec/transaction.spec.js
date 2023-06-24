import Transaction from '../src/Transaction.js';

describe('Transaction Tests', () => {
  it('should add 1000 to the balance when a deposit transaction is made', () => {
    //Arrange
    let initialBalance = 0;
    let expected = 1000.00;
    let transaction = new Transaction(initialBalance);
    //Act
    transaction.depositSum(1000.00);
    //Assert
    expect(transaction.getBalance()).toBe(1000.00);
  })

  it('should add another 2000 to the balance when a deposit transaction is made', () => {
    //Arrange
    let initialBalance = 0;
    let expected = 3000.00;
    let transaction = new Transaction(initialBalance);
    //Act
      transaction.depositSum(1000.00);
      transaction.depositSum(2000.00);
    //Assert
    expect(transaction.getBalance()).toBe(3000.00);
  })

  it('should format transaction date to dd/mm/yyyy', () => {
    //Arrange
    let initialDate = '10-01-2012';
    let expected = '10/01/2012';
    let transaction = new Transaction();
    //Act
    transaction.formatTransactionDate(initialDate);
    //Assert
    expect(transaction.getDate()).toBe(expected);
  })

  it('should subtract 500 from the balance when a withdrawal transaction is made', () => {
    //Arrange
    let initialBalance = 0;
    let expected = 2500.00;
    let transaction = new Transaction(initialBalance);
    //Act
    transaction.depositSum(1000.00);
    transaction.depositSum(2000.00);
    transaction.withdrawSum(500.00);

    //Assert
    expect(transaction.getBalance()).toBe(2500.00);
  })
})