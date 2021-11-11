import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationComponent } from './administration.component';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { RouterModule, Routes } from '@angular/router';
import { StorageManagementComponent } from './pages/storage-management/storage-management.component';
import { StoreStatisticComponent } from './pages/store-statistic/store-statistic.component';
// import { ChartModule } from 'angular2-chartjs';
import { NgChartsModule } from 'ng2-charts';

// import { ChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule.forChild(routes),
    NgChartsModule,
  ],
  declarations: [
    AdministrationComponent,
    StorageManagementComponent,
    StoreStatisticComponent,
  ],
})
export class AdministrationModule {}
