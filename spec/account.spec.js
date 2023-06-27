import Account from '../src/Account.js';


describe('Account Tests', () => {
  class MockTransaction {
    getAmount = () => 1000;
    getType = () => 'credit';
    getBalance = () => 0;
  };
  
  let testAccount, mockTransaction;

  beforeEach(() => {
    mockTransaction = new MockTransaction();
    testAccount = new Account(mockTransaction);
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
    
    const amount = 1000;
    const type = 'credit';
         
    it('should add 1 transaction to the transactions when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(type, amount);
      // Assert
      expect(testAccount.getTransactions().length).toBe(1);
    });

    it('should add 1 transaction of type `credit` when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(type, amount);
      // Assert
      expect(testAccount.getTransactions()[0].getType()).toBe('credit');
    });
  });

  describe('Get Balance Tests', () => {

    let type, amount, expected;

    it('makes a deposit of 1000 on the account when makeTransaction is called', () => {
        // Arrange
      type = 'credit';
      amount = 1000;
      expected = 1000;
        // Act
      testAccount.newTransaction(type, amount);
      const newBalance = testAccount.getBalance();
      // Assert
      expect(newBalance).toBe(expected);
    });
  });


});