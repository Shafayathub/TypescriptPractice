{
  //
  // Generic Constraints
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner1 = "bike" | "car" | "ship"; //manually
  type Owner2 = keyof Vehicle;

  const user = {
    name: "Shafayt",
    age: 25,
    address: "Raj",
  };
  const car = {
    brand: "Toyota",
    model: "CH-R sClass",
  };
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const result1 = getPropertyValue(car, "model");
  console.log(result1);
  //
}
