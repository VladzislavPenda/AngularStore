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
import { TooltipDirective } from './tooltip.directive';
import { SnackComponent } from './snack.component';
import { ConfirmIconComponent } from './confirm-icon.component';
import { ChartCustomComponent } from './chart-custom.component';
import { ExpandDirective } from './expand.directive';
import { ExpandIconComponent } from './expand-icon.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    AppCommonComponent,
    LogoComponent,
    OverlayComponent,
    TooltipDirective,
    SnackComponent,
    CommonValueAccessorDirective,
    TextboxComponent,
    ObjectKeysPipe,
    IconFontAwesomeSolidComponent,
    ImageViewDirective,
    ConfirmIconComponent,
    ImageComponent,
    ChartCustomComponent,
    ExpandDirective,
    ExpandIconComponent,
  ],
  exports: [
    LogoComponent,
    OverlayComponent,
    ReactiveFormsModule,
    SnackComponent,
    FormsModule,
    ObjectKeysPipe,
    TooltipDirective,
    CommonValueAccessorDirective,
    TextboxComponent,
    IconFontAwesomeSolidComponent,
    ImageViewDirective,
    ConfirmIconComponent,
    ImageComponent,
    ChartCustomComponent,
    ExpandDirective,
    ExpandIconComponent,
  ],
})
export class AppCommonModule {}
