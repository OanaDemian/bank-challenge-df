import Account from '../src/Account.js';

class MockTransaction {
  depositSum = sumToDeposit => { }
  withdrawSum = sumToWithdraw => { }
  getBalance = () => 1000.00
  getTransactionDate = () => '11.01.2012'
}

describe('Account Tests', () => {

  let account, transaction;

  beforeEach(() => {
    transaction = new MockTransaction();
    account = new Account(transaction);
  });

  afterEach(() => {
    transaction = undefined;
    account = undefined;
  });
    
  it('should call depositSum on the transaction object when credit is called on the account', () => {
        
    // Arrange
    const transactionSpy = spyOn(transaction, `depositSum`)
    const depositSum = 1000.00;
      
    // Act
    account.credit(depositSum);

    // Assert
    expect(transactionSpy).toHaveBeenCalledOnceWith(depositSum);
  });
  
  it('should call withdrawSum on the transaction object when debit is called on the account', () => {
    // Arrange
    const transactionSpy = spyOn(transaction, `withdrawSum`)
    const withdrawSum = 500.00;
      
    // Act
    account.debit(withdrawSum);

    // Assert
    expect(transactionSpy).toHaveBeenCalledOnceWith(withdrawSum);
  });
  
  it('should call getBalance on the transaction object when getBalance is called on the account', () => {
    // Arrange
    const transactionSpy = spyOn(transaction, `getBalance`);
    // Act
    account.getBalance();

    // Assert
    expect(transactionSpy).toHaveBeenCalledTimes(1);
  });
  
  it('should call getTransactionDate on the transaction object when getTransactionDate is called on the account', () => {
    // Arrange
    const transactionSpy = spyOn(transaction, `getTransactionDate`);
    // Act
    account.getTransactionDate();
    // Assert
    expect(transactionSpy).toHaveBeenCalledTimes(1);
  });
});