{
  //
  // OOP ---- Inheritence
  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(numOfHours: number) {
      console.log(`${this.name} will get sleep for ${numOfHours} hours`);
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  const student = new Student("Mr. Student", 19, "RAJ");
  student.getSleep(7);

  class Teacher extends Parent {
    constructor(
      name: string,
      age: number,
      address: string,
      public designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfHours: number) {
      console.log(`${this.name} will take class for ${numOfHours} hours`);
    }
  }
  const teacher = new Teacher("Mr.Teacher", 41, "DHK", "Professor");
  teacher.getSleep(8);
  teacher.takeClass(2);
  //
}
