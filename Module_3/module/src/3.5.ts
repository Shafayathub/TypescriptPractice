{
  // Getter & Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    // "private" can be changed only in that class scope and "protected" can be changed on its child class too.
    protected _balance: number;
    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    // setter
    set deposit(amount: number) {
      this._balance += amount;
    }

    // addBalance(amount: number): number {
    //   return (this._balance += amount);
    // }

    // getBalance() {
    //   return this._balance;
    // }

    // getter
    get balance() {
      return this._balance;
    }
  }

  const jartarAcc = new BankAccount(1, "Abdul Kuddus", 200);
  jartarAcc.deposit = 10;
  console.log(jartarAcc);
  //   jartarAcc.addBalance(50);
  console.log(jartarAcc.balance);

  //   const balance = jartarAcc.getBalance();
  //   console.log(jartarAcc, balance);
  //

  //
}
