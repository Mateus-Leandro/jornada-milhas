import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSugestaoPassagem } from './card-sugestao-passagem';

describe('CardSugestaoPassagem', () => {
  let component: CardSugestaoPassagem;
  let fixture: ComponentFixture<CardSugestaoPassagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSugestaoPassagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSugestaoPassagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
