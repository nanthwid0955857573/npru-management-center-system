import { Action } from '@ngrx/store';

export enum LoadingActionTypes {
  OPEN_LOADING_SPINNER = '[Loading Overlay] Open loading overlay',
  CLOSE_LOADING_SPINNER = '[Loading Overlay] Close loading overlay'
}

export class OpenLoadingSpinner implements Action {
  readonly type = LoadingActionTypes.OPEN_LOADING_SPINNER;
  constructor() {}
}

export class CloseLoadingSpinner implements Action {
  readonly type = LoadingActionTypes.CLOSE_LOADING_SPINNER;
  constructor() {}
}

export type LoadingActions = OpenLoadingSpinner | CloseLoadingSpinner;
