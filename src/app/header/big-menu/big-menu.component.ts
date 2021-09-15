import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories';
import { StoreState } from 'src/app/store/store.state';
import { ResetPages, SelectedCategory, UploadCurrentPage } from 'src/app/store/store.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-menu',
  templateUrl: './big-menu.component.html',
  styleUrls: ['./big-menu.component.scss']
})
export class BigMenuComponent implements OnInit {

  categories$: Observable<Categories[]>

  sel: Categories;

  constructor(public store: Store, public router: Router) { 
    this.categories$ = this.store.select(StoreState.categories);
    this.sel = this.store.selectSnapshot(StoreState.selectCategory);
    this.store.dispatch([
      new UploadCurrentPage(0, 'appliances', 'refrigerators'),
    ])
  }

  ngOnInit() {
    setTimeout(() => {
      this.sel = this.store.selectSnapshot(StoreState.selectCategory);
    }, 550)
  }

  select(id: string) {
    this.store.dispatch([
      new SelectedCategory(id)
    ]);
    this.sel = this.store.selectSnapshot(StoreState.selectCategory);
  }

  toCategory(subCat: string) {
    const clickObject = this.store.selectSnapshot(StoreState.selectCategory);
    this.router.navigate(['categories'])
    this.store.dispatch([
      new ResetPages(),
      new UploadCurrentPage(0, clickObject.id, subCat),
    ])
  }
}
