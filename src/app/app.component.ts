import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompanyFormComponent } from "./component/company-form/company-form.component";
import { companyB12, companyB12History } from "./util/business/data-mock";
import { NonNullableFormBuilder, ReactiveFormsModule } from "@angular/forms";
import { Client } from "./util/business/dtos";
import { FormGroupFor } from "./util/business/form-util";
import { ClientFormComponent } from "./component/client-form/client-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyFormComponent, ClientFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DRY code with Angular and TypeScript';

  protected readonly companyB12 = companyB12;
  protected readonly companyB12History = companyB12History;

  private client1: Client = {
    name: 'Client 1',
    code: 'C1',
    address: undefined,
  }

  private client2: Client = {
    name: 'Client 2',
    code: 'C2',
    address: undefined,
  }

  protected formGroup: FormGroupFor<{
    client1: Client,
    client2: Client,
  }> = this.formBuilder.group({
      client1: this.formBuilder.control(this.client1),
      client2: this.formBuilder.control(this.client2),
    }
  );

  constructor(private formBuilder: NonNullableFormBuilder) {}

}
