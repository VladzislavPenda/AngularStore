import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AppCommonModule } from 'src/app/app-common/app-common.module';

@NgModule({
  imports: [CommonModule, AppCommonModule],
  exports: [MenuComponent],
  declarations: [MenuComponent],
})
export class MenuModule {}
