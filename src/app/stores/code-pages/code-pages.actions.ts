import { Action } from '@ngrx/store';

export enum CodePagesActionTypes {
  CODE_PAGES_LOADING = '[CodePages] get code pages from session',
  CODE_PAGES_LOADED = '[CodePages] loaded code pages from session',
  REMOVE_CODE_PAGES = '[CodePages] remive code pages from session',
}

export class CodePagesLoading implements Action {
  readonly type = CodePagesActionTypes.CODE_PAGES_LOADING;
  constructor() { }
}

export class CodePagesLoaded implements Action {
  readonly type = CodePagesActionTypes.CODE_PAGES_LOADED;
  constructor(public payload: any) { }
}

export class RemoveCodePages implements Action {
  readonly type = CodePagesActionTypes.REMOVE_CODE_PAGES;
  constructor() {}
}

export type CodePagesActions = CodePagesLoading | CodePagesLoaded | RemoveCodePages;
