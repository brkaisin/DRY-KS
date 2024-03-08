class A {
  doSomething() {
    console.log("Doing something in A");
  }
}

class B extends A {
  doSomething() {
    console.log("Doing something in B");
  }
}

class C extends A {
  doSomething() {
    console.log("Doing something in C");
  }
}

// This is not a problem in TypeScript, since the following code is not valid: classes can only inherit from one class
// class D extends B, C {
//   // Which doSomething method does D inherit? B's or C's?
// }
