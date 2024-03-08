// Generic List Type Constructor
type List<T> = {
  items: Array<T>;
  addItem: (item: T) => void;
};

// Usage with different types
const numberList: List<number> = {items: [1, 2, 3], addItem(item) { this.items.push(item); }};
const stringList: List<string> = {items: ['a', 'b', 'c'], addItem(item) { this.items.push(item); }};
