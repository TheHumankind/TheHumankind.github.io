import { ChangeDetectorRef, Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { HttpService } from 'src/app/services/http.service';
import { IsInCart, IsInFavor, LoadItems, UploadCurrentPage } from 'src/app/store/store.action';
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

  img: string;

  constructor(public store: Store, public router: Router, public http: HttpService) { 
    this.pageItem$ = this.store.select(StoreState.currentPageItem);
    this.currentCat$ = this.store.select(StoreState.currentCategoryName);
    this.currentSubCat$ = this.store.select(StoreState.currentSubCatName);
    this.img = '../../../assets/unknow-img.png';
  }

  ngOnInit() {
    this.pageItem$ = this.store.select(StoreState.currentPageItem);
  }

  backToCat(category: string, subCategory: string) {
    this.router.navigate(['categories']);
    this.store.dispatch([
      new UploadCurrentPage(0, category, subCategory)
    ])
  }

  backToLead() {
    this.router.navigate(['']);
  }

  changeBigImg(image: string) {
      this.img = image;
  }

  isFavor(item: GoodsItem, id: string, isFavorite: boolean) {
    const token = window.localStorage.getItem('userToken');

    if(!token) {
      alert('Зарегайся, братан');
      return;
    } 

    if(isFavorite === false) {
      this.http.postUserFavor(id, token);
    } else {
      this.http.deleteFavor(id);
    }
    
    this.store.dispatch([
      new IsInFavor(item)
    ])
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

  isBasket(item: GoodsItem, id: string, isInCart: boolean) {
    const token = window.localStorage.getItem('userToken');
    console.log('click');
    console.log(isInCart);
    if(!token) {
      alert('Зарегайся, братан');
      return;
    } 

    if(isInCart === false) {
      this.http.postUserCart(id);
    } else {
      this.http.deleteFromCart(id);
    }
    this.store.dispatch([
      new IsInCart(item)
    ])
  }

}
