import Transaction from '../src/Transaction.js';

describe('Transaction Tests', () => {
  it('should get the balance', () => {
    //Arrange
    let initialBalance = 100;
    let amount = 200;
    let date = '10-01-2012';
    let type = 'credit';
    let expected = 100;
    let transaction = new Transaction(initialBalance, date, type, amount)
    //Act
    const balanceToGet = transaction.getBalance();
    //Assert
    expect(balanceToGet).toBe(expected);
  })

  it('should get the amount', () => {
    //Arrange
    let initialBalance = 100;
    let amount = 200;
    let date = '10-01-2012';
    let type = 'credit';
    let expected = 200;
    let transaction = new Transaction(initialBalance, date, type, amount)
    //Act
    const amountToGet = transaction.getAmount();
    //Assert
    expect(amountToGet).toBe(expected);
  })

  it('should format transaction date to dd/mm/yyyy', () => {
    //Arrange
    let initialDate = '10-01-2012';
    let expected = '10/01/2012';
    let transaction = new Transaction();
    //Act
    transaction.formatDate(initialDate);
    //Assert
    expect(transaction.getDate()).toBe(expected);
  })

  it('should get the transaction type', () => {
    //Arrange
    let initialBalance = 100;
    let amount = 200;
    let date = '10-01-2012';
    let type = 'credit';
    let expected = 'credit';
    let transaction = new Transaction(initialBalance, date, type, amount)
    //Act
    const typeToGet = transaction.getType();
    //Assert
    expect(typeToGet).toBe(expected);
  })
})