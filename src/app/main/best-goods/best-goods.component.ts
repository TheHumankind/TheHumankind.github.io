import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-best-goods',
  templateUrl: './best-goods.component.html',
  styleUrls: ['./best-goods.component.scss']
})
export class BestGoodsComponent {

  popular$: Observable<[GoodsItem[]]>;

  constructor(public store: Store) {
    this.popular$ = this.store.select(StoreState.popularItems);
  }

}
