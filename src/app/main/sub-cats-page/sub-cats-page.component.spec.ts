import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatsPageComponent } from './sub-cats-page.component';

describe('SubCatsPageComponent', () => {
  let component: SubCatsPageComponent;
  let fixture: ComponentFixture<SubCatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCatsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
