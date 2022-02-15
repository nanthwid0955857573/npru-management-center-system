import { MessageResourcesActions, MessageResourcesActionTypes } from "./message-resource.action";

  
export interface MessageResourcesState {
  code: Map<string, string>;
}

export const initialState: MessageResourcesState = {
  code: new Map<string, string>()
}

export function redurer(
  state = initialState,
  action: MessageResourcesActions
): MessageResourcesState {
  switch (action.type) {
    case MessageResourcesActionTypes.MESSAGE_RESOURCES_LOADING: {
      return initialState;
    }

    case MessageResourcesActionTypes.MESSAGE_RESOURCES_LOADED: {
      return {
        ...state,
        code: action.payload
      }
    }

    default: {
      return state;
    }
  }
}
  