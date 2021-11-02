import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, first, switchMap } from 'rxjs/operators';
import { BackendService } from 'src/app/backend/backend.service';
import { UserDto } from 'src/app/backend/dto/userDto';
import { authSelector } from 'src/app/state/auth/selectors';
import { AppState } from 'src/app/state/domain';
import { AccountInfoService } from '../account-info.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss'],
})
export class AccountInfoComponent implements OnInit {
  public userContext: Observable<UserDto>;

  constructor(
    private readonly backendService: BackendService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}
}
