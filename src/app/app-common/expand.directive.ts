import {
  Directive,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appExpand]',
  exportAs: 'appExpandItem',
})
export class ExpandDirective {
  @Input() public expandTemplate: TemplateRef<any>;
  @Input() public expandContext: any;

  private view: any;

  constructor(private vcr: ViewContainerRef) {}

  public isExpanded() {
    return this.view ? true : false;
  }

  @HostListener('click')
  public changeExpandableView() {
    if (this.view) {
      this.vcr.clear();
      this.view = null;
      return;
    }

    this.view = this.vcr.createEmbeddedView(this.expandTemplate, {
      $implicit: this.expandContext,
    });
  }
}
