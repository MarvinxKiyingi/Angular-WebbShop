import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieSpecificsComponent } from './components/movie-specifics/movie-specifics.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieSpecificsComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: OrderConfirmationComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
