import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../state/auth/domain';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss'],
})
export class AccountHeaderComponent implements OnInit {
  @Input() public userState: UserState;

  constructor() {}

  ngOnInit() {}

  public get role() {
    return this.userState.user.role;
  }
}
