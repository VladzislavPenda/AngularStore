import { Directive, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputComponent } from './input.directive';

@Directive({
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { '(valueChange)': 'change($event);', '(focusout)': 'touch();' },
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonValueAccessorDirective),
    },
  ],
  selector:
    '[appValueAccessor][formControlName],[appValueAccessor][formControl]',
})
export class CommonValueAccessorDirective implements ControlValueAccessor {
  public constructor(
    private readonly component: InputComponent<any>
  ) // private readonly elementRef: ElementRef,
  // private readonly renderer: Renderer2
  {}

  public writeValue(obj: any): void {
    if (this.component.value !== obj) this.component.setValue(obj);
  }

  public registerOnChange(fn: any): void {
    this.change = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touch = fn;
  }

  // public setDisabledState(isDisabled: boolean): void {
  //   if (isDisabled) {
  //     this.component.setDisabledState(true);
  //     this.renderer.setAttribute(this.elementRef.nativeElement, 'disabled', '');
  //   } else {
  //     this.component.setDisabledState(false);
  //     this.renderer.removeAttribute(this.elementRef.nativeElement, 'disabled');
  //   }
  // }

  public change = () => {
    /* noop */
  };

  public touch = () => {
    /* noop */
  };
}
