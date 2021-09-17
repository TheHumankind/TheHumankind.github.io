import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { UserToken } from '../models/userToken';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`https://angular-shops.herokuapp.com/categories`);
  }

  getGoods() {
    return this.http.get(`https://angular-shops.herokuapp.com/goods`);
  }

  getGoodsFromPage(pageNumber: number, category: string, subcategory: string) {
    return this.http.get(`https://angular-shops.herokuapp.com/goods/category/${category}/${subcategory}?start=${pageNumber}&count=10`);
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
    this.http.post(`https:/angular-shops.herokuapp.com/users/favorites`, data, { 
      headers: new HttpHeaders({
        'Authorization': `Bearer ${userToken}`,
      })
    }).subscribe((res) => {
      console.log(res);
    })
  }

  getOneGood(id: string) {
    return this.http.get(`https://angular-shops.herokuapp.com/goods/item/${id}`);
  }

}
