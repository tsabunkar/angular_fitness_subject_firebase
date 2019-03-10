import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FidgetSpinnerComponent } from './fidget-spinner.component';

describe('FidgetSpinnerComponent', () => {
  let component: FidgetSpinnerComponent;
  let fixture: ComponentFixture<FidgetSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidgetSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FidgetSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
