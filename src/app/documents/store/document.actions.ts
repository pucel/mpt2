import { Action } from "@ngrx/store";
import { CreatedDocument } from '../createdDocument.model';
import { Worker } from '../../workers/worker.model';

export const FETCH_DOCUMENTS = '[Documents] Fetch Documents';
export const ADD_DOCUMENT = '[Documents] Add Document';
export const SET_DOCUMENTS = '[Documents] Set Documents';

export class FetchDocuments implements Action {
  readonly type = FETCH_DOCUMENTS;

  constructor(public payload: string) { }
}

export class SetDocuments implements Action {
  readonly type = SET_DOCUMENTS;

  constructor(public payload: CreatedDocument[]) { }
}

export class AddDocument implements Action {
  readonly type = ADD_DOCUMENT;

  constructor(public payload: CreatedDocument) { }
}




export type DocumentActions =
  | FetchDocuments
  | AddDocument
  | SetDocuments;


