import {
  LoginActions,
  LoginActionTypes
} from '../../stores/login/login.actions';
import { Login } from '../../interfaces/login';

export interface LoginState {
  data: Login;
}

export const initialState: LoginState = {
  data: {
    username: null,
    password: null
  }
};

export function reducer(
  state = initialState,
  action: LoginActions
): LoginState {
  switch (action.type) {
    case LoginActionTypes.LOGIN_SUBMITTED: {
      return {
        ...state,
        data: action.payload
      };
    }

    case LoginActionTypes.LOGIN_SUCCESS: {
      return state;
    }

    case LoginActionTypes.LOGIN_RESET: {
      return initialState;
    }

    case LoginActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        data: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.errorMessage
        }
      };
    }

    default: {
      return state;
    }
  }
}
