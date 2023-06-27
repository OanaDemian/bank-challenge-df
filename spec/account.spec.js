import Account from '../src/Account.js';


describe('Account Tests', () => {

  const mockTransaction  = {
    getBalance() { },
    getType() { },
    getAmount() { }
  }
  
  let testAccount;

  beforeEach(() => {
    testAccount = new Account(mockTransaction);
  });

  afterEach(() => {
    testAccount = undefined;
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
    const testTransaction = {
      amount: 1000,
      type: 'credit',
      balance: 0
    };
         
    it('should add 1 transaction to the transactions when called with newTransaction', () => {
        // Arrange
        // Act
        testAccount.newTransaction(testTransaction);
        // Assert
        expect(testAccount.getTransactions().length).toBe(1);
    });
  });
});