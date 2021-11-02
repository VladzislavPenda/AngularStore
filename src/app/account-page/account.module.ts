import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountComponent } from './account.component';
import { AccountHeaderComponent } from './account-header.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { BusketComponent } from './busket/busket.component';
import { AccountResolver } from './accountResolver';

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
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule],
  declarations: [
    AccountInfoComponent,
    AccountComponent,
    AccountHeaderComponent,
    OrderHistoryComponent,
    BusketComponent,
  ],
  // providers: [AccountResolver],
})
export class AccountModule {}
