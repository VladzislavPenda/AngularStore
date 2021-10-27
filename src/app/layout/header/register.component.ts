import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PopupComponent } from 'src/app/app-common/popup.component';
import { authSelector } from 'src/app/state/auth/selectors';
import { AppState } from 'src/app/state/domain';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/state/auth/domain';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../../app-common/styles/popup.scss',
  ],
})
export class RegisterComponent extends PopupComponent<void> implements OnInit {
  public isSubmitted: boolean;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    super();
    this.form = this.ToForm();
  }

  ngOnInit() {}

  public register() {
    console.log(this.form);
    if (
      this.form.value.password == this.form.value.retypePassword
      // this.form.valid
    ) {
      this.authService.register(this.form).subscribe(
        () => {
          this.close();
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.isSubmitted = true;
    }
    this.close();
  }

  private ToForm() {
    return this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      retypePassword: [null, [Validators.required]],
      mobilePhone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }
}

function mobilePhoneValidator(
  control: AbstractControl
): ValidationErrors | null {
  return null;
}
