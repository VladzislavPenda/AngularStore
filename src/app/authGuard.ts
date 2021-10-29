import { state } from '@angular/animations';
import { ApplicationRef, ChangeDetectorRef, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';
import { OverlayRootService } from './app-core/overlay-root.service';
import { SnackConfig, SnackService } from './app-core/snack.service';
import { LoginComponent } from './layout/header/login.component';
import { authSelector } from './state/auth/selectors';
import { AppState } from './state/domain';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(
    private store$: Store<AppState>,
    private overlay: OverlayRootService,
    private snackService: SnackService,
    private ref: ApplicationRef // private readonly cdr: ChangeDetectorRef
  ) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store$.select(authSelector).pipe(
      map(
        (e) => {
          if (e.token) return true;

          this.snackService.showConfigured('success', {
            dictionaryCode: true
              ? 'UnblockCompanySuccess'
              : 'BlockCompanySuccess',
          });
          return false;
        }
        // this.overlay
        //     .show(LoginComponent)
        //     .onClose()
        //     .pipe(
        //       map(() => true),
        //       tap(() => {
        //         this.overlay.clear();
        //       })
        //     )
      )
    );
  }
}
