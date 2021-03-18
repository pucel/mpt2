import { Action } from "@ngrx/store";
import { Template } from '../template.model';


export const FETCH_TEMPLATES = '[Templates] Fetch templates';
export const ADD_TEMPLATE = '[Templates] Add template';
export const UPDATE_TEMPLATE = '[Templates] Update template';
export const GET_TEMPLATE = '[Templates] Get template';
export const DELETE_TEMPLATE = '[Templates] Delete template';
export const SET_TEMPLATES = '[Templates] Set templates';

export class FetchTemplates implements Action {
  readonly type = FETCH_TEMPLATES;

  constructor() { }
}

export class SetTemplates implements Action {
  readonly type = SET_TEMPLATES;

  constructor(public payload: Template[]) { }
}

export class AddTemplate implements Action {
  readonly type = ADD_TEMPLATE;

  constructor(public payload: Template) { }
}

export class UpdateTemplate implements Action {
  readonly type = UPDATE_TEMPLATE;

  constructor(public payload: Template) { }
}

export class GetTemplate implements Action {
  readonly type = GET_TEMPLATE;

  constructor(public payload: string) { }
}

export class DeleteTemplate implements Action {
  readonly type = DELETE_TEMPLATE;

  constructor(public payload: string) { }
}


export type TemplateActions =
  | FetchTemplates
  | AddTemplate
  | UpdateTemplate
  | GetTemplate
  | DeleteTemplate
  | SetTemplates;
