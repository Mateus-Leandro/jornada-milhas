import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Companhias } from './companhias';

describe('Companhias', () => {
  let component: Companhias;
  let fixture: ComponentFixture<Companhias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Companhias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Companhias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
