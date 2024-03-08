import { Component, forwardRef } from '@angular/core';
import { Address, Client } from "../../util/business/dtos";
import { FormGroupFor } from "../../util/business/form-util";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NonNullableFormBuilder } from "@angular/forms";
import { Option } from "../../util/typescript/types";
import { TwoWayBindingFormHelper } from "../../util/business/two-way-binding-form-helper";

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClientFormComponent),
      multi: true,
    },
  ],
})
export class ClientFormComponent implements ControlValueAccessor {

  // challenge: find a way to avoid repeating this kind of function
  protected formGroup: FormGroupFor<Client> = this.formBuilder.group({
    name: this.formBuilder.control(''),
    code: this.formBuilder.control(''),
    address: this.formBuilder.control<Option<Address>>(undefined),
  });

  private twoWayBindingFormHelper: TwoWayBindingFormHelper<Client, FormGroupFor<Client>> =
    new TwoWayBindingFormHelper<Client, FormGroupFor<Client>>(this.formGroup);

  writeValue(client: Client): void {
    this.twoWayBindingFormHelper.writeValueF(client);
  }

  registerOnChange(fn: (_: typeof this.formGroup.value) => void): void {
    this.twoWayBindingFormHelper.registerOnChangeF(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.twoWayBindingFormHelper.registerOnTouchedF(fn);
  }

  constructor(private formBuilder: NonNullableFormBuilder) {
  }

  // protected patchValueInForm(client: Client): void {
  //   this.formGroup.patchValue(client);
  // }
}
