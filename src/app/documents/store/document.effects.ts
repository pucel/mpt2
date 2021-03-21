import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as DocumentActions from './document.actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CreatedDocument } from '../createdDocument.model';

@Injectable()
export class DocumentEffects {
  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromApp.AppState>) { }

  @Effect()
  fetchDocuments = this.actions$.pipe(
    ofType(DocumentActions.FETCH_DOCUMENTS),
    switchMap((actionData) => {
      return this.http
        .post<CreatedDocument[]>(
          'http://localhost:5000/getdocuments', actionData
        );
    }),
    map(documents => {
      return documents.map(document => {
        return {
          ...document,
        };
      });
    }),
    map(documents => {
      return new DocumentActions.SetDocuments(documents);
    })
  )

  @Effect({ dispatch: false })
  addDocument = this.actions$.pipe(ofType(DocumentActions.ADD_DOCUMENT),
    switchMap((actionData) => {
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
