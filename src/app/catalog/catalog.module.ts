import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { CarCatalogComponent } from './cars/car-catalog.component';
import { CarCatalogHeaderComponent } from './cars/car-catalog-header.component';
import { CarCatalogListComponent } from './cars/car-catalog-list.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { CarListResolver } from './car-list.resolver';

const routes: Routes = [
  {
    path: '',
    // resolve: { data: CarListResolver },
    component: CarCatalogComponent,
  },
  // {
  //   path: '2',
  //   component: CarCatalogListComponent,
  // },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AppCommonModule],
  declarations: [
    CatalogComponent,
    CarCatalogComponent,
    CarCatalogHeaderComponent,
    CarCatalogListComponent,
  ],
  providers: [CarListResolver],
})
export class CatalogModule {}
