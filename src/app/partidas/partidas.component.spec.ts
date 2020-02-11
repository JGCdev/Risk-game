import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasComponent } from './partidas.component';

describe('PartidasComponent', () => {
  let component: PartidasComponent;
  let fixture: ComponentFixture<PartidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
