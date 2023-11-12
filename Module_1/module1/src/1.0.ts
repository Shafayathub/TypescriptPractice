{
  // Typescript Data types

  // Number type
  let age: number = 23;
  console.log(age);

  //   String Type
  const name: string = "Shafayat";
  console.log(name);

  //   const Symbol type
  const asteric: symbol = Symbol();
  console.log(asteric);

  //   Boolean
  const practicingEnough: boolean = true;
  console.log(practicingEnough);

  //   undefined
  const basicType: undefined = undefined;
  console.log(basicType);

  //   null
  const null1: null = null;
  console.log(null1);

  //   Array
  const arr1: number[] = [1, 2, 3];
  console.log(arr1);

  let arr2: string[] = ["a", "b", "c"];
  console.log(arr2);

  //   Tuple
  let arr3: [number, string] = [1, "name"];
  console.log(arr3);

  //   Object
  let obj1: {
    name: string;
    age: number;
    isStudent: boolean;
  } = {
    name: "Shafayat",
    age: 50,
    isStudent: true,
  };
  console.log(obj1);

  // Typescript Data types

  //   spread operators
  let arr4: string[] = ["x", "y", "z"];
  arr2.push(...arr4);
  console.log(arr2);

  //   rest operators
  function greetings(...friends: string[]) {
    friends.forEach((friend) => console.log(`Assalamualaikum ${friend}`));
  }
  greetings("SM", "AZ", "RD");

  //   Destructuring
  let userN = {
    id: 131521,
    name: {
      firstName: "Shafayat",
      lastName: "Islam",
    },
    address: "Raj",
  };
  const {
    address,
    name: { firstName },
  } = userN;
  console.log(address, firstName);
}
