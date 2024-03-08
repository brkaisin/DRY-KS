import { Change, HistoryOf } from "../util/business/history-util";
import { Directive, Input, OnInit } from "@angular/core";
import { FormGroupFor } from "../util/business/form-util";

@Directive()
export abstract class HistoryManager<T, HistoryType extends HistoryOf<T>> implements OnInit {
  @Input() currentValue!: T;
  @Input() history!: HistoryType;

  protected changes!: Array<Change<unknown>>;

  protected abstract formGroup: FormGroupFor<T>;

  protected constructor(protected extractChanges: (history: HistoryType) => Array<Change<unknown>>) {}

  public ngOnInit(): void {
    if (!this.history) {
      throw new Error('history is required for HistoryManager');
    }

    if (!this.currentValue) {
      throw new Error('currentValue is required for HistoryManager');
    }

    this.patchValueInForm(this.currentValue);
    this.changes = this.extractChanges(this.history);
  }

  protected patchValueInForm(value: T): void {
    this.formGroup.patchValue(value as any); // todo: better typing to avoid this awful cast
  }
}

