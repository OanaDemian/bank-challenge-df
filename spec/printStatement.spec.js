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
      const formattedRowsArray = PrintStatement.createTransactionsRowsArray(mockAccount.getTransactions());
      //Assert
      expect(formattedRowsArray).toEqual(expected);
    })
  })
});
