import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ChangePasswordComponent } from './components/admin-change-password/change-password.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AdminAddFoodComponent } from './components/admin-add-food/admin-add-food.component';
import { AdminAllFoodsComponent } from './components/admin-all-foods/admin-all-foods.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },

  { path: 'admin-login', component: AdminLoginComponent },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    children: [
      {path: '', component: AdminAllFoodsComponent},
      { path: 'all-foods', component: AdminAllFoodsComponent },
      { path: 'add-food', component: AdminAddFoodComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ],
  },

  // canActivate: [AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
