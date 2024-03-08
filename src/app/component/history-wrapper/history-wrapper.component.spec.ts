import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWrapperComponent } from './history-wrapper.component';

describe('HistoryWrapperComponent', () => {
  let component: HistoryWrapperComponent;
  let fixture: ComponentFixture<HistoryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
