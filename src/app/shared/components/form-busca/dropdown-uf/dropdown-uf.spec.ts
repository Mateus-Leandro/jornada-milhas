import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownUf } from './dropdown-uf';

describe('DropdownUf', () => {
  let component: DropdownUf;
  let fixture: ComponentFixture<DropdownUf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownUf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownUf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
