import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from 'src/app/app-common/logo/logo/logo.component';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, AppCommonModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, LoginComponent],
})
export class HeaderModule {}
