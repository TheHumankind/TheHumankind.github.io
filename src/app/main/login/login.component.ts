import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/userData';
import { GetUserData, LoginUser } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: string;

  password: string;

  userData$: Observable<UserData>;

  constructor(public store: Store) { 
    this.userData$ = this.store.select(StoreState.selectUserData);
    this.login = '';
    this.password = '';
  }

  click() {
    this.store.dispatch([
      new LoginUser(this.login, this.password),
      new GetUserData()
    ])
  }
}
