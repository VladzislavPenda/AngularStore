import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SnackService } from './app-core/snack.service';
import { authSelector } from './state/auth/selectors';
import { AppState } from './state/domain';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(
    private store$: Store<AppState>,
    private snackService: SnackService
  ) {}

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store$.select(authSelector).pipe(
      map((e) => {
        if (e.token) return true;

        this.snackService.showConfigured('failed', {
          message: 'Login to get access to your Account',
        });
        return false;
      })
    );
  }
}
