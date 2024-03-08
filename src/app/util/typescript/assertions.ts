export type KeysAreIdentical<T, U> = keyof T extends keyof U ? (keyof U extends keyof T ? true : false) : false;

export type IsTrue<T extends true> = T;

export const expectType = <Type>(_: Type): void => void 0;
