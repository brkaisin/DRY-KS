// Base class
class Animal {
  constructor(public name: string) {}

  eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

// Dog class inheriting from Animal
class Dog extends Animal {
  bark(): void {
    console.log('Woof! Woof!');
  }
}

// Bird class inheriting from Animal
class Bird extends Animal {
  fly(): void {
    console.log('Flap! Flap!');
  }
}

// Usage
const dog: Dog = new Dog('Rex');
dog.eat(); // Rex is eating.
dog.bark(); // Woof! Woof!

const bird: Bird = new Bird('Tweety');
bird.eat(); // Tweety is eating.
bird.fly(); // Flap! Flap!
