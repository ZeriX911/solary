import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarMapComponent } from './solar-map.component';

describe('SolarMapComponent', () => {
  let component: SolarMapComponent;
  let fixture: ComponentFixture<SolarMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
