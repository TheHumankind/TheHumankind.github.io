import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGoodComponent } from './about-good.component';

describe('AboutGoodComponent', () => {
  let component: AboutGoodComponent;
  let fixture: ComponentFixture<AboutGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
