import { Component, OnInit, ViewChild } from '@angular/core';
import { OverlayComponent } from './app-common/overlay.component';
import { OverlayRootService } from './app-core/overlay-root.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularStore';
  @ViewChild(OverlayComponent, { static: true })
  private overlay!: OverlayComponent;

  constructor(private overlayRootService: OverlayRootService) {}

  public ngOnInit() {
    this.overlayRootService.init(this.overlay);
  }
}
