import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirSalaComponent } from './elegir-sala.component';

describe('ElegirSalaComponent', () => {
  let component: ElegirSalaComponent;
  let fixture: ComponentFixture<ElegirSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
