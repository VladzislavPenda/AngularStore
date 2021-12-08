import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarCatalogService } from '../cars/car-catalog.service';
import { CarLotService } from './car-lot.service';
import { Lot } from './domain';

@Component({
  selector: 'app-car-lot',
  templateUrl: './car-lot.component.html',
  styleUrls: ['./car-lot.component.scss'],
  providers: [CarLotService],
})
export class CarLotComponent implements OnInit {
  public lot$: Observable<Lot>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly service: CarLotService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((e) => {
      const id = e.get('id');
      this.lot$ = this.service.loadLot(id);
      this.service.loadLot(id).subscribe((e) => console.log(e));
    });
  }

  public goBack() {
    this.router.navigateByUrl('/catalog');
  }
}
