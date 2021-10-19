import { Component, OnInit } from '@angular/core';
import { PopupComponent } from 'src/app/app-common/popup.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends PopupComponent<void> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  public register() {
    this.close();
  }
}
