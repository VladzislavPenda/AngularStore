import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { Lot } from './domain';

@Component({
  selector: 'app-car-catalog',
  templateUrl: './car-catalog.component.html',
  styleUrls: ['./car-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCatalogComponent implements OnInit {
  public items: Observable<Lot[]>;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    // this.backendService.shop.getPagedModels$().subscribe((e) => console.log(e));
    this.items = this.backendService.shop.getPagedModels$();
    this.backendService.file
      .downloadProductImage$('ac4f93f8-9756-4a04-9e97-fae5f2aa61b1')
      .subscribe((e) => console.log(e));
  }
}
