import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-catalog-header',
  templateUrl: './car-catalog-header.component.html',
  styleUrls: ['./car-catalog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCatalogHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
