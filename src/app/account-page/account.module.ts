import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account.component';
import { AccountHeaderComponent } from './account-header.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { BusketComponent } from './busket/busket.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { AdministrationGuard } from './administrationGuard';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    // resolve: { userData: AccountResolver },
    children: [
      {
        path: 'info',
        component: AccountInfoComponent,
      },
      {
        path: 'orders',
        component: OrderHistoryComponent,
      },
      {
        path: 'busket',
        component: BusketComponent,
      },
      {
        path: 'administration',
        canActivate: [AdministrationGuard],
        loadChildren: () =>
          import('./administration/administration.module').then(
            (e) => e.AdministrationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule,
    AppCommonModule,
  ],
  declarations: [
    AccountInfoComponent,
    AccountComponent,
    AccountHeaderComponent,
    OrderHistoryComponent,
    BusketComponent,
  ],
  providers: [AdministrationGuard],
})
export class AccountModule {}
