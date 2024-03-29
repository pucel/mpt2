import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as WorkerActions from './worker.actions';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../worker.model';
import * as DocumentActions from '../../documents/store/document.actions';

@Injectable()
export class WorkerEffects {
  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromApp.AppState>) { }

  @Effect()
  fetchWorkers = this.actions$.pipe(
    ofType(WorkerActions.FETCH_WORKERS),
    switchMap(() => {
      return this.http
        .get<Worker[]>(
          'http://localhost:5000/get'
        );
    }),
    map(workers => {
      return new WorkerActions.SetWorkers(workers);
    })
  )

  @Effect()
  updatedWorker = this.actions$.pipe(
    ofType(WorkerActions.UPDATE_WORKER),
    switchMap((actionData) => {
      return this.http
        .put<Worker[]>(
          'http://localhost:5000/update', actionData
        )
    }),
    map(workers => {
      return new WorkerActions.SetWorkers(workers);
    })
  );

  @Effect()
  createDoc = this.actions$.pipe(
    ofType(WorkerActions.CREATE_DOC),
    switchMap((actionData) => {
      return this.http.put<string>(
        'http://localhost:5000/createDoc', actionData
      );
    }),
    map(fileName => {
      console.log('fileName');
      console.log(fileName);
      return new WorkerActions.DisplayDocument(fileName);
    })




    // map(downloadedDoc => {
    //   const blob = new Blob([downloadedDoc], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    //   const url = window.URL.createObjectURL(blob);

    //   return new WorkerActions.DisplayDocument(url);
    //   window.open(url);
    // })
  )

  @Effect()
  addWorker = this.actions$.pipe(ofType(WorkerActions.ADD_WORKER),
    switchMap((actionData) => {
      return this.http.put<Worker[]>(
        'http://localhost:5000/add', actionData
      )
    }),
    map(workers => {
      console.log('map set workers');
      return new WorkerActions.SetWorkers(workers);
    })
  );

  @Effect({ dispatch: false })
  getWorker = this.actions$.pipe(ofType(WorkerActions.GET_WORKER),
    switchMap((actionData) => {
      return this.http.put(
        'http://localhost:5000/getWorker', actionData
      )
    })
  );

  @Effect()
  deleteWorker = this.actions$.pipe(ofType(WorkerActions.DELETE_WORKER),
    switchMap((actionData) => {
      return this.http.put<Worker[]>(
        'http://localhost:5000/deleteWorker', actionData
      )
    }),
    map(workers => {
      return new WorkerActions.SetWorkers(workers);
    })
  );

  @Effect()
  displayDoc = this.actions$.pipe(
    ofType(WorkerActions.DISPLAY_DOCUMENT),
    switchMap((actionData) => {
      console.log('actionData');
      console.log(actionData);
      return this.http.put<Blob>(
        'http://localhost:5000/getdocument', actionData, { responseType: 'blob' as 'json' }
      );
    }),
    map(downloadedDoc => {
      const blob = new Blob([downloadedDoc], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = window.URL.createObjectURL(blob);
      console.log(url);
      return new DocumentActions.DisplayDocument(url);
      //window.open(url);
    })
  )
}
