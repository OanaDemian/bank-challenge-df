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

    it('should call getType on the transaction object when newTransaction is called on the account', () => {
      // Arrange
      const transactionSpy = spyOn(mockTransaction, `getType`)
      // Act
      try {
      testAccount.newTransaction(mockTransaction);
      } catch(error){};  
      // Assert
      expect(transactionSpy).toHaveBeenCalled();
    });

    it('should call getAmount on the transaction object when newTransaction is called on the account', () => {
      // Arrange
      const transactionSpy = spyOn(mockTransaction, `getAmount`);
      // Act
      try {
        testAccount.newTransaction(mockTransaction);
      } catch (error) { };
      // Assert
      expect(transactionSpy).toHaveBeenCalled();
    });

  describe('Account Error Checks tests', () => {
    let expected, debitTransaction;
    afterEach(() => {
      testAccount = undefined;
      debitTransaction = undefined;
      expected = undefined;
    });
      
    it('should throw an error if the transaction amount is less than 0', () => {
      // Arrange
        const expected = 'Error: Transaction amount must be greater than 0.';
        debitTransaction =  {
          getAmount: () => - 500,
          getType: () => 'debit'
        };
      // Act
      // Assert
        expect(() => { testAccount.newTransaction(debitTransaction) }).toThrowError(expected); 
    });

    it('should throw an error if the transaction amount not a number', () => {
      // Arrange
        const expected = 'Error: Transaction amount must be a number.';
        debitTransaction =  {
          getAmount: () => '- 500',
          getType: () => 'debit'
        };
      // Act
      // Assert
        expect(() => { testAccount.newTransaction(debitTransaction) }).toThrowError(expected); 
    });

      it('should throw an error if the transaction type not a string', () => {
      // Arrange
        const expected = 'Error: Transaction type must be a string.';
        debitTransaction =  {
          getAmount: () => 500,
          getType: () => false
        };
      // Act
      // Assert
        expect(() => { testAccount.newTransaction(debitTransaction) }).toThrowError(expected); 
    });

  });

  describe('Account Update tests', () => {   
    it('should return an empty accountUpdate array when first instantiated', () => {
        // Arrange
        // Act
      expected = 0;
        // Assert
        expect(testAccount.getAccountUpdate().length).toBe(expected);
    });
  });

  describe('New Transaction tests', () => {
    let expected;
         
    it('should add 1 transaction to the accountUpdate array when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(mockTransaction);
      expected = 1;
      // Assert
      expect(testAccount.getAccountUpdate().length).toBe(expected);
    });

    it('should add 1 transaction of type `credit` when called with newTransaction', () => {
      // Arrange
      // Act
      testAccount.newTransaction(mockTransaction);
      expected = 'credit'
      const transactionType = testAccount.getAccountUpdate()[0].transaction.getType();
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
      const transactionType = testAccount.getAccountUpdate()[0].transaction.getType();
      // Assert
      expect(transactionType).toBe(expected);
    });

    it('should add the newest transaction at the start of the accountUpdate array', () => {
      // Arrange
      const transaction2 =  {
        getAmount: () => 2000,
        getType: () => 'credit'
      };
      const transaction3 =  {
        getAmount: () => 500,
        getType: () => 'debit'
      };
      expected = transaction3;
      // Act
      testAccount.newTransaction(transaction2);
      testAccount.newTransaction(transaction3);
      const transactionType = testAccount.getAccountUpdate()[0].transaction;
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