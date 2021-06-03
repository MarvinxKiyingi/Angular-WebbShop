import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Movie[] = [];
  totalAmount: number;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.carts$.subscribe((data) => {
      this.cartItems = data;
    });
    this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }
  redirectToCheckout(): void {
    this.router.navigate(['checkout']);
  }
}
