import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonComponent } from './app-common.component';
import { LogoComponent } from './logo/logo/logo.component';
import { OverlayComponent } from './overlay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonValueAccessorDirective } from './common-value-accessor.directive';
import { TextboxComponent } from './textbox.component';
import { InputComponent } from './input.directive';
import { IconFontAwesomeSolidComponent } from './icon-font-awesome.component';
import { ImageViewDirective } from './image-view.directive';
import { ImageComponent } from './image.component';
import { ObjectKeysPipe } from './app-object.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipDirective } from './tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    // BrowserAnimationsModule,
  ],
  declarations: [
    AppCommonComponent,
    LogoComponent,
    OverlayComponent,
    TooltipDirective,
    CommonValueAccessorDirective,
    TextboxComponent,
    ObjectKeysPipe,
    IconFontAwesomeSolidComponent,
    ImageViewDirective,
    ImageComponent,
  ],
  exports: [
    LogoComponent,
    OverlayComponent,
    ReactiveFormsModule,
    FormsModule,
    ObjectKeysPipe,
    TooltipDirective,
    CommonValueAccessorDirective,
    TextboxComponent,
    IconFontAwesomeSolidComponent,
    ImageViewDirective,
    // BrowserAnimationsModule,
    MatTooltipModule,
    ImageComponent,
  ],
})
export class AppCommonModule {}
