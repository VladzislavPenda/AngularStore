import {
  Directive,
  Input,
  Output,
  HostBinding,
  EventEmitter,
} from '@angular/core';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class InputComponent<T> {
  @Input() public label?: string;
  @Input() public value: T | null = null;
  @Input() public autocomplete: string | null = null;
  @Input() public tabindex: string | null | undefined = '0';
  @Output() public valueChange = new EventEmitter<T | null>();
  public disabled?: boolean;

  /**
   * Use ONLY to update the control value as a result of user interaction directly to THIS control.
   */
  public setInteractiveValue(value: T | null) {
    if (value !== this.value) {
      this.value = value;
      this.valueChange.emit(value);
    }
  }

  @HostBinding('attr.tabindex')
  public get tabindexState() {
    return this.disabled ? '-1' : this.tabindex;
  }

  public setValue(value: T | null) {
    this.value = value;
  }

  public setDisabledState(value: boolean): void {
    this.disabled = value;
  }
}
