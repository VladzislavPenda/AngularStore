import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderList } from '../../domain';
import { OrdersManagementService } from './orders-management.service';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.scss'],
  providers: [OrdersManagementService],
})
export class OrdersManagementComponent implements OnInit {
  public ordersList: Observable<OrderList[]>;

  constructor(private ordersService: OrdersManagementService) {}

  ngOnInit() {
    this.ordersList = this.ordersService.getOrders();
    this.ordersService.getOrders().subscribe((e) => console.log(e));
  }
}
