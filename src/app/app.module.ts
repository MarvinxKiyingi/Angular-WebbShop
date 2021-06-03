import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movies/movie/movie.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { MovieSpecificsComponent } from './components/movies/movie-specifics/movie-specifics.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    NavbarComponent,
    FooterComponent,
    CartComponent,
    MovieSpecificsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
