import { Component, OnInit } from '@angular/core';
import { OverlayRootService } from 'src/app/app-core/overlay-root.service';
import { LoginComponent } from './login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private overlay: OverlayRootService) {}

  ngOnInit() {}

  public login() {
    this.overlay
      .show(LoginComponent)
      .onClose()
      .subscribe((result) => {
        this.overlay.clear();
      });
  }
}
