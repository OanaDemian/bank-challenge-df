import Transaction from '../src/Transaction.js';

describe('Transaction Tests', () => {
  it('should get the current balance', () => {
    //Arrange
    let initialBalance = 100;
    let amount = 200;
    let date = new Date(2012,1,10);
    let type = 'credit';
    let expected = 100;
    let transaction = new Transaction(initialBalance, date, type, amount)
    //Act
    const balanceToGet = transaction.getBalance();
    //Assert
    expect(balanceToGet).toBe(expected);
  })

  it('should get the transaction amount', () => {
    //Arrange
    let initialBalance = 100;
    let amount = 200;
    let date = new Date(2012,1,10);
    let type = 'credit';
    let expected = 200;
    let transaction = new Transaction(initialBalance, date, type, amount);
    //Act
    const amountToGet = transaction.getAmount();
    //Assert
    expect(amountToGet).toBe(expected);
  })

  it('should format transaction date to dd/mm/yyyy', () => {
    //Arrange
    let initialBalance = 100;
    let amount = 200;
    let date = new Date(2012,1,10);
    let type = 'credit';
    let expected = '10/02/2012';
    let transaction = new Transaction(initialBalance, date, type, amount);
    //Act
    const formattedDate = transaction.getFormattedDate();
    //Assert
    expect(formattedDate).toBe(expected);
  })

  it('should get the transaction type: credit or debit', () => {
    //Arrange
    let initialBalance = 100;
    let amount = 200;
    let date = new Date(2012,1,10);
    let type = 'credit';
    let expected = 'credit';
    let transaction = new Transaction(initialBalance, date, type, amount);
    //Act
    const typeToGet = transaction.getType();
    //Assert
    expect(typeToGet).toBe(expected);
  })
})