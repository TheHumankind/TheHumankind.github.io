import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GoodsItem } from 'src/app/models/goodsItem';
import { HttpService } from 'src/app/services/http.service';
import { CountManage, DeleteFromCart } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  time: string;

  timeStat: boolean = true;

  fio: string;

  fioStat: boolean = true;

  phone: string;

  phoneStat: boolean = true;

  date: string;

  dateStat: boolean = true;

  comment: string;

  adress: string;

  adressStat: boolean = true;

  cartItems$: Observable<GoodsItem[]>

  totalPrice$: Observable<number>

  constructor(public store: Store, public http: HttpService) { 
    this.cartItems$ = this.store.select(StoreState.cartItems);
    this.totalPrice$ = this.store.select(StoreState.total);
    this.time = '';
    this.fio = '';
    this.phone = '';
    this.date = '';
    this.comment = '';
    this.adress = '';
  }

  changeFIO() {
    if(this.fio.length > 2 && this.fio.length < 51) {
      this.fioStat = false;
    } else {
      this.fioStat = true;
    }
  }

  changeAdress() {
    if(this.adress.length > 2 && this.adress.length < 250) {
      this.adressStat = false;
    } else {
      this.adressStat = true;
    }
  }

  changePhone() {
    if(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(this.phone)) {
      this.phoneStat = false;
      if(this.phone[0] !== '+') {
        this.phone = `+${this.phone}`;
      }
    } else {
      this.phoneStat = true;
    }
  }

  changeDate() {
    const date = new Date();
    const userDate = new Date(this.date);
    if (userDate > date) {
      this.dateStat = false;
    } else {
      this.dateStat = true;
    }
  }

  changeTime() {
    const mDate = new Date();
    const eDate = new Date();
    mDate.setHours(10);
    eDate.setHours(23);
    console.log(+this.time.split(':')[0]);
    if (+this.time.split(':')[0] >= mDate.getHours() && +this.time.split(':')[0] <= eDate.getHours()) {
      this.timeStat = false;
    } else {
      this.timeStat = true;
    }
  }

  checkIsValue(id: string, sign: boolean) {
    this.store.dispatch([
      new CountManage(id, sign)
    ])
  }

  deleteFromCart(id: string) {
    this.http.deleteFromCart(id);
    this.store.dispatch([
      new DeleteFromCart(id)
    ])
  }
}
