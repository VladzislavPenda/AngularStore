import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { authSelector } from '../state/auth/selectors';
import { AppState } from '../state/domain';

@Injectable()
export class AdministrationGuard implements CanActivate {
  public constructor(private store$: Store<AppState>, private router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store$.select(authSelector).pipe(
      map((e) => {
        if (e.user.role === 'Administrator') return true;

        this.router.navigateByUrl('');
        return false;
      })
    );
  }
}
