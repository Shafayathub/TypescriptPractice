{
  //
  // Generic type
  type GenericArray<T> = Array<T>;

  const rollNumber: GenericArray<number> = [1, 2, 3, 5, 6];

  const mentors: GenericArray<string> = ["a", "b", "c", "d"];

  const boolArray: GenericArray<boolean> = [true, false, false, true];

  type User = {
    name: string;
    age: number;
  };
  const user: GenericArray<User> = [
    {
      name: "Shafa",
      age: 29,
    },
    {
      name: "Mezba",
      age: 36,
    },
  ];

  //   Generic tuple
  type GenericTuple<x, y> = [x, y];
  const couple: GenericTuple<string, string> = ["NH", "MU"];

  const userWithId: GenericTuple<number, User> = [
    123,
    {
      name: "Ab",
      age: 33,
    },
  ];
  //
}
