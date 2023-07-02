import PrintStatement from '../src/PrintStatement.js';
describe('PrintStatement Tests', () => {

  it('prints the header', () => {
    // Arrange
    const expected = 'date       || credit  || debit  || balance';
    // Act
    const header = PrintStatement.printHeader();
    // Assert
    expect(header).toBe(expected);
  })

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
      let expected = '13/01/2012 || 1500.55 ||        || ';
      //Act
      const formattedBankStatementRow = PrintStatement.statementRow(mockTransaction);
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
        getTransactions = () => [{transaction: mockTransaction, balance: 3000.00}]
      }
      const header = "date       || credit  || debit  || balance";
      const mockTransaction = new MockTransaction();
      const mockAccount = new MockAccount();
      let expected = [header, '13/01/2012 || 1500.55 ||        || 3000.00'];
      //Act
      const formattedRowsArray = PrintStatement.createBankStatementRowsArray(mockAccount.getTransactions());
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
      getTransactions = () => [{ transaction: mockTransaction, balance: 3000.00 }, { transaction: mockTransaction2, balance: 1000.55 }];
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
    });
    
    it('should call console.log as many times as the length the bank statements rows array plus one - the header row' , () => {
      // Arrange 
      expected = mockAccount.getTransactions().length + 1;
      // Act
      PrintStatement.printTransactionsRows(mockAccount.getTransactions());
        // Assert
      expect(clgSpy).toHaveBeenCalledTimes(expected);
    });


    it('should call console.log with the correct arguments', () => {
      // Arrange
      // Act
      PrintStatement.createBankStatementRowsArray(mockAccount.getTransactions());
      const bankStatementRowsArray = PrintStatement.printTransactionsRows(mockAccount.getTransactions());

      // Assert
      for (let i = 0; i < PrintStatement.createBankStatementRowsArray(mockAccount.getTransactions()).length; i++)
        expect(clgSpy).toHaveBeenCalledWith(PrintStatement.createBankStatementRowsArray(mockAccount.getTransactions())[i]);
    });
  });
});
