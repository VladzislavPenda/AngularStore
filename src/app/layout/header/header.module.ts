import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppCommonModule } from 'src/app/app-common/app-common.module';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, AppCommonModule, RouterModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, LoginComponent, RegisterComponent],
  providers: [AuthService],
})
export class HeaderModule {}
