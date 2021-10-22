import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopupComponent } from 'src/app/app-common/popup.component';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../app-common/styles/popup.scss'],
})
export class LoginComponent extends PopupComponent<void> implements OnInit {
  public form = this.fb.group({
    login: null,
    password: null,
  });

  constructor(private fb: FormBuilder, private backendService: BackendService) {
    super();
  }

  ngOnInit() {}

  public login() {
    const value = this.form.value;
    this.backendService.auth.login$(value.login, value.password);
    this.close();
  }
}
