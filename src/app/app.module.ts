import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from './app-common/app-common.module';
import { OverlayRootService } from './app-core/overlay-root.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './layout/header/header.module';
import { MenuModule } from './layout/menu/menu.module';

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
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
  ],
  providers: [OverlayRootService],
  bootstrap: [AppComponent],
})
export class AppModule {}
