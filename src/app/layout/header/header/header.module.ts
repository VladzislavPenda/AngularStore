import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from 'src/app/app-common/logo/logo/logo.component';
import { AppCommonModule } from 'src/app/app-common/app-common.module';

@NgModule({
  imports: [CommonModule, AppCommonModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule {}
