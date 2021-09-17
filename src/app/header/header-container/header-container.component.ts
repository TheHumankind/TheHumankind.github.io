import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadItems } from 'src/app/store/store.action';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent {

  constructor(public store: Store) {
  }

}
