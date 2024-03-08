import { FormControl, FormGroup } from "@angular/forms";

export type FormGroupFor<T> = FormGroup<
  { [K in keyof T]: FormControl<T[K]> }
>;
