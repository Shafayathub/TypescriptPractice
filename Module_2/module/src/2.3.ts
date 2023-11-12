{
  //
  // Interface with generic
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type XiomiWatch = {
    brand: string;
    model: string;
    display: string;
  };
  type AppleWatch = {
    brand: string;
    model: string;
    heartTrace: boolean;
    sleeptrack: boolean;
  };
  // It can be written with type alias also but I tried interface here
  interface Bike {
    brand: string;
    model: string;
  }

  const poorDev: Developer<XiomiWatch> = {
    name: "Asus",
    computer: {
      brand: "Asus",
      model: "Vivobook 531FL",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "Xiomi",
      model: "kw66",
      display: "OLED",
    },
  };
  const richDev: Developer<AppleWatch, Bike> = {
    name: "Rich",
    computer: {
      brand: "Asus",
      model: "Vivobook 531FL",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "Apple",
      model: "air15",
      heartTrace: true,
      sleeptrack: true,
    },
    bike: {
      brand: "Yahamaha",
      model: "FZ-s V.3.0",
    },
  };
  console.log(poorDev, richDev);
  //
}
