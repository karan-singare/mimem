import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingMedicationComponent } from './ongoing-medication.component';

describe('OngoingMedicationComponent', () => {
  let component: OngoingMedicationComponent;
  let fixture: ComponentFixture<OngoingMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngoingMedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
