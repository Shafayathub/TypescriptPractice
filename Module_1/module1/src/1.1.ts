{
  // Function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  console.log(add(2, 5));

  const user = {
    name: "Shafayat",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },
  };

  // Function
}
