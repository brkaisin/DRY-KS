import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Option } from "../../util/typescript/types";
import { Change } from "../../util/business/history-util";
import { HistoryManager } from "../history-manager";
import { Address, Company } from "../../util/business/dtos";
import { CompanyHistory } from "../../util/business/history-models";
import { AddressFormComponent } from "../address-form/address-form.component";
import { companyB12 } from "../../util/business/data-mock";
import { FormGroupFor } from "../../util/business/form-util";
import { HistoryWrapperComponent } from "../history-wrapper/history-wrapper.component";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'app-company-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AddressFormComponent,
    HistoryWrapperComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './company-form.component.html',
  styleUrl: './company-form.component.scss'
})
export class CompanyFormComponent extends HistoryManager<Company, CompanyHistory> {

  protected formGroup: FormGroupFor<Company> = this.formBuilder.group({
    name: this.formBuilder.control(''),
    address: this.formBuilder.control<Option<Address>>(undefined),
    turnover: this.formBuilder.control(0),
  })

  private static extractChanges(history: CompanyHistory): Array<Change<unknown>> {
    return [];
  }

  constructor(private formBuilder: NonNullableFormBuilder) {
    super(CompanyFormComponent.extractChanges);
  }

  protected readonly companyB12 = companyB12;
}

