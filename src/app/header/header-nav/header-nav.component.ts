import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadItems } from 'src/app/store/store.action';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  accountMenu = false;

  basketMenu = false;

  constructor(public store: Store) { }

  switchAccount(event: Event) {
    if (event.type === 'mouseleave' && this.accountMenu === false) {
      return;
    }
    this.accountMenu = !this.accountMenu;
  }

  switchBasket(event: Event) {
    if (event.type === 'mouseleave' && this.basketMenu === false) {
      return;
    }
    this.basketMenu = !this.basketMenu;
  }
}
