import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { HistoryOf } from "../../util/business/history-util";
import { NgTemplateOutlet } from "@angular/common";

export type ColorStyle = 'border-red' | 'border-orange' | 'border-green';

@Component({
  selector: 'app-history-wrapper',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './history-wrapper.component.html',
  styleUrl: './history-wrapper.component.scss'
})
export class HistoryWrapperComponent<T, HistoryType extends HistoryOf<T>> implements OnInit {
  @Input() currentValue!: T;
  @Input() history!: HistoryType;

  @ContentChild('content', {read: TemplateRef}) content!: TemplateRef<unknown>;

  // @ContentChild(HistoryWrapperContentDirective, { read: TemplateRef })
  // content!: TemplateRef<HistoryWrapperContentTemplateContext>;

  protected colorStyle!: ColorStyle;

  private allColorStyles: Array<ColorStyle> = ['border-red', 'border-orange', 'border-green'];

  ngOnInit(): void {

    // choose random color style for now
    this.colorStyle = this.allColorStyles[Math.floor(Math.random() * 3)]!;
  }
}
