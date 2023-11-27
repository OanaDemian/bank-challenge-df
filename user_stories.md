### User Stories
As a client of the bank,
I want to be able make a deposit into my bank account,
So that I can keep money safe.

As client of the bank,
I want to be able to make a withdrawal from my bank account,
So that I can spend some of my money.

As client of the bank,
I want to see the date of each of my account transactions,
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

As client of the bank,
I want to know the current balance of my bank account,
So that I can take informed decisions regarding my finances.

| Objects     | Properties                       | Messages                     | Output                |
| ----------- | ---------------------------------|------------------------------| ----------------------|
| account     |  transactions@Array[]            | getTransactions()            | @Array[Transaction]   |
|             |  newBalance @Number              | getBalance()                 | @Number               |
|             |  accountTransaction @Transaction | newTransaction(@Transaction) | @Void                 |
| transaction |  amount @Number                  | getAmount()                  | @Number               |
|             |  type @String                    | getType()                    | @String               |

As a client of the bank,
I want to be able make a deposit into my bank account,
So that I can keep money safe.

| Objects     | Properties                       | Messages                     | Output                |
| ----------- | ---------------------------------|----------------------------- | --------------------- |
| account     |  transactions@Array[]            | getTransactions()            | @Array[Transaction]   |
|             |  newBalance @Number              | getBalance()                 | @Number               |
|             |  accountTransaction @Transaction | newTransaction(@Transaction) | @Void                 |
|             |                                  | deposit(amount @Number)      | @Void                 |
| transaction |  amount @Number                  | getAmount()                  | @Number               |
|             |  type @String                    | getType()                    | @String               |

- test that calling getTransactions returns an empty array of transactions when account is first instantiated;


As client of the bank,
I want to be able to make a withdrawal from my bank account,
So that I can spend some of my money.

| Objects     | Properties                       | Messages                     | Output                |
| ----------- | ---------------------------------|------------------------------| ----------------------|
| account     |  transactions@Array[]            | getTransactions()            | @Array[Transaction]   |
|             |  newBalance @Number              | getBalance()                 | @Number               |
|             |  accountTransaction @Transaction | newTransaction(@Transaction) | @Void                 |
|             |                                  | withdrawal(amount @Number)   | @Void                 |
| transaction |  amount @Number                  | getAmount()                  | @Number               |
|             |  type @String                    | getType()                    | @String               |

As client of the bank,  
I want to see the date of each of my account transactions,
So that I can see the history of my transactions.

| Objects     | Properties                        | Messages                 | Output             |
| ----------- | ----------------------------------|--------------------------| -------------------|
| account     |  transactions@Array[]             | getTransactions()        | @Array[Transaction]|
| transaction |  date @Date                       | getDate()                | @Date              |
|             |  formattedDate @String            | formatDate()             | @String            |
|             |                                   | getFormattedDate()       | @String            |

- test that calling the getDate method on the Transaction object gets the date object;
- test that calling the formatDate method on the Transaction object formats the date object to 'dd/mm/yyyy/;
- test that calling the getFormattedDate on the Transaction object gets the formatted date;


As client of the bank,
I want to be able print a bank statement,
So that I can see my deposits, withdrawals and my current ballance at a certain date.

As client of the bank,
I want to be able print the history of my account transactions on the bank statement in descending order,
So that I can see the most recent transactions first.
#### Tests

1. Test that a new instance of `Lock` reports `locked` is `true`
2. Test that the diary calls the lock's `isLocked` method
3. Test that the diary reports locked after instantiation; i.e. Expect `secretDiary.isLocked` to be `true`

---

<!-- Account
newBalance @Float transactions@Array[] 

Transaction
date @Date type @String amount @Number
getAmount()
getType()
formatDate()
getDate()

Bank Statement
printTransactions


Questions:

- is date injected or hard coded in my Transaction spec?
