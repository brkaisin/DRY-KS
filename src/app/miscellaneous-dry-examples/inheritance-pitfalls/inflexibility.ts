class Bird {
  fly(): void {
    console.log("Flying");
  }
}

class Ostrich extends Bird {
  // Ostriches can't fly, but they inherit the fly method from Bird
}

const ostrich = new Ostrich();
ostrich.fly(); // This action doesn't make sense for an Ostrich
