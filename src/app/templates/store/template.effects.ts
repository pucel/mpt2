import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as TemplateActions from './template.actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Template } from '../template.model';

@Injectable()
export class TemplateEffects {
  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromApp.AppState>) { }

  @Effect()
  fetchTemplates = this.actions$.pipe(
    ofType(TemplateActions.FETCH_TEMPLATES),
    switchMap(() => {
      return this.http
        .get<Template[]>(
          'http://localhost:5000/gettemplates'
        );
    }),
    map(templates => {
      return templates.map(template => {
        return {
          ...template,
        };
      });
    }),
    map(templates => {
      return new TemplateActions.SetTemplates(templates);
    })
  )

  @Effect({ dispatch: false })
  addtemplate = this.actions$.pipe(ofType(TemplateActions.ADD_TEMPLATE),
    switchMap((actionData) => {
      console.log('effect');
      console.log(actionData);
      return this.http.post(
        'http://localhost:5000/addtemplate', actionData
      )
    })
  );

  // @Effect({ dispatch: false })
  // updatedWorker = this.actions$.pipe(ofType(templateActions.UPDATE_WORKER),
  //   switchMap((actionData) => {
  //     return this.http.post(
  //       'http://localhost:5000/update', actionData
  //     )
  //   })
  // );


  // @Effect({ dispatch: false })
  // getWorker = this.actions$.pipe(ofType(templateActions.GET_WORKER),
  //   switchMap((actionData) => {
  //     return this.http.put(
  //       'http://localhost:5000/getWorker', actionData
  //     )
  //   })
  // );

  // @Effect({ dispatch: false })
  // deleteWorker = this.actions$.pipe(ofType(templateActions.DELETE_WORKER),
  //   switchMap((actionData) => {
  //     return this.http.put(
  //       'http://localhost:5000/deleteWorker', actionData
  //     )
  //   })
  // );

  // @Effect({ dispatch: false })
  // createDoc = this.actions$.pipe(ofType(templateActions.CREATE_DOC),
  //   switchMap((actionData) => {
  //     return this.http.post(
  //       'http://localhost:5000/createDoc', actionData
  //     )
  //   })
  // );

}
