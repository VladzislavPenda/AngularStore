import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from './app-common/app-common.module';
import { AppCoreModule } from './app-core/app-core.module';
import { AuthGuard } from './authGuard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'catalog',
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then((e) => e.CatalogModule),
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    // pathMatch: 'full',
    loadChildren: () =>
      import('./account-page/account.module').then((e) => e.AccountModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    AppCommonModule,
    AppCoreModule,
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
