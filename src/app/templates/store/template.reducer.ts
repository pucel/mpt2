
import { Template } from '../template.model';
import * as TemplateActions from './template.actions';

export enum DisplayLeft {
  Templates = 'Templates',
  Update = 'Update',
  // Files = 'Files',
  // UpdateCompleted = 'UpdateCompleted',
  // CreateDoc = 'CreateDoc',
  Detail = 'Detail',
  Create = 'Create',
  CreateTemplate = 'CreateTemplate'
}

export enum DisplayRight {
  // Ready = 'Ready',
  // Update = 'Update',
  // Files = 'Files',
  // UpdateCompleted = 'UpdateCompleted',
  // CreateDoc = 'CreateDoc',
  // Detail = 'Detail',
  // Workers = 'Workers',
  Nothing = 'Nothing',
  File = 'File'
}


export interface State {
  templates: Template[];
  currentTemplate: Template;
  displayLeftPanel: DisplayLeft;
  displayRightPanel: DisplayRight;
  templateFile: string;
}

const initialState: State = {
  templates: [],
  currentTemplate: null,
  displayLeftPanel: DisplayLeft.Templates,
  displayRightPanel: DisplayRight.Nothing,
  templateFile: null
}

export function templateReducer(
  state = initialState,
  action: TemplateActions.TemplateActions
) {
  switch (action.type) {
    case TemplateActions.FETCH_TEMPLATES:
      return {
        ...state,
        displayLeftPanel: DisplayLeft.Templates,
        displayRightPanel: DisplayRight.Nothing
      };
    case TemplateActions.SET_TEMPLATES:
      return {
        ...state,
        templates: [...action.payload]
      };
    case TemplateActions.ADD_TEMPLATE:
      return {
        ...state,
        templates: [...state.templates, action.payload],
        displayLeftPanel: DisplayLeft.Templates,
        displayRightPanel: DisplayRight.Nothing
      };
    case TemplateActions.CREATING_NEW_TEMPLATE:
      return {
        ...state,
        displayLeftPanel: DisplayLeft.CreateTemplate
      };
    case TemplateActions.SHOW_TEMPLATE_DETAIL:
      return {
        ...state,
        currentTemplate: action.payload,
        displayLeftPanel: DisplayLeft.Detail,
        displayRightPanel: DisplayRight.File
      };
    case TemplateActions.UPDATE_TEMPLATE:
      return {
        ...state,
        currentTemplate: action.payload,
        displayLeftPanel: DisplayLeft.Update,
        displayRightPanel: DisplayRight.File
      };
    case TemplateActions.SET_TEMPLATE_FILE:
      return {
        ...state,
        templateFile: action.payload
      };
    default:
      return state;
  }


}


