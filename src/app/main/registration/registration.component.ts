import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/userData';
import { HttpService } from 'src/app/services/http.service';
import { GetUserData, LoginUser } from 'src/app/store/store.action';
import { StoreState } from 'src/app/store/store.state';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  
  login: string;

  password: string;

  name: string;

  secondName: string;

  passwordCheck: string;

  passStat: boolean = true;

  logStat: boolean = true;

  userData$: Observable<UserData>;

  constructor(public store: Store, public router: Router, public http: HttpService) { 
    this.userData$ = this.store.select(StoreState.selectUserData);
    this.login = '';
    this.password = '';
    this.passwordCheck = '';
    this.secondName = '';
    this.name = '';
  }

  inputLogin() {
    if(this.login.length > 3) {
      this.logStat = false;
    } else {
      this.logStat = true;
    }
  }

  inputPassword() {
    if(this.password === this.passwordCheck && this.password.length > 3) {
      this.passStat = false;
    } else {
      this.passStat = true;
    }
  }

  toLogIn() {
    this.router.navigate(['login']);
  }

  click() {
    if(this.passStat === false && this.logStat === false) {
      this.http.register(this.login, this.password, this.name, this.secondName);
      this.router.navigate(['login']);
    } else {
      alert('Братан, чекни данные');
    }
  }
}
