import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { Observable } from 'rxjs';
import { Lot } from '../lot/domain';
import { CarCatalogService } from './car-catalog.service';
import { LotShort } from './domain';

@Component({
  selector: 'app-car-catalog-list',
  templateUrl: './car-catalog-list.component.html',
  styleUrls: ['./car-catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCatalogListComponent implements OnInit {
  @Input() public items: Observable<{ list: Lot[]; pages: number }>;
  @Input() public selectedPage: number;
  @Output() getCatalogList = new EventEmitter<void>();
  @Output() changeSelectedPage = new EventEmitter<number>();

  constructor(private router: Router) {}

  public ngOnInit() {}

  public selectPage(pageNumber: number) {
    this.changeSelectedPage.emit(pageNumber);
  }

  public getArray(arrLength: number) {
    return new Array(arrLength);
  }

  public openLot(lotId: string) {
    this.router.navigateByUrl(`catalog/${lotId}`);
  }
}
