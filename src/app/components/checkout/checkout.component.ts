import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie';
import { Order } from 'src/app/model/order';
import { CartService } from 'src/app/service/cart/cart.service';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartItems: Movie[] = [];
  totalAmount: number;

  userFrom = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    adress: [''],
    postCode: [''],
    phoneNumber: [''],
    email: [''],
    paymentMethod: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.carts$.subscribe((data) => {
      this.cartItems = data;
    });

    this.cartService.getCartItems();
    this.totalAmount = this.cartService.getTotalAmount();
  }

  onSubmit(): void {
    let firstName = this.userFrom.value.firstName;
    let paymentMethod = this.userFrom.value.paymentMethod;
    this.orderService
      .createOrder(firstName, paymentMethod)
      .subscribe((data: Order) => {
        this.orderService.clearCart();
        this.router.navigate(['confirmation']);
      });
  }
}
