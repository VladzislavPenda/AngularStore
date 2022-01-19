import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from 'src/app/catalog/lot/domain';
import { BusketService } from './busket.service';

@Component({
  selector: 'app-busket',
  templateUrl: './busket.component.html',
  styleUrls: ['./busket.component.scss'],
  providers: [BusketService],
})
export class BusketComponent implements OnInit {
  public busketLots$: Observable<Lot[] | undefined>;
  constructor(private service: BusketService) {
    const ids = this.getLotsFromCart();
    this.service.loadLots;
  }

  ngOnInit() {
    this.loadLots();
  }

  //todo Refactor with hot subscribing
  public loadLots() {
    this.busketLots$ = this.service.loadLots();
  }

  public clearCart() {
    this.service.setCart([]);
    this.loadLots();
  }

  public deleteLotFromCart(id: string) {
    this.service.deleteLotFromCart(id);
    this.loadLots();
  }

  private getLotsFromCart() {
    return this.service.getLotsFromBusket();
  }
}
