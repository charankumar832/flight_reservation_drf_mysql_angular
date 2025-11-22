import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerFlightComponent } from './passenger-flight.component';

describe('PassengerFlightComponent', () => {
  let component: PassengerFlightComponent;
  let fixture: ComponentFixture<PassengerFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerFlightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassengerFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
