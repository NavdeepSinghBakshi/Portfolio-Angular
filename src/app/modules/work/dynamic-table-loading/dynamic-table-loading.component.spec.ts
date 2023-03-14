import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableLoadingComponent } from './dynamic-table-loading.component';

describe('DynamicTableLoadingComponent', () => {
  let component: DynamicTableLoadingComponent;
  let fixture: ComponentFixture<DynamicTableLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTableLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
