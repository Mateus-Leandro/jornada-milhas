import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosComplementares } from './filtros-complementares';

describe('FiltrosComplementares', () => {
  let component: FiltrosComplementares;
  let fixture: ComponentFixture<FiltrosComplementares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltrosComplementares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosComplementares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
