import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-icon-fontawesome',
  styleUrls: ['./icon-font-awesome.component.scss'],
  template: '<ng-content></ng-content>',
})
export class IconFontAwesomeSolidComponent {}
