import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OverlayRootService } from 'src/app/app-core/overlay-root.service';
import { SnackService } from 'src/app/app-core/snack.service';
import { Lot } from 'src/app/catalog/lot/domain';
import { CreateLotComponent } from './car-management-popups/create-lot.component';
import { EditLotComponent } from './car-management-popups/edit-lot.component';
import { CarManagementService } from './car-management.service';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.scss'],
  providers: [CarManagementService],
})
export class CarManagementComponent implements OnInit {
  public items$: Observable<{ list: Lot[]; pages: number }>;
  constructor(
    private carManagementService: CarManagementService,
    private overlay: OverlayRootService,
    private snackbarService: SnackService
  ) {}

  ngOnInit() {
    this.loadCarList();
  }

  public loadCarList() {
    this.items$ = this.carManagementService.loadCarList();
  }

  public createLot() {
    this.overlay
      .show(CreateLotComponent, { alignment: 'right' })
      .onClose()
      .subscribe((e) => {
        this.overlay.clear();
      });
  }

  public editLot() {
    this.overlay
      .show(EditLotComponent, { alignment: 'right' })
      .onClose()
      .subscribe((e) => {
        this.overlay.clear();
      });
  }

  //todo implement
  public deleteLot(lotId: string) {
    this.carManagementService.deleteLot(lotId).subscribe((e) => {
      console.log(e);
      this.snackbarService.showConfigured('success', {
        message: 'Lot was deleted.',
      });

      this.items$ = this.carManagementService.loadCarList();
    });
    console.log(lotId);
  }
}
