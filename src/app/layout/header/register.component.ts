import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PopupComponent } from 'src/app/app-common/popup.component';
import { authSelector } from 'src/app/state/auth/selectors';
import { AppState } from 'src/app/state/domain';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/state/auth/domain';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends PopupComponent<void> implements OnInit {
  public userState$: Observable<UserState>;

  constructor(private store$: Store<AppState>) {
    super();
    this.userState$ = this.store$.pipe(select(authSelector));
  }

  ngOnInit() {
    this.userState$ = this.store$.pipe(select(authSelector));
    let d = this.store$.pipe(select(authSelector));
    d.subscribe((e) => console.log(e));
  }

  public register() {
    this.close();
  }
}
