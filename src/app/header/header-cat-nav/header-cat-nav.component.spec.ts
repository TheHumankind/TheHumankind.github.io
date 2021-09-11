import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCatNavComponent } from './header-cat-nav.component';

describe('HeaderCatNavComponent', () => {
  let component: HeaderCatNavComponent;
  let fixture: ComponentFixture<HeaderCatNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCatNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
