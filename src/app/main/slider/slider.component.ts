import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  
  slideItems$: Observable<GoodsItem[]>

  constructor(public store: Store) {
    this.slideItems$ = this.store.select(StoreState.mainSlider);
  }

  newPrice(price: number) {
    return Math.floor(price - (price * 0.05));
  }

  checkUrl(url: string) {
    let result = '';
    if (!url) {
      result = '../../../assets/unknow-img.png';
    } else {
      result = url;
    }
    return result;
  }

}
