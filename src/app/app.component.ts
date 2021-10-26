import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { OverlayComponent } from './app-common/overlay.component';
import { OverlayRootService } from './app-core/overlay-root.service';
import { loadToken, setToken } from './state/auth/action';
import { AppState } from './state/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularStore';
  @ViewChild(OverlayComponent, { static: true })
  private overlay: OverlayComponent;

  constructor(
    private overlayRootService: OverlayRootService,
    private store$: Store<AppState>
  ) {}

  public ngOnInit() {
    this.overlayRootService.init(this.overlay);
    this.store$.dispatch(loadToken());
  }
}
