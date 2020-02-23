import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSalasComponent } from './lista-salas.component';

describe('ListaSalasComponent', () => {
  let component: ListaSalasComponent;
  let fixture: ComponentFixture<ListaSalasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSalasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
