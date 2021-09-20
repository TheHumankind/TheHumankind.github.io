import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { BestGoodsComponent } from './best-goods/best-goods.component';
import { ContainerComponent } from './container/container.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageItemComponent } from './page-item/page-item.component';
import { AboutGoodComponent } from './about-good/about-good.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BasketComponent } from './basket/basket.component';
import { WaitListComponent } from './wait-list/wait-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    BestGoodsComponent,
    ContainerComponent,
    CategoryPageComponent,
    PageContainerComponent,
    PageItemComponent,
    AboutGoodComponent,
    LoginComponent,
    FavoritesComponent,
    BasketComponent,
    WaitListComponent,
  ],
  imports: [
    MatCarouselModule.forRoot(),
    FormsModule,
    CommonModule
  ],
  exports: [
    HomeComponent,
    SliderComponent,
    BestGoodsComponent,
    ContainerComponent,
    LoginComponent,
    FavoritesComponent,
    BasketComponent
  ]
})
export class MainModule { }
