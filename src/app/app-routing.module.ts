import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieSpecificsComponent } from './components/movie-specifics/movie-specifics.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieSpecificsComponent },
  { path: 'shoppingcart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
