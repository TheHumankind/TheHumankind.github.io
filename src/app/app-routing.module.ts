import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './main/basket/basket.component';
import { CategoryPageComponent } from './main/category-page/category-page.component';
import { FavoritesComponent } from './main/favorites/favorites.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login.component';
import { PageItemComponent } from './main/page-item/page-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoryPageComponent },
  { path: 'categories/:id', component: PageItemComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'main', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
