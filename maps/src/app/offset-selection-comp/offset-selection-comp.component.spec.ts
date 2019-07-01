import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetSelectionCompComponent } from './offset-selection-comp.component';

describe('OffsetSelectionCompComponent', () => {
  let component: OffsetSelectionCompComponent;
  let fixture: ComponentFixture<OffsetSelectionCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetSelectionCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetSelectionCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
