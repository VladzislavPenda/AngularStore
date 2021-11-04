import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BackendService } from 'src/app/backend/backend.service';
import { UserDto } from 'src/app/backend/dto/userDto';
import { AppState } from 'src/app/state/domain';
import { AccountInfoService } from '../account-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
  providers: [AccountInfoService],
})
export class AccountInfoComponent implements OnInit {
  public userContext: Observable<UserDto>;

  constructor(
    private readonly backendService: BackendService,
    private accountInfoService: AccountInfoService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.userContext = this.accountInfoService.getUserInfo();
  }
}
