import Account from '../src/Account.js';


describe('Account Tests', () => {
  class MockTransaction {
    getAmount = () => 1000;
    getType = () => 'credit';
  };
  
  let testAccount, mockTransaction;

  beforeEach(() => {
    mockTransaction = new MockTransaction();
    testAccount = new Account();
  });

  afterEach(() => {
    testAccount = undefined;
    mockTransaction = undefined;
  });

  describe('Get Transactions tests', () => {   
    it('should return an empty array of transactions when first instantiated', () => {
        // Arrange
        // Act
        // Assert
        expect(testAccount.getTransactions().length).toBe(0);
    });
  });

  describe('New Transaction tests', () => {
    let expected;
         
    it('should add 1 transaction to the transactions when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(mockTransaction);
      // Assert
      expect(testAccount.getTransactions().length).toBe(1);
    });

    it('should add 1 transaction of type `credit` when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(mockTransaction);
      const transactionType = testAccount.getTransactions()[0].transaction.getType();
      // Assert
      expect(transactionType).toBe('credit');
    });

    it('should add another transaction of type `credit` when called with newTransaction', () => {
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

    it('should add another transaction of type `debit` when called with newTransaction', () => {
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

  describe('Get Balance Tests', () => {

    let expected;

    it('makes a deposit of 1000 on the account when makeTransaction is called', () => {
        // Arrange
      expected = 1000;
        // Act
      testAccount.newTransaction(mockTransaction);
      const newBalance = testAccount.getBalance();
      // Assert
      expect(newBalance).toBe(expected);
    });
  });
});