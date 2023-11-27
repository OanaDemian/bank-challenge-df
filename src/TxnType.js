class TxnType {
  static credit = new TxnType("credit");
  static debit = new TxnType("debit");

 constructor(type) {
   this.type = type;
  }
}

export default TxnType;