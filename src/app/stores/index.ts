import { createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromLogin from './../stores/login/login.reducers';
import * as fromUserDetail from './../stores/user-detail/user-detail.reducers';
import * as fromSpinner from './../stores/loading/spinner.reducers';
import * as fromCodePages from './../stores/code-pages/code-pages.reducers';
import * as fromMessageResources from './../stores/message-resources/message-resource.reducers';

export interface State {
  login: fromLogin.LoginState;
  userDetail: fromUserDetail.UserDetailState;
  loadingOverlay: fromSpinner.LoadingState;
  codePages: fromCodePages.CodePagesState;
  messageResources: fromMessageResources.MessageResourcesState;
}

export const reducers: ActionReducerMap<State> = {
  login: fromLogin.reducer,
  userDetail: fromUserDetail.reducer,
  loadingOverlay: fromSpinner.reducer,
  codePages: fromCodePages.redurer,
  messageResources: fromMessageResources.redurer
};

export const loginState = (state: State) => state.login;
export const userDetailState = (state: State) => state.userDetail;
export const loadingState = (state: State) => state.loadingOverlay;
export const codePagesState = (state: State) => state.codePages;
export const messageResourcesState = (state: State) => state.messageResources;

export const login = createSelector(
  loginState,
  (state: fromLogin.LoginState) => state.data
);

export const userDetail = createSelector(
  userDetailState,
  (state: fromUserDetail.UserDetailState) => state.data
);

export const loadingOverlay = createSelector(
  loadingState,
  (state: fromSpinner.LoadingState) => state.openned
);

export const codePages = createSelector(
  codePagesState,
  (state: fromCodePages.CodePagesState) => state.code
)

export const messageResources = createSelector(
  messageResourcesState,
  (state: fromMessageResources.MessageResourcesState) => state.code
)
