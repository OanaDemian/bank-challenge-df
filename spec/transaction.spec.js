import Transaction from '../src/Transaction.js';

describe('Transaction Tests', () => {
  let amount, mockTxnType, transaction, date;
  beforeEach(() => {
    amount = 200;
    mockTxnType = {
      type: "credit"
    };
    date = new Date(2012,1,10);
    transaction = new Transaction(date, mockTxnType, amount);
  });

  afterEach(() => {
    amount = undefined;
    date = undefined;
    mockTxnType = undefined;
    transaction = undefined;
  });

  it('should get the transaction amount', () => {
    //Arrange
    let expected = 200;
    //Act
    const amountToGet = transaction.getAmount();
    //Assert
    expect(amountToGet).toBe(expected);
  })

    it('should get the transaction date object', () => {
    //Arrange
    let expected = new Date(2012, 1, 10);
    //Act
    const getTDate = transaction.getDate();
    //Assert
    expect(getTDate).toEqual(expected);
  })

  it('should get the transaction type: credit', () => {
    //Arrange
    let expected = 'credit';
    //Act
    const typeToGet = transaction.getType();
    //Assert
    expect(typeToGet).toBe(expected);
  })

  describe('Transaction Type Debit Tests', () => {
    let amount, mockTxnType, transaction, date;
    beforeEach(() => {
      mockTxnType = {
        type: 'debit'
      };
      transaction = new Transaction(date, mockTxnType, amount);
    });

    afterEach(() => {
      mockTxnType = undefined;
    });

    it('should get the transaction type: debit', () => {
    //Arrange
    let expected = 'debit';
    //Act
    const typeToGet = transaction.getType();
    //Assert
    expect(typeToGet).toBe(expected);
  })
  
  });

})