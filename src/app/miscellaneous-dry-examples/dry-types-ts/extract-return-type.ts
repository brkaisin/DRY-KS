// Utility type to extract the return type of a function
type ReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;

// Example usage with a function
function getUser() {
  return {id: 1, name: 'John Doe'};
}

// Using the utility type to infer the return type of `getUser`
type User = ReturnType<typeof getUser>; // { id: number, name: string }
