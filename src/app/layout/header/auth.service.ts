import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BackendService } from 'src/app/backend/backend.service';
import { AppState } from 'src/app/state/domain';

@Injectable()
export class AuthService {
  constructor(private backendService: BackendService) {}

  public login(login: string, password: string) {
    return this.backendService.auth.login$(login, password);
  }

  public register() {}
}
