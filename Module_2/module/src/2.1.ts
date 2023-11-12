{
  //
  // type assertion
  let anything: any;

  anything = "Apollo level 2";

  //   (anything as string).

  const kgToGram = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `string input retuirn ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGram(5) as number;
  const result2 = kgToGram("5") as string;

  console.log(result1, result2);

  //   interface

  type User1 = {
    name: string;
    email?: string;
    age: number;
    address: string;
  };

  interface User2 {
    name: string;
    email?: string;
    age: number;
    address: string;
  }

  interface UserWithRole extends User1 {
    role: string;
  }

  const user1: User2 = {
    name: "Anonymous",
    age: 30,
    address: "Unknown",
  };
  const user2: UserWithRole = {
    name: "Anonymous",
    age: 30,
    address: "Unknown",
    role: "CEO",
  };

  interface Roll1 {
    [index: number]: number;
  }
  const roll: Roll1 = [1, 2, 3];

  interface TestFunction {
    (num1: number, num2: number): number;
  }

  const add: TestFunction = (num1, num2) => {
    return num1 + num2;
  };
  //
}
