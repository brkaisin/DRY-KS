import { Change, HistoryOf } from "../util/business/history-util";
import { Directive, Input, OnInit } from "@angular/core";
import { FormGroupFor } from "../util/business/form-util";

@Directive()
class HistoryManager<T, HistoryType extends HistoryOf<T>> implements OnInit {
  @Input() currentValue!: T;
  @Input() history!: HistoryType;

  private changes: Array<Change<unknown>> = [];

  protected formGroup: FormGroupFor<T>;

  ngOnInit(): void {
    this.patchValueInForm(this.currentValue);
    this.changes = this.extractChanges(this.history);
  }

  private patchValueInForm(entity: T): void {
    this.formGroup.patchValue(entity);
  }

  constructor(protected extractChanges: (_: HistoryType) => Array<Change<unknown>>) {

  }


}
