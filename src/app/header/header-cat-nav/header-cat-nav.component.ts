import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories';
import { SubCategories } from 'src/app/models/subCategories';
import { SelectCat, SelectedCategory } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-header-cat-nav',
  templateUrl: './header-cat-nav.component.html',
  styleUrls: ['./header-cat-nav.component.scss']
})
export class HeaderCatNavComponent {

  cat$: Observable<Categories[]>

  constructor(public store: Store, public router: Router) {
    this.cat$ = this.store.select(StoreState.categories);
  }

  toSubCat(id: string) {
    this.router.navigate(['cat-menu']);
    this.store.dispatch([
      new SelectedCategory(id),
      new SelectCat(id)
    ]);
  }
}
