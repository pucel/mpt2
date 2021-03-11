import { ActionReducerMap } from '@ngrx/store';
import * as fromWorker from '../workers/store/worker.reducer';
import * as fromAuth from '../auth/store/auth.reducer';

export interface AppState {
  worker: fromWorker.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  worker: fromWorker.workerReducer,
  auth: fromAuth.authReducer

};
