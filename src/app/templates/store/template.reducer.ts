
import { Template } from '../template.model';
import * as TemplateActions from './template.actions';

export enum DisplayLeft {
  Templates = 'Templates',
  Update = 'Update',
  // Files = 'Files',
  // UpdateCompleted = 'UpdateCompleted',
  // CreateDoc = 'CreateDoc',
  Detail = 'Detail',
  // Workers = 'Workers',
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
  Nothing = 'Nothing'
}


export interface State {
  templates: Template[];
  currentTemplate: Template;
  displayLeftPanel: DisplayLeft;
  displayRightPanel: DisplayRight;
}

const initialState: State = {
  templates: [],
  currentTemplate: null,
  displayLeftPanel: DisplayLeft.Templates,
  displayRightPanel: DisplayRight.Nothing
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
        templates: [...state.templates, action.payload]
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
        displayLeftPanel: DisplayLeft.Detail
      };
    case TemplateActions.UPDATE_TEMPLATE:
      return {
        ...state,
        currentTemplate: action.payload,
        displayLeftPanel: DisplayLeft.Update
      };
    default:
      return state;
  }


}


