import { Option } from "../typescript/types";

export type ChangeMetadata = {
  byUser: string
  at: Date
}

type ValueSet<T> = {
  value: T
  metadata: ChangeMetadata
}

type ValueChange<T> = {
  oldValue: T
  newValue: T
  metadata: ChangeMetadata
}

export type Change<T> = ValueSet<T> | ValueChange<T>

// phantom type tagging an object as a history of type T
export type HistoryOf<T> = {
  _tag?: T;
}

export type SimpleHistory<T> = HistoryOf<T> & {
  changes: Array<Change<T>>
}

export type OptionHistory<T, HistoryType extends HistoryOf<T>> = HistoryOf<Option<T>> & {
  maybeHistory: Option<HistoryType>
}

// export type HistoryUnion<T> = T extends Option<infer U> ? OptionHistory<U, HistoryUnion<T>> : SimpleHistory<T>;
//
// export type HistoryInfo<T> = {
//   [K in keyof Required<T>]: HistoryUnion<T[K]>
// }
