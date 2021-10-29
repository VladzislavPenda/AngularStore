import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from './app-common/app-common.module';
import { AppCoreModule } from './app-core/app-core.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './layout/header/header.module';
import { reducerMap } from './state';
import { TokenEffects } from './state/auth/effects';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './authGuard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppCoreModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([TokenEffects]),
    StoreModule.forRoot(reducerMap),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
