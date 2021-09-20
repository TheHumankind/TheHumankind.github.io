import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order';
import { RemoveOrder } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-wait-list',
  templateUrl: './wait-list.component.html',
  styleUrls: ['./wait-list.component.scss']
})
export class WaitListComponent {

  orders$: Observable<Order[]>

  constructor(public store: Store) { 
    this.orders$ = this.store.select(StoreState.getOrders);
  }

  removeOrder(item: Order) {
    this.store.dispatch([
      new RemoveOrder(item)
    ])
  }

}
