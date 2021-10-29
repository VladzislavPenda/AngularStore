import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'info',
  },
  {
    path: 'info',
    component: AccountInfoComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule],
  declarations: [AccountInfoComponent],
})
export class AccountModule {}
