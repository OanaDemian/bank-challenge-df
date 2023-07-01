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
});
