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
});