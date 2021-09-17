import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LoadItems, SelectedCategory } from 'src/app/store/store.action';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent {

  accountMenu = false;

  basketMenu = false;

  bigMenu = false;

  constructor(public store: Store, public router: Router) { }

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

  bigVisibleMenu(event: Event) {
    if(event.type === 'mouseleave' && this.bigMenu === false) {
      return;
    }
    this.bigMenu = !this.bigMenu;
  }

  toLogin() {
    console.log('click');
    this.router.navigate(['login']);
  }
}
