import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarCatalogService } from './car-catalog.service';
import { LotShort } from './domain';

@Component({
  selector: 'app-car-catalog-list',
  templateUrl: './car-catalog-list.component.html',
  styleUrls: ['./car-catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCatalogListComponent implements OnInit {
  @Input() public items: Observable<{ list: LotShort[]; pages: number }>;
  @Output() getCatalogList = new EventEmitter<void>();

  constructor(private carService: CarCatalogService, private router: Router) {}

  public ngOnInit() {}

  public selectPage(pageNumber: number) {
    this.carService.filter.pageNumber = pageNumber;
    this.getCatalogList.emit();
  }

  public getSelectedPage() {
    return this.carService.filter.pageNumber;
  }

  public getArray(arrLength: number) {
    return new Array(arrLength);
  }

  public openLot(lotId: string) {
    this.router.navigateByUrl(`catalog/${lotId}`);
  }
}
