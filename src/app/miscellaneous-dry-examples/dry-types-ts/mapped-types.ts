// Original type
type Person = {
  name: string;
  age: number;
  hasPet: boolean;
};

// Mapped type to transform properties into functions
type LazyProperties<T> = {
  [P in keyof T]: () => T[P];
};

// Applying the mapped type to Person
type LazyPerson = LazyProperties<Person>;

// Usage example
const lazyPerson: LazyPerson = {
  name: () => 'John Doe',
  age: () => 30,
  hasPet: () => true,
};

// Accessing the properties through functions
console.log(lazyPerson.name()); // "John Doe"
console.log(lazyPerson.age());  // 30
console.log(lazyPerson.hasPet()); // true

