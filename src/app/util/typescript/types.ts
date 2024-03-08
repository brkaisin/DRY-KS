export type Option<T> = T | undefined;

// Utility type to expand a type into its properties (useful for debugging)
export type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
