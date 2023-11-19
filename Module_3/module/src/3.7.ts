{
  // polymorphism
  class Shape {
    getArea(): number {
      return 0;
    }
  }

  //   Circle
  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  //   Rectangle
  class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }
    getArea(): number {
      return this.height * this.width;
    }
  }
  const circle1 = new Circle(5);
  console.log(circle1.getArea());

  const rectangle = new Rectangle(4, 5);
  console.log(rectangle.getArea());
  //
}
