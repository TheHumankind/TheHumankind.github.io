import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { HeaderCatNavComponent } from './header-cat-nav/header-cat-nav.component';
import { BigMenuComponent } from './big-menu/big-menu.component';


@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderNavComponent,
    HeaderInfoComponent,
    HeaderCatNavComponent,
    BigMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderContainerComponent,
    HeaderNavComponent,
    HeaderInfoComponent,
    HeaderCatNavComponent,
    BigMenuComponent
  ]
})
export class HeaderModule { }
