{
  //
  // Function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  type User = {
    id: number;
    name: string;
  };
  const res1 = createArray("BD");
  const resGeneric = createArrayWithGeneric<boolean>(true);
  const resGenericObj = createArrayWithGeneric<User>({
    id: 1314,
    name: "MN",
  });
  console.log(resGenericObj);

  const addToCOurse = <T>(student: T) => {
    const course = "Apollo Level 2.0";
    return {
      ...student,
      course,
    };
  };
  const student1 = addToCOurse({
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "Next Level",
  });
  console.log(student1);
  //
}
