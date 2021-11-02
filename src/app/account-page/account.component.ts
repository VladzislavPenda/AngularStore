import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDto } from '../backend/dto/userDto';
import { AccountInfoService } from './account-info.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [AccountInfoService],
})
export class AccountComponent implements OnInit {
  public userContext: Observable<UserDto>;

  constructor(
    private readonly route: ActivatedRoute,
    private accountInfoService: AccountInfoService
  ) {
    // this.userContext = this.route.snapshot.data.userData;
  }

  ngOnInit() {
    this.userContext = this.accountInfoService.getUserInfo();
  }
}
