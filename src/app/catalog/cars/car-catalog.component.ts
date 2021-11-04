import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.items = this.backendService.shop.getPagedModels$();
  }
}
