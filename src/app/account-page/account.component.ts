import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserDto } from '../backend/dto/userDto';
import { UserState } from '../state/auth/domain';
import { authSelector } from '../state/auth/selectors';
import { AppState } from '../state/domain';
import { AccountInfoService } from './account-info.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public userState: UserState;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.select(authSelector).subscribe((e) => (this.userState = e));
  }
}
