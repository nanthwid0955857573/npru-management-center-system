import {
  UserDetailActions,
  UserDetailActionTypes
} from '../../stores/user-detail/user-detail.actions';

export interface UserDetailState {
  data: any;
}

export const initialState: UserDetailState = {
  data: null
};

export function reducer(
  state = initialState,
  action: UserDetailActions
): UserDetailState {
  switch (action.type) {
    case UserDetailActionTypes.SET_USER_DETAIL: {
      return {
        ...state,
        data: action.payload
      };
    }

    case UserDetailActionTypes.REMOVE_USER_DETAIL: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
