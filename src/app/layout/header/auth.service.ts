import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BackendService } from 'src/app/backend/backend.service';
import { RegisterUserDto } from 'src/app/backend/dto/registerUserDto';

@Injectable()
export class AuthService {
  constructor(private backendService: BackendService) {}

  public login(login: string, password: string) {
    return this.backendService.auth.login$(login, password);
  }

  public register(form: FormGroup) {
    const registrationData = this.formToRegisterDto(form);
    return this.backendService.auth.register$(registrationData);
  }

  private formToRegisterDto(form: FormGroup): RegisterUserDto {
    const value = form.value;
    return {
      firstName: value.firstName,
      lastName: value.lastName,
      userName: value.userName,
      password: value.password,
      email: value.email,
      phoneNumber: value.phoneNumber,
      roles: ['User'],
    };
  }
}
