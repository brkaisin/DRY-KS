import { Option } from "../../util/typescript/types";

// This interface probably illustrates a premature abstraction of a stack data structure.
interface Stack<T> {
  push(value: T): void;

  pop(): Option<T>;

  peek(): Option<T>;

  isEmpty(): boolean;

  size(): number;
}

export class ArrayStack<T> implements Stack<T> {
  private readonly stack: Array<T>;

  constructor() {
    this.stack = [];
  }

  push(value: T): void {
    this.stack.push(value);
  }

  pop(): Option<T> {
    return this.stack.pop();
  }

  peek(): Option<T> {
    return this.stack[this.stack.length - 1];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.stack.length;
  }

  // Leaky part: exposing internal structure (leaky abstraction, bad practice)
  getInternalArray(): Array<T> {
    return this.stack;
  }
}
