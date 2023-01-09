import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFavourateListComponent } from './update-favourate-list.component';

describe('UpdateFavourateListComponent', () => {
  let component: UpdateFavourateListComponent;
  let fixture: ComponentFixture<UpdateFavourateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFavourateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFavourateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
