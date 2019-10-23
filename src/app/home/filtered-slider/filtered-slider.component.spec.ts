import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredSliderComponent } from './filtered-slider.component';

describe('FilteredSliderComponent', () => {
  let component: FilteredSliderComponent;
  let fixture: ComponentFixture<FilteredSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
