import { coerceStringArray } from '@angular/cdk/coercion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Store } from '@ngxs/store';
import { Item, Order } from '../models/order';
import { StoreState } from '../store/store.state';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient, private store: Store) { }

  getCategories() {
    return this.http.get(`https://angular-shops.herokuapp.com/categories`);
  }

  getGoods() {
    return this.http.get(`https://angular-shops.herokuapp.com/goods`);
  }

  getGoodsFromPage(pageNumber: number, category: string, subcategory: string) {
    const userToken = window.localStorage.getItem('userToken');
    return this.http.get(`https://angular-shops.herokuapp.com/goods/category/${category}/${subcategory}?start=${pageNumber}&count=10`, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      })
    });
  }

  getUserToken(login: string, password: string) {
    const data = {
      login: login,
      password: password
    };
    return this.http.post(`https://angular-shops.herokuapp.com/users/login`, data);
  }

  getUserInfo(token: string) {
    const params = { 
      token: token
    }
    return this.http.get(`https://angular-shops.herokuapp.com/users/`, {params});
  }

  postUserFavor(id: string, userToken: string) {
    const data = {
      id: id
    }
    this.http.post(`https://angular-shops.herokuapp.com/users/favorites`, data, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      }),
    }).subscribe((res) => {
    })
  }

  deleteFavor(id: string) {
    const userToken = window.localStorage.getItem('userToken');
    const data = {
      id: id
    }
    return this.http.delete(`https://angular-shops.herokuapp.com/users/favorites?id=${data.id}`, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      })
    }).subscribe((res) => {
    })
  }

  getOneGood(id: string) {
    const userToken = window.localStorage.getItem('userToken');
    return this.http.get(`https://angular-shops.herokuapp.com/goods/item/${id}`, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      })
    });
  }

  postUserCart(id: string) {
    const userToken = window.localStorage.getItem('userToken');
    const data = {
      id: id
    }
    return this.http.post(`https://angular-shops.herokuapp.com/users/cart`, data, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      })
    }).subscribe((res) => {
    })
  }

  deleteFromCart(id: string) {
    const userToken = window.localStorage.getItem('userToken');
    const data = {
      id: id
    }
    return this.http.delete(`https://angular-shops.herokuapp.com/users/cart?id=${data.id}`, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      })
    }).subscribe((res) => {
    })
  }

  sendOrder(name: string, adr: string, phone: string, time: string, comment: string) {
    const userToken = window.localStorage.getItem('userToken');
    const orderData: Order = {
      id: '',
      items: [],
      details: {
        name: name,
        address: adr, 
        phone: phone,
        timeToDeliver: time,
        comment: comment
      }
    }
    const goodsToOrder = this.store.selectSnapshot(StoreState.cartItems);
    goodsToOrder.forEach((e) => {
      if(e.value) {
        const orderItem: Item = {
          id: e.id,
          amount: e.value
        }
        orderData.items.push(orderItem);
      }
    })
    return this.http.post(`https://angular-shops.herokuapp.com/users/order`, orderData, { 
      responseType: 'text',
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      })
    }).subscribe((res) => {
    });
  }

  search(text: string) {
    const userToken = window.localStorage.getItem('userToken');
    return this.http.get(`https://angular-shops.herokuapp.com/goods/search?text=${text}`, { 
      responseType: 'text',
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      })
    });
  }

  removeOrder(id: string) {
    const userToken = window.localStorage.getItem('userToken');
    return this.http.delete(`https://angular-shops.herokuapp.com/users/order?id=${id}`, { 
      responseType: 'text',
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json',
      })
    }).subscribe((res) => {
    });
  }

  register(login: string, password: string, name: string, sName: string) {
    const data = {
      firstName: name,
      lastName: sName,
      login: login,
      password: password
    }
    return this.http.post(`https://angular-shops.herokuapp.com/users/register`, data, { 
    }).subscribe((res) => {
    })
  }

}
