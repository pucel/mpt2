import { Action } from "@ngrx/store";
import { Template } from '../template.model';


export const FETCH_TEMPLATES = '[Templates] Fetch templates';
export const ADD_TEMPLATE = '[Templates] Add template';
export const UPDATE_TEMPLATE = '[Templates] Update template';
export const GET_TEMPLATE = '[Templates] Get template';
export const DELETE_TEMPLATE = '[Templates] Delete template';
export const SET_TEMPLATES = '[Templates] Set templates';
export const CREATING_NEW_TEMPLATE = '[Templates] Creating New Template';
export const SHOW_TEMPLATE_DETAIL = '[Templates] Show Template Detail';
export const SET_TEMPLATE_FILE = '[Templates] Set Template File';

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

  constructor(public payload: Template) { }
}

export class DeleteTemplate implements Action {
  readonly type = DELETE_TEMPLATE;

  constructor(public payload: Template) { }
}


export class CreatingNewTemplate implements Action {
  readonly type = CREATING_NEW_TEMPLATE;

  constructor() { }
}

export class ShowTemplateDetail implements Action {
  readonly type = SHOW_TEMPLATE_DETAIL;

  constructor(public payload: Template) { }
}

export class SetTemplateFile implements Action {
  readonly type = SET_TEMPLATE_FILE;

  constructor(public payload: string) { }
}


export type TemplateActions =
  | FetchTemplates
  | AddTemplate
  | UpdateTemplate
  | GetTemplate
  | DeleteTemplate
  | SetTemplates
  | CreatingNewTemplate
  | ShowTemplateDetail
  | SetTemplateFile;
