import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpService } from './services/http.service';
import { LoadItems, SelectedCategory } from './store/store.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ang-shop';

  constructor(public httpService: HttpService, public store: Store) {
    this.store.dispatch([
      new LoadItems(),
      new SelectedCategory('appliances')
    ]);
  }
}
