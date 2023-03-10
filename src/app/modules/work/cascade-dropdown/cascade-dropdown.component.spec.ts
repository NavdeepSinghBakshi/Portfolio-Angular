import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeDropdownComponent } from './cascade-dropdown.component';

describe('CascadeDropdownComponent', () => {
  let component: CascadeDropdownComponent;
  let fixture: ComponentFixture<CascadeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadeDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
