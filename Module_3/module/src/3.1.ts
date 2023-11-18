{
  //
  // OOP --- Class
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // public modifier define & initialize properties

    // Parameter Properties
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    //  {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
    // }
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  const duck = new Animal("Duck", "Duck", "Pek pek pekao");
  const cat = new Animal("Persian", "Cat", "Meaw Meaw");

  duck.makeSound();
  cat.makeSound();
  //
}
