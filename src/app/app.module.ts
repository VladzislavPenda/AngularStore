import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from './app-common/app-common.module';
import { AppCoreModule } from './app-core/app-core.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { OverlayRootService } from './app-core/overlay-root.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './layout/header/header.module';
import { MenuModule } from './layout/menu/menu.module';
import { reducerMap } from './state';
import { TokenEffects } from './state/auth/effects';
import { CommonModule } from '@angular/common';

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
    AppCoreModule,
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    EffectsModule.forRoot([TokenEffects]),
    StoreModule.forRoot(reducerMap),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
