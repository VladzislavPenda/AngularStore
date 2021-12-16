import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarCatalogService } from '../cars/car-catalog.service';
import { CarLotService } from './car-lot.service';
import { Lot } from './domain';

@Component({
  selector: 'app-car-lot',
  templateUrl: './car-lot.component.html',
  styleUrls: ['./car-lot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CarLotService],
})
export class CarLotComponent implements OnInit {
  public lot$: Observable<Lot>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly service: CarLotService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((e) => {
      const id = e.get('id');
      this.lot$ = this.service.loadLot(id);
    });
  }

  public isLotInCart(lotId: string) {
    console.log(this.service.isLotInCart(lotId));
    return this.service.isLotInCart(lotId);
  }

  public goBack() {
    this.router.navigateByUrl('/catalog');
  }

  public addToCart(lotId: string) {
    this.service.addLotToCart(lotId);
    this.cdr.detectChanges();
  }

  public removeFromCart(lotId: string) {
    this.service.removeLotFromCart(lotId);
    this.cdr.detectChanges();
  }
}
