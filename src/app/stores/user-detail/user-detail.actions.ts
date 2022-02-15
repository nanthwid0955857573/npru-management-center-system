import { Action } from '@ngrx/store';

export enum UserDetailActionTypes {
  SET_USER_DETAIL = '[User Detail] Set user detail',
  REMOVE_USER_DETAIL = '[User Detail] Remove user detail',
}

export class SetUserDetail implements Action {
  readonly type = UserDetailActionTypes.SET_USER_DETAIL;
  constructor(public payload: any) {}
}

export class RemoveUserDetail implements Action {
  readonly type = UserDetailActionTypes.REMOVE_USER_DETAIL;
  constructor() {}
}

export type UserDetailActions = SetUserDetail | RemoveUserDetail;
