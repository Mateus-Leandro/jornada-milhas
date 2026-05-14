import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPassagem } from './card-passagem';

describe('CardPassagem', () => {
  let component: CardPassagem;
  let fixture: ComponentFixture<CardPassagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPassagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPassagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
