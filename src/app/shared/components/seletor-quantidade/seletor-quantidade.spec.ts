import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorQuantidade } from './seletor-quantidade';

describe('SeletorQuantidade', () => {
  let component: SeletorQuantidade;
  let fixture: ComponentFixture<SeletorQuantidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeletorQuantidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorQuantidade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
