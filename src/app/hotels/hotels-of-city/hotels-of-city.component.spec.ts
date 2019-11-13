import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsOfCityComponent } from './hotels-of-city.component';

describe('HotelsOfCityComponent', () => {
  let component: HotelsOfCityComponent;
  let fixture: ComponentFixture<HotelsOfCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsOfCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsOfCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
