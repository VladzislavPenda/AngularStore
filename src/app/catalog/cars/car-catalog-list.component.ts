import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from './domain';

@Component({
  selector: 'app-car-catalog-list',
  templateUrl: './car-catalog-list.component.html',
  styleUrls: ['./car-catalog-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCatalogListComponent implements OnInit {
  @Input() public items: Observable<Lot[]>;
  constructor() {}

  ngOnInit() {}
}
