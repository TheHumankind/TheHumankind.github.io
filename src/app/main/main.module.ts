import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { BestGoodsComponent } from './best-goods/best-goods.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    BestGoodsComponent,
    ContainerComponent
  ],
  imports: [
    MatCarouselModule.forRoot(),
    CommonModule
  ],
  exports: [
    HomeComponent,
    SliderComponent,
    BestGoodsComponent,
    ContainerComponent
  ]
})
export class MainModule { }
