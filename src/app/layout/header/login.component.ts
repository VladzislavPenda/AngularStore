import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import jwtDecode from 'jwt-decode';
import { PopupComponent } from 'src/app/app-common/popup.component';
import { BackendService } from 'src/app/backend/backend.service';
import { User } from 'src/app/domain/user';
import { setToken } from 'src/app/state/auth/action';
import { AppState } from 'src/app/state/domain';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../app-common/styles/popup.scss'],
})
export class LoginComponent extends PopupComponent<void> implements OnInit {
  public form: FormGroup;
  public error: number;

  constructor(
    private store$: Store<AppState>,
    private fb: FormBuilder,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: null,
      password: null,
    });
  }

  public login() {
    const value = this.form.value;
    this.authService.login(value.login, value.password).subscribe(
      (data: any) => {
        const token: string = data.token;
        const claims = jwtDecode(token);
        const user: User = {
          email: claims['email'],
          role: claims['permission'],
        };

        localStorage.setItem('token', token);
        // localStorage.setItem('userEmail', user.email);
        // localStorage.setItem('userRole', user.role);

        this.store$.dispatch(setToken({ token, user }));
        this.close();
      },
      (err) => {
        console.log(err);
        this.error = err.status;
        this.cdr.detectChanges();
      }
    );
  }
}
