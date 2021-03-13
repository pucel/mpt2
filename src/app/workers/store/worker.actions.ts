import { Action } from "@ngrx/store";
import { Worker } from "../worker.model";

export const FETCH_WORKERS = '[Workers] Fetch Workers';
export const SET_WORKERS = '[Workers] Set Workers';
export const ADD_WORKER = '[Workers] Add Worker';
export const UPDATE_WORKER = '[Workers] Update Worker';
export const GET_WORKER = '[Workers] Get Worker';
export const CREATE_DOC = '[Workers] Create Doc';
export const DELETE_WORKER = '[Workers] Delete Worker';

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

  constructor(public payload: string) { }
}

export class DeleteWorker implements Action {
  readonly type = DELETE_WORKER;

  constructor(public payload: string) { }
}


export type WorkerActions =
  | FetchWorkers
  | SetWorkers
  | AddWorker
  | UpdateWorker
  | GetWorker
  | CreateDoc
  | DeleteWorker;
