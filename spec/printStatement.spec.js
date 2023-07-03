import PrintStatement from '../src/PrintStatement.js';
describe('PrintStatement Tests', () => {

  describe('formatting bank statement columns tests', () => {
    
    it('should format transaction date to dd/mm/yyyy', () => {
      //Arrange
      class MockTransaction {
        getDate = () => new Date(2012, 0, 10)
      }
      const mockTransaction = new MockTransaction();
      let expected = '10/01/2012';
      //Act
      const formattedDate = PrintStatement.formatDate(mockTransaction);
      //Assert
      expect(formattedDate).toBe(expected);
    })

    it('should format transaction date column to `dd/mm/yyyy || `', () => {
      //Arrange
      class MockTransaction {
        getDate = () => new Date(2012, 0, 10)
      }
      const mockTransaction = new MockTransaction();
      let expected = '10/01/2012 || ';
      //Act
      const formatDateColumn = PrintStatement.formatDateColumn(mockTransaction);
      //Assert
      expect(formatDateColumn).toBe(expected);
    })

    it('should format transaction credit column ', () => {
      //Arrange
      class MockTransaction {
        getType = () => 'credit';
        getAmount = () => 1000.45678
      }
      const mockTransaction = new MockTransaction();
      let expected = '1000.45 || ';
      //Act
      const formatCreditColumn = PrintStatement.formatCreditColumn(mockTransaction);
      //Assert
      expect(formatCreditColumn).toBe(expected);
    })

    it('should format transaction debit column ', () => {
      //Arrange
      class MockTransaction {
        getType = () => 'debit';
        getAmount = () => 500.45678
      }
      const mockTransaction = new MockTransaction();
      let expected = '500.45 || ';
      //Act
      const formatDebitColumn = PrintStatement.formatDebitColumn(mockTransaction);
      //Assert
      expect(formatDebitColumn).toBe(expected);
    })

    it('should format transaction amount ', () => {
      //Arrange
      class MockTransaction {
        getType = () => 'debit';
        getAmount = () => 500.45678
      }
      const mockTransaction = new MockTransaction();
      let expected = '500.45';
      //Act
      const formatDebitColumn = PrintStatement.formatAmount(mockTransaction.getAmount());
      //Assert
      expect(formatDebitColumn).toBe(expected);
    })
  })

  describe('formatting bank statement rows tests', () => {
    it('should print a row with a date, credit and debit formatted values ', () => {
    //Arrange
      class MockTransaction {
        getType = () => 'credit';
        getAmount = () => 1500.55555;
        getDate = () => new Date(2012, 0, 13);
      }
      const mockTransaction = new MockTransaction();
      const date = PrintStatement.formatDateColumn(mockTransaction);
      const credit = PrintStatement.formatCreditColumn(mockTransaction);
      const debit = PrintStatement.formatDebitColumn(mockTransaction);
      let expected = date + credit + debit;
      //Act
      const formattedBankStatementRow = PrintStatement.statementRowString(mockTransaction);
      //Assert
      expect(formattedBankStatementRow).toBe(expected);
    })

    it('should create an array with a header and a transaction row with a date, credit, debit AND balance formatted values ', () => {
    //Arrange
      class MockTransaction {
        getType = () => 'credit';
        getAmount = () => 1500.55555;
        getDate = () => new Date(2012, 0, 13);
      }
      class MockAccount {
        getAccountUpdate = () => [{transaction: mockTransaction, balance: 3000.00}]
      }
      const headerRow = "date       || credit  || debit  || balance";
      const mockTransaction = new MockTransaction();
      const mockAccount = new MockAccount();
      let expected = [headerRow, '13/01/2012 || 1500.55 ||        || 3000.00'];
      //Act
      const formattedRowsArray = PrintStatement.createBankStatementRowsArray(mockAccount.getAccountUpdate());
      //Assert
      expect(formattedRowsArray).toEqual(expected);
    })
  })

  describe('console logging tests', () => {
    let clgSpy, mockAccount, mockTransaction, mockTransaction2, expected;
    class MockTransaction {
      getType = () => 'credit';
      getAmount = () => 1500.55555;
      getDate = () => new Date(2012, 0, 13);
    }
    class MockAccount {
      getAccountUpdate = () => [{ transaction: mockTransaction, balance: 3000.00 }, { transaction: mockTransaction2, balance: 1000.55 }];
    }
    beforeEach(() => {
      clgSpy = spyOn(console, "log");
      mockTransaction = new MockTransaction();
      mockTransaction2 = new MockTransaction();
      mockAccount = new MockAccount();
    });

    afterEach(() => {
      clgSpy = undefined;
      mockTransaction = undefined;
      mockTransaction2 = undefined;
      mockAccount = undefined;
      expected = undefined;
    });
    
    it('console logs the header row for an account with no transactions', () => {
      // Arrange
      const headerRow = "date       || credit  || debit  || balance";
      class MockNewAccount {
        getAccountUpdate = () => [];
      }
      const mockNewAccount = new MockNewAccount()
      // Act
      PrintStatement.printTransactionsRows(mockNewAccount.getAccountUpdate());
      // Assert
      expect(clgSpy).toHaveBeenCalledWith(headerRow);
    })
    
    it('should call console.log as many times as the length the bank statements rows array plus one - the header row' , () => {
      // Arrange 
      expected = mockAccount.getAccountUpdate().length + 1;
      // Act
      PrintStatement.printTransactionsRows(mockAccount.getAccountUpdate());
        // Assert
      expect(clgSpy).toHaveBeenCalledTimes(expected);
    });

    it('should call console.log with the correct arguments', () => {
      // Arrange
      // Act
      const bankStatementRowsArray = PrintStatement.createBankStatementRowsArray(mockAccount.getAccountUpdate());
      PrintStatement.printTransactionsRows(mockAccount.getAccountUpdate());
      // Assert
      for (let i = 0; i < bankStatementRowsArray.length; i++)
        expect(clgSpy).toHaveBeenCalledWith(bankStatementRowsArray[i]);
    });
  });
});
