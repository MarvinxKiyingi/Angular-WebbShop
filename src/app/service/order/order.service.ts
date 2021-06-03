import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/model/Movie';
import { Order, orderItem } from 'src/app/model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  oders = new Subject<Order>();
  orders$ = this.oders.asObservable();
  cartItems: Movie[] = [];
  constructor(private http: HttpClient) {}

  createOrder(firstName: string, paymentMethod: string): Observable<Order> {
    this.cartItems = JSON.parse(sessionStorage.getItem('Cart'));
    let date = new Date();
    let totalSumInCart = this.cartItems.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price;
    }, 0);

    let orderRows = [];

    for (let i = 0; i < this.cartItems.length; i++) {
      const orderInfo = new orderItem(this.cartItems[i].id);
      orderRows.push(orderInfo);
    }

    let newOrder = new Order(date, firstName, paymentMethod, totalSumInCart, [
      ...orderRows,
    ]);
    return this.sendOrder(newOrder);
  }

  sendOrder(newOrder: Order) {
    return this.http.post<Order>(
      'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
      newOrder
    );
  }

  clearCart(): void {
    sessionStorage.removeItem('Cart');
  }
}
