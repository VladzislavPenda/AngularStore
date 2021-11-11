import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendModule } from '../backend/backend.module';
import { AppCommonModule } from '../app-common/app-common.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataInterceptor } from './data.interceptor';

@NgModule({
  imports: [BackendModule],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true },
  ],
})
export class AppCoreModule {}
