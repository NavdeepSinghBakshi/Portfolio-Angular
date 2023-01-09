import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFavourateComponent } from './update-favourate.component';

describe('UpdateFavourateComponent', () => {
  let component: UpdateFavourateComponent;
  let fixture: ComponentFixture<UpdateFavourateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFavourateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFavourateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
