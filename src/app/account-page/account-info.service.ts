import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, first, switchMap } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { authSelector } from 'src/app/state/auth/selectors';
import { AppState } from 'src/app/state/domain';

@Injectable()
export class AccountInfoService {
  constructor(
    private readonly backendService: BackendService,
    private store: Store<AppState>
  ) {}

  public getUserInfo() {
    console.log(1);
    return this.store.select(authSelector).pipe(
      map((userState) => userState.user.userId),
      first(),
      switchMap((e) => this.backendService.auth.getUserInfo$(e))
    );
    // this.backendService.auth.getUserInfo$()
  }

  public getPermissions() {
    return this.store.select(authSelector).pipe(map((e) => e.user.role));
  }
}
