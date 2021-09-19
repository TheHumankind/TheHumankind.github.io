import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { CurrentGood } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-best-goods',
  templateUrl: './best-goods.component.html',
  styleUrls: ['./best-goods.component.scss']
})
export class BestGoodsComponent {

  popular$: Observable<[GoodsItem[]]>;

  constructor(public store: Store, public router: Router) {
    this.popular$ = this.store.select(StoreState.popularItems);
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

  toItem(id: string, item: GoodsItem) {
    const link = `categories/${id}`;
    this.router.navigate([link]);
    this.store.dispatch([
      new CurrentGood(item)
    ])
  }

}
