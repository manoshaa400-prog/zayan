import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navbar } from './navbar';

describe('Navbar', () => {
  let component: navbar;
  let fixture: ComponentFixture<navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
