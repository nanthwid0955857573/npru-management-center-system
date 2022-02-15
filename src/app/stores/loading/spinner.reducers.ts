import {
  LoadingActions,
  LoadingActionTypes
} from '../../stores/loading/spinner.actions';

export interface LoadingState {
  openned: boolean;
}

export const initialState: LoadingState = {
  openned: false
};

export function reducer(
  state = initialState,
  action: LoadingActions
): LoadingState {
  switch (action.type) {
    case LoadingActionTypes.OPEN_LOADING_SPINNER: {
      return {
        ...state,
        openned: true
      };
    }

    case LoadingActionTypes.CLOSE_LOADING_SPINNER: {
      return {
        ...state,
        openned: false
      };
    }

    default: {
      return state;
    }
  }
}
