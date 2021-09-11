import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { HeaderCatNavComponent } from './header-cat-nav/header-cat-nav.component';


@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderNavComponent,
    HeaderInfoComponent,
    HeaderCatNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderContainerComponent,
    HeaderNavComponent,
    HeaderInfoComponent,
    HeaderCatNavComponent
  ]
})
export class HeaderModule { }
