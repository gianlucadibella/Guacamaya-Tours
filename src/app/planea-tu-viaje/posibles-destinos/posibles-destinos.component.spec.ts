import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosiblesDestinosComponent } from './posibles-destinos.component';

describe('PosiblesDestinosComponent', () => {
  let component: PosiblesDestinosComponent;
  let fixture: ComponentFixture<PosiblesDestinosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosiblesDestinosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosiblesDestinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
