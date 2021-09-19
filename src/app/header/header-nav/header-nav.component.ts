import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/userData';
import { GetUserData, LoadItems, SelectedCategory, SetCountOfGoods } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  accountMenu = false;

  basketMenu = false;

  bigMenu = false;

  userData$: Observable<UserData>;

  constructor(public store: Store, public router: Router) { 
    this.userData$ = this.store.select(StoreState.selectUserData);
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
}
