import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Lot } from 'src/app/catalog/lot/domain';
import { CarManagementService } from './car-management.service';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.scss'],
  providers: [CarManagementService],
})
export class CarManagementComponent implements OnInit {
  public items$: Observable<{ list: Lot[]; pages: number }>;
  constructor(private carManagementService: CarManagementService) {}

  ngOnInit() {
    this.loadCarList();
  }

  public loadCarList() {
    this.items$ = this.carManagementService.loadCarList();
  }
}
