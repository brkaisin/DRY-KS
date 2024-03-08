import { BehaviorSubject, Observable, ObservableInput, takeUntil } from "rxjs";

/**
 * Wrapper class around a BehaviorSubject that contains an array.
 */
export class BehaviorSubjectArray<T> {
  // encapsulated subject
  private readonly arraySubject$: BehaviorSubject<Array<T>>;

  public pipe;
  public subscribeUntil;

  constructor(initialValue?: Array<T>) {
    this.arraySubject$ = new BehaviorSubject<Array<T>>(initialValue ?? []);
    this.pipe = this.arraySubject$.pipe.bind(this.arraySubject$);
    this.subscribeUntil = (notifier: ObservableInput<unknown>) =>
      this.arraySubject$.pipe(takeUntil(notifier)).subscribe.bind(this.arraySubject$);
  }

  /**
   * Set the value of the array.
   * @param value the new value
   */
  public set(value: Array<T>): void {
    this.arraySubject$.next(value);
  }

  /**
   * Get the value of the array synchronously.
   */
  public get valueSync(): Array<T> {
    return this.arraySubject$.value;
  }

  /**
   * Get the value of the array asynchronously.
   */
  public get valueAsync(): Observable<Array<T>> {
    return this.arraySubject$;
  }

  /**
   * Push one or more values to the array.
   * @param values the values to push
   */
  public add(...values: Array<T>): void {
    this.arraySubject$.next([...this.arraySubject$.value, ...values]);
  }

  /**
   * Remove a value from the array. If the value is present multiple times, all instances will be removed.
   * @param value the value to remove
   */
  public remove(value: T): void {
    this.arraySubject$.next(this.valueSync.filter((v) => v !== value));
  }

  /**
   * Remove values from the array by predicate.
   * @param predicate the predicate to remove by
   */
  public removeIf(predicate: (v: T) => boolean): void {
    this.arraySubject$.next(this.valueSync.filter((v) => !predicate(v)));
  }

  /**
   * Remove a value from the array by key-value pair.
   * @param key the key to check
   * @param value the value to remove
   */
  public removeByKeyValue(key: keyof T, value: T[keyof T]): void {
    this.removeIf((v) => v[key] === value);
  }

  /**
   * Remove values from the array by key-value pairs.
   * @param key the key to check
   * @param values the values to remove
   */
  public removeByKeyValues(key: keyof T, values: T[keyof T][]): void {
    this.removeIf((v) => values.includes(v[key]));
  }

  /**
   * Remove a value from the array at a specific index.
   */
  public removeAt(index: number): void {
    this.arraySubject$.next(this.valueSync.filter((_, i) => i !== index));
  }

  /**
   * Remove all values from the array.
   */
  public clear(): void {
    this.arraySubject$.next([]);
  }

  /**
   * Check if the array contains a value.
   * @param value the value to check
   */
  public contains(value: T): boolean {
    // probably we should check by equality, not by reference
    return this.valueSync.includes(value);
  }

  public addIfNotPresent(...values: Array<T>): void {
    const newValues = values.filter((value) => !this.contains(value));
    this.add(...newValues);
  }
}
