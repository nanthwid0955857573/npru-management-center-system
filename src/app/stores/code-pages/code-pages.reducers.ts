import {
  CodePagesActions,
  CodePagesActionTypes
} from '../code-pages/code-pages.actions';

export interface CodePagesState {
  code: any;
}

export const initialState: CodePagesState = {
  code: null
}

export function redurer(
  state = initialState,
  action: CodePagesActions
): CodePagesState {
  switch (action.type) {
    case CodePagesActionTypes.CODE_PAGES_LOADING: {
      return initialState;
    }

    case CodePagesActionTypes.CODE_PAGES_LOADED: {
      return {
        ...state,
        code: action.payload
      }
    }

    case CodePagesActionTypes.REMOVE_CODE_PAGES: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
