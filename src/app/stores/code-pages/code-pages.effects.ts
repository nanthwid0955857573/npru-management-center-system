import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, Observable } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ProgrameCodeService } from "src/app/services/programeCode/programe-code.service";
import { CodePagesActionTypes, CodePagesLoaded, CodePagesLoading } from "./code-pages.actions";

@Injectable()
export class CodePagesEffects {
  constructor(
    private actions: Actions,
    private programeCodeService:ProgrameCodeService
  ) { }

  
  CodePagesLoading: Observable<any> = createEffect(() => this.actions.pipe(
    ofType(CodePagesActionTypes.CODE_PAGES_LOADING),
    switchMap((action: CodePagesLoading) => {
      return this.programeCodeService.currenProgrameCodeData.pipe(
        map((code: any) => {
          let result;
          if (Object.keys(code).length === 0) {
            const programeCodeStr = sessionStorage.getItem('programeCode'); ;
            const decodeProgrameCode = atob(programeCodeStr);
            result = decodeProgrameCode.split(',');
          } else {
            result = code;
          }
          return new CodePagesLoaded(result);
        }),
        catchError((e) => {
          console.error(e);
          return EMPTY;
        })
      )
    })
  ));
}