import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import jwtDecode from 'jwt-decode';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/domain/user';
import { logout, loadToken, loadTokenError, loadTokenSuccess } from './action';

function getClaimsFromToken(token: string) {
  const claims = jwtDecode(token);
  const user: User = {
    email: claims['email'],
    role: claims['permission'],
  };

  return user;
}

@Injectable()
export class TokenEffects {
  public constructor(private readonly actions$: Actions) {}

  public loadToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadToken),
      map(() => {
        const token = localStorage.getItem('token');
        const user = getClaimsFromToken(token);
        return { token, user };
      }),
      map((e) => (e ? loadTokenSuccess(e) : loadTokenError()))
    )
  );

  public logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          localStorage.removeItem('token');
        })
      ),
    { dispatch: false }
  );
}
