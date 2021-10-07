import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonComponent } from './app-common.component';
import { LogoComponent } from './logo/logo/logo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppCommonComponent, LogoComponent],
  exports: [LogoComponent],
})
export class AppCommonModule {}
