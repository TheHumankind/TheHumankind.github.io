import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories';
import { SubCategories } from 'src/app/models/subCategories';
import { ResetPages, SelectedCategory, UploadCurrentPage } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-sub-cats-page',
  templateUrl: './sub-cats-page.component.html',
  styleUrls: ['./sub-cats-page.component.scss']
})
export class SubCatsPageComponent {

  currentCatName$: Observable<string>

  currentCat$: Observable<string>

  selCat$: Observable<SubCategories[]>

  sel: Categories;

  constructor(public store: Store, public router: Router) { 
    this.currentCat$ = this.store.select(StoreState.currentCategory);
    this.currentCatName$ = this.store.select(StoreState.currentCategoryName);
    this.sel = this.store.selectSnapshot(StoreState.selectCategory);
    this.selCat$ = this.store.select(StoreState.selectSubCat);
  }

  toCategory(subCat: string) {
    const clickObject = this.store.selectSnapshot(StoreState.selectCategory);
    this.router.navigate(['categories'])
    this.store.dispatch([
      new ResetPages(),
      new UploadCurrentPage(0, clickObject.id, subCat),
    ])
  }

  toLead() {
    this.router.navigate(['main']);
  }
}
