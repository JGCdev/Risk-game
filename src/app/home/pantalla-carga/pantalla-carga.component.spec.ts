import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCargaComponent } from './pantalla-carga.component';

describe('PantallaCargaComponent', () => {
  let component: PantallaCargaComponent;
  let fixture: ComponentFixture<PantallaCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantallaCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
