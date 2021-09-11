import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent {

  paymentTrigger = false;

  contactTrigger = false;

  constructor() { }

  showPayment() {
    if(this.contactTrigger) {
      this.contactTrigger = !this.contactTrigger;
    }
    this.paymentTrigger = !this.paymentTrigger;
  }

  showContacts() {
    if(this.paymentTrigger) {
      this.paymentTrigger = !this.paymentTrigger;
    }
    this.contactTrigger = !this.contactTrigger;
  }

}
