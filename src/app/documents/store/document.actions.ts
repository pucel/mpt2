import { Action } from "@ngrx/store";
import { Document } from '../document.model';


export const FETCH_DOCUMENTS = '[Documents] Fetch Documents';
export const ADD_DOCUMENT = '[Documents] Add Document';
export const UPDATE_DOCUMENT = '[Documents] Update Document';
export const GET_DOCUMENT = '[Documents] Get Document';
export const DELETE_DOCUMENT = '[Documents] Delete Document';


export class FetchDocuments implements Action {
  readonly type = FETCH_DOCUMENTS;

  constructor() { }
}

export class AddDocument implements Action {
  readonly type = ADD_DOCUMENT;

  constructor(public payload: Document) { }
}

export class UpdateDocument implements Action {
  readonly type = UPDATE_DOCUMENT;

  constructor(public payload: Document) { }
}

export class GetDocument implements Action {
  readonly type = GET_DOCUMENT;

  constructor(public payload: string) { }
}

export class DeleteDocument implements Action {
  readonly type = DELETE_DOCUMENT;

  constructor(public payload: string) { }
}


export type DocumentActions =
  | FetchDocuments
  | AddDocument
  | UpdateDocument
  | GetDocument
  | DeleteDocument;
