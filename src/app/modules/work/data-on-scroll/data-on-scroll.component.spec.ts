import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOnScrollComponent } from './data-on-scroll.component';

describe('DataOnScrollComponent', () => {
  let component: DataOnScrollComponent;
  let fixture: ComponentFixture<DataOnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataOnScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataOnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
