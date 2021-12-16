import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { BusketService } from './busket.service';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.scss'],
})
export class BusketComponent implements OnInit {
  constructor(private service: BusketService) {}

  ngOnInit() {}

  private getLotsFromCart() {
    const data = localStorage.getItem('CART_LOT_IDS');
    return data ? JSON.parse(data) : [];
  }
}
