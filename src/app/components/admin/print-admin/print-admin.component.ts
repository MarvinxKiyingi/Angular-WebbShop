import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-print-admin',
  templateUrl: './print-admin.component.html',
  styleUrls: ['./print-admin.component.scss'],
})
export class PrintAdminComponent implements OnInit {
  @Input() adminItem: Order;
  constructor() {}

  ngOnInit(): void {}
}
