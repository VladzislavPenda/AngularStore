import { SimpleChanges } from '@angular/core';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { InputComponent } from './input.directive';

@Component({
  providers: [{ provide: InputComponent, useExisting: TextboxComponent }],
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
})
export class TextboxComponent
  extends InputComponent<string>
  implements OnInit, OnChanges
{
  @Input() textType?: 'text' | 'password';
  constructor(private readonly cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {}

  public ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  public onInput(value: string) {
    this.setInteractiveValue(value.trim());
  }

  public setValue(value: TextboxComponent['value']) {
    super.setValue(value);
    this.cdr.detectChanges();
  }

  public setDisabledState(value: boolean): void {
    super.setDisabledState(value);
    this.cdr.detectChanges();
  }

  public isFinite(value: any) {
    return Number.isFinite(value);
  }
}
