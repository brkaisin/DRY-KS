// Defining behaviors as separate classes
class Eater {
  constructor(private name: string) {}

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

class Barker {
  bark(): void {
    console.log('Woof! Woof!');
  }
}

class Flyer {
  fly(): void {
    console.log('Flap! Flap!');
  }
}

// Dog class using composition
class Dog {
  private eater: Eater;
  private barker: Barker;

  constructor(name: string) {
    this.eater = new Eater(name);
    this.barker = new Barker();
  }

  eat(): void {
    this.eater.eat();
  }

  bark(): void {
    this.barker.bark();
  }
}

// Bird class using composition
class Bird {
  private eater: Eater;
  private flyer: Flyer;

  constructor(name: string) {
    this.eater = new Eater(name);
    this.flyer = new Flyer();
  }

  eat(): void {
    this.eater.eat();
  }

  fly(): void {
    this.flyer.fly();
  }
}

// Usage
const dog: Dog = new Dog('Rex');
dog.eat(); // Rex is eating.
dog.bark(); // Woof! Woof!

const bird: Bird = new Bird('Tweety');
bird.eat(); // Tweety is eating.
bird.fly(); // Flap! Flap!
