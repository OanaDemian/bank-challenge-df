import Transaction from '../src/Transaction.js';

describe('Transaction Tests', () => {
  it('should add 1000 to the balance when a deposit transaction is made', () => {
    //Arrange
    let initialBalance = 0;
    let expected = 1000.00;
    let transaction = new Transaction(initialBalance);
    //Act
    transaction.depositSum(1000);
    //Assert
    expect(transaction.getBalance()).toBe(1000.00);
  })

    it('should add another 2000 to the balance when a deposit transaction is made', () => {
    //Arrange
    let initialBalance = 0;
    let expected = 3000.00;
    let transaction = new Transaction(initialBalance);
    //Act
      transaction.depositSum(1000);
      transaction.depositSum(2000);
    //Assert
    expect(transaction.getBalance()).toBe(3000.00);
  })
})