import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as WorkerActions from './worker.actions';
import { map, switchMap, withLatestFrom, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../worker.model';

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
      return workers.map(worker => {
        return {
          ...worker,
        };
      });
    }),
    map(workers => {
      return new WorkerActions.SetWorkers(workers);
    })
  )

  @Effect({ dispatch: false })
  addWorker = this.actions$.pipe(ofType(WorkerActions.ADD_WORKER),
    switchMap((actionData) => {
      return this.http.post(
        'http://localhost:5000/add', actionData
      )
    })
  );

  @Effect({ dispatch: false })
  updatedWorker = this.actions$.pipe(ofType(WorkerActions.UPDATE_WORKER),

    switchMap((actionData) => {
      return this.http.post(
        'http://localhost:5000/update', actionData
      )
    })
  );


  @Effect({ dispatch: false })
  getWorker = this.actions$.pipe(ofType(WorkerActions.GET_WORKER),
    //this.store.select('worker'),
    //withLatestFrom(this.store.select('worker')),
    //take(1),
    switchMap((actionData) => {
      console.log(actionData);
      return this.http.put(
        'http://localhost:5000/getWorker', actionData
      )
    })
  );

  @Effect({ dispatch: false })
  createDoc = this.actions$.pipe(ofType(WorkerActions.CREATE_DOC),
    switchMap((actionData) => {
      return this.http.post(
        'http://localhost:5000/createDoc', actionData
      )
    })
  );

}
