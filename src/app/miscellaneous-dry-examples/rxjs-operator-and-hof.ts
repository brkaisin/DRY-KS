import { map, Observable, of, OperatorFunction } from "rxjs";

const array$: Observable<Array<number>> = of([1, 2, 3, 4, 5]);

const doubledArray$: Observable<Array<number>> = array$.pipe(map((array) => array.map((value) => value * 2)));
const arrayAsStrings$: Observable<Array<string>> = array$.pipe(map((array) => array.map((value) => value.toString())));

export function mapArray$<T, U>(f: (_: T) => U): OperatorFunction<Array<T>, Array<U>> {
  return (source$: Observable<Array<T>>) => source$.pipe(map((array) => array.map(f)));
}

const doubledArray2$: Observable<Array<number>> = array$.pipe(mapArray$((value) => value * 2));
const arrayAsStrings2$: Observable<Array<string>> = array$.pipe(mapArray$((value) => value.toString()));

const doubledArrayAsStrings$: Observable<Array<string>> = array$.pipe(mapArray$((value) => (value * 2).toString()));

function doubleNumber(value: number): number {
  return value * 2;
}

function numberToString(value: number): string {
  return value.toString();
}

function compose<A, B, C>(f: (_: A) => B, g: (_: B) => C): (_: A) => C {
  return (value: A) => g(f(value));
}

const doubledArrayAsString2$: Observable<Array<string>> = array$.pipe(mapArray$(compose(doubleNumber, numberToString)));
