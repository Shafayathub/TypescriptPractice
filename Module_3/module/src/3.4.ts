{
  // Access Modifier
  //   readonly
  //   public
  //   private
  //   protected

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
    addBalance(amount: number): number {
      return (this._balance += amount);
    }
  }

  class StudentAcc extends BankAccount {
    getBalance() {
      console.log(this._balance);
    }
  }

  const jartarAcc = new BankAccount(1, "Abdul Kuddus", 200);
  console.log(jartarAcc);
  jartarAcc.addBalance(50);
  console.log(jartarAcc);
  //
  const studentAcc = new StudentAcc(2, "StudentAcc", 100);
  studentAcc.getBalance();
  //
}
