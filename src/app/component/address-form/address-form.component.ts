import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Address } from "../../util/business/dtos";
import { HistoryManager } from "../history-manager";
import { Change } from "../../util/business/history-util";
import { AddressHistory } from "../../util/business/history-models";
import { FormGroupFor } from "../../util/business/form-util";
import { companyB12 } from "../../util/business/data-mock";
import { NgIf } from "@angular/common";

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


  writeValue(address: Address): void {
    this.patchValueInForm(address);
  }

  registerOnChange(fn: (_: typeof this.formGroup.value) => void): void {
    this.formGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void): void {
  }

  private static extractChanges(history: AddressHistory): Array<Change<unknown>> {
    return [];
  }

  constructor(private formBuilder: NonNullableFormBuilder) {
    super(AddressFormComponent.extractChanges);
  }

  protected readonly companyB12 = companyB12;
}
