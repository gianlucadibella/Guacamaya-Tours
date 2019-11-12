import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHabsComponent } from './editar-habs.component';

describe('EditarHabsComponent', () => {
  let component: EditarHabsComponent;
  let fixture: ComponentFixture<EditarHabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarHabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
