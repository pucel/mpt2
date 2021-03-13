import { ActionReducerMap } from '@ngrx/store';
import * as fromWorker from '../workers/store/worker.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromDocument from '../documents/store/document.reducer';

export interface AppState {
  worker: fromWorker.State;
  auth: fromAuth.State;
  document: fromDocument.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  worker: fromWorker.workerReducer,
  auth: fromAuth.authReducer,
  document: fromDocument.documentReducer
};
