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

});
