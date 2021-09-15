import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { LoadItems } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.scss']
})
export class PageItemComponent implements OnInit {

  pageItem$: Observable<GoodsItem[]>;

  currentCat$: Observable<string>;

  currentSubCat$: Observable<string>;

  constructor(public store: Store, public router: Router) { 
    this.pageItem$ = this.store.select(StoreState.currentPageItem);
    this.currentCat$ = this.store.select(StoreState.currentCategoryName);
    this.currentSubCat$ = this.store.select(StoreState.currentSubCatName);
  }

  ngOnInit() {
    this.pageItem$ = this.store.select(StoreState.currentPageItem);
  }

  backToCat() {
    this.router.navigate(['categories']);
  }

  backToLead() {
    this.router.navigate(['']);
  }

}
