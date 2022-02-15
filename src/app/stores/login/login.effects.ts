import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

// import { AuthenApiService } from '../../services/authentication/authen-api.service';
import {
  LoginFormSubmitted,
  LoginActionTypes,
  LoginSuccess,
  LoginFailure,
  ResetLogin
} from '../../stores/login/login.actions';
// import { SetUserDetail } from 'src/app/stores/user-detail/user-detail.actions';
// import { AppUtils } from '../../services/utils';
// import {
//   OpenLoadingSpinner,
//   CloseLoadingSpinner
// } from 'src/app/stores/loading/spinner.actions';
// import { DialogMessageBoxComponent } from '../../modules/share/components/dialog-message-box/dialog-message-box.component';
// import { DialogMessage } from 'src/app/enums/dailog-message';
// import { Dialog } from 'src/app/consts/dialog';
// import { UserDetail } from 'src/app/interfaces/user-detail';

@Injectable()
export class LoginEffects {
  constructor(
    private actions: Actions,
    private router: Router,
    private store: Store,
    // private utils: AppUtils,
    // private authenApi: AuthenApiService,

  ) {}

  // @Effect()
  // LoginFormSubmitted: Observable<any> = this.actions.pipe(
  //   ofType(LoginActionTypes.LOGIN_SUBMITTED),
  //   map((action: LoginFormSubmitted) => action.payload),
  //   switchMap((payload) => {
  //     this.store.dispatch(new OpenLoadingSpinner());
  //     return this.authenApi.authen(payload.username, payload.password).pipe(
  //       map((userDetl: UserDetail) => {
  //         this.store.dispatch(new CloseLoadingSpinner());
  //         return new LoginSuccess(userDetl);
  //       }),
  //       catchError((e) => {
  //         this.store.dispatch(new CloseLoadingSpinner());
  //         this.dialog.open(DialogMessageBoxComponent, {
  //           data: {
  //             mode: DialogMessage.FAIL,
  //             errorMessage: this.utils.mappingErrorMessage(e.message)
  //           },
  //           minWidth: Dialog.MIN_WIDTH
  //         });
  //         return of(
  //           new LoginFailure({
  //             errorCode: e.error?.statusCode,
  //             errorMessage: e.error?.statusMessage
  //           })
  //         );
  //       })
  //     );
  //   }),
  //   tap(() => this.store.dispatch(new ResetLogin()))
  // );

  // @Effect({ dispatch: false })
  // LoginSuccess: Observable<any> = this.actions.pipe(
  //   ofType(LoginActionTypes.LOGIN_SUCCESS),
  //   tap((resp: any) => {
  //     this.utils.setCookie('accessToken', resp.payload.access_token);

  //     this.authenApi.getProfile().subscribe(
  //       (action: any) => {
  //         this.store.dispatch(new SetUserDetail(action));
  //         if (action.forceChangePassword) {
  //           this.router.navigateByUrl('/change-password');
  //         } else {
  //           this.router.navigateByUrl('/');
  //         }
  //       },
  //       (error: any) => {
  //         console.error(error);
  //         this.utils.showMessageBox(DialogMessage.FAIL, error);
  //       }
  //     );
  //   })
  // );

  
  LoginFailure: Observable<any> = createEffect(() => this.actions.pipe(
    ofType(LoginActionTypes.LOGIN_FAILURE),
    tap((action: LoginFailure) => {})
  ), { dispatch: false });
}
