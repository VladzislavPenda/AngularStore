import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Renderer2,
  ChangeDetectorRef,
  Type,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  HostBinding,
} from '@angular/core';
import { Overlay, OverlayConfig } from '../domain/overlay';

@Component({
  selector: 'app-overlay',
  template: '<div><ng-container #container></ng-container></div>',
  styleUrls: ['./overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayComponent implements Overlay {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  private container!: ViewContainerRef;
  public alignment: 'center' | 'right' = 'center';

  public constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly renderer: Renderer2,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public show<T>(component: Type<T>, configuration?: OverlayConfig) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(component);

    this.container.clear();
    if (configuration?.alignment) this.alignment = configuration.alignment;
    const componentRef = this.container.createComponent(
      componentFactory,
      0,
      configuration?.injector
    );
    this.renderer.setAttribute(
      componentRef.location.nativeElement,
      'role',
      'dialog'
    );
    if (configuration && configuration.inputs) {
      for (const key of Object.keys(configuration.inputs))
        (componentRef.instance as any)[key] = configuration.inputs[key];
      const onChanges = componentRef.instance as any as OnChanges;
      if (onChanges.ngOnChanges) {
        const changes: SimpleChanges = {};
        for (const key of Object.keys(configuration.inputs)) {
          (onChanges as any)[key] = configuration.inputs[key];
          changes[key] = new SimpleChange(
            undefined,
            configuration.inputs[key],
            false
          );
        }
        onChanges.ngOnChanges(changes);
      }
    }
    this.cdr.markForCheck();
    return componentRef.instance;
  }

  public clear() {
    this.alignment = 'center';
    this.container.clear();
  }

  @HostBinding('style.display')
  public get display() {
    return this.container.length > 0 ? undefined : 'none';
  }

  @HostBinding('class.right')
  public get isRight() {
    return this.alignment === 'right';
  }

  @HostBinding('class.center')
  public get isCenter() {
    return this.alignment === 'center';
  }
}
