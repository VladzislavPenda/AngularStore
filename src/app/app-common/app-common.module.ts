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

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    AppCommonComponent,
    LogoComponent,
    OverlayComponent,
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
    CommonValueAccessorDirective,
    TextboxComponent,
    IconFontAwesomeSolidComponent,
    ImageViewDirective,
    ImageComponent,
  ],
})
export class AppCommonModule {}
