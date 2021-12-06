import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarCatalogService } from './car-catalog.service';
import { CarListFilter, LotShort } from './domain';

@Component({
  selector: 'app-car-catalog',
  templateUrl: './car-catalog.component.html',
  styleUrls: ['./car-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCatalogComponent implements OnInit {
  public items: Observable<{ list: LotShort[]; pages: number }>;
  public selectedPage: number;
  public filter: CarListFilter;

  constructor(private carCatalogService: CarCatalogService) {}

  ngOnInit() {
    this.getCatalogList();
  }

  public getCatalogList() {
    this.items = this.carCatalogService.getCatalogList();
  }
}
