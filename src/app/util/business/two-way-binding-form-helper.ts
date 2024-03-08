import { FormGroupFor } from "./form-util";

export class TwoWayBindingFormHelper<T, FormGroupType extends FormGroupFor<T>> {

  constructor(
    protected readonly formGroup: FormGroupType,
  ) {}

  public patchValue(value: T): void {
    this.formGroup.patchValue(value as any); // todo: better typing to avoid this awful cast
  }

  public getValue(): T {
    return this.formGroup.getRawValue() as T; // todo: better typing to avoid this cast
  }

  public writeValueF(value: T): void {
    this.patchValue(value);
  }

  public registerOnChangeF(onChange: (value: typeof this.formGroup.value) => void): void {
    this.formGroup.valueChanges.subscribe(onChange);
  }

  public registerOnTouchedF(onTouched: () => void): void {
    // no-op
  }

  // add your other fancy stuff here
}
