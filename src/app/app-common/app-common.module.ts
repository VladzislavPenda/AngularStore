import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonComponent } from './app-common.component';
import { LogoComponent } from './logo/logo/logo.component';
import { OverlayComponent } from './overlay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [AppCommonComponent, LogoComponent, OverlayComponent],
  exports: [LogoComponent, OverlayComponent, ReactiveFormsModule, FormsModule],
})
export class AppCommonModule {}
