import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { HttpService } from './services/http.service';
import { LoadItems, SelectedCategory } from './store/store.action';
import { StoreState } from './store/store.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ang-shop';

  constructor(public httpService: HttpService, public store: Store, public router: Router) {
  }

  ngOnInit() {
    if (this.store.selectSnapshot(StoreState.currentCategoryName) === '') {
      this.router.navigate(['login']);
    }
    this.store.dispatch([
      new LoadItems(),
      new SelectedCategory('appliances')
    ]);
  }
}
