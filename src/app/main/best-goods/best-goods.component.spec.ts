import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestGoodsComponent } from './best-goods.component';

describe('BestGoodsComponent', () => {
  let component: BestGoodsComponent;
  let fixture: ComponentFixture<BestGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestGoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
