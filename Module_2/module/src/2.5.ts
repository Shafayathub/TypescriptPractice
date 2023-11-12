{
  //
  // Constraints

  const addToCourse = <T extends { id: number; name: string; email: string }>(
    student: T
  ) => {
    const course = "Apollo Level 2.0";
    return {
      ...student,
      course,
    };
  };
  const student1 = addToCourse({
    id: 1,
    name: "Mr.X",
    email: "x@gmail.com",
    devType: "Next Level",
  });
  const student2 = addToCourse({
    id: 2,
    name: "Mr.Y",
    email: "y@gmail.com",
    devType: "Entry Level",
  });
  console.log(student1, student2);
  //
}
