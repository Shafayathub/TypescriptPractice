{
  // Type guard --- instanceof
  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("Usually animal makes sounds");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("Dog makes Barking");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeaw() {
      console.log("Cat makes Meaw Meaw");
    }
  }

  function getAnimal(animal: Animal) {
    if (animal instanceof Dog) {
      animal.makeBark();
    } else if (animal instanceof Cat) {
      animal.makeMeaw();
    }
  }

  const dog = new Dog("Mr.Bulldog", "DOG");
  const cat = new Cat("Mr. Tom", "Cat");
  //
  getAnimal(dog);
  getAnimal(cat);
  //
}
