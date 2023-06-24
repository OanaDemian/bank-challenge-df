import Transaction from '../src/Transaction.js';

describe('Transaction Tests', () => {
  let initialBalance, amount, type, transaction, date;
  beforeEach(() => {
    initialBalance = 100;
    amount = 200;
    date = new Date(2012,1,10);
    type = 'credit';
    transaction = new Transaction(initialBalance, date, type, amount);
  });

  afterEach(() => {
    initialBalance = undefined;
    amount = undefined;
    date = undefined;
    type = undefined;
    transaction = undefined;
  });

  it('should get the current balance', () => {
    //Arrange
    let expected = 100;
    //Act
    const balanceToGet = transaction.getBalance();
    //Assert
    expect(balanceToGet).toBe(expected);
  })

  it('should get the transaction amount', () => {
    //Arrange
    let expected = 200;
    //Act
    const amountToGet = transaction.getAmount();
    //Assert
    expect(amountToGet).toBe(expected);
  })

  it('should format transaction date to dd/mm/yyyy', () => {
    //Arrange
    let expected = '10/02/2012';
    //Act
    const formattedDate = transaction.getFormattedDate();
    //Assert
    expect(formattedDate).toBe(expected);
  })

  it('should get the transaction type: credit or debit', () => {
    //Arrange
    let expected = 'credit';
    //Act
    const typeToGet = transaction.getType();
    //Assert
    expect(typeToGet).toBe(expected);
  })
})