import { ActionReducerMap } from '@ngrx/store';
import * as fromWorker from '../workers/store/worker.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromTemplate from '../templates/store/template.reducer';
import * as fromUploadFile from '../upload-file/upload-file-store/reducer';
import * as fromUploadFileState from '../upload-file/upload-file-store/state';
import * as fromDocument from '../documents/store/document.reducer';


export interface AppState {
  worker: fromWorker.State;
  auth: fromAuth.State;
  template: fromTemplate.State;
  uploadFile: fromUploadFileState.State;
  document: fromDocument.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  worker: fromWorker.workerReducer,
  auth: fromAuth.authReducer,
  template: fromTemplate.templateReducer,
  uploadFile: fromUploadFile.featureReducer,
  document: fromDocument.documentReducer
};
