import { Action } from '@ngrx/store';
import { Login } from '../../interfaces/login';
import { UserDetail } from '../../interfaces/user-detail';

export enum LoginActionTypes {
  LOGIN_SUBMITTED = '[Login] Login form submitted',
  LOGIN_SUCCESS = '[Login] Login success',
  LOGIN_FAILURE = '[Login] Login failure',
  LOGIN_RESET = '[Login] Reset login form',
}

export class LoginFormSubmitted implements Action {
  readonly type = LoginActionTypes.LOGIN_SUBMITTED;
  constructor(public payload: Login) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: UserDetail) {}
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LOGIN_FAILURE;
  constructor(public payload: Login) {}
}

export class ResetLogin implements Action {
  readonly type = LoginActionTypes.LOGIN_RESET;
  constructor() {}
}

export type LoginActions =
  LoginFormSubmitted
  | LoginSuccess
  | LoginFailure
  | ResetLogin;
