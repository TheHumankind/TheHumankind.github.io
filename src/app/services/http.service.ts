import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`http://localhost:3004/categories`)
  }

  getGoods() {
    return this.http.get(`http://localhost:3004/goods`)
  }

  getGoodsFromPage(pageNumber: number, category: string, subcategory: string) {
    return this.http.get(`http://localhost:3004/goods/category/${category}/${subcategory}?start=${pageNumber}&count=9`)
  }
}
