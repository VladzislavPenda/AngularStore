import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppCommonModule } from './app-common/app-common.module';
import { OverlayRootService } from './app-core/overlay-root.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './layout/header/header.module';
import { MenuModule } from './layout/menu/menu.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
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
