import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarCatalogService } from '../cars/car-catalog.service';
import { Lot } from './domain';

@Component({
  selector: 'app-car-lot',
  templateUrl: './car-lot.component.html',
  styleUrls: ['./car-lot.component.scss'],
})
export class CarLotComponent implements OnInit {
  public lot$: Observable<Lot>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly carCatalogService: CarCatalogService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((e) => {
      const id = e.get('id');
      this.lot$ = this.carCatalogService.loadLot(id);
      this.carCatalogService.loadLot(id).subscribe((e) => console.log(e));
    });
  }

  public goBack() {
    this.router.navigateByUrl('/catalog');
  }
}
