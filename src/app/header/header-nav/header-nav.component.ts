import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { UserData } from 'src/app/models/userData';
import { HttpService } from 'src/app/services/http.service';
import { CurrentGood, FindWithSearch, GetUserData, LoadItems, SelectedCategory, SetCountOfGoods } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  searchInput: string;

  calls: number;

  searchVisability: boolean;

  accountMenu = false;

  basketMenu = false;

  bigMenu = false;

  searchItems$: Observable<GoodsItem[]>

  userData$: Observable<UserData>;

  constructor(public store: Store, public router: Router, public http: HttpService) { 
    this.userData$ = this.store.select(StoreState.selectUserData);
    this.searchItems$ = this.store.select(StoreState.getSearchItems);
    this.searchVisability = false;
    this.searchInput = '';
    this.calls = 0;
  }

  switchAccount(event: Event) {
    if (event.type === 'mouseleave' && this.accountMenu === false) {
      return;
    }
    this.accountMenu = !this.accountMenu;
  }

  bigVisibleMenu(event: Event) {
    if(event.type === 'mouseleave' && this.bigMenu === false) {
      return;
    }
    this.bigMenu = !this.bigMenu;
  }

  toLogin() {
    this.router.navigate(['login']);
  }

  toFavor() {
    this.router.navigate(['favorites']);
    this.store.dispatch([
      new GetUserData()
    ])
  }

  toBasket() {
    this.router.navigate(['basket']);
    this.store.dispatch([
      new GetUserData(),
    ])
  }

  toItem(item: GoodsItem) {
    this.router.navigate([`categories/${item.id}`]);
    this.store.dispatch([
      new CurrentGood(item)
    ])
  }

  search() {
    if(this.searchInput.length > 3) {
      this.searchVisability = true;
      const value = this.searchInput;
      setTimeout(() => {
        if (value === this.searchInput) {
          this.store.dispatch([
            new FindWithSearch(value),
          ])
        }
      }, 500)
    } else {
      this.hideSearchList();
    }
  }

  hideSearchList() {
    this.searchVisability = false;
  }
}
