import Account from '../src/Account.js';

class MockTransaction {
  depositSum = sumToDeposit => { }
  withdrawSum = sumToWithdraw => { }
  getBalance = () => 1000.00
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
  
      it('should call getBalance on the transaction object when getBalance is called on the account', () => {
        // Arrange
        const transactionSpy = spyOn(transaction, `getBalance`);
        // Act
        account.getBalance();

        // Assert
        expect(transactionSpy).toHaveBeenCalledTimes(1);
    });
});