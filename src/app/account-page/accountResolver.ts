import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { first, map, switchMap } from 'rxjs/operators';
import { BackendService } from '../backend/backend.service';
import { authSelector } from '../state/auth/selectors';
import { AppState } from '../state/domain';

@Injectable()
export class AccountResolver implements Resolve<any> {
  public constructor(
    private readonly backendService: BackendService,
    private store: Store<AppState>
  ) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(authSelector).pipe(
      map((userState) => userState.user.userId),
      first(),
      switchMap((e) => this.backendService.auth.getUserInfo$(e))
    );
  }
}
