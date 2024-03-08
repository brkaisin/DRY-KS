// Conditional Type based on a condition
type IsNumber<T> = T extends number ? true : false;

// Usage
type Result1 = IsNumber<42>;    // true
type Result2 = IsNumber<'Hi'>;  // false

// Same, but extracting the type
type NumberOrNot<T> = T extends number ? number : never;

// Usage
type Result3 = NumberOrNot<42>;    // number
type Result4 = NumberOrNot<'Hi'>;  // never
