import { Action } from "@ngrx/store";
import { Worker } from "../worker.model";
import { DisplayLeft, DisplayRight } from "./worker.reducer";

export const FETCH_WORKERS = '[Workers] Fetch Workers';
export const SET_WORKERS = '[Workers] Set Workers';
export const ADD_WORKER = '[Workers] Add Worker';
export const UPDATE_WORKER = '[Workers] Update Worker';
export const GET_WORKER = '[Workers] Get Worker';
export const CREATE_DOC = '[Workers] Create Doc';
export const DELETE_WORKER = '[Workers] Delete Worker';
export const SET_CURRENT_WORKER = '[Workers] Set Current Worker';
export const SET_WORKER_LIST_STATE = '[Workers] Set Worker list state';
export const UPDATE_STARTED = '[Workers] Update Started';
export const EDIT_WORKER = '[Workers] Edit Worker';
export const SHOW_WORKERS_FILES = '[Workers] Show Workers Files';
export const CREATE_NEW_DOCUMENTS = '[Workers] Create New Documents';
export const SHOW_WORKER_DETAIL = '[Workers] Show Worker Detail';

export class FetchWorkers implements Action {
  readonly type = FETCH_WORKERS;

  constructor() { }
}

export class SetWorkers implements Action {
  readonly type = SET_WORKERS;

  constructor(public payload: Worker[]) { }
}

export class AddWorker implements Action {
  readonly type = ADD_WORKER;

  constructor(public payload: Worker) { }
}

export class UpdateWorker implements Action {
  readonly type = UPDATE_WORKER;

  constructor(public payload: Worker) { }
}

export class GetWorker implements Action {
  readonly type = GET_WORKER;

  constructor(public payload: string) { }
}

export class CreateDoc implements Action {
  readonly type = CREATE_DOC;

  constructor(public payload: { workerId: string, templateId: string }) { }
}

export class DeleteWorker implements Action {
  readonly type = DELETE_WORKER;

  constructor(public payload: string) { }
}

export class SetCurrentWorker implements Action {
  readonly type = SET_CURRENT_WORKER;

  constructor(public payload: Worker) { }
}

// export class SetWorkerListState implements Action {
//   readonly type = SET_WORKER_LIST_STATE;

//   constructor(public payload: WorkerStatus) { }
// }

// export class UpdateStarted implements Action {
//   readonly type = UPDATE_STARTED;

//   constructor(public payload: WorkerStatus) { }
// }

export class EditWorker implements Action {
  readonly type = EDIT_WORKER;

  constructor(public payload: Worker) { }
}

export class ShowWorkersFiles implements Action {
  readonly type = SHOW_WORKERS_FILES;

  constructor(public payload: Worker) { }
}

export class CreateNewDocuments implements Action {
  readonly type = CREATE_NEW_DOCUMENTS;

  constructor(public payload: Worker) { }
}

export class ShowWorkerDetail implements Action {
  readonly type = SHOW_WORKER_DETAIL;

  constructor(public payload: Worker) { }
}




export type WorkerActions =
  | FetchWorkers
  | SetWorkers
  | AddWorker
  | UpdateWorker
  | GetWorker
  | CreateDoc
  | DeleteWorker
  | SetCurrentWorker
  // | SetWorkerListState
  // | UpdateStarted
  | EditWorker
  | ShowWorkersFiles
  | CreateNewDocuments
  | ShowWorkerDetail;
