import { Action } from '@ngrx/store';

export enum MessageResourcesActionTypes {
  MESSAGE_RESOURCES_LOADING = '[MessageResources] get message resource from session',
  MESSAGE_RESOURCES_LOADED = '[MessageResources] loaded message resource from session'
}

export class MessageResourcesLoading implements Action {
  readonly type = MessageResourcesActionTypes.MESSAGE_RESOURCES_LOADING;
  constructor() { }
}

export class MessageResourcesLoaded implements Action {
  readonly type = MessageResourcesActionTypes.MESSAGE_RESOURCES_LOADED;
  constructor(public payload: Map<string, string>) { }
}

export type MessageResourcesActions = MessageResourcesLoading | MessageResourcesLoaded;
