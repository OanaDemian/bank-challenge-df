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

  describe('formatting columns tests', () => {
    
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
  })

});
