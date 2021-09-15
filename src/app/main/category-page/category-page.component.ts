import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { CurrentGood, UploadMore } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent {

  greenColor = '#2d635b';

  yellowColor = '#ebdf52';

  redColor = '#b31e15';

  blackColor = 'rgb(29, 29, 29)';
  
  activeLinkStyle = 'overline';

  currentGoods$: Observable<GoodsItem[]>;

  currentCat$: Observable<string>;

  currentSubCat$: Observable<string>;

  constructor(public store: Store, public router: Router) { 
    this.currentGoods$ = this.store.select(StoreState.pageData);
    this.currentCat$ = this.store.select(StoreState.currentCategoryName);
    this.currentSubCat$ = this.store.select(StoreState.currentSubCatName);
  }  

  firstStar(rating: number) {
    if (rating >= 1) {
      return '../../../assets/star-fill.png';
    } else {
      return '../../../assets/star-empty.png';
    }
  }

  secondStar(rating: number) {
    if (rating >= 2) {
      return '../../../assets/star-fill.png';
    } else {
      return '../../../assets/star-empty.png';
    }
  }

  thirdStar(rating: number) {
    if (rating >= 3) {
      return '../../../assets/star-fill.png';
    } else {
      return '../../../assets/star-empty.png';
    }
  }

  fourStar(rating: number) {
    if (rating >= 4) {
      return '../../../assets/star-fill.png';
    } else {
      return '../../../assets/star-empty.png';
    }
  }

  fiveStar(rating: number) {
    if (rating >= 5) {
      return '../../../assets/star-fill.png';
    } else {
      return '../../../assets/star-empty.png';
    }
  }

  countOfHabar(count: number) {
    let style: string = '';
    if (count >= 20) {
      style = this.greenColor;
    } else if (count > 5 && count <= 19) {
      style = this.yellowColor;
    } else if (count <= 5) {
      style = this.redColor;
    } else if (count === 5) {
      style = this.blackColor;
    }
    return style;
  }

  avalible(count: number) {
    let message: string = '';
    if (count === 0) {
      message = 'Нет в наличии';
    } else {
      message = `Доступно к заказу ${count} штук`;
    }
    return message;
  }

  uploadMoreGoods() {
    this.store.dispatch([
      new UploadMore()
    ])
  }

  toItem(id: string, item: GoodsItem) {
    const link = `categories/${id}`;
    this.router.navigate([link]);
    this.store.dispatch([
      new CurrentGood(item)
    ])
  }
}
