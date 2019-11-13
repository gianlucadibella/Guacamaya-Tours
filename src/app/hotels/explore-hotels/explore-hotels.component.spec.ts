import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreHotelsComponent } from './explore-hotels.component';

describe('ExploreHotelsComponent', () => {
  let component: ExploreHotelsComponent;
  let fixture: ComponentFixture<ExploreHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
