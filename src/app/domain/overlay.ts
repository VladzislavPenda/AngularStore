import { Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';

export interface Popup<T> {
  onClose(): Observable<T>;
}

export interface OverlayConfig {
  inputs?: { [key: string]: any };
  injector?: Injector;
  alignment?: 'center' | 'right';
}

export interface Overlay {
  show<T extends Popup<any>>(
    component: Type<T>,
    configuration?: OverlayConfig
  ): T;

  clear(): void;
}
