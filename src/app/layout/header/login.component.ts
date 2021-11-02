import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import jwtDecode from 'jwt-decode';
import { map } from 'rxjs/operators';
import { PopupComponent } from 'src/app/app-common/popup.component';
import { User } from 'src/app/domain/user';
import { setToken } from 'src/app/state/auth/action';
import { authSelector } from 'src/app/state/auth/selectors';
import { AppState } from 'src/app/state/domain';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../app-common/styles/popup.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends PopupComponent<void> implements OnInit {
  public isSubmitted: boolean;
  public form: FormGroup;
  public error: number;

  constructor(
    private store$: Store<AppState>,
    private fb: FormBuilder,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  public login() {
    const value = this.form.value;
    if (this.form.valid) {
      this.authService.login(value.login, value.password).subscribe(
        (data: any) => {
          const token: string = data.token;
          const claims = jwtDecode(token);
          const user: User = {
            email: claims['email'],
            role: claims['permission'],
            userName: claims['username'],
            userId: claims['userId'],
          };

          localStorage.setItem('token', token);
          this.store$.dispatch(setToken({ token, user }));

          // this.store$.select(authSelector).pipe(
          //   map((e) => {
          //     console.log(e);
          //   })
          // );
          this.close();
        },
        (err) => {
          console.log(err);
          this.error = err.status;
          this.cdr.detectChanges();
        }
      );
    } else {
      this.form.markAllAsTouched();
      this.isSubmitted = true;
      this.error = undefined;
    }
  }
}
