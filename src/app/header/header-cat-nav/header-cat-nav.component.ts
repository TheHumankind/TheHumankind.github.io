import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-header-cat-nav',
  templateUrl: './header-cat-nav.component.html',
  styleUrls: ['./header-cat-nav.component.scss']
})
export class HeaderCatNavComponent {

  cat$: Observable<Categories[]>

  constructor(public store: Store) {
    this.cat$ = this.store.select(StoreState.categories);
  }
}
