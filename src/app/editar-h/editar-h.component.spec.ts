import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHComponent } from './editar-h.component';

describe('EditarHComponent', () => {
  let component: EditarHComponent;
  let fixture: ComponentFixture<EditarHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
