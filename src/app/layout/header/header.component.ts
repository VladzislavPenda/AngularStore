import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { OverlayRootService } from 'src/app/app-core/overlay-root.service';
import { User } from 'src/app/domain/user';
import { logout } from 'src/app/state/auth/action';
import { UserState } from 'src/app/state/auth/domain';
import { authSelector } from 'src/app/state/auth/selectors';
import { AppState } from 'src/app/state/domain';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public isAuthorised: boolean;
  public user: User;
  constructor(
    private overlay: OverlayRootService,
    private store$: Store<AppState>,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.store$
      .select(authSelector)
      .pipe(map((e) => e.user))
      .subscribe((e) => {
        if (e != undefined) this.isAuthorised = true;
        this.user = e;
        // this.cdr.detectChanges();
        // return e;
      });
  }

  public login() {
    this.overlay
      .show(LoginComponent)
      .onClose()
      .subscribe(() => {
        this.overlay.clear();
        this.cdr.detectChanges();
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
