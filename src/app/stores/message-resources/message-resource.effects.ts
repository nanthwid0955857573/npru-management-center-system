import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, Observable } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { MessageResourceService } from "./../services/message-resource/message-resource.service";
import { MessageResourcesActionTypes, MessageResourcesLoaded, MessageResourcesLoading } from "./message-resource.action";

@Injectable()
export class MessageResourcesEffects {
  constructor(
    private actions: Actions,
    private messageResourceService:MessageResourceService
  ) { }

  
  MessageResourcesLoading: Observable<any> = createEffect(() => this.actions.pipe(
    ofType(MessageResourcesActionTypes.MESSAGE_RESOURCES_LOADING),
    switchMap((action: MessageResourcesLoading) => {
      return this.messageResourceService.currenMassageResourceData.pipe(
        map((code: Map<string, string>) => {
          return new MessageResourcesLoaded(code);
        }),
        catchError((e) => {
          console.error(e);
          return EMPTY;
        })
      )
    })
  ));
}