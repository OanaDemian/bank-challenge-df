### User Stories
As a client of the bank,
I want to be able make a deposit into my bank account,
So that I can keep money safe.

As client of the bank,
I want to be able to make a withdrawal from my bank account,
So that I can spend some of my money.

As client of the bank,
I want to have the date for each of my account transactions,
So that I can see the history of my transactions.

As client of the bank,
I want to know the current balance of my bank account,
So that I can take informed decisions regarding my finances.

As client of the bank,
I want to be able print a bank statement,
So that I can see my deposits, withdrawals and my current ballance at a certain date.

As client of the bank,
I want to be able print the history of my account transactions on the bank statement in descending order,
So that I can see the most recent transactions first.


## Domain Models

### User Story 1

```
As a client of the bank,
I want to be able make a deposit into my bank account,
So that I can keep money safe.
```
```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
#### Domain Model

| Objects     | Properties                  | Messages                       | Output   |
| ----------- | ----------------------------| -------------------------------| -------- |
| account     |  transaction @Transaction   | credit(@Transaction)           |  Void    |
| transaction |  deposit, balance @Float    | getBalance()                   |  @Float  |
| transaction |  deposit, balance @Float    | depositSum(sumToDeposit @Float)|  Void    |

As client of the bank,
I want to be able to make a withdrawal from my bank account,
So that I can spend some of my money.

| Objects     | Properties                  | Messages                         | Output   |
| ----------- | ----------------------------| ---------------------------------| -------- |
| account     |  transaction @Transaction   | debit (@Transaction)             |  Void    |
| transaction |  withdrawal, balance @Float | getBalance()                     |  @Float  |
| transaction |  withdrawal, balance @Float | withdrawSum(sumToWithdraw @Float)|  Void    |
#### Tests

1. Test that a new instance of `Lock` reports `locked` is `true`
2. Test that the diary calls the lock's `isLocked` method
3. Test that the diary reports locked after instantiation; i.e. Expect `secretDiary.isLocked` to be `true`

---

<!-- Account
currentBalance @Float transactions@Array[] makeDeposit makeWithdrawal

Transaction
date @Date credit @Float debit @Float balance @Float

Bank Statement
printTransactions

Date
getCurrentDate -->
