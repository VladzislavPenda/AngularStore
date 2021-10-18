import { Directive, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Popup } from '../domain/overlay';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class PopupComponent<T> implements Popup<T>, OnDestroy {
  protected close$ = new Subject<T>();

  /**
   * @returns returns observable, wich emits event for close this popup
   */
  public onClose(): Observable<T> {
    return this.close$.asObservable();
  }

  public ngOnDestroy() {
    if (this.close$) this.close$.complete();
  }

  /**
   * Emits event for closing popup with interaction result
   *
   * @param value result of popup interaction
   */
  public close(value: T) {
    this.close$.next(value);
  }
}
