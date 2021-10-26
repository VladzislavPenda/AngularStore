import { Injectable, Type } from '@angular/core';
import { Overlay, OverlayConfig, Popup } from '../domain/overlay';

@Injectable({
  providedIn: 'root',
})
export class OverlayRootService implements Overlay {
  private overlayRef: Overlay;
  // constructor(private overlay: Overlay) {
  //   this.overlayRef = overlay
  // }

  public show<T extends Popup<any>>(
    component: Type<T>,
    configuration?: OverlayConfig
  ): T {
    return this.overlayRef.show(component, configuration);
  }

  public clear(): void {
    this.overlayRef.clear();
  }

  public init(component: Overlay) {
    this.overlayRef = component;
  }
}
