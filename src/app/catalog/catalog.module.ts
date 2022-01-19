import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarCatalogComponent } from './cars/car-catalog.component';
import { CarCatalogHeaderComponent } from './cars/car-catalog-header.component';
import { CarCatalogListComponent } from './cars/car-catalog-list.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { CarLotComponent } from './lot/car-lot.component';

const routes: Routes = [
  {
    path: '',
    component: CarCatalogComponent,
  },
  {
    path: ':id',
    component: CarLotComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AppCommonModule],
  declarations: [
    CarCatalogComponent,
    CarCatalogHeaderComponent,
    CarCatalogListComponent,
    CarLotComponent,
  ],
})
export class CatalogModule {}
