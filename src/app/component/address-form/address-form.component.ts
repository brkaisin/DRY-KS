import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Address } from "../../util/business/dtos";
import { HistoryManager } from "../history-manager";
import { Change } from "../../util/business/history-util";
import { AddressHistory } from "../../util/business/history-models";
import { FormGroupFor } from "../../util/business/form-util";
import { NgIf } from "@angular/common";
import { TwoWayBindingFormHelper } from "../../util/business/two-way-binding-form-helper";

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressFormComponent),
      multi: true,
    },
  ],
})
export class AddressFormComponent extends HistoryManager<Address, AddressHistory> implements ControlValueAccessor {

  protected formGroup: FormGroupFor<Address> = this.formBuilder.group({
    country: this.formBuilder.control(''),
    city: this.formBuilder.control(''),
    street: this.formBuilder.control(''),
  })

  private twoWayBindingHelper: TwoWayBindingFormHelper<Address, typeof this.formGroup> =
    new TwoWayBindingFormHelper(this.formGroup);


  writeValue(address: Address): void {
    this.twoWayBindingHelper.writeValueF(address);
  }

  registerOnChange(fn: (_: typeof this.formGroup.value) => void): void {
    this.twoWayBindingHelper.registerOnChangeF(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.twoWayBindingHelper.registerOnTouchedF(fn);
  }

  private static extractChanges(history: AddressHistory): Array<Change<unknown>> {
    return [];
  }

  constructor(private formBuilder: NonNullableFormBuilder) {
    super(AddressFormComponent.extractChanges);
  }
}
