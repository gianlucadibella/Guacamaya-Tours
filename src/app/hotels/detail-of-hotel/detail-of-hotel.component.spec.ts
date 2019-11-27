import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfHotelComponent } from './detail-of-hotel.component';

describe('DetailOfHotelComponent', () => {
  let component: DetailOfHotelComponent;
  let fixture: ComponentFixture<DetailOfHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOfHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
