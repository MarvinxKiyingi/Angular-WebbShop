import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from 'src/app/model/Movie';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Movie[] = [];
  private carts = new Subject<Movie[]>();
  carts$ = this.carts.asObservable();

  constructor() {}
  addToCart(theSelectedMovie: Movie): void {
    if (JSON.parse(sessionStorage.getItem('Cart'))) {
      let getCart: [] = JSON.parse(sessionStorage.getItem('Cart'));
      let updatedCart = [...getCart, theSelectedMovie];
      sessionStorage.setItem('Cart', JSON.stringify(updatedCart));
    } else {
      this.cart.push(theSelectedMovie);
      sessionStorage.setItem('Cart', JSON.stringify(this.cart));
    }
  }

  getCartItems(): void {
    if (!sessionStorage.getItem('Cart')) {
      sessionStorage.setItem('Cart', JSON.stringify(this.cart));
    } else {
      this.carts.next(JSON.parse(sessionStorage.getItem('Cart')));
      this.cart = JSON.parse(sessionStorage.getItem('Cart'));
    }
  }

  removeCartItem(rMovie: Movie): void {
    let cartItems: Movie[] = JSON.parse(sessionStorage.getItem('Cart'));
    for (let position = 0; position < cartItems.length; position++) {
      if (cartItems[position].id === rMovie.id) {
        cartItems.splice(position, 1);
        sessionStorage.setItem('Cart', JSON.stringify(cartItems));
        this.carts.next(cartItems);
      }
    }
  }

  getTotalAmount(): number {
    let cartItems = JSON.parse(sessionStorage.getItem('Cart'));

    let sum = cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);
    return sum;
  }
}
