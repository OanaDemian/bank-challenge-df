import Account from '../src/Account.js';


describe('Account Tests', () => {

  class MockTransaction {
    getAmount = () => 1000;
    getType = () => 'credit';
  };
  
  let testAccount, mockTransaction, expected;

  beforeEach(() => {
    mockTransaction = new MockTransaction();
    testAccount = new Account();
  });

  afterEach(() => {
    testAccount = undefined;
    mockTransaction = undefined;
  });

  it('should call getType on the transaction object twice when newTransaction is called on the account', () => {
      // Arrange
      const transactionSpy = spyOn(mockTransaction, `getType`)
      // Act
      testAccount.newTransaction(mockTransaction);  
      // Assert
      expect(transactionSpy).toHaveBeenCalledTimes(2);
  });

  
  describe('Get Transactions tests', () => {   
    it('should return an empty array of transactions when first instantiated', () => {
        // Arrange
        // Act
      expected = 0;
        // Assert
        expect(testAccount.getTransactions().length).toBe(expected);
    });
  });

  describe('New Transaction tests', () => {
    let expected;
         
    it('should add 1 transaction to the transactions when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(mockTransaction);
      expected = 1;
      // Assert
      expect(testAccount.getTransactions().length).toBe(expected);
    });

    it('should add 1 transaction of type `credit` when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(mockTransaction);
      expected = 'credit'
      const transactionType = testAccount.getTransactions()[0].transaction.getType();
      // Assert
      expect(transactionType).toBe(expected);
    });

    it('should add 1 transaction of type `debit` when called with newTransaction', () => {
      // Arrange
      const debitTransaction =  {
        getAmount: () => 500,
        getType: () => 'debit'
      };
        expected = 'debit';
      // Act
      testAccount.newTransaction(debitTransaction);
      const transactionType = testAccount.getTransactions()[0].transaction.getType();
      // Assert
      expect(transactionType).toBe(expected);
    });

    
  });

  describe('Get Balance Tests', () => {

    it('should return 1000 after a transaction of type credit and amount 1000 is added to the account', () => {
        // Arrange
      expected = 1000;
        // Act
      testAccount.newTransaction(mockTransaction);
      const newBalance = testAccount.getBalance();
      // Assert
      expect(newBalance).toBe(expected);
    });

    it('should return 3000 after adding two transactions of type `credit` and amounts 1000, respectively 2000', () => {
      // Arrange
      const transaction2 =  {
        getAmount: () => 2000,
        getType: () => 'credit'
      };
        expected = 3000;
      // Act
      testAccount.newTransaction(mockTransaction);
      testAccount.newTransaction(transaction2);
      const newBalance = testAccount.getBalance();
      // Assert
      expect(newBalance).toBe(expected);
    });

    it('should return 2500 after adding three transactions of type `credit, credit and debit` and amounts 1000, 2000 and 500', () => {
      // Arrange
      const transaction2 =  {
        getAmount: () => 2000,
        getType: () => 'credit'
      };
      const transaction3 =  {
        getAmount: () => 500,
        getType: () => 'debit'
      };
        expected = 2500;
      // Act
      testAccount.newTransaction(mockTransaction);
      testAccount.newTransaction(transaction2);
      testAccount.newTransaction(transaction3);
      const newBalance = testAccount.getBalance();
      // Assert
      expect(newBalance).toBe(expected);
    });
  });
});