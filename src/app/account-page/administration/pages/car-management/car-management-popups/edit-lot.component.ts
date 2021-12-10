import { Component, OnInit } from '@angular/core';
import { PopupComponent } from 'src/app/app-common/popup.component';

@Component({
  selector: 'app-edit-lot',
  templateUrl: './edit-lot.component.html',
  styleUrls: ['./edit-lot.component.scss'],
})
export class EditLotComponent extends PopupComponent<void> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
