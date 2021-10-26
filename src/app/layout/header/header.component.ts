import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OverlayRootService } from 'src/app/app-core/overlay-root.service';
import { logout, loadToken } from 'src/app/state/auth/action';
import { UserState } from 'src/app/state/auth/domain';
import { authSelector } from 'src/app/state/auth/selectors';
import { AppState } from 'src/app/state/domain';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isAuthorised: boolean = false;
  constructor(
    private overlay: OverlayRootService,
    private store$: Store<AppState>
  ) {
    this.store$.dispatch(loadToken());
    this.store$.select(authSelector).subscribe((e) => {
      if (e != {}) this.isAuthorised = true;
    });
  }

  ngOnInit() {}

  public login() {
    this.overlay
      .show(LoginComponent)
      .onClose()
      .subscribe((result) => {
        this.overlay.clear();
      });
  }

  public register() {
    this.overlay
      .show(RegisterComponent)
      .onClose()
      .subscribe(() => {
        this.overlay.clear();
      });
  }

  public logout() {
    this.store$.dispatch(logout());
    this.isAuthorised = false;
  }
}
