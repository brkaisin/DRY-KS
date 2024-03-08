class Vehicle {
  startEngine(): void {
    // Implementation to start the engine
    console.log("Engine started");
  }
}

class Car extends Vehicle {
  startCar(): void {
    this.startEngine(); // Dependent on the Vehicle's startEngine method
  }
}

// If we change the startEngine method in Vehicle, it might affect the startCar method in Car.
